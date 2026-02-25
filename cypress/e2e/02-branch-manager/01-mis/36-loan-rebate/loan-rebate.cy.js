// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/36-loan-rebate/loan-rebate.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_rebate } from "./loan-rebate.po";

describe("36. Loan Rebate Module Test Cases", function () {
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

  it("36.01. Verify Loan rebate Grid List Page loads successfully", function () {
    create_loan_rebate.gridLoanRebateListPage();
  });
  
  it("36.02. Verify the loan rebate creation reset button clears all entered input values.", function () {
    create_loan_rebate.createResetButtonCheck();
  });

  it("36.03. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_loan_rebate.createValidationMessageCheck();
  });

  it("36.04. Verify that clicking the draft button on the loan rebate create page redirects the user to the loan rebate list page.", function () {
    create_loan_rebate.createDraftButtonCheck();
  });

  it("36.05. Verify that clicking the go back button on the loan rebate create page redirects the user to the loan rebate list page.", function () {
    create_loan_rebate.createGoBackButtonCheck();
  });

  it("36.06. Verify that clicking the add icon  button on the loan rebate create page redirects the user to the loan rebate list page.", function () {
    create_loan_rebate.createAddIconButtonCheck();
  });

  it("36.07. Verify that clicking the remove icon  button on the loan rebate create page redirects the user to the loan rebate list page.", function () {
    create_loan_rebate.createRemoveIconButtonCheck();
  });

  it("36.08. Verify successful creation of a Loan rebate record by branch manager role", function () {
    create_loan_rebate.createLoanRebate();
  });

  it("36.09. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_rebate.actionButtonCheck();
  });

  it("36.10. Verify successful Loan rebate information View.", function () {
    create_loan_rebate.viewLoanRebate();
  });

  it("36.11. Verify that clicking the go back button on the Loan rebate view page redirects the user to the Loan rebate list page.", function () {
    create_loan_rebate.viewGoBackButton();
  });

  it("36.12. Verify the user can filter inactive employee records using the status dropdown on the Loan rebate List page.", function () {
    create_loan_rebate.statusInactiveDropdownCheck();
  });

  it("36.13. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_loan_rebate.statusActiveDropdownCheck();
  });

  it("36.14. Verify Successful Search Result by Loan rebate Name", function () {
    create_loan_rebate.searchInLoanRebateName();
  });

  it("36.15. Verify Successful Reset of Grid List Using the Reset Button on Loan rebate Page.", function () {
    create_loan_rebate.gridResetButtonCheck();
  });

  it("36.16. Verify Successful Refresh of Grid List Using the Refresh Button on Loan rebate Page.", function () {
    create_loan_rebate.gridRefreshButtonCheck();
  });

  it("36.17. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_rebate.gridLanguageSwitchCheck();
  });
});
