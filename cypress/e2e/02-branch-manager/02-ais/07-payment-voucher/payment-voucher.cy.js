// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/02-ais/07-payment-voucher/payment-voucher.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_payment_voucher } from "./payment-voucher.po";

describe("07 Payment Voucher Module Test Cases", function () {
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

    it("07.01. Verify the payment voucher list page loads correctly.", function () {
        create_payment_voucher.gridPaymentVoucherListPage();
    });

    // it("07.02. Verify a payment voucher record is created successfully when all required fields are filled with valid data.", function () {
    //     create_payment_voucher.createPaymentVoucher();
    // });

    // it("07.03. Verify successfully performs the action when the action button is clicked.", function () {
    //     create_payment_voucher.actionButtonCheck();
    // });

    it("07.04. Verify the user can filter inactive payment vouchers using the status dropdown on the payment voucher list page.", function () {
        create_payment_voucher.statusInactiveDropdownCheck();
    });

    it("07.05. Verify the active result is filtered correctly by the status dropdown.", function () {
        create_payment_voucher.statusActiveDropdownCheck();
    });

    it("07.06. Verify the search returns correct results when searching by payment voucher name.", function () {
        create_payment_voucher.searchName();
    });

    it("07.07. Verify the grid list resets successfully when the reset button is clicked on the payment voucher page.", function () {
        create_payment_voucher.gridResetButtonCheck();
    });

    it("07.08. Verify that the grid list is refreshed successfully when the refresh button is clicked on the payment voucher page.", function () {
        create_payment_voucher.gridRefreshButtonCheck();
    });

    it("07.09. Verify the payment voucher creation reset button clears all entered input values.", function () {
        create_payment_voucher.createResetButtonCheck();
    });

    it("07.10. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
        create_payment_voucher.createValidationMessageCheck();
    });

    it("07.11. Verify that clicking the go back button on the payment voucher create page redirects the user to the payment voucher list page.", function () {
        create_payment_voucher.createGoBackButtonCheck();
    });

    it("07.12. Verify that clicking the delete button on the manual journal create page redirects the user to the manual journal list page.", function () {
        create_payment_voucher.createDeleteButtonCheck();
    });

    it("07.13. Verify that clicking the Add New Journal Details button on the Manual Journal Create page redirects the user to the Manual Journal List page.", function () {
        create_payment_voucher.createNewJournalDetailsButtonCheck();
    });

    it("07.12. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_payment_voucher.gridLanguageSwitchCheck();
    });


});
