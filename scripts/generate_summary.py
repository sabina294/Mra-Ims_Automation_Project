#!/usr/bin/env python3

import os
import json
import shutil
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo
from bs4 import BeautifulSoup
from premailer import transform
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# === Configs ===
SUMMARY_FILE = '/app/nginx/summary.html'
REPORTS_DIR = '/app/nginx/reports'
BACKUP_FILE = './scripts/summary.html'
CYPRESS_REPORT_DIR = './cypress/reports'

# Email settings (configure before sending)
SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587
SMTP_USER = 'noreply.celac@gmail.com'
SMTP_PASSWORD = 'abqvoxzuwixftzpd'
EMAIL_FROM = 'noreply.celac@gmail.com'
# EMAIL_TO = ["tanim1109135@gmail.com"]
EMAIL_TO = ["tanim1109135@gmail.com", "sabina.yeasmin.9701@gmail.com", "moshiur251@gmail.com", "litonbd100@gmail.com"]

def format_duration_ms(duration_ms):
    total_seconds = int(round(duration_ms / 1000))
    minutes, seconds = divmod(total_seconds, 60)
    if minutes > 0:
        return f"{minutes}m {seconds}s"
    else:
        return f"{seconds}s"


def get_cypress_summary_data(cypress_report_dir):
    report_files = [f for f in os.listdir(cypress_report_dir) if f.endswith('.json')]
    if not report_files:
        raise FileNotFoundError("No Cypress JSON report files found.")

    latest_report_file = max(report_files, key=lambda x: os.path.getctime(os.path.join(cypress_report_dir, x)))

    with open(os.path.join(cypress_report_dir, latest_report_file), 'r', encoding='utf-8') as f:
        report_data = json.load(f)

    stats = report_data.get("stats", {})

    total_suites = stats.get("suites", 0)
    total_tests = stats.get("tests", 0)
    passed = stats.get("passes", 0)
    failed = stats.get("failures", 0)
    pending = stats.get("pending", 0)
    skipped = stats.get("skipped", 0)

    duration_ms = stats.get("duration", 0)
    duration = format_duration_ms(duration_ms)

    start_time = stats.get("start", "")
    end_time = stats.get("end", "")

    if start_time:
        try:
            dt_utc = datetime.fromisoformat(start_time.rstrip('Z')).replace(tzinfo=ZoneInfo('UTC'))
            dt_dhaka = dt_utc.astimezone(ZoneInfo('Asia/Dhaka'))
            start_time = dt_dhaka.strftime('%Y-%m-%d %H:%M:%S')
        except Exception:
            pass

    if end_time:
        try:
            dt_utc = datetime.fromisoformat(end_time.rstrip('Z')).replace(tzinfo=ZoneInfo('UTC'))
            dt_dhaka = dt_utc.astimezone(ZoneInfo('Asia/Dhaka'))
            end_time = dt_dhaka.strftime('%Y-%m-%d %H:%M:%S')
        except Exception:
            pass

    report_date = datetime.now().strftime('%Y-%m-%d')
    report_link = f"reports/{report_date}.html"

    return total_suites, total_tests, passed, failed, pending, skipped, duration, start_time, end_time, report_link


def ensure_summary_file_exists():
    if not os.path.exists(SUMMARY_FILE):
        if os.path.exists(BACKUP_FILE):
            shutil.copy(BACKUP_FILE, SUMMARY_FILE)
            print(f"Copied backup summary.html to {SUMMARY_FILE}")
        else:
            raise FileNotFoundError(f"Neither {SUMMARY_FILE} nor backup {BACKUP_FILE} exist.")


def add_summary_row_to_html(date_str, total_suites, total_tests, passed, failed, pending, skipped, duration, start_time, end_time, report_link):
    with open(SUMMARY_FILE, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    h1_tag = soup.find('h1')
    if h1_tag:
        h1_tag.string = "IMS2 Test Result Summary Report"

    tbody = soup.find('tbody')
    if tbody is None:
        raise ValueError("No <tbody> found in summary.html")

    new_row = soup.new_tag('tr')

    def new_td(text, css_class=None, data_label=None):
        td = soup.new_tag('td')
        if css_class:
            td['class'] = css_class
        if data_label:
            td['data-label'] = data_label
        td.append(soup.new_string(str(text)))
        return td

    new_row.append(new_td("", data_label="#"))
    new_row.append(new_td(date_str, data_label="Date"))
    new_row.append(new_td(total_suites, data_label="Total Suites"))
    new_row.append(new_td(total_tests, data_label="Total Tests"))
    new_row.append(new_td(passed, css_class='pass', data_label="Passed"))
    new_row.append(new_td(failed, css_class='fail', data_label="Failed"))
    new_row.append(new_td(pending, data_label="Pending"))
    new_row.append(new_td(skipped, data_label="Skipped"))
    new_row.append(new_td(duration, css_class='duration', data_label="Duration"))
    new_row.append(new_td(start_time, data_label="Start"))
    new_row.append(new_td(end_time, data_label="End"))

    td_link = soup.new_tag('td', **{'class': 'report-link', 'data-label': 'Report Link'})
    a_tag = soup.new_tag('a', href=report_link, target='_blank', rel='noopener noreferrer', **{'class': 'report-link'})
    a_tag.string = 'View'
    td_link.append(a_tag)
    new_row.append(td_link)

    tbody.insert(0, new_row)

    # Update serial numbers
    for idx, row in enumerate(tbody.find_all('tr'), start=1):
        first_td = row.find('td')
        if first_td:
            first_td.string.replace_with(str(idx))

    footer_tag = soup.find('footer', class_='footer-update')
    update_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    footer_text = f"Last updated on {update_time}"
    if footer_tag:
        footer_tag.string.replace_with(footer_text)
    else:
        new_footer = soup.new_tag('footer', **{'class': 'footer-update'})
        new_footer.string = footer_text
        soup.body.append(new_footer)

    with open(SUMMARY_FILE, 'w', encoding='utf-8') as f:
        f.write(str(soup.prettify(formatter="html")))

    print(f"Added summary row for date {date_str}, updated header and footer in {SUMMARY_FILE}")


def copy_report_to_nginx_reports(date_str, cypress_report_dir):
    if not os.path.exists(REPORTS_DIR):
        os.makedirs(REPORTS_DIR)

    source_report_path = os.path.join(cypress_report_dir, "index.html")
    destination_report_path = os.path.join(REPORTS_DIR, f"{date_str}.html")

    if not os.path.exists(source_report_path):
        raise FileNotFoundError(f"Cypress report index.html not found in {cypress_report_dir}")

    shutil.copy(source_report_path, destination_report_path)
    print(f"Copied Cypress report to {destination_report_path}")


def get_summary_html_content():
    with open(SUMMARY_FILE, 'r', encoding='utf-8') as f:
        return f.read()


def send_email(subject, html_body, smtp_server, smtp_port, smtp_user, smtp_password, from_addr, to_addrs):
    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = from_addr
    msg['To'] = ', '.join(to_addrs)

    part = MIMEText(html_body, 'html')
    msg.attach(part)

    try:
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.sendmail(from_addr, to_addrs, msg.as_string())
        print("Email sent successfully.")
    except Exception as e:
        print(f"Failed to send email: {e}")


def main():
    date_str = datetime.now().strftime('%Y-%m-%d')

    # Compose dynamic email subject with current date
    subject = f"[IMS2-Cypress] Test Summary Report || {date_str}"

    total_suites, total_tests, passed, failed, pending, skipped, duration, start_time, end_time, report_link = get_cypress_summary_data(CYPRESS_REPORT_DIR)

    ensure_summary_file_exists()

    add_summary_row_to_html(date_str, total_suites, total_tests, passed, failed, pending, skipped, duration, start_time, end_time, report_link)

    copy_report_to_nginx_reports(date_str, CYPRESS_REPORT_DIR)

    raw_html = get_summary_html_content()
    html_body = transform(raw_html)

    send_email(
        subject=subject,
        html_body=html_body,
        smtp_server=SMTP_SERVER,
        smtp_port=SMTP_PORT,
        smtp_user=SMTP_USER,
        smtp_password=SMTP_PASSWORD,
        from_addr=EMAIL_FROM,
        to_addrs=EMAIL_TO
    )

if __name__ == "__main__":
    main()
