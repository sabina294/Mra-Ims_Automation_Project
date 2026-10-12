// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/02-ais/03-ledger-setting/ledger-setting.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_ledger_setting } from "./ledger-setting.po";

describe("03. Ledger Setting Module Test Cases", function () {
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

    it("03.01. Verify that the Ledger Setting list page loads successfully.", function () {
        grid_ledger_setting.gridLedgerSubGroupListPage();
    });

    it("03.02. Verify that inactive Ledger Settings can be filtered using the Status dropdown.", function () {
        grid_ledger_setting.statusInactiveDropdownCheck();
    });

    it("03.03. Verify that active Ledger Settings are correctly filtered using the Status dropdown.", function () {
        grid_ledger_setting.statusActiveDropdownCheck();
    });

    it("03.04. Verify that search returns correct results when searching by Ledger Setting name.", function () {
        grid_ledger_setting.searchName();
    });

    it("03.05. Verify that clicking the Reset button clears filters and restores the default grid list.", function () {
        grid_ledger_setting.gridResetButtonCheck();
    });

    it("03.06. Verify that clicking the Refresh button reloads the Ledger Setting grid list successfully.", function () {
        grid_ledger_setting.gridRefreshButtonCheck();
    });

    it("03.07. Verify that clicking the Search button reloads the Ledger Setting list with filtered results.", function () {
        grid_ledger_setting.gridSearchButtonCheck();
    });

    it("03.08. Verify that the breadcrumb displays Home, Accounting and Ledger Setting.", function () {
        grid_ledger_setting.listBreadcrumbCheck();
    });

    it("03.09. Verify that the grid displays all required columns.", function () {
        grid_ledger_setting.requiredGridColumnsCheck();
    });

    it("03.10. Verify that ledger records contain valid keys, codes, names and statuses.", function () {
        grid_ledger_setting.gridRecordDataCheck();
    });

    it("03.11. Verify that searching by an existing English name returns matching records.", function () {
        grid_ledger_setting.nameSearchCheck();
    });

    it("03.12. Verify that searching by a partial English name returns matching records.", function () {
        grid_ledger_setting.partialNameSearchCheck();
    });

    it("03.13. Verify that a nonexistent search displays No Data.", function () {
        grid_ledger_setting.noResultSearchCheck();
    });

    it("03.14. Verify that the Active filter returns only Active ledger records.", function () {
        grid_ledger_setting.activeStatusResultCheck();
    });

    it("03.15. Verify that Created By displays the ascending sort indicator.", function () {
        grid_ledger_setting.creatorAscendingSortCheck();
    });

    it("03.16. Verify that Created By displays the descending sort indicator.", function () {
        grid_ledger_setting.creatorDescendingSortCheck();
    });

    it("03.17. Verify that grid content updates correctly when switching language from English to Bangla.", function () {
        grid_ledger_setting.gridLanguageSwitchCheck();
    });
});
