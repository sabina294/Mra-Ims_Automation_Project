// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/29-loan-product-management/loan-product-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_product_management } from "./loan-product-management.po";

describe("29. Loan Product Management Module Test Cases", function () {
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

  it("29.01. Verify that the Loan Product Management list page loads successfully.", function () {
    create_loan_product_management.gridLoanProductManagementListPage();
  });

  it("29.02. Verify that a new Loan Product Management record is created successfully when all required fields are filled with valid data.", function () {
    create_loan_product_management.createLoanProductManagement();
  });

  it("29.03. Verify that a Loan Product Management record cannot be created without selecting an Office Type.", function () {
    create_loan_product_management.createWithoutOffice();
  });

  it("29.04. Verify that a Loan Product Management record cannot be created without selecting an MFI Program ID.", function () {
    create_loan_product_management.createWithoutMFIProgramID();
  });

  it("29.05. Verify that a Loan Product Management record cannot be created without entering the Loan Product Name in English.", function () {
    create_loan_product_management.createWithoutLoanProductNameEnglish();
  });

  it("29.06. Verify that a Loan Product Management record cannot be created without entering the Loan Product Name in Bangla.", function () {
    create_loan_product_management.createWithoutLoanProductNameBangla();
  });

  it("29.07. Verify that a Loan Product Management record cannot be created without selecting a Product Nature.", function () {
    create_loan_product_management.createWithoutProductNature();
  });

  it("29.08. Verify that a Loan Product Management record cannot be created without selecting a Loan Type.", function () {
    create_loan_product_management.createWithoutLoanTypeID();
  });

  it("29.09. Verify that a Loan Product Management record cannot be created without selecting a Repayment Frequency.", function () {
    create_loan_product_management.createWithoutRepaymentFrequency();
  });

  it("29.10. Verify that a Loan Product Management record cannot be created without entering the Minimum Loan Amount.", function () {
    create_loan_product_management.createWithoutMinimumLoanAmount();
  });

  it("29.11. Verify that a Loan Product Management record cannot be created without entering the Maximum Loan Amount.", function () {
    create_loan_product_management.createWithoutMaximumLoanAmount();
  });

  it("29.12. Verify that a Loan Product Management record cannot be created without selecting an Interest Calculation Method.", function () {
    create_loan_product_management.createWithoutInterestCalculationMethod();
  });

  it("29.13. Verify that a Loan Product Management record cannot be created without entering the Service Charge Rate.", function () {
    create_loan_product_management.createWithoutServiceChargeRate();
  });

  it("29.14. Verify that the action button functions correctly when clicked.", function () {
    create_loan_product_management.actionButtonCheck();
  });

  it("29.15. Verify that the user can successfully view the Loan Product Management details.", function () {
    create_loan_product_management.viewLoanProductManagement();
  });

  it("29.16. Verify that clicking the Go Back button on the view page redirects the user to the Loan Product Management list page.", function () {
    create_loan_product_management.viewGoBackButton();
  });

  it("29.17. Verify that the reset button functions correctly on the Loan Product Management create page.", function () {
    create_loan_product_management.createResetButton();
  });

  it("29.18. Verify that the submit button functions correctly on the Loan Product Management create page.", function () {
    create_loan_product_management.createSubmitButton();
  });

  it("29.19. Verify that clicking the Go Back button on the create page redirects the user to the Loan Product Management list page.", function () {
    create_loan_product_management.createGoBackButton();
  });

  it("29.20. Verify that the reset button functions correctly on the Loan Product Management edit page.", function () {
    create_loan_product_management.editResetButton();
  });

  it("29.21. Verify that clicking the submit button on the edit page redirects the user to the Loan Product Management list page.", function () {
    create_loan_product_management.editSubmitButton();
  });

  it("29.22. Verify that clicking the Go Back button on the edit page redirects the user to the Loan Product Management list page.", function () {
    create_loan_product_management.editGoBackButton();
  });

  it("29.23. Verify that the MFI Admin can successfully edit a Loan Product Management record.", function () {
    create_loan_product_management.editLoanProductManagement();
  });

  it("29.24. Verify that the user can filter inactive records using the status dropdown on the Loan Product Management list page.", function () {
    create_loan_product_management.statusInactiveDropdownCheck();
  });

  it("29.25. Verify that the user can filter active records using the status dropdown on the Loan Product Management list page.", function () {
    create_loan_product_management.statusActiveDropdownCheck();
  });

  it("29.26. Verify that the search results are displayed correctly when searching by Loan Product Name.", function () {
    create_loan_product_management.searchInLoanProductName();
  });

  it("29.27. Verify that the grid list resets successfully when the Reset button is clicked on the Loan Product Management page.", function () {
    create_loan_product_management.gridResetButtonCheck();
  });

  it("29.28. Verify that clicking the Search button on the grid page displays the Loan Product Management list successfully.", function () {
    create_loan_product_management.gridSearchButtonCheck();
  });

  it("29.29. Verify that the grid list refreshes successfully when the Refresh button is clicked.", function () {
    create_loan_product_management.gridRefreshButtonCheck();
  });

  it("29.30. Verify that the office selection dropdown functions correctly on the Loan Product Management list page.", function () {
    create_loan_product_management.selectofficeDropdown();
  });

  it("29.31. Verify that the grid list content changes correctly when switching the language from English to Bangla.", function () {
    create_loan_product_management.gridLanguageSwitchCheck();
  });
});