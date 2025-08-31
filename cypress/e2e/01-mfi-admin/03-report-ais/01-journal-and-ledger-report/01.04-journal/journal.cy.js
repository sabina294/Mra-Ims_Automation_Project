// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/03-report-ais/01-journal-and-ledger-report/01.04-journal/journal.cy.js --browser chrome --headed

import "cypress-file-upload";
import { journal_report } from "./journal.po";

describe("01.04 Journal Report Module Test Cases", function () {
    const baseURL = Cypress.env("BASE_URL");
    const test_data = Cypress.env("TEST_DATA");
    before(() => {
        cy.fixture(test_data).then((d) => {
            cy.login(
                baseURL,
                d.credential.mfiAdminUserId,
                d.credential.mfiAdminPassword
            );
            cy.changeLanguage("english");
            cy.switchModule("AIS");

        });
    });

    after(() => {
        cy.logout();
    });

    it("01.01. Verify the journal report list page loads correctly.", function () {
        journal_report.gridJournalReportListPage();
    });

    it("01.02. Verify confirm that the Journal report is generated correctly based on the selected office.", function () {
        journal_report.viewReportButtonCheck();
    });

    it("01.03. Verify that clicking the go back button on the journal report page redirects the user to the journal report list page.", function () {
        journal_report.gridGoBackButtonCheck();
    });

    it("01.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
        journal_report.gridLanguageSwitchCheck();
    });
});
