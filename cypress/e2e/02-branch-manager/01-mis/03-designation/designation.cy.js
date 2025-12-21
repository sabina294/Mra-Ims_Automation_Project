// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/03-designation/designation.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_designation } from "./designation.po";

describe("03. Designation Module Test Cases", function () {
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

  it("03.01. Verify the designation list page loads without errors.", function () {
    grid_designation.gridDesignationListPage();
  });

  it("03.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_designation.actionButtonCheck();
  });

  it("03.03. Verify the user can view all relevant details of a designation, including its associated fields.", function () {
    grid_designation.viewDesignation();
  });

  it("03.04. Verify that clicking the go back button on the designation view page redirects the user to the designation list page.", function () {
    grid_designation.viewGoBackButton();
  });

  it("03.05. Verify that the designation forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    grid_designation.turnOnEditMode();
  });

  it("03.06. Verify the designation edit reset button functions correctly.", function () {
    grid_designation.editResetButton();
  });

  it("03.07. Verify the designation edit submit button functions correctly.", function () {
    grid_designation.editSubmitButton();
  });

  it("03.08. Verify that clicking the go back button on the designation edit page redirects the user to the designation list page.", function () {
    grid_designation.editGoBackButton();
  });

  it("03.09. Verify the user can filter inactive designations using the status dropdown on the designation list page.", function () {
    grid_designation.statusInactiveDropdownCheck();
  });

  it("03.10. Verify the active result is filtered correctly by the status dropdown.", function () {
    grid_designation.statusActiveDropdownCheck();
  });

  it("03.11. Verify the search returns correct results when searching by designation name.", function () {
    grid_designation.searchInDesignationName();
  });

  it("03.12. Verify the grid list resets successfully when the reset button is clicked on the designation page.", function () {
    grid_designation.gridResetButtonCheck();
  });

  it("03.13. Verify that the grid list is refreshed successfully when the refresh button is clicked on the designation page.", function () {
    grid_designation.gridRefreshButtonCheck();
  });

  it("03.14. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_designation.gridLanguageSwitchCheck();
  });
});
