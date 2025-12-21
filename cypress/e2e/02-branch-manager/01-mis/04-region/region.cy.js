// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/04-region/region.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_region } from "./region.po";

describe("04. Region Module Test Cases", function () {
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

  it("04.01. Verify the region list page loads without errors.", function () {
    grid_region.gridRegionListPage();
  });

  it("04.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_region.actionButtonCheck();
  });

  it("04.03. Verify the user can view all relevant details of a region, including its associated fields.", function () {
    grid_region.viewRegion();
  });

  it("04.04. Verify that clicking the go back button on the region view page redirects the user to the region list page.", function () {
    grid_region.viewGoBackButton();
  });

  it("04.05. Verify that the region forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    grid_region.turnOnEditMode();
  });

  it("04.06. Verify the region edit reset button functions correctly.", function () {
    grid_region.editResetButton();
  });

  it("04.07. Verify the region edit submit button functions correctly.", function () {
    grid_region.editSubmitButton();
  });

  it("04.08. Verify that clicking the go back button on the region edit page redirects the user to the region list page.", function () {
    grid_region.editGoBackButton();
  });

  it("04.09. Verify the user can filter inactive regions using the status dropdown on the region list page.", function () {
    grid_region.statusInactiveDropdownCheck();
  });

  it("04.10. Verify the active result is filtered correctly by the status dropdown.", function () {
    grid_region.statusActiveDropdownCheck();
  });

  it("04.11. Verify the search returns correct results when searching by region name.", function () {
    grid_region.searchInRegionName();
  });

  it("04.12. Verify the grid list resets successfully when the reset button is clicked on the region page.", function () {
    grid_region.gridResetButtonCheck();
  });

  it("04.13. Verify that the grid list is refreshed successfully when the refresh button is clicked on the region page.", function () {
    grid_region.gridRefreshButtonCheck();
  });

  it("04.14. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_region.gridLanguageSwitchCheck();
  });
});
