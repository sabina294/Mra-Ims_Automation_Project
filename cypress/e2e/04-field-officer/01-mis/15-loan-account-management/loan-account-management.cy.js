// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/15-loan-account-management/loan-account-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_loan_account_management } from "./loan-account-management.po";

describe("15. Loan Account Management Module Test Cases", function () {
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

  it("15.01. Verify that the Loan Account Management grid list page loads successfully.", function () {
    grid_loan_account_management.gridLoanAccountManagementListPage();
  });

  it("15.02. Verify that the correct action is performed when the Action button is clicked.", function () {
    grid_loan_account_management.actionButtonCheck();
  });

  it("15.03. Verify that Loan Account Management information is viewed successfully.", function () {
    grid_loan_account_management.viewLoanAccountManagement();
  });

  // it("15.04. Verify that clicking the Go Back button on the Loan Account Management view page redirects the user to the list page.", function () {
  //   grid_loan_account_management.viewGoBackButton();
  // });

  it("15.05. Verify that the user can filter inactive Loan Account Management records using the Status dropdown on the list page.", function () {
    grid_loan_account_management.statusInactiveDropdownCheck();
  });

  it("15.06. Verify that the user can filter active Loan Account Management records using the Status dropdown.", function () {
    grid_loan_account_management.statusActiveDropdownCheck();
  });

  it("15.07. Verify that the user can successfully search Loan Account Management records by name.", function () {
    grid_loan_account_management.searchInLoanAccountName();
  });

  it("15.08. Verify that the user can filter Loan Account Management records using the Samity dropdown on the list page.", function () {
    grid_loan_account_management.samityDropdownCheck();
  });

  it("15.09. Verify that the grid list resets successfully when the Reset button is clicked.", function () {
    grid_loan_account_management.gridResetButtonCheck();
  });

  it("15.10. Verify that the grid list refreshes successfully when the Refresh button is clicked.", function () {
    grid_loan_account_management.gridRefreshButtonCheck();
  });

  it("15.11. Verify that clicking the Search button redirects or updates the Loan Account Management list correctly.", function () {
    grid_loan_account_management.gridSearchButtonCheck();
  });

  it("15.12. Verify Loan Account Management: the list displays the correct breadcrumb.", function () {
    grid_loan_account_management.listBreadcrumbCheck();
  });

  it("15.13. Verify Loan Account Management: the grid displays all required columns.", function () {
    grid_loan_account_management.requiredGridColumnsCheck();
  });

  it("15.14. Verify Loan Account Management: displayed rows contain identifiers, names and status.", function () {
    grid_loan_account_management.gridRecordDataCheck();
  });

  it("15.15. Verify Loan Account Management: loan terms and amounts contain valid non-negative numbers.", function () {
    grid_loan_account_management.loanAmountsCheck();
  });

  it("15.16. Verify Loan Account Management: the list displays office, status and search controls.", function () {
    grid_loan_account_management.searchControlsCheck();
  });

  it("15.17. Verify Loan Account Management: a non-existing record search displays No Data.", function () {
    grid_loan_account_management.noResultSearchCheck();
  });

  it("15.18. Verify Loan Account Management: Reset clears an unsuccessful search and restores records.", function () {
    grid_loan_account_management.resetRestoresGridCheck();
  });

  it("15.19. Verify Loan Account Management: pagination starts on the first page.", function () {
    grid_loan_account_management.firstPagePaginationCheck();
  });

  it("15.20. Verify that the grid list content correctly switches between English and Bangla languages.", function () {
    grid_loan_account_management.gridLanguageSwitchCheck();
  });
});
