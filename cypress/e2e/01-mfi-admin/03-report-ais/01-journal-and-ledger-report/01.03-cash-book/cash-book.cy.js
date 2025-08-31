// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/03-report-ais/01-journal-and-ledger-report/01.03-cash-book/cash-book.cy.js --browser chrome --headed

import "cypress-file-upload";
import { cash_book_report } from "./cash-book.po";

describe("01.03 Cash Book Report Module Test Cases", function () {
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

    it("01.01. Verify the cash book list page loads correctly.", function () {
        cash_book_report.gridCashBookListPage();
    });

    it("01.02. Verify confirm that the Cash Book report is generated correctly based on the selected office.", function () {
        cash_book_report.viewReportButtonCheck();
    });

    it("01.03. Verify that clicking the go back button on the cash book report page redirects the user to the cash book list page.", function () {
        cash_book_report.gridGoBackButtonCheck();
    });

    it("01.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
        cash_book_report.gridLanguageSwitchCheck();
    });
});
