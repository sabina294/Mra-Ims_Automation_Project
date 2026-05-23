// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/39-savings-product/savings-product.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_savings_product } from "./savings-product.po";

describe("39. Savings Product Module Test Cases", function () {
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

  it("39.01. Verify that the Savings Product list page loads successfully without any errors.", function () {
    create_savings_product.gridSavingsProductListPage();
  });

  it("39.02. Verify that a new Savings Product is created successfully when all required fields are filled with valid data.", function () {
    create_savings_product.createSavingsProduct();
  });

  it("39.03. Verify that a Savings Product cannot be created without selecting an Office, even when all other required fields contain valid data.", function () {
    create_savings_product.createWithoutOffice();
  });

  it("39.04. Verify that a Savings Product cannot be created without selecting a Savings Type, even when all other required fields contain valid data.", function () {
    create_savings_product.createWithoutSavingsType();
  });

  it("39.05. Verify that a Savings Product cannot be created without entering a Deposit Account ID Prefix, even when all other required fields contain valid data.", function () {
    create_savings_product.createWithoutDepositAccountIdPrefix();
  });

  it("39.06. Verify that a Savings Product cannot be created without entering the Savings Product Name (English), even when all other required fields contain valid data.", function () {
    create_savings_product.createWithoutSavingsProductNameEn();
  });

  it("39.07. Verify that a Savings Product cannot be created without entering the Savings Product Name (Bangla), even when all other required fields contain valid data.", function () {
    create_savings_product.createWithoutSavingsProductNameBn();
  });

  it("39.08. Verify that a Savings Product cannot be created without entering the Display Name, even when all other required fields contain valid data.", function () {
    create_savings_product.createWithoutDisplayName();
  });

  it("39.09. Verify that a Savings Product cannot be created without selecting a Status, even when all other required fields contain valid data.", function () {
    create_savings_product.createWithoutStatus();
  });

  it("39.10. Verify that a Savings Product cannot be created without selecting Interest Rate Terms, even when all other required fields contain valid data.", function () {
    create_savings_product.createWithoutInterestRateTerms();
  });

  it("39.11. Verify that a Savings Product cannot be created without selecting an Interest Rate Frequency, even when all other required fields contain valid data.", function () {
    create_savings_product.createWithoutInterestRateFrequency();
  });

  it("39.12. Verify that a Savings Product cannot be created without selecting Interest Calculated Using, even when all other required fields contain valid data.", function () {
    create_savings_product.createWithoutCalculatedUsing();
  });

  it("39.13. Verify that a Savings Product cannot be created without selecting an Interest Posting Period, even when all other required fields contain valid data.", function () {
    create_savings_product.createWithoutInterestPostingPeriod();
  });

  it("39.14. Verify that a Savings Product cannot be created without selecting a Start Date, even when all other required fields contain valid data.", function () {
    create_savings_product.createWithoutStartDate();
  });

  it("39.15. Verify that the action button functions correctly when clicked from the Savings Product grid list.", function () {
    create_savings_product.actionButtonCheck();
  });

  it("39.16. Verify that the user can view all relevant details of a Savings Product, including its associated fields.", function () {
    create_savings_product.viewSavingsProduct();
  });

  it("39.17. Verify that clicking the Go Back button from the Savings Product view page redirects the user to the Savings Product list page.", function () {
    create_savings_product.viewGoBackButton();
  });

  it("39.18. Verify that the Savings Product form edit mode can be toggled on and off successfully, and all fields return to view-only mode when edit mode is disabled.", function () {
    create_savings_product.turnOffEditMode();
  });

  it("39.19. Verify that the Savings Product edit reset button functions correctly.", function () {
    create_savings_product.editResetButton();
  });

  it("39.20. Verify that the Savings Product edit submit button functions correctly.", function () {
    create_savings_product.editSubmitButton();
  });

  it("39.21. Verify that clicking the Go Back button from the Savings Product edit page redirects the user to the Savings Product list page.", function () {
    create_savings_product.editGoBackButton();
  });

  // it("39.22. Verify that the Savings Product information can be edited successfully by the MFI Admin role.", function () {
  //   create_savings_product.editSavingsProduct();
  // });

  it("39.23. Verify that the user can filter inactive Savings Products using the Status dropdown from the Savings Product list page.", function () {
    create_savings_product.statusInactiveDropdownCheck();
  });

  it("39.24. Verify that active Savings Product records are filtered correctly using the Status dropdown.", function () {
    create_savings_product.statusActiveDropdownCheck();
  });

  it("39.25. Verify that the search functionality returns correct results when searching by Savings Product Name.", function () {
    create_savings_product.searchInSavingsProductName();
  });

  it("39.26. Verify that the grid list resets successfully when the Reset button is clicked on the Savings Product page.", function () {
    create_savings_product.gridResetButtonCheck();
  });

  it("39.27. Verify that the grid list refreshes successfully when the Refresh button is clicked on the Savings Product page.", function () {
    create_savings_product.gridRefreshButtonCheck();
  });

  it("39.28. Verify that the Savings Product creation reset button clears all entered input values successfully.", function () {
    create_savings_product.createResetButtonCheck();
  });

  it("39.29. Verify that validation messages are displayed for all required fields when the Submit button is clicked with empty inputs.", function () {
    create_savings_product.createValidationMessageCheck();
  });

  it("39.30. Verify that clicking the Go Back button from the Savings Product creation page redirects the user to the Savings Product list page.", function () {
    create_savings_product.createGoBackButtonCheck();
  });

  it("39.31. Verify that clicking the Search button on the Savings Product grid page redirects the user to the Savings Product list page.", function () {
    create_savings_product.gridSearchButtonCheck();
  });

  it("39.32. Verify that the grid list content changes correctly when switching the language from English to Bangla.", function () {
    create_savings_product.gridLanguageSwitchCheck();
  });
});