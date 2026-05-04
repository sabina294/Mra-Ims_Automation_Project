// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/02-ais/05-financial-period-management/financial-period-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_financial_period_management } from "./financial-period-management.po";

describe("05 Financial Financial Period Management Module Test Cases", function () {
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

    it("05.01. Verify that the Financial Period Management list page loads successfully.", function () {
        grid_financial_period_management.gridFinancialPeriodListPage();
    });

    it("05.02. Verify that the action button performs the expected operation when clicked.", function () {
        grid_financial_period_management.actionButtonCheck();
    });

    it("05.03. Verify that the user can view all relevant details of a financial period.", function () {
        grid_financial_period_management.viewFinancialPeriod();
    });

    it("05.04. Verify that the user can navigate back from the financial period details page.", function () {
        grid_financial_period_management.goBackFinancialPeriod();
    });

    it("05.05. Verify that the user can close the financial period details view successfully.", function () {
        grid_financial_period_management.closeFinancialPeriod();
    });

    it("05.06. Verify that the Go Back button functions correctly from the close view.", function () {
        grid_financial_period_management.closeGoBackButtonCheck();
    });

    it("05.07. Verify that inactive financial periods can be filtered using the status dropdown.", function () {
        grid_financial_period_management.statusInactiveDropdownCheck();
    });

    it("05.08. Verify that active financial periods are filtered correctly using the status dropdown.", function () {
        grid_financial_period_management.statusActiveDropdownCheck();
    });

    it("05.09. Verify that the search functionality returns correct results based on financial period name.", function () {
        grid_financial_period_management.searchName();
    });

    it("05.10. Verify that the grid resets successfully when the Reset button is clicked.", function () {
        grid_financial_period_management.gridResetButtonCheck();
    });

    it("05.11. Verify that the grid refreshes successfully when the Refresh button is clicked.", function () {
        grid_financial_period_management.gridRefreshButtonCheck();
    });

    it("05.12. Verify that clicking the Search button redirects to the Financial Period Management list page.", function () {
        grid_financial_period_management.gridSearchButtonCheck();
    });

    it("05.13. Verify that the grid displays draft records when the Draft toggle is enabled.", function () {
        grid_financial_period_management.gridDraftButton();
    });

    it("05.14. Verify that the grid hides draft records when the Draft toggle is disabled.", function () {
        grid_financial_period_management.gridDraftButtonOff();
    });

    it("05.15. Verify that the grid content updates correctly when switching language from English to Bangla.", function () {
        grid_financial_period_management.gridLanguageSwitchCheck();
    });


});
