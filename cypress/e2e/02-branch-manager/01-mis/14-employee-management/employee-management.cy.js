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

  it("14.01. Verify the employee management list page loads correctly.", function () {
    create_employee_management.gridEmployeeListPage();
  });

  it("14.02. Verify a new employee management record is created successfully when all required fields are filled with valid data.", function () {
    create_employee_management.createEmployeeManagement();
  });

  it("14.03. Verify mfi-admin to successfully approve an employee management record after creation.", function () {
    create_employee_management.approveEmployee();
  });

  it("14.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_employee_management.actionButtonCheck();
  });

  it("14.05. Verify the user can successfully view the employee management information, including the name and description.", function () {
    create_employee_management.viewEmployeeManagement();
  });

  it("14.06. Verify the employee management edit reset button functions correctly.", function () {
    create_employee_management.editResetButton();
  });

  it("14.07. Verify that clicking the go back button on the employee management edit page redirects the user to the employee management list page.", function () {
    create_employee_management.editGoBackButton();
  });

  // it("14.08. Verify that the employee management is updated with valid information.", function () {
  //   create_employee_management.editEmployeeManagement();
  // });

  it("14.09. Verify the user can filter inactive employee records using the status dropdown on the Employee Management List page.", function () {
    create_employee_management.statusInactiveDropdownCheck();
  });

  it("14.10. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    create_employee_management.statusActiveDropdownCheck();
  });

  it("14.11. Verify that the search results are displayed correctly when searching by employee management name.", function () {
    create_employee_management.searchInEmployeeName();
  });

  it("14.12. Verify the grid list resets successfully when the reset button is clicked on the employee management page.", function () {
    create_employee_management.gridResetButtonCheck();
  });

  it("14.13. Verify that the grid list is refreshed successfully when the refresh button is clicked on the employee management page.", function () {
    create_employee_management.gridRefreshButtonCheck();
  });

  it("14.14. Verify display the grid list successfully when the Draft button on is clicked on the employee management page", function () {
    create_employee_management.gridDraftButton();
  });

  it("14.15. Verify display the grid list successfully when the Draft button off is clicked on the employee management page", function () {
    create_employee_management.gridDraftButtonOff();
  });

  it("14.16. Verify the employee management creation reset button clears all entered input values.", function () {
    create_employee_management.createResetButtonCheck();
  });

  it("14.17. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_employee_management.createValidationMessageCheck();
  });

  it("14.18. Verify that clicking the go back button on the employee management create page redirects the user to the employee management list page.", function () {
    create_employee_management.createGoBackButtonCheck();
  });

  it("14.19. Verify that clicking the draft button on the employee management create page redirects the user to the employee management list page.", function () {
    create_employee_management.createDraftButtonCheck();
  });

  it("14.20. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_employee_management.gridLanguageSwitchCheck();
  });
});
