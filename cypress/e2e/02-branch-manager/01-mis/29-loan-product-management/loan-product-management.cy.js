// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/29-loan-product-management/loan-product-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_product_management } from "./loan-product-management.po";

describe("29. Loan Product Management Module Test Cases", function () {
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

  it("29.01. Verify that the Loan Product Management list page loads successfully.", function () {
    create_loan_product_management.gridLoanProductManagementListPage();
  });

  it("29.02. Verify that the action button performs the expected action successfully.", function () {
    create_loan_product_management.actionButtonCheck();
  });

  it("29.03. Verify that loan product management details (name and description) are displayed correctly.", function () {
    create_loan_product_management.viewLoanProductManagement();
  });

  it("29.04. Verify that the Go Back button redirects the user from the view page to the list page.", function () {
    create_loan_product_management.viewGoBackButton();
  });

  it("29.05. Verify that edit mode toggles correctly and fields switch between editable and read-only states.", function () {
    create_loan_product_management.turnOnEditMode();
  });

  it("29.06. Verify that the Edit Reset button clears changes and restores the previous state.", function () {
    create_loan_product_management.editResetButton();
  });

  it("29.07. Verify that the Edit Submit button successfully updates the loan product management data.", function () {
    create_loan_product_management.editSubmitButton();
  });

  it("29.08. Verify that the Go Back button on the edit page redirects to the list page.", function () {
    create_loan_product_management.editGoBackButton();
  });

  it("29.09. Verify that inactive loan products can be filtered using the status dropdown.", function () {
    create_loan_product_management.statusInactiveDropdownCheck();
  });

  it("29.10. Verify that active loan products are correctly displayed using the status filter.", function () {
    create_loan_product_management.statusActiveDropdownCheck();
  });

  it("29.11. Verify that clicking the Search button correctly loads filtered results on the list page.", function () {
    create_loan_product_management.gridSearchButtonCheck();
  });

  it("29.12. Verify that the Reset button clears filters and restores the default grid list.", function () {
    create_loan_product_management.gridResetButtonCheck();
  });

  it("29.13. Verify that the Refresh button reloads the grid list successfully.", function () {
    create_loan_product_management.gridRefreshButtonCheck();
  });

  it("29.14. Verify that searching by loan product name returns correct results.", function () {
    create_loan_product_management.searchInLoanProductName();
  });

  it("29.15. Verify that the grid list language switches correctly between English and Bangla.", function () {
    create_loan_product_management.gridLanguageSwitchCheck();
  });

});
