// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/21-savings-account-management/savings-account-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_savings_account_management } from "./savings-account-management.po";

describe("21. Savings Account Management Module Test Cases", function () {
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

  it("21.01. Verify the savings account management list page loads correctly.", function () {
    create_savings_account_management.gridSavingsAccountManagementListPage();
  });

  it("21.02. Verify successfully performs the action when the action button is clicked.", function () {
    create_savings_account_management.actionButtonCheck();
  });

  it("21.03. Verify the user can successfully view the savings account  management information, including the name and description.", function () {
    create_savings_account_management.viewSavingsAccountManag();
  });

  it("21.04. Verify that clicking the go back button on the savings account  management view list page.", function () {
    create_savings_account_management.viewGoBackButton();
  });

  it("21.05. Verify the user can filter inactive savings account records using the status dropdown on the savings account  management List page.", function () {
    create_savings_account_management.statusInactiveDropdownCheck();
  });

  it("21.06. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    create_savings_account_management.statusActiveDropdownCheck();
  });

  it("21.07. Verify that the search results are displayed correctly when searching by Savings Account Management name.", function () {
    create_savings_account_management.searchSavingsAccManag();
  });

  it("21.08. Verify the grid list resets successfully when the reset button is clicked on the Savings Account Management page.", function () {
    create_savings_account_management.gridResetButtonCheck();
  });

  it("21.09. Verify that the grid list is refreshed successfully when the refresh button is clicked on the Savings Account Management page.", function () {
    create_savings_account_management.gridRefreshButtonCheck();
  });

  it("21.10. Verify that when the user clicks the Search button on the Savings Account Management grid page, the system redirects to the Savings Account Management List page..", function () {
    create_savings_account_management.gridSearchButtonCheck();
  });

  it("21.11. Verify the list displays the correct breadcrumb.", function () {
    create_savings_account_management.listBreadcrumbCheck();
  });

  it("21.12. Verify all required savings account columns are visible.", function () {
    create_savings_account_management.requiredGridColumnsCheck();
  });

  it("21.13. Verify grid rows contain account, member, product and status data.", function () {
    create_savings_account_management.gridRecordDataCheck();
  });

  it("21.14. Verify Savings Amount contains valid numeric values.", function () {
    create_savings_account_management.savingsAmountCheck();
  });

  it("21.15. Verify the Active filter returns only active savings accounts.", function () {
    create_savings_account_management.activeStatusResultCheck();
  });

  it("21.16. Verify Reset clears entered search text and retains the account list.", function () {
    create_savings_account_management.resetSearchInputCheck();
  });

  it("21.17. Verify Savings Account ID supports ascending sorting.", function () {
    create_savings_account_management.accountIdAscendingSortCheck();
  });

  it("21.18. Verify Savings Account ID supports descending sorting.", function () {
    create_savings_account_management.accountIdDescendingSortCheck();
  });

  it("21.19. Verify pagination starts on page one with Previous disabled.", function () {
    create_savings_account_management.firstPagePaginationCheck();
  });

  it("21.20. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_savings_account_management.gridLanguageSwitchCheck();
  });
});
