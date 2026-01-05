// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/25-loan-product-management/loan-product-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_product_management } from "./loan-product-management.po";

describe("25. Loan Product Management Module Test Cases", function () {
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

  it("25.01. Verify the loan product management list page loads correctly.", function () {
    create_loan_product_management.gridLoanProductManagementListPage();
  });

  it("25.02 Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_product_management.actionButtonCheck();
  });

  it("25.03. Verify the user can successfully view the loan product management information, including the name and description.", function () {
    create_loan_product_management.viewLoanProductManagement();
  });

  it("25.04. Verify that clicking the go back button on the loan product management view page redirects the user to the loan product management list page.", function () {
    create_loan_product_management.viewGoBackButton();
  });

  it("25.05. Verify that the loan product management forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_loan_product_management.turnOnEditMode();
  });

  it("25.06. Verify the loan product management edit reset button functions correctly.", function () {
    create_loan_product_management.editResetButton();
  });

  it("25.07. Verify the loan product management edit submit button functions correctly.", function () {
    create_loan_product_management.editSubmitButton();
  });

  it("25.08. Verify that clicking the go back button on the loan product management edit page redirects the user to the loan product management list page.", function () {
    create_loan_product_management.editGoBackButton();
  });

  it("25.09. Verify the user can filter inactive employee records using the status dropdown on the loan product management List page.", function () {
    create_loan_product_management.statusInactiveDropdownCheck();
  });

  it("25.10. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_loan_product_management.statusActiveDropdownCheck();
  });

  it("25.11.Verify Successful Reset of Grid List Using the Reset Button on Loan Product Management Page.", function () {
    create_loan_product_management.gridResetButtonCheck();
  });

  it("25.12. Verify Successful Refresh of Grid List Using the Refresh Button on Loan Product Management Page.", function () {
    create_loan_product_management.gridRefreshButtonCheck();
  });

  it("25.13. Verify that the search results are displayed correctly when searching by loan product management name.", function () {
    create_loan_product_management.searchInLoanProductName();
  });

  it("25.14. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_product_management.gridLanguageSwitchCheck();
  });
});
