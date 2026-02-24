// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/21-employee-management/employee-management.cy.js --headed

import "cypress-file-upload";
import { create_employee_management } from "./employee-management.po";

describe("21. Employee Management Module Test Cases.", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");

  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.mraAdminUserId,
        d.credential.mraAdminPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("21.01. Verify the employee management list page loads correctly.", function () {
    create_employee_management.gridEmployeeListPage();
  });

  it("21.02. Verify a new employee management record is created successfully when all required fields are filled with valid data.", function () {
    create_employee_management.createEmployeeManagement();
  });

  it("21.03. When the employee management approved by clicking the lock button, the lock button no longer appears.", function () {
    create_employee_management.approveEmployee();
  });
  // it("21.04. Verify a new employee management is created successfully when all fields are filled with valid data.", function () {
  //   create_employee_management.createAllField();
  // });

  it("21.05. Verify successfully performs the action when the action button is clicked.", function () {
    create_employee_management.actionButtonCheck();
  });

  it("21.06. Verify the user can successfully view the employee management information, including the name and description.", function () {
    create_employee_management.viewEmployeeManagement();
  });

  it("21.07. Verify that clicking the go back button on the employee management view page redirects the user to the employee management list page.", function () {
    create_employee_management.viewGoBackButton();
  });

  it("21.08. Verify that the employee management forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_employee_management.turnOffOnEditMode();
  });

  it("21.09. Verify the employee management edit reset button functions correctly.", function () {
    create_employee_management.editResetButton();
  });

  it("21.10. Verify the employee management edit draft button functions correctly.", function () {
    create_employee_management.editDraftButton();
  });

  it("21.11. Verify the employee management edit submit button functions correctly.", function () {
    create_employee_management.editSubmitButton();
  });

  it("21.12. Verify the employee management edit approve button functions correctly.", function () {
    create_employee_management.editApproveButton();
  });

  it("21.13. Verify that clicking the go back button on the employee management edit page redirects the user to the employee management list page.", function () {
    create_employee_management.editGoBackButton();
  });

  it("21.14. Verify that the employee management is updated with valid information.", function () {
    create_employee_management.editEmployeeManagement();
  });

  it("21.15. Verify the user can filter inactive employee records using the status dropdown on the Employee Management List page.", function () {
    create_employee_management.statusInactiveDropdownCheck();
  });

  it("21.16. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    create_employee_management.statusActiveDropdownCheck();
  });

  it("21.17. Verify that the search results are displayed correctly when searching by employee management name.", function () {
    create_employee_management.searchInEmployeeName();
  });

  it("21.18. Verify the grid list resets successfully when the reset button is clicked on the employee management page.", function () {
    create_employee_management.gridResetButtonCheck();
  });

  it("21.19. Verify that the grid list is refreshed successfully when the refresh button is clicked on the employee management page.", function () {
    create_employee_management.gridRefreshButtonCheck();
  });

  it("21.20. Verify that the checkbox functions correctly.", function () {
    create_employee_management.gridCheckboxCheck();
  });

  it("21.21. Verify that the checkbox lock button operates correctly when selected.", function () {
    create_employee_management.gridCheckboxLockButtonCheck();
  });

  it("21.22. Verify that the checkbox unlock button operates correctly when selected.", function () {
    create_employee_management.gridCheckboxUnlockButtonCheck();
  });

  it("21.23. Verify display the grid list successfully when the Draft button on is clicked on the employee management page", function () {
    create_employee_management.gridDraftButton();
  });

  it("21.24. Verify display the grid list successfully when the Draft button off is clicked on the employee management page", function () {
    create_employee_management.gridDraftButtonOff();
  });

  it("21.25. Verify the employee management creation reset button clears all entered input values.", function () {
    create_employee_management.createResetButtonCheck();
  });

  it("21.26. Verify that the create form draft button functions correctly.", function () {
    create_employee_management.createDraftButtonCheck();
  });

  it("21.27. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_employee_management.createValidationMessageCheck();
  });

  it("21.28. Verify that approve button functions correctly.", function () {
    create_employee_management.createApproveButtonCheck();
  });

  it("21.29. Verify that clicking the go back button on the employee management create page redirects the user to the employee management list page.", function () {
    create_employee_management.createGoBackButtonCheck();
  });

  it("21.30. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_employee_management.gridLanguageSwitchCheck();
  });
});
