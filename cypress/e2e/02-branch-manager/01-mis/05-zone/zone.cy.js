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

  it("05.01. Verify that the zone list page loads successfully without errors.", function () {
    grid_zone.gridZoneListPage();
  });

  it("05.02. Verify that the action button performs the expected action successfully.", function () {
    grid_zone.actionButtonCheck();
  });

  it("05.03. Verify that the user can view all relevant details of a zone, including associated fields.", function () {
    grid_zone.viewZone();
  });

  it("05.04. Verify that clicking the Go Back button on the zone view page redirects the user to the zone list page.", function () {
    grid_zone.viewGoBackButton();
  });

  it("05.05. Verify that the zone edit mode toggle works correctly and all fields switch between editable and view-only states.", function () {
    grid_zone.turnOnEditMode();
  });

  it("05.06. Verify that the zone edit reset button clears or restores the form fields correctly.", function () {
    grid_zone.editResetButton();
  });

  it("05.07. Verify that the zone edit submit button submits the form successfully.", function () {
    grid_zone.editSubmitButton();
  });

  it("05.08. Verify that clicking the Go Back button on the zone edit page redirects the user to the zone list page.", function () {
    grid_zone.editGoBackButton();
  });

  it("05.09. Verify that inactive zones can be filtered using the status dropdown on the zone list page.", function () {
    grid_zone.statusInactiveDropdownCheck();
  });

  it("05.10. Verify that active zones are filtered correctly using the status dropdown.", function () {
    grid_zone.statusActiveDropdownCheck();
  });

  it("05.11. Verify that searching by zone name returns the correct results.", function () {
    grid_zone.searchInZoneName();
  });

  it("05.12. Verify that the grid list resets successfully when the Reset button is clicked on the zone page.", function () {
    grid_zone.gridResetButtonCheck();
  });

  it("05.13. Verify that the grid list refreshes successfully when the Refresh button is clicked on the zone page.", function () {
    grid_zone.gridRefreshButtonCheck();
  });

  it("05.14. Verify that clicking the Search button on the zone grid page navigates the user to the zone list page.", function () {
    grid_zone.gridSearchButtonCheck();
  });

  it("05.15. Verify that the grid list content correctly switches between English and Bangla languages.", function () {
    grid_zone.gridLanguageSwitchCheck();
  });
});
