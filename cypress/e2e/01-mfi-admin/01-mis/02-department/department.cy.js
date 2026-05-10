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

  it("02.02. Verify that a new department is created successfully when all required fields are filled with valid data.", function () {
    create_department.createDepartment();
  });

  it("02.03. Verify that a department cannot be created without entering the department name in English, even when all other fields contain valid data.", function () {
    create_department.createWithoutNameEn();
  });

  it("02.04. Verify that a department cannot be created without entering the department name in Bangla, even when all other fields contain valid data.", function () {
    create_department.createWithoutNameBn();
  });

  it("02.05. Verify that a department cannot be created without selecting a status, even when all other fields contain valid data.", function () {
    create_department.createWithoutStatus();
  });

  it("02.06. Verify that the action button performs successfully when clicked.", function () {
    create_department.actionButtonCheck();
  });

  it("02.07. Verify that the user can view all relevant department details, including associated fields.", function () {
    create_department.viewDepartment();
  });

  it("02.08. Verify that clicking the Go Back button on the department view page redirects the user to the Department List page.", function () {
    create_department.viewGoBackButton();
  });

  it("02.09. Verify that the department form edit mode can be toggled on and off, and all fields return to view-only mode when disabled.", function () {
    create_department.turnOffEditMode();
  });

  it("02.10. Verify that the department name and description can be edited successfully.", function () {
    create_department.editDepartment();
  });

  it("02.11. Verify that the Department Edit Reset button functions correctly.", function () {
    create_department.editResetButton();
  });

  it("02.12. Verify that the Department Edit Submit button functions correctly.", function () {
    create_department.editSubmitButton();
  });

  it("02.13. Verify that clicking the Go Back button on the department edit page redirects the user to the Department List page.", function () {
    create_department.editGoBackButton();
  });

  it("02.14. Verify that the user can filter inactive departments using the status dropdown on the Department List page.", function () {
    create_department.statusInactiveDropdownCheck();
  });

  it("02.15. Verify that active departments are filtered correctly using the status dropdown.", function () {
    create_department.statusActiveDropdownCheck();
  });

  it("02.16. Verify that the search function returns correct results when searching by department name.", function () {
    create_department.searchInDepartmentName();
  });

  it("02.17. Verify that the grid list resets successfully when the Reset button is clicked on the Department page.", function () {
    create_department.gridResetButtonCheck();
  });

  it("02.18. Verify that the grid list refreshes successfully when the Refresh button is clicked on the Department page.", function () {
    create_department.gridRefreshButtonCheck();
  });

  it("02.19. Verify that the Department Creation Reset button clears all entered input values successfully.", function () {
    create_department.createResetButtonCheck();
  });

  it("02.20. Verify that validation messages appear for all required fields when the Submit button is clicked with empty inputs.", function () {
    create_department.createValidationMessageCheck();
  });

  it("02.21. Verify that clicking the Go Back button on the department creation page redirects the user to the Department List page.", function () {
    create_department.createGoBackButtonCheck();
  });

  it("02.22. Verify that clicking the Search button on the department grid page redirects the user to the Department List page.", function () {
    create_department.gridSearchButtonCheck();
  });

  it("02.23. Verify that the grid list content changes correctly from English to Bangla after switching the language.", function () {
    create_department.gridLanguageSwitchCheck();
  });
});
