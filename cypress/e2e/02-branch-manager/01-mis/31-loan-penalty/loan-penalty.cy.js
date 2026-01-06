// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/31-loan-penalty/loan-penalty.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_penalty } from "./loan-penalty.po";

describe("31. Loan Penalty Module Test Cases", function () {
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

  it("31.01. Verify Loan penalty Grid List Page loads successfully", function () {
    create_loan_penalty.gridLoanPenaltyListPage();
  });

  it("31.02. Verify successful creation of a Loan penalty record by branch manager role", function () {
    create_loan_penalty.createLoanPenalty();
  });

  it("31.03. Verify that the branch manager can navigate back from the loan penalty record screen using the Go Back button.", function () {
    create_loan_penalty.createGoBack();
  });

  // it("31.04. Verify that the branch manager can successfully add a loan penalty record using the add icon button.", function () {
  //   create_loan_penalty.createAddIconPenalty();
  // });

  // it("31.05. Verify that the branch manager can successfully remove a loan penalty record using the remove icon button.", function () {
  //   create_loan_penalty.createRemoveIconPenalty();
  // });

  // it("31.06. Verify that the branch manager can successfully save a loan penalty record as a draft.", function () {
  //   create_loan_penalty.createSaveAsDraft();
  // });

  it("31.07. Verify that the branch manager can successfully save a loan penalty record using the Save button.", function () {
    create_loan_penalty.createSave();
  });

  it("31.08. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_penalty.actionButtonCheck();
  });

  it("31.09. Verify successful Loan penalty information View.", function () {
    create_loan_penalty.viewLoanPenalty();
  });

  it("31.10. Verify that clicking the go back button on the Loan Penalty view page redirects the user to the Loan Penalty list page.", function () {
    create_loan_penalty.viewGoBackButton();
  });

  it("31.11. Verify the user can filter inactive employee records using the status dropdown on the Loan penalty List page.", function () {
    create_loan_penalty.statusInactiveDropdownCheck();
  });

  it("31.12. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_loan_penalty.statusActiveDropdownCheck();
  });

  it("31.13. Verify Successful Search Result by Loan penalty Name", function () {
    create_loan_penalty.searchInLoanPenaltyName();
  });

  it("31.14. Verify Successful Reset of Grid List Using the Reset Button on Loan penalty Page.", function () {
    create_loan_penalty.gridResetButtonCheck();
  });

  it("31.15. Verify Successful Refresh of Grid List Using the Refresh Button on Loan penalty Page.", function () {
    create_loan_penalty.gridRefreshButtonCheck();
  });

  it("31.16. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_penalty.gridLanguageSwitchCheck();
  });
});
