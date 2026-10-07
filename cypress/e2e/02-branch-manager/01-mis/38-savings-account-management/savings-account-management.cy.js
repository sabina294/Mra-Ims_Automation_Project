// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/38-savings-account-management/savings-account-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_savings_account_management } from "./savings-account-management.po";

describe("38. Savings Account Management Module Test Cases", function () {
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

  it("38.01. Verify that the Savings Account Management list page loads successfully.", function () {
    create_savings_account_management.gridSavingsAccountManagementListPage();
  });

  it("38.02. Verify that the action button performs the expected operation successfully.", function () {
    create_savings_account_management.actionButtonCheck();
  });

  it("38.03. Verify that the user can view Savings Account Management details including name and description.", function () {
    create_savings_account_management.viewSavingsAccountManag();
  });

  it("38.04. Verify that clicking the Go Back button redirects the user to the Savings Account Management list page.", function () {
    create_savings_account_management.viewGoBackButton();
  });

  it("38.05. Verify that inactive Savings Account Management records can be filtered using the status dropdown.", function () {
    create_savings_account_management.statusInactiveDropdownCheck();
  });

  it("38.06. Verify that active Savings Account Management records can be filtered using the status dropdown.", function () {
    create_savings_account_management.statusActiveDropdownCheck();
  });

  it("38.07. Verify that searching by Savings Account Management name returns correct results.", function () {
    create_savings_account_management.searchSavingsAccManag();
  });

  it("38.08. Verify that the grid resets successfully when the Reset button is clicked.", function () {
    create_savings_account_management.gridResetButtonCheck();
  });

  it("38.09. Verify that the grid refreshes successfully when the Refresh button is clicked.", function () {
    create_savings_account_management.gridRefreshButtonCheck();
  });

  it("38.10. Verify that clicking the Search button redirects or updates the Savings Account Management list correctly.", function () {
    create_savings_account_management.gridSearchButtonCheck();
  });

  it("38.11. Verify that the list breadcrumb shows the Savings Account Management hierarchy.", function () {
    create_savings_account_management.listBreadcrumbCheck();
  });

  it("38.12. Verify that all savings account grid columns are visible.", function () {
    create_savings_account_management.requiredGridColumnsCheck();
  });

  it("38.13. Verify that account rows display serial numbers and required record data.", function () {
    create_savings_account_management.gridRecordDataCheck();
  });

  it("38.14. Verify that savings amounts are finite non-negative numbers.", function () {
    create_savings_account_management.savingsAmountCheck();
  });

  it("38.15. Verify that the Active filter displays only active savings accounts.", function () {
    create_savings_account_management.activeStatusResultCheck();
  });

  it("38.16. Verify that the account ID ascending sort indicator is selected.", function () {
    create_savings_account_management.accountIdAscendingSortCheck();
  });

  it("38.17. Verify that the account ID descending sort indicator is selected.", function () {
    create_savings_account_management.accountIdDescendingSortCheck();
  });

  it("38.18. Verify that the first page shows pagination controls with Previous disabled.", function () {
    create_savings_account_management.firstPagePaginationCheck();
  });

  it("38.19. Verify that office, status and search controls are available.", function () {
    create_savings_account_management.searchControlsCheck();
  });

  it("38.20. Verify that an unmatched search displays the No Data state.", function () {
    create_savings_account_management.noResultSearchCheck();
  });

  it("38.21. Verify that a partial member name search returns matching savings accounts.", function () {
    create_savings_account_management.partialMemberNameSearchCheck();
  });

  it("38.22. Verify that a full member name search returns matching savings accounts.", function () {
    create_savings_account_management.exactMemberNameSearchCheck();
  });

  it("38.23. Verify that Reset clears an unmatched search and restores savings account records.", function () {
    create_savings_account_management.resetSearchInputCheck();
  });

  it("38.24. Verify that the grid content successfully switches between English and Bangla languages.", function () {
    create_savings_account_management.gridLanguageSwitchCheck();
  });
});
