import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class FundTransferCreation {
    test_data = Cypress.env("TEST_DATA");

    gridFundListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu1(COMMON.MENUS.FUND);
            cy.log(messages.ui.gridListMessage);
        });
    }

    createFundTransfer() {
        cy.fixture(this.test_data).then((data) => {
            const ftData = data.branchManager.fund;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            cy.formController("transaction_amount").type(ftData.amount);
            cy.formController("sender_pay_mode").type(ftData.paymentMode).type("{enter}");
            cy.formController("recipient_received_mode").type(ftData.receivedMode).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.log(messages.ui.submitSuccess);
        });
    }

     createwithoutTransactionAmount() {
        cy.fixture(this.test_data).then((data) => {
            const ftData = data.branchManager.fund;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            cy.formController("sender_pay_mode").type(ftData.paymentMode).type("{enter}");
            cy.formController("recipient_received_mode").type(ftData.receivedMode).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

     createwithoutSenderPaymentMode() {
        cy.fixture(this.test_data).then((data) => {
            const ftData = data.branchManager.fund;
            cy.formController("transaction_amount").type(ftData.amount);
            cy.formController("recipient_received_mode").type(ftData.receivedMode).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

     createwithoutRecipientReceivedMode() {
        cy.fixture(this.test_data).then((data) => {
            const ftData = data.branchManager.fund;
            cy.formController("transaction_amount").type(ftData.amount);
            cy.formController("sender_pay_mode").type(ftData.paymentMode).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

     createwithoutRemarks() {
        cy.fixture(this.test_data).then((data) => {
            const ftData = data.branchManager.fund;
            cy.formController("transaction_amount").type(ftData.amount);
            cy.formController("sender_pay_mode").type(ftData.paymentMode).type("{enter}");
            cy.formController("recipient_received_mode").type(ftData.receivedMode).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.GO_BACK).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

    actionButtonCheck() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(messages.ui.actionMessage);
    }

    viewFund() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.GRID.ACTION_VIEW).click();
            cy.log(messages.ui.viewMessage);
        });
    }

    viewGoBackfund() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.viewMessage);
    }

verifyFundTransfer() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_VERIFY).click();
            cy.log(messages.ui.viewMessage);
        });
    }

    verifyFundTransferGoBack() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.GO_BACK).click();
            cy.log(messages.ui.goBackSuccess);
        });
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const ftData = data.branchManager.fund;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(ftData.selectStatus).type("{enter}");
            cy.log(messages.ui.dropdownInactiveMessage);
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const ftData = data.branchManager.fund;
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(ftData.statusSelect).type("{enter}");
            cy.log(messages.ui.dropdownActiveMessage);
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            const ftData = data.branchManager.fund;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(ftData.search);
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
            const ftData = data.branchManager.fund;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(ftData.search);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();

            cy.log(messages.ui.searchMessage);
        });
    }

    createResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.validation.requiredField);
    }

    createValidationMessageCheck() {
        cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.validation.requiredField);
    }

    createGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.createGoBackMessage);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const create_fund_Transfer = new FundTransferCreation();
