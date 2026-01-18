// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/35-savings-account-management/savings-account-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_savings_account_management } from "./savings-account-management.po";

describe("35. Savings Account Management Module Test Cases", function () {
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

  it("35.01. Verify the savings account application management list page loads correctly.", function () {
    create_savings_account_management.gridSavingsAccountManagementListPage();
  });

  it("35.02. Verify successfully performs the action when the action button is clicked.", function () {
    create_savings_account_management.actionButtonCheck();
  });

  it("35.03. Verify the user can successfully view the savings account application management information, including the name and description.", function () {
    create_savings_account_management.viewSavingsAccountManag();
  });

  it("35.04. Verify that clicking the go back button on the savings account management view page redirects the user to the savings account management list page.", function () {
    create_savings_account_management.viewGoBackButton();
  });

  it("35.05. Verify the user can filter inactive employee records using the status dropdown on the savings account management List page.", function () {
    create_savings_account_management.statusApprovedDropdownCheck();
  });

  it("35.06. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    create_savings_account_management.statusRejectedDropdownCheck();
  });

  it('35.07. Verify the functionality and expected behavior of the "Successful Office Status" dropdown.', function () {
    create_savings_account_management.statusOfficeDropdownCheck();
  });

  it("35.08. Verify that the search results are displayed correctly when searching by savings account management name.", function () {
    create_savings_account_management.searchSavingsAccManag();
  });

  it("35.09. Verify the grid list resets successfully when the reset button is clicked on the savings account management page.", function () {
    create_savings_account_management.gridResetButtonCheck();
  });

  it("35.10. Verify that the grid list is refreshed successfully when the refresh button is clicked on the savings account management page.", function () {
    create_savings_account_management.gridRefreshButtonCheck();
  });

  it("35.11. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_savings_account_management.gridLanguageSwitchCheck();
  });
});
