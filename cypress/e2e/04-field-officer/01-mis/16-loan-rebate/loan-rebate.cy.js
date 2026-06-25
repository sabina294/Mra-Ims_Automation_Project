// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/16-loan-rebate/loan-rebate.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_rebate } from "./loan-rebate.po";

describe("16. Loan Rebate Module Test Cases", function () {
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

  it("16.01. Verify Loan rebate Grid List Page loads successfully", function () {
    create_loan_rebate.gridLoanRebateListPage();
  });

  it("16.02. Verify that the draft button functions correctly on the loan rebate Create page.", function () {
    create_loan_rebate.createDraftButton();
  });

  it("16.03. Verify that the submit button functions correctly on the loan rebate Create page.", function () {
    create_loan_rebate.createSubmitButton();
  });

  it("16.04. Verify that the go back button functions correctly on the loan rebate Create page.", function () {
    create_loan_rebate.createGoBackButton();
  });

  it("16.05. Verify that the reset button functions correctly on the loan rebate Create page.", function () {
    create_loan_rebate.createResetButton();
  });

  it("16.06. Verify that the can successfully add a new Loan Rebate row using the Add Icon button.", function () {
    create_loan_rebate.createAddIconRebate();
  });

  it("16.07. Verify that the can successfully remove a Loan Rebate row using the Remove Icon button.", function () {
    create_loan_rebate.createRemoveIconRebate();
  });

  it("16.08. Verify successful creation of a Loan rebate", function () {
    create_loan_rebate.createLoanRebate();
  });

  it("16.09. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_rebate.actionButtonCheck();
  });

  it("16.10. Verify successful Loan rebate information View.", function () {
    create_loan_rebate.viewLoanRebate();
  });

  it("16.11. Verify successful Loan rebate information View go back.", function () {
    create_loan_rebate.goBackLoanRebate();
  });

  it("16.12. Verify the user can filter inactive employee records using the status dropdown on the member management List page.", function () {
    create_loan_rebate.statusSubmittedDropdownCheck();
  });

  it("16.13. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_loan_rebate.statusApprovedDropdownCheck();
  });

  it("16.14. Verify Successful Search Result by Loan rebate Name", function () {
    create_loan_rebate.searchInLoanRebateName();
  });

  it("16.15. Verify Successful Reset of Grid List Using the Reset Button on Loan rebate Page.", function () {
    create_loan_rebate.gridResetButtonCheck();
  });

  it("16.16. Verify Successful Refresh of Grid List Using the Refresh Button on Loan rebate Page.", function () {
    create_loan_rebate.gridRefreshButtonCheck();
  });

  it("16.17. Verify that when the user clicks the Search button on the loan rebate grid page, the system redirects to the loan rebate List page..", function () {
    create_loan_rebate.gridSearchButtonCheck();
  });

  it("16.18. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_rebate.gridLanguageSwitchCheck();
  });
});
