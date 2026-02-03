// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/09-loan-type/loan-type.cy.js --headed

import "cypress-file-upload";
import { create_loan_type } from "./loan-type.po";

describe("9. Loan Type Module Test Cases.", function () {
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

  it("09.01. Verify that the Loan Type list page loads successfully without any errors.", function () {
    create_loan_type.gridLoanTypeListPage();
  });

  it("09.02. Verify that a new Loan Type is created successfully when all required fields are filled with valid data.", function () {
    create_loan_type.createLoanType();
  });

  it("09.03. Verify that a Loan Type cannot be created without the Loan Type Name (English), even when all other fields are valid.", function () {
    create_loan_type.createWithoutloanTypeNameEn();
  });

  it("09.04. Verify that a Loan Type cannot be created without the Loan Type Name (Bangla), even when all other fields are valid.", function () {
    create_loan_type.createWithoutloanTypeNameBn();
  });

  it("09.05. Verify that a Loan Type cannot be created without the Loan Type ID, even when all other fields are valid.", function () {
    create_loan_type.createWithoutloanTypeId();
  });

  it("09.06. Verify that a Loan Type cannot be created without selecting a Product Nature, even when all other fields are valid.", function () {
    create_loan_type.createWithoutProductId();
  });

  it("09.07. Verify that a Loan Type cannot be created without a description, even when all other fields are valid.", function () {
    create_loan_type.createWithoutDescription();
  });

  it("09.08. Verify that a Loan Type cannot be created without selecting a status, even when all other fields are valid.", function () {
    create_loan_type.createWithoutStatus();
  });

  it("09.09. Verify that a Loan Type cannot be created when any mandatory field is missing.", function () {
    create_loan_type.createWithoutOneMandatoryField();
  });

  it("09.10. Verify that the action buttons on the Loan Type list page function correctly.", function () {
    create_loan_type.actionButtonCheck();
  });

  it("09.11. Verify that the user can view all relevant Loan Type details, including associated fields.", function () {
    create_loan_type.viewLoanType();
  });

  it("09.12. Verify that clicking the Go Back button on the Loan Type view page redirects the user to the Loan Type list page.", function () {
    create_loan_type.viewGoBackButton();
  });

  it("09.13. Verify that the Loan Type edit mode can be toggled on and off, and fields are properly enabled or disabled accordingly.", function () {
    create_loan_type.turnOffOnEditMode();
  });

  it("09.14. Verify that the Loan Type name and description can be edited successfully.", function () {
    create_loan_type.editLoanType();
  });

  it("09.15. Verify that the Loan Type edit Reset button clears all modified values.", function () {
    create_loan_type.editResetButton();
  });

  it("09.16. Verify that the Loan Type edit Submit button updates the Loan Type successfully.", function () {
    create_loan_type.editSubmitButton();
  });

  it("09.17. Verify that clicking the Go Back button on the Loan Type edit page redirects the user to the Loan Type list page.", function () {
    create_loan_type.editGoBackButton();
  });

  it("09.18. Verify that inactive Loan Types can be filtered using the Status dropdown on the Loan Type list page.", function () {
    create_loan_type.statusInactiveDropdownCheck();
  });

  it("09.19. Verify that active Loan Types are filtered correctly using the Status dropdown.", function () {
    create_loan_type.statusActiveDropdownCheck();
  });

  it("09.20. Verify that the search functionality returns correct results when searching by Loan Type name.", function () {
    create_loan_type.searchInLoanTypeName();
  });

  it("09.21. Verify that clicking the Reset button restores the Loan Type grid list to its default state.", function () {
    create_loan_type.gridResetButtonCheck();
  });

  it("09.22. Verify that clicking the Refresh button reloads the Loan Type grid list successfully.", function () {
    create_loan_type.gridRefreshButtonCheck();
  });

  it("09.23. Verify that the Loan Type creation Reset button clears all entered input values.", function () {
    create_loan_type.createResetButtonCheck();
  });

  it("09.24. Verify that validation messages are displayed for required fields when submitting the form with empty inputs.", function () {
    create_loan_type.createValidationMessageCheck();
  });

  it("09.25. Verify that clicking the Go Back button on the Loan Type creation page redirects the user to the Loan Type list page.", function () {
    create_loan_type.createGoBackButtonCheck();
  });

  it("09.26. Verify that the Loan Type grid list content switches correctly between English and Bangla languages.", function () {
    create_loan_type.gridLanguageSwitchCheck();
  });
});