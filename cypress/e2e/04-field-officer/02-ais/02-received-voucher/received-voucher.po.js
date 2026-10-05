import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";
import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class ReceivedVoucherCreation {
    test_data = Cypress.env("TEST_DATA");

    // ---------------- Page actions ----------------
    gridReceivedVoucherListPage() {
        cy.fixture(this.test_data).then(() => {
            cy.selectMenu(COMMON.MENUS.VOUCHER, COMMON.MENUS.RECEIVED_VOUCHER);
            cy.log(messages.ui.gridListMessage);
        });
    }

    createReceivedVoucher() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.fieldOfficer.receivedVoucher;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            cy.formController("voucher_name_en").type(rvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(rvData.voucherNameBn);
            cy.formController("received_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("voucher_prepared_by").type(rvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(rvData.remarks);
            cy.formController("received_mode").type(rvData.paymentMode).type("{enter}");
            cy.formController("amount").type(rvData.amount);
            cy.formController("remarks").eq(1).type(rvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(rvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(rvData.remarks1);
            cy.formController("transaction_amount").clear().type(rvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.log(messages.ui.submitSuccess);
        });
    }

    createWithoutVoucherNameEn() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.fieldOfficer.receivedVoucher;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            cy.formController("voucher_name_bn").type(rvData.voucherNameBn);
            cy.formController("received_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("voucher_prepared_by").type(rvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(rvData.remarks);
            cy.formController("received_mode").type(rvData.paymentMode).type("{enter}");
            cy.formController("amount").type(rvData.amount);
            cy.formController("remarks").eq(1).type(rvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(rvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(rvData.remarks1);
            cy.formController("transaction_amount").clear().type(rvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);

        });
    }

    createWithoutVoucherNameBn() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.fieldOfficer.receivedVoucher;
            cy.formController("voucher_name_en").type(rvData.voucherNameEn);
            cy.formController("received_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("voucher_prepared_by").type(rvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(rvData.remarks);
            cy.formController("received_mode").type(rvData.paymentMode).type("{enter}");
            cy.formController("amount").type(rvData.amount);
            cy.formController("remarks").eq(1).type(rvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(rvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(rvData.remarks1);
            cy.formController("transaction_amount").clear().type(rvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createWithoutVoucherDate() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.fieldOfficer.receivedVoucher;
            cy.formController("voucher_name_en").type(rvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(rvData.voucherNameBn);
            cy.formController("voucher_prepared_by").type(rvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(rvData.remarks);
            cy.formController("received_mode").type(rvData.paymentMode).type("{enter}");
            cy.formController("amount").type(rvData.amount);
            cy.formController("remarks").eq(1).type(rvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(rvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(rvData.remarks1);
            cy.formController("transaction_amount").clear().type(rvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);

        });
    }

    createWithoutVoucherPreparedBy() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.fieldOfficer.receivedVoucher;
            cy.formController("voucher_name_en").type(rvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(rvData.voucherNameBn);
            cy.formController("received_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("remarks").eq(0).type(rvData.remarks);
            cy.formController("received_mode").type(rvData.paymentMode).type("{enter}");
            cy.formController("amount").type(rvData.amount);
            cy.formController("remarks").eq(1).type(rvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(rvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(rvData.remarks1);
            cy.formController("transaction_amount").clear().type(rvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);

        });
    }

    createWithoutVoucherRemarks() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.fieldOfficer.receivedVoucher;
            cy.formController("voucher_name_en").type(rvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(rvData.voucherNameBn);
            cy.formController("received_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("voucher_prepared_by").type(rvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("received_mode").type(rvData.paymentMode).type("{enter}");
            cy.formController("amount").type(rvData.amount);
            cy.formController("remarks").eq(1).type(rvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(rvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(rvData.remarks1);
            cy.formController("transaction_amount").clear().type(rvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);

        });
    }

    createWithoutVoucherReceiveMode() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.fieldOfficer.receivedVoucher;
            cy.formController("voucher_name_en").type(rvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(rvData.voucherNameBn);
            cy.formController("received_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("voucher_prepared_by").type(rvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("amount").type(rvData.amount);
            cy.formController("remarks").eq(1).type(rvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(rvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(rvData.remarks1);
            cy.formController("transaction_amount").clear().type(rvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createWithoutVoucherAmount() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.fieldOfficer.receivedVoucher;
            cy.formController("voucher_name_en").type(rvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(rvData.voucherNameBn);
            cy.formController("received_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("voucher_prepared_by").type(rvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("received_mode").type(rvData.paymentMode).type("{enter}");
            cy.formController("remarks").eq(1).type(rvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(rvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(rvData.remarks1);
            cy.formController("transaction_amount").clear().type(rvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);

        });
    }

    createWithoutVoucherReceiveMethodRemarks() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.fieldOfficer.receivedVoucher;
            cy.formController("voucher_name_en").type(rvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(rvData.voucherNameBn);
            cy.formController("received_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("voucher_prepared_by").type(rvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("received_mode").type(rvData.paymentMode).type("{enter}");
            cy.formController("amount").type(rvData.amount);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(rvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(rvData.remarks1);
            cy.formController("transaction_amount").clear().type(rvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);

        });
    }

    createWithoutVoucherDetailDate() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.fieldOfficer.receivedVoucher;
            cy.formController("voucher_name_en").type(rvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(rvData.voucherNameBn);
            cy.formController("received_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("voucher_prepared_by").type(rvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("received_mode").type(rvData.paymentMode).type("{enter}");
            cy.formController("amount").type(rvData.amount);
            cy.formController("remarks").eq(1).type(rvData.remarks);
            cy.formController("ledger_id").type(rvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(rvData.remarks1);
            cy.formController("transaction_amount").clear().type(rvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createWithoutVoucherLedger() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.fieldOfficer.receivedVoucher;
            cy.formController("voucher_name_en").type(rvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(rvData.voucherNameBn);
            cy.formController("received_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("voucher_prepared_by").type(rvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("received_mode").type(rvData.paymentMode).type("{enter}");
            cy.formController("amount").type(rvData.amount);
            cy.formController("remarks").eq(1).type(rvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("remarks").eq(2).type(rvData.remarks1);
            cy.formController("transaction_amount").clear().type(rvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);

        });
    }

    createWithoutVoucherDetailsRemarks() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.fieldOfficer.receivedVoucher;
            cy.formController("voucher_name_en").type(rvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(rvData.voucherNameBn);
            cy.formController("received_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("voucher_prepared_by").type(rvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(rvData.remarks);
            cy.formController("received_mode").type(rvData.paymentMode).type("{enter}");
            cy.formController("amount").type(rvData.amount);
            cy.formController("remarks").eq(1).type(rvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(rvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("transaction_amount").clear().type(rvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);

        });
    }

    createWithoutVoucherDetailsAmount() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.fieldOfficer.receivedVoucher;
            cy.formController("voucher_name_en").type(rvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(rvData.voucherNameBn);
            cy.formController("received_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("voucher_prepared_by").type(rvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(rvData.remarks);
            cy.formController("received_mode").type(rvData.paymentMode).type("{enter}");
            cy.formController("amount").type(rvData.amount);
            cy.formController("remarks").eq(1).type(rvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(rvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(rvData.remarks1);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.imsId(COMMON.BUTTONS.GO_BACK).click();
            cy.log(messages.ui.withoutDataMessage);

        });
    }

    approveReceivedVoucher() {
        cy.fixture(this.test_data).then(() => {
            cy.switchModule("AIS");
            cy.imsId(COMMON.MENUS.MY_TASK).click();
            cy.imsId(COMMON.MENUS.AWAITING_RECEIVED_VOUCHER).click();
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_VIEW).click();
            cy.imsId(COMMON.BUTTONS.LOCK).click();
            cy.imsId(COMMON.BUTTONS.APPROVE).click();
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();

            cy.log(messages.ui.approveSuccess);
        });
    }

    actionButtonCheck() {
        cy.selectMenu(COMMON.MENUS.VOUCHER, COMMON.MENUS.RECEIVED_VOUCHER);
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(messages.ui.actionMessage);
    }

    detailsViewCheck() {
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.log(messages.ui.viewMessage);
    }

    viewGoBackReceivedVoucher() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.viewMessage);
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.fieldOfficer.receivedVoucher;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(rvData.selectStatus).type("{enter}");
            cy.log(messages.ui.dropdownInactiveMessage);
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.fieldOfficer.receivedVoucher;
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(rvData.statusSelect).type("{enter}");
            cy.log(messages.ui.dropdownActiveMessage);
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.fieldOfficer.receivedVoucher;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rvData.voucherNameBn);
            cy.log(messages.ui.searchSuccess);
        });
    }

    gridResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.ui.gridResetSuccess);
    }

    gridRefreshButtonCheck() {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.log(messages.ui.gridRefreshSuccess);
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.fieldOfficer.receivedVoucher;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rvData.voucherNameBn);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();

            cy.log(messages.ui.searchMessage);
        });
    }

    gridDraftButton() {
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.draftOnMessage);
    }

    gridDraftButtonOff() {
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.draftOffMessage);
    }
    createResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.validation.requiredField);
    }

    createValidationMessageCheck() {
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.validation.requiredField);
    }

    createDraftButtonCheck() {
        cy.imsId(COMMON.BUTTONS.DRAFT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.draftOnMessage);
    }

    createApproveButtonCheck() {
        cy.imsId(COMMON.BUTTONS.APPROVE).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.submitSuccess);
    }

    createPaymentAddIconButtonCheck() {
        cy.imsId(COMMON.BUTTONS.ADD_ICON).click();
        cy.log(messages.ui.submitSuccess);
    }

    createPaymentRemoveIconButtonCheck() {
        cy.imsId(COMMON.BUTTONS.REMOVE_ICON).first().click();
        cy.log(messages.ui.submitSuccess);
    }

    createGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.createGoBackMessage);
    }

    createNewJournalDetailsButtonCheck() {
        cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
        cy.imsId(COMMON.BUTTONS.ADD_ICON_FIRST).click();
        cy.log(messages.ui.submitSuccess);
    }

    createDeleteButtonCheck() {
        cy.imsId(COMMON.BUTTONS.REMOVE_ICON_SECOND).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.submitSuccess);
    }

  openListForChecks() {
    cy.visit("/mfi-ais/voucher/received-voucher/list");
    cy.location("pathname").should("eq", "/mfi-ais/voucher/received-voucher/list");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true });
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    configurationGridChecks.breadcrumb("Received Voucher", ["Voucher"]);
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    configurationGridChecks.columns([
      "#", "Voucher ID", "Voucher Name", "Prepared By", "Received Date",
      "Created By", "Received Amount", "Locked By", "Status", "Actions",
    ]);
  }

  gridRecordDataCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "received vouchers").to.be.greaterThan(0);
      $rows.each((_, row) => {
        const cells = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS);
        expect(cells.eq(0).text().trim(), "serial number").to.match(/^\d+$/);
        [1, 2].forEach((index) => {
          expect(cells.eq(index).text().trim(), "voucher identifier/name").not.to.equal("");
        });
        const amount = cells.eq(6).text().trim().replace(/,/g, "");
        expect(amount, "received amount").to.match(/^\d+(\.\d+)?$/);
        expect(Number(amount)).to.be.at.least(0);
        expect(["Active", "Inactive"]).to.include(cells.eq(8).text().trim());
      });
    });
    cy.log(messages.ui.recordIdCheck);
  }

  searchControlsCheck() {
    this.openListForChecks();
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("be.visible");
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
    cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
    cy.log(messages.ui.searchControlsCheck);
  }

  voucherNameSearchCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find(COMMON.TABLE.VISIBLE_CELLS)
      .eq(2).invoke("text").then((text) => {
        const name = text.trim();
        expect(name, "voucher name to search").not.to.equal("");
        configurationGridChecks.exactSearch(name, 2);
      });
  }

  noResultSearchCheck() {
    this.openListForChecks();
    configurationGridChecks.noResult("RECEIVED_VOUCHER");
  }

  resetRestoresGridCheck() {
    this.noResultSearchCheck();
    configurationGridChecks.reset();
  }

  firstPagePaginationCheck() {
    this.openListForChecks();
    configurationGridChecks.pagination();
  }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const create_received_voucher = new ReceivedVoucherCreation();
