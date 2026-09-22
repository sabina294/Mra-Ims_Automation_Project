// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/18-savings-product/savings-product.cy.js --browser chrome --headed
import "cypress-file-upload";
import { create_savings_product } from "./savings-product.po";

describe("18. Savings product Module Test Cases", function () {
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

  it("18.01. Verify the savings product list page loads without errors.", function () {
    create_savings_product.gridSavingsProductListPage();
  });

  it("18.02. Verify successfully performs the action when the action button is clicked.", function () {
    create_savings_product.actionButtonCheck();
  });

  it("18.03. Verify the user can view all relevant details of a savings product, including its associated fields.", function () {
    create_savings_product.viewSavingsProduct();
  });

  it("18.04. Verify that clicking the go back button on the savings product management view page redirects the user to the savings product management list page.", function () {
    create_savings_product.viewGoBackButton();
  });

  it("18.05. Verify that the savings product management forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_savings_product.turnOnEditMode();
  });

  it("18.06. Verify the savings product management edit reset button functions correctly.", function () {
    create_savings_product.editResetButton();
  });

  it("18.07. Verify the savings product management submit button functions correctly.", function () {
    create_savings_product.editSubmitButton();
  });

  it("18.08. Verify that clicking the go back button on the savings product management edit page redirects the user to the savings product management list page.", function () {
    create_savings_product.editGoBackButton();
  });

  it("18.09. Verify the user can filter inactive savings products using the status dropdown on the savings product list page.", function () {
    create_savings_product.statusInactiveDropdownCheck();
  });

  it("18.10. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_savings_product.statusActiveDropdownCheck();
  });

  it("18.11. Verify the search returns correct results when searching by savings product name.", function () {
    create_savings_product.searchInSavingsProductName();
  });

  it("18.12. Verify the grid list resets successfully when the reset button is clicked on the savings product page.", function () {
    create_savings_product.gridResetButtonCheck();
  });

  it("18.13. Verify that the grid list is refreshed successfully when the refresh button is clicked on the savings product page.", function () {
    create_savings_product.gridRefreshButtonCheck();
  });

  it("18.14. Verify that when the user clicks the Search button on the savings product grid page, the system redirects to the savings product List page..", function () {
    create_savings_product.gridSearchButtonCheck();
  });

  it("18.15. Verify Savings Product: the list displays the correct breadcrumb.", function () {
    create_savings_product.listBreadcrumbCheck();
  });

  it("18.16. Verify Savings Product: the grid displays all required columns.", function () {
    create_savings_product.requiredGridColumnsCheck();
  });

  it("18.17. Verify Savings Product: each displayed row contains valid product data.", function () {
    create_savings_product.gridRecordDataCheck();
  });

  it("18.18. Verify Savings Product: a non-existing product search displays no records.", function () {
    create_savings_product.noResultSearchCheck();
  });

  it("18.19. Verify Savings Product: Reset clears search criteria and restores the list.", function () {
    create_savings_product.resetRestoresGridCheck();
  });

  it("18.20. Verify Savings Product: the Active filter displays only active products.", function () {
    create_savings_product.activeStatusResultCheck();
  });

  it("18.21. Verify Savings Product: the product name column supports ascending sorting.", function () {
    create_savings_product.productNameAscendingSortCheck();
  });

  it("18.22. Verify Savings Product: the product name column supports descending sorting.", function () {
    create_savings_product.productNameDescendingSortCheck();
  });

  it("18.23. Verify Savings Product: pagination is in the correct first-page state.", function () {
    create_savings_product.firstPagePaginationCheck();
  });

  it("18.24. Verify Savings Product: View breadcrumb and data match the selected grid record.", function () {
    create_savings_product.viewPageDataAndBreadcrumbCheck();
  });

  it("18.25. Verify Savings Product: Edit Mode exposes product fields and Reset clears unsaved names.", function () {
    create_savings_product.editModeFieldsAndResetCheck();
  });

  it("18.26. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_savings_product.gridLanguageSwitchCheck();
  });
});
