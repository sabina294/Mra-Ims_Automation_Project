// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/09-loan-type/loan-type.cy.js --headed

import "cypress-file-upload";
import { create_loan_type } from "./loan-type.po";

describe("9. Loan Type Test.", function () {
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

  it("09.01. Verify the loan type list page loads without errors.", function () {
    create_loan_type.gridLoanTypeListPage();
  });

  it("09.02. Verify a new loan type is created successfully when all required fields are filled with valid data.", function () {
    create_loan_type.createLoanType();
  });

  it("09.03. Verify check if a loan type cannot be created when a mandatory field is missing.", function () {
    create_loan_type.createWithoutOneMandatoryField();
  });

  it("09.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_type.actionButtonCheck();
  });

  it("09.05. Verify the user can view all relevant details of a loan type, including its associated fields.", function () {
    create_loan_type.viewLoanType();
  });

  it("09.06. Verify that the Loan type forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_loan_type.turnOffOnEditMode();
  });

  it("09.07. Verify the loan type name and description can be edited successfully.", function () {
    create_loan_type.editLoanType();
  });

  it("09.08. Verify the loan type edit reset button functions correctly.", function () {
    create_loan_type.editResetButton();
  });

  it("09.09. Verify the loan type edit submit button functions correctly.", function () {
    create_loan_type.editSubmitButton();
  });

  it("09.10. Verify that clicking the go back button on the loan type edit page redirects the user to the loan type list page.", function () {
    create_loan_type.editGoBackButton();
  });

  it("09.11. Verify the user can filter inactive loan types using the status dropdown on the loan type list page.", function () {
    create_loan_type.statusInactiveDropdownCheck();
  });

  it("09.12. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_loan_type.statusActiveDropdownCheck();
  });

  it("09.13. Verify the search returns correct results when searching by loan type name.", function () {
    create_loan_type.searchInLoanTypeName();
  });

  it("09.14. Verify the grid list resets successfully when the reset button is clicked on the loan type page.", function () {
    create_loan_type.gridResetButtonCheck();
  });

  it("09.15. Verify that the grid list is refreshed successfully when the refresh button is clicked on the loan type page.", function () {
    create_loan_type.gridRefreshButtonCheck();
  });

  it("09.16. Verify the loan type creation reset button clears all entered input values.", function () {
    create_loan_type.createResetButtonCheck();
  });

  it("09.17. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_loan_type.createValidationMessageCheck();
  });

  it("09.18. Verify that clicking the go back button on the loan type create page redirects the user to the loan type list page.", function () {
    create_loan_type.createGoBackButtonCheck();
  });

  it("09.19. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_type.gridLanguageSwitchCheck();
  });
});
