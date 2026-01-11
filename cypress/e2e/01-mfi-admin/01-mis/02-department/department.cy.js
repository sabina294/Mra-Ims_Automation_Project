// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/02-department/department.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_department } from "./department.po";

describe("02. Department Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");

  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.mfiAdminUserId,
        d.credential.mfiAdminPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("02.01. Verify the department list page loads without errors.", function () {
    create_department.gridDepartmentListPage();
  });

  it("02.02. Verify a new department is created successfully when all required fields are filled with valid data.", function () {
    create_department.createDepartment();
  });

  it("02.03. Verify that a department cannot be created without a department name english, even if all other fields are valid.", function () {
    create_department.createWithoutNameEn();
  });

  it("02.04. Verify that a department cannot be created without a department name bangla, even if all other fields are valid.", function () {
    create_department.createWithoutNameBn();
  });

  it("02.05. Verify that a department cannot be created without status, even if all other fields are valid.", function () {
    create_department.createWithoutStatus();
  });

  it("02.06. Verify successfully performs the action when the action button is clicked.", function () {
    create_department.actionButtonCheck();
  });

  it("02.07. Verify the user can view all relevant details of a department, including its associated fields.", function () {
    create_department.viewDepartment();
  });

  it("02.08. Verify that clicking the go back button on the department view page redirects the user to the department list page.", function () {
    create_department.viewGoBackButton();
  });

  it("02.09. Verify that the department forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_department.turnOffEditMode();
  });

  it("02.10. Verify the department name and description can be edited successfully.", function () {
    create_department.editDepartment();
  });

  it("02.11. Verify the department edit reset button functions correctly.", function () {
    create_department.editResetButton();
  });

  it("02.12. Verify the department edit submit button functions correctly.", function () {
    create_department.editSubmitButton();
  });

  it("02.13. Verify that clicking the go back button on the department edit page redirects the user to the department list page.", function () {
    create_department.editGoBackButton();
  });

  it("02.14. Verify the user can filter inactive departments using the status dropdown on the department list page.", function () {
    create_department.statusInactiveDropdownCheck();
  });

  it("02.15. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_department.statusActiveDropdownCheck();
  });

  it("02.16. Verify the search returns correct results when searching by department name.", function () {
    create_department.searchInDepartmentName();
  });

  it("02.17. Verify the grid list resets successfully when the reset button is clicked on the department page.", function () {
    create_department.gridResetButtonCheck();
  });

  it("02.18. Verify that the grid list is refreshed successfully when the refresh button is clicked on the department page.", function () {
    create_department.gridRefreshButtonCheck();
  });

  it("02.19. Verify the department creation reset button clears all entered input values.", function () {
    create_department.createResetButtonCheck();
  });

  it("02.20. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_department.createValidationMessageCheck();
  });

  it("02.21. Verify that clicking the go back button on the department create page redirects the user to the department list page.", function () {
    create_department.createGoBackButtonCheck();
  });

  it("02.22. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_department.gridLanguageSwitchCheck();
  });
});
