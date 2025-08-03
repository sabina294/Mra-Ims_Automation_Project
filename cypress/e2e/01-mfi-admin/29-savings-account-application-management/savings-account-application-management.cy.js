// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mfi-admin/29-savings-account-application-management/savings-account-application-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_savings_account_application_management } from "./savings-account-application-management.po";

describe("29. Savings Account Application Management Module Test Cases", function () {
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

  it("29.01. Verify the savings account application management list page loads correctly.", function () {
    create_savings_account_application_management.gridSavingsAccApplicationListPage();
  });

    // it("29.02. Verify a new savings account application management record is created successfully when all required fields are filled with valid data.", function () {
    //   create_savings_account_application_management.createSavingsAccApplicationManagement();
    // });

  //   it("29.03. Verify mfi-admin to successfully approve an savings account application management record after creation.", function () {
  //     create_savings_account_application_management.approveEmployee();
  //   });

  it("29.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_savings_account_application_management.actionButtonCheck();
  });

  //   it("29.05. Verify the user can successfully view the savings account application management information, including the name and description.", function () {
  //     create_savings_account_application_management.viewSavingsAccApplicationManag();
  //   });

  it("29.06. Verify the user can filter inactive employee records using the status dropdown on the savings account application management List page.", function () {
    create_savings_account_application_management.statusInactiveDropdownCheck();
  });

  it("29.07. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    create_savings_account_application_management.statusActiveDropdownCheck();
  });

  it("29.08. Verify that the search results are displayed correctly when searching by savings account application management name.", function () {
    create_savings_account_application_management.searchSavingsAccAppManag();
  });

  it("29.09. Verify the grid list resets successfully when the reset button is clicked on the savings account application management page.", function () {
    create_savings_account_application_management.gridResetButtonCheck();
  });

  it("29.10. Verify that the grid list is refreshed successfully when the refresh button is clicked on the savings account application management page.", function () {
    create_savings_account_application_management.gridRefreshButtonCheck();
  });

  it("29.11. Verify display the grid list successfully when the Draft button on is clicked on the savings account application management page", function () {
    create_savings_account_application_management.gridDraftButton();
  });

  it("29.12. Verify display the grid list successfully when the Draft button off is clicked on the savings account application management page", function () {
    create_savings_account_application_management.gridDraftButtonOff();
  });

  it("29.13. Verify the savings account application management creation reset button clears all entered input values.", function () {
    create_savings_account_application_management.createResetButtonCheck();
  });

  it("29.14. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_savings_account_application_management.createValidationMessageCheck();
  });

  it("29.15. Verify that clicking the go back button on the savings account application management create page redirects the user to the savings account application management list page.", function () {
    create_savings_account_application_management.createGoBackButtonCheck();
  });

  it("29.16. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_savings_account_application_management.gridLanguageSwitchCheck();
  });
});
