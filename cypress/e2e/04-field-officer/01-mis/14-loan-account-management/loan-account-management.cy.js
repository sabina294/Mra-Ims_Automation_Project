// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/14-loan-account-management/loan-account-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_loan_account_management } from "./loan-account-management.po";

describe("14. Loan Account Management Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.fieldOfficerUserId,
        d.credential.fieldOfficerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("14.01. Verify that the Loan Account Management grid list page loads successfully.", function () {
    grid_loan_account_management.gridLoanAccountManagementListPage();
  });

  it("14.02. Verify that the correct action is performed when the Action button is clicked.", function () {
    grid_loan_account_management.actionButtonCheck();
  });

  it("14.03. Verify that Loan Account Management information is viewed successfully.", function () {
    grid_loan_account_management.viewLoanAccountManagement();
  });

  // it("14.04. Verify that clicking the Go Back button on the Loan Account Management view page redirects the user to the list page.", function () {
  //   grid_loan_account_management.viewGoBackButton();
  // });

  it("14.05. Verify that the user can filter inactive Loan Account Management records using the Status dropdown on the list page.", function () {
    grid_loan_account_management.statusInactiveDropdownCheck();
  });

  it("14.06. Verify that the user can filter active Loan Account Management records using the Status dropdown.", function () {
    grid_loan_account_management.statusActiveDropdownCheck();
  });

  it("14.07. Verify that the user can successfully search Loan Account Management records by name.", function () {
    grid_loan_account_management.searchInLoanAccountName();
  });

  it("14.08. Verify that the user can filter Loan Account Management records using the Samity dropdown on the list page.", function () {
    grid_loan_account_management.samityDropdownCheck();
  });

  it("14.09. Verify that the grid list resets successfully when the Reset button is clicked.", function () {
    grid_loan_account_management.gridResetButtonCheck();
  });

  it("14.10. Verify that the grid list refreshes successfully when the Refresh button is clicked.", function () {
    grid_loan_account_management.gridRefreshButtonCheck();
  });

  it("14.11. Verify that clicking the Search button redirects or updates the Loan Account Management list correctly.", function () {
    grid_loan_account_management.gridSearchButtonCheck();
  });

  it("14.12. Verify that the grid list content correctly switches between English and Bangla languages.", function () {
    grid_loan_account_management.gridLanguageSwitchCheck();
  });
});
