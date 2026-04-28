// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/37-savings-account-management/savings-account-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_savings_account_management } from "./savings-account-management.po";

describe("37. Savings Account Management Module Test Cases", function () {
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

  it("37.01. Verify that the Savings Account Management list page loads successfully.", function () {
    create_savings_account_management.gridSavingsAccountManagementListPage();
  });

  it("37.02. Verify that the action button performs the expected operation successfully.", function () {
    create_savings_account_management.actionButtonCheck();
  });

  it("37.03. Verify that the user can view Savings Account Management details including name and description.", function () {
    create_savings_account_management.viewSavingsAccountManag();
  });

  it("37.04. Verify that clicking the Go Back button redirects the user to the Savings Account Management list page.", function () {
    create_savings_account_management.viewGoBackButton();
  });

  it("37.05. Verify that inactive Savings Account Management records can be filtered using the status dropdown.", function () {
    create_savings_account_management.statusInactiveDropdownCheck();
  });

  it("37.06. Verify that active Savings Account Management records can be filtered using the status dropdown.", function () {
    create_savings_account_management.statusActiveDropdownCheck();
  });

  it("37.07. Verify that searching by Savings Account Management name returns correct results.", function () {
    create_savings_account_management.searchSavingsAccManag();
  });

  it("37.08. Verify that the grid resets successfully when the Reset button is clicked.", function () {
    create_savings_account_management.gridResetButtonCheck();
  });

  it("37.09. Verify that the grid refreshes successfully when the Refresh button is clicked.", function () {
    create_savings_account_management.gridRefreshButtonCheck();
  });

  it("37.10. Verify that clicking the Search button redirects or updates the Savings Account Management list correctly.", function () {
    create_savings_account_management.gridSearchButtonCheck();
  });

  it("37.11. Verify that the grid content successfully switches between English and Bangla languages.", function () {
    create_savings_account_management.gridLanguageSwitchCheck();
  });
});
