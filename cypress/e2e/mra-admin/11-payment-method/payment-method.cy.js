// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/11-payment-method/payment-method.cy.js --headed

import "cypress-file-upload";
import { create_payment_method } from "./payment-method.po";

describe("11. Payment method Grid list,Creation,View,Update,Inactive,Active,Search,Reset,Refresh,All field,Without one field,Create Reset,Submit button Validation Messages,Go back and Language switch bangla Tests.", function () {
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

  it("11.01. Verify that the Payment Method List page loads successfully.", function () {
    create_payment_method.gridPaymentMethodListPage();
  });

  it("11.02. To verify that a new Payment Method can be successfully created when all required fields are filled with valid data.", function () {
    create_payment_method.createPaymentMethod();
  });

  it("11.03. To verify that the user can successfully edit an existing Payment Method information, including the Payment Method Name, and Description..", function () {
    create_payment_method.viewPaymentMethod();
  });

  it("11.04. should update the Payment Method with valid information by MRA-Admin role", function () {
    create_payment_method.editPaymentMethod();
  });

  it("11.05. To verify that the user can filter the inactive Payment Methods using the Status Dropdown on the Payment Method List page.", function () {
    create_payment_method.statusInactiveDropdownCheck();
  });

  it("11.06. Verify Filter Active Result by Status Dropdown", function () {
    create_payment_method.statusActiveDropdownCheck();
  });

  it("11.07. Verify Successful Search Result by Payment Method Name", function () {
    create_payment_method.searchInPaymentMethodName();
  });

  it("11.08. Verify Successful Reset of Grid List Using the Reset Button on Payment Method Page.", function () {
    create_payment_method.gridResetButtonCheck();
  });

  it("11.09. Verify Successful Refresh of Grid List Using the Refresh Button on Payment Method Page.", function () {
    create_payment_method.gridRefreshButtonCheck();
  });

  it("11.10. Verify that a new payment method can be successfully created when all fields are filled with valid data.", function () {
    create_payment_method.createAllField();
  });

  it("11.11. Verify check if payment method can be create without one mandatory field.", function () {
    create_payment_method.createWithoutOneMandatoryField();
  });

  it("11.12. Verify that the Payment Method creation reset button clears applied input terms.", function () {
    create_payment_method.createResetButtonCheck();
  });

  it("11.13. Verify that required field validation messages appear when mandatory fields are left empty.", function () {
    create_payment_method.createValidationMessageCheck();
  });

  it("11.14. Verify that clicking the Go Back button on the Payment Method Create page navigates the user back to the Payment Method List page.", function () {
    create_payment_method.createGoBackButtonCheck();
  });

  it("11.15. Verify successful payment method creation without mandatory field.", function () {
    create_payment_method.createWithoutMandatoryField();
  });

  it("11.16. Verify that the grid list content successfully switches from English to Bangla.", function () {
    create_payment_method.gridLanguageSwitchCheck();
  });
});
