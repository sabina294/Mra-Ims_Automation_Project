// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/28-loan-penalty/loan-penalty.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_penalty } from "./loan-penalty.po";

describe("28. Loan Penalty Module Test Cases", function () {
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

  it("28.01. Verify Loan penalty Grid List Page loads successfully", function () {
    create_loan_penalty.gridLoanPenaltyListPage();
  });

//   it("28.02. Verify successful creation of a Loan penalty record by branch manager role", function () {
//     create_loan_penalty.createLoanPenalty();
//   });

  // it("28.03. Verify successfully performs the action when the action button is clicked.", function () {
  //   create_loan_penalty.actionButtonCheck();
  // });

  // it("28.04. Verify successful Loan penalty information View.", function () {
  //   create_loan_penalty.viewLoanPenalty();
  // });

  it("28.05. Verify the user can filter inactive employee records using the status dropdown on the Loan penalty List page.", function () {
    create_loan_penalty.statusInactiveDropdownCheck();
  });

  it("28.06. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_loan_penalty.statusActiveDropdownCheck();
  });

  it("28.07. Verify Successful Search Result by Loan penalty Name", function () {
    create_loan_penalty.searchInLoanPenaltyName();
  });

  it("28.08. Verify Successful Reset of Grid List Using the Reset Button on Loan penalty Page.", function () {
    create_loan_penalty.gridResetButtonCheck();
  });

  it("28.09.Verify Successful Refresh of Grid List Using the Refresh Button on Loan penalty Page.", function () {
    create_loan_penalty.gridRefreshButtonCheck();
  });

  it("28.10. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_penalty.gridLanguageSwitchCheck();
  });
});
