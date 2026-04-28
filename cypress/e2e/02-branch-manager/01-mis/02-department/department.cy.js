// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/02-department/department.cy.js --browser chrome --headed


import "cypress-file-upload";
import { grid_department } from "./department.po";

describe("02. Department Module Test Cases", function () {
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

  it("02.01. Verify that the Department List page loads successfully without errors.", function () {
    grid_department.gridDepartmentListPage();
  });

  it("02.02. Verify that the action button performs the expected action successfully.", function () {
    grid_department.actionButtonCheck();
  });

  it("02.03. Verify that the user can view all relevant details of a department, including associated fields.", function () {
    grid_department.viewDepartment();
  });

  it("02.04. Verify that clicking the Go Back button on the Department View page redirects the user to the Department List page.", function () {
    grid_department.viewGoBackButton();
  });

  it("02.05. Verify that edit mode can be toggled on and off, and all fields behave as expected (editable or view-only).", function () {
    grid_department.turnOnEditMode();
  });

  it("02.06. Verify that the Department Edit Reset button clears changes and restores the original state.", function () {
    grid_department.editResetButton();
  });

  it("02.07. Verify that the Department Edit Submit button successfully saves the updated data.", function () {
    grid_department.editSubmitButton();
  });

  it("02.08. Verify that clicking the Go Back button on the Department Edit page redirects the user to the Department List page.", function () {
    grid_department.editGoBackButton();
  });

  it("02.09. Verify that inactive departments can be filtered using the status dropdown on the Department List page.", function () {
    grid_department.statusInactiveDropdownCheck();
  });

  it("02.10. Verify that active departments are correctly filtered using the status dropdown.", function () {
    grid_department.statusActiveDropdownCheck();
  });

  it("02.11. Verify that searching by department name returns the correct results.", function () {
    grid_department.searchInDepartmentName();
  });

  it("02.12. Verify that the grid list resets successfully when the Reset button is clicked.", function () {
    grid_department.gridResetButtonCheck();
  });

  it("02.13. Verify that the grid list refreshes successfully when the Refresh button is clicked.", function () {
    grid_department.gridRefreshButtonCheck();
  });

  it("02.14. Verify that clicking the Search button on the Department Grid page loads the Department List page with results.", function () {
    grid_department.gridSearchButtonCheck();
  });

  it("02.15. Verify that the grid content language switches correctly between English and Bangla.", function () {
    grid_department.gridLanguageSwitchCheck();
  });
});


