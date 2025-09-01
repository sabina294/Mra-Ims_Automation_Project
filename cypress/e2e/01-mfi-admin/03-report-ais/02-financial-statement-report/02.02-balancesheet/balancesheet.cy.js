// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/03-report-ais/02-financial-statement-report/02.02-balancesheet/balancesheet.cy.js --browser chrome --headed

import "cypress-file-upload";
import { balancesheet_report } from "./balancesheet.po";

describe("02.02 Balance Sheet Report Module Test Cases", function () {
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

    it("02.01. Verify the balance sheet list page loads correctly.", function () {
        balancesheet_report.gridBalancesheetListPage();
    });

    it("02.02. Verify confirm that the Balance Sheet report is generated correctly based on the selected office.", function () {
        balancesheet_report.viewReportButtonCheck();
    });

    it("02.03. Verify that clicking the go back button on the balance sheet report page redirects the user to the balance sheet list page.", function () {
        balancesheet_report.gridGoBackButtonCheck();
    });

    it("02.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
        balancesheet_report.gridLanguageSwitchCheck();
    });
});
