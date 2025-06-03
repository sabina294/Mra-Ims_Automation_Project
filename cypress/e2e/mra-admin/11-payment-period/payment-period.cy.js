// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/11-payment-period/payment-period.cy.js --headed

import "cypress-file-upload";
import { create_payment_period } from "./payment-period.po";

describe("11. Payment period Grid list,Creation,View,Update,Inactive,Active,Search,Reset,Refresh,create Reset,submit button Validation Messages,Go back and Language switch bangla Tests.", function () {
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

  it("11.01. Verify that the Payment Period List page loads successfully.", function () {
    create_payment_period.gridPaymentPeriodListPage();
  });

  it("11.02. To verify that a new Payment Period can be successfully created when all required fields are filled with valid data.", function () {
    create_payment_period.createPaymentPeriod();
  });

  it("11.03. To verify that the user can successfully edit an existing Payment Period information, including the Payment Period Name, and Description..", function () {
    create_payment_period.viewPaymentPeriod();
  });

  it("11.04. should update the Payment Period with valid information by MRA-Admin role", function () {
    create_payment_period.editPaymentPeriod();
  });

  it("11.05. To verify that the user can filter the inactive Payment Periods using the Status Dropdown on the Payment Period List page.", function () {
    create_payment_period.statusInactiveDropdownCheck();
  });

  it("11.06. Verify Filter Active Result by Status Dropdown", function () {
    create_payment_period.statusActiveDropdownCheck();
  });

  it("11.07. Verify Successful Search Result by Payment Period Name", function () {
    create_payment_period.searchInPaymentPeriodName();
  });

  it("11.08. Verify Successful Reset of Grid List Using the Reset Button on Payment Period Page.", function () {
    create_payment_period.gridResetButtonCheck();
  });

  it("11.09. Verify Successful Refresh of Grid List Using the Refresh Button on Payment Period Page.", function () {
    create_payment_period.gridRefreshButtonCheck();
  });

  it("11.10. Verify that the Payment Period creation reset button clears applied input terms.", function () {
    create_payment_period.createResetButtonCheck();
  });

  it("11.11. Verify that required field validation messages appear when mandatory fields are left empty.", function () {
    create_payment_period.createValidationMessageCheck();
  });

  it("11.12. Verify that clicking the Go Back button on the Payment Period Create page navigates the user back to the Payment Period List page.", function () {
    create_payment_period.createGoBackButtonCheck();
  });

  it("11.13. Verify successful payment period creation without mandatory field.", function () {
    create_payment_period.createWithoutMandatoryField();
  });

  it("11.14. Verify that the grid list content successfully switches from English to Bangla.", function () {
    create_payment_period.gridLanguageSwitchCheck();
  });
});
