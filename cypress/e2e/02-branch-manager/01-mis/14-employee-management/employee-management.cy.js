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

  it("14.01. Verify load the Employee Management list page successfully", function () {
    create_employee_management.gridEmployeeListPage();
  });

  it("14.02. Verify create a new employee when valid required fields are provided", function () {
    create_employee_management.createEmployeeManagement();
  });

  it("14.03. Verify allow MFI admin to approve a newly created employee", function () {
    create_employee_management.approveEmployee();
  });

  it("14.04. Verify perform grid actions correctly when action button is used", function () {
    create_employee_management.actionButtonCheck();
  });

  it("14.05. Verify display employee details correctly in view mode", function () {
    create_employee_management.viewEmployeeManagement();
  });

  it("14.06. Verify navigate back to list page from employee view page", function () {
    create_employee_management.viewGoBackButton();
  });

  it("14.07. Verify display employee profile details correctly", function () {
    create_employee_management.profileViewEmployeeManagement();
  });

  it("14.08. Verify navigate back to list page from profile view page", function () {
    create_employee_management.profileViewGoBackButton();
  });

  it("14.09. Verify reset edited form fields when Edit Reset is clicked", function () {
    create_employee_management.editResetButton();
  });

  it("14.10. Verify navigate back to list page from edit page", function () {
    create_employee_management.editGoBackButton();
  });

  it("14.11. Verify filter employee list correctly for inactive status", function () {
    create_employee_management.statusInactiveDropdownCheck();
  });

  it("14.12. Verify filter employee list correctly for active status", function () {
    create_employee_management.statusActiveDropdownCheck();
  });

  it("14.13. Verify return correct results when searching employee by name", function () {
    create_employee_management.searchInEmployeeName();
  });

  it("14.14. Verify reset grid filters and search criteria when Reset is clicked", function () {
    create_employee_management.gridResetButtonCheck();
  });

  it("14.15. Verify refresh the employee grid successfully", function () {
    create_employee_management.gridRefreshButtonCheck();
  });

  it("14.16. Verify display draft records when Draft toggle is enabled", function () {
    create_employee_management.gridDraftButton();
  });

  it("14.17. Verify hide draft records when Draft toggle is disabled", function () {
    create_employee_management.gridDraftButtonOff();
  });

  it("14.18. Verify allow selecting and interacting with grid checkboxes", function () {
    create_employee_management.gridCheckboxCheck();
  });

  it("14.19. Verify lock selected employee records using checkbox lock action", function () {
    create_employee_management.gridCheckboxLockButtonCheck();
  });

  it("14.20. Verify unlock selected employee records using checkbox unlock action", function () {
    create_employee_management.gridCheckboxUnlockButtonCheck();
  });

  it("14.21. Verify clear all input fields when Create Reset is clicked", function () {
    create_employee_management.createResetButtonCheck();
  });

  it("14.22. Verify show validation messages when required fields are empty on submit", function () {
    create_employee_management.createValidationMessageCheck();
  });

  it("14.23. Verify navigate to list page when Draft is clicked on create form", function () {
    create_employee_management.createDraftButtonCheck();
  });

  it("14.24. Verify navigate to list page when Approve is clicked on create form", function () {
    create_employee_management.createApproveButtonCheck();
  });

  it("14.25. Verify navigate to list page when Go Back is clicked on create form", function () {
    create_employee_management.createGoBackButtonCheck();
  });

  it("14.26. Verify redirect to employee list page when Search is executed from grid page", function () {
    create_employee_management.gridSearchButtonCheck();
  });

  it("14.27. Verify update employee details successfully with valid input", function () {
    create_employee_management.editEmployeeManagement();
  });

  it("14.28. Verify update grid content correctly when switching language (English to Bangla)", function () {
    create_employee_management.gridLanguageSwitchCheck();
  });
});
