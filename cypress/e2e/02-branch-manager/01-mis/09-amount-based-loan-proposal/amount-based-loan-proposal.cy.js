// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/09-amount-based-loan-proposal/amount-based-loan-proposal.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_amount_based_loan } from "./amount-based-loan-proposal.po";

describe("09. Amount based loan proposal approval Module Test Cases ", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.branchManagerUserId,
        d.credential.branchManagerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("09.01. Verify that the Amount Based Loan list page loads successfully without errors.", function () {
    grid_amount_based_loan.gridAmountBasedLoanListPage();
  });

  it("09.02. Verify that the action button performs the expected action when clicked.", function () {
    grid_amount_based_loan.actionButtonCheck();
  });

  it("09.03. Verify that the user can view all relevant details of an Amount Based Loan, including all associated fields.", function () {
    grid_amount_based_loan.viewAmountBasedLoanProposal();
  });

  it("09.04. Verify that clicking the Go Back button on the Amount Based Loan view page redirects the user to the list page.", function () {
    grid_amount_based_loan.viewGoBackButton();
  });

  it("09.05. Verify that edit mode can be toggled on and off and all fields correctly switch between editable and read-only states.", function () {
    grid_amount_based_loan.turnOnEditMode();
  });

  it("09.06. Verify that the Edit Reset button restores the original values correctly.", function () {
    grid_amount_based_loan.editResetButton();
  });

  it("09.07. Verify that the Edit Submit button successfully updates the Amount Based Loan data.", function () {
    grid_amount_based_loan.editSubmitButton();
  });

  it("09.08. Verify that clicking the Go Back button on the edit page redirects the user to the list page.", function () {
    grid_amount_based_loan.editGoBackButton();
  });

  it("09.09. Verify that inactive Amount Based Loans can be filtered using the status dropdown.", function () {
    grid_amount_based_loan.statusInactiveDropdownCheck();
  });

  it("09.10. Verify that active Amount Based Loans are correctly filtered using the status dropdown.", function () {
    grid_amount_based_loan.statusActiveDropdownCheck();
  });

  it("09.11. Verify that searching by Amount Based Loan name returns the correct results.", function () {
    grid_amount_based_loan.searchInRoleName();
  });

  it("09.12. Verify that the Reset button clears all filters and restores the default grid state.", function () {
    grid_amount_based_loan.gridResetButtonCheck();
  });

  it("09.13. Verify that the Refresh button reloads the grid data successfully.", function () {
    grid_amount_based_loan.gridRefreshButtonCheck();
  });

  it("09.14. Verify that clicking the Search button navigates correctly and displays the filtered list.", function () {
    grid_amount_based_loan.gridSearchButtonCheck();
  });

  it("09.15. Verify that the grid content switches correctly between English and Bangla languages.", function () {
    grid_amount_based_loan.gridLanguageSwitchCheck();
  });
});
