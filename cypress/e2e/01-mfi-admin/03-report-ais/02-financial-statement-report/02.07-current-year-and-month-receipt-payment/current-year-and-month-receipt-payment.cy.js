// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/03-report-ais/02-financial-statement-report/02.07-current-year-and-month-receipt-payment/current-year-and-month-receipt-payment.cy.js --browser chrome --headed

import "cypress-file-upload";
import { current_year_and_month_receipt_payment_report } from "./current-year-and-month-receipt-payment.po";

describe("02.07 Current Year and Month Receipt and Payment Report Module Test Cases", function () {
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

    it("02.01. Verify the current year and month receipt and payment report list page loads correctly.", function () {
        current_year_and_month_receipt_payment_report.gridCurrentYearAndMonthReceiptPaymentListPage();
    });

    it("02.02. Verify confirm that the current year and month receipt and payment report is generated correctly based on the selected office.", function () {
        current_year_and_month_receipt_payment_report.viewReportButtonCheck();
    });

    it("02.03. Verify that clicking the go back button on the current year and month receipt and payment report page redirects the user to the current year and month receipt and payment list page.", function () {
        current_year_and_month_receipt_payment_report.gridGoBackButtonCheck();
    });

    it("02.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
        current_year_and_month_receipt_payment_report.gridLanguageSwitchCheck();
    });
});
