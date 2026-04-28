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

  it("03.01. Verify that the designation list page loads successfully without errors.", function () {
    grid_designation.gridDesignationListPage();
  });

  it("03.02. Verify that the action button performs the expected action successfully.", function () {
    grid_designation.actionButtonCheck();
  });

  it("03.03. Verify that a user can view all relevant designation details including associated fields.", function () {
    grid_designation.viewDesignation();
  });

  it("03.04. Verify that the Go Back button on the designation view page redirects to the designation list page.", function () {
    grid_designation.viewGoBackButton();
  });

  it("03.05. Verify that edit mode toggle works correctly and all fields switch between editable and view-only states.", function () {
    grid_designation.turnOnEditMode();
  });

  it("03.06. Verify that the Reset button in the designation edit form functions correctly.", function () {
    grid_designation.editResetButton();
  });

  it("03.07. Verify that the Submit button in the designation edit form functions correctly.", function () {
    grid_designation.editSubmitButton();
  });

  it("03.08. Verify that the Go Back button on the designation edit page redirects to the designation list page.", function () {
    grid_designation.editGoBackButton();
  });

  it("03.09. Verify that inactive designations can be filtered using the status dropdown on the list page.", function () {
    grid_designation.statusInactiveDropdownCheck();
  });

  it("03.10. Verify that active designations are correctly filtered using the status dropdown.", function () {
    grid_designation.statusActiveDropdownCheck();
  });

  it("03.11. Verify that searching by designation name returns accurate results.", function () {
    grid_designation.searchInDesignationName();
  });

  it("03.12. Verify that the grid list resets successfully when the Reset button is clicked.", function () {
    grid_designation.gridResetButtonCheck();
  });

  it("03.13. Verify that the grid list refreshes successfully when the Refresh button is clicked.", function () {
    grid_designation.gridRefreshButtonCheck();
  });

  it("03.14. Verify that clicking the Search button on the designation grid page navigates to the designation list page.", function () {
    grid_designation.gridSearchButtonCheck();
  });

  it("03.15. Verify that the grid content language switches correctly between English and Bangla.", function () {
    grid_designation.gridLanguageSwitchCheck();
  });
});
