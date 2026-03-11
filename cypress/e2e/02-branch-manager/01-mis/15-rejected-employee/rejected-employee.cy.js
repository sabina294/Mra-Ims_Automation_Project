// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/15-rejected-employee/rejected-employee.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_rejected_employee } from "./rejected-employee.po";

describe("15. Rejected Employee Module Test Cases", function () {
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
    it("15.01 Verify that the Rejected Employee List page loads successfully.", function () {
        create_rejected_employee.gridEmployeeListPage();
    });

    it("15.02 Verify that a new rejected employee record is created successfully with valid required data.", function () {
        create_rejected_employee.createEmployeeManagement();
    });

    it("15.03 Verify that the Branch Manager can successfully approve a rejected employee record.", function () {
        create_rejected_employee.rejectedEmployee();
    });

    it("15.04 Verify that the action button performs the expected action when clicked.", function () {
        create_rejected_employee.actionButtonCheck();
    });

    it("15.05 Verify that the user can view rejected employee details including name and description.", function () {
        create_rejected_employee.viewEmployeeManagement();
    });

    it("15.06 Verify that clicking the 'Go Back' button on the view page redirects to the Rejected Employee List page.", function () {
        create_rejected_employee.viewGoBackButton();
    });

    it("15.07 Verify that the reset button functions correctly on the rejected employee edit page.", function () {
        create_rejected_employee.editResetButton();
    });

    it("15.08 Verify that clicking the 'Go Back' button on the edit page redirects to the Rejected Employee List page.", function () {
        create_rejected_employee.editGoBackButton();
    });

    it("15.09 Verify that rejected employee information can be updated successfully with valid data.", function () {
        create_rejected_employee.editEmployeeManagement();
    });

    it("15.10 Verify that inactive employee records can be filtered using the status dropdown.", function () {
        create_rejected_employee.statusInactiveDropdownCheck();
    });

    it("15.11 Verify that active employee records are displayed correctly when selected from the status dropdown.", function () {
        create_rejected_employee.statusActiveDropdownCheck();
    });

    it("15.12 Verify that the search results are displayed correctly when searching by rejected employee name.", function () {
        create_rejected_employee.searchInEmployeeName();
    });

    it("15.13 Verify that the grid list resets successfully when the reset button is clicked.", function () {
        create_rejected_employee.gridResetButtonCheck();
    });

    it("15.14 Verify that the grid list refreshes successfully when the refresh button is clicked.", function () {
        create_rejected_employee.gridRefreshButtonCheck();
    });

    it("15.15 Verify that the grid content updates correctly when switching the language from English to Bangla.", function () {
        create_rejected_employee.gridLanguageSwitchCheck();
    });
});
