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

  it("09.01. Verify that the Amount-Based Loan list page loads successfully without errors.", function () {
    create_amount_based_loan.gridAmountBasedLoanListPage();
  });

  it("09.02. Verify that a new Amount-Based Loan is created successfully when all required fields are filled with valid data.", function () {
    create_amount_based_loan.createAmountBasedLoanProposal();
  });

  it("09.03. Verify that an Amount-Based Loan cannot be created without selecting an Office Type ID, even if all other fields are valid.", function () {
    create_amount_based_loan.createWithoutOfficeTypeId();
  });

  it("09.04. Verify that an Amount-Based Loan cannot be created without selecting a Role, even if all other fields are valid.", function () {
    create_amount_based_loan.createWithoutRole();
  });

  it("09.05. Verify that an Amount-Based Loan cannot be created without entering a Minimum Loan Amount, even if all other fields are valid.", function () {
    create_amount_based_loan.createWithoutMiniLoanAmount();
  });

  it("09.06. Verify that an Amount-Based Loan cannot be created without entering a Maximum Loan Amount, even if all other fields are valid.", function () {
    create_amount_based_loan.createWithoutMaxiLoanAmount();
  });

  it("09.07. Verify that an Amount-Based Loan cannot be created without entering Remarks, even if all other fields are valid.", function () {
    create_amount_based_loan.createWithoutRemarks();
  });

  it("09.08. Verify that an Amount-Based Loan cannot be created without selecting a Status, even if all other fields are valid.", function () {
    create_amount_based_loan.createWithoutStatus();
  });

  it("09.09. Verify that the action button performs successfully when clicked on the Amount-Based Loan list page.", function () {
    create_amount_based_loan.actionButtonCheck();
  });

  it("09.10. Verify that the user can view all relevant details of an Amount-Based Loan, including all associated fields.", function () {
    create_amount_based_loan.viewAmountBasedLoanProposal();
  });

  it("09.11. Verify that clicking the Go Back button on the Amount-Based Loan view page redirects the user to the list page.", function () {
    create_amount_based_loan.viewGoBackButton();
  });

  it("09.12. Verify that the edit mode toggle works correctly and all fields switch between editable and read-only states.", function () {
    create_amount_based_loan.turnOffEditMode();
  });

  it("09.13. Verify that the Amount-Based Loan name and description can be edited successfully.", function () {
    create_amount_based_loan.editAmountBasedLoanProposal();
  });

  it("09.14. Verify that the edit reset button clears all modified values and restores the previous state.", function () {
    create_amount_based_loan.editResetButton();
  });

  it("09.15. Verify that the edit submit button updates the Amount-Based Loan successfully.", function () {
    create_amount_based_loan.editSubmitButton();
  });

  it("09.16. Verify that clicking the Go Back button on the edit page redirects the user to the Amount-Based Loan list page.", function () {
    create_amount_based_loan.editGoBackButton();
  });

  it("09.17. Verify that inactive Amount-Based Loans can be filtered correctly using the status dropdown.", function () {
    create_amount_based_loan.statusInactiveDropdownCheck();
  });

  it("09.18. Verify that active Amount-Based Loans are filtered correctly using the status dropdown.", function () {
    create_amount_based_loan.statusActiveDropdownCheck();
  });

  it("09.19. Verify that searching by Amount-Based Loan name returns correct results.", function () {
    create_amount_based_loan.searchInRoleName();
  });

  it("09.20. Verify that the grid reset button clears all filters and resets the list successfully.", function () {
    create_amount_based_loan.gridResetButtonCheck();
  });

  it("09.21. Verify that the grid refresh button reloads the Amount-Based Loan list successfully.", function () {
    create_amount_based_loan.gridRefreshButtonCheck();
  });

  it("09.22. Verify that the create form reset button clears all entered input fields.", function () {
    create_amount_based_loan.createResetButtonCheck();
  });

  it("09.23. Verify that validation messages are displayed for required fields when submitting an empty form.", function () {
    create_amount_based_loan.createValidationMessageCheck();
  });

  it("09.24. Verify that clicking the Go Back button on the create page redirects the user to the list page.", function () {
    create_amount_based_loan.createGoBackButtonCheck();
  });

  it("09.25. Verify that clicking the Search button on the grid page redirects and loads the Amount-Based Loan list correctly.", function () {
    create_amount_based_loan.gridSearchButtonCheck();
  });

  it("09.26. Verify that the grid content language switches correctly between English and Bangla.", function () {
    create_amount_based_loan.gridLanguageSwitchCheck();
  });
});
