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

  it("02.01. Verify that the Department List page loads successfully without any errors.", function () {
    create_department.gridDepartmentListPage();
  });

  it("02.02. Verify that a new department is created successfully when all required fields are provided with valid data.", function () {
    create_department.createDepartment();
  });

  it("02.03. Verify that a department cannot be created without entering the department name in English, even when all other fields are valid.", function () {
    create_department.createWithoutNameEn();
  });

  it("02.04. Verify that a department cannot be created without entering the department name in Bangla, even when all other fields are valid.", function () {
    create_department.createWithoutNameBn();
  });

  it("02.05. Verify that a department cannot be created without selecting a status, even when all other fields are valid.", function () {
    create_department.createWithoutStatus();
  });

  it("02.06. Verify that the action button functions correctly when clicked.", function () {
    create_department.actionButtonCheck();
  });

  it("02.07. Verify that the user can view all relevant department details, including associated fields.", function () {
    create_department.viewDepartment();
  });

  it("02.08. Verify that clicking the Go Back button on the Department View page redirects the user to the Department List page.", function () {
    create_department.viewGoBackButton();
  });

  it("02.09. Verify that edit mode can be enabled/disabled and all fields return to view-only mode when disabled.", function () {
    create_department.turnOffEditMode();
  });

  it("02.10. Verify that department name and description can be updated successfully.", function () {
    create_department.editDepartment();
  });

  it("02.11. Verify that the Department Edit Reset button works correctly.", function () {
    create_department.editResetButton();
  });

  it("02.12. Verify that the Department Edit Submit button works correctly.", function () {
    create_department.editSubmitButton();
  });

  it("02.13. Verify that clicking the Go Back button on the Department Edit page redirects the user to the Department List page.", function () {
    create_department.editGoBackButton();
  });

  it("02.14. Verify that inactive departments can be filtered using the status dropdown on the Department List page.", function () {
    create_department.statusInactiveDropdownCheck();
  });

  it("02.15. Verify that active departments can be filtered using the status dropdown on the Department List page.", function () {
    create_department.statusActiveDropdownCheck();
  });

  it("02.16. Verify that the search functionality returns correct results when searching by department name.", function () {
    create_department.searchInDepartmentName();
  });

  it("02.17. Verify that the grid list resets successfully when the Reset button is clicked.", function () {
    create_department.gridResetButtonCheck();
  });

  it("02.18. Verify that the grid list refreshes successfully when the Refresh button is clicked.", function () {
    create_department.gridRefreshButtonCheck();
  });

  it("02.19. Verify that the Department creation Reset button clears all entered input fields.", function () {
    create_department.createResetButtonCheck();
  });

  it("02.20. Verify that validation messages appear when required fields are submitted empty.", function () {
    create_department.createValidationMessageCheck();
  });

  it("02.21. Verify that clicking the Go Back button on the Department Creation page redirects the user to the Department List page.", function () {
    create_department.createGoBackButtonCheck();
  });

  it("02.22. Verify that clicking the Search button on the Department grid page correctly filters results.", function () {
    create_department.gridSearchButtonCheck();
  });

  it("02.23. Verify that the grid content updates correctly when switching language from English to Bangla.", function () {
    create_department.gridLanguageSwitchCheck();
  });
});