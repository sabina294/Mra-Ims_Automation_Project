// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/18-employee-termination/employee-termination.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_employee_termination } from "./employee-termination.po";

describe("18. Employee Termination Module Test Cases", function () {

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

    it("18.01. Verify that the Employee Termination List page loads successfully.", function () {
        grid_employee_termination.gridEmployeeTerminationListPage();
    });

    it("18.02. Verify that a new Employee Termination record can be created successfully using valid required data.", function () {
        grid_employee_termination.createEmployeeTermination();
    });

    it("18.03. Verify that clicking the Go Back button redirects the user to the Employee Termination List page.", function () {
        grid_employee_termination.terminationGoBackButton();
    });

    it("18.04. Verify that the newly created Employee Termination record appears in the My Tasks list.", function () {
        grid_employee_termination.myTaskMenuEmployeeTermination();
    });

    it("18.05. Verify that clicking the Reset button clears all applied filters on the My Tasks page.", function () {
        grid_employee_termination.myTaskResetButtonCheck();
    });

    it("18.06. Verify that clicking the Refresh button reloads the My Tasks list successfully.", function () {
        grid_employee_termination.myTaskRefreshButtonCheck();
    });

    it("18.07. Verify that the Status filter displays office dropdown Employee Termination records correctly in My Tasks.", function () {
        grid_employee_termination.myTaskOfficeDropdownCheck();
    });

    it("18.08. Verify that a new Employee Termination record can be created and approved successfully using valid required data.", function () {
        grid_employee_termination.approveNewEmployeeTermination();
    });

    it("18.09. Verify that the Office filter displays office dropdown Employee Termination records correctly in grid list", function () {
        grid_employee_termination.gridOfficeDropdownCheck();
    });

    it("18.10. Verify that the search functionality works correctly when searching by employee name.", function () {
        grid_employee_termination.searchInEmployeeName();
    });

    it("18.11. Verify that clicking the Reset button clears all applied filters and resets the Employee Termination grid.", function () {
        grid_employee_termination.gridResetButtonCheck();
    });

    it("18.12. Verify that clicking the Refresh button reloads the Employee Termination grid successfully.", function () {
        grid_employee_termination.gridRefreshButtonCheck();
    });

    it("18.13. Verify that clicking the Search button updates the Employee Termination List grid successfully.", function () {
        grid_employee_termination.gridSearchButtonCheck();
    });

    it("18.14. Verify that draft Employee Termination records are displayed when the Draft filter is enabled.", function () {
        grid_employee_termination.gridDraftButton();
    });

    it("18.15. Verify that draft Employee Termination records are hidden when the Draft filter is disabled.", function () {
        grid_employee_termination.gridDraftButtonOff();
    });

    it("18.16. Verify that the breadcrumb displays Home / Employee / Employee Termination / List.", function () {
        grid_employee_termination.listBreadcrumbCheck();
    });

    it("18.17. Verify that the grid displays all required columns.", function () {
        grid_employee_termination.requiredGridColumnsCheck();
    });

    it("18.18. Verify that the grid displays employee records or No Data.", function () {
        grid_employee_termination.gridRecordDataCheck();
    });

    it("18.19. Verify that office, Draft and search controls are available.", function () {
        grid_employee_termination.searchControlsCheck();
    });

    it("18.20. Verify that full employee name search returns matching records or No Data for an empty list.", function () {
        grid_employee_termination.exactNameSearchCheck();
    });

    it("18.21. Verify that partial employee name search returns matching records or No Data for an empty list.", function () {
        grid_employee_termination.partialNameSearchCheck();
    });

    it("18.22. Verify that a nonexistent search displays No Data.", function () {
        grid_employee_termination.noResultSearchCheck();
    });

    it("18.23. Verify that Reset clears the search and restores the list or empty state.", function () {
        grid_employee_termination.resetRestoresGridCheck();
    });

    it("18.24. Verify that Refresh keeps the Employee Termination list available.", function () {
        grid_employee_termination.refreshListStateCheck();
    });

    it("18.25. Verify that Employee Name displays the ascending sort indicator.", function () {
        grid_employee_termination.nameAscendingSortCheck();
    });

    it("18.26. Verify that Employee Name displays the descending sort indicator.", function () {
        grid_employee_termination.nameDescendingSortCheck();
    });

    it("18.27. Verify that pagination or the No Data empty state displays correctly.", function () {
        grid_employee_termination.paginationOrEmptyStateCheck();
    });

    it("18.28. Verify that Employee ID search returns matching records or No Data for an empty list.", function () {
        grid_employee_termination.employeeIdSearchCheck();
    });

    it("18.29. Verify that the Employee Termination List page is displayed correctly after switching the language from English to Bangla.", function () {
        grid_employee_termination.gridLanguageSwitchCheck();
    });

});
