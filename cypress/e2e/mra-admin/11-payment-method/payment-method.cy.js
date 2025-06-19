// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/11-payment-method/payment-method.cy.js --headed

import "cypress-file-upload";
import { create_payment_method } from "./payment-method.po";

describe("11. Payment Method Test.", function () {
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

  it("11.01. Verify the payment method list page loads without errors.", function () {
    create_payment_method.gridPaymentMethodListPage();
  });

  it("11.02. Verify a new payment method is created successfully when all required fields are filled with valid data.", function () {
    create_payment_method.createPaymentMethod();
  });

  it("11.03. Verify a new payment method is created successfully when all fields are filled with valid data.", function () {
    create_payment_method.createAllField();
  });

  it("11.04. Verify that a payment method cannot be created without filling in the mandatory field.", function () {
    create_payment_method.createWithoutOneMandatoryField();
  });

  it("11.05. Verify payment method creation fails when mandatory fields are missing.", function () {
    create_payment_method.createWithoutMandatoryField();
  });

  it("11.06. Verify the user can view all relevant details of a payment method, including its associated fields.", function () {
    create_payment_method.viewPaymentMethod();
  });

  it("11.07. Verify the payment method name and description can be edited successfully.", function () {
    create_payment_method.editPaymentMethod();
  });

  it("11.08. Verify the user can filter inactive payment methods using the status dropdown on the payment method list page.", function () {
    create_payment_method.statusInactiveDropdownCheck();
  });

  it("11.09. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_payment_method.statusActiveDropdownCheck();
  });

  it("11.10. Verify the search returns correct results when searching by payment method name.", function () {
    create_payment_method.searchInPaymentMethodName();
  });

  it("11.11. Verify the grid list resets successfully when the reset button is clicked on the payment method page.", function () {
    create_payment_method.gridResetButtonCheck();
  });

  it("11.12. Verify that the grid list is refreshed successfully when the refresh button is clicked on the payment method page.", function () {
    create_payment_method.gridRefreshButtonCheck();
  });

  it("11.13. Verify pagination functions as expected on the last page of the payment method list.", function () {
    create_payment_method.paginationCheck();
  });

  it("11.14. Verify the payment method creation reset button clears all entered input values.", function () {
    create_payment_method.createResetButtonCheck();
  });

  it("11.15. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_payment_method.createValidationMessageCheck();
  });

  it("11.16. Verify that clicking the go back button on the payment method create page redirects the user to the payment method list page.", function () {
    create_payment_method.createGoBackButtonCheck();
  });

  it("11.17. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_payment_method.gridLanguageSwitchCheck();
  });
});
