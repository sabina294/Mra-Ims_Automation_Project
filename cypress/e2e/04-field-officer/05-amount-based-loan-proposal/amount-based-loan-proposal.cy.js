// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/05-amount-based-loan-proposal/amount-based-loan-proposal.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_amount_based_loan } from "./amount-based-loan-proposal.po";

describe("05. Amount based loan proposal approval Module Test Cases ", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.fieldOfficerUserId,
        d.credential.fieldOfficerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("05.01. Verify the amount based loan list page loads without errors.", function () {
    grid_amount_based_loan.gridAmountBasedLoanListPage();
  });

  it("05.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_amount_based_loan.actionButtonCheck();
  });

  it("05.03. Verify the user can view all relevant details of a amount based loan, including its associated fields.", function () {
    grid_amount_based_loan.viewAmountBasedLoanProposal();
  });

  it("05.04. Verify that the amount based loan forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    grid_amount_based_loan.turnOnEditMode();
  });

  it("05.05. Verify the amount based loan edit reset button functions correctly.", function () {
    grid_amount_based_loan.editResetButton();
  });

  it("05.06. Verify the amount based loan submit button functions correctly.", function () {
      grid_amount_based_loan.editSubmitButton();
    });

  it("05.07. Verify that clicking the go back button on the amount based loan edit page redirects the user to the amount based loan list page.", function () {
    grid_amount_based_loan.editGoBackButton();
  });

  it("05.08. Verify the user can filter inactive amount based loans using the status dropdown on the amount based loan list page.", function () {
    grid_amount_based_loan.statusInactiveDropdownCheck();
  });

  it("05.09. Verify the active result is filtered correctly by the status dropdown.", function () {
    grid_amount_based_loan.statusActiveDropdownCheck();
  });

  it("05.10. Verify the search returns correct results when searching by amount based loan name.", function () {
    grid_amount_based_loan.searchInRoleName();
  });

  it("05.11. Verify the grid list resets successfully when the reset button is clicked on the amount based loan page.", function () {
    grid_amount_based_loan.gridResetButtonCheck();
  });

  it("05.12. Verify that the grid list is refreshed successfully when the refresh button is clicked on the amount based loan page.", function () {
    grid_amount_based_loan.gridRefreshButtonCheck();
  });

  it("05.13. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_amount_based_loan.gridLanguageSwitchCheck();
  });
});
