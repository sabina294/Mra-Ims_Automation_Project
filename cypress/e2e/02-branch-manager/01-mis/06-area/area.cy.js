// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/06-area/area.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_area } from "./area.po";

describe("06. Area Module Test Cases", function () {
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

  it("06.01. Verify the area list page loads without errors.", function () {
    grid_area.gridAreaListPage();
  });

  it("06.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_area.actionButtonCheck();
  });

  it("06.03. Verify the user can view all relevant details of a area, including its associated fields.", function () {
    grid_area.viewArea();
  });

  it("06.04. Verify that clicking the go back button on the area view page redirects the user to the area list page.", function () {
    grid_area.viewGoBackButton();
  });

  it("06.05. Verify that the area forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    grid_area.turnOnEditMode();
  });

  it("06.06. Verify the area edit reset button functions correctly.", function () {
    grid_area.editResetButton();
  });

  it("06.07. Verify the area edit submit button functions correctly.", function () {
    grid_area.editSubmitButton();
  });

  it("06.08. Verify that clicking the go back button on the area edit page redirects the user to the area list page.", function () {
    grid_area.editGoBackButton();
  });

  it("06.09. Verify the user can filter inactive areas using the status dropdown on the area list page.", function () {
    grid_area.statusInactiveDropdownCheck();
  });

  it("06.10. Verify the active result is filtered correctly by the status dropdown.", function () {
    grid_area.statusActiveDropdownCheck();
  });

  it("06.11. Verify the search returns correct results when searching by area name.", function () {
    grid_area.searchInAreaName();
  });

  it("06.12. Verify the grid list resets successfully when the reset button is clicked on the area page.", function () {
    grid_area.gridResetButtonCheck();
  });

  it("06.13. Verify that the grid list is refreshed successfully when the refresh button is clicked on the area page.", function () {
    grid_area.gridRefreshButtonCheck();
  });

  it("06.14. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_area.gridLanguageSwitchCheck();
  });
});
