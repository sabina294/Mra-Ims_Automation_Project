// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/19-samity-management/samity-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_samity_management } from "./samity-management.po";

describe("19. Samity management Module Test Cases", function () {
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

  it("19.01. Verify the samity management list page loads correctly.", function () {
    create_samity_management.gridSamityManagementListPage();
  });

  it("19.02. Verify a new samity management record is created successfully when all required fields are filled with valid data.", function () {
    create_samity_management.createSamity();
  });

  it("19.03. Verify mfi-admin to successfully approve an samity management record after creation.", function () {
    create_samity_management.approveSamity();
  });

  it("19.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_samity_management.actionButtonCheck();
  });

  it("19.05. Verify the user can successfully view the samity management information, including the name and description.", function () {
    create_samity_management.viewSamity();
  });

  it("19.06. Verify that clicking the go back button on the samity management view page redirects the user to the samity management list page.", function () {
    create_samity_management.viewGoBackButton();
  });

  it("19.07. Verify the samity management edit reset button functions correctly.", function () {
    create_samity_management.editResetButton();
  });

  it("19.08. Verify that clicking the go back button on the samity management edit page redirects the user to the samity management list page.", function () {
    create_samity_management.editGoBackButton();
  });

  it("19.09. Verify the user can filter inactive employee records using the status dropdown on the samity management List page.", function () {
    create_samity_management.statusInactiveDropdownCheck();
  });

  it("19.10. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    create_samity_management.statusActiveDropdownCheck();
  });

  it("19.11. Verify that the search results are displayed correctly when searching by samity management name.", function () {
    create_samity_management.searchInSamityManagementName();
  });

  it("19.11. Verify the grid list resets successfully when the reset button is clicked on the samity management page.", function () {
    create_samity_management.gridResetButtonCheck();
  });

  it("19.12. Verify that the grid list is refreshed successfully when the refresh button is clicked on the samity management page.", function () {
    create_samity_management.gridRefreshButtonCheck();
  });

  it("19.13. Verify that the checkbox functions correctly.", function () {
    create_samity_management.gridCheckboxCheck();
  });

  it("19.14. Verify that the checkbox lock button operates correctly when selected.", function () {
    create_samity_management.gridCheckboxLockButtonCheck();
  });

  it("19.15. Verify that the checkbox unlock button operates correctly when selected.", function () {
    create_samity_management.gridCheckboxUnlockButtonCheck();
  });

  it("19.19. Verify a new samity management record is created successfully when all required fields are filled with valid data.", function () {
    create_samity_management.createDraftButton();
  });

  it("19.17. Verify display the grid list successfully when the Draft button on is clicked on the Samity Management page", function () {
    create_samity_management.gridDraftButton();
  });

  it("19.18. Verify display the grid list successfully when the Draft button off is clicked on the Samity Management page", function () {
    create_samity_management.gridDraftButtonOff();
  });

  it("19.19. Verify the samity management creation reset button clears all entered input values.", function () {
    create_samity_management.createResetButtonCheck();
  });

  it("19.20. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_samity_management.createValidationMessageCheck();
  });

  it("19.21. Verify that clicking the go back button on the samity management create page redirects the user to the samity management list page.", function () {
    create_samity_management.createGoBackButtonCheck();
  });

  it("19.22. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_samity_management.gridLanguageSwitchCheck();
  });
});
