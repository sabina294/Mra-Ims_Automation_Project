// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/03-report-ais/02-financial-statement-report/02.01-trial-balance/trial-balance.cy.js --browser chrome --headed

import "cypress-file-upload";
import { trial_balance_report } from "./trial-balance.po";

describe("02.01 Trial Balance Report Module Test Cases", function () {
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

    it("02.01. Verify the trial balance list page loads correctly.", function () {
        trial_balance_report.gridTrialBalanceListPage();
    });

    it("02.02. Verify confirm that the Trial Balance report is generated correctly based on the selected office.", function () {
        trial_balance_report.viewReportButtonCheck();
    });

    it("02.03. Verify that clicking the go back button on the trial balance report page redirects the user to the trial balance list page.", function () {
        trial_balance_report.gridGoBackButtonCheck();
    });

    it("02.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
        trial_balance_report.gridLanguageSwitchCheck();
    });
});
