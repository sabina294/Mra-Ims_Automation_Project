#!/bin/bash


echo "Running Cypress tests..."
# npx cypress run --spec "cypress/e2e/mra-admin/01-login/login.cy.js,\
# cypress/e2e/mra-admin/02-logout/logout.cy.js" --headless

npx cypress run --headless
echo "Sending report email..."
python3 scripts/generate_summary.py
echo "Test Done."
