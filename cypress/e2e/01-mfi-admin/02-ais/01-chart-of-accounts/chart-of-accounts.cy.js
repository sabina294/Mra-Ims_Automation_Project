// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/02-ais/01-chart-of-accounts/chart-of-accounts.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_chart_of_accounts } from "./chart-of-accounts.po";

describe("01. Chart Of Accounts Module Test Cases", function () {
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

    it("01.01. Verify that the Chart of Accounts list page loads successfully.", function () {
        create_chart_of_accounts.gridChartOfAccountsListPage();
    });

    it("01.02. Verify that a new Chart of Accounts record is created successfully when all required fields are populated with valid data.", function () {
        create_chart_of_accounts.createChartOfAccounts();
    });

    it("01.03. Verify that a Chart of Accounts record cannot be created without a Ledger ID, even when all other required fields contain valid data.", function () {
        create_chart_of_accounts.createwithoutLedgerId();
    });

    it("01.04. Verify that a Chart of Accounts record cannot be created without an English Name, even when all other required fields contain valid data.", function () {
        create_chart_of_accounts.createwithoutNameEnglish();
    });

    it("01.05. Verify that a Chart of Accounts record cannot be created without a Bangla Name, even when all other required fields contain valid data.", function () {
        create_chart_of_accounts.createwithoutNameBangla();
    });

    it("01.06. Verify that a Chart of Accounts record cannot be created without Mnemonics, even when all other required fields contain valid data.", function () {
        create_chart_of_accounts.createwithoutMnemonics();
    });

    it("01.07. Verify that a Chart of Accounts record cannot be created without selecting a Balance Sheet Item, even when all other required fields contain valid data.", function () {
        create_chart_of_accounts.createwithoutBalanceSheetItem();
    });

    it("01.08. Verify that a Chart of Accounts record cannot be created without selecting a Status, even when all other required fields contain valid data.", function () {
        create_chart_of_accounts.createwithoutStatus();
    });

    it("01.09. Verify that the Reset button clears all entered values on the Chart of Accounts creation form.", function () {
        create_chart_of_accounts.createResetButtonCheck();
    });

    it("01.10. Verify that validation messages are displayed for all required fields when the Submit button is clicked without entering any data.", function () {
        create_chart_of_accounts.createValidationMessageCheck();
    });

    it("01.11. Verify that clicking the Go Back button on the Chart of Accounts creation page redirects the user to the Chart of Accounts list page.", function () {
        create_chart_of_accounts.createGoBackButtonCheck();
    });

    it("01.12. Verify that the grid list content is displayed correctly when switching the language from English to Bangla.", function () {
        create_chart_of_accounts.gridLanguageSwitchCheck();
    });
});
