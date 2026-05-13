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

  it("11.01. Verify that the Loan Fund list page loads successfully without errors", function () {
    grid_loan_fund.gridLoanFundListPage();
  });

  it("11.02. Verify that the action button performs the expected operation successfully", function () {
    grid_loan_fund.actionButtonCheck();
  });

  it("11.03. Verify that a user can view all relevant details of a Loan Fund including associated fields", function () {
    grid_loan_fund.viewLoanFund();
  });

  it("11.04. Verify that the Go Back button on the Loan Fund view page redirects to the list page", function () {
    grid_loan_fund.viewGoBackButton();
  });

  it("11.05. Verify that Loan Fund edit mode can be toggled and all fields behave as expected in view/edit states", function () {
    grid_loan_fund.turnOnEditMode();
  });

  it("11.06. Verify that the Loan Fund edit reset button works correctly", function () {
    grid_loan_fund.editResetButton();
  });

  it("11.07. Verify that the Loan Fund edit submit button works correctly and saves changes", function () {
    grid_loan_fund.editSubmitButton();
  });

  it("11.08. Verify that the Go Back button on the Loan Fund edit page redirects to the list page", function () {
    grid_loan_fund.editGoBackButton();
  });

  it("11.09. Verify that inactive Loan Funds can be filtered using the status dropdown", function () {
    grid_loan_fund.statusInactiveDropdownCheck();
  });

  it("11.10. Verify that active Loan Funds can be filtered correctly using the status dropdown", function () {
    grid_loan_fund.statusActiveDropdownCheck();
  });

  it("11.11. Verify that searching by Loan Fund name returns correct results", function () {
    grid_loan_fund.searchInLoanFundName();
  });

  it("11.12. Verify that the Loan Fund grid resets successfully when the reset button is clicked", function () {
    grid_loan_fund.gridResetButtonCheck();
  });

  it("11.13. Verify that the Loan Fund grid refresh button reloads the data successfully", function () {
    grid_loan_fund.gridRefreshButtonCheck();
  });

  it("11.14. Verify that clicking the Search button redirects and loads the Loan Fund list correctly", function () {
    grid_loan_fund.gridSearchButtonCheck();
  });

  it("11.15. Verify that the Loan Fund grid language switch updates content between English and Bangla correctly", function () {
    grid_loan_fund.gridLanguageSwitchCheck();
  });
});
