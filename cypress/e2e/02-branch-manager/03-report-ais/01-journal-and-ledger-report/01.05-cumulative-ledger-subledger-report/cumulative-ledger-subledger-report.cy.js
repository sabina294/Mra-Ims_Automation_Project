// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/03-report-ais/01-journal-and-ledger-report/01.05-cumulative-ledger-subledger-report/cumulative-ledger-subledger-report.cy.js --browser chrome --headed

import "cypress-file-upload";
import { cumulative_ledger_subledger_report } from "./cumulative-ledger-subledger-report.po";

describe("01.05 Cumulative Ledger & Subledger Report Module Test Cases", function () {
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

    it("01.01. Verify the cumulative ledger & subledger report list page loads correctly.", function () {
        cumulative_ledger_subledger_report.gridCumulativeLedgerSubledgerReportListPage();
    });

    // it("01.02. Verify confirm that the cumulative ledger & subledger report is generated correctly based on the selected office.", function () {
    //     cumulative_ledger_subledger_report.viewReportButtonCheck();
    // });

    it("01.03. Verify that clicking the go back button on the cumulative ledger & subledger report page redirects the user to the cumulative ledger & subledger report list page.", function () {
        cumulative_ledger_subledger_report.gridGoBackButtonCheck();
    });

    it("01.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
        cumulative_ledger_subledger_report.gridLanguageSwitchCheck();
    });
});
