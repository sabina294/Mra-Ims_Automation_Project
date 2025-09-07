// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/03-report-ais/02-financial-statement-report/02.04-consolldated-financial-staement/consolldated-financial-staement.cy.js --browser chrome --headed

import "cypress-file-upload";
import { consolidated_financial_statement_report } from "./consolldated-financial-statement.po";

describe("02.04 Consolidated Financial Statement Report Module Test Cases", function () {
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

    it("02.01. Verify the consolidated financial statement list page loads correctly.", function () {
        consolidated_financial_statement_report.gridConsolidatedFinancialStatementListPage();
    });

    it("02.02. Verify confirm that the Consolidated Financial Statement report is generated correctly based on the selected office.", function () {
        consolidated_financial_statement_report.viewReportButtonCheck();
    });

    it("02.03. Verify that clicking the go back button on the Consolidated Financial Statement report page redirects the user to the Consolidated Financial Statement list page.", function () {
        consolidated_financial_statement_report.gridGoBackButtonCheck();
    });

    it("02.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
        consolidated_financial_statement_report.gridLanguageSwitchCheck();
    });
});
