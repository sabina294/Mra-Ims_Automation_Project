// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/14-loan-penalty/loan-penalty.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_penalty } from "./loan-penalty.po";

describe("14. Loan Penalty Module Test Cases", function () {
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

  it("14.01. Verify loan penalty Grid List Page loads successfully", function () {
    create_loan_penalty.gridLoanPenaltyListPage();
  });

  // it("14.02. Verify successful creation of a loan penalty", function () {
  //   create_loan_penalty.createLoanPenalty();
  // });

  // it("14.03. Verify successfully performs the action when the action button is clicked.", function () {
  //   create_loan_penalty.actionButtonCheck();
  // });

  // it("14.04. Verify successful loan penalty information View.", function () {
  //   create_loan_penalty.viewLoanPenalty();
  // });

  it("14.05. Verify the user can filter submitted penalty records using the status dropdown on the loan penalty List page.", function () {
    create_loan_penalty.statusSubmittedDropdownCheck();
  });

  it("14.06. Verify check if the filter for approved results works correctly with the status dropdown ", function () {
    create_loan_penalty.statusApprovedDropdownCheck();
  });

  it("14.07. Verify Successful Search Result by loan penalty Name", function () {
    create_loan_penalty.searchInLoanPenaltyName();
  });

  it("14.08. Verify Successful Reset of Grid List Using the Reset Button on loan penalty Page.", function () {
    create_loan_penalty.gridResetButtonCheck();
  });

  it("14.09.Verify Successful Refresh of Grid List Using the Refresh Button on loan penalty Page.", function () {
    create_loan_penalty.gridRefreshButtonCheck();
  });

  it("14.10. Verify that when the user clicks the Search button on the loan penalty grid page, the system redirects to the loan penalty List page..", function () {
    create_loan_penalty.gridSearchButtonCheck();
  });

  it("14.11. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_penalty.gridLanguageSwitchCheck();
  });
});
