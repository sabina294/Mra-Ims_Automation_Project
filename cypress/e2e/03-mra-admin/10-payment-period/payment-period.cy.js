// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/10-payment-period/payment-period.cy.js --headed

import "cypress-file-upload";
import { create_payment_period } from "./payment-period.po";

describe("10. Payment Period Module Test Cases.", function () {
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

  it("10.01. Verify that the payment period list page loads successfully without any errors.", function () {
    create_payment_period.gridPaymentPeriodListPage();
  });

  it("10.02. Verify that a new payment period is created successfully when all required fields are populated with valid data.", function () {
    create_payment_period.createPaymentPeriod();
  });

  it("10.03. Verify that a new payment period is created successfully when all fields are populated with valid data.", function () {
    create_payment_period.createAllField();
  });

  it("10.04. Verify that a payment period cannot be created without an English payment period name, even if all other fields are valid.", function () {
    create_payment_period.createWithoutNameEn();
  });

  it("10.05. Verify that a payment period cannot be created without a Bangla payment period name, even if all other fields are valid.", function () {
    create_payment_period.createWithoutNameBn();
  });

  it("10.06. Verify that a payment period cannot be created without an English description, even if all other fields are valid.", function () {
    create_payment_period.createWithoutDiscriptionEn();
  });

  it("10.07. Verify that a payment period cannot be created without a Bangla description, even if all other fields are valid.", function () {
    create_payment_period.createWithoutDiscriptionBn();
  });

  it("10.08. Verify that a payment period cannot be created without a payment period ID, even if all other fields are valid.", function () {
    create_payment_period.createWithoutPayId();
  });

  it("10.09. Verify that a payment period cannot be created without selecting a payment period status, even if all other fields are valid.", function () {
    create_payment_period.createWithoutStatus();
  });

  it("10.10. Verify that a payment period cannot be created when at least one mandatory field is left empty.", function () {
    create_payment_period.createWithoutOneMandatoryField();
  });

  it("10.11. Verify that payment period creation fails when all mandatory fields are missing.", function () {
    create_payment_period.createWithoutMandatoryField();
  });

  it("10.12. Verify that the appropriate action is performed successfully when the action button is clicked.", function () {
    create_payment_period.actionButtonCheck();
  });

  it("10.13. Verify that the user can view all relevant details of a payment period, including its associated fields.", function () {
    create_payment_period.viewPaymentPeriod();
  });

  it("10.14. Verify that clicking the Go Back button on the payment period view page redirects the user to the payment period list page.", function () {
    create_payment_period.viewGoBackButton();
  });

  it("10.15. Verify that the payment period form edit mode can be toggled on and off, and fields are disabled or returned to view-only mode accordingly.", function () {
    create_payment_period.turnOffOnEditMode();
  });

  it("10.16. Verify that the payment period name and description can be edited successfully.", function () {
    create_payment_period.editPaymentPeriod();
  });

  it("10.17. Verify that the payment period edit reset button clears all modified input values.", function () {
    create_payment_period.editResetButton();
  });

  it("10.18. Verify that the payment period edit submit button updates the payment period successfully.", function () {
    create_payment_period.editSubmitButton();
  });

  it("10.19. Verify that clicking the Go Back button on the payment period edit page redirects the user to the payment period list page.", function () {
    create_payment_period.editGoBackButton();
  });

  it("10.20. Verify that inactive payment periods can be filtered correctly using the status dropdown on the payment period list page.", function () {
    create_payment_period.statusInactiveDropdownCheck();
  });

  it("10.21. Verify that active payment periods are filtered correctly using the status dropdown.", function () {
    create_payment_period.statusActiveDropdownCheck();
  });

  it("10.22. Verify that the search functionality returns correct results when searching by payment period name.", function () {
    create_payment_period.searchInPaymentPeriodName();
  });

  it("10.23. Verify that the grid list resets successfully when the reset button is clicked on the payment period list page.", function () {
    create_payment_period.gridResetButtonCheck();
  });

  it("10.24. Verify that the grid list refreshes successfully when the refresh button is clicked on the payment period list page.", function () {
    create_payment_period.gridRefreshButtonCheck();
  });

  it("10.25. Verify that pagination functions correctly on the last page of the payment period list.", function () {
    create_payment_period.paginationCheck();
  });

  it("10.26. Verify that the payment period creation reset button clears all entered input values.", function () {
    create_payment_period.createResetButtonCheck();
  });

  it("10.27. Verify that validation messages are displayed for required fields when the submit button is clicked with empty inputs.", function () {
    create_payment_period.createValidationMessageCheck();
  });

  it("10.28. Verify that clicking the Go Back button on the payment period create page redirects the user to the payment period list page.", function () {
    create_payment_period.createGoBackButtonCheck();
  });

  it("10.29. Verify that when the user clicks the Search button on the Payment Period grid page, the system redirects to the Payment Period List page..", function () {
    create_payment_period.gridSearchButtonCheck();
  });

  it("10.30. Verify that the grid list content switches correctly between English and Bangla languages.", function () {
    create_payment_period.gridLanguageSwitchCheck();
  });
});
