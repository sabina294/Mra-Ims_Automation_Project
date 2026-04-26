// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/48-loan-rebate/loan-rebate.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_rebate } from "./loan-rebate.po";

describe("48. Loan Rebate Module Test Cases", function () {
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

  it("48.01. Verify Loan rebate Grid List Page loads successfully", function () {
    create_loan_rebate.gridLoanRebateListPage();
  });

  it("48.02. Verify the loan rebate creation reset button clears all entered input values.", function () {
    create_loan_rebate.createResetButtonCheck();
  });

  it("48.03. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_loan_rebate.createValidationMessageCheck();
  });

  it("48.04. Verify that clicking the draft button on the loan rebate create page redirects the user to the loan rebate list page.", function () {
    create_loan_rebate.createDraftButtonCheck();
  });

  it("48.05. Verify that clicking the go back button on the loan rebate create page redirects the user to the loan rebate list page.", function () {
    create_loan_rebate.createGoBackButtonCheck();
  });

  it("48.06. Verify that clicking the add icon  button on the loan rebate create page redirects the user to the loan rebate list page.", function () {
    create_loan_rebate.createAddIconButtonCheck();
  });

  it("48.07. Verify that clicking the remove icon  button on the loan rebate create page redirects the user to the loan rebate list page.", function () {
    create_loan_rebate.createRemoveIconButtonCheck();
  });

  it("48.08. Verify successful creation of a Loan rebate record by branch manager role", function () {
    create_loan_rebate.createLoanRebate();
  });

  it("48.09. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_rebate.actionButtonCheck();
  });

  it("48.10. Verify successful Loan rebate information View.", function () {
    create_loan_rebate.viewLoanRebate();
  });

  it("48.11. Verify that clicking the go back button on the Loan rebate view page redirects the user to the Loan rebate list page.", function () {
    create_loan_rebate.viewGoBackButton();
  });

  it("48.12. Verify the user can filter inactive employee records using the status dropdown on the Loan rebate List page.", function () {
    create_loan_rebate.statusInactiveDropdownCheck();
  });

  it("48.13. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_loan_rebate.statusActiveDropdownCheck();
  });

  it("48.14. Verify Successful Search Result by Loan rebate Name", function () {
    create_loan_rebate.searchInLoanRebateName();
  });

  it("48.15. Verify Successful Reset of Grid List Using the Reset Button on Loan rebate Page.", function () {
    create_loan_rebate.gridResetButtonCheck();
  });

  it("48.16. Verify Successful Refresh of Grid List Using the Refresh Button on Loan rebate Page.", function () {
    create_loan_rebate.gridRefreshButtonCheck();
  });

  it("48.17. Verify that when the user clicks the Search button on the Loan rebate grid page, the system redirects to the Loan Rebate List page.", function () {
    create_loan_rebate.gridSearchButtonCheck();
  });

  it("48.18. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_rebate.gridLanguageSwitchCheck();
  });
});
