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

    it("01.01. Verify the chart of accounts list page loads correctly.", function () {
        create_chart_of_accounts.gridChartOfAccountsListPage();
    });

    it("01.02. Verify a new chart of accounts record is created successfully when all required fields are filled with valid data.", function () {
        create_chart_of_accounts.createChartOfAccounts();
    });

    it("01.03. Verify that a chart of accounts cannot be created without a ledger  id, even if all other fields are valid..", function () {
        create_chart_of_accounts.createwithoutLedgerId();
    });

    it("01.04. Verify that a chart of accounts cannot be created without a name english, even if all other fields are valid..", function () {
        create_chart_of_accounts.createwithoutNameEnglish();
    });

    it("01.05. Verify that a chart of accounts cannot be created without a name bangla, even if all other fields are valid..", function () {
        create_chart_of_accounts.createwithoutNameBangla();
    });

    it("01.06. Verify that a chart of accounts cannot be created without a mnemonics, even if all other fields are valid..", function () {
        create_chart_of_accounts.createwithoutMnemonics();
    });

    it("01.07. Verify the chart of accounts creation reset button clears all entered input values.", function () {
        create_chart_of_accounts.createResetButtonCheck();
    });

    it("01.08. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
        create_chart_of_accounts.createValidationMessageCheck();
    });

    it("01.09. Verify that clicking the go back button on the chart of accounts create page redirects the user to the chart of accounts list page.", function () {
        create_chart_of_accounts.createGoBackButtonCheck();
    });

    it("01.10. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_chart_of_accounts.gridLanguageSwitchCheck();
    });
});
