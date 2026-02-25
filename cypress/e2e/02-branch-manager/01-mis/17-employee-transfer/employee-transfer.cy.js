// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/17-employee-transfer/employee-transfer.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_employee_transfer } from "./employee-transfer.po";

describe("17. Employee Transfer Module Test Cases", function () {
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

    it("17.01. Verify the employee transfer list page loads correctly.", function () {
        grid_employee_transfer.gridEmployeeTransferListPage();
    });

    it("17.02. Verify the user can filter inactive employee transfer records using the status dropdown on the employee transfer List page.", function () {
        grid_employee_transfer.statusInactiveDropdownCheck();
    });

    it("17.03. Verify check if the filter for active results works correctly with the status dropdown.", function () {
        grid_employee_transfer.statusActiveDropdownCheck();
    });

    it("17.04. Verify that the search results are displayed correctly when searching by employee transfer name.", function () {
        grid_employee_transfer.searchInEmployeeName();
    });

    it("17.05. Verify the grid list resets successfully when the reset button is clicked on the employee transfer page.", function () {
        grid_employee_transfer.gridResetButtonCheck();
    });

    it("17.06. Verify that the grid list is refreshed successfully when the refresh button is clicked on the employee transfer page.", function () {
        grid_employee_transfer.gridRefreshButtonCheck();
    });

    it("17.07. Verify display the grid list successfully when the Draft button on is clicked on the employee transfer page", function () {
        grid_employee_transfer.gridDraftButton();
    });

    it("17.08. Verify display the grid list successfully when the Draft button off is clicked on the employee transfer page", function () {
        grid_employee_transfer.gridDraftButtonOff();
    });

    it("17.09. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_employee_transfer.gridLanguageSwitchCheck();
    });
});
