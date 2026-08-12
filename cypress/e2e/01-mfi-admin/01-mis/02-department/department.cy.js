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

  it("02.07. Verify that the user can view all relevant department details, including all associated fields.", function () {
    create_department.viewDepartment();
  });

  it("02.08. Verify that clicking the Go Back button on the Department View page redirects the user to the Department List page.", function () {
    create_department.viewGoBackButton();
  });

  it("02.09. Verify that edit mode can be toggled on and off, and that all fields return to view-only mode when edit mode is disabled.", function () {
    create_department.turnOffEditMode();
  });

  it("02.10. Verify that the department name and description can be updated successfully.", function () {
    create_department.editDepartment();
  });

  it("02.11. Verify that the Reset button on the Department Edit page functions correctly.", function () {
    create_department.editResetButton();
  });

  it("02.12. Verify that the Submit button on the Department Edit page functions correctly.", function () {
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

  it("02.19. Verify that the Reset button on the Department Creation page clears all entered input fields.", function () {
    create_department.createResetButtonCheck();
  });

  it("02.20. Verify that validation messages are displayed when required fields are submitted empty.", function () {
    create_department.createValidationMessageCheck();
  });

  it("02.21. Verify that clicking the Go Back button on the Department Creation page redirects the user to the Department List page.", function () {
    create_department.createGoBackButtonCheck();
  });

  it("02.22. Verify that clicking the Search button on the Department List page correctly filters the results.", function () {
    create_department.gridSearchButtonCheck();
  });

  it("02.23. Verify that the Department List page displays all required table columns correctly.", function () {
    create_department.gridColumnsCheck();
  });

  it("02.24. Verify that the Department Name column can be sorted in ascending order.", function () {
    create_department.departmentNameAscendingSort();
  });

  it("02.25. Verify that the Department Name column can be sorted in descending order.", function () {
    create_department.departmentNameDescendingSort();
  });

  it("02.26. Verify that searching with a non-existing department name displays no matching records.", function () {
    create_department.searchNoResult();
  });

  it("02.27. Verify that partial department name search returns matching records.", function () {
    create_department.partialSearch();
  });

  it("02.28. Verify that clearing the search text restores the complete department list.", function () {
    create_department.clearSearch();
  });

  it("02.29. Verify that the pagination control works correctly for the Department grid.", function () {
    create_department.paginationCheck();
  });

  it("02.30. Verify that the selected page size is applied correctly to the Department grid.", function () {
    create_department.pageSizeCheck();
  });

  it("02.31. Verify that the Add Department button redirects the user to the Department Creation page.", function () {
    create_department.addDepartmentNavigation();
  });

  it("02.32. Verify that the Department Creation page displays all required fields correctly.", function () {
    create_department.createPageFieldCheck();
  });

  it("02.33. Verify that the Department Name field handles whitespace-only input correctly.", function () {
    create_department.departmentNameSpaceValidation();
  });

  it("02.34. Verify that the Department Name (Bangla) field handles whitespace-only input correctly.", function () {
    create_department.departmentNameBnSpaceValidation();
  });

  it("02.35. Verify that the default status is displayed correctly on the Department Creation page.", function () {
    create_department.defaultStatusCheck();
  });

  it("02.36. Verify that all available status options are displayed in the status dropdown.", function () {
    create_department.statusOptionsCheck();
  });

  it("02.37. Verify that duplicate department names cannot be created.", function () {
    create_department.duplicateDepartmentCheck();
  });

  it("02.38. Verify that the grid content updates correctly when the language is switched from English to Bangla.", function () {
    create_department.gridLanguageSwitchCheck();
  });
});