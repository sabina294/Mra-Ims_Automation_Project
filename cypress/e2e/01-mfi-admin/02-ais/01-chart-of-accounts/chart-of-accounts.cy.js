// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/02-ais/01-chart-of-accounts/chart-of-accounts.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_chart_of_accounts } from "./chart-of-accounts.po";

describe("32. Chart Of Accounts Module Test Cases", function () {
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

    it("01.03. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_chart_of_accounts.gridLanguageSwitchCheck();
    });
});
