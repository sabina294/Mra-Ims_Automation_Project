// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/28-savings-product/savings-product.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_savings_product } from "./savings-product.po";

describe("28. savings product Module Test Cases", function () {
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

  it("28.01. Verify the savings product list page loads without errors.", function () {
    create_savings_product.gridSavingsProductListPage();
  });

  it("28.02. Verify a new savings product is created successfully when all required fields are filled with valid data.", function () {
    create_savings_product.createSavingsProduct();
  });

  it("28.03. Verify successfully performs the action when the action button is clicked.", function () {
    create_savings_product.actionButtonCheck();
  });

  it("28.04. Verify the user can view all relevant details of a savings product, including its associated fields.", function () {
    create_savings_product.viewSavingsProduct();
  });

  it("28.05. Verify that the savings product forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_savings_product.turnOffEditMode();
  });

  it("28.06. Verify the savings product  edit reset button functions correctly.", function () {
    create_savings_product.editResetButton();
  });

  it("28.07. Verify that clicking the go back button on the savings product  edit page redirects the user to the savings product  list page.", function () {
    create_savings_product.editGoBackButton();
  });

//   it("28.08. Verify editing functionality for savings product record by MFI-Admin role", function () {
//     create_savings_product.editSavingsProduct();
//   });

  it("28.09. Verify the user can filter inactive savings products using the status dropdown on the savings product list page.", function () {
    create_savings_product.statusInactiveDropdownCheck();
  });

  it("28.10. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_savings_product.statusActiveDropdownCheck();
  });

  it("28.11. Verify the search returns correct results when searching by savings product name.", function () {
    create_savings_product.searchInSavingsProductName();
  });

  it("28.12. Verify the grid list resets successfully when the reset button is clicked on the savings product page.", function () {
    create_savings_product.gridResetButtonCheck();
  });

  it("28.13. Verify that the grid list is refreshed successfully when the refresh button is clicked on the savings product page.", function () {
    create_savings_product.gridRefreshButtonCheck();
  });

  it("28.14. Verify the savings product creation reset button clears all entered input values.", function () {
    create_savings_product.createResetButtonCheck();
  });

  it("28.15. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_savings_product.createValidationMessageCheck();
  });

  it("28.16. Verify that clicking the go back button on the savings product create page redirects the user to the savings product list page.", function () {
    create_savings_product.createGoBackButtonCheck();
  });

  it("28.17. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_savings_product.gridLanguageSwitchCheck();
  });
});
