// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/07-employee-management/employee-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_employee_management } from "./employee-management.po";

describe("07. Employee Management Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.fieldOfficerUserId,
        d.credential.fieldOfficerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("07.01. Verify the employee management list page loads correctly.", function () {
    grid_employee_management.gridEmployeeListPage();
  });

  it("07.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_employee_management.actionButtonCheck();
  });

  it("07.03. Verify the user can successfully view the employee management information, including the name and description.", function () {
    grid_employee_management.viewEmployeeManagement();
  });

  it("07.04. Verify that clicking the go back button on the employee management view page redirects the user to the employee management list page.", function () {
    grid_employee_management.viewGoBackButton();
  });

  it("07.05. Verify that the employee management forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    grid_employee_management.turnOnEditMode();
  });

  it("07.06. Verify the employee management edit reset button functions correctly.", function () {
    grid_employee_management.editResetButton();
  });

  it("07.07. Verify the employee management submit button functions correctly.", function () {
    grid_employee_management.editSubmitButton();
  });

  it("07.08. Verify the employee management approve button functions correctly.", function () {
    grid_employee_management.editApproveButton();
  });

  it("07.09. Verify the employee management draft button functions correctly.", function () {
    grid_employee_management.editDraftButton();
  });

  it("07.10. Verify that clicking the go back button on the employee management edit page redirects the user to the employee management list page.", function () {
    grid_employee_management.editGoBackButton();
  });

  it("07.11. Verify the user can filter inactive employee records using the status dropdown on the Employee Management List page.", function () {
    grid_employee_management.statusInactiveDropdownCheck();
  });

  it("07.12. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    grid_employee_management.statusActiveDropdownCheck();
  });

  it("07.13. Verify that the search results are displayed correctly when searching by employee management name.", function () {
    grid_employee_management.searchInEmployeeName();
  });

  it("07.14. Verify the grid list resets successfully when the reset button is clicked on the employee management page.", function () {
    grid_employee_management.gridResetButtonCheck();
  });

  it("07.15. Verify that the grid list is refreshed successfully when the refresh button is clicked on the employee management page.", function () {
    grid_employee_management.gridRefreshButtonCheck();
  });

  it("07.16. Verify that the checkbox functions correctly.", function () {
    grid_employee_management.gridCheckboxCheck();
  });

  it("07.17. Verify that the checkbox lock button operates correctly when selected.", function () {
    grid_employee_management.gridCheckboxLockButtonCheck();
  });

  it("07.18. Verify that the checkbox unlock button operates correctly when selected.", function () {
    grid_employee_management.gridCheckboxUnlockButtonCheck();
  });

  it("07.19. Verify display the grid list successfully when the Draft button on is clicked on the employee management page", function () {
    grid_employee_management.gridDraftButton();
  });

  it("07.20. Verify display the grid list successfully when the Draft button off is clicked on the employee management page", function () {
    grid_employee_management.gridDraftButtonOff();
  });

  it("07.21. Verify that when the user clicks the Search button on the employee management grid page", function () {
    grid_employee_management.gridSearchButtonCheck();
  });

  it("07.22. Verify that the list breadcrumb is correct.", function () {
    grid_employee_management.listBreadcrumbCheck();
  });

  it("07.23. Verify that all required grid columns are visible.", function () {
    grid_employee_management.requiredGridColumnsCheck();
  });

  it("07.24. Verify that grid rows contain valid identifiers, names and status.", function () {
    grid_employee_management.gridRecordDataCheck();
  });

  it("07.25. Verify that a partial name search returns matching records.", function () {
    grid_employee_management.partialNameSearchCheck();
  });

  it("07.26. Verify that a non-existing search displays no records.", function () {
    grid_employee_management.noResultSearchCheck();
  });

  it("07.27. Verify that Reset clears the search and restores the grid.", function () {
    grid_employee_management.resetRestoresGridCheck();
  });

  it("07.28. Verify that the Active filter returns only active records.", function () {
    grid_employee_management.activeStatusResultCheck();
  });

  it("07.29. Verify that the name column supports ascending sorting.", function () {
    grid_employee_management.nameAscendingSortCheck();
  });

  it("07.30. Verify that the name column supports descending sorting.", function () {
    grid_employee_management.nameDescendingSortCheck();
  });

  it("07.31. Verify that first-page pagination is correct.", function () {
    grid_employee_management.firstPagePaginationCheck();
  });

  it("07.32. Verify that View data matches the selected row and Go Back returns to the list.", function () {
    grid_employee_management.viewPageDataCheck();
  });

  it("07.33. Verify that the grid language switches from English to Bangla.", function () {
    grid_employee_management.gridLanguageSwitchCheck();
  });

});
