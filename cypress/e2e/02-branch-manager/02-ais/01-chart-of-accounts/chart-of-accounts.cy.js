// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/02-ais/01-chart-of-accounts/chart-of-accounts.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_chart_of_accounts } from "./chart-of-accounts.po";

describe("01. Chart Of Accounts Module Test Cases", function () {
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

    it("01.01. Verify the chart of accounts list page loads correctly.", function () {
        grid_chart_of_accounts.gridChartOfAccountsListPage();
    });

    it("01.02. Verify that breadcrumb displays Home, Accounting and Chart of Accounts.", function () {
        grid_chart_of_accounts.listBreadcrumbCheck();
    });

    it("01.03. Verify that the business date picker is available.", function () {
        grid_chart_of_accounts.businessDateControlCheck();
    });

    it("01.04. Verify that all ledger tables display the required columns.", function () {
        grid_chart_of_accounts.requiredLedgerColumnsCheck();
    });

    it("01.05. Verify that asset ledger subgroups are displayed.", function () {
        grid_chart_of_accounts.assetSubgroupsCheck();
    });

    it("01.06. Verify that ledger records contain a code and English and Bengali names.", function () {
        grid_chart_of_accounts.ledgerRecordDataCheck();
    });

    it("01.07. Verify that ledger balances display numeric amounts with two decimal places.", function () {
        grid_chart_of_accounts.ledgerBalanceFormatCheck();
    });

    it("01.08. Verify that reloading keeps the Chart of Accounts page and ledger data available.", function () {
        grid_chart_of_accounts.reloadPageCheck();
    });

    it("01.09. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_chart_of_accounts.gridLanguageSwitchCheck();
    });
});
