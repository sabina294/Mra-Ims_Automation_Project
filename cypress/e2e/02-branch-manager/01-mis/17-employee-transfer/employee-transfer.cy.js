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

    it("17.02. Verify the employee transfer reset button functions correctly.", function () {
        grid_employee_transfer.transferResetButton();
    });

    it("17.03. Verify the employee transfer submit button functions correctly.", function () {
        grid_employee_transfer.transferSubmitButton();
    });

    it("17.04. Verify that clicking the go back button on the employee transfer page redirects the user to the employee transfer list page.", function () {
        grid_employee_transfer.transferGoBackButton();
    });

    // it("17.05. Verify a new employee transfer is created successfully when all required fields are filled with valid data.", function () {
    //     grid_employee_transfer.createEmployeeTransfer();
    // });

    it("17.06. Verify the user can filter inactive employee transfer records using the status dropdown on the employee transfer List page.", function () {
        grid_employee_transfer.statusInactiveDropdownCheck();
    });

    it("17.07. Verify check if the filter for active results works correctly with the status dropdown.", function () {
        grid_employee_transfer.statusActiveDropdownCheck();
    });

    it("17.08. Verify that the search results are displayed correctly when searching by employee transfer name.", function () {
        grid_employee_transfer.searchInEmployeeName();
    });

    it("17.09. Verify the grid list resets successfully when the reset button is clicked on the employee transfer page.", function () {
        grid_employee_transfer.gridResetButtonCheck();
    });

    it("17.10. Verify that the grid list is refreshed successfully when the refresh button is clicked on the employee transfer page.", function () {
        grid_employee_transfer.gridRefreshButtonCheck();
    });

    it("17.11. Verify display the grid list successfully when the Draft button on is clicked on the employee transfer page", function () {
        grid_employee_transfer.gridDraftButton();
    });

    it("17.12. Verify display the grid list successfully when the Draft button off is clicked on the employee transfer page", function () {
        grid_employee_transfer.gridDraftButtonOff();
    });

    it("17.13. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_employee_transfer.gridLanguageSwitchCheck();
    });
});
