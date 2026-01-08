// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/02-ais/10-balance-sheet/balance-sheet.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_balance_sheet } from "./balance-sheet.po";

describe("10. Balance Sheet Module Test Cases", function () {
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

    it("10.01. Verify the balance sheet list page loads correctly.", function () {
        create_balance_sheet.gridBalanceSheetListPage();
    });

    it("10.02. Verify that the grid list is refreshed successfully when the refresh button is clicked on the balance sheet page.", function () {
        create_balance_sheet.gridRefreshButtonCheck();
    });

    it("10.03. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_balance_sheet.gridLanguageSwitchCheck();
    });

    it("10.04. Verify that clicking the go back button on the Balance Sheet grid page redirects the user to the Balance Sheet list page.", function () {
        create_balance_sheet.gridGoBackButtonCheck();
    });


});
