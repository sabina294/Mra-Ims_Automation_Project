// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/19-savings-account-application-management/savings-account-application-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_savings_account_application_management } from "./savings-account-application-management.po";

describe("19. Savings Account Application Management Module Test Cases", function () {
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

  it("19.01. Verify the savings account application management list page loads correctly.", function () {
    create_savings_account_application_management.gridSavingsAccApplicationListPage();
  });

  // it("19.02. Verify a new savings account application management record is created successfully when all required fields are filled with valid data.", function () {
  //   create_savings_account_application_management.createSavingsAccApplicationManagement();
  // });

  it("19.03. Verify that a savings account application management record cannot be created without selecting an office, even when all other required fields contain valid data.", function () {
    create_savings_account_application_management.createWithoutOffice();
  });

  it("19.04. Verify that a savings account application management record cannot be created without selecting a savings product, even when all other required fields contain valid data.", function () {
    create_savings_account_application_management.createWithoutSavingsProduct();
  });

  it("19.05. Verify that a savings account application management record cannot be created without selecting a samity, even when all other required fields contain valid data.", function () {
    create_savings_account_application_management.createWithoutSamity();
  });

  it("19.06. Verify that a savings account application management record cannot be created without selecting a member, even when all other required fields contain valid data.", function () {
    create_savings_account_application_management.createWithoutMember();
  });

  it("19.07. Verify that a savings account application management record cannot be created without entering a recommended deposit amount, even when all other required fields contain valid data.", function () {
    create_savings_account_application_management.createWithoutRecommendedDepositAmount();
  });

  it("19.08. Verify that a savings account application management record cannot be created without entering an opening balance, even when all other required fields contain valid data.", function () {
    create_savings_account_application_management.createWithoutOpeningBalance();
  });

  // it("19.09. Verify mfi-admin to successfully approve an savings account application management record after creation.", function () {
  //   create_savings_account_application_management.approveEmployee();
  // });

  it("19.10. Verify successfully performs the action when the action button is clicked.", function () {
    create_savings_account_application_management.actionButtonCheck();
  });

  it("19.11. Verify the user can successfully view the savings account application management information, including the name and description.", function () {
    create_savings_account_application_management.viewSavingsAccApplicationManag();
  });

  it("19.12. Verify that clicking the go back button on the savings account application management view page redirects the user to the savings account application management list page.", function () {
    create_savings_account_application_management.viewGoBackButton();
  });

  it("19.13. Verify the user can filter inactive employee records using the status dropdown on the savings account application management List page.", function () {
    create_savings_account_application_management.statusInactiveDropdownCheck();
  });

  it("19.14. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    create_savings_account_application_management.statusActiveDropdownCheck();
  });

  it("19.15. Verify that the search results are displayed correctly when searching by savings account application management name.", function () {
    create_savings_account_application_management.searchSavingsAccAppManag();
  });

  it("19.16. Verify the grid list resets successfully when the reset button is clicked on the savings account application management page.", function () {
    create_savings_account_application_management.gridResetButtonCheck();
  });

  it("19.17. Verify that the grid list is refreshed successfully when the refresh button is clicked on the savings account application management page.", function () {
    create_savings_account_application_management.gridRefreshButtonCheck();
  });

  it("19.18. Verify display the grid list successfully when the Draft button on is clicked on the savings account application management page", function () {
    create_savings_account_application_management.gridDraftButton();
  });

  it("19.19. Verify display the grid list successfully when the Draft button off is clicked on the savings account application management page", function () {
    create_savings_account_application_management.gridDraftButtonOff();
  });

  it("19.20. Verify the savings account application management creation reset button clears all entered input values.", function () {
    create_savings_account_application_management.createResetButtonCheck();
  });

  it("19.21. Verify the savings account application management creation draft button clears all entered input values.", function () {
    create_savings_account_application_management.createDraftButtonCheck();
  });

  it("19.22. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_savings_account_application_management.createValidationMessageCheck();
  });

  it("19.23. Verify that clicking the go back button on the savings account application management create page redirects the user to the savings account application management list page.", function () {
    create_savings_account_application_management.createGoBackButtonCheck();
  });

  it("19.24. Verify that when the user clicks the Search button on the savings account application management grid page, the system redirects to the savings account application management List page..", function () {
    create_savings_account_application_management.gridSearchButtonCheck();
  });

  it("19.25. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_savings_account_application_management.gridLanguageSwitchCheck();
  });
});
