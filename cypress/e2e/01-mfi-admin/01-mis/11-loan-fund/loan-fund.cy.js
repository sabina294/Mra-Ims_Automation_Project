// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/11-loan-fund/loan-fund.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_fund } from "./loan-fund.po";

describe("11. Loan Fund Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.mfiAdminUserId,
        d.credential.mfiAdminPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("11.01. Verify the loan fund list page loads without errors.", function () {
    create_loan_fund.gridLoanFundListPage();
  });

  it("11.02. Verify a new loan fund is created successfully when all required fields are filled with valid data.", function () {
    create_loan_fund.createLoanFund();
  });

  it("11.03. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_fund.actionButtonCheck();
  });

  it("11.04. Verify the user can view all relevant details of a loan fund, including its associated fields.", function () {
    create_loan_fund.viewLoanFund();
  });

  it("11.05. Verify that clicking the go back button on the loan fund view page redirects the user to the loan fund list page.", function () {
    create_loan_fund.viewGoBackButton();
  });

  it("11.06. Verify that the loan fund forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_loan_fund.turnOffEditMode();
  });

  it("11.07. Verify the loan fund name and description can be edited successfully.", function () {
    create_loan_fund.editLoanFund();
  });

  it("11.08. Verify the loan fund edit reset button functions correctly.", function () {
    create_loan_fund.editResetButton();
  });

  it("11.09. Verify that clicking the go back button on the loan fund edit page redirects the user to the loan fund list page.", function () {
    create_loan_fund.editGoBackButton();
  });

  it("11.10. Verify the user can filter inactive loan funds using the status dropdown on the loan fund list page.", function () {
    create_loan_fund.statusInactiveDropdownCheck();
  });

  it("11.11. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_loan_fund.statusActiveDropdownCheck();
  });

  it("11.12. Verify the search returns correct results when searching by loan fund name.", function () {
    create_loan_fund.searchInLoanFundName();
  });

  it("11.13. Verify the grid list resets successfully when the reset button is clicked on the loan fund page.", function () {
    create_loan_fund.gridResetButtonCheck();
  });

  it("11.14. Verify that the grid list is refreshed successfully when the refresh button is clicked on the loan fund page.", function () {
    create_loan_fund.gridRefreshButtonCheck();
  });

  it("11.15. Verify the loan fund creation reset button clears all entered input values.", function () {
    create_loan_fund.createResetButtonCheck();
  });

  it("11.16. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_loan_fund.createValidationMessageCheck();
  });

  it("11.17. Verify that clicking the go back button on the loan fund create page redirects the user to the loan fund list page.", function () {
    create_loan_fund.createGoBackButtonCheck();
  });

  it("11.18. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_fund.gridLanguageSwitchCheck();
  });
});
