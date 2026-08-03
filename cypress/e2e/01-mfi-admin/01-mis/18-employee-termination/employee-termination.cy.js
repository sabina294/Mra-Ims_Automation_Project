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

    it("18.16. Verify that the Employee Termination List page is displayed correctly after switching the language from English to Bangla.", function () {
        grid_employee_termination.gridLanguageSwitchCheck();
    });

});
