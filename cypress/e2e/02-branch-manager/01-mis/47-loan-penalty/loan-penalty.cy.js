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

  it("47.01. Verify that the Loan Penalty Grid List page loads successfully for the Branch Manager", function () {
    create_loan_penalty.gridLoanPenaltyListPage();
  });

  // it("47.02. Verify that the Branch Manager can successfully save a Loan Penalty record using the Save button", function () {
  //   create_loan_penalty.createSave();
  // });

  it("47.03. Verify that the Branch Manager can successfully add a new Loan Penalty row using the Add Icon button", function () {
    create_loan_penalty.createAddIconPenalty();
  });

  it("47.04. Verify that the Branch Manager can successfully remove a Loan Penalty row using the Remove Icon button", function () {
    create_loan_penalty.createRemoveIconPenalty();
  });

  it("47.05. Verify that the Branch Manager can successfully create a Loan Penalty record", function () {
    create_loan_penalty.createLoanPenalty();
  });

  it("47.06. Verify that the Branch Manager can navigate back from the Loan Penalty entry page using the Go Back button", function () {
    create_loan_penalty.createGoBack();
  });

  // it("47.07. Verify that the Branch Manager can successfully save a Loan Penalty record as a draft", function () {
  //   create_loan_penalty.createSaveAsDraft();
  // });

  it("47.08. Verify that the Action button performs the expected operation successfully", function () {
    create_loan_penalty.actionButtonCheck();
  });

  it("47.09. Verify that the Branch Manager can successfully view Loan Penalty information", function () {
    create_loan_penalty.viewLoanPenalty();
  });

  it("47.10. Verify that clicking the Go Back button on the Loan Penalty View page redirects the user to the Loan Penalty List page", function () {
    create_loan_penalty.viewGoBackButton();
  });

  it("47.11. Verify that the user can filter inactive Loan Penalty records using the Status dropdown", function () {
    create_loan_penalty.statusInactiveDropdownCheck();
  });

  it("47.12. Verify that the user can filter active Loan Penalty records using the Status dropdown", function () {
    create_loan_penalty.statusActiveDropdownCheck();
  });

  it("47.13. Verify successful search results by Loan Penalty name", function () {
    create_loan_penalty.searchInLoanPenaltyName();
  });

  it("47.14. Verify that the Reset button successfully clears filters and resets the Loan Penalty Grid List page", function () {
    create_loan_penalty.gridResetButtonCheck();
  });

  it("47.15. Verify that the Refresh button successfully reloads the Loan Penalty Grid List page", function () {
    create_loan_penalty.gridRefreshButtonCheck();
  });

  it("47.16. Verify that clicking the Search button on the Loan Penalty Grid page redirects the user to the Loan Penalty List page", function () {
    create_loan_penalty.gridSearchButtonCheck();
  });

  it("47.17. Verify that the grid list content is successfully translated from English to Bangla using the language switch option", function () {
    create_loan_penalty.gridLanguageSwitchCheck();
  });
});
