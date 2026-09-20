// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/05-amount-based-loan-proposal/amount-based-loan-proposal.cy.js --browser chrome --headed

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

  it("05.04. Verify that clicking the Go Back button on the amount based loan View page redirects the user to the amount based loan List page.", function () {
    grid_amount_based_loan.viewGoBackButton();
  });

  it("05.05. Verify that the amount based loan forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    grid_amount_based_loan.turnOnEditMode();
  });

  it("05.06. Verify the amount based loan edit reset button functions correctly.", function () {
    grid_amount_based_loan.editResetButton();
  });

  it("05.07. Verify the amount based loan submit button functions correctly.", function () {
    grid_amount_based_loan.editSubmitButton();
  });

  it("05.08. Verify that clicking the go back button on the amount based loan edit page redirects the user to the amount based loan list page.", function () {
    grid_amount_based_loan.editGoBackButton();
  });

  it("05.09. Verify the user can filter inactive amount based loans using the status dropdown on the amount based loan list page.", function () {
    grid_amount_based_loan.statusInactiveDropdownCheck();
  });

  it("05.10. Verify the active result is filtered correctly by the status dropdown.", function () {
    grid_amount_based_loan.statusActiveDropdownCheck();
  });

  it("05.11. Verify the search returns correct results when searching by amount based loan name.", function () {
    grid_amount_based_loan.searchInRoleName();
  });

  it("05.12. Verify the grid list resets successfully when the reset button is clicked on the amount based loan page.", function () {
    grid_amount_based_loan.gridResetButtonCheck();
  });

  it("05.13. Verify that the grid list is refreshed successfully when the refresh button is clicked on the amount based loan page.", function () {
    grid_amount_based_loan.gridRefreshButtonCheck();
  });

  it("05.14. Verify that when the user clicks the Search button on the amount based loan grid page, the system redirects to the amount based loan List page..", function () {
    grid_amount_based_loan.gridSearchButtonCheck();
  });

  it("05.15. Verify the Amount Based Loan Proposal Approval list breadcrumb.", function () {
    grid_amount_based_loan.listBreadcrumbCheck();
  });

  it("05.16. Verify the required Amount Based Loan Proposal Approval grid columns.", function () {
    grid_amount_based_loan.requiredGridColumnsCheck();
  });

  it("05.17. Verify that each approval row has a valid loan range and status.", function () {
    grid_amount_based_loan.gridRecordDataCheck();
  });

  it("05.18. Verify exact Role search.", function () {
    grid_amount_based_loan.exactNameSearchCheck();
  });

  it("05.19. Verify partial Role search.", function () {
    grid_amount_based_loan.partialNameSearchCheck();
  });

  it("05.20. Verify non-existing Role search shows no records.", function () {
    grid_amount_based_loan.noResultSearchCheck();
  });

  it("05.21. Verify Reset restores the approval grid.", function () {
    grid_amount_based_loan.resetRestoresGridCheck();
  });

  it("05.22. Verify Active filter results.", function () {
    grid_amount_based_loan.activeStatusResultCheck();
  });

  it("05.23. Verify Role ascending sorting.", function () {
    grid_amount_based_loan.nameAscendingSortCheck();
  });

  it("05.24. Verify Role descending sorting.", function () {
    grid_amount_based_loan.nameDescendingSortCheck();
  });

  it("05.25. Verify approval grid first-page pagination state.", function () {
    grid_amount_based_loan.firstPagePaginationCheck();
  });

  it("05.26. Verify approval View breadcrumb and grid-to-view data.", function () {
    grid_amount_based_loan.viewPageDataAndBreadcrumbCheck();
  });

  it("05.27. Verify approval Edit Mode fields and Reset behavior.", function () {
    grid_amount_based_loan.editModeFieldsAndResetCheck();
  });

  it("05.28. Verify that the grid content switches correctly between English and Bangla languages.", function () {
    grid_amount_based_loan.gridLanguageSwitchCheck();
  });
});
