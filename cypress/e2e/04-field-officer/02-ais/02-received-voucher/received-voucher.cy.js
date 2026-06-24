// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/02-ais/02-received-voucher/received-voucher.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_received_voucher } from "./received-voucher.po";

describe("08 Received Voucher Module Test Cases", function () {
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


    it("02.01. Verify that the Received Voucher list page is displayed successfully.", function () {
        create_received_voucher.gridReceivedVoucherListPage();
    });

    it("02.02. Verify that a Received Voucher is created successfully with valid required information.", function () {
        create_received_voucher.createReceivedVoucher();
    });

    it("02.03. Verify that a Received Voucher cannot be created without entering the Voucher Name (English).", function () {
        create_received_voucher.createWithoutVoucherNameEn();
    });

    it("02.04. Verify that a Received Voucher cannot be created without entering the Voucher Name (Bangla).", function () {
        create_received_voucher.createWithoutVoucherNameBn();
    });

    it("02.05. Verify that a Received Voucher cannot be created without selecting the Voucher Date.", function () {
        create_received_voucher.createWithoutVoucherDate();
    });

    it("02.06. Verify that a Received Voucher cannot be created without selecting the Prepared By field.", function () {
        create_received_voucher.createWithoutVoucherPreparedBy();
    });

    it("02.07. Verify that a Received Voucher cannot be created without entering Remarks.", function () {
        create_received_voucher.createWithoutVoucherRemarks();
    });

    it("02.08. Verify that a Received Voucher cannot be created without selecting the Receive Mode.", function () {
        create_received_voucher.createWithoutVoucherReceiveMode();
    });

    it("02.09. Verify that a Received Voucher cannot be created without entering the Amount.", function () {
        create_received_voucher.createWithoutVoucherAmount();
    });

    it("02.10. Verify that a Received Voucher cannot be created without entering Receive Method Remarks.", function () {
        create_received_voucher.createWithoutVoucherReceiveMethodRemarks();
    });

    it("02.11. Verify that a Received Voucher cannot be created without selecting the Detail Date from the journal details section.", function () {
        create_received_voucher.createWithoutVoucherDetailDate();
    });

    it("02.12. Verify that a Received Voucher cannot be created without selecting a Ledger from the journal details section.", function () {
        create_received_voucher.createWithoutVoucherLedger();
    });

    it("02.13. Verify that a Received Voucher cannot be created without entering Remarks in the journal details section.", function () {
        create_received_voucher.createWithoutVoucherDetailsRemarks();
    });

    it("02.14. Verify that a Received Voucher cannot be created without entering Amount in the journal details section.", function () {
        create_received_voucher.createWithoutVoucherDetailsAmount();
    });

    // it("02.15. Verify that an can approve a Received Voucher successfully after creation.", function () {
    //     cy.fixture(test_data).then((d) => {
    //         cy.loginAsBranchManager(baseURL, d);
    //         create_received_voucher.approveReceivedVoucher();
    //         cy.logout();
    //         cy.loginAsFieldOfficer(baseURL, d);
    //     });
    // });

    // it("02.16. Verify that the action button functionality works successfully.", function () {
    //     create_received_voucher.actionButtonCheck();
    // });

    // it("02.17. Verify that the view details functionality works successfully.", function () {
    //     create_received_voucher.detailsViewCheck();
    // });

    // it("02.18. Verify that the user can navigate back successfully from the Received Voucher details page.", function () {
    //     create_received_voucher.viewGoBackReceivedVoucher();
    // });

    it("02.19. Verify that inactive Received Vouchers can be filtered successfully using the Status dropdown.", function () {
        create_received_voucher.statusInactiveDropdownCheck();
    });

    it("02.20. Verify that active Received Vouchers can be filtered successfully using the Status dropdown.", function () {
        create_received_voucher.statusActiveDropdownCheck();
    });

    it("02.21. Verify that the search functionality returns correct results when searching by Received Voucher Name.", function () {
        create_received_voucher.searchName();
    });

    it("02.22. Verify that the grid list is reset successfully when clicking the Reset button.", function () {
        create_received_voucher.gridResetButtonCheck();
    });

    it("02.23. Verify that the grid list is refreshed successfully when clicking the Refresh button.", function () {
        create_received_voucher.gridRefreshButtonCheck();
    });

    it("02.24. Verify that clicking the Search button displays the Received Voucher list page successfully.", function () {
        create_received_voucher.gridSearchButtonCheck();
    });

    it("02.25. Verify that the Draft button functionality works successfully on the Received Voucher page.", function () {
        create_received_voucher.gridDraftButton();
    });

    it("02.26. Verify that disabling the Draft mode works successfully on the Received Voucher page.", function () {
        create_received_voucher.gridDraftButtonOff();
    });

    it("02.27. Verify that the Reset button clears all entered values on the Received Voucher creation page.", function () {
        create_received_voucher.createResetButtonCheck();
    });

    it("02.28. Verify that required field validation messages are displayed when submitting the form with empty inputs.", function () {
        create_received_voucher.createValidationMessageCheck();
    });

    it("02.29. Verify that required field validation messages are displayed when clicking the Draft button with empty inputs.", function () {
        create_received_voucher.createDraftButtonCheck();
    });

    it("02.30. Verify that required field validation messages are displayed when clicking the Approve button with empty inputs.", function () {
        create_received_voucher.createApproveButtonCheck();
    });

    it("02.31. Verify that clicking the Add icon button redirects the user to the Received Voucher list page.", function () {
        create_received_voucher.createPaymentAddIconButtonCheck();
    });

    it("02.32. Verify that clicking the Remove icon button removes the journal details entry successfully.", function () {
        create_received_voucher.createPaymentRemoveIconButtonCheck();
    });

    it("02.33. Verify that clicking the Go Back button redirects the user to the Received Voucher list page.", function () {
        create_received_voucher.createGoBackButtonCheck();
    });

    it("02.34. Verify that clicking the Add New Journal Details button works successfully on the Received Voucher creation page.", function () {
        create_received_voucher.createNewJournalDetailsButtonCheck();
    });

    it("02.35. Verify that clicking the Delete button removes the journal details entry successfully.", function () {
        create_received_voucher.createDeleteButtonCheck();
    });

    it("02.36. Verify that the grid list content switches successfully from English to Bangla language.", function () {
        create_received_voucher.gridLanguageSwitchCheck();
    });
});
