// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/02-ais/10-balance-sheet/balance-sheet.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_balance_sheet } from "./balance-sheet.po";

describe("10. Balance Sheet Module Test Cases", function () {
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

    it("10.01. Verify the balance sheet list page loads correctly.", function () {
        create_balance_sheet.gridBalanceSheetListPage();
    });

    // it("10.02. Verify check that the balance sheet  office selection works correctly from the dropdown on the balance sheet list page.", function () {
    //     create_balance_sheet.selectofficeDropdown();
    // });

    it("10.03. Verify the grid list resets successfully when the refresh button is clicked on the balance sheet page", function () {
        create_balance_sheet.gridRefreshButtonCheck();
    });

    it("10.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_balance_sheet.gridLanguageSwitchCheck();
    });

    it("10.05. Verify that clicking the go back button on the Balance Sheet grid page redirects the user to the Balance Sheet list page.", function () {
        create_balance_sheet.gridGoBackButtonCheck();
    });

});
