// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/03-report-ais/01-journal-and-ledger-report/01.02-general-ledger/general-ledger.cy.js --browser chrome --headed

import "cypress-file-upload";
import { general_ledger_report } from "./general-ledger.po";

describe("01.02 General Ledger Report Module Test Cases", function () {
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

    it("01.01. Verify the general ledger list page loads correctly.", function () {
        general_ledger_report.gridGeneralLedgerListPage();
    });

    it("01.02. Verify confirm that the General Ledger report is generated correctly based on the selected office.", function () {
        general_ledger_report.viewReportButtonCheck();
    });

    it("01.03. Verify that clicking the go back button on the general ledger report page redirects the user to the general ledger list page.", function () {
        general_ledger_report.gridGoBackButtonCheck();
    });

    it("01.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
        general_ledger_report.gridLanguageSwitchCheck();
    });
});
