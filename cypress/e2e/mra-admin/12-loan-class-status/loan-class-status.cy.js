// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/12-loan-class-status/loan-class-status.cy.js --headed

import "cypress-file-upload";
import { create_loan_class_status } from "./loan-class-status.po";

describe("12. Loan Class Status Test.", function () {
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

  it("12.01. Verify the loan class status list page loads without errors.", function () {
    create_loan_class_status.gridLoanClassStatusListPage();
  });

  it("12.02. Verify a new loan class status is created successfully when all required fields are filled with valid data.", function () {
    create_loan_class_status.createLoanClassStatus();
  });

  it("12.03. Verify a new loan class status is created successfully when all fields are filled with valid data.", function () {
    create_loan_class_status.createAllField();
  });

  it("12.04. Verify that a loan class status cannot be created without filling in the mandatory field.", function () {
    create_loan_class_status.createWithoutOneMandatoryField();
  });

  it("12.05. Verify loan class status creation fails when mandatory fields are missing.", function () {
    create_loan_class_status.createWithoutMandatoryField();
  });

  it("12.06. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_class_status.actionButtonCheck();
  });

  it("12.07. Verify the user can view all relevant details of a loan class status, including its associated fields.", function () {
    create_loan_class_status.viewLoanClassStatus();
  });

  // it("12.08. Verify that the loan class status forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
  //   create_loan_class_status.turnOffOnEditMode();
  // });

  it("12.09. Verify the loan class status name and description can be edited successfully.", function () {
    create_loan_class_status.editLoanClassStatus();
  });

  it("12.10. Verify the loan class status edit reset button functions correctly.", function () {
    create_loan_class_status.editResetButton();
  });

  it("12.11. Verify the loan class status edit submit button functions correctly.", function () {
    create_loan_class_status.editSubmitButton();
  });

  it("12.12. Verify that clicking the go back button on the loan class status edit page redirects the user to the loan class status list page.", function () {
    create_loan_class_status.editGoBackButton();
  });

  it("12.13. Verify the user can filter inactive loan class statuss using the status dropdown on the loan class status list page.", function () {
    create_loan_class_status.statusInactiveDropdownCheck();
  });

  it("12.14. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_loan_class_status.statusActiveDropdownCheck();
  });

  it("12.15. Verify the search returns correct results when searching by loan class status name.", function () {
    create_loan_class_status.searchInLoanClassId();
  });

  it("12.16. Verify the grid list resets successfully when the reset button is clicked on the loan class status page.", function () {
    create_loan_class_status.gridResetButtonCheck();
  });

  it("12.17. Verify that the grid list is refreshed successfully when the refresh button is clicked on the loan class status page.", function () {
    create_loan_class_status.gridRefreshButtonCheck();
  });

  it("12.18. Verify the loan class status creation reset button clears all entered input values.", function () {
    create_loan_class_status.createResetButtonCheck();
  });

  it("12.19. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_loan_class_status.createValidationMessageCheck();
  });

  it("12.20. Verify that clicking the go back button on the loan class status create page redirects the user to the loan class status list page.", function () {
    create_loan_class_status.createGoBackButtonCheck();
  });

  it("12.21. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_class_status.gridLanguageSwitchCheck();
  });
});
