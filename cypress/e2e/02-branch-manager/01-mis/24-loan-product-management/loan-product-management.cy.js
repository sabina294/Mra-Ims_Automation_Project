// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/24-loan-product-management/loan-product-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_product_management } from "./loan-product-management.po";

describe("24. Loan Product Management Module Test Cases", function () {
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

  it("24.01. Verify the loan product management list page loads correctly.", function () {
    create_loan_product_management.gridLoanProductManagementListPage();
  });

  it("24.02 Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_product_management.actionButtonCheck();
  });

  it("24.03. Verify the user can successfully view the loan product management information, including the name and description.", function () {
    create_loan_product_management.viewLoanProductManagement();
  });

  it("24.04. Verify the user can filter inactive employee records using the status dropdown on the loan product management List page.", function () {
    create_loan_product_management.statusInactiveDropdownCheck();
  });

  it("24.05. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_loan_product_management.statusActiveDropdownCheck();
  });

  // it("24.06. Verify check if the filter for office results works correctly with the status dropdown ", function () {
  //   create_loan_product_management.selectOfficeDropdown();
  // });

  it("24.07. Verify that the search results are displayed correctly when searching by loan product management name.", function () {
    create_loan_product_management.searchInLoanProductName();
  });

  it("24.08. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_product_management.gridLanguageSwitchCheck();
  });
});
