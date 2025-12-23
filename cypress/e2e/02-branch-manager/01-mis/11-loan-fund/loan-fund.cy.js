// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/11-loan-fund/loan-fund.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_loan_fund } from "./loan-fund.po";

describe("11. Loan Fund Module Test Cases", function () {
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

  it("11.01. Verify the loan fund list page loads without errors.", function () {
    grid_loan_fund.gridLoanFundListPage();
  });

  it("11.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_loan_fund.actionButtonCheck();
  });

  it("11.03. Verify the user can view all relevant details of a loan fund, including its associated fields.", function () {
    grid_loan_fund.viewLoanFund();
  });

  it("11.04. Verify that clicking the go back button on the loan fund view page redirects the user to the loan fund list page.", function () {
    grid_loan_fund.viewGoBackButton();
  });

  it("11.05. Verify that the loan fund forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    grid_loan_fund.turnOnEditMode();
  });

  it("11.06. Verify the loan fundedit reset button functions correctly.", function () {
    grid_loan_fund.editResetButton();
  });

  it("11.07. Verify the loan fund edit submit button functions correctly.", function () {
    grid_loan_fund.editSubmitButton();
  });

  it("11.08. Verify that clicking the go back button on the loan fund edit page redirects the user to the loan fund list page.", function () {
    grid_loan_fund.editGoBackButton();
  });

  it("11.09. Verify the user can filter inactive loan funds using the status dropdown on the loan fund list page.", function () {
    grid_loan_fund.statusInactiveDropdownCheck();
  });

  it("11.10. Verify the active result is filtered correctly by the status dropdown.", function () {
    grid_loan_fund.statusActiveDropdownCheck();
  });

  it("11.11. Verify the search returns correct results when searching by loan fund name.", function () {
    grid_loan_fund.searchInLoanFundName();
  });

  it("11.12. Verify the grid list resets successfully when the reset button is clicked on the loan fund page.", function () {
    grid_loan_fund.gridResetButtonCheck();
  });

  it("11.13. Verify that the grid list is refreshed successfully when the refresh button is clicked on the loan fund page.", function () {
    grid_loan_fund.gridRefreshButtonCheck();
  });

  it("11.14. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_loan_fund.gridLanguageSwitchCheck();
  });
});
