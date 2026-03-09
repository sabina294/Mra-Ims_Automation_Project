// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/18-employee-termination/employee-termination.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_employee_termination } from "./employee-termination.po";

describe("18. Employee Termination Module Test Cases", function () {

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

    it("18.01. Verify the employee termination list page loads correctly.", function () {
        grid_employee_termination.gridEmployeeTerminationListPage();
    });

    it("18.02. Verify a new employee termination is created successfully when all required fields are filled with valid data.", function () {
        grid_employee_termination.createEmployeeTermination();
    });

    it("18.03. Verify that clicking the go back button on the employee termination page redirects the user to the employee termination list page.", function () {
        grid_employee_termination.terminationGoBackButton();
    });

    // it("18.04. Verify that the system successfully creates and approves a new employee termination when all required fields are provided with valid data.", function () {
    //     grid_employee_termination.approveNewEmployeeTermination();
    // });

    it("18.05. Verify the user can filter inactive employee termination records using the status dropdown on the employee termination List page.", function () {
        grid_employee_termination.statusInactiveDropdownCheck();
    });

    it("18.06. Verify check if the filter for active results works correctly with the status dropdown.", function () {
        grid_employee_termination.statusActiveDropdownCheck();
    });

    it("18.07. Verify that the search results are displayed correctly when searching by employee termination name.", function () {
        grid_employee_termination.searchInEmployeeName();
    });

    it("18.08. Verify the grid list resets successfully when the reset button is clicked on the employee termination page.", function () {
        grid_employee_termination.gridResetButtonCheck();
    });

    it("18.09. Verify that the grid list is refreshed successfully when the refresh button is clicked on the employee termination page.", function () {
        grid_employee_termination.gridRefreshButtonCheck();
    });

    it("18.10. Verify display the grid list successfully when the Draft button on is clicked on the employee termination page", function () {
        grid_employee_termination.gridDraftButton();
    });

    it("18.11. Verify display the grid list successfully when the Draft button off is clicked on the employee termination page", function () {
        grid_employee_termination.gridDraftButtonOff();
    });

    it("18.12. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_employee_termination.gridLanguageSwitchCheck();
    });

});