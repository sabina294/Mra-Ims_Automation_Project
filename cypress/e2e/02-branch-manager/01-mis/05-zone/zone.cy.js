// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/05-zone/zone.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_zone } from "./zone.po";

describe("05. Zone Module Test Cases", function () {
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

  it("05.01. Verify the zone list page loads without errors.", function () {
    grid_zone.gridZoneListPage();
  });

  it("05.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_zone.actionButtonCheck();
  });

  it("05.03. Verify the user can view all relevant details of a zone, including its associated fields.", function () {
    grid_zone.viewZone();
  });

  it("05.04. Verify that clicking the go back button on the zone view page redirects the user to the zone list page.", function () {
    grid_zone.viewGoBackButton();
  });

  it("05.05. Verify that the zone forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    grid_zone.turnOnEditMode();
  });

  it("05.06. Verify the zone edit reset button functions correctly.", function () {
    grid_zone.editResetButton();
  });

  it("05.07. Verify the zone edit submit button functions correctly.", function () {
    grid_zone.editSubmitButton();
  });

  it("05.08. Verify that clicking the go back button on the zone edit page redirects the user to the zone list page.", function () {
    grid_zone.editGoBackButton();
  });

  it("05.09. Verify the user can filter inactive zones using the status dropdown on the zone list page.", function () {
    grid_zone.statusInactiveDropdownCheck();
  });

  it("05.10. Verify the active result is filtered correctly by the status dropdown.", function () {
    grid_zone.statusActiveDropdownCheck();
  });

  it("05.11. Verify the search returns correct results when searching by zone name.", function () {
    grid_zone.searchInZoneName();
  });

  it("05.12. Verify the grid list resets successfully when the reset button is clicked on the zone page.", function () {
    grid_zone.gridResetButtonCheck();
  });

  it("05.13. Verify that the grid list is refreshed successfully when the refresh button is clicked on the zone page.", function () {
    grid_zone.gridRefreshButtonCheck();
  });

  it("05.14. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_zone.gridLanguageSwitchCheck();
  });
});
