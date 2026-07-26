// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/02-ais/07-payment-voucher/payment-voucher.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_payment_voucher } from "./payment-voucher.po";

describe("07 Payment Voucher Module Test Cases", function () {
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

    it("07.01. Verify that the Payment Voucher list page loads successfully.", function () {
        create_payment_voucher.gridPaymentVoucherListPage();
    });

    it("07.02. Verify that a Payment Voucher is created successfully when all required fields are populated with valid data.", function () {
        create_payment_voucher.createPaymentVoucher();
    });

    it("07.03. Verify that a Payment Voucher cannot be created without entering the Voucher Name (English).", function () {
        create_payment_voucher.createWithoutVoucherNameEn();
    });

    it("07.04. Verify that a Payment Voucher cannot be created without entering the Voucher Name (Bangla).", function () {
        create_payment_voucher.createWithoutVoucherNameBn();
    });

    it("07.05. Verify that a Payment Voucher cannot be created without selecting a Voucher Date.", function () {
        create_payment_voucher.createWithoutVoucherDate();
    });

    it("07.06. Verify that a Payment Voucher cannot be created without selecting 'Prepared By'.", function () {
        create_payment_voucher.createWithoutVoucherPreparedBy();
    });

    it("07.07. Verify that a Payment Voucher cannot be created without entering Remarks.", function () {
        create_payment_voucher.createWithoutVoucherRemarks();
    });

    it("07.08. Verify that a Payment Voucher cannot be created without selecting a Payment Mode.", function () {
        create_payment_voucher.createWithoutVoucherPaymentMode();
    });

    it("07.09. Verify that a Payment Voucher cannot be created without entering an Amount.", function () {
        create_payment_voucher.createWithoutVoucherAmount();
    });

    it("07.10. Verify that a Payment Voucher cannot be created without entering Payment Method Remarks.", function () {
        create_payment_voucher.createWithoutVoucherPaymentMethodRemarks();
    });

    it("07.11. Verify that a Payment Voucher cannot be created without selecting a Detail Date in the Voucher Details section.", function () {
        create_payment_voucher.createWithoutVoucherDetailDate();
    });

    it("07.12. Verify that a Payment Voucher cannot be created without selecting a Ledger in the Voucher Details section.", function () {
        create_payment_voucher.createWithoutVoucherLedger();
    });

    it("07.13. Verify that a Payment Voucher cannot be created without entering Remarks in the Voucher Details section.", function () {
        create_payment_voucher.createWithoutVoucherRemarks();
    });

    it("07.14. Verify that a Payment Voucher cannot be created without entering an Amount in the Voucher Details section.", function () {
        create_payment_voucher.createWithoutVoucherAmount();
    });

    it("07.15. Verify that the created Payment Voucher record appears in My Tasks.", function () {
        create_payment_voucher.myTaskMenuPaymentVoucher();
    });

    it("07.16. Verify that the Reset button clears all applied filters on the My Tasks page.", function () {
        create_payment_voucher.myTaskResetButtonCheck();
    });

    it("07.17. Verify that the Refresh button reloads the My Tasks list successfully.", function () {
        create_payment_voucher.myTaskRefreshButtonCheck();
    });

    it("07.18. Verify that the Branch Manager can successfully approve a Payment Voucher after creation.", function () {
        create_payment_voucher.approvePaymentVoucher();
    });

    it("07.19. Verify that the Action button performs the expected operation when clicked.", function () {
        create_payment_voucher.actionButtonCheck();
    });

    it("07.20. Verify that the View button displays the Payment Voucher details correctly.", function () {
        create_payment_voucher.detailsViewCheck();
    });

    it("07.21. Verify that the user can navigate back from the Payment Voucher details page successfully.", function () {
        create_payment_voucher.viewGoBackPaymentVoucher();
    });

    it("07.22. Verify that inactive Payment Vouchers can be filtered using the Status dropdown.", function () {
        create_payment_voucher.statusInactiveDropdownCheck();
    });

    it("07.23. Verify that active Payment Vouchers can be filtered using the Status dropdown.", function () {
        create_payment_voucher.statusActiveDropdownCheck();
    });

    it("07.24. Verify that the search functionality returns correct results when searching by Payment Voucher name.", function () {
        create_payment_voucher.searchName();
    });

    it("07.25. Verify that the grid is reset successfully when the Reset button is clicked.", function () {
        create_payment_voucher.gridResetButtonCheck();
    });

    it("07.26. Verify that the grid is refreshed successfully when the Refresh button is clicked.", function () {
        create_payment_voucher.gridRefreshButtonCheck();
    });

    it("07.27. Verify that clicking the Search button displays the Payment Voucher list based on the applied search criteria.", function () {
        create_payment_voucher.gridSearchButtonCheck();
    });

    it("07.28. Verify that the grid list is displayed when Draft mode is enabled.", function () {
        create_payment_voucher.gridDraftButton();
    });

    it("07.29. Verify that the grid list is displayed when Draft mode is disabled.", function () {
        create_payment_voucher.gridDraftButtonOff();
    });

    it("07.30. Verify that all input fields are cleared when the Reset button is clicked on the create page.", function () {
        create_payment_voucher.createResetButtonCheck();
    });

    it("07.31. Verify that validation messages are displayed when submitting the form without providing required fields.", function () {
        create_payment_voucher.createValidationMessageCheck();
    });

    it("07.32. Verify that validation messages are displayed when clicking the Draft button without providing required fields.", function () {
        create_payment_voucher.createDraftButtonCheck();
    });

    it("07.33. Verify that validation messages are displayed when clicking the Approve button without providing required fields.", function () {
        create_payment_voucher.createApproveButtonCheck();
    });

    it("07.34. Verify that clicking the Add icon adds a new Voucher Details row successfully.", function () {
        create_payment_voucher.createPaymentAddIconButtonCheck();
    });

    it("07.35. Verify that clicking the Remove icon removes a Voucher Details row successfully.", function () {
        create_payment_voucher.createPaymentRemoveIconButtonCheck();
    });

    it("07.36. Verify that clicking the Go Back button redirects the user to the Payment Voucher list page.", function () {
        create_payment_voucher.createGoBackButtonCheck();
    });

    it("07.37. Verify that clicking 'Add New Voucher Details' adds a new Voucher Details entry successfully.", function () {
        create_payment_voucher.createNewJournalDetailsButtonCheck();
    });

    it("07.38. Verify that clicking the Delete button removes the selected Voucher Details entry successfully.", function () {
        create_payment_voucher.createDeleteButtonCheck();
    });

    it("07.39. Verify that the grid content is updated correctly when switching the language from English to Bangla.", function () {
        create_payment_voucher.gridLanguageSwitchCheck();
    });

});
