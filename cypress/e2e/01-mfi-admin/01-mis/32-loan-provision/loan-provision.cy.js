// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/32-loan-provision/loan-provision.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_loan_provision } from "./loan-provision.po";

describe("32. Loan Provision Module Test Cases", function () {
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
  it("32.01. Verify loan provision List Page loads successfully.", function () {
    grid_loan_provision.gridLoanProvisionListPage();
  });

  it("32.02. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_loan_provision.gridLanguageSwitchCheck();
  });
});
