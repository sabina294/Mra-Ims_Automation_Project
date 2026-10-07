// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/52-loan-waiver/loan-waiver.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_waiver } from "./loan-waiver.po";

describe("52. Loan waiver Module Test Cases", function () {
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
  it("52.01. Verify that the Loan Waiver Grid List page loads successfully", function () {
    create_loan_waiver.gridLoanWaiverListPage();
  });

  it("52.02. Verify that clicking the Add icon button on the Loan Waiver Create page redirects the user to the Loan Waiver List page", function () {
    create_loan_waiver.createAddIconButtonCheck();
  });

  it("52.03. Verify that clicking the Remove icon button on the Loan Waiver Create page redirects the user to the Loan Waiver List page", function () {
    create_loan_waiver.createRemoveIconButtonCheck();
  });

  it("52.04. Verify that validation messages are displayed for required fields when the Submit button is clicked with empty inputs", function () {
    create_loan_waiver.createValidationMessageCheck();
  });

  // it("52.05. Verify that clicking the Draft button on the Loan Waiver Create page redirects the user to the Loan Waiver List page", function () {
  //   create_loan_waiver.createDraftButtonCheck();
  // });

  it("52.06. Verify that clicking the Go Back button on the Loan Waiver Create page redirects the user to the Loan Waiver List page", function () {
    create_loan_waiver.createGoBackButtonCheck();
  });

  it("52.07. Verify that clicking the Reset button on the Loan Waiver Create page clears all entered input values", function () {
    create_loan_waiver.createResetButtonCheck();
  });

  it("52.08. Verify successful creation of a Loan Waiver record by the Branch Manager role", function () {
    create_loan_waiver.createLoanWaiver();
  });

  it("52.09. Verify that the Action button performs the expected operation successfully", function () {
    create_loan_waiver.actionButtonCheck();
  });

  it("52.10. Verify successful viewing of Loan Waiver information", function () {
    create_loan_waiver.viewLoanWaiver();
  });

  it("52.11. Verify that clicking the Go Back button on the Loan Waiver View page redirects the user to the Loan Waiver List page", function () {
    create_loan_waiver.viewGoBackButton();
  });

  it("52.12. Verify that the user can filter inactive Loan Waiver records using the Status dropdown on the Loan Waiver List page", function () {
    create_loan_waiver.statusInactiveDropdownCheck();
  });

  it("52.13. Verify that the Status dropdown correctly filters active Loan Waiver records", function () {
    create_loan_waiver.statusActiveDropdownCheck();
  });

  it("52.14. Verify successful search results by Loan Waiver name", function () {
    create_loan_waiver.searchInLoanWaivereName();
  });

  it("52.15. Verify successful reset of the Grid List using the Reset button on the Loan Waiver page", function () {
    create_loan_waiver.gridResetButtonCheck();
  });

  it("52.16. Verify successful refresh of the Grid List using the Refresh button on the Loan Waiver page", function () {
    create_loan_waiver.gridRefreshButtonCheck();
  });

  it("52.17. Verify that clicking the Search button on the Loan Waiver Grid page redirects the user to the Loan Waiver List page", function () {
    create_loan_waiver.gridSearchButtonCheck();
  });

  it("52.18. Verify that the Loan Waiver breadcrumb is correct.", function () {
    create_loan_waiver.listBreadcrumbCheck();
  });

  it("52.19. Verify that all required Loan Waiver columns are displayed.", function () {
    create_loan_waiver.requiredGridColumnsCheck();
  });

  it("52.20. Verify that records contain valid identifiers and loan, waived and payable amounts, or show No Data.", function () {
    create_loan_waiver.recordsOrEmptyStateCheck();
  });

  it("52.21. Verify that office, samity, status, date and search controls are visible.", function () {
    create_loan_waiver.filterControlsCheck();
  });

  it("52.22. Verify that a nonexistent search displays No Data.", function () {
    create_loan_waiver.noResultSearchCheck();
  });

  it("52.23. Verify that Reset clears an unmatched search and restores the list.", function () {
    create_loan_waiver.resetSearchCheck();
  });

  it("52.24. Verify that Refresh keeps the Loan Waiver list and records or empty state available.", function () {
    create_loan_waiver.refreshListStateCheck();
  });

  it("52.25. Verify that Add New Loan Waiver is visible and enabled.", function () {
    create_loan_waiver.addButtonCheck();
  });

  it("52.26. Verify that the Grid List content changes correctly when switching the language from English to Bangla", function () {
    create_loan_waiver.gridLanguageSwitchCheck();
  });
});
