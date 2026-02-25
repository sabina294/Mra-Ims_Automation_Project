// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/38-loan-provision/loan-provision.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_loan_provision } from "./loan-provision.po";

describe("38. Loan provision Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.branchManagerUserId,
        d.credential.branchManagerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("38.01. Verify Loan waiver Grid List Page loads successfully", function () {
    grid_loan_provision.gridLoanProvisionListPage();
  });

  it("38.02. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_loan_provision.gridLanguageSwitchCheck();
  });
});
