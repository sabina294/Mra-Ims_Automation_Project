// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/12-loan-class-status/loan-class-status.cy.js --headed

import "cypress-file-upload";
import { create_loan_class_status } from "./loan-class-status.po";

describe("12. Loan Class Status Module Test Cases.", function () {
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

  it("12.01. Verify the loan class status list page loads successfully without any errors.", function () {
    create_loan_class_status.gridLoanClassStatusListPage();
  });

  it("12.02. Verify a loan class status is created successfully when only mandatory fields are provided with valid data.", function () {
    create_loan_class_status.createLoanClassStatus();
  });

  it("12.03. Verify a loan class status is created successfully when all fields are filled with valid data.", function () {
    create_loan_class_status.createAllField();
  });

  it("12.04. Verify loan class status creation fails when the loan class ID is not provided.", function () {
    create_loan_class_status.createWithoutLoanId();
  });

  it("12.05. Verify loan class status creation fails when the English loan class name is not provided.", function () {
    create_loan_class_status.createWithoutLoanNameEn();
  });

  it("12.06. Verify loan class status creation fails when the Bangla loan class name is not provided.", function () {
    create_loan_class_status.createWithoutLoanNameBn();
  });

  it("12.07. Verify loan class status creation fails when the description field is not provided.", function () {
    create_loan_class_status.createWithoutDescription();
  });

  it("12.08. Verify loan class status creation fails when the loan class status field is not selected.", function () {
    create_loan_class_status.createWithoutLoanStatus();
  });

  it("12.09. Verify loan class status creation fails when any mandatory field is missing.", function () {
    create_loan_class_status.createWithoutMandatoryField();
  });

  it("12.10. Verify the action buttons perform the expected actions on the loan class status list page.", function () {
    create_loan_class_status.actionButtonCheck();
  });

  it("12.11. Verify the user can view all details of a loan class status successfully.", function () {
    create_loan_class_status.viewLoanClassStatus();
  });

  it("12.12. Verify clicking the Go Back button from the loan class status view page redirects to the list page.", function () {
    create_loan_class_status.viewGoBackButton();
  });

  it("12.13. Verify the edit mode can be toggled on and off and fields become editable or view-only accordingly.", function () {
    create_loan_class_status.turnOffOnEditMode();
  });

  it("12.14. Verify the loan class status name and description can be updated successfully.", function () {
    create_loan_class_status.editLoanClassStatus();
  });

  it("12.15. Verify the edit reset button restores the original loan class status data.", function () {
    create_loan_class_status.editResetButton();
  });

  it("12.16. Verify the edit submit button updates the loan class status successfully.", function () {
    create_loan_class_status.editSubmitButton();
  });

  it("12.17. Verify clicking the Go Back button from the edit page redirects to the loan class status list page.", function () {
    create_loan_class_status.editGoBackButton();
  });

  it("12.18. Verify inactive loan class statuses are filtered correctly using the status dropdown.", function () {
    create_loan_class_status.statusInactiveDropdownCheck();
  });

  it("12.19. Verify active loan class statuses are filtered correctly using the status dropdown.", function () {
    create_loan_class_status.statusActiveDropdownCheck();
  });

  it("12.20. Verify the search functionality returns correct results based on loan class status name.", function () {
    create_loan_class_status.searchInLoanClassId();
  });

  it("12.21. Verify clicking the reset button clears all filters and resets the grid list.", function () {
    create_loan_class_status.gridResetButtonCheck();
  });

  it("12.22. Verify clicking the refresh button reloads the loan class status list successfully.", function () {
    create_loan_class_status.gridRefreshButtonCheck();
  });

  it("12.23. Verify the create form reset button clears all entered input values.", function () {
    create_loan_class_status.createResetButtonCheck();
  });

  it("12.24. Verify validation messages are displayed for required fields when submitting empty inputs.", function () {
    create_loan_class_status.createValidationMessageCheck();
  });

  it("12.25. Verify clicking the Go Back button from the create page redirects to the loan class status list page.", function () {
    create_loan_class_status.createGoBackButtonCheck();
  });

  it("12.26. Verify that when the user clicks the Search button on the Loan Class Status grid page, the system redirects to the Loan Class Status List page..", function () {
    create_loan_class_status.gridSearchButtonCheck();
  });

  it("12.27. Verify the grid list language switches correctly between English and Bangla.", function () {
    create_loan_class_status.gridLanguageSwitchCheck();
  });
});
