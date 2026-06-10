// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/47-loan-penalty/loan-penalty.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_penalty } from "./loan-penalty.po";

describe("47. Loan Penalty Module Test Cases", function () {
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

  it("47.01. Verify that the Loan Penalty Grid List page loads successfully.", function () {
    create_loan_penalty.gridLoanPenaltyListPage();
  });

  it("47.02. Verify that the Reset button functions correctly on the Loan Penalty Create page.", function () {
    create_loan_penalty.createResetButton();
  });

  it("47.03. Verify that clicking the Go Back button on the Loan Penalty Create page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.createGoBackButton();
  });

  it("47.04. Verify successful creation of a Loan Penalty record.", function () {
    create_loan_penalty.createLoanPenalty();
  });

  it("47.05. Verify that the Action button functions correctly on the Loan Penalty List page.", function () {
    create_loan_penalty.actionButtonCheck();
  });

  it("47.06. Verify successful viewing of Loan Penalty information.", function () {
    create_loan_penalty.viewLoanPenalty();
  });

  it("47.07. Verify that clicking the Go Back button on the Loan Penalty View page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.viewGoBackButton();
  });

  it("47.08. Verify that clicking the Unsubmitted button from the Action menu redirects the user to the Unsubmitted Loan Penalty List page.", function () {
    create_loan_penalty.gridActionUnsubmittedButtonCheck();
  });

  it("47.09. Verify that clicking the Go Back button on the Unsubmitted Loan Penalty page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.gridActionUnsubmittedGoBackButton();
  });

  it("47.10. Verify that the Unsubmitted Loan Penalty List page is displayed successfully.", function () {
    create_loan_penalty.UnsubmittedButtonCheck();
  });

  it("47.11. Verify that clicking the Edit Draft action opens the Loan Penalty Edit page successfully.", function () {
    create_loan_penalty.editDraftButtonCheck();
  });

  it("47.12. Verify that clicking the Go Back button on the Loan Penalty Edit page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.editGoBackButtonCheck();
  });

  it("47.13. Verify that the Save button functions correctly on the Loan Penalty Edit page.", function () {
    create_loan_penalty.editSaveButtonCheck();
  });

  it("47.14. Verify that the Submit action functions correctly for a Loan Penalty record.", function () {
    create_loan_penalty.gridActionSubmitButtonCheck();
  });

  it("47.15. Verify that the Submitted Loan Penalty List page is displayed successfully.", function () {
    create_loan_penalty.submittedButtonCheck();
  });

  it("47.16. Verify that the Status dropdown successfully filters Submitted Loan Penalty records.", function () {
    create_loan_penalty.statusSubmittedDropdownCheck();
  });

  it("47.17. Verify that the Status dropdown successfully filters Approved Loan Penalty records.", function () {
    create_loan_penalty.statusApprovedDropdownCheck();
  });

  it("47.18. Verify successful search results using the Loan Penalty name.", function () {
    create_loan_penalty.searchInLoanPenaltyName();
  });

  it("47.19. Verify successful reset of the Loan Penalty Grid List using the Reset button.", function () {
    create_loan_penalty.gridResetButtonCheck();
  });

  it("47.20. Verify successful refresh of the Loan Penalty Grid List using the Refresh button.", function () {
    create_loan_penalty.gridRefreshButtonCheck();
  });

  it("47.21. Verify that the Branch Manager can successfully add a new Loan Penalty row using the Add Icon button", function () {
    create_loan_penalty.createAddIconPenalty();
  });

  it("47.22. Verify that the Branch Manager can successfully remove a Loan Penalty row using the Remove Icon button", function () {
    create_loan_penalty.createRemoveIconPenalty();
  });

  it("47.23. Verify that clicking the Search button displays filtered Loan Penalty records successfully.", function () {
    create_loan_penalty.gridSearchButtonCheck();
  });

  it("47.24. Verify that the Grid List content changes correctly when switching the language from English to Bangla.", function () {
    create_loan_penalty.gridLanguageSwitchCheck();
  });
});
