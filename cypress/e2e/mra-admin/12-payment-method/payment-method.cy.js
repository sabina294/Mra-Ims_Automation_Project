// npx cypress run --spec cypress/e2e/mra-admin/12-payment-method/payment-method.cy.js --browser chrome --headed --reporter mochawesome

import "cypress-file-upload";
import { create_payment_method } from "./payment-method.po";

describe("12. Payment method Grid list,Creation,View,Update,Inactive,Active,Search,Reset and Refresh Tests.", function () {
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

  it("12.01. Verify that the Payment Method List page loads successfully.", function () {
    create_payment_method.gridPaymentMethodListPage();
  });

  it("12.02. To verify that a new Payment Method can be successfully created when all required fields are filled with valid data.", function () {
    create_payment_method.createPaymentMethod();
  });

  it("12.03. To verify that the user can successfully edit an existing Payment Method information, including the Payment Method Name, and Description..", function () {
    create_payment_method.viewPaymentMethod();
  });

  it("12.04. should update the Payment Method with valid information by MRA-Admin role", function () {
    create_payment_method.editPaymentMethod();
  });

  it("12.05. To verify that the user can filter the inactive Payment Methods using the Status Dropdown on the Payment Method List page.", function () {
    create_payment_method.statusInactiveDropdownCheck();
  });

  it("12.06. Verify Filter Active Result by Status Dropdown", function () {
    create_payment_method.statusActiveDropdownCheck();
  });

  it("12.07. Verify Successful Search Result by Payment Method Name", function () {
    create_payment_method.searchInPaymentMethodName();
  });

  it("12.08. Verify Successful Reset of Grid List Using the Reset Button on Payment Method Page.", function () {
    create_payment_method.gridResetButtonCheck();
  });

  it("12.09. Verify Successful Refresh of Grid List Using the Refresh Button on Payment Method Page.", function () {
    create_payment_method.gridRefreshButtonCheck();
  });
});
