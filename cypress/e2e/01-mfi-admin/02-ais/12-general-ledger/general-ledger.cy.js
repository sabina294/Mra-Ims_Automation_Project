// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/02-ais/12-general-ledger/general-ledger.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_general_ledger } from "./general-ledger.po";

describe("12. General Ledger Module Test Cases", function () {
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

    it("12.01. Verify the general ledger list page loads correctly.", function () {
        create_general_ledger.gridGeneralLedgerListPage();
    });

    // it("12.02. Verify check that the general ledger office selection works correctly from the dropdown on the general ledger list page.", function () {
    //     create_general_ledger.selectofficeDropdown();
    // });

    it("12.03. Verify the grid list resets successfully when the refresh button is clicked on the general ledger page", function () {
        create_general_ledger.gridRefreshButtonCheck();
    });

    it("12.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_general_ledger.gridLanguageSwitchCheck();
    });

    it("12.05. Verify that clicking the go back button on the General Ledger grid page redirects the user to the General Ledger list page.", function () {
        create_general_ledger.gridGoBackButtonCheck();
    });
});
