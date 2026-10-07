// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/51-loan-rebate/loan-rebate.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_rebate } from "./loan-rebate.po";

describe("51. Loan Rebate Module Test Cases", function () {
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

  it("51.01. Verify that the Loan Rebate Grid List page loads successfully", function () {
    create_loan_rebate.gridLoanRebateListPage();
  });

  it("51.02. Verify that the Reset button on the Loan Rebate Create page clears all entered input values", function () {
    create_loan_rebate.createResetButtonCheck();
  });

  it("51.03. Verify that validation messages are displayed for required fields when submitting the form with empty inputs", function () {
    create_loan_rebate.createValidationMessageCheck();
  });

  it("51.04. Verify that clicking the Draft button on the Loan Rebate Create page redirects the user to the Loan Rebate List page", function () {
    create_loan_rebate.createDraftButtonCheck();
  });

  it("51.05. Verify that clicking the Go Back button on the Loan Rebate Create page redirects the user to the Loan Rebate List page", function () {
    create_loan_rebate.createGoBackButtonCheck();
  });

  it("51.06. Verify that clicking the Add icon button on the Loan Rebate Create page functions successfully", function () {
    create_loan_rebate.createAddIconButtonCheck();
  });

  it("51.07. Verify that clicking the Remove icon button on the Loan Rebate Create page functions successfully", function () {
    create_loan_rebate.createRemoveIconButtonCheck();
  });

  it("51.08. Verify successful creation of a Loan Rebate record by the Branch Manager role", function () {
    create_loan_rebate.createLoanRebate();
  });

  it("51.09. Verify that the Action button performs the expected operation successfully", function () {
    create_loan_rebate.actionButtonCheck();
  });

  it("51.10. Verify successful viewing of Loan Rebate information", function () {
    create_loan_rebate.viewLoanRebate();
  });

  it("51.11. Verify that clicking the Go Back button on the Loan Rebate View page redirects the user to the Loan Rebate List page", function () {
    create_loan_rebate.viewGoBackButton();
  });

  it("51.12. Verify that the user can filter inactive Loan Rebate records using the Status dropdown", function () {
    create_loan_rebate.statusInactiveDropdownCheck();
  });

  it("51.13. Verify that the user can filter active Loan Rebate records using the Status dropdown", function () {
    create_loan_rebate.statusActiveDropdownCheck();
  });

  it("51.14. Verify successful search results by Loan Rebate name", function () {
    create_loan_rebate.searchInLoanRebateName();
  });

  it("51.15. Verify successful reset of the Grid List using the Reset button on the Loan Rebate page", function () {
    create_loan_rebate.gridResetButtonCheck();
  });

  it("51.16. Verify successful refresh of the Grid List using the Refresh button on the Loan Rebate page", function () {
    create_loan_rebate.gridRefreshButtonCheck();
  });

  it("51.17. Verify that clicking the Search button on the Loan Rebate Grid page displays the correct search results", function () {
    create_loan_rebate.gridSearchButtonCheck();
  });

  it("51.18. Verify that the Loan Rebate breadcrumb is correct.", function () {
    create_loan_rebate.listBreadcrumbCheck();
  });

  it("51.19. Verify that all required Loan Rebate columns are displayed.", function () {
    create_loan_rebate.requiredGridColumnsCheck();
  });

  it("51.20. Verify that records contain valid identifiers and loan, rebated and payable amounts, or show No Data.", function () {
    create_loan_rebate.recordsOrEmptyStateCheck();
  });

  it("51.21. Verify that office, samity, status, date and search controls are visible.", function () {
    create_loan_rebate.filterControlsCheck();
  });

  it("51.22. Verify that a nonexistent search displays No Data.", function () {
    create_loan_rebate.noResultSearchCheck();
  });

  it("51.23. Verify that Reset clears an unmatched search and restores the list.", function () {
    create_loan_rebate.resetSearchCheck();
  });

  it("51.24. Verify that Refresh keeps the Loan Rebate list and records or empty state available.", function () {
    create_loan_rebate.refreshListStateCheck();
  });

  it("51.25. Verify that Add New Loan Rebate is visible and enabled.", function () {
    create_loan_rebate.addButtonCheck();
  });

  it("51.26. Verify that the Grid List content changes correctly from English to Bangla after language switch", function () {
    create_loan_rebate.gridLanguageSwitchCheck();
  });
});