// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/15-loan-rebate/loan-rebate.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_rebate } from "./loan-rebate.po";

describe("15. Loan Rebate Module Test Cases", function () {
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

  it("15.01. Verify Loan rebate Grid List Page loads successfully", function () {
    create_loan_rebate.gridLoanRebateListPage();
  });

  // it("15.02. Verify successful creation of a Loan rebate", function () {
  //   create_loan_rebate.createLoanRebate();
  // });

  // it("15.03. Verify successfully performs the action when the action button is clicked.", function () {
  //   create_loan_rebate.actionButtonCheck();
  // });

  // it("15.04. Verify successful Loan rebate information View.", function () {
  //   create_loan_rebate.viewLoanRebate();
  // });

  it("15.05. Verify the user can filter inactive employee records using the status dropdown on the member management List page.", function () {
    create_loan_rebate.statusSubmittedDropdownCheck();
  });

  it("15.06. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_loan_rebate.statusApprovedDropdownCheck();
  });

  it("15.07. Verify Successful Search Result by Loan rebate Name", function () {
    create_loan_rebate.searchInLoanRebateName();
  });

  it("15.08. Verify Successful Reset of Grid List Using the Reset Button on Loan rebate Page.", function () {
    create_loan_rebate.gridResetButtonCheck();
  });

  it("15.09.Verify Successful Refresh of Grid List Using the Refresh Button on Loan rebate Page.", function () {
    create_loan_rebate.gridRefreshButtonCheck();
  });

  it("15.10. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_rebate.gridLanguageSwitchCheck();
  });
});
