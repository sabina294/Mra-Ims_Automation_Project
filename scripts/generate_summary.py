#!/usr/bin/env python3

import os
import json
import shutil
from datetime import datetime, timedelta
from bs4 import BeautifulSoup

SUMMARY_FILE = '/app/nginx/summary.html'
REPORTS_DIR = '/app/nginx/reports'
BACKUP_FILE = './scripts/summary.html'
cypress_report_dir = './cypress/reports'

def get_cypress_summary_data(cypress_report_dir):
    # Get the latest JSON file from the cypress/reports directory
    report_files = [f for f in os.listdir(cypress_report_dir) if f.endswith('.json')]
    if not report_files:
        raise FileNotFoundError("No Cypress JSON report files found.")

    latest_report_file = max(report_files, key=lambda x: os.path.getctime(os.path.join(cypress_report_dir, x)))

    # Read the JSON content
    with open(os.path.join(cypress_report_dir, latest_report_file), 'r', encoding='utf-8') as f:
        report_data = json.load(f)

    stats = report_data.get("stats", {})

    total_suites = stats.get("suites", 0)
    total_tests = stats.get("tests", 0)
    passed = stats.get("passes", 0)
    failed = stats.get("failures", 0)
    pending = stats.get("pending", 0)
    skipped = stats.get("skipped", 0)

    # Duration is in milliseconds, convert to HH:MM:SS format
    duration_ms = stats.get("duration", 0)
    duration = str(timedelta(milliseconds=duration_ms))

    # Get start and end times (ISO 8601 format or timestamp)
    start_time = stats.get("start", "")
    end_time = stats.get("end", "")

    # Optional: format start and end datetime strings for display if present
    if start_time:
        try:
            start_dt = datetime.fromisoformat(start_time.rstrip('Z'))
            start_time = start_dt.strftime('%Y-%m-%d %H:%M:%S')
        except Exception:
            pass  # keep original if parsing fails

    if end_time:
        try:
            end_dt = datetime.fromisoformat(end_time.rstrip('Z'))
            end_time = end_dt.strftime('%Y-%m-%d %H:%M:%S')
        except Exception:
            pass

    # Construct the report link (cypress/YYYY-MM-DD.html)
    report_date = datetime.now().strftime('%Y-%m-%d')
    report_link = f"cypress/{report_date}.html"

    return total_suites, total_tests, passed, failed, pending, skipped, duration, start_time, end_time, report_link

def ensure_summary_file_exists():
    if not os.path.exists(SUMMARY_FILE):
        if os.path.exists(BACKUP_FILE):
            shutil.copy(BACKUP_FILE, SUMMARY_FILE)
        else:
            raise FileNotFoundError(f"Neither {SUMMARY_FILE} nor {BACKUP_FILE} exist.")

def add_summary_row_to_html(date_str, total_suites, total_tests, passed, failed, pending, skipped, duration, start_time, end_time, report_link):
    # Open summary.html file
    with open(SUMMARY_FILE, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # Update <h1> text with the latest update date
    h1_tag = soup.find('h1')
    if h1_tag:
        h1_tag.string = f"IMS2 Test Result Summary Report"

    tbody = soup.find('tbody')
    if tbody is None:
        raise ValueError("No <tbody> found in summary.html")

    # Create new row with the Cypress test summary data
    new_row = soup.new_tag('tr')

    def new_td(text, css_class=None):
        td = soup.new_tag('td')
        if css_class:
            td['class'] = css_class
        td.string = str(text)
        return td

    # Serial No. placeholder, will update later
    new_row.append(new_td(""))

    # Add the summary data into the row
    new_row.append(new_td(date_str))
    new_row.append(new_td(total_suites))
    new_row.append(new_td(total_tests))
    new_row.append(new_td(passed, css_class='pass'))
    new_row.append(new_td(failed, css_class='fail'))
    new_row.append(new_td(pending))
    new_row.append(new_td(skipped))
    new_row.append(new_td(duration, css_class='duration'))
    new_row.append(new_td(start_time))
    new_row.append(new_td(end_time))

    # Add report link
    td_link = soup.new_tag('td')
    a_tag = soup.new_tag('a', href=report_link, target='_blank', **{'class': 'report-link'})
    a_tag.string = 'View Report'
    td_link.append(a_tag)
    new_row.append(td_link)

    # Insert new row at the top of tbody
    tbody.insert(0, new_row)

    # Update Serial No. for all rows (first <td>)
    rows = tbody.find_all('tr')
    for idx, row in enumerate(rows, start=1):
        first_td = row.find('td')
        if first_td:
            first_td.string = str(idx)

    # Update footer with the updated time
    footer_tag = soup.find('footer', class_='footer-update')
    update_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    footer_text = f"Last updated on {update_time}"

    if footer_tag:
        footer_tag.string = footer_text
    else:
        new_footer = soup.new_tag('footer', **{'class': 'footer-update'})
        new_footer.string = footer_text
        soup.body.append(new_footer)

    # Write updated content back to summary.html
    with open(SUMMARY_FILE, 'w', encoding='utf-8') as f:
        f.write(str(soup.prettify(formatter="html")))

    print(f"Added summary row for date {date_str}, updated <h1>, and footer in {SUMMARY_FILE}")

def copy_report_to_nginx_reports(date_str, cypress_report_dir):
    # Ensure the directory exists
    if not os.path.exists(REPORTS_DIR):
        os.makedirs(REPORTS_DIR)

    # Copy the latest Cypress report (index.html) into the /app/nginx/reports directory
    source_report_path = os.path.join(cypress_report_dir, "index.html")
    destination_report_path = os.path.join(REPORTS_DIR, f"{date_str}.html")

    if not os.path.exists(source_report_path):
        raise FileNotFoundError(f"Cypress report index.html not found in {cypress_report_dir}")

    shutil.copy(source_report_path, destination_report_path)
    print(f"Copied Cypress report to {destination_report_path}")

def main():
    date_str = datetime.now().strftime('%Y-%m-%d')

    # Get Cypress summary data including new columns
    total_suites, total_tests, passed, failed, pending, skipped, duration, start_time, end_time, report_link = get_cypress_summary_data(cypress_report_dir)

    # Ensure the summary.html exists
    ensure_summary_file_exists()

    # Add summary data to summary.html with new columns
    add_summary_row_to_html(date_str, total_suites, total_tests, passed, failed, pending, skipped, duration, start_time, end_time, report_link)

    # Copy the Cypress report to the /app/nginx/reports directory
    copy_report_to_nginx_reports(date_str, cypress_report_dir)

if __name__ == "__main__":
    main()
