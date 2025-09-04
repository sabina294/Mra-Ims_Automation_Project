// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/03-report-ais/02-financial-statement-report/02.05-comperehensive-income-and-expenditure/comperehensive-income-expenditure.cy.js --browser chrome --headed

import "cypress-file-upload";
import { comperehensive_income_and_expenditure_report } from "./comperehensive-income-expenditure.po";

describe("02.05 Comprehensive Income and Expenditure Report Module Test Cases", function () {
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

    it("02.01. Verify the comprehensive income and expenditure report list page loads correctly.", function () {
        comperehensive_income_and_expenditure_report.gridComprehensiveIncomeAndExpenditureListPage();
    });

    it("02.02. Verify confirm that the Comprehensive Income and Expenditure report is generated correctly based on the selected office.", function () {
        comperehensive_income_and_expenditure_report.viewReportButtonCheck();
    });

    it("02.03. Verify that clicking the go back button on the Comprehensive Income and Expenditure report page redirects the user to the Comprehensive Income and Expenditure list page.", function () {
        comperehensive_income_and_expenditure_report.gridGoBackButtonCheck();
    });

    it("02.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
        comperehensive_income_and_expenditure_report.gridLanguageSwitchCheck();
    });
});
