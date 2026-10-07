// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/50-loan-penalty/loan-penalty.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_penalty } from "./loan-penalty.po";

describe("50. Loan Penalty Module Test Cases", function () {
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

  it("50.01. Verify that the Loan Penalty Grid List page loads successfully.", function () {
    create_loan_penalty.gridLoanPenaltyListPage();
  });

  it("50.02. Verify that the Reset button functions correctly on the Loan Penalty Create page.", function () {
    create_loan_penalty.createResetButton();
  });

  it("50.03. Verify that clicking the Go Back button on the Loan Penalty Create page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.createGoBackButton();
  });

  it("50.04. Verify that the Branch Manager can successfully add a new Loan Penalty row using the Add Icon button.", function () {
    create_loan_penalty.createAddIconPenalty();
  });

  it("50.05. Verify that the Branch Manager can successfully remove a Loan Penalty row using the Remove Icon button.", function () {
    create_loan_penalty.createRemoveIconPenalty();
  });

  it("50.06. Verify that clicking the Search button displays the filtered Loan Penalty records successfully.", function () {
    create_loan_penalty.gridSearchButtonCheck();
  });

  it("50.07. Verify the successful creation of a Loan Penalty record.", function () {
    create_loan_penalty.createLoanPenalty();
  });

  it("50.08. Verify that the Action button functions correctly on the Loan Penalty List page.", function () {
    create_loan_penalty.actionButtonCheck();
  });

  it("50.09. Verify that Loan Penalty information can be viewed successfully.", function () {
    create_loan_penalty.viewLoanPenalty();
  });

  it("50.10. Verify that clicking the Go Back button on the Loan Penalty View page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.viewGoBackButton();
  });

  it("50.11. Verify that clicking the Unsubmitted option from the Action menu redirects the user to the Unsubmitted Loan Penalty List page.", function () {
    create_loan_penalty.gridActionUnsubmittedButtonCheck();
  });

  it("50.12. Verify that clicking the Go Back button on the Unsubmitted Loan Penalty page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.gridActionUnsubmittedGoBackButton();
  });

  it("50.13. Verify that the Unsubmitted Loan Penalty List page is displayed successfully.", function () {
    create_loan_penalty.UnsubmittedButtonCheck();
  });

  it("50.14. Verify that clicking the Edit Draft action opens the Loan Penalty Edit page successfully.", function () {
    create_loan_penalty.editDraftButtonCheck();
  });

  it("50.15. Verify that clicking the Go Back button on the Loan Penalty Edit page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.editGoBackButtonCheck();
  });

  it("50.16. Verify that the Save button functions correctly on the Loan Penalty Edit page.", function () {
    create_loan_penalty.editSaveButtonCheck();
  });

  it("50.17. Verify that the Submit action functions correctly for a Loan Penalty record.", function () {
    create_loan_penalty.gridActionSubmitButtonCheck();
  });

  it("50.18. Verify that the Submitted Loan Penalty List page is displayed successfully.", function () {
    create_loan_penalty.submittedButtonCheck();
  });

  it("50.19. Verify that the Status dropdown successfully filters Submitted Loan Penalty records.", function () {
    create_loan_penalty.statusSubmittedDropdownCheck();
  });

  it("50.20. Verify that the Status dropdown successfully filters Approved Loan Penalty records.", function () {
    create_loan_penalty.statusApprovedDropdownCheck();
  });

  it("50.21. Verify that the search functionality returns the correct results when searching by Loan Penalty name.", function () {
    create_loan_penalty.searchInLoanPenaltyName();
  });

  it("50.22. Verify that the Reset button successfully clears all applied filters on the Loan Penalty Grid List page.", function () {
    create_loan_penalty.gridResetButtonCheck();
  });

  it("50.23. Verify that the Refresh button successfully reloads the Loan Penalty Grid List page.", function () {
    create_loan_penalty.gridRefreshButtonCheck();
  });

  it("50.24. Verify that the Loan Penalty breadcrumb is correct.", function () {
    create_loan_penalty.listBreadcrumbCheck();
  });

  it("50.25. Verify that all required Loan Penalty columns are displayed.", function () {
    create_loan_penalty.requiredGridColumnsCheck();
  });

  it("50.26. Verify that records contain valid identifiers and amounts, or show No Data.", function () {
    create_loan_penalty.recordsOrEmptyStateCheck();
  });

  it("50.27. Verify that office, samity, status, date and search controls are visible.", function () {
    create_loan_penalty.filterControlsCheck();
  });

  it("50.28. Verify that a nonexistent search displays No Data.", function () {
    create_loan_penalty.noResultSearchCheck();
  });

  it("50.29. Verify that Reset clears an unmatched search and restores the list.", function () {
    create_loan_penalty.resetSearchCheck();
  });

  it("50.30. Verify that Refresh keeps the Loan Penalty list and records or empty state available.", function () {
    create_loan_penalty.refreshListStateCheck();
  });

  it("50.31. Verify that Add New Loan Penalty is visible and enabled.", function () {
    create_loan_penalty.addButtonCheck();
  });

  it("50.32. Verify that the Grid List content is updated correctly when switching the language from English to Bangla.", function () {
    create_loan_penalty.gridLanguageSwitchCheck();
  });
});

