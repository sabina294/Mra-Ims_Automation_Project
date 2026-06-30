// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/05-zone/zone.cy.js --browser chrome --headed
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/05-zone/zone.cy.js --browser chrome --headless

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

  it("05.01. Verify that the zone list page loads successfully without any errors.", function () {
    create_zone.gridZoneListPage();
  });

  it("05.02. Verify that a new zone is created successfully when all required fields are filled with valid data.", function () {
    create_zone.createZone();
  });

  it("05.03. Verify that a zone cannot be created without entering the zone name in English, even when all other fields contain valid data.", function () {
    create_zone.createWithoutNameEn();
  });

  it("05.04. Verify that a zone cannot be created without entering the zone name in Bangla, even when all other fields contain valid data.", function () {
    create_zone.createWithoutNameBn();
  });

  it("05.05. Verify that a zone cannot be created without selecting a region, even when all other fields contain valid data.", function () {
    create_zone.createWithoutRegion();
  });

  it("05.06. Verify that a zone cannot be created without entering a zone code, even when all other fields contain valid data.", function () {
    create_zone.createWithoutZoneCode();
  });

  it("05.07. Verify that a zone cannot be created without selecting a status, even when all other fields contain valid data.", function () {
    create_zone.createWithoutStatus();
  });

  it("05.08. Verify that the action button performs the expected action successfully when clicked.", function () {
    create_zone.actionButtonCheck();
  });

  it("05.09. Verify that the user can view all relevant details of a zone, including its associated information.", function () {
    create_zone.viewZone();
  });

  it("05.10. Verify that clicking the Go Back button on the zone view page redirects the user to the zone list page.", function () {
    create_zone.viewGoBackButton();
  });

  it("05.11. Verify that edit mode on the zone form can be toggled on and off, and all fields return to view-only mode when disabled.", function () {
    create_zone.turnOffEditMode();
  });

  it("05.12. Verify that the zone name and description can be edited successfully.", function () {
    create_zone.editZone();
  });

  it("05.13. Verify that the Reset button on the zone edit page clears all modified values correctly.", function () {
    create_zone.editResetButton();
  });

  it("05.14. Verify that the Submit button on the zone edit page updates the data successfully.", function () {
    create_zone.editSubmitButton();
  });

  it("05.15. Verify that clicking the Go Back button on the zone edit page redirects the user to the zone list page.", function () {
    create_zone.editGoBackButton();
  });

  it("05.16. Verify that inactive zones can be filtered correctly using the status dropdown on the zone list page.", function () {
    create_zone.statusInactiveDropdownCheck();
  });

  it("05.17. Verify that active zones are filtered correctly using the status dropdown on the zone list page.", function () {
    create_zone.statusActiveDropdownCheck();
  });

  it("05.18. Verify that the search functionality returns correct results when searching by zone name.", function () {
    create_zone.searchInZoneName();
  });

  it("05.19. Verify that the grid list is reset successfully when the Reset button is clicked on the zone page.", function () {
    create_zone.gridResetButtonCheck();
  });

  it("05.20. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the zone page.", function () {
    create_zone.gridRefreshButtonCheck();
  });

  it("05.21. Verify that the Reset button on the zone creation page clears all entered input values.", function () {
    create_zone.createResetButtonCheck();
  });

  it("05.22. Verify that validation messages are displayed for all required fields when the Submit button is clicked with empty inputs.", function () {
    create_zone.createValidationMessageCheck();
  });

  it("05.23. Verify that clicking the Go Back button on the zone creation page redirects the user to the zone list page.", function () {
    create_zone.createGoBackButtonCheck();
  });

  it("05.24. Verify that clicking the Search button on the zone grid page displays the correct filtered results.", function () {
    create_zone.gridSearchButtonCheck();
  });

  it("05.25. Verify that the grid list content updates correctly when switching the language from English to Bangla.", function () {
    create_zone.gridLanguageSwitchCheck();
  });
});