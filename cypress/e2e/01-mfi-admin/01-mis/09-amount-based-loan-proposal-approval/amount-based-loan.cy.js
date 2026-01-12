// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/09-amount-based-loan-proposal-approval/amount-based-loan.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_amount_based_loan } from "./amount-based-loan-po";

describe("09. Amount based loan proposal approval Module Test Cases ", function () {
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

  it("09.01. Verify the amount based loan list page loads without errors.", function () {
    create_amount_based_loan.gridAmountBasedLoanListPage();
  });

  it("09.02. Verify a new amount based loan is created successfully when all required fields are filled with valid data.", function () {
    create_amount_based_loan.createAmountBasedLoanProposal();
  });

  it("09.03. Verify that a amount based loan cannot be created without a office type id , even if all other fields are valid.", function () {
    create_amount_based_loan.createWitoutOfficeTypeId();
  });

  it("09.04. Verify that a amount based loan cannot be created without a role, even if all other fields are valid.", function () {
    create_amount_based_loan.createWithoutRole();
  });

  it("09.05. Verify that a amount based loan cannot be created without a minimum loan amount, even if all other fields are valid.", function () {
    create_amount_based_loan.createWithoutMiniLoanAmount();
  });

  it("09.06. Verify that a amount based loan cannot be created without a maximum loan amount, even if all other fields are valid.", function () {
    create_amount_based_loan.createWithoutMaxiLoanAmount();
  });

  it("09.07. Verify that a amount based loan cannot be created without a remarks, even if all other fields are valid.", function () {
    create_amount_based_loan.createWithoutremarks();
  });

  it("09.08. Verify that a amount based loan cannot be created without a status, even if all other fields are valid.", function () {
    create_amount_based_loan.createWithoutStatus();
  });

  it("09.09. Verify successfully performs the action when the action button is clicked.", function () {
    create_amount_based_loan.actionButtonCheck();
  });

  it("09.10. Verify the user can view all relevant details of a amount based loan, including its associated fields.", function () {
    create_amount_based_loan.viewAmountBasedLoanProposal();
  });

  it("09.11. Verify that clicking the go back button on the amount based loan view page redirects the user to the amount based loan list page.", function () {
    create_amount_based_loan.viewGoBackButton();
  });

  it("09.12. Verify that the amount based loan forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_amount_based_loan.turnOffEditMode();
  });

  it("09.13. Verify the amount based loan name and description can be edited successfully.", function () {
    create_amount_based_loan.editAmountBasedLoanProposal();
  });

  it("09.14. Verify the amount based loan edit reset button functions correctly.", function () {
    create_amount_based_loan.editResetButton();
  });

  it("09.15. Verify the amount based loan edit submit button functions correctly.", function () {
    create_amount_based_loan.editSubmitButton();
  });

  it("09.16. Verify that clicking the go back button on the amount based loan edit page redirects the user to the amount based loan list page.", function () {
    create_amount_based_loan.editGoBackButton();
  });

  it("09.17. Verify the user can filter inactive amount based loans using the status dropdown on the amount based loan list page.", function () {
    create_amount_based_loan.statusInactiveDropdownCheck();
  });

  it("09.18. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_amount_based_loan.statusActiveDropdownCheck();
  });

  it("09.19. Verify the search returns correct results when searching by amount based loan name.", function () {
    create_amount_based_loan.searchInRoleName();
  });

  it("09.20. Verify the grid list resets successfully when the reset button is clicked on the amount based loan page.", function () {
    create_amount_based_loan.gridResetButtonCheck();
  });

  it("09.21. Verify that the grid list is refreshed successfully when the refresh button is clicked on the amount based loan page.", function () {
    create_amount_based_loan.gridRefreshButtonCheck();
  });

  it("09.22. Verify the amount based loan creation reset button clears all entered input values.", function () {
    create_amount_based_loan.createResetButtonCheck();
  });

  it("09.23. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_amount_based_loan.createValidationMessageCheck();
  });

  it("09.24. Verify that clicking the go back button on the amount based loan create page redirects the user to the amount based loan list page.", function () {
    create_amount_based_loan.createGoBackButtonCheck();
  });

  it("09.25. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_amount_based_loan.gridLanguageSwitchCheck();
  });
});
