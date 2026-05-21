// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/37-loan-provision/loan-provision.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_loan_provision } from "./loan-provision.po";

describe("37. Loan Provision Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");

  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.mfiAdminUserId,
        d.credential.mfiAdminPassword
      );

      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("37.01. Verify that the Loan Provision List page loads successfully.", function () {
    grid_loan_provision.gridLoanProvisionListPage();
  });

  it("37.02. Verify that the Loan Provision Submit button functions correctly.", function () {
    grid_loan_provision.provisionSubmitButton();
  });

  it("37.03. Verify that the Loan Provision 'No' button functions correctly.", function () {
    grid_loan_provision.provisionNoButton();
  });

  it("37.04. Verify that the Loan Provision 'Yes' button functions correctly.", function () {
    grid_loan_provision.provisionYesButton();
  });

  it("37.05. Verify that the Loan Provision 'OK' button functions correctly.", function () {
    grid_loan_provision.provisionOkButton();
  });

  it("37.06. Verify that the grid list content changes correctly from English to Bangla.", function () {
    grid_loan_provision.gridLanguageSwitchCheck();
  });
});