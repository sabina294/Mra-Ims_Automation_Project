#!/bin/bash


echo "Running Cypress tests..."

# npx cypress run --spec "cypress/e2e/mra-admin/01-login/login.cy.js,\
# cypress/e2e/mra-admin/02-logout/logout.cy.js,\
# cypress/e2e/mra-admin/07-bank-branch/bank-branch.cy.js" --headless

npx cypress run --headless

echo "Sending report email..."
node scripts/sendReportEmail.js

echo "Test Done."
