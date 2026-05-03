// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/54-day-forward/day-forward.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_day_forward } from "./day-forward.po";

describe("54. Day Forward Module Test Cases", function () {
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

    it("54.01. Verify that the Day Forward MIS list page loads successfully.", function () {
        grid_day_forward.gridDayForwardListPage();
    });

    it("54.02. Verify that the Day Forward routine executes successfully.", function () {
        grid_day_forward.gridDayForwardDayRoutine();
    });

    it("54.03. Verify that the start process is executed successfully.", function () {
        grid_day_forward.startProccess();
    });

    it("54.04. Verify that the Day Forward confirmation process completes successfully.", function () {
        grid_day_forward.dayForwardConfirm();
    });

    it("54.05. Verify that the delete functionality works correctly.", function () {
        grid_day_forward.gridDeleteButtonCheck();
    });

    it("54.06. Verify that the grid list content updates correctly when switching from English to Bangla.", function () {
        grid_day_forward.gridLanguageSwitchCheck();
    });
});
