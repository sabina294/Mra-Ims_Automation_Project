// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/13-office-management/office-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_office_management } from "./office-management.po";

describe("13. Office Management Module Test Cases", function () {
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

  it("13.01. Verify the office management list page loads without errors.", function () {
    create_office_management.gridOfficeManagementListPage();
  });

  it("13.02. Verify a new office management is created successfully when all required fields are filled with valid data.", function () {
    create_office_management.createOffice();
  });

  it("13.03. Verify mra-admin to successfully approve an office management record after creation.", function () {
    cy.fixture(test_data).then((d) => {
      cy.loginAsMraAdmin(baseURL, d);
      create_office_management.approveOffice();
      cy.logout();
      cy.loginAsMfiAdmin(baseURL, d);
    });
  });

  it("13.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_office_management.actionButtonCheck();
  });

  it("13.05. Verify the user can view all relevant details of a office management, including its associated fields.", function () {
    create_office_management.viewOffice();
  });

  it("13.06. Verify that clicking the go back button on the office management view page redirects the user to the office management list page.", function () {
    create_office_management.viewGoBackButton();
  });

  it("13.07. Verify that the office management forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_office_management.turnOffEditMode();
  });

  it("13.08. Verify the user can filter inactive office managements using the status dropdown on the office management list page.", function () {
    create_office_management.statusInactiveDropdownCheck();
  });

  it("13.09. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_office_management.statusActiveDropdownCheck();
  });

  it("13.10. Verify the search returns correct results when searching by office management name.", function () {
    create_office_management.searchInOfficeManagementName();
  });

  it("13.11. Verify the grid list resets successfully when the reset button is clicked on the office management page.", function () {
    create_office_management.gridResetButtonCheck();
  });

  it("13.12. Verify that the grid list is refreshed successfully when the refresh button is clicked on the office management page.", function () {
    create_office_management.gridRefreshButtonCheck();
  });

  it("13.13. Verify display the grid list successfully when the Draft button on is clicked on the office management page", function () {
    create_office_management.gridDraftButton();
  });

  it("13.14. Verify display the grid list successfully when the Draft button off is clicked on the office management page", function () {
    create_office_management.gridDraftButtonOff();
  });

  it("13.15. Verify that the checkbox functions correctly.", function () {
    create_office_management.gridCheckboxCheck();
  });

  it("13.16. Verify that the checkbox lock button operates correctly when selected.", function () {
    create_office_management.gridCheckboxLockButtonCheck();
  });

  it("13.17. Verify that the checkbox unlock button operates correctly when selected.", function () {
    create_office_management.gridCheckboxUnlockButtonCheck();
  });

  it("13.18. Verify the office management creation reset button clears all entered input values.", function () {
    create_office_management.createResetButtonCheck();
  });

  it("13.19. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_office_management.createValidationMessageCheck();
  });

  it("13.20. Verify that clicking the go back button on the office management create page redirects the user to the office management list page.", function () {
    create_office_management.createGoBackButtonCheck();
  });

  it("13.21. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_office_management.gridLanguageSwitchCheck();
  });
});
