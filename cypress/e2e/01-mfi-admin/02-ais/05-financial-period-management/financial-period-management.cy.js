// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/02-ais/05-financial-period-management/financial-period-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_financial_period_management } from "./financial-period-management.po";

describe("05 Financial Period Management Module Test Cases", function () {
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

    it("05.01. Verify the financial period management list page loads correctly.", function () {
        create_financial_period_management.gridFinancialPeriodListPage();
    });

    // it("05.02. Verify a financial period management record is created successfully when all required fields are filled with valid data.", function () {
    //     create_financial_period_management.createFinancialPeriodManagement();
    // });

    it("05.03. Verify successfully performs the action when the action button is clicked.", function () {
        create_financial_period_management.actionButtonCheck();
    });

    it("05.04. Verify that clicking the details view on the financial period management create page redirects the user to the financial period management list page.", function () {
        create_financial_period_management.createDetailsViewCheck();
    });

    it("05.05. Verify the user can go back of a financial period management, including its associated fields.", function () {
        create_financial_period_management.goBackFinancialPeriodManagement();
    });

    it("05.06. Verify the user can filter inactive financial period managements using the status dropdown on the financial period management list page.", function () {
        create_financial_period_management.statusInactiveDropdownCheck();
    });

    it("05.07. Verify the active result is filtered correctly by the status dropdown.", function () {
        create_financial_period_management.statusActiveDropdownCheck();
    });

    it("05.08. Verify the search returns correct results when searching by financial period management name.", function () {
        create_financial_period_management.searchName();
    });

    it("05.09. Verify the grid list resets successfully when the reset button is clicked on the financial period management page.", function () {
        create_financial_period_management.gridResetButtonCheck();
    });

    it("05.10. Verify that the grid list is refreshed successfully when the refresh button is clicked on the financial period management page.", function () {
        create_financial_period_management.gridRefreshButtonCheck();
    });

    it("05.11. Verify display the grid list successfully when the Draft button on is clicked on the financial period management page", function () {
        create_financial_period_management.gridDraftButton();
    });

    it("05.12. Verify display the grid list successfully when the Draft button off is clicked on the financial period management page", function () {
        create_financial_period_management.gridDraftButtonOff();
    });

    it("05.13. Verify the financial period management creation reset button clears all entered input values.", function () {
        create_financial_period_management.createResetButtonCheck();
    });

    it("05.14. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
        create_financial_period_management.createValidationMessageCheck();
    });

    it("05.15. Verify that clicking the go back button on the financial period management create page redirects the user to the financial period management list page.", function () {
        create_financial_period_management.createGoBackButtonCheck();
    });

    it("05.16. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_financial_period_management.gridLanguageSwitchCheck();
    });


});
