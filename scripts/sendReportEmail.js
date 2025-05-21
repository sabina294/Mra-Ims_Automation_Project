"use strict";

const fs = require('fs');
const path = require('path');
const moment = require('moment');
const nodemailer = require('nodemailer');

async function sendEmail() {
  const transporter = nodemailer.createTransport({
    "host": "smtp.gmail.com",
    "port": 587,
    "secure": false, // true for 465, false for other ports
    "service": "gmail",
    auth: {
      user: "noreply.celac@gmail.com",
      pass: "abqvoxzuwixftzpd"
    },
  });

  const reportPath = path.resolve(__dirname, '..', 'cypress/reports/html/index.html');
  const reportHtml = fs.readFileSync(reportPath, 'utf-8');
  const today = moment().format('YYYY-MM-DD');

  let info = await transporter.sendMail({
    from: 'noreply.celac@gmail.com',
    to: ['tanim1109135@gmail.com', 'sabina.yeasmin.9701@gmail.com'],
    subject: `[IMS2] Automation Report || ${today}`,
    html: "See attachments",
    attachments: [{ filename: 'report.html', path: reportPath }]
  });

  console.log('Email sent:', info.messageId);
}

sendEmail().catch(console.error);
