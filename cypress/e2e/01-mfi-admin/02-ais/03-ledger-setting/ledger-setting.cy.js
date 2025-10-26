// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/02-ais/03-ledger-setting/ledger-setting.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_ledger_setting } from "./ledger-setting.po";

describe("03. Ledger Setting Module Test Cases", function () {
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

    it("02.01. Verify the ledger setting list page loads correctly.", function () {
        grid_ledger_setting.gridLedgerSubGroupListPage();
    });

    it("02.02. Verify successfully performs the action when the action button is clicked.", function () {
        grid_ledger_setting.actionButtonCheck();
    });

    it("02.03. Verify the ledger setting edit reset button functions correctly.", function () {
        grid_ledger_setting.editResetButton();
    });

    it("02.04. Verify that clicking the go back button on the ledger setting edit page redirects the user to the ledger setting list page.", function () {
        grid_ledger_setting.editGoBackButton();
    });

    it("02.05. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
        grid_ledger_setting.createValidationMessageCheck();
    });

    it("02.06. Verify the user can filter inactive ledger settings using the status dropdown on the ledger setting list page.", function () {
        grid_ledger_setting.statusInactiveDropdownCheck();
    });

    it("02.07. Verify the active result is filtered correctly by the status dropdown.", function () {
        grid_ledger_setting.statusActiveDropdownCheck();
    });

    it("02.08. Verify the search returns correct results when searching by ledger setting name.", function () {
        grid_ledger_setting.searchName();
    });

    it("02.09. Verify the grid list resets successfully when the reset button is clicked on the ledger setting page.", function () {
        grid_ledger_setting.gridResetButtonCheck();
    });

    it("02.10. Verify that the grid list is refreshed successfully when the refresh button is clicked on the ledger setting page.", function () {
        grid_ledger_setting.gridRefreshButtonCheck();
    });

    it("02.11. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_ledger_setting.gridLanguageSwitchCheck();
    });

});
