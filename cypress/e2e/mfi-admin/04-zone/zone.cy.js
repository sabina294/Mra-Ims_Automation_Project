// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mfi-admin/04-zone/zone.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_zone } from "./zone.po";

describe("04. Zone Module Test Cases", function () {
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

  it("04.01. Verify the zone list page loads without errors.", function () {
    create_zone.gridZoneListPage();
  });

  it("04.02. Verify a new zone is created successfully when all required fields are filled with valid data.", function () {
    create_zone.createZone();
  });

  it("04.03. Verify that a zone cannot be created without a zone name english, even if all other fields are valid.", function () {
    create_zone.createWithoutNameEn();
  });

  it("04.04. Verify that a zone cannot be created without a zone name bangla, even if all other fields are valid.", function () {
    create_zone.createWithoutNameBn();
  });

  it("04.05. Verify that a zone cannot be created without a region, even if all other fields are valid.", function () {
    create_zone.createWithoutRegion();
  });

  it("04.05. Verify that a zone cannot be created without a zone code, even if all other fields are valid.", function () {
    create_zone.createWithoutZoneCode();
  });

  it("04.06. Verify that a zone cannot be created without status, even if all other fields are valid.", function () {
    create_zone.createWithoutStatus();
  });

  it("04.07. Verify successfully performs the action when the action button is clicked.", function () {
    create_zone.actionButtonCheck();
  });

  it("04.08. Verify the user can view all relevant details of a zone, including its associated fields.", function () {
    create_zone.viewZone();
  });

  it("04.09. Verify that the zone forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_zone.turnOffEditMode();
  });

  it("04.10. Verify the zone name and description can be edited successfully.", function () {
    create_zone.editZone();
  });

  it("04.11. Verify the zone edit reset button functions correctly.", function () {
    create_zone.editResetButton();
  });

  it("04.12. Verify the zone edit submit button functions correctly.", function () {
    create_zone.editSubmitButton();
  });

  it("04.13. Verify that clicking the go back button on the zone edit page redirects the user to the zone list page.", function () {
    create_zone.editGoBackButton();
  });

  it("04.14. Verify the user can filter inactive zones using the status dropdown on the zone list page.", function () {
    create_zone.statusInactiveDropdownCheck();
  });

  it("04.15. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_zone.statusActiveDropdownCheck();
  });

  it("04.16. Verify the search returns correct results when searching by zone name.", function () {
    create_zone.searchInZoneName();
  });

  it("04.17. Verify the grid list resets successfully when the reset button is clicked on the zone page.", function () {
    create_zone.gridResetButtonCheck();
  });

  it("04.18. Verify that the grid list is refreshed successfully when the refresh button is clicked on the zone page.", function () {
    create_zone.gridRefreshButtonCheck();
  });

  it("04.19. Verify the zone creation reset button clears all entered input values.", function () {
    create_zone.createResetButtonCheck();
  });

  it("04.20. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_zone.createValidationMessageCheck();
  });

  it("04.21. Verify that clicking the go back button on the zone create page redirects the user to the zone list page.", function () {
    create_zone.createGoBackButtonCheck();
  });

  it("04.22. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_zone.gridLanguageSwitchCheck();
  });
});
