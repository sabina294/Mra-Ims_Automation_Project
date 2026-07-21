// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/40-savings-account-application-management/savings-account-application-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_savings_account_application_management } from "./savings-account-application-management.po";

describe("40. Savings Account Application Management Module Test Cases", function () {
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

  it("40.01. Verify that the savings account application management list page loads successfully without any errors.", function () {
    create_savings_account_application_management.gridSavingsAccApplicationListPage();
  });

  it("40.02. Verify that a new savings account application management record is created successfully when all required fields are filled with valid data.", function () {
    create_savings_account_application_management.createSavingsAccApplicationManagement();
  });

  it("40.03. Verify that a savings account application management record cannot be created without selecting an office, even when all other required fields contain valid data.", function () {
    create_savings_account_application_management.createWithoutOffice();
  });

  it("40.04. Verify that a savings account application management record cannot be created without selecting a savings product, even when all other required fields contain valid data.", function () {
    create_savings_account_application_management.createWithoutSavingsProduct();
  });

  it("40.05. Verify that a savings account application management record cannot be created without selecting a samity, even when all other required fields contain valid data.", function () {
    create_savings_account_application_management.createWithoutSamity();
  });

  it("40.06. Verify that a savings account application management record cannot be created without selecting a member, even when all other required fields contain valid data.", function () {
    create_savings_account_application_management.createWithoutMember();
  });

  it("40.07. Verify that a savings account application management record cannot be created without entering a recommended deposit amount, even when all other required fields contain valid data.", function () {
    create_savings_account_application_management.createWithoutRecommendedDepositAmount();
  });

  it("40.08. Verify that a savings account application management record cannot be created without entering an opening balance, even when all other required fields contain valid data.", function () {
    create_savings_account_application_management.createWithoutOpeningBalance();
  });

  it("40.09. Verify that the created savings account application management record appears in My Tasks.", function () {
    create_savings_account_application_management.myTaskMenuSavingsAccountApplicationManagement();
  });

  it("40.10. Verify that the Office dropdown filter works correctly on the My Tasks page.", function () {
    create_savings_account_application_management.myTaskOfficeDropdownCheck();
  });

  it("40.11. Verify that the Reset button clears all applied filters on the My Tasks page.", function () {
    create_savings_account_application_management.myTaskResetButtonCheck();
  });

  it("40.12. Verify that the Refresh button reloads the My Tasks list successfully.", function () {
    create_savings_account_application_management.myTaskRefreshButtonCheck();
  });

  it("40.13. Verify that the MFI admin can successfully approve a savings account application management record after creation.", function () {
    create_savings_account_application_management.approvesavingsAccount();
  });

  it("40.14. Verify that the action button performs the expected action successfully when clicked.", function () {
    create_savings_account_application_management.actionButtonCheck();
  });

  it("40.15. Verify that the user can view all relevant details of a savings account application management record, including its associated information.", function () {
    create_savings_account_application_management.viewSavingsAccApplicationManag();
  });

  it("40.16. Verify that clicking the Go Back button on the savings account application management view page redirects the user to the savings account application management list page.", function () {
    create_savings_account_application_management.viewGoBackButton();
  });

  it("40.17. Verify that approved savings account application management records can be filtered correctly using the status dropdown on the list page.", function () {
    create_savings_account_application_management.statusApprovedDropdownCheck();
  });

  it("40.18. Verify that rejected savings account application management records are filtered correctly using the status dropdown on the list page.", function () {
    create_savings_account_application_management.statusRejectedDropdownCheck();
  });

  it("40.19. Verify that the search functionality returns correct results when searching by savings account application management name.", function () {
    create_savings_account_application_management.searchSavingsAccAppManag();
  });

  it("40.20. Verify that the grid list is reset successfully when the Reset button is clicked on the savings account application management page.", function () {
    create_savings_account_application_management.gridResetButtonCheck();
  });

  it("40.21. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the savings account application management page.", function () {
    create_savings_account_application_management.gridRefreshButtonCheck();
  });

  it("40.22. Verify that the grid list displays draft records successfully when the Draft button is toggled on.", function () {
    create_savings_account_application_management.gridDraftButton();
  });

  it("40.23. Verify that the grid list updates correctly when the Draft button is toggled off.", function () {
    create_savings_account_application_management.gridDraftButtonOff();
  });

  it("40.24. Verify that the Reset button on the savings account application management creation page clears all entered input values.", function () {
    create_savings_account_application_management.createResetButtonCheck();
  });

  it("40.25. Verify that validation messages are displayed for all required fields when the Submit button is clicked with empty inputs.", function () {
    create_savings_account_application_management.createValidationMessageCheck();
  });

  it("40.26. Verify that validation messages are displayed for all required fields when the Draft button is clicked with empty inputs.", function () {
    create_savings_account_application_management.createDraftButtonCheck();
  });

  it("40.27. Verify that clicking the Go Back button on the savings account application management creation page redirects the user to the savings account application management list page.", function () {
    create_savings_account_application_management.createGoBackButtonCheck();
  });

  it("40.28. Verify that clicking the Search button on the savings account application management grid page displays the correct filtered results.", function () {
    create_savings_account_application_management.gridSearchButtonCheck();
  });

  it("40.29. Verify that the grid list content updates correctly when switching the language from English to Bangla.", function () {
    create_savings_account_application_management.gridLanguageSwitchCheck();
  });
});