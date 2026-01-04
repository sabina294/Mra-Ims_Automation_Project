// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/12-mfi-program/mfi-program.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_mfi_program } from "./mfi-program.po";

describe("12. MFI program Module Test Cases", function () {
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

  it("12.01. Verify the mfi program list page loads without errors.", function () {
    grid_mfi_program.gridMfiProgramListPage();
  });

  it("12.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_mfi_program.actionButtonCheck();
  });

  it("12.03. Verify the user can view all relevant details of a mfi program, including its associated fields.", function () {
    grid_mfi_program.viewMfiProgram();
  });

  it("12.04. Verify that clicking the go back button on the mfi program view page redirects the user to the mfi program list page.", function () {
    grid_mfi_program.viewGoBackButton();
  });

  it("12.05. Verify that the mfi program forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    grid_mfi_program.turnOnEditMode();
  });

  it("12.06. Verify the mfi program edit reset button functions correctly.", function () {
    grid_mfi_program.editResetButton();
  });

  it("12.07. Verify the mfi program edit submit button functions correctly.", function () {
    grid_mfi_program.editSubmitButton();
  });

  it("12.08. Verify that clicking the go back button on the mfi program edit page redirects the user to the mfi program list page.", function () {
    grid_mfi_program.editGoBackButton();
  });

  it("12.09. Verify the user can filter inactive mfi programs using the status dropdown on the mfi program list page.", function () {
    grid_mfi_program.statusInactiveDropdownCheck();
  });

  it("12.10. Verify the active result is filtered correctly by the status dropdown.", function () {
    grid_mfi_program.statusActiveDropdownCheck();
  });

  it("12.11. Verify the search returns correct results when searching by mfi program name.", function () {
    grid_mfi_program.searchInMfiProgramName();
  });

  it("12.12. Verify the grid list resets successfully when the reset button is clicked on the mfi program page.", function () {
    grid_mfi_program.gridResetButtonCheck();
  });

  it("12.13. Verify that the grid list is refreshed successfully when the refresh button is clicked on the mfi program page.", function () {
    grid_mfi_program.gridRefreshButtonCheck();
  });

  it("12.14. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_mfi_program.gridLanguageSwitchCheck();
  });
});
