// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/17-loan-rebate/loan-rebate.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_rebate } from "./loan-rebate.po";

describe("17. Loan Rebate Module Test Cases", function () {
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

  it("17.01. Verify Loan rebate Grid List Page loads successfully", function () {
    create_loan_rebate.gridLoanRebateListPage();
  });

  it("17.02. Verify that the draft button functions correctly on the loan rebate Create page.", function () {
    create_loan_rebate.createDraftButton();
  });

  it("17.03. Verify that the submit button functions correctly on the loan rebate Create page.", function () {
    create_loan_rebate.createSubmitButton();
  });

  it("17.04. Verify that the go back button functions correctly on the loan rebate Create page.", function () {
    create_loan_rebate.createGoBackButton();
  });

  it("17.05. Verify that the reset button functions correctly on the loan rebate Create page.", function () {
    create_loan_rebate.createResetButton();
  });

  it("17.06. Verify that the can successfully add a new Loan Rebate row using the Add Icon button.", function () {
    create_loan_rebate.createAddIconRebate();
  });

  it("17.07. Verify that the can successfully remove a Loan Rebate row using the Remove Icon button.", function () {
    create_loan_rebate.createRemoveIconRebate();
  });

  it("17.08. Verify successful creation of a Loan rebate", function () {
    create_loan_rebate.createLoanRebate();
  });

  it("17.09. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_rebate.actionButtonCheck();
  });

  it("17.10. Verify successful Loan rebate information View.", function () {
    create_loan_rebate.viewLoanRebate();
  });

  it("17.11. Verify successful Loan rebate information View go back.", function () {
    create_loan_rebate.goBackLoanRebate();
  });

  it("17.12. Verify the user can filter inactive employee records using the status dropdown on the member management List page.", function () {
    create_loan_rebate.statusSubmittedDropdownCheck();
  });

  it("17.13. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_loan_rebate.statusApprovedDropdownCheck();
  });

  it("17.14. Verify Successful Search Result by Loan rebate Name", function () {
    create_loan_rebate.searchInLoanRebateName();
  });

  it("17.15. Verify Successful Reset of Grid List Using the Reset Button on Loan rebate Page.", function () {
    create_loan_rebate.gridResetButtonCheck();
  });

  it("17.16. Verify Successful Refresh of Grid List Using the Refresh Button on Loan rebate Page.", function () {
    create_loan_rebate.gridRefreshButtonCheck();
  });

  it("17.17. Verify that when the user clicks the Search button on the loan rebate grid page, the system redirects to the loan rebate List page..", function () {
    create_loan_rebate.gridSearchButtonCheck();
  });

  it("17.18. Verify Loan Rebate: the list displays the correct breadcrumb.", function () {
    create_loan_rebate.listBreadcrumbCheck();
  });

  it("17.19. Verify Loan Rebate: the grid displays all required columns.", function () {
    create_loan_rebate.requiredGridColumnsCheck();
  });

  it("17.20. Verify Loan Rebate: the grid displays valid records and amounts or a visible empty state.", function () {
    create_loan_rebate.recordsOrEmptyStateCheck();
  });

  it("17.21. Verify Loan Rebate: office, samity, status, date and search controls are visible.", function () {
    create_loan_rebate.filterControlsCheck();
  });

  it("17.22. Verify Loan Rebate: a non-existing search displays No Data.", function () {
    create_loan_rebate.noResultSearchCheck();
  });

  it("17.23. Verify Loan Rebate: Reset clears search and displays records or No Data.", function () {
    create_loan_rebate.resetSearchCheck();
  });

  it("17.24. Verify Loan Rebate: Refresh retains the list columns and valid grid state.", function () {
    create_loan_rebate.refreshListStateCheck();
  });

  it("17.25. Verify Loan Rebate: the Add New button is visible and enabled.", function () {
    create_loan_rebate.addButtonCheck();
  });

  it("17.26. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_rebate.gridLanguageSwitchCheck();
  });
});
