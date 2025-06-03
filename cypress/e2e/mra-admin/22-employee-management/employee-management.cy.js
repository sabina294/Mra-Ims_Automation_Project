// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/22-employee-management/employee-management.cy.js --headed

import "cypress-file-upload";
import { create_employee_management } from "./employee-management.po";

describe("22. employee management Grid list,Creation,View,Update,Inactive,Active,Search,Reset,Refresh,create Reset,submit button Validation Messages,Go back and Language switch bangla Tests.", function () {
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

  it("22.01. Verify that the Employee Management List page loads successfully.", function () {
    create_employee_management.gridEmployeeListPage();
  });

  it("22.02. To verify that a new Employee Management can be successfully created when all required fields are filled with valid data.", function () {
    create_employee_management.createEmployeeManagement();
  });

  it("22.03. To verify that the user can successfully edit an existing Employee Management information, including the Employee  Management Name, and Description..", function () {
    create_employee_management.viewEmployeeManagement();
  });

  it("22.04. should update the Employee  Management with valid information by MRA-Admin role", function () {
    create_employee_management.editEmployeeManagement();
  });

  it("22.05. To verify that the user can filter the inactive Employee Managements using the Status Dropdown on the Employee  Management List page.", function () {
    create_employee_management.statusInactiveDropdownCheck();
  });

  it("22.06. Verify Filter Active Result by Status Dropdown", function () {
    create_employee_management.statusActiveDropdownCheck();
  });

  it("22.07. Verify Successful Search Result by Employee Management Name", function () {
    create_employee_management.searchInEmployeeName();
  });

  it("22.08. Verify Successful Reset of Grid List Using the Reset Button on Employee Management Page.", function () {
    create_employee_management.gridResetButtonCheck();
  });

  it("22.09. Verify Successful Refresh of Grid List Using the Refresh Button on Employee Management Page.", function () {
    create_employee_management.gridRefreshButtonCheck();
  });

  it("22.10. Verify that the Employee Management creation reset button clears applied input terms.", function () {
    create_employee_management.createResetButtonCheck();
  });

  it("22.11. Verify that required field validation messages appear when mandatory fields are left empty.", function () {
    create_employee_management.createValidationMessageCheck();
  });

  it("22.12. Verify that clicking the Go Back button on the Employee Management Create page navigates the user back to the Employee Management List page.", function () {
    create_employee_management.createGoBackButtonCheck();
  });

  it("22.13. Verify that the grid list content successfully switches from English to Bangla.", function () {
    create_employee_management.gridLanguageSwitchCheck();
  });
});
