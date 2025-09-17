// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/02-ais/08-received-voucher/received-voucher.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_received_voucher } from "./received-voucher.po";

describe("08 Received Voucher Module Test Cases", function () {
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

    it("08.01. Verify the received voucher list page loads correctly.", function () {
        create_received_voucher.gridreceivedVoucherListPage();
    });

    it("08.02. Verify a received voucher record is created successfully when all required fields are filled with valid data.", function () {
        create_received_voucher.createreceivedVoucher();
    });

    // it("08.03. Verify successfully performs the action when the action button is clicked.", function () {
    //     create_received_voucher.actionButtonCheck();
    // });

    it("08.04. Verify the user can filter inactive received vouchers using the status dropdown on the received voucher list page.", function () {
        create_received_voucher.statusInactiveDropdownCheck();
    });

    it("08.05. Verify the active result is filtered correctly by the status dropdown.", function () {
        create_received_voucher.statusActiveDropdownCheck();
    });

    it("08.06. Verify the search returns correct results when searching by received voucher name.", function () {
        create_received_voucher.searchName();
    });

    it("08.07. Verify the grid list resets successfully when the reset button is clicked on the received voucher page.", function () {
        create_received_voucher.gridResetButtonCheck();
    });

    it("08.08. Verify that the grid list is refreshed successfully when the refresh button is clicked on the received voucher page.", function () {
        create_received_voucher.gridRefreshButtonCheck();
    });

    it("08.09. Verify the received voucher creation reset button clears all entered input values.", function () {
        create_received_voucher.createResetButtonCheck();
    });

    it("08.10. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
        create_received_voucher.createValidationMessageCheck();
    });

    it("08.11. Verify that clicking the go back button on the received voucher create page redirects the user to the received voucher list page.", function () {
        create_received_voucher.createGoBackButtonCheck();
    });

    it("08.12. Verify that clicking the Add New Journal Details button on the received voucher  Create page redirects the user to the received voucher  List page.", function () {
        create_received_voucher.createNewJournalDetailsButtonCheck();
    });

    it("08.13. Verify that clicking the delete button on the received voucher create page redirects the user to the received voucher list page.", function () {
        create_received_voucher.createDeleteButtonCheck();
    });

    it("08.14. Verify that the grid list content changes correctly from english to bangla.", function () {
        create_received_voucher.gridLanguageSwitchCheck();
    });


});