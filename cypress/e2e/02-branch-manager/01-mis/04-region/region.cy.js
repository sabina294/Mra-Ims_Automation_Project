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

  it("04.01. Verify that the Region List page loads successfully without any errors.", function () {
    grid_region.gridRegionListPage();
  });

  it("04.02. Verify that the action button performs the expected operation successfully.", function () {
    grid_region.actionButtonCheck();
  });

  it("04.03. Verify that the user can view all details of a region, including associated fields.", function () {
    grid_region.viewRegion();
  });

  it("04.04. Verify that clicking the Go Back button from the Region View page redirects to the Region List page.", function () {
    grid_region.viewGoBackButton();
  });

  it("04.05. Verify that the Region Edit mode can be toggled on and off and all fields behave as expected (editable/view-only).", function () {
    grid_region.turnOnEditMode();
  });

  it("04.06. Verify that the Reset button in Region Edit form resets all fields correctly.", function () {
    grid_region.editResetButton();
  });

  it("04.07. Verify that the Submit button in Region Edit form updates the region successfully.", function () {
    grid_region.editSubmitButton();
  });

  it("04.08. Verify that clicking the Go Back button on the Region Edit page redirects to the Region List page.", function () {
    grid_region.editGoBackButton();
  });

  it("04.09. Verify that inactive regions can be filtered using the status dropdown on the Region List page.", function () {
    grid_region.statusInactiveDropdownCheck();
  });

  it("04.10. Verify that active regions are correctly filtered using the status dropdown.", function () {
    grid_region.statusActiveDropdownCheck();
  });

  it("04.11. Verify that searching by Region Name returns the correct results.", function () {
    grid_region.searchInRegionName();
  });

  it("04.12. Verify that the Reset button clears all filters and resets the Region grid successfully.", function () {
    grid_region.gridResetButtonCheck();
  });

  it("04.13. Verify that the Refresh button reloads the Region grid data successfully.", function () {
    grid_region.gridRefreshButtonCheck();
  });

  it("04.14. Verify that clicking the Search button correctly loads filtered results on the Region List page.", function () {
    grid_region.gridSearchButtonCheck();
  });

  it("04.15. Verify that the Region grid language switches correctly between English and Bangla.", function () {
    grid_region.gridLanguageSwitchCheck();
  });

});
