// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/22-rejected-employee/rejected-employee.cy.js --headed

import "cypress-file-upload";
import { create_rejected_employee } from "./rejected-employee.po";

describe("22. Rejected Employee Module Test Cases.", function () {
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

    it("22.01. Verify a new rejected employee record is created successfully when all required fields are filled with valid data.", function () {
        create_rejected_employee.createRejectedEmployee();
    });

    it("22.02. When the rejected employee approved by clicking the lock button, the lock button no longer appears.", function () {
        create_rejected_employee.rejectedEmployee();
    });

    it("22.03. Verify the rejected employee list page loads correctly.", function () {
        create_rejected_employee.gridEmployeeListPage();
    });

    it("22.04. Verify successfully performs the action when the action button is clicked.", function () {
        create_rejected_employee.actionButtonCheck();
    });

    it("22.05. Verify the user can successfully view the rejected employee information, including the name and description.", function () {
        create_rejected_employee.viewEmployeeManagement();
    });

    it("22.06. Verify that clicking the go back button on the rejected employee view page redirects the user to the employee management list page.", function () {
        create_rejected_employee.viewGoBackButton();
    });

    it("22.07. Verify that the rejected employee forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
        create_rejected_employee.turnOffOnEditMode();
    });

    it("22.08. Verify the rejected employee edit reset button functions correctly.", function () {
        create_rejected_employee.editResetButton();
    });

    it("22.09. Verify the rejected employee edit draft button functions correctly.", function () {
        create_rejected_employee.editDraftButton();
    });

    it("22.10. Verify the rejected employee edit submit button functions correctly.", function () {
        create_rejected_employee.editSubmitButton();
    });

    it("22.11. Verify the rejected employee edit approve button functions correctly.", function () {
        create_rejected_employee.editApproveButton();
    });

    it("22.12. Verify that clicking the go back button on the rejected employee edit page redirects the user to the rejected employee list page.", function () {
        create_rejected_employee.editGoBackButton();
    });

    it("22.13. Verify that the rejected employee is updated with valid information.", function () {
        create_rejected_employee.editEmployeeManagement();
    });

    it("22.14. Verify the user can filter inactive employee records using the status dropdown on the rejected employee List page.", function () {
        create_rejected_employee.statusInactiveDropdownCheck();
    });

    it("22.15. Verify check if the filter for active results works correctly with the status dropdown.", function () {
        create_rejected_employee.statusActiveDropdownCheck();
    });

    it("22.16. Verify that the search results are displayed correctly when searching by rejected employee name.", function () {
        create_rejected_employee.searchInEmployeeName();
    });

    it("22.17. Verify the grid list resets successfully when the reset button is clicked on the rejected employee page.", function () {
        create_rejected_employee.gridResetButtonCheck();
    });

    it("22.18. Verify that the grid list is refreshed successfully when the refresh button is clicked on the rejected employee page.", function () {
        create_rejected_employee.gridRefreshButtonCheck();
    });

    it("22.19. Verify that when the user clicks the Search button on the rejected employee grid page, the system redirects to the rejected employee List page..", function () {
        create_rejected_employee.gridSearchButtonCheck();
    });

    it("22.20. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_rejected_employee.gridLanguageSwitchCheck();
    });
});
