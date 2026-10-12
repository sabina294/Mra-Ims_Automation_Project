import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class PaymentVoucherCreation {
    test_data = Cypress.env("TEST_DATA");

    gridPaymentVoucherListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.VOUCHER, COMMON.MENUS.PAYMENT_VOUCHER);
            cy.log(messages.ui.gridListMessage);
        });
    }

    createPaymentVoucher() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.branchManager.paymentVoucher;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

            cy.formController("voucher_name_en").type(pvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(pvData.voucherNameBn);
            cy.formController("payment_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("voucher_prepared_by").type(pvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(pvData.remarks);
            cy.formController("payment_mode").type(pvData.paymentMode).type("{enter}");
            cy.wait(1000);
            cy.formController("amount").type(pvData.amount);
            cy.formController("remarks").eq(1).type(pvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(pvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(pvData.remarks1);
            cy.formController("transaction_amount").clear().type(pvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();

            cy.log(messages.ui.submitSuccess);
        });
    }

    createWithoutVoucherNameEn() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.branchManager.paymentVoucher;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            cy.formController("voucher_name_bn").type(pvData.voucherNameBn);
            cy.formController("payment_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.wait(1000);
            cy.formController("voucher_prepared_by").type(pvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(pvData.remarks);
            cy.formController("payment_mode").type(pvData.paymentMode).type("{enter}");
            cy.wait(1000);
            cy.formController("amount").type(pvData.amount);
            cy.formController("remarks").eq(1).type(pvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(pvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(pvData.remarks1);
            cy.formController("transaction_amount").clear().type(pvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createWithoutVoucherNameBn() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.branchManager.paymentVoucher;
            cy.formController("voucher_name_en").type(pvData.voucherNameEn);
            cy.formController("payment_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.wait(1000);
            cy.formController("voucher_prepared_by").type(pvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(pvData.remarks);
            cy.formController("payment_mode").type(pvData.paymentMode).type("{enter}");
            cy.wait(1000);
            cy.formController("amount").type(pvData.amount);
            cy.formController("remarks").eq(1).type(pvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(pvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(pvData.remarks1);
            cy.formController("transaction_amount").clear().type(pvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createWithoutVoucherDate() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.branchManager.paymentVoucher;
            cy.formController("voucher_name_en").type(pvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(pvData.voucherNameBn);
            cy.formController("voucher_prepared_by").type(pvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(pvData.remarks);
            cy.formController("payment_mode").type(pvData.paymentMode).type("{enter}");
            cy.wait(1000);
            cy.formController("amount").type(pvData.amount);
            cy.formController("remarks").eq(1).type(pvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.wait(1000);
            cy.formController("ledger_id").type(pvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(pvData.remarks1);
            cy.formController("transaction_amount").clear().type(pvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createWithoutVoucherPreparedBy() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.branchManager.paymentVoucher;
            cy.formController("voucher_name_en").type(pvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(pvData.voucherNameBn);
            cy.formController("payment_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(pvData.remarks);
            cy.formController("payment_mode").type(pvData.paymentMode).type("{enter}");
            cy.wait(1000);
            cy.formController("amount").type(pvData.amount);
            cy.formController("remarks").eq(1).type(pvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.wait(1000);
            cy.formController("ledger_id").type(pvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(pvData.remarks1);
            cy.formController("transaction_amount").clear().type(pvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createWithoutVoucherRemarks() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.branchManager.paymentVoucher;
            cy.formController("voucher_name_en").type(pvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(pvData.voucherNameBn);
            cy.formController("payment_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.wait(1000);
            cy.formController("voucher_prepared_by").type(pvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("payment_mode").type(pvData.paymentMode).type("{enter}");
            cy.wait(1000);
            cy.formController("amount").type(pvData.amount);
            cy.formController("remarks").eq(1).type(pvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.wait(1000);
            cy.formController("ledger_id").type(pvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(pvData.remarks1);
            cy.formController("transaction_amount").clear().type(pvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createWithoutVoucherPaymentMode() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.branchManager.paymentVoucher;
            cy.formController("voucher_name_en").type(pvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(pvData.voucherNameBn);
            cy.formController("payment_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.wait(1000);
            cy.formController("voucher_prepared_by").type(pvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(pvData.remarks);
            cy.formController("amount").type(pvData.amount);
            cy.formController("remarks").eq(1).type(pvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.wait(1000);
            cy.formController("ledger_id").type(pvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(pvData.remarks1);
            cy.formController("transaction_amount").clear().type(pvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createWithoutVoucherAmount() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.branchManager.paymentVoucher;
            cy.formController("voucher_name_en").type(pvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(pvData.voucherNameBn);
            cy.formController("payment_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.wait(1000);
            cy.formController("voucher_prepared_by").type(pvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(pvData.remarks);
            cy.formController("payment_mode").type(pvData.paymentMode).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(1).type(pvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(pvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(pvData.remarks1);
            cy.formController("transaction_amount").clear().type(pvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.GO_BACK).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createWithoutVoucherPaymentMethodRemarks() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.branchManager.paymentVoucher;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            cy.formController("voucher_name_en").type(pvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(pvData.voucherNameBn);
            cy.formController("payment_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.wait(1000);
            cy.formController("voucher_prepared_by").type(pvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(pvData.remarks);
            cy.formController("payment_mode").type(pvData.paymentMode).type("{enter}");
            cy.wait(1000);
            cy.formController("amount").type(pvData.amount);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(pvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(pvData.remarks1);
            cy.formController("transaction_amount").clear().type(pvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createWithoutVoucherDetailDate() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.branchManager.paymentVoucher;
            cy.formController("voucher_name_en").type(pvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(pvData.voucherNameBn);
            cy.formController("payment_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.wait(1000);
            cy.formController("voucher_prepared_by").type(pvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(pvData.remarks);
            cy.formController("payment_mode").type(pvData.paymentMode).type("{enter}");
            cy.wait(1000);
            cy.formController("amount").type(pvData.amount);
            cy.formController("remarks").eq(1).type(pvData.remarks);
            cy.formController("ledger_id").type(pvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(pvData.remarks1);
            cy.formController("transaction_amount").clear().type(pvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createWithoutVoucherLedger() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.branchManager.paymentVoucher;
            cy.formController("voucher_name_en").type(pvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(pvData.voucherNameBn);
            cy.formController("payment_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.wait(1000);
            cy.formController("voucher_prepared_by").type(pvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(pvData.remarks);
            cy.formController("payment_mode").type(pvData.paymentMode).type("{enter}");
            cy.wait(1000);
            cy.formController("amount").type(pvData.amount);
            cy.formController("remarks").eq(1).type(pvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("remarks").eq(2).type(pvData.remarks1);
            cy.formController("transaction_amount").clear().type(pvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createWithoutVoucherRemarks() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.branchManager.paymentVoucher;
            cy.formController("voucher_name_en").type(pvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(pvData.voucherNameBn);
            cy.formController("payment_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("voucher_prepared_by").type(pvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(pvData.remarks);
            cy.formController("payment_mode").type(pvData.paymentMode).type("{enter}");
            cy.wait(1000);
            cy.formController("amount").type(pvData.amount);
            cy.formController("remarks").eq(1).type(pvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(pvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("transaction_amount").clear().type(pvData.amount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createWithoutVoucherAmount() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.branchManager.paymentVoucher;
            cy.formController("voucher_name_en").type(pvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(pvData.voucherNameBn);
            cy.formController("payment_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("voucher_prepared_by").type(pvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(pvData.remarks);
            cy.formController("payment_mode").type(pvData.paymentMode).type("{enter}");
            cy.wait(1000);
            cy.formController("amount").type(pvData.amount);
            cy.formController("remarks").eq(1).type(pvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(pvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(pvData.remarks1);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.imsId(COMMON.BUTTONS.GO_BACK).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    approvePaymentVoucher() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.branchManager.paymentVoucher;
            cy.imsId(COMMON.MENUS.MY_TASK).click();
            cy.imsId(COMMON.MENUS.AWAITING_PAYMENT_VOUCHER).click();
            // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(pvData.voucherNameEn);
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
        cy.selectMenu(COMMON.MENUS.VOUCHER, COMMON.MENUS.PAYMENT_VOUCHER);
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(messages.ui.actionMessage);
    }

    detailsViewCheck() {
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.log(messages.ui.viewMessage);
    }

    viewGoBackPaymentVoucher() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.viewMessage);
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.branchManager.paymentVoucher;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(pvData.selectStatus).type("{enter}");
            cy.log(messages.ui.dropdownInactiveMessage);
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.branchManager.paymentVoucher;
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(pvData.statusSelect).type("{enter}");
            cy.log(messages.ui.dropdownActiveMessage);
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.branchManager.paymentVoucher;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(pvData.voucherNameBn);
            cy.log(messages.ui.searchSuccess);
        });
    }

    gridResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.ui.gridResetSuccess);
    }

    gridRefreshButtonCheck() {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.log(
            messages.ui.gridRefreshSuccess
        );
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.branchManager.paymentVoucher;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(pvData.voucherNameEn);
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
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.ADD_ICON).click();
        });
    }

    createPaymentRemoveIconButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.REMOVE_ICON).first().click();
        });
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
        cy.visit("/mfi-ais/voucher/payment-voucher/list");
        cy.location("pathname").should("eq", "/mfi-ais/voucher/payment-voucher/list");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true }).should("not.be.checked");
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        configurationGridChecks.breadcrumb("Payment Voucher", ["Voucher"]);
    }

    requiredGridColumnsCheck() {
        this.openListForChecks();
        configurationGridChecks.columns(["#", "Voucher ID", "Voucher Name", "Prepared By", "Payment Date", "Created By", "Payment Amount", "Locked By", "Status", "Actions"]);
    }

    gridRecordDataCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
            expect($rows.length, "payment vouchers").to.be.greaterThan(0);
            $rows.each((_, row) => {
                const cells = Cypress.$(row).find("td");
                expect(cells.eq(0).text().trim(), "serial").to.match(/^\d+$/);
                expect(cells.eq(1).text().trim(), "payment voucher ID").to.match(/^PV-.+/);
                [2, 3, 5, 8].forEach((index) => {
                    expect(cells.eq(index).text().trim(), `column ${index + 1}`).not.to.equal("");
                });
            });
        });
    }

    paymentAmountCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
            expect($rows.length, "payment vouchers to verify").to.be.greaterThan(0);
            $rows.each((_, row) => {
                const amount = Cypress.$(row).find("td").eq(6).text().trim();
                expect(amount, "formatted payment amount").to.match(/^(?:\d+|\d{1,3}(?:,\d{2,3})+)\.\d{2}$/);
                expect(Number(amount.replace(/,/g, "")), "positive payment amount").to.be.finite.and.greaterThan(0);
            });
        });
    }

    searchWithExistingVoucherName(partial = false) {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
            .first().find("td").eq(2).invoke("text").then((text) => {
                const name = text.trim();
                expect(name, "existing voucher name").not.to.equal("");
                const search = partial && name.length > 1 ? name.slice(0, Math.ceil(name.length / 2)) : name;
                configurationGridChecks.exactSearch(search, 2);
            });
    }

    voucherNameSearchCheck() {
        this.searchWithExistingVoucherName();
    }

    partialVoucherNameSearchCheck() {
        this.searchWithExistingVoucherName(true);
    }

    noResultSearchCheck() {
        this.openListForChecks();
        configurationGridChecks.noResult("BM_PAYMENT_VOUCHER");
    }

    activeStatusResultCheck() {
        this.openListForChecks();
        configurationGridChecks.activeFilter("Active", 8);
    }

    idAscendingSortCheck() {
        this.openListForChecks();
        configurationGridChecks.sort("Voucher ID", COMMON.SORT.ASCENDING);
    }

    idDescendingSortCheck() {
        this.openListForChecks();
        configurationGridChecks.sort("Voucher ID", COMMON.SORT.ASCENDING);
        configurationGridChecks.sort("Voucher ID", COMMON.SORT.DESCENDING);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const create_payment_voucher = new PaymentVoucherCreation();
