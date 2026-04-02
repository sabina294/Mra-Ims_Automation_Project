// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/02-department/department.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_department } from "./department.po";

describe("02. Department Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");

  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.fieldOfficerUserId,
        d.credential.fieldOfficerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("02.01. Verify the department list page loads without errors.", function () {
    grid_department.gridDepartmentListPage();
  });

  it("02.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_department.actionButtonCheck();
  });

  it("02.03. Verify the user can view all relevant details of a department, including its associated fields.", function () {
    grid_department.viewDepartment();
  });

  it("02.04. Verify that the department forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    grid_department.turnOnEditMode();
  });

  it("02.05. Verify the department edit reset button functions correctly.", function () {
    grid_department.editResetButton();
  });

  it("02.06. Verify the department submit button functions correctly.", function () {
    grid_department.editSubmitButton();
  });

  it("02.07. Verify that clicking the go back button on the department edit page redirects the user to the department list page.", function () {
    grid_department.editGoBackButton();
  });

  it("02.08. Verify the user can filter inactive departments using the status dropdown on the department list page.", function () {
    grid_department.statusInactiveDropdownCheck();
  });

  it("02.09. Verify the active result is filtered correctly by the status dropdown.", function () {
    grid_department.statusActiveDropdownCheck();
  });

  it("02.10. Verify the search returns correct results when searching by department name.", function () {
    grid_department.searchInDepartmentName();
  });

  it("02.11. Verify the grid list resets successfully when the reset button is clicked on the department page.", function () {
    grid_department.gridResetButtonCheck();
  });

  it("02.12. Verify that the grid list is refreshed successfully when the refresh button is clicked on the department page.", function () {
    grid_department.gridRefreshButtonCheck();
  });

  it("02.13. Verify that when the user clicks the Search button on the department grid page, the system redirects to the department List page..", function () {
    grid_department.gridSearchButtonCheck();
  });

  it("02.14. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_department.gridLanguageSwitchCheck();
  });
});
