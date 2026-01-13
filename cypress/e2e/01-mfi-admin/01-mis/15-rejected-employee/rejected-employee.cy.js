// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/15-rejected-employee/rejected-employee.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_rejected_employee } from "./rejected-employee.po";

describe("15. Rejected Employee Module Test Cases", function () {
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

    it("15.01. Verify the rejected employee list page loads correctly.", function () {
        create_rejected_employee.gridEmployeeListPage();
    });

    it("15.02. Verify a new rejected employee record is created successfully when all required fields are filled with valid data.", function () {
        create_rejected_employee.createEmployeeManagement();
    });

    it("15.03. Verify branch manager to successfully approve a rejected employee record after creation.", function () {
        create_rejected_employee.rejectedEmployee();
    });

    it("15.04. Verify successfully performs the action when the action button is clicked.", function () {
        create_rejected_employee.actionButtonCheck();
    });

    it("15.05. Verify the user can successfully view the rejected employee information, including the name and description.", function () {
        create_rejected_employee.viewEmployeeManagement();
    });

    it("15.06. Verify that clicking the go back button on the rejected employee view page redirects the user to the rejected employee list page.", function () {
        create_rejected_employee.viewGoBackButton();
    });

    it("15.07. Verify the rejected employee edit reset button functions correctly.", function () {
        create_rejected_employee.editResetButton();
    });

    it("15.08. Verify that clicking the go back button on the rejected employee edit page redirects the user to the rejected employee list page.", function () {
        create_rejected_employee.editGoBackButton();
    });

    it("15.09. Verify that the rejected employee information is updated with valid information.", function () {
        create_rejected_employee.editEmployeeManagement();
    });

    it("15.10. Verify the user can filter rejected employee records using the status dropdown on the Rejected Employee List page.", function () {
        create_rejected_employee.statusRejectedDropdownCheck();
    });

    it("15.11. Verify check if the filter for approved results works correctly with the status dropdown.", function () {
        create_rejected_employee.statusApprovedDropdownCheck();
    });

    it("15.12. Verify that the search results are displayed correctly when searching by rejected employee name.", function () {
        create_rejected_employee.searchInEmployeeName();
    });

    it("15.13. Verify the grid list resets successfully when the reset button is clicked on the rejected employee page.", function () {
        create_rejected_employee.gridResetButtonCheck();
    });

    it("15.14. Verify that the grid list is refreshed successfully when the refresh button is clicked on the rejected employee page.", function () {
        create_rejected_employee.gridRefreshButtonCheck();
    });

    it("15.15. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_rejected_employee.gridLanguageSwitchCheck();
    });
});
