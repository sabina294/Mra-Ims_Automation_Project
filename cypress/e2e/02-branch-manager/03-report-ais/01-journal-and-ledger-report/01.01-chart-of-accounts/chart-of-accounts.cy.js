// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/03-report-ais/01-journal-and-ledger-report/01.01-chart-of-accounts/chart-of-accounts.cy.js --browser chrome --headed

import "cypress-file-upload";
import { chart_of_accounts_report } from "./chart-of-accounts.po";

describe("01.01 Chart Of Accounts Report Module Test Cases", function () {
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

    it("01.01. Verify the chart of accounts list page loads correctly.", function () {
        chart_of_accounts_report.gridChartOfAccountsListPage();
    });

    it("01.02. Verify confirm that the Chart of Accounts report is generated correctly based on the selected office.", function () {
        chart_of_accounts_report.viewReportButtonCheck();
    });

    it("01.03. Verify that clicking the go back button on the chart of accounts report page redirects the user to the chart of accounts list page.", function () {
        chart_of_accounts_report.gridGoBackButtonCheck();
    });

    it("01.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
        chart_of_accounts_report.gridLanguageSwitchCheck();
    });
});
