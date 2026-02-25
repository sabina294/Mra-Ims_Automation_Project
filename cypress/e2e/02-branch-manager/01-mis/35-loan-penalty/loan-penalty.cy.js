// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/35-loan-penalty/loan-penalty.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_penalty } from "./loan-penalty.po";

describe("35. Loan Penalty Module Test Cases", function () {
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

  it("35.01. Verify Loan penalty Grid List Page loads successfully", function () {
    create_loan_penalty.gridLoanPenaltyListPage();
  });

  // it("35.02. Verify that the branch manager can successfully save a loan penalty record using the Save button.", function () {
  //   create_loan_penalty.createSave();
  // });

  it("35.03. Verify that the branch manager can successfully add a loan penalty record using the add icon button.", function () {
    create_loan_penalty.createAddIconPenalty();
  });

  it("35.04. Verify that the branch manager can successfully remove a loan penalty record using the remove icon button.", function () {
    create_loan_penalty.createRemoveIconPenalty();
  });

  it("35.05. Verify successful creation of a Loan penalty record by branch manager role", function () {
    create_loan_penalty.createLoanPenalty();
  });

  it("35.06. Verify that the branch manager can navigate back from the loan penalty record screen using the Go Back button.", function () {
    create_loan_penalty.createGoBack();
  });

  // it("35.07. Verify that the branch manager can successfully save a loan penalty record as a draft.", function () {
  //   create_loan_penalty.createSaveAsDraft();
  // });

  it("35.08. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_penalty.actionButtonCheck();
  });

  it("35.09. Verify successful Loan penalty information View.", function () {
    create_loan_penalty.viewLoanPenalty();
  });

  it("35.10. Verify that clicking the go back button on the Loan Penalty view page redirects the user to the Loan Penalty list page.", function () {
    create_loan_penalty.viewGoBackButton();
  });

  it("35.11. Verify the user can filter inactive employee records using the status dropdown on the Loan penalty List page.", function () {
    create_loan_penalty.statusInactiveDropdownCheck();
  });

  it("35.12. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_loan_penalty.statusActiveDropdownCheck();
  });

  it("35.13. Verify Successful Search Result by Loan penalty Name", function () {
    create_loan_penalty.searchInLoanPenaltyName();
  });

  it("35.14. Verify Successful Reset of Grid List Using the Reset Button on Loan penalty Page.", function () {
    create_loan_penalty.gridResetButtonCheck();
  });

  it("35.15. Verify Successful Refresh of Grid List Using the Refresh Button on Loan penalty Page.", function () {
    create_loan_penalty.gridRefreshButtonCheck();
  });

  it("35.16. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_penalty.gridLanguageSwitchCheck();
  });
});
