// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/02-ais/08-received-voucher/received-voucher.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_received_voucher } from "./received-voucher.po";

describe("08 Received Voucher Module Test Cases", function () {
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


    it("08.01. Verify that the Received Voucher list page loads successfully.", function () {
        create_received_voucher.gridReceivedVoucherListPage();
    });

    it("08.02. Verify that a received voucher is created successfully with valid required data.", function () {
        create_received_voucher.createReceivedVoucher();
    });

    it("08.03. Verify that a received voucher cannot be created without entering the Voucher Name (English).", function () {
        create_received_voucher.createWithoutVoucherNameEn();
    });

    it("08.04. Verify that a received voucher cannot be created without entering the Voucher Name (Bangla).", function () {
        create_received_voucher.createWithoutVoucherNameBn();
    });

    it("08.05. Verify that a received voucher cannot be created without selecting a Voucher Date.", function () {
        create_received_voucher.createWithoutVoucherDate();
    });

    it("08.06. Verify that a received voucher cannot be created without selecting the 'Prepared By' field.", function () {
        create_received_voucher.createWithoutVoucherPreparedBy();
    });

    it("08.07. Verify that a received voucher cannot be created without entering Remarks.", function () {
        create_received_voucher.createWithoutVoucherRemarks();
    });

    it("08.08. Verify that a received voucher cannot be created without selecting a Receive Mode.", function () {
        create_received_voucher.createWithoutVoucherReceiveMode();
    });

    it("08.09. Verify that a received voucher cannot be created without entering an Amount.", function () {
        create_received_voucher.createWithoutVoucherAmount();
    });

    it("08.10. Verify that a received voucher cannot be created without entering Receive Method Remarks.", function () {
        create_received_voucher.createWithoutVoucherReceiveMethodRemarks();
    });

    it("08.11. Verify that a received voucher cannot be created without selecting a Detail Date from the details list.", function () {
        create_received_voucher.createWithoutVoucherDetailDate();
    });

    it("08.12. Verify that a received voucher cannot be created without selecting a Ledger from the details list.", function () {
        create_received_voucher.createWithoutVoucherLedger();
    });

    it("08.13. Verify that a received voucher cannot be created without entering Remarks in the details list.", function () {
        create_received_voucher.createWithoutVoucherDetailsRemarks();
    });

    it("08.14. Verify that a received voucher cannot be created without entering an Amount in the details list.", function () {
        create_received_voucher.createWithoutVoucherDetailsAmount();
    });

    it("08.15. Verify that the MFI Admin can successfully approve a received voucher after creation.", function () {
        create_received_voucher.approveReceivedVoucher();
    });

    it("08.16. Verify that the action button performs successfully when clicked.", function () {
        create_received_voucher.actionButtonCheck();
    });

    it("08.17. Verify that the view details functionality works successfully when the view button is clicked.", function () {
        create_received_voucher.detailsViewCheck();
    });

    it("08.18. Verify that the user can navigate back from the received voucher details page successfully.", function () {
        create_received_voucher.viewGoBackReceivedVoucher();
    });

    it("08.19. Verify that inactive received vouchers can be filtered using the status dropdown.", function () {
        create_received_voucher.statusInactiveDropdownCheck();
    });

    it("08.20. Verify that active received vouchers are filtered correctly using the status dropdown.", function () {
        create_received_voucher.statusActiveDropdownCheck();
    });

    it("08.21. Verify that the search functionality returns correct results when searching by received voucher name.", function () {
        create_received_voucher.searchName();
    });

    it("08.22. Verify that the grid list resets successfully when the reset button is clicked.", function () {
        create_received_voucher.gridResetButtonCheck();
    });

    it("08.23. Verify that the grid list refreshes successfully when the refresh button is clicked.", function () {
        create_received_voucher.gridRefreshButtonCheck();
    });

    it("08.24. Verify that clicking the search button redirects the user to the Received Voucher list page.", function () {
        create_received_voucher.gridSearchButtonCheck();
    });

    it("08.25. Verify the functionality of the Draft button on the received voucher page.", function () {
        create_received_voucher.gridDraftButton();
    });

    it("08.26. Verify the functionality of turning off the Draft button on the received voucher page.", function () {
        create_received_voucher.gridDraftButtonOff();
    });

    it("08.27. Verify that the reset button clears all entered input values on the received voucher creation page.", function () {
        create_received_voucher.createResetButtonCheck();
    });

    it("08.28. Verify that validation messages appear for required fields when submitting empty inputs.", function () {
        create_received_voucher.createValidationMessageCheck();
    });

    it("08.29. Verify that validation messages appear for required fields when clicking the draft button with empty inputs.", function () {
        create_received_voucher.createDraftButtonCheck();
    });

    it("08.30. Verify that validation messages appear for required fields when clicking the approve button with empty inputs.", function () {
        create_received_voucher.createApproveButtonCheck();
    });

    it("08.31. Verify that clicking the add icon button redirects the user to the Received Voucher list page.", function () {
        create_received_voucher.createPaymentAddIconButtonCheck();
    });

    it("08.32. Verify that clicking the remove icon button redirects the user to the Received Voucher list page.", function () {
        create_received_voucher.createPaymentRemoveIconButtonCheck();
    });

    it("08.33. Verify that clicking the go back button redirects the user to the Received Voucher list page.", function () {
        create_received_voucher.createGoBackButtonCheck();
    });

    it("08.34. Verify that clicking the 'Add New Journal Details' button works successfully on the received voucher creation page.", function () {
        create_received_voucher.createNewJournalDetailsButtonCheck();
    });

    it("08.35. Verify that clicking the delete button works successfully on the received voucher creation page.", function () {
        create_received_voucher.createDeleteButtonCheck();
    });

    it("08.36. Verify that the grid list content changes correctly from English to Bangla.", function () {
        create_received_voucher.gridLanguageSwitchCheck();
    });
});
