// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/02-ais/09-auto-voucher/auto-voucher.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_auto_voucher } from "./auto-voucher.po";

describe("09 Auto Voucher Module Test Cases", function () {
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

    it("09.01. Verify the auto voucher list page loads correctly.", function () {
        grid_auto_voucher.gridAutoVoucherListPage();
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

    it("09.07. Verify that when the user clicks the Search button on the auto voucher grid page, the system redirects to the auto voucher List page.", function () {
        grid_auto_voucher.gridSearchButtonCheck();
    });

    it("09.08. Verify that the breadcrumb displays Home, Voucher, Auto Voucher and List.", function () {
        grid_auto_voucher.listBreadcrumbCheck();
    });

    it("09.09. Verify that the grid displays all required columns.", function () {
        grid_auto_voucher.requiredGridColumnsCheck();
    });

    it("09.10. Verify that voucher records contain an ID, name, preparer, office, creator and status, or show No Data.", function () {
        grid_auto_voucher.gridRecordDataCheck();
    });

    it("09.11. Verify that voucher dates contain valid calendar dates, or show No Data.", function () {
        grid_auto_voucher.voucherDateCheck();
    });

    it("09.12. Verify that searching by an existing voucher name returns matching records.", function () {
        grid_auto_voucher.voucherNameSearchCheck();
    });

    it("09.13. Verify that searching by a partial voucher name returns matching records.", function () {
        grid_auto_voucher.partialVoucherNameSearchCheck();
    });

    it("09.14. Verify that a nonexistent search displays No Data.", function () {
        grid_auto_voucher.noResultSearchCheck();
    });

    it("09.15. Verify that the Active filter returns only Active auto vouchers, or show No Data.", function () {
        grid_auto_voucher.activeStatusResultCheck();
    });

    it("09.16. Verify that Voucher ID displays the ascending sort indicator.", function () {
        grid_auto_voucher.idAscendingSortCheck();
    });

    it("09.17. Verify that Voucher ID displays the descending sort indicator.", function () {
        grid_auto_voucher.idDescendingSortCheck();
    });

    it("09.18. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_auto_voucher.gridLanguageSwitchCheck();
    });

});
