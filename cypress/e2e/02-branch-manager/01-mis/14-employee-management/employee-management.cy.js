// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/14-employee-management/employee-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_employee_management } from "./employee-management.po";

describe("14. Employee Management Module Test Cases", function () {
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

  it("14.01. Should load the Employee Management list page correctly", function () {
    create_employee_management.gridEmployeeListPage();
  });

  it("14.02. Should create a new employee record when all required fields are filled with valid data", function () {
    create_employee_management.createEmployeeManagement();
  });

  it("14.03. Should allow MFI-admin to approve an employee record after creation", function () {
    create_employee_management.approveEmployee();
  });

  it("14.04. Should perform actions correctly when the action button is clicked", function () {
    create_employee_management.actionButtonCheck();
  });

  it("14.05. Should view employee management details including name and description", function () {
    create_employee_management.viewEmployeeManagement();
  });

  it("14.06. Should redirect to the list page when the Go Back button is clicked from the view page", function () {
    create_employee_management.viewGoBackButton();
  });

  it("14.07. Should reset the form correctly when the Edit Reset button is clicked", function () {
    create_employee_management.editResetButton();
  });

  it("14.08. Should redirect to the list page when the Go Back button is clicked from the edit page", function () {
    create_employee_management.editGoBackButton();
  });

  it("14.09. Should update employee information with valid data", function () {
    create_employee_management.editEmployeeManagement();
  });

  it("14.10. Should filter inactive employee records using the status dropdown", function () {
    create_employee_management.statusInactiveDropdownCheck();
  });

  it("14.11. Should filter active employee records correctly using the status dropdown", function () {
    create_employee_management.statusActiveDropdownCheck();
  });

  it("14.12. Should display correct search results when searching by employee name", function () {
    create_employee_management.searchInEmployeeName();
  });

  it("14.13. Should reset the grid list when the Reset button is clicked", function () {
    create_employee_management.gridResetButtonCheck();
  });

  it("14.14. Should refresh the grid list when the Refresh button is clicked", function () {
    create_employee_management.gridRefreshButtonCheck();
  });

  it("14.15. Should display the grid list correctly when the Draft button is ON", function () {
    create_employee_management.gridDraftButton();
  });

  it("14.16. Should display the grid list correctly when the Draft button is OFF", function () {
    create_employee_management.gridDraftButtonOff();
  });

  it("14.17. Should select and operate the grid checkbox correctly", function () {
    create_employee_management.gridCheckboxCheck();
  });

  it("14.18. Should lock selected items correctly using the checkbox lock button", function () {
    create_employee_management.gridCheckboxLockButtonCheck();
  });

  it("14.19. Should unlock selected items correctly using the checkbox unlock button", function () {
    create_employee_management.gridCheckboxUnlockButtonCheck();
  });

  it("14.20. Should clear all inputs when the Create Reset button is clicked", function () {
    create_employee_management.createResetButtonCheck();
  });

  it("14.21. Should display validation messages for required fields when submitted empty", function () {
    create_employee_management.createValidationMessageCheck();
  });

  it("14.22. Should redirect to the list page when the Go Back button is clicked on the create page", function () {
    create_employee_management.createGoBackButtonCheck();
  });

  it("14.23. Should redirect to the list page when the Draft button is clicked on the create page", function () {
    create_employee_management.createDraftButtonCheck();
  });

  it("14.24. Should change grid list content correctly when switching from English to Bangla", function () {
    create_employee_management.gridLanguageSwitchCheck();
  });
});
