// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/25-loan-product-management/loan-product-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_product_management } from "./loan-product-management.po";

describe("25. Loan Product Management Module Test Cases", function () {
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

  it("25.01. Verify the loan product management list page loads correctly.", function () {
    create_loan_product_management.gridLoanProductManagementListPage();
  });

  it("25.02. Verify a new loan product management record is created successfully when all required fields are filled with valid data.", function () {
    create_loan_product_management.createLoanProductManagement();
  });

  it("25.03. Verify a new loan product management record is created successfully when all required fields are filled with valid data.", function () {
    create_loan_product_management.createWithoutOffice();
  });

  it("25.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_product_management.actionButtonCheck();
  });

  it("25.05. Verify the user can successfully view the loan product management information, including the name and description.", function () {
    create_loan_product_management.viewLoanProductManagement();
  });

  it("25.06. Verify that clicking the go back button on the loan product management view page redirects the user to the loan product management list page.", function () {
    create_loan_product_management.viewGoBackButton();
  });

  it("25.07. Verify the loan product management create reset button functions correctly.", function () {
    create_loan_product_management.createResetButton();
  });

  it("25.08. Verify the loan product management create submit button functions correctly.", function () {
    create_loan_product_management.createSubmitButton();
  });

  it("25.09. Verify the loan product management create go back button functions correctly.", function () {
    create_loan_product_management.createGoBackButton();
  });

  it("25.10. Verify the loan product management edit reset button functions correctly.", function () {
    create_loan_product_management.editResetButton();
  });

  it("25.11. Verify that clicking the submit button on the loan product management edit page redirects the user to theloan product management list page.", function () {
    create_loan_product_management.editSubmitButton();
  });

  it("25.12. Verify that clicking the go back button on the loan product management edit page redirects the user to theloan product management list page.", function () {
    create_loan_product_management.editGoBackButton();
  });

  it("25.13. Verify editing functionality for loan product management record by MFI-Admin role", function () {
    create_loan_product_management.editLoanProductManagement();
  });

  it("25.14. Verify the user can filter inactive employee records using the status dropdown on the loan product management List page.", function () {
    create_loan_product_management.statusInactiveDropdownCheck();
  });

  it("25.15. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_loan_product_management.statusActiveDropdownCheck();
  });

  it("25.16. Verify that the search results are displayed correctly when searching by loan product management name.", function () {
    create_loan_product_management.searchInLoanProductName();
  });

  it("25.17. Verify the grid list resets successfully when the reset button is clicked on the loan product management page", function () {
    create_loan_product_management.gridResetButtonCheck();
  });

  it("25.18. Verify a new loan product management record is created successfully when all required fields are filled with valid data", function () {
    create_loan_product_management.gridRefreshButtonCheck();
  });

  it("25.19. Verify check that the loan product management  office selection works correctly from the dropdown on the loan product list page.", function () {
    create_loan_product_management.selectofficeDropdown();
  });

  it("25.20. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_product_management.gridLanguageSwitchCheck();
  });

});
