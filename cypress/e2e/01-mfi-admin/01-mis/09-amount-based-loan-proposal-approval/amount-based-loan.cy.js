// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/09-amount-based-loan-proposal-approval/amount-based-loan.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_amount_based_loan } from "./amount-based-loan-po";

describe("09. Amount Based Loan Proposal Approval Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");

  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.mfiAdminUserId,
        d.credential.mfiAdminPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("09.01. Verify that the amount based loan proposal approval list page loads successfully without any errors.", function () {
    create_amount_based_loan.gridAmountBasedLoanListPage();
  });

  it("09.02. Verify that a new amount based loan proposal approval record is created successfully when all required fields are filled with valid data.", function () {
    create_amount_based_loan.createAmountBasedLoanProposal();
  });

  it("09.03. Verify that an amount based loan proposal approval record cannot be created without selecting an office type, even when all other fields contain valid data.", function () {
    create_amount_based_loan.createWithoutOfficeTypeId();
  });

  it("09.04. Verify that an amount based loan proposal approval record cannot be created without selecting a role, even when all other fields contain valid data.", function () {
    create_amount_based_loan.createWithoutRole();
  });

  it("09.05. Verify that an amount based loan proposal approval record cannot be created without entering a minimum loan amount, even when all other fields contain valid data.", function () {
    create_amount_based_loan.createWithoutMiniLoanAmount();
  });

  it("09.06. Verify that an amount based loan proposal approval record cannot be created without entering a maximum loan amount, even when all other fields contain valid data.", function () {
    create_amount_based_loan.createWithoutMaxiLoanAmount();
  });

  it("09.07. Verify that an amount based loan proposal approval record cannot be created without entering remarks, even when all other fields contain valid data.", function () {
    create_amount_based_loan.createWithoutRemarks();
  });

  it("09.08. Verify that an amount based loan proposal approval record cannot be created without selecting a status, even when all other fields contain valid data.", function () {
    create_amount_based_loan.createWithoutStatus();
  });

  it("09.09. Verify that the action button performs the expected action successfully when clicked.", function () {
    create_amount_based_loan.actionButtonCheck();
  });

  it("09.10. Verify that the user can view all relevant details of an amount based loan proposal approval record, including its associated information.", function () {
    create_amount_based_loan.viewAmountBasedLoanProposal();
  });

  it("09.11. Verify that clicking the Go Back button on the amount based loan proposal approval view page redirects the user to the amount based loan proposal approval list page.", function () {
    create_amount_based_loan.viewGoBackButton();
  });

  it("09.12. Verify that edit mode on the amount based loan proposal approval form can be toggled on and off, and all fields return to view-only mode when disabled.", function () {
    create_amount_based_loan.turnOffEditMode();
  });

  it("09.13. Verify that the amount based loan proposal approval details can be edited successfully.", function () {
    create_amount_based_loan.editAmountBasedLoanProposal();
  });

  it("09.14. Verify that the Reset button on the amount based loan proposal approval edit page clears all modified values correctly.", function () {
    create_amount_based_loan.editResetButton();
  });

  it("09.15. Verify that the Submit button on the amount based loan proposal approval edit page updates the data successfully.", function () {
    create_amount_based_loan.editSubmitButton();
  });

  it("09.16. Verify that clicking the Go Back button on the amount based loan proposal approval edit page redirects the user to the amount based loan proposal approval list page.", function () {
    create_amount_based_loan.editGoBackButton();
  });

  it("09.17. Verify that inactive amount based loan proposal approval records can be filtered correctly using the status dropdown on the list page.", function () {
    create_amount_based_loan.statusInactiveDropdownCheck();
  });

  it("09.18. Verify that active amount based loan proposal approval records are filtered correctly using the status dropdown on the list page.", function () {
    create_amount_based_loan.statusActiveDropdownCheck();
  });

  it("09.19. Verify that the search functionality returns correct results when searching by amount based loan proposal approval name.", function () {
    create_amount_based_loan.searchInRoleName();
  });

  it("09.20. Verify that the grid list is reset successfully when the Reset button is clicked on the amount based loan proposal approval page.", function () {
    create_amount_based_loan.gridResetButtonCheck();
  });

  it("09.21. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the amount based loan proposal approval page.", function () {
    create_amount_based_loan.gridRefreshButtonCheck();
  });

  it("09.22. Verify that the Reset button on the amount based loan proposal approval creation page clears all entered input values.", function () {
    create_amount_based_loan.createResetButtonCheck();
  });

  it("09.23. Verify that validation messages are displayed for all required fields when the Submit button is clicked with empty inputs.", function () {
    create_amount_based_loan.createValidationMessageCheck();
  });

  it("09.24. Verify that clicking the Go Back button on the amount based loan proposal approval creation page redirects the user to the amount based loan proposal approval list page.", function () {
    create_amount_based_loan.createGoBackButtonCheck();
  });

  it("09.25. Verify that clicking the Search button on the amount based loan proposal approval grid page displays the correct filtered results.", function () {
    create_amount_based_loan.gridSearchButtonCheck();
  });

  it("09.26. Verify that the grid list content updates correctly when switching the language from English to Bangla.", function () {
    create_amount_based_loan.gridLanguageSwitchCheck();
  });
});
