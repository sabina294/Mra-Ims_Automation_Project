// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/11-loan-product-management/loan-product-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_loan_product_management } from "./loan-product-management.po";

describe("11. Loan Product Management Module Test Cases", function () {
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

  it("11.01. Verify the loan product management list page loads correctly.", function () {
    grid_loan_product_management.gridLoanProductManagementListPage();
  });

  it("11.02 Verify successfully performs the action when the action button is clicked.", function () {
    grid_loan_product_management.actionButtonCheck();
  });

  it("11.03. Verify the user can successfully view the loan product management information, including the name and description.", function () {
    grid_loan_product_management.viewLoanProductManagement();
  });

  it("11.04. Verify the user can filter inactive employee records using the status dropdown on the loan product management List page.", function () {
    grid_loan_product_management.statusInactiveDropdownCheck();
  });

  it("11.05. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    grid_loan_product_management.statusActiveDropdownCheck();
  });

  it("11.06. Verify that the search results are displayed correctly when searching by loan product management name.", function () {
    grid_loan_product_management.searchInLoanProductName();
  });

  it("11.07. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_loan_product_management.gridLanguageSwitchCheck();
  });
});
