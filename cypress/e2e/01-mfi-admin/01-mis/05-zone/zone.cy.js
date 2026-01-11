// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/05-zone/zone.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_zone } from "./zone.po";

describe("05. Zone Module Test Cases", function () {
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

  it("05.01. Verify the zone list page loads without errors.", function () {
    create_zone.gridZoneListPage();
  });

  it("05.02. Verify a new zone is created successfully when all required fields are filled with valid data.", function () {
    create_zone.createZone();
  });

  it("05.03. Verify that a zone cannot be created without a zone name english, even if all other fields are valid.", function () {
    create_zone.createWithoutNameEn();
  });

  it("05.04. Verify that a zone cannot be created without a zone name bangla, even if all other fields are valid.", function () {
    create_zone.createWithoutNameBn();
  });

  it("05.05. Verify that a zone cannot be created without a region, even if all other fields are valid.", function () {
    create_zone.createWithoutRegion();
  });

  it("05.06. Verify that a zone cannot be created without a zone code, even if all other fields are valid.", function () {
    create_zone.createWithoutZoneCode();
  });

  it("05.07. Verify that a zone cannot be created without status, even if all other fields are valid.", function () {
    create_zone.createWithoutStatus();
  });

  it("05.08. Verify successfully performs the action when the action button is clicked.", function () {
    create_zone.actionButtonCheck();
  });

  it("05.09. Verify the user can view all relevant details of a zone, including its associated fields.", function () {
    create_zone.viewZone();
  });

  it("05.10. Verify that clicking the go back button on the zone view page redirects the user to the zone list page.", function () {
    create_zone.viewGoBackButton();
  });

  it("05.11. Verify that the zone forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_zone.turnOffEditMode();
  });

  it("05.12. Verify the zone name and description can be edited successfully.", function () {
    create_zone.editZone();
  });

  it("05.13. Verify the zone edit reset button functions correctly.", function () {
    create_zone.editResetButton();
  });

  it("05.14. Verify the zone edit submit button functions correctly.", function () {
    create_zone.editSubmitButton();
  });

  it("05.15. Verify that clicking the go back button on the zone edit page redirects the user to the zone list page.", function () {
    create_zone.editGoBackButton();
  });

  it("05.16. Verify the user can filter inactive zones using the status dropdown on the zone list page.", function () {
    create_zone.statusInactiveDropdownCheck();
  });

  it("05.17. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_zone.statusActiveDropdownCheck();
  });

  it("05.18. Verify the search returns correct results when searching by zone name.", function () {
    create_zone.searchInZoneName();
  });

  it("05.19. Verify the grid list resets successfully when the reset button is clicked on the zone page.", function () {
    create_zone.gridResetButtonCheck();
  });

  it("05.20. Verify that the grid list is refreshed successfully when the refresh button is clicked on the zone page.", function () {
    create_zone.gridRefreshButtonCheck();
  });

  it("05.21. Verify the zone creation reset button clears all entered input values.", function () {
    create_zone.createResetButtonCheck();
  });

  it("05.22. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_zone.createValidationMessageCheck();
  });

  it("05.23. Verify that clicking the go back button on the zone create page redirects the user to the zone list page.", function () {
    create_zone.createGoBackButtonCheck();
  });

  it("05.24. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_zone.gridLanguageSwitchCheck();
  });
});
