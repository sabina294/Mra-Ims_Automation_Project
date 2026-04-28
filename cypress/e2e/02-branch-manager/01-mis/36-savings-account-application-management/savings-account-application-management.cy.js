// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/36-savings-account-application-management/savings-account-application-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_savings_account_application_management } from "./savings-account-application-management.po";

describe("36. Savings Account Application Management Module Test Cases", function () {
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

  it("36.01. Verify that the Savings Account Application Management list page loads successfully.", function () {
    create_savings_account_application_management.gridSavingsAccApplicationListPage();
  });

  it("36.02. Verify that a new Savings Account Application Management record is created successfully when all required fields are filled with valid data.", function () {
    create_savings_account_application_management.createSavingsAccApplicationManagement();
  });

  it("36.03. Verify that MFI admin can successfully approve a Savings Account Application Management record after creation.", function () {
    create_savings_account_application_management.approvesavingsAccount();
  });

  it("36.04. Verify that the action button performs the expected operation successfully.", function () {
    create_savings_account_application_management.actionButtonCheck();
  });

  it("36.05. Verify that the user can view Savings Account Application Management details, including name and description.", function () {
    create_savings_account_application_management.viewSavingsAccApplicationManag();
  });

  it("36.06. Verify that the Go Back button on the view page redirects the user to the Savings Account Application Management list page.", function () {
    create_savings_account_application_management.viewGoBackButton();
  });

  it("36.07. Verify that inactive records can be filtered successfully using the status dropdown on the list page.", function () {
    create_savings_account_application_management.statusInactiveDropdownCheck();
  });

  it("36.08. Verify that active records can be filtered successfully using the status dropdown on the list page.", function () {
    create_savings_account_application_management.statusActiveDropdownCheck();
  });

  it("36.09. Verify that search functionality works correctly when searching by Savings Account Application Management name.", function () {
    create_savings_account_application_management.searchSavingsAccAppManag();
  });

  it("36.10. Verify that the Reset button clears all filters and resets the grid list successfully.", function () {
    create_savings_account_application_management.gridResetButtonCheck();
  });

  it("36.11. Verify that the Refresh button reloads the grid list successfully.", function () {
    create_savings_account_application_management.gridRefreshButtonCheck();
  });

  it("36.12. Verify that the grid displays draft records correctly when the Draft filter is enabled.", function () {
    create_savings_account_application_management.gridDraftButton();
  });

  it("36.13. Verify that the grid hides draft records correctly when the Draft filter is disabled.", function () {
    create_savings_account_application_management.gridDraftButtonOff();
  });

  it("36.14. Verify that the Reset button on the create page clears all input fields successfully.", function () {
    create_savings_account_application_management.createResetButtonCheck();
  });

  it("36.15. Verify that validation messages are displayed when submitting the form with empty required fields.", function () {
    create_savings_account_application_management.createValidationMessageCheck();
  });

  it("36.16. Verify that validation messages are displayed when clicking the Draft button with empty required fields.", function () {
    create_savings_account_application_management.createDraftButtonCheck();
  });

  it("36.17. Verify that the Go Back button on the create page redirects to the Savings Account Application Management list page.", function () {
    create_savings_account_application_management.createGoBackButtonCheck();
  });

  it("36.18. Verify that clicking the Search button on the grid page redirects and displays the correct list results.", function () {
    create_savings_account_application_management.gridSearchButtonCheck();
  });

  it("36.19. Verify that the grid list content successfully switches between English and Bangla.", function () {
    create_savings_account_application_management.gridLanguageSwitchCheck();
  });

});