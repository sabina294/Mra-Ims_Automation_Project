// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/10-payment-period/payment-period.cy.js --headed

import "cypress-file-upload";
import { create_payment_period } from "./payment-period.po";

describe("10. Payment Period Test.", function () {
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

  it("10.01. Verify the payment period list page loads without errors.", function () {
    create_payment_period.gridPaymentPeriodListPage();
  });

  it("10.02. Verify a new payment period is created successfully when all required fields are filled with valid data.", function () {
    create_payment_period.createPaymentPeriod();
  });

  it("10.03. Verify a new payment period is created successfully when all fields are filled with valid data.", function () {
    create_payment_period.createAllField();
  });

  it("10.04. Verify that a payment period cannot be created without filling in the mandatory field.", function () {
    create_payment_period.createWithoutOneMandatoryField();
  });

  it("10.05. Verify payment period creation fails when mandatory fields are missing.", function () {
    create_payment_period.createWithoutMandatoryField();
  });

  it("10.06. Verify successfully performs the action when the action button is clicked.", function () {
    create_payment_period.actionButtonCheck();
  });

  it("10.07. Verify the user can view all relevant details of a payment period, including its associated fields.", function () {
    create_payment_period.viewPaymentPeriod();
  });

  // it("10.08. Verify that the payment period forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
  //   create_payment_period.turnOffOnEditMode();
  // });

  it("10.09. Verify the payment period name and description can be edited successfully.", function () {
    create_payment_period.editPaymentPeriod();
  });

  it("10.10. Verify the payment period edit reset button functions correctly.", function () {
    create_payment_period.editResetButton();
  });

  it("10.11. Verify the payment period edit submit button functions correctly.", function () {
    create_payment_period.editSubmitButton();
  });

  it("10.12. Verify that clicking the go back button on the payment period edit page redirects the user to the payment period  list page.", function () {
    create_payment_period.editGoBackButton();
  });

  it("10.13. Verify the user can filter inactive payment periods using the status dropdown on the payment period list page.", function () {
    create_payment_period.statusInactiveDropdownCheck();
  });

  it("10.14. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_payment_period.statusActiveDropdownCheck();
  });

  it("10.15. Verify the search returns correct results when searching by payment period name.", function () {
    create_payment_period.searchInPaymentPeriodName();
  });

  it("10.16. Verify the grid list resets successfully when the reset button is clicked on the payment period page.", function () {
    create_payment_period.gridResetButtonCheck();
  });

  it("10.17. Verify that the grid list is refreshed successfully when the refresh button is clicked on the payment period page.", function () {
    create_payment_period.gridRefreshButtonCheck();
  });

  it("10.18. Verify pagination functions as expected on the last page of the payment period list.", function () {
    create_payment_period.paginationCheck();
  });

  it("10.19. Verify the payment period creation reset button clears all entered input values.", function () {
    create_payment_period.createResetButtonCheck();
  });

  it("10.20. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_payment_period.createValidationMessageCheck();
  });

  it("10.21. Verify that clicking the go back button on the payment period create page redirects the user to the payment period list page.", function () {
    create_payment_period.createGoBackButtonCheck();
  });

  it("10.22. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_payment_period.gridLanguageSwitchCheck();
  });
});
