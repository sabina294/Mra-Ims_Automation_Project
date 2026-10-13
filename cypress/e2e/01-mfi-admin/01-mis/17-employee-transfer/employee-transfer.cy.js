// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/17-employee-transfer/employee-transfer.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_employee_transfer } from "./employee-transfer.po";

describe("17. Employee Transfer Module Test Cases", function () {
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

    it("17.01. Verify that the Employee Transfer list page loads successfully.", function () {
        grid_employee_transfer.gridEmployeeTransferListPage();
    });

    it("17.02. Verify that the Reset button clears all input fields on the Employee Transfer form.", function () {
        grid_employee_transfer.transferResetButton();
    });

    it("17.03. Verify that the Submit button functions correctly on the Employee Transfer form.", function () {
        grid_employee_transfer.transferSubmitButton();
    });

    it("17.04. Verify that the system validates when creating an employee transfer without selecting an effective date.", function () {
        grid_employee_transfer.createEmployeeTransferWithoutEffectiveDate();
    });

    it("17.05. Verify that the system validates when creating an employee transfer without selecting an office.", function () {
        grid_employee_transfer.createEmployeeTransferWithoutOffice();
    });

    it("17.06. Verify that clicking the Go Back button redirects the user to the Employee Transfer list page.", function () {
        grid_employee_transfer.transferGoBackButton();
    });

    it("17.07. Verify that a new Employee Transfer is created successfully when all required fields are filled with valid data.", function () {
        grid_employee_transfer.createEmployeeTransfer();
    });

    it("17.08. Verify that the newly created Employee Transfer record appears in the My Tasks list.", function () {
        grid_employee_transfer.myTaskMenuEmployeeTransfer();
    });

    it("17.09. Verify that the Reset button clears all applied filters on the My Tasks page.", function () {
        grid_employee_transfer.myTaskResetButtonCheck();
    });

    it("17.10. Verify that the Refresh button reloads the My Tasks list successfully.", function () {
        grid_employee_transfer.myTaskRefreshButtonCheck();
    });

    it("17.11. Verify that the Status filter displays office dropdown Employee Transfer records correctly in My Tasks.", function () {
        grid_employee_transfer.myTaskOfficeDropdownCheck();
    });

    it("17.12. Verify that the system successfully approves a newly created Employee Transfer with valid data.", function () {
        grid_employee_transfer.approveNewEmployeeTransfer();
    });

    it("17.13. Verify that the Office filter displays office dropdown Employee Transfer records correctly in grid list", function () {
        grid_employee_transfer.gridOfficeDropdownCheck();
    });

    it("17.14. Verify that search results are displayed correctly when searching by Employee Name.", function () {
        grid_employee_transfer.searchInEmployeeName();
    });

    it("17.15. Verify that the grid list resets successfully when the Reset button is clicked.", function () {
        grid_employee_transfer.gridResetButtonCheck();
    });

    it("17.16. Verify that the grid list refreshes successfully when the Refresh button is clicked.", function () {
        grid_employee_transfer.gridRefreshButtonCheck();
    });

    it("17.17. Verify that clicking the Search button redirects the user to the Employee Transfer list page.", function () {
        grid_employee_transfer.gridSearchButtonCheck();
    });

    it("17.18. Verify that draft records are displayed when the Draft toggle is enabled.", function () {
        grid_employee_transfer.gridDraftButton();
    });

    it("17.19. Verify that draft records are hidden when the Draft toggle is disabled.", function () {
        grid_employee_transfer.gridDraftButtonOff();
    });

    it("17.20. Verify that the breadcrumb displays Home / Employee / Employee Transfer / List.", function () {
        grid_employee_transfer.listBreadcrumbCheck();
    });

    it("17.21. Verify that the grid displays all required columns.", function () {
        grid_employee_transfer.requiredGridColumnsCheck();
    });

    it("17.22. Verify that the grid displays employee records or No Data.", function () {
        grid_employee_transfer.gridRecordDataCheck();
    });

    it("17.23. Verify that office, Draft and search controls are available.", function () {
        grid_employee_transfer.searchControlsCheck();
    });

    it("17.24. Verify that full employee name search returns matching records or No Data for an empty list.", function () {
        grid_employee_transfer.exactNameSearchCheck();
    });

    it("17.25. Verify that partial employee name search returns matching records or No Data for an empty list.", function () {
        grid_employee_transfer.partialNameSearchCheck();
    });

    it("17.26. Verify that a nonexistent search displays No Data.", function () {
        grid_employee_transfer.noResultSearchCheck();
    });

    it("17.27. Verify that Reset clears the search and restores the list or empty state.", function () {
        grid_employee_transfer.resetRestoresGridCheck();
    });

    it("17.28. Verify that Refresh keeps the Employee Transfer list available.", function () {
        grid_employee_transfer.refreshListStateCheck();
    });

    it("17.29. Verify that Employee Name displays the ascending sort indicator.", function () {
        grid_employee_transfer.nameAscendingSortCheck();
    });

    it("17.30. Verify that Employee Name displays the descending sort indicator.", function () {
        grid_employee_transfer.nameDescendingSortCheck();
    });

    it("17.31. Verify that pagination or the No Data empty state displays correctly.", function () {
        grid_employee_transfer.paginationOrEmptyStateCheck();
    });

    it("17.32. Verify that Employee ID search returns matching records or No Data for an empty list.", function () {
        grid_employee_transfer.employeeIdSearchCheck();
    });

    it("17.33. Verify that the grid content updates correctly when switching the language from English to Bangla.", function () {
        grid_employee_transfer.gridLanguageSwitchCheck();
    });
});