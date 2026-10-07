// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/34-client-welfare-fund/client-welfare-fund.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_client_welfare_fund } from "./client-welfare-fund.po";

describe("34. Client Welfare Fund Module Test Cases", function () {
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

  it("34.01. Verify that the Loan Welfare Fund grid list page loads successfully", function () {
    create_client_welfare_fund.gridClientWelfareFundListPage();
  });

  it("34.02. Verify that the reset button clears all input fields on the create Loan Welfare Fund page", function () {
    create_client_welfare_fund.createResetButtonCheck();
  });

  it("34.03. Verify that validation messages appear when required fields are submitted empty", function () {
    create_client_welfare_fund.createValidationMessageCheck();
  });

  it("34.04. Verify that the Go Back button redirects to the Loan Welfare Fund list page", function () {
    create_client_welfare_fund.createGoBackButtonCheck();
  });

  it("34.05. Verify successful creation of a Loan Welfare Fund.", function () {
    create_client_welfare_fund.createClientWelfareFund();
  });

  it("34.06. Verify successful approval of a newly created Loan Welfare Fund record", function () {
    create_client_welfare_fund.approveClientWelfareFund();
  });

  it("34.07. Verify that the action button performs the expected operations successfully", function () {
    create_client_welfare_fund.actionButtonCheck();
  });

  it("34.08. Verify that Loan Welfare Fund details can be viewed successfully", function () {
    create_client_welfare_fund.viewClientWelfareFund();
  });

  it("34.09. Verify that search works correctly by Loan Welfare Fund name", function () {
    create_client_welfare_fund.searchInClientWelfareFundName();
  });

  it("34.10. Verify that the reset button clears filters on the grid list page", function () {
    create_client_welfare_fund.gridResetButtonCheck();
  });

  it("34.11. Verify that the refresh button reloads the grid list successfully", function () {
    create_client_welfare_fund.gridRefreshButtonCheck();
  });

  it("34.12. Verify that clicking the search button navigates correctly to the Loan Welfare Fund list page", function () {
    create_client_welfare_fund.gridSearchButtonCheck();
  });

  it("34.13. Verify that the Client Welfare Fund breadcrumb is correct.", function () {
    create_client_welfare_fund.listBreadcrumbCheck();
  });

  it("34.14. Verify that all required welfare fund columns are displayed.", function () {
    create_client_welfare_fund.requiredGridColumnsCheck();
  });

  it("34.15. Verify that records contain identifiers, amounts, transaction date and status, or show No Data.", function () {
    create_client_welfare_fund.gridRecordDataCheck();
  });

  it("34.16. Verify that search controls are visible and enabled.", function () {
    create_client_welfare_fund.searchControlsCheck();
  });

  it("34.17. Verify that a nonexistent search displays No Data.", function () {
    create_client_welfare_fund.noResultSearchCheck();
  });

  it("34.18. Verify that Reset clears an unmatched search and restores the list.", function () {
    create_client_welfare_fund.resetRestoresGridCheck();
  });

  it("34.19. Verify that Refresh keeps the Client Welfare Fund list available.", function () {
    create_client_welfare_fund.refreshListStateCheck();
  });

  it("34.20. Verify that Member Name displays the ascending sort indicator.", function () {
    create_client_welfare_fund.nameAscendingSortCheck();
  });

  it("34.21. Verify that Member Name displays the descending sort indicator.", function () {
    create_client_welfare_fund.nameDescendingSortCheck();
  });

  it("34.22. Verify that first-page pagination or the empty state displays correctly.", function () {
    create_client_welfare_fund.paginationOrEmptyStateCheck();
  });

  it("34.23. Verify that grid content language switches correctly between English and Bangla", function () {
    create_client_welfare_fund.gridLanguageSwitchCheck();
  });

});