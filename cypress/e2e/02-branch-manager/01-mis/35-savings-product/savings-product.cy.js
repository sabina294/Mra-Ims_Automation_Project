// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/35-savings-product/savings-product.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_savings_product } from "./savings-product.po";

describe("35. Savings Product Module Test Cases", function () {
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

  it("35.01. Verify that the Savings Product list page loads successfully without errors.", function () {
    create_savings_product.gridSavingsProductListPage();
  });

  it("35.02. Verify that the action button performs the expected operation successfully.", function () {
    create_savings_product.actionButtonCheck();
  });

  it("35.03. Verify that the user can view all details of a Savings Product, including associated fields.", function () {
    create_savings_product.viewSavingsProduct();
  });

  it("35.04. Verify that clicking the Go Back button on the Savings Product view page redirects to the list page.", function () {
    create_savings_product.viewGoBackButton();
  });

  it("35.05. Verify that edit mode toggle enables and disables all fields correctly in Savings Product form.", function () {
    create_savings_product.turnOnEditMode();
  });

  it("35.06. Verify that the Edit Reset button clears changes and restores previous values correctly.", function () {
    create_savings_product.editResetButton();
  });

  it("35.07. Verify that the Edit Submit button updates the Savings Product successfully.", function () {
    create_savings_product.editSubmitButton();
  });

  it("35.08. Verify that clicking the Go Back button on the edit page redirects to the Savings Product list page.", function () {
    create_savings_product.editGoBackButton();
  });

  it("35.09. Verify that inactive Savings Products can be filtered using the status dropdown.", function () {
    create_savings_product.statusInactiveDropdownCheck();
  });

  it("35.10. Verify that active Savings Products are correctly filtered using the status dropdown.", function () {
    create_savings_product.statusActiveDropdownCheck();
  });

  it("35.11. Verify that searching by Savings Product name returns correct results.", function () {
    create_savings_product.searchInSavingsProductName();
  });

  it("35.12. Verify that the Reset button clears all filters and restores the default grid view.", function () {
    create_savings_product.gridResetButtonCheck();
  });

  it("35.13. Verify that the Refresh button reloads the Savings Product grid successfully.", function () {
    create_savings_product.gridRefreshButtonCheck();
  });

  it("35.14. Verify that clicking the Search button navigates and displays the filtered Savings Product list.", function () {
    create_savings_product.gridSearchButtonCheck();
  });

  it("35.15. Verify the Savings Product list breadcrumb.", function () {
    create_savings_product.listBreadcrumbCheck();
  });

  it("35.16. Verify the required Savings Product grid columns.", function () {
    create_savings_product.requiredGridColumnsCheck();
  });

  it("35.17. Verify valid Savings Product grid row data.", function () {
    create_savings_product.gridRecordDataCheck();
  });

  it("35.20. Verify non-existing Savings Product search shows no records.", function () {
    create_savings_product.noResultSearchCheck();
  });

  it("35.21. Verify Reset restores the Savings Product grid.", function () {
    create_savings_product.resetRestoresGridCheck();
  });

  it("35.22. Verify Active filter results.", function () {
    create_savings_product.activeStatusResultCheck();
  });

  it("35.23. Verify Savings Product Name ascending sorting.", function () {
    create_savings_product.nameAscendingSortCheck();
  });

  it("35.24. Verify Savings Product Name descending sorting.", function () {
    create_savings_product.nameDescendingSortCheck();
  });

  it("35.25. Verify Savings Product first-page pagination state.", function () {
    create_savings_product.firstPagePaginationCheck();
  });

  it("35.26. Verify Savings Product View breadcrumb and grid-to-view data.", function () {
    create_savings_product.viewPageDataAndBreadcrumbCheck();
  });

  it("35.27. Verify that the grid list language switches correctly between English and Bangla.", function () {
    create_savings_product.gridLanguageSwitchCheck();
  });

});
