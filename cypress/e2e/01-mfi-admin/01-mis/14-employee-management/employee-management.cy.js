// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/14-employee-management/employee-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_employee_management } from "./employee-management.po";

describe("14. Employee Management Module Test Cases", function () {
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

  it("14.01. Verify that the Employee Management List page loads successfully.", function () {
    create_employee_management.gridEmployeeListPage();
  });

  it("14.02. Verify that a new Employee Management record is created successfully with valid required data.", function () {
    create_employee_management.createEmployeeManagement();
  });

  it("14.03. Verify that an Employee Management record is available in My Tasks after creation.", function () {
    create_employee_management.myTaskMenuEmployee();
  });

  it("14.04. Verify that the Reset button clears all applied filters on the My Tasks page.", function () {
    create_employee_management.myTaskResetButtonCheck();
  });

  it("14.05. Verify that the Refresh button reloads the My Tasks list successfully.", function () {
    create_employee_management.myTaskRefreshButtonCheck();
  });

  it("14.06. Verify that the Status filter displays office dropdown Employee Management records correctly in My Tasks.", function () {
    create_employee_management.myTaskOfficeDropdownCheck();
  });
2
  it("14.07. Verify that the Search button displays the correct Employee Management records in My Tasks.", function () {
    create_employee_management.myTaskSearchButtonCheck();
  });

  it("14.08. Verify that an MFI Admin can approve an Employee Management record successfully.", function () {
    create_employee_management.approveEmployee();
  });

  it("14.09. Verify that the Action menu functions correctly for an Employee Management record.", function () {
    create_employee_management.actionButtonCheck();
  });

  it("14.10. Verify that the user can view the Employee Management details successfully.", function () {
    create_employee_management.viewEmployeeManagement();
  });

  it("14.11. Verify that clicking the Go Back button on the Employee Management View page redirects the user to the Employee Management List page.", function () {
    create_employee_management.viewGoBackButton();
  });

  it("14.12. Verify display employee profile details correctly", function () {
    create_employee_management.profileViewEmployeeManagement();
  });

  it("14.13. Verify navigate back to list page from profile view page", function () {
    create_employee_management.profileViewGoBackButton();
  });

  it("14.14. Verify that the Reset button functions correctly on the Employee Management Edit page.", function () {
    create_employee_management.editResetButton();
  });

  it("14.15. Verify that the Draft button functions correctly on the Employee Management Edit page.", function () {
    create_employee_management.editDraftButton();
  });

  it("14.16. Verify that the Submit button functions correctly on the Employee Management Edit page.", function () {
    create_employee_management.editSubmitButton();
  });

  it("14.17. Verify that the Approve button functions correctly on the Employee Management Edit page.", function () {
    create_employee_management.editApproveButton();
  });

  it("14.18. Verify that clicking the Go Back button on the Employee Management Edit page redirects the user to the Employee Management List page.", function () {
    create_employee_management.editGoBackButton();
  });

  it("14.19. Verify that the Employee Management record is updated successfully with valid information.", function () {
    create_employee_management.editEmployeeManagement();
  });

  it("14.20. Verify that the Status filter displays Inactive Employee Management records correctly.", function () {
    create_employee_management.statusInactiveDropdownCheck();
  });

  it("14.21. Verify that the Status filter displays Active Employee Management records correctly.", function () {
    create_employee_management.statusActiveDropdownCheck();
  });

  it("14.22. Verify that the search functionality returns the correct Employee Management record by employee name.", function () {
    create_employee_management.searchInEmployeeName();
  });

  it("14.23. Verify that the Reset button clears all applied filters on the Employee Management List page.", function () {
    create_employee_management.gridResetButtonCheck();
  });

  it("14.24. Verify that the Refresh button reloads the Employee Management List successfully.", function () {
    create_employee_management.gridRefreshButtonCheck();
  });

  it("14.25. Verify that enabling the Draft filter displays Draft Employee Management records.", function () {
    create_employee_management.gridDraftButton();
  });

  it("14.26. Verify that disabling the Draft filter displays all Employee Management records.", function () {
    create_employee_management.gridDraftButtonOff();
  });

  it("14.27. Verify that the grid checkbox can be selected and deselected successfully.", function () {
    create_employee_management.gridCheckboxCheck();
  });

  it("14.28. Verify that the Lock action works correctly for the selected Employee Management record.", function () {
    create_employee_management.gridCheckboxLockButtonCheck();
  });

  it("14.29. Verify that the Unlock action works correctly for the selected Employee Management record.", function () {
    create_employee_management.gridCheckboxUnlockButtonCheck();
  });

  it("14.30. Verify that the Reset button clears all entered values on the Employee Management Create page.", function () {
    create_employee_management.createResetButtonCheck();
  });

  it("14.31. Verify that validation messages are displayed for all required fields when submitting an empty Employee Management form.", function () {
    create_employee_management.createValidationMessageCheck();
  });

  it("14.32. Verify that validation messages are displayed for all required fields when approving an empty Employee Management form.", function () {
    create_employee_management.createApproveButtonCheck();
  });

  it("14.33. Verify that clicking the Go Back button on the Employee Management Create page redirects the user to the Employee Management List page.", function () {
    create_employee_management.createGoBackButtonCheck();
  });

  it("14.34. Verify that the Draft button saves the Employee Management record as a draft successfully.", function () {
    create_employee_management.createDraftButtonCheck();
  });

  it("14.35. Verify that the Search button displays the correct Employee Management records on the List page.", function () {
    create_employee_management.gridSearchButtonCheck();
  });

  it("14.36. Verify that the Employee Management List is displayed correctly after switching the language from English to Bangla.", function () {
    create_employee_management.gridLanguageSwitchCheck();
  });
});
