// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/31-loan-account-management/loan-account-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_account_management } from "./loan-account-management.po";

describe("31. Loan Account Management Module Test Cases", function () {
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

  it("31.01. Verify that the Loan Account Management grid list page loads successfully", function () {
    create_loan_account_management.gridLoanAccountManagementListPage();
  });

  it("31.02. Verify that the action button performs the expected action successfully", function () {
    create_loan_account_management.actionButtonCheck();
  });

  it("31.03. Verify that Loan Account Management details can be viewed successfully", function () {
    create_loan_account_management.viewLoanAccountManagement();
  });

  it("31.04. Verify that clicking the Go Back button redirects the user to the Loan Account Management list page", function () {
    create_loan_account_management.viewGoBackButton();
  });

  it("31.05. Verify that inactive Loan Account Management records can be filtered using the Status dropdown", function () {
    create_loan_account_management.statusInactiveDropdownCheck();
  });

  it("31.06. Verify that active Loan Account Management records can be filtered using the Status dropdown", function () {
    create_loan_account_management.statusActiveDropdownCheck();
  });

  it("31.07. Verify that the user can successfully search Loan Account Management records by name", function () {
    create_loan_account_management.searchInLoanAccountName();
  });

  it("31.08. Verify that the Reset button clears all filters and restores the default grid list", function () {
    create_loan_account_management.gridResetButtonCheck();
  });

  it("31.09. Verify that the Refresh button reloads the Loan Account Management grid list successfully", function () {
    create_loan_account_management.gridRefreshButtonCheck();
  });

  it("31.10. Verify that clicking the Search button redirects and displays the Loan Account Management list page correctly", function () {
    create_loan_account_management.gridSearchButtonCheck();
  });

  it("31.11. Verify that the grid list content switches correctly between English and Bangla", function () {
    create_loan_account_management.gridLanguageSwitchCheck();
  });
});
