// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/24-loan-product-management/loan-product-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_product_management } from "./loan-product-management.po";

describe("24. Loan Product Management Module Test Cases", function () {
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

  it("24.01. Verify the loan product management list page loads correctly.", function () {
    create_loan_product_management.gridLoanProductManagementListPage();
  });

//   it("24.02. Verify a new loan product management record is created successfully when all required fields are filled with valid data.", function () {
//     create_loan_product_management.createLoanProductManagement();
//   });

  it("24.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_product_management.actionButtonCheck();
  });

  // it("24.05. Verify the user can successfully view the loan product management information, including the name and description.", function () {
  //   create_loan_product_management.viewLoanProductManagement();
  // });

//   it("24.06. Verify theloan product management edit reset button functions correctly.", function () {
//     create_loan_product_management.editResetButton();
//   });

//   it("24.07. Verify that clicking the go back button on the loan product management edit page redirects the user to theloan product management list page.", function () {
//     create_loan_product_management.editGoBackButton();
//   });

//   it("24.08. Verify editing functionality for loan product management record by MFI-Admin role", function () {
//     create_loan_product_management.editLoanProductManagement();
//   });

  
  it("24.09. Verify the user can filter inactive employee records using the status dropdown on the loan product management List page.", function () {
    create_loan_product_management.statusInactiveDropdownCheck();
  });

  it("24.10. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_loan_product_management.statusActiveDropdownCheck();
  });

  it("24.11. Verify that the search results are displayed correctly when searching by loan product management name.", function () {
    create_loan_product_management.searchInLoanProductName();
  });

  it("24.12. Verify the grid list resets successfully when the reset button is clicked on the loan product management page", function () {
    create_loan_product_management.gridResetButtonCheck();
  });

  it("24.13. Verify a new loan product management record is created successfully when all required fields are filled with valid data", function () {
    create_loan_product_management.gridRefreshButtonCheck();
  });

  it("24.16. Verify check that the loan product management  office selection works correctly from the dropdown on the loan product list page.", function () {
    create_loan_product_management.selectofficeDropdown();
  });
  
  it("24.17. Verify check that the grid list content changes correctly from english to bangla.", function () {
      create_loan_product_management.gridLanguageSwitchCheck();
    });

});
