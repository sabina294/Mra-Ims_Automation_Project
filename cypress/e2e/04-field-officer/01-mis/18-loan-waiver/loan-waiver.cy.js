// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/18-loan-waiver/loan-waiver.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_waiver } from "./loan-waiver.po";

describe("18. Loan waiver Module Test Cases", function () {
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

  it("18.01. Verify Loan waiver Grid List Page loads successfully", function () {
    create_loan_waiver.gridLoanWaiverListPage();
  });

  it("18.02. Verify that the draft button functions correctly on the loan waiver Create page.", function () {
    create_loan_waiver.createDraftButton();
  });

  it("18.03. Verify that the submit button functions correctly on the loan waiver Create page.", function () {
    create_loan_waiver.createSubmitButton();
  });

  it("18.04. Verify that the go back button functions correctly on the loan waiver Create page.", function () {
    create_loan_waiver.createGoBackButton();
  });

  it("18.05. Verify that the reset button functions correctly on the loan waiver Create page.", function () {
    create_loan_waiver.createResetButton();
  });

  it("18.06. Verify that the can successfully add a new Waiver row using the Add Icon button.", function () {
    create_loan_waiver.createAddIconWaiver();
  });

  it("18.07. Verify that the can successfully remove a Waiver row using the Remove Icon button.", function () {
    create_loan_waiver.createRemoveIconWaiver();
  });

  it("18.08. Verify successful creation of a Loan waiver record by MFI-Admin role", function () {
    create_loan_waiver.createLoanWaiver();
  });

  it("18.09. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_waiver.actionButtonCheck();
  });

  it("18.10. Verify successful Loan waiver information View.", function () {
    create_loan_waiver.viewLoanWaiver();
  });

  it("18.11. Verify that clicking the Go Back button on the Loan waiver View page redirects the user to the Loan waiver List page.", function () {
    create_loan_waiver.viewGoBackButton();
  });

  it("18.12. Verify the user can filter inactive employee records using the status dropdown on the member management List page.", function () {
    create_loan_waiver.statusSubmittedDropdownCheck();
  });

  it("18.13. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_loan_waiver.statusApprovedDropdownCheck();
  });

  it("18.14. Verify Successful Search Result by Loan waiver Name", function () {
    create_loan_waiver.searchInLoanWaivereName();
  });

  it("18.15. Verify Successful Reset of Grid List Using the Reset Button on Loan waiver Page.", function () {
    create_loan_waiver.gridResetButtonCheck();
  });

  it("18.16. Verify Successful Refresh of Grid List Using the Refresh Button on Loan waiver Page.", function () {
    create_loan_waiver.gridRefreshButtonCheck();
  });

  it("18.17. Verify that when the user clicks the Search button on the loan waiver grid page, the system redirects to the loan waiver List page..", function () {
    create_loan_waiver.gridSearchButtonCheck();
  });

  it("18.18. Verify Loan Waiver: the list displays the correct breadcrumb.", function () {
    create_loan_waiver.listBreadcrumbCheck();
  });

  it("18.19. Verify Loan Waiver: the grid displays all required columns.", function () {
    create_loan_waiver.requiredGridColumnsCheck();
  });

  it("18.20. Verify Loan Waiver: the grid displays valid records and amounts or a visible empty state.", function () {
    create_loan_waiver.recordsOrEmptyStateCheck();
  });

  it("18.21. Verify Loan Waiver: office, samity, status, date and search controls are visible.", function () {
    create_loan_waiver.filterControlsCheck();
  });

  it("18.22. Verify Loan Waiver: a non-existing search displays No Data.", function () {
    create_loan_waiver.noResultSearchCheck();
  });

  it("18.23. Verify Loan Waiver: Reset clears search and displays records or No Data.", function () {
    create_loan_waiver.resetSearchCheck();
  });

  it("18.24. Verify Loan Waiver: Refresh retains the list columns and valid grid state.", function () {
    create_loan_waiver.refreshListStateCheck();
  });

  it("18.25. Verify Loan Waiver: the Add New button is visible and enabled.", function () {
    create_loan_waiver.addButtonCheck();
  });

  it("18.26. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_waiver.gridLanguageSwitchCheck();
  });
});
