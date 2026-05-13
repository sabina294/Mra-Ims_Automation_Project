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

  it("06.01. Verify that the Area list page loads without errors.", function () {
    grid_area.gridAreaListPage();
  });

  it("06.02. Verify that the action button performs the expected behavior when clicked.", function () {
    grid_area.actionButtonCheck();
  });

  it("06.03. Verify that the user can view all relevant details of an Area, including associated fields.", function () {
    grid_area.viewArea();
  });

  it("06.04. Verify that clicking the Go Back button on the Area view page redirects the user to the Area list page.", function () {
    grid_area.viewGoBackButton();
  });

  it("06.05. Verify that edit mode can be toggled on and off and all fields switch between editable and read-only states.", function () {
    grid_area.turnOnEditMode();
  });

  it("06.06. Verify that the Area edit reset button functions correctly.", function () {
    grid_area.editResetButton();
  });

  it("06.07. Verify that the Area edit submit button successfully saves the changes.", function () {
    grid_area.editSubmitButton();
  });

  it("06.08. Verify that clicking the Go Back button on the Area edit page redirects the user to the Area list page.", function () {
    grid_area.editGoBackButton();
  });

  it("06.09. Verify that inactive Areas can be filtered using the status dropdown on the Area list page.", function () {
    grid_area.statusInactiveDropdownCheck();
  });

  it("06.10. Verify that active Areas are correctly filtered using the status dropdown.", function () {
    grid_area.statusActiveDropdownCheck();
  });

  it("06.11. Verify that searching by Area name returns correct results.", function () {
    grid_area.searchInAreaName();
  });

  it("06.12. Verify that the grid list resets successfully when the reset button is clicked on the Area page.", function () {
    grid_area.gridResetButtonCheck();
  });

  it("06.13. Verify that the grid list refreshes successfully when the refresh button is clicked on the Area page.", function () {
    grid_area.gridRefreshButtonCheck();
  });

  it("06.14. Verify that clicking the Search button redirects or updates the Area list correctly.", function () {
    grid_area.gridSearchButtonCheck();
  });

  it("06.15. Verify that the grid list content successfully switches between English and Bangla.", function () {
    grid_area.gridLanguageSwitchCheck();
  });
});
