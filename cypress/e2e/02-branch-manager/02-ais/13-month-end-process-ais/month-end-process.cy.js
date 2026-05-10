// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/02-ais/13-month-end-process-ais/month-end-process.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_month_end_process_ais } from "./month-end-process.po.js";

describe("13. Month End Process Module Test Cases", function () {
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
            cy.switchModule("AIS");
        });
    });

    after(() => {
        cy.logout();
    });

    it("13.01. Verify that the Month End Process page loads successfully.", function () {
        grid_month_end_process_ais.gridMonthEndProcessPage();
    });

    it("13.02. Verify that clicking the Preview button redirects the user to the Process List page.", function () {
        grid_month_end_process_ais.processPreviewButtonCheck();
    });

    it("13.03. Verify that clicking the Go Back button redirects the user to the Process List page.", function () {
        grid_month_end_process_ais.processGoBackButtonCheck();
    });

    it("13.04. Verify that the 'Previous On' functionality works correctly.", function () {
        grid_month_end_process_ais.previousOn();
    });

    it("13.05. Verify that the 'Previous Search' button works correctly.", function () {
        grid_month_end_process_ais.previousSearchButton();
    });

    it("13.06. Verify that the 'Previous Preview' functionality works correctly.", function () {
        grid_month_end_process_ais.previousPreviewButton();
    });

    // it("13.07. Verify that the 'Previous Preview Go Back' functionality works correctly.", function () {
    //     grid_month_end_process_ais.previousPreviewGoBackButton();
    // });

    // it("13.08. Verify that the 'Previous Off' functionality works correctly.", function () {
    //     grid_month_end_process_ais.previousOff();
    // });

    it("13.09. Verify that the grid list content changes correctly from English to Bangla.", function () {
        grid_month_end_process_ais.gridLanguageSwitchCheck();
    });
});
