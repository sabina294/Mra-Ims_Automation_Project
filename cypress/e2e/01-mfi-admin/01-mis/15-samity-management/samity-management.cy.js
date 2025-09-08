// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/15-samity-management/samity-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_samity_management } from "./samity-management.po";

describe("15. Samity management Module Test Cases", function () {
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

  it("15.01. Verify the samity management list page loads correctly.", function () {
    create_samity_management.gridSamityManagementListPage();
  });

  it("15.02. Verify a new samity management record is created successfully when all required fields are filled with valid data.", function () {
    create_samity_management.createSamity();
  });

  it("15.03. Verify mfi-admin to successfully approve an samity management record after creation.", function () {
    create_samity_management.approveSamity();
  });

  it("15.04. Verify that a samity management cannot be created without a samity management name english, even if all other fields are valid.", function () {
    create_samity_management.createWithoutNameEn();
  });

  it("15.05. Verify that a samity management cannot be created without a samity management name bangla, even if all other fields are valid.", function () {
    create_samity_management.createWithoutNameBn();
  });

  it("15.06. Verify successfully performs the action when the action button is clicked.", function () {
    create_samity_management.actionButtonCheck();
  });

  it("15.07. Verify the user can successfully view the samity management information, including the name and description.", function () {
    create_samity_management.viewSamity();
  });

  it("15.08. Verify the samity management edit reset button functions correctly.", function () {
    create_samity_management.editResetButton();
  });

  it("15.09. Verify that clicking the go back button on the samity management edit page redirects the user to the samity management list page.", function () {
    create_samity_management.editGoBackButton();
  });

  it("15.10. Verify the user can filter inactive employee records using the status dropdown on the samity management List page.", function () {
    create_samity_management.statusInactiveDropdownCheck();
  });

  it("15.11. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    create_samity_management.statusActiveDropdownCheck();
  });

  it("15.12. Verify that the search results are displayed correctly when searching by samity management name.", function () {
    create_samity_management.searchInSamityManagementName();
  });

  it("15.13. Verify the grid list resets successfully when the reset button is clicked on the samity management page.", function () {
    create_samity_management.gridResetButtonCheck();
  });

  it("15.14. Verify that the grid list is refreshed successfully when the refresh button is clicked on the samity management page.", function () {
    create_samity_management.gridRefreshButtonCheck();
  });

  it("15.15. Verify a new samity management record is created successfully when all required fields are filled with valid data.", function () {
    create_samity_management.createDraftButton();
  });

  it("15.16. Verify display the grid list successfully when the Draft button on is clicked on the Samity Management page", function () {
    create_samity_management.gridDraftButton();
  });

  it("15.17. Verify display the grid list successfully when the Draft button off is clicked on the Samity Management page", function () {
    create_samity_management.gridDraftButtonOff();
  });

  it("15.18. Verify check that the samity management  office selection works correctly from the dropdown on the samity list page.", function () {
    create_samity_management.selectofficeDropdown();
  });

  it("15.19. Verify the samity management creation reset button clears all entered input values.", function () {
    create_samity_management.createResetButtonCheck();
  });

  it("15.20. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_samity_management.createValidationMessageCheck();
  });

  it("15.21. Verify validation messages appear for required fields when the approve button is clicked with empty inputs.", function () {
    create_samity_management.createApproveButtonCheck();
  });

  it("15.22. Verify that clicking the go back button on the samity management create page redirects the user to the samity management list page.", function () {
    create_samity_management.createGoBackButtonCheck();
  });

  it("15.23. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_samity_management.gridLanguageSwitchCheck();
  });
});
