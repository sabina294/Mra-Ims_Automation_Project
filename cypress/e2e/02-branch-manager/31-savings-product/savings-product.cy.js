// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/31-savings-product/savings-product.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_savings_product } from "./savings-product.po";

describe("31. savings product Module Test Cases", function () {
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

  it("31.01. Verify the savings product list page loads without errors.", function () {
    create_savings_product.gridSavingsProductListPage();
  });

  it("31.02. Verify successfully performs the action when the action button is clicked.", function () {
    create_savings_product.actionButtonCheck();
  });

  it("31.03. Verify the user can view all relevant details of a savings product, including its associated fields.", function () {
    create_savings_product.viewSavingsProduct();
  });

  it("31.04. Verify the user can filter inactive savings products using the status dropdown on the savings product list page.", function () {
    create_savings_product.statusInactiveDropdownCheck();
  });

  it("31.05. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_savings_product.statusActiveDropdownCheck();
  });

  it("31.06. Verify the search returns correct results when searching by savings product name.", function () {
    create_savings_product.searchInSavingsProductName();
  });

  it("31.07. Verify the grid list resets successfully when the reset button is clicked on the savings product page.", function () {
    create_savings_product.gridResetButtonCheck();
  });

  it("31.08. Verify that the grid list is refreshed successfully when the refresh button is clicked on the savings product page.", function () {
    create_savings_product.gridRefreshButtonCheck();
  });

  it("31.09. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_savings_product.gridLanguageSwitchCheck();
  });
});
