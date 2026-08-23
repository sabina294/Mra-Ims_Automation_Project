import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class loanAdjustment {
    test_data = Cypress.env("TEST_DATA");


    gridLoanAdjustmentListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-loan-adjustment");
            cy.log(messages.ui.gridListMessage);
        });
    }

    createNewLoanAdjustment() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

            const laData = data.branchManager.loanAdjustment;

            cy.formController("samity_id").click();
            cy.contains(laData.selectSamity).click()
            cy.formController("member_id").click();
            cy.contains(laData.selectMember).click()
            cy.formController("loan_account_id").click();
            cy.contains(laData.selectAccount).click()
            cy.imsId(COMMON.CHECKBOXES.FIRST).click();
            cy.imsId(COMMON.INPUTS.AMOUNT_FIRST).clear().type(laData.inputAmount);
            cy.log(messages.ui.submitSuccess);
        });
    }


    saveNewLoanAdjustment() {
        cy.fixture(this.test_data).then((data) => {

            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();

            cy.log(messages.form.submitSuccess);
        });
    }


    actionButtonCheck() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(messages.ui.actionMessage);
    }


    viewLoanAdjustment() {
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.log(messages.ui.viewMessage);
    }


    viewGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.viewMessage);
    }


    actionLoanAdjustmentUnsubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();

        cy.log(messages.form.submitSuccess);
    }


    actionLoanAdjustmentUnsubmitGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();

        cy.log(messages.ui.goBackSuccess);
    }


    loanAdjustmentUnsubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();

        cy.imsId(COMMON.BUTTONS.UNSUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log(messages.form.submitSuccess);
    }


    actionEditLoanAdjustment() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();

        cy.log(messages.ui.editMessage);
    }

    editDraftButton() {
        cy.imsId(COMMON.BUTTONS.DRAFT).first().click();

        // cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log(messages.ui.editMessage);
    }


    editGoBack() {
        // cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        // cy.imsId(COMMON.GRID.ACTION_EDIT).click();

        cy.imsId(COMMON.BUTTONS.GO_BACK).click();

        cy.log(messages.ui.editMessage);
    }


    actionLoanAdjustmentSubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_SUBMIT).click();

        cy.log(messages.form.submitSuccess);
    }


    actionLoanAdjustmentGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();

        cy.log(messages.ui.goBackSuccess);
    }


    loanAdjustmentSubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_SUBMIT).click();

        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log(messages.form.submitSuccess);
    }


    loanAdjustmentDeleteProcess() {

        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();

        cy.imsId(COMMON.BUTTONS.UNSUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log(messages.ui.actionMessage);
    }


    loanAdjustmentActionDelete() {

        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_DELETE).click();

        cy.log(messages.ui.viewMessage);
    }

    loanAdjustmentActionDeleteGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }


    loanAdjustmentDelete() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_DELETE).click();
        cy.imsId(COMMON.BUTTONS.DELETE).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log(messages.ui.actionMessage);
    }


    loanAdjustmentAgain() {

        cy.fixture(this.test_data).then((data) => {

            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

            const laData = data.branchManager.loanAdjustment;

            cy.formController("samity_id").click();
            cy.contains(laData.selectSamity).click()
            cy.formController("member_id").click();
            cy.contains(laData.selectMember).click()
            cy.formController("loan_account_id").click();
            cy.contains(laData.selectAccount).click()
            cy.imsId(COMMON.CHECKBOXES.FIRST).click();
            cy.imsId(COMMON.INPUTS.AMOUNT_FIRST).clear().type(laData.inputAmount);

            cy.log(messages.ui.actionMessage);
        });
    }


    againSaveNewLoanAdjustment() {

        cy.imsId(COMMON.BUTTONS.SUBMIT).click();

        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log(messages.form.submitSuccess);
    }


    editDraftButton() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
        cy.imsId(COMMON.BUTTONS.UNSUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();
        cy.imsId(COMMON.BUTTONS.DRAFT).first().click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log(messages.ui.editMessage);
    }

    editSubmitButton() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.get('.ant-switch-inner').click();
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.editSubmitMessage);
    }

    gridResetButtonCheck() {

        cy.imsId(COMMON.BUTTONS.RESET).click();

        cy.log(messages.ui.gridResetSuccess);
    }


    gridRefreshButtonCheck() {

        cy.imsId(COMMON.BUTTONS.REFRESH).click();

        cy.log(messages.ui.gridRefreshSuccess);
    }

    gridLanguageSwitchCheck() {

        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const create_loan_adjustment = new loanAdjustment();
