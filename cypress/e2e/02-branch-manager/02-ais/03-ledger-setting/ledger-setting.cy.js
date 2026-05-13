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

    it("03.01.Verify that the Ledger Setting list page loads successfully.", function () {
        grid_ledger_setting.gridLedgerSubGroupListPage();
    });

    // it("03.03. Verify that clicking the Action button performs the expected operation successfully.", function () {
    //     grid_ledger_setting.actionButtonCheck();
    // });

    // it("03.05. Verify that the Reset button on the Ledger Setting edit page clears all input fields.", function () {
    //     grid_ledger_setting.editResetButton();
    // });

    // it("03.06. Verify that clicking the Go Back button on the edit page redirects to the Ledger Setting list page.", function () {
    //     grid_ledger_setting.editGoBackButton();
    // });

    it("03.07. Verify that inactive Ledger Settings can be filtered using the Status dropdown.", function () {
        grid_ledger_setting.statusInactiveDropdownCheck();
    });

    it("03.08. Verify that active Ledger Settings are correctly filtered using the Status dropdown.", function () {
        grid_ledger_setting.statusActiveDropdownCheck();
    });

    it("03.09. Verify that search returns correct results when searching by Ledger Setting name.", function () {
        grid_ledger_setting.searchName();
    });

    it("03.10. Verify that clicking the Reset button clears filters and restores the default grid list.", function () {
        grid_ledger_setting.gridResetButtonCheck();
    });

    it("03.11. Verify that clicking the Refresh button reloads the Ledger Setting grid list successfully.", function () {
        grid_ledger_setting.gridRefreshButtonCheck();
    });

    it("03.12. Verify that clicking the Search button reloads the Ledger Setting list with filtered results.", function () {
        grid_ledger_setting.gridSearchButtonCheck();
    });

    it("03.13. Verify that grid content updates correctly when switching language from English to Bangla.", function () {
        grid_ledger_setting.gridLanguageSwitchCheck();
    });
});
