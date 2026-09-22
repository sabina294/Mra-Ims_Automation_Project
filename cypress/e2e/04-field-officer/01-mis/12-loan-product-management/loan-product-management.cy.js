// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/12-loan-product-management/loan-product-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_loan_product_management } from "./loan-product-management.po";

describe("12. Loan Product Management Module Test Cases", function () {
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

  it("12.01. Verify the loan product management list page loads correctly.", function () {
    grid_loan_product_management.gridLoanProductManagementListPage();
  });

  it("12.02 Verify successfully performs the action when the action button is clicked.", function () {
    grid_loan_product_management.actionButtonCheck();
  });

  it("12.03. Verify the user can successfully view the loan product management information, including the name and description.", function () {
    grid_loan_product_management.viewLoanProductManagement();
  });

  it("12.04. Verify that clicking the go back button on the loan product management view page redirects the user to the loan product management list page.", function () {
    grid_loan_product_management.viewGoBackButton();
  });

  it("12.05. Verify that the loan product management forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    grid_loan_product_management.turnOnEditMode();
  });

  it("12.06. Verify the loan product management edit reset button functions correctly.", function () {
    grid_loan_product_management.editResetButton();
  });

  it("12.07. Verify the loan product management submit button functions correctly.", function () {
    grid_loan_product_management.editSubmitButton();
  });

  it("12.08. Verify that clicking the go back button on the loan product management edit page redirects the user to the loan product management list page.", function () {
    grid_loan_product_management.editGoBackButton();
  });

  it("12.09. Verify the user can filter inactive loan products using the status dropdown on the loan product management List page.", function () {
    grid_loan_product_management.statusInactiveDropdownCheck();
  });

  it("12.10. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    grid_loan_product_management.statusActiveDropdownCheck();
  });

  it("12.11. Verify that the search results are displayed correctly when searching by loan product management name.", function () {
    grid_loan_product_management.searchInLoanProductName();
  });

  it("12.12. Verify the grid list resets successfully when the reset button is clicked on the loan product management page", function () {
    grid_loan_product_management.gridResetButtonCheck();
  });

  it("12.13. Verify the loan product management grid refreshes successfully", function () {
    grid_loan_product_management.gridRefreshButtonCheck();
  });

  it("12.14. Verify that when the user clicks the Search button on the loan product management grid page, the system redirects to the loan product management List page..", function () {
    grid_loan_product_management.gridSearchButtonCheck();
  });

  it("12.15. Verify Loan Product: the list displays the correct breadcrumb.", function () {
    grid_loan_product_management.listBreadcrumbCheck();
  });

  it("12.16. Verify Loan Product: the grid displays all required columns.", function () {
    grid_loan_product_management.requiredGridColumnsCheck();
  });

  it("12.17. Verify Loan Product: each displayed row contains valid product data.", function () {
    grid_loan_product_management.gridRecordDataCheck();
  });

  it("12.18. Verify Loan Product: an exact product-name search returns the selected product.", function () {
    grid_loan_product_management.exactProductSearchCheck();
  });

  it("12.19. Verify Loan Product: a partial product-name search returns matching products.", function () {
    grid_loan_product_management.partialProductSearchCheck();
  });

  it("12.20. Verify Loan Product: a non-existing product search displays no records.", function () {
    grid_loan_product_management.noResultSearchCheck();
  });

  it("12.21. Verify Loan Product: Reset clears search criteria and restores the list.", function () {
    grid_loan_product_management.resetRestoresGridCheck();
  });

  it("12.22. Verify Loan Product: the Active filter displays only active products.", function () {
    grid_loan_product_management.activeStatusResultCheck();
  });

  it("12.23. Verify Loan Product: the product name column supports ascending sorting.", function () {
    grid_loan_product_management.productNameAscendingSortCheck();
  });

  it("12.24. Verify Loan Product: the product name column supports descending sorting.", function () {
    grid_loan_product_management.productNameDescendingSortCheck();
  });

  it("12.25. Verify Loan Product: pagination is in the correct first-page state.", function () {
    grid_loan_product_management.firstPagePaginationCheck();
  });

  it("12.26. Verify Loan Product: View breadcrumb and data match the selected grid record.", function () {
    grid_loan_product_management.viewPageDataAndBreadcrumbCheck();
  });

  it("12.27. Verify Loan Product: Edit Mode exposes product fields and Reset clears unsaved names.", function () {
    grid_loan_product_management.editModeFieldsAndResetCheck();
  });

  it("12.28. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_loan_product_management.gridLanguageSwitchCheck();
  });
});
