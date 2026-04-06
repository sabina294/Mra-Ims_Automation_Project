// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/17-savings-product/savings-product.cy.js --browser chrome --headed
import "cypress-file-upload";
import { create_savings_product } from "./savings-product.po";

describe("17. Savings product Module Test Cases", function () {
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

  it("17.01. Verify the savings product list page loads without errors.", function () {
    create_savings_product.gridSavingsProductListPage();
  });

  it("17.02. Verify successfully performs the action when the action button is clicked.", function () {
    create_savings_product.actionButtonCheck();
  });

  it("17.03. Verify the user can view all relevant details of a savings product, including its associated fields.", function () {
    create_savings_product.viewSavingsProduct();
  });

  it("17.04. Verify that clicking the go back button on the savings product management view page redirects the user to the savings product management list page.", function () {
    create_savings_product.viewGoBackButton();
  });

  it("17.05. Verify that the savings product management forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_savings_product.turnOnEditMode();
  });

  it("17.06. Verify the savings product management edit reset button functions correctly.", function () {
    create_savings_product.editResetButton();
  });

  it("17.07. Verify the savings product management submit button functions correctly.", function () {
    create_savings_product.editSubmitButton();
  });

  it("17.08. Verify that clicking the go back button on the savings product management edit page redirects the user to the savings product management list page.", function () {
    create_savings_product.editGoBackButton();
  });

  it("17.09. Verify the user can filter inactive savings products using the status dropdown on the savings product list page.", function () {
    create_savings_product.statusInactiveDropdownCheck();
  });

  it("17.10. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_savings_product.statusActiveDropdownCheck();
  });

  it("17.11. Verify the search returns correct results when searching by savings product name.", function () {
    create_savings_product.searchInSavingsProductName();
  });

  it("17.12. Verify the grid list resets successfully when the reset button is clicked on the savings product page.", function () {
    create_savings_product.gridResetButtonCheck();
  });

  it("17.13. Verify that the grid list is refreshed successfully when the refresh button is clicked on the savings product page.", function () {
    create_savings_product.gridRefreshButtonCheck();
  });

  it("17.14. Verify that when the user clicks the Search button on the savings product grid page, the system redirects to the savings product List page..", function () {
    create_savings_product.gridSearchButtonCheck();
  });

  it("17.15. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_savings_product.gridLanguageSwitchCheck();
  });
});
