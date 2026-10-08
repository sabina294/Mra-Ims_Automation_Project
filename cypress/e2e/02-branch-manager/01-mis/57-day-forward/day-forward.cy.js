// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/57-day-forward/day-forward.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_day_forward } from "../../../../support/page-objects/day-forward.po";

describe("57. Day Forward Module Test Cases", function () {
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

    it("57.01. Verify that the Day Forward MIS list page loads successfully.", function () {
        grid_day_forward.gridDayForwardListPage();
    });

    it("57.02. Verify that the Day Forward routine executes successfully.", function () {
        grid_day_forward.gridDayForwardDayRoutine();
    });

    it("57.03. Verify that the start process is executed successfully.", function () {
        grid_day_forward.startProccess();
    });

    it("57.04. Verify that the Day Forward confirmation process completes successfully.", function () {
        grid_day_forward.dayForwardConfirm();
    });

    it("57.05. Verify that the delete functionality works correctly.", function () {
        grid_day_forward.gridDeleteButtonCheck();
    });

    it("57.06. Verify that the Day Forward breadcrumb is displayed.", function () {
        grid_day_forward.breadcrumbCheck();
    });

    it("57.07. Verify that branch, business day and system status headings are visible.", function () {
        grid_day_forward.summaryLabelsCheck();
    });

    it("57.08. Verify that all Day Forward grid columns are visible.", function () {
        grid_day_forward.columnsCheck();
    });

    it("57.09. Verify that records show serial numbers, business weekdays, dates and start timestamps.", function () {
        grid_day_forward.recordDataCheck();
    });

    it("57.10. Verify that collection, disbursement and withdrawal totals are numeric.", function () {
        grid_day_forward.transactionTotalsCheck();
    });

    it("57.11. Verify that Forward Day Routine and Delete controls are visible.", function () {
        grid_day_forward.actionControlsCheck();
    });

    it("57.12. Verify that the first page displays pagination controls with Previous disabled.", function () {
        grid_day_forward.firstPagePaginationCheck();
    });

    it("57.13. Verify that the grid list content updates correctly when switching from English to Bangla.", function () {
        grid_day_forward.gridLanguageSwitchCheck();
    });
});
