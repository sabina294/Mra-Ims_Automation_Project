// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/41-savings-account-management/savings-account-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_savings_account_management } from "./savings-account-management.po";

describe("41. Savings Account Management Module Test Cases", function () {
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

  it("41.01. Verify the savings account management list page loads correctly.", function () {
    create_savings_account_management.gridSavingsAccountManagementListPage();
  });

  it("41.02. Verify successfully performs the action when the action button is clicked.", function () {
    create_savings_account_management.actionButtonCheck();
  });

  it("41.03. Verify the user can successfully view the savings account management information, including the name and description.", function () {
    create_savings_account_management.viewSavingsAccountManag();
  });

  it("41.04. Verify that clicking the go back button on the savings account management view page redirects the user to the savings account management list page.", function () {
    create_savings_account_management.viewGoBackButton();
  });

  it("41.05. Verify that the Approved status can be selected on the savings account management list page.", function () {
    create_savings_account_management.statusApprovedDropdownCheck();
  });

  it("41.06. Verify that the Rejected status can be selected on the savings account management list page.", function () {
    create_savings_account_management.statusRejectedDropdownCheck();
  });

  it('41.07. Verify the functionality and expected behavior of the "Successful Office Status" dropdown.', function () {
    create_savings_account_management.statusOfficeDropdownCheck();
  });

  it("41.08. Verify that the search results are displayed correctly when searching by savings account management name.", function () {
    create_savings_account_management.searchSavingsAccManag();
  });

  it("41.09. Verify the grid list resets successfully when the reset button is clicked on the savings account management page.", function () {
    create_savings_account_management.gridResetButtonCheck();
  });

  it("41.10. Verify that the grid list is refreshed successfully when the refresh button is clicked on the savings account management page.", function () {
    create_savings_account_management.gridRefreshButtonCheck();
  });

  it("41.11. Verify that clicking Search updates the savings account management list.", function () {
    create_savings_account_management.gridSearchButtonCheck();
  });

  it("41.12. Verify that the list breadcrumb shows the Savings Account Management hierarchy.", function () {
    create_savings_account_management.listBreadcrumbCheck();
  });

  it("41.13. Verify that all savings account grid columns are visible.", function () {
    create_savings_account_management.requiredGridColumnsCheck();
  });

  it("41.14. Verify that account rows display serial numbers and required record data.", function () {
    create_savings_account_management.gridRecordDataCheck();
  });

  it("41.15. Verify that savings amounts are finite non-negative numbers.", function () {
    create_savings_account_management.savingsAmountCheck();
  });

  it("41.16. Verify that the Active filter displays only active savings accounts.", function () {
    create_savings_account_management.activeStatusResultCheck();
  });

  it("41.17. Verify that the account ID ascending sort indicator is selected.", function () {
    create_savings_account_management.accountIdAscendingSortCheck();
  });

  it("41.18. Verify that the account ID descending sort indicator is selected.", function () {
    create_savings_account_management.accountIdDescendingSortCheck();
  });

  it("41.19. Verify that the first page shows pagination controls with Previous disabled.", function () {
    create_savings_account_management.firstPagePaginationCheck();
  });

  it("41.20. Verify that office, status and search controls are available.", function () {
    create_savings_account_management.searchControlsCheck();
  });

  it("41.21. Verify that an unmatched search displays the No Data state.", function () {
    create_savings_account_management.noResultSearchCheck();
  });

  it("41.22. Verify that a partial member name search returns matching savings accounts.", function () {
    create_savings_account_management.partialMemberNameSearchCheck();
  });

  it("41.23. Verify that a full member name search returns matching savings accounts.", function () {
    create_savings_account_management.exactMemberNameSearchCheck();
  });

  it("41.24. Verify that Reset clears an unmatched search and restores savings account records.", function () {
    create_savings_account_management.resetSearchInputCheck();
  });

  it("41.25. Verify that searching by Savings Account ID returns matching accounts.", function () {
    create_savings_account_management.accountIdSearchCheck();
  });

  it("41.26. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_savings_account_management.gridLanguageSwitchCheck();
  });
});
