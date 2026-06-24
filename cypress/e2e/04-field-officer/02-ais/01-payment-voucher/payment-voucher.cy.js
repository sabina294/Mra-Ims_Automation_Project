// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/02-ais/01-payment-voucher/payment-voucher.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_payment_voucher } from "./payment-voucher.po";

describe("01 Payment Voucher Module Test Cases", function () {
    const baseURL = Cypress.env("BASE_URL");
    const test_data = Cypress.env("TEST_DATA");
    before(() => {
        cy.fixture(test_data).then((d) => {
            cy.login(
                baseURL,
                d.credential.fieldOfficerUserId,
                d.credential.fieldOfficerPassword
            );
            cy.changeLanguage("english");
            cy.switchModule("AIS");

        });
    });

    after(() => {
        cy.logout();
    });

    it("01.01. Verify that the Payment Voucher list page loads successfully.", function () {
        create_payment_voucher.gridPaymentVoucherListPage();
    });

    it("01.02. Verify that a payment voucher is created successfully when all required fields are filled with valid data.", function () {
        create_payment_voucher.createPaymentVoucher();
    });

    it("01.03. Verify that a payment voucher cannot be created without entering the Voucher Name (English).", function () {
        create_payment_voucher.createWithoutVoucherNameEn();
    });

    it("01.04. Verify that a payment voucher cannot be created without entering the Voucher Name (Bangla).", function () {
        create_payment_voucher.createWithoutVoucherNameBn();
    });

    it("01.05. Verify that a payment voucher cannot be created without selecting a Voucher Date.", function () {
        create_payment_voucher.createWithoutVoucherDate();
    });

    it("01.06. Verify that a payment voucher cannot be created without selecting 'Prepared By'.", function () {
        create_payment_voucher.createWithoutVoucherPreparedBy();
    });

    it("01.01. Verify that a payment voucher cannot be created without entering Remarks.", function () {
        create_payment_voucher.createWithoutVoucherRemarks();
    });

    it("01.08. Verify that a payment voucher cannot be created without selecting a Payment Mode.", function () {
        create_payment_voucher.createWithoutVoucherPaymentMode();
    });

    it("01.09. Verify that a payment voucher cannot be created without entering an Amount.", function () {
        create_payment_voucher.createWithoutVoucherAmount();
    });

    it("01.10. Verify that a payment voucher cannot be created without entering Payment Method Remarks.", function () {
        create_payment_voucher.createWithoutVoucherPaymentMethodRemarks();
    });

    it("01.11. Verify that a payment voucher cannot be created without selecting a Detail Date in the details list.", function () {
        create_payment_voucher.createWithoutVoucherDetailDate();
    });

    it("01.12. Verify that a payment voucher cannot be created without selecting a Ledger in the details list.", function () {
        create_payment_voucher.createWithoutVoucherLedger();
    });

    it("01.13. Verify that a payment voucher cannot be created without entering Remarks in the details list.", function () {
        create_payment_voucher.createWithoutVoucherRemarks();
    });

    it("01.14. Verify that a payment voucher cannot be created without entering an Amount in the details list.", function () {
        create_payment_voucher.createWithoutVoucherAmount();
    });

    // it("01.15. Verify that the can successfully approve a payment voucher after creation.", function () {
    //     cy.fixture(test_data).then((d) => {
    //         cy.loginAsBranchManager(baseURL, d);
    //         create_payment_voucher.approvePaymentVoucher();
    //         cy.logout();
    //         cy.loginAsFieldOfficer(baseURL, d); 
    //     });

    // });

    // it("01.16. Verify that the Action button performs the expected operation when clicked.", function () {
    //     create_payment_voucher.actionButtonCheck();
    // });

    // it("01.17. Verify that the View button displays the payment voucher details correctly.", function () {
    //     create_payment_voucher.detailsViewCheck();
    // });

    // it("01.18. Verify that the user can navigate back from the payment voucher details page.", function () {
    //     create_payment_voucher.viewGoBackPaymentVoucher();
    // });

    it("01.19. Verify that inactive payment vouchers can be filtered using the Status dropdown.", function () {
        create_payment_voucher.statusInactiveDropdownCheck();
    });

    it("01.20. Verify that active payment vouchers are filtered correctly using the Status dropdown.", function () {
        create_payment_voucher.statusActiveDropdownCheck();
    });

    it("01.21. Verify that search returns correct results when searching by payment voucher name.", function () {
        create_payment_voucher.searchName();
    });

    it("01.22. Verify that the grid list resets successfully when the Reset button is clicked.", function () {
        create_payment_voucher.gridResetButtonCheck();
    });

    it("01.23. Verify that the grid list refreshes successfully when the Refresh button is clicked.", function () {
        create_payment_voucher.gridRefreshButtonCheck();
    });

    it("01.24. Verify that clicking the Search button redirects to the Payment Voucher list page.", function () {
        create_payment_voucher.gridSearchButtonCheck();
    });

    it("01.25. Verify that the grid list is displayed when the Draft button is enabled.", function () {
        create_payment_voucher.gridDraftButton();
    });

    it("01.26. Verify that the grid list is displayed when the Draft button is disabled.", function () {
        create_payment_voucher.gridDraftButtonOff();
    });

    it("01.27. Verify that the Reset button clears all input fields on the create page.", function () {
        create_payment_voucher.createResetButtonCheck();
    });

    it("01.28. Verify that validation messages appear when submitting the form with empty required fields.", function () {
        create_payment_voucher.createValidationMessageCheck();
    });

    it("01.29. Verify that validation messages appear when clicking the Draft button with empty required fields.", function () {
        create_payment_voucher.createDraftButtonCheck();
    });

    it("01.30. Verify that validation messages appear when clicking the Approve button with empty required fields.", function () {
        create_payment_voucher.createApproveButtonCheck();
    });

    it("01.31. Verify that clicking the Add icon redirects to the Payment Voucher list page.", function () {
        create_payment_voucher.createPaymentAddIconButtonCheck();
    });

    it("01.32. Verify that clicking the Remove icon redirects to the Payment Voucher list page.", function () {
        create_payment_voucher.createPaymentRemoveIconButtonCheck();
    });

    it("01.33. Verify that clicking the Go Back button redirects to the Payment Voucher list page.", function () {
        create_payment_voucher.createGoBackButtonCheck();
    });

    it("01.34. Verify that clicking 'Add New Journal Details' works as expected on the create page.", function () {
        create_payment_voucher.createNewJournalDetailsButtonCheck();
    });

    it("01.35. Verify that clicking the Delete button redirects to the Payment Voucher list page.", function () {
        create_payment_voucher.createDeleteButtonCheck();
    });

    it("01.36. Verify that the grid content updates correctly when switching language from English to Bangla.", function () {
        create_payment_voucher.gridLanguageSwitchCheck();
    });

});
