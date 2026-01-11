// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/04-region/region.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_region } from "./region.po";

describe("04. Region Module Test Cases", function () {
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

  it("04.01. Verify the region list page loads without errors.", function () {
    create_region.gridRegionListPage();
  });

  it("04.02. Verify a new region is created successfully when all required fields are filled with valid data.", function () {
    create_region.createRegion();
  });

  it("04.03. Verify that a region cannot be created without a region name english, even if all other fields are valid.", function () {
    create_region.createWithoutNameEn();
  });

  it("04.04. Verify that a region cannot be created without a region name bangla, even if all other fields are valid.", function () {
    create_region.createWithoutNameBn();
  });

  it("04.05. Verify that a region cannot be created without a region code, even if all other fields are valid.", function () {
    create_region.createWithoutCode();
  });

  it("04.06. Verify that a region cannot be created without status, even if all other fields are valid.", function () {
    create_region.createWithoutStatus();
  });

  it("04.07. Verify successfully performs the action when the action button is clicked.", function () {
    create_region.actionButtonCheck();
  });

  it("04.08. Verify the user can view all relevant details of a region, including its associated fields.", function () {
    create_region.viewRegion();
  });

  it("04.09. Verify that clicking the go back button on the region view page redirects the user to the region list page.", function () {
    create_region.viewGoBackButton();
  });

  it("04.10. Verify that the region forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_region.turnOffEditMode();
  });

  it("04.11. Verify the region name and description can be edited successfully.", function () {
    create_region.editRegion();
  });

  it("04.12. Verify the region edit reset button functions correctly.", function () {
    create_region.editResetButton();
  });

  it("04.13. Verify the region edit submit button functions correctly.", function () {
    create_region.editSubmitButton();
  });

  it("04.14. Verify that clicking the go back button on the region edit page redirects the user to the region list page.", function () {
    create_region.editGoBackButton();
  });

  it("04.15. Verify the user can filter inactive regions using the status dropdown on the region list page.", function () {
    create_region.statusInactiveDropdownCheck();
  });

  it("04.16. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_region.statusActiveDropdownCheck();
  });

  it("04.17. Verify the search returns correct results when searching by region name.", function () {
    create_region.searchInRegionName();
  });

  it("04.18. Verify the grid list resets successfully when the reset button is clicked on the region page.", function () {
    create_region.gridResetButtonCheck();
  });

  it("04.19. Verify that the grid list is refreshed successfully when the refresh button is clicked on the region page.", function () {
    create_region.gridRefreshButtonCheck();
  });

  it("04.20. Verify the region creation reset button clears all entered input values.", function () {
    create_region.createResetButtonCheck();
  });

  it("04.21. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_region.createValidationMessageCheck();
  });

  it("04.22. Verify that clicking the go back button on the region create page redirects the user to the region list page.", function () {
    create_region.createGoBackButtonCheck();
  });

  it("04.23. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_region.gridLanguageSwitchCheck();
  });
});
