// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/49-loan-penalty/loan-penalty.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_penalty } from "./loan-penalty.po";

describe("49. Loan Penalty Module Test Cases", function () {
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

  it("49.01. Verify that the Loan Penalty Grid List page loads successfully.", function () {
    create_loan_penalty.gridLoanPenaltyListPage();
  });

  it("49.02. Verify that the Reset button functions correctly on the Loan Penalty Create page.", function () {
    create_loan_penalty.createResetButton();
  });

  it("49.03. Verify that clicking the Go Back button on the Loan Penalty Create page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.createGoBackButton();
  });

  it("49.04. Verify that the Branch Manager can successfully add a new Loan Penalty row using the Add Icon button.", function () {
    create_loan_penalty.createAddIconPenalty();
  });

  it("49.05. Verify that the Branch Manager can successfully remove a Loan Penalty row using the Remove Icon button.", function () {
    create_loan_penalty.createRemoveIconPenalty();
  });

  it("49.06. Verify that clicking the Search button displays the filtered Loan Penalty records successfully.", function () {
    create_loan_penalty.gridSearchButtonCheck();
  });

  it("49.07. Verify the successful creation of a Loan Penalty record.", function () {
    create_loan_penalty.createLoanPenalty();
  });

  it("49.08. Verify that the Action button functions correctly on the Loan Penalty List page.", function () {
    create_loan_penalty.actionButtonCheck();
  });

  it("49.09. Verify that Loan Penalty information can be viewed successfully.", function () {
    create_loan_penalty.viewLoanPenalty();
  });

  it("49.10. Verify that clicking the Go Back button on the Loan Penalty View page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.viewGoBackButton();
  });

  it("49.11. Verify that clicking the Unsubmitted option from the Action menu redirects the user to the Unsubmitted Loan Penalty List page.", function () {
    create_loan_penalty.gridActionUnsubmittedButtonCheck();
  });

  it("49.12. Verify that clicking the Go Back button on the Unsubmitted Loan Penalty page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.gridActionUnsubmittedGoBackButton();
  });

  it("49.13. Verify that the Unsubmitted Loan Penalty List page is displayed successfully.", function () {
    create_loan_penalty.UnsubmittedButtonCheck();
  });

  it("49.14. Verify that clicking the Edit Draft action opens the Loan Penalty Edit page successfully.", function () {
    create_loan_penalty.editDraftButtonCheck();
  });

  it("49.15. Verify that clicking the Go Back button on the Loan Penalty Edit page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.editGoBackButtonCheck();
  });

  it("49.16. Verify that the Save button functions correctly on the Loan Penalty Edit page.", function () {
    create_loan_penalty.editSaveButtonCheck();
  });

  it("49.17. Verify that the Submit action functions correctly for a Loan Penalty record.", function () {
    create_loan_penalty.gridActionSubmitButtonCheck();
  });

  it("49.18. Verify that the Submitted Loan Penalty List page is displayed successfully.", function () {
    create_loan_penalty.submittedButtonCheck();
  });

  it("49.19. Verify that the Status dropdown successfully filters Submitted Loan Penalty records.", function () {
    create_loan_penalty.statusSubmittedDropdownCheck();
  });

  it("49.20. Verify that the Status dropdown successfully filters Approved Loan Penalty records.", function () {
    create_loan_penalty.statusApprovedDropdownCheck();
  });

  it("49.21. Verify that the search functionality returns the correct results when searching by Loan Penalty name.", function () {
    create_loan_penalty.searchInLoanPenaltyName();
  });

  it("49.22. Verify that the Reset button successfully clears all applied filters on the Loan Penalty Grid List page.", function () {
    create_loan_penalty.gridResetButtonCheck();
  });

  it("49.23. Verify that the Refresh button successfully reloads the Loan Penalty Grid List page.", function () {
    create_loan_penalty.gridRefreshButtonCheck();
  });

  it("49.24. Verify that the Grid List content is updated correctly when switching the language from English to Bangla.", function () {
    create_loan_penalty.gridLanguageSwitchCheck();
  });
});

