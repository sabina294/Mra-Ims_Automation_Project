// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/12-loan-product-management/loan-product-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_loan_product_management } from "./loan-product-management.po";

describe("12. Loan Product Management Module Test Cases", function () {
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

  it("12.01. Verify the loan product management list page loads correctly.", function () {
    grid_loan_product_management.gridLoanProductManagementListPage();
  });

  it("12.02 Verify successfully performs the action when the action button is clicked.", function () {
    grid_loan_product_management.actionButtonCheck();
  });

  it("12.03. Verify the user can successfully view the loan product management information, including the name and description.", function () {
    grid_loan_product_management.viewLoanProductManagement();
  });

  it("12.04. Verify that clicking the go back button on the loan product management view page redirects the user to the loan product management list page.", function () {
    grid_loan_product_management.viewGoBackButton();
  });

  it("12.05. Verify that the loan product management forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    grid_loan_product_management.turnOnEditMode();
  });

  it("12.06. Verify the loan product management edit reset button functions correctly.", function () {
    grid_loan_product_management.editResetButton();
  });

  it("12.07. Verify the loan product management submit button functions correctly.", function () {
    grid_loan_product_management.editSubmitButton();
  });

  it("12.08. Verify that clicking the go back button on the loan product management edit page redirects the user to the loan product management list page.", function () {
    grid_loan_product_management.editGoBackButton();
  });

  it("12.09. Verify the user can filter inactive employee records using the status dropdown on the loan product management List page.", function () {
    grid_loan_product_management.statusInactiveDropdownCheck();
  });

  it("12.10. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    grid_loan_product_management.statusActiveDropdownCheck();
  });

  it("12.12. Verify that the search results are displayed correctly when searching by loan product management name.", function () {
    grid_loan_product_management.searchInLoanProductName();
  });

  it("12.12. Verify the grid list resets successfully when the reset button is clicked on the loan product management page", function () {
    grid_loan_product_management.gridResetButtonCheck();
  });

  it("12.13. Verify a new loan product management record is created successfully when all required fields are filled with valid data", function () {
    grid_loan_product_management.gridRefreshButtonCheck();
  });

  it("12.14. Verify that when the user clicks the Search button on the loan product management grid page, the system redirects to the loan product management List page..", function () {
    grid_loan_product_management.gridSearchButtonCheck();
  });

  it("12.15. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_loan_product_management.gridLanguageSwitchCheck();
  });
});
