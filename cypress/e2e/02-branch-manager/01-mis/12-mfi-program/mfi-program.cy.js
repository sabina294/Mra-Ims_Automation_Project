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

  it("12.01. Verify that the MFI Program List page loads successfully without errors.", function () {
    grid_mfi_program.gridMfiProgramListPage();
  });

  it("12.02. Verify that the action button performs the expected action successfully.", function () {
    grid_mfi_program.actionButtonCheck();
  });

  it("12.03. Verify that the user can view all details of an MFI Program, including associated fields.", function () {
    grid_mfi_program.viewMfiProgram();
  });

  it("12.04. Verify that clicking the Go Back button on the MFI Program View page redirects the user to the list page.", function () {
    grid_mfi_program.viewGoBackButton();
  });

  it("12.05. Verify that edit mode can be toggled on and off and fields switch between editable and read-only states.", function () {
    grid_mfi_program.turnOnEditMode();
  });

  it("12.06. Verify that the Edit Reset button resets all changes successfully.", function () {
    grid_mfi_program.editResetButton();
  });

  it("12.07. Verify that the Edit Submit button submits the updated MFI Program successfully.", function () {
    grid_mfi_program.editSubmitButton();
  });

  it("12.08. Verify that clicking the Go Back button on the MFI Program Edit page redirects to the list page.", function () {
    grid_mfi_program.editGoBackButton();
  });

  it("12.09. Verify that inactive MFI Programs can be filtered using the status dropdown.", function () {
    grid_mfi_program.statusInactiveDropdownCheck();
  });

  it("12.10. Verify that active MFI Programs are filtered correctly using the status dropdown.", function () {
    grid_mfi_program.statusActiveDropdownCheck();
  });

  it("12.11. Verify that searching by MFI Program name returns correct results.", function () {
    grid_mfi_program.searchInMfiProgramName();
  });

  it("12.12. Verify that the Reset button clears filters and resets the grid successfully.", function () {
    grid_mfi_program.gridResetButtonCheck();
  });

  it("12.13. Verify that the Refresh button reloads the grid data successfully.", function () {
    grid_mfi_program.gridRefreshButtonCheck();
  });

  it("12.14. Verify that clicking the Search button navigates to the MFI Program List page with results.", function () {
    grid_mfi_program.gridSearchButtonCheck();
  });

  it("12.15. Verify that the grid content language switches correctly between English and Bangla.", function () {
    grid_mfi_program.gridLanguageSwitchCheck();
  });
});
