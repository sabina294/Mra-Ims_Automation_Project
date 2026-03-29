// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/11-payment-method/payment-method.cy.js --headed

import "cypress-file-upload";
import { create_payment_method } from "./payment-method.po";

describe("11. Payment Method Module Test Cases.", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");

  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.mraAdminUserId,
        d.credential.mraAdminPassword
      );
      cy.changeLanguage("english");
      cy.switchModule("MFI");
    });
  });

  after(() => {
    cy.logout();
  });

  it("11.01. Verify that the payment method list page loads successfully without any errors.", function () {
    create_payment_method.gridPaymentMethodListPage();
  });

  it("11.02. Verify that a new payment method is created successfully when all required fields are filled with valid data.", function () {
    create_payment_method.createPaymentMethod();
  });

  it("11.03. Verify that the payment method cannot be created without the English name, even when all other fields are valid.", function () {
    create_payment_method.createWithoutNameEn();
  });

  it("11.04. Verify that the payment method cannot be created without the Bangla name, even when all other fields are valid.", function () {
    create_payment_method.createWithoutNameBn();
  });

  it("11.05. Verify that the payment method cannot be created without the English description, even when all other fields are valid.", function () {
    create_payment_method.createWithoutDiscriptionEn();
  });

  it("11.06. Verify that the payment method cannot be created without the Bangla description, even when all other fields are valid.", function () {
    create_payment_method.createWithoutDiscriptionBn();
  });

  it("11.07. Verify that the payment method cannot be created without a payment method ID, even when all other fields are valid.", function () {
    create_payment_method.createWithoutPayId();
  });

  it("11.08. Verify that the payment method cannot be created without selecting a status, even when all other fields are valid.", function () {
    create_payment_method.createWithoutStatus();
  });

  it("11.09. Verify that a new payment method is created successfully when all fields are filled with valid data.", function () {
    create_payment_method.createAllField();
  });

  it("11.10. Verify that the payment method cannot be created when any one mandatory field is missing.", function () {
    create_payment_method.createWithoutOneMandatoryField();
  });

  it("11.11. Verify that payment method creation fails when mandatory fields are missing.", function () {
    create_payment_method.createWithoutMandatoryField();
  });

  it("11.12. Verify that the appropriate action is performed when the action button is clicked.", function () {
    create_payment_method.actionButtonCheck();
  });

  it("11.13. Verify that the user can view all relevant details of a payment method.", function () {
    create_payment_method.viewPaymentMethod();
  });

  it("11.14. Verify that clicking the Go Back button on the payment method view page redirects to the payment method list page.", function () {
    create_payment_method.viewGoBackButton();
  });

  it("11.15. Verify that edit mode can be toggled on and off, and fields switch between editable and view-only states accordingly.", function () {
    create_payment_method.turnOffOnEditMode();
  });

  it("11.16. Verify that the payment method name and description can be edited successfully.", function () {
    create_payment_method.editPaymentMethod();
  });

  it("11.17. Verify that the payment method edit reset button clears all modified input values.", function () {
    create_payment_method.editResetButton();
  });

  it("11.18. Verify that the payment method edit submit button updates the information successfully.", function () {
    create_payment_method.editSubmitButton();
  });

  it("11.19. Verify that clicking the Go Back button on the payment method edit page redirects to the payment method list page.", function () {
    create_payment_method.editGoBackButton();
  });

  it("11.20. Verify that inactive payment methods can be filtered using the status dropdown.", function () {
    create_payment_method.statusInactiveDropdownCheck();
  });

  it("11.21. Verify that active payment methods are filtered correctly using the status dropdown.", function () {
    create_payment_method.statusActiveDropdownCheck();
  });

  it("11.22. Verify that the search functionality returns correct results when searching by payment method name.", function () {
    create_payment_method.searchInPaymentMethodName();
  });

  it("11.23. Verify that clicking the reset button clears all filters and resets the grid list.", function () {
    create_payment_method.gridResetButtonCheck();
  });

  it("11.24. Verify that clicking the refresh button reloads the payment method list successfully.", function () {
    create_payment_method.gridRefreshButtonCheck();
  });

  it("11.25. Verify that the payment method creation reset button clears all entered input values.", function () {
    create_payment_method.createResetButtonCheck();
  });

  it("11.26. Verify that validation messages are displayed for required fields when submitting the form with empty inputs.", function () {
    create_payment_method.createValidationMessageCheck();
  });

  it("11.27. Verify that clicking the Go Back button on the payment method creation page redirects to the payment method list page.", function () {
    create_payment_method.createGoBackButtonCheck();
  });

  it("11.28. Verify that when the user clicks the Search button on the Payment Method grid page, the system redirects to the Payment Method List page..", function () {
    create_payment_method.gridSearchButtonCheck();
  });

  it("11.29. Verify that the grid list content switches correctly between English and Bangla languages.", function () {
    create_payment_method.gridLanguageSwitchCheck();
  });
});
