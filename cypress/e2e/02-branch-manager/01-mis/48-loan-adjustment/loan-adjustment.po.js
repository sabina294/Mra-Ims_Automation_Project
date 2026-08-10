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
            cy.imsId("checkbox-1").click();
            cy.imsId("input-1").clear().type(laData.inputAmount);
            cy.log(messages.ui.submitSuccess);
        });
    }


    saveNewLoanAdjustment() {
        cy.fixture(this.test_data).then((data) => {

            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();

            cy.log("Successfully saved new loan adjustment.");
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
        cy.imsId("btn-table-action-unsubmit").click();

        cy.log("Successfully opened loan adjustment unsubmit action.");
    }


    actionLoanAdjustmentUnsubmitGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();

        cy.log("Successfully back from unsubmit action page.");
    }


    loanAdjustmentUnsubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId("btn-table-action-unsubmit").click();

        cy.imsId("btn-unsubmit").click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log("Successfully unsubmitted loan adjustment.");
    }


    actionEditLoanAdjustment() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();

        cy.log("Successfully opened loan adjustment edit page.");
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
        cy.imsId("btn-table-action-submit").click();

        cy.log("Successfully opened loan adjustment submit action.");
    }


    actionLoanAdjustmentGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();

        cy.log("Successfully back from loan adjustment submit page.");
    }


    loanAdjustmentSubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId("btn-table-action-submit").click();

        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log("Successfully submitted loan adjustment.");
    }


    loanAdjustmentDeleteProcess() {

        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId("btn-table-action-unsubmit").click();

        cy.imsId("btn-unsubmit").click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log("Successfully prepared loan adjustment delete process.");
    }


    loanAdjustmentActionDelete() {

        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_DELETE).click();

        cy.log("Successfully opened loan adjustment delete action.");
    }

    loanAdjustmentActionDeleteGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log("Successfully delete go back loan adjustment delete action.");
    }


    loanAdjustmentDelete() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_DELETE).click();
        cy.imsId("btn-delete").click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log("Successfully deleted loan adjustment.");
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
            cy.imsId("checkbox-1").click();
            cy.imsId("input-1").clear().type(laData.inputAmount);

            cy.log("Successfully created loan adjustment again.");
        });
    }


    againSaveNewLoanAdjustment() {

        cy.imsId(COMMON.BUTTONS.SUBMIT).click();

        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log("Successfully saved loan adjustment again.");
    }


    editDraftButton() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId("btn-table-action-unsubmit").click();
        cy.imsId("btn-unsubmit").click();
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
