// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/10-payment-period/payment-period.cy.js --headed

import "cypress-file-upload";
import { create_payment_period } from "./payment-period.po";

describe("10. Payment period Grid list,Creation,View,Update,Inactive,Active,Search,Reset,Refresh,create Reset,submit button Validation Messages,Go back and Language switch bangla Tests.", function () {
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

  it("10.01. Verify that the Payment Period List page loads successfully.", function () {
    create_payment_period.gridPaymentPeriodListPage();
  });

  it("10.02. To verify that a new Payment Period can be successfully created when all required fields are filled with valid data.", function () {
    create_payment_period.createPaymentPeriod();
  });

  it("10.03. To verify that the user can successfully edit an existing Payment Period information, including the Payment Period Name, and Description..", function () {
    create_payment_period.viewPaymentPeriod();
  });

  it("10.04. should update the Payment Period with valid information by MRA-Admin role", function () {
    create_payment_period.editPaymentPeriod();
  });

  it("10.05. To verify that the user can filter the inactive Payment Periods using the Status Dropdown on the Payment Period List page.", function () {
    create_payment_period.statusInactiveDropdownCheck();
  });

  it("10.06. Verify Filter Active Result by Status Dropdown", function () {
    create_payment_period.statusActiveDropdownCheck();
  });

  it("10.07. Verify Successful Search Result by Payment Period Name", function () {
    create_payment_period.searchInPaymentPeriodName();
  });

  it("10.08. Verify Successful Reset of Grid List Using the Reset Button on Payment Period Page.", function () {
    create_payment_period.gridResetButtonCheck();
  });

  it("10.09. Verify Successful Refresh of Grid List Using the Refresh Button on Payment Period Page.", function () {
    create_payment_period.gridRefreshButtonCheck();
  });

  it("10.10.Verify pagination works correctly on last page of the payment period list", function () {
    create_payment_period.paginationCheck();
  });

  it("10.11. Verify that the Payment Period creation reset button clears applied input terms.", function () {
    create_payment_period.createResetButtonCheck();
  });

  it("10.12. Verify that required field validation messages appear when mandatory fields are left empty.", function () {
    create_payment_period.createValidationMessageCheck();
  });

  it("10.13. Verify that clicking the Go Back button on the Payment Period Create page navigates the user back to the Payment Period List page.", function () {
    create_payment_period.createGoBackButtonCheck();
  });

  it("10.14. Verify successful payment period creation without mandatory field.", function () {
    create_payment_period.createWithoutMandatoryField();
  });

  it("10.15. Verify that the grid list content successfully switches from English to Bangla.", function () {
    create_payment_period.gridLanguageSwitchCheck();
  });
});
