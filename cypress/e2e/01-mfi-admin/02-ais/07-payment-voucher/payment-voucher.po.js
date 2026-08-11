import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class PaymentVoucherCreation {
    test_data = Cypress.env("TEST_DATA");

    gridPaymentVoucherListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-voucher", "submenu-payment-voucher");
            cy.log(messages.ui.gridListMessage);
        });
    }

    createPaymentVoucher() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.mfiAdmin.paymentVoucher;
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
            const pvData = data.mfiAdmin.paymentVoucher;
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
            const pvData = data.mfiAdmin.paymentVoucher;
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
            const pvData = data.mfiAdmin.paymentVoucher;
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
            const pvData = data.mfiAdmin.paymentVoucher;
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
            const pvData = data.mfiAdmin.paymentVoucher;
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
            const pvData = data.mfiAdmin.paymentVoucher;
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
            const pvData = data.mfiAdmin.paymentVoucher;
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
            const pvData = data.mfiAdmin.paymentVoucher;
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
            const pvData = data.mfiAdmin.paymentVoucher;
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
            const pvData = data.mfiAdmin.paymentVoucher;
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
            const pvData = data.mfiAdmin.paymentVoucher;
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
            const pvData = data.mfiAdmin.paymentVoucher;
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

     myTaskMenuPaymentVoucher() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.mfiAdmin.paymentVoucher;
            cy.imsId("menu-my-task").click();
            cy.imsId("submenu-awaiting-payment-voucher").click();
            cy.log(messages.ui.actionMessage);
        });
    }

    myTaskResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.ui.resetSuccess);
    }

    myTaskRefreshButtonCheck() {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        // cy.imsId(COMMON.BUTTONS.RESET).click();
        // cy.imsId(COMMON.BUTTONS.REFRESH).click()
        cy.log(messages.ui.refreshSuccess);
    }

    approvePaymentVoucher() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.mfiAdmin.paymentVoucher;
            // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(pvData.voucherNameEn);
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_VIEW).click();
            cy.imsId("btn-lock").click();
            cy.imsId(COMMON.BUTTONS.APPROVE).click();
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();

            cy.log(messages.ui.approveSuccess);
        });
    }

    actionButtonCheck() {
        cy.selectMenu("menu-voucher", "submenu-payment-voucher");
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
            const pvData = data.mfiAdmin.paymentVoucher;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(pvData.selectStatus).type("{enter}");
            cy.log(messages.ui.dropdownInactiveMessage);
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.mfiAdmin.paymentVoucher;
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(pvData.statusSelect).type("{enter}");
            cy.log(messages.ui.dropdownActiveMessage);
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            const pvData = data.mfiAdmin.paymentVoucher;
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
            const pvData = data.mfiAdmin.paymentVoucher;
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
            cy.imsId("btn-add-icon").click();
        });
    }

    createPaymentRemoveIconButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-remove-icon").first().click();
        });
    }

    createGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.createGoBackMessage);
    }

    createNewJournalDetailsButtonCheck() {
        cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
        cy.imsId("btn-add-icon-0").click();
        cy.log(messages.ui.submitSuccess);
    }

    createDeleteButtonCheck() {
        cy.imsId("btn-remove-icon-1").click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.submitSuccess);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const create_payment_voucher = new PaymentVoucherCreation();
