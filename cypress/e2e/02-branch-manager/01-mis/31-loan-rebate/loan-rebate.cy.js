// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/31-loan-rebate/loan-rebate.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_rebate } from "./loan-rebate.po";

describe("31. Loan Rebate Module Test Cases", function () {
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

  it("31.01. Verify Loan rebate Grid List Page loads successfully", function () {
    create_loan_rebate.gridLoanRebateListPage();
  });

  it("31.02. Verify successful creation of a Loan rebate record by branch manager role", function () {
    create_loan_rebate.createLoanRebate();
  });

  it("31.03. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_rebate.actionButtonCheck();
  });

  it("31.04. Verify successful Loan rebate information View.", function () {
    create_loan_rebate.viewLoanRebate();
  });

  it("31.05. Verify the user can filter inactive employee records using the status dropdown on the Loan rebate List page.", function () {
    create_loan_rebate.statusInactiveDropdownCheck();
  });

  it("31.06. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_loan_rebate.statusActiveDropdownCheck();
  });

  it("31.07. Verify Successful Search Result by Loan rebate Name", function () {
    create_loan_rebate.searchInLoanRebateName();
  });

  it("31.08. Verify Successful Reset of Grid List Using the Reset Button on Loan rebate Page.", function () {
    create_loan_rebate.gridResetButtonCheck();
  });

  it("31.09.Verify Successful Refresh of Grid List Using the Refresh Button on Loan rebate Page.", function () {
    create_loan_rebate.gridRefreshButtonCheck();
  });

  it("31.10. Verify the loan rebate creation reset button clears all entered input values.", function () {
    create_loan_rebate.createResetButtonCheck();
  });

  it("31.11. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_loan_rebate.createValidationMessageCheck();
  });

  it("31.12. Verify that clicking the draft button on the loan rebate create page redirects the user to the loan rebate list page.", function () {
    create_loan_rebate.createDraftButtonCheck();
  });

  it("31.13. Verify that clicking the go back button on the loan rebate create page redirects the user to the loan rebate list page.", function () {
    create_loan_rebate.createGoBackButtonCheck();
  });

  it("31.14. Verify that clicking the add icon  button on the loan rebate create page redirects the user to the loan rebate list page.", function () {
    create_loan_rebate.createAddIconButtonCheck();
  });

  it("31.15. Verify that clicking the remove icon  button on the loan rebate create page redirects the user to the loan rebate list page.", function () {
    create_loan_rebate.createRemoveIconButtonCheck();
  });

  it("31.16. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_rebate.gridLanguageSwitchCheck();
  });
});
