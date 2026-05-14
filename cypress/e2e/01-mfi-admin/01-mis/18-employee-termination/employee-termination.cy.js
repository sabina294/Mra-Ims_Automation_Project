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

    it("18.01. Verify that the Employee Termination List page loads successfully", function () {
        grid_employee_termination.gridEmployeeTerminationListPage();
    });

    it("18.02. Verify that a new employee termination record can be created successfully with valid required data", function () {
        grid_employee_termination.createEmployeeTermination();
    });

    it("18.03. Verify that clicking the Go Back button redirects the user to the Employee Termination List page successfully", function () {
        grid_employee_termination.terminationGoBackButton();
    });

    it("18.04. Verify that the system successfully creates and approves a new employee termination record with valid required data", function () {
        grid_employee_termination.approveNewEmployeeTermination();
    });

    it("18.05. Verify that the user can filter inactive employee termination records using the Status dropdown successfully", function () {
        grid_employee_termination.statusInactiveDropdownCheck();
    });

    it("18.06. Verify that the user can filter active employee termination records using the Status dropdown successfully", function () {
        grid_employee_termination.statusActiveDropdownCheck();
    });

    it("18.07. Verify that the search functionality works correctly when searching by employee name", function () {
        grid_employee_termination.searchInEmployeeName();
    });

    it("18.08. Verify that the grid list resets successfully when the Reset button is clicked", function () {
        grid_employee_termination.gridResetButtonCheck();
    });

    it("18.09. Verify that the grid list refreshes successfully when the Refresh button is clicked", function () {
        grid_employee_termination.gridRefreshButtonCheck();
    });

    it("18.10. Verify that clicking the Search button updates the Employee Termination List grid successfully", function () {
        grid_employee_termination.gridSearchButtonCheck();
    });

    it("18.11. Verify that the grid displays draft employee termination records when the Draft filter is enabled", function () {
        grid_employee_termination.gridDraftButton();
    });

    it("18.12. Verify that the grid hides draft employee termination records when the Draft filter is disabled", function () {
        grid_employee_termination.gridDraftButtonOff();
    });

    it("18.13. Verify that the grid content updates correctly when switching the language from English to Bangla", function () {
        grid_employee_termination.gridLanguageSwitchCheck();
    });

});
