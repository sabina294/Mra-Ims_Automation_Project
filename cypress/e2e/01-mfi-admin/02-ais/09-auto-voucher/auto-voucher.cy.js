// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/02-ais/09-auto-voucher/auto-voucher.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_auto_voucher } from "./auto-voucher.po";

describe("09 Auto Voucher Module Test Cases", function () {
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

    it("09.01. Verify the auto voucher list page loads correctly.", function () {
        grid_auto_voucher.gridreceivedVoucherListPage();
    });

    it("09.02. Verify the user can filter inactive auto vouchers using the status dropdown on the auto voucher list page.", function () {
        grid_auto_voucher.statusInactiveDropdownCheck();
    });

    it("09.03. Verify the active result is filtered correctly by the status dropdown.", function () {
        grid_auto_voucher.statusActiveDropdownCheck();
    });

    it("09.04. Verify the search returns correct results when searching by auto voucher name.", function () {
        grid_auto_voucher.searchName();
    });

    it("09.05. Verify the grid list resets successfully when the reset button is clicked on the auto voucher page.", function () {
        grid_auto_voucher.gridResetButtonCheck();
    });

    it("09.06. Verify that the grid list is refreshed successfully when the refresh button is clicked on the auto voucher page.", function () {
        grid_auto_voucher.gridRefreshButtonCheck();
    });

    it("09.07. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_auto_voucher.gridLanguageSwitchCheck();
    });

});
