import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class savingsWithdraw {
    test_data = Cypress.env("TEST_DATA");

    gridSavingsWithdrawListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.TRANSACTION, COMMON.MENUS.SAVINGS_WITHDRAW);
            cy.log(messages.ui.gridListMessage);
        });
    }

    createNewWithdraw() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            const swData = data.fieldOfficer.savingsWithdraw;
            cy.formController("samityId").click();
            cy.contains(swData.selectSamity).click()
            cy.formController("memberId").click();
            cy.contains(swData.selectMember).click()
            cy.formController("accountId").click();
            cy.contains(swData.selectAccount).click()
            cy.imsId(COMMON.INPUTS.AMOUNT_IMS).clear().type(swData.inputAmount);
            cy.log(messages.ui.submitSuccess);
        });
    }

    saveNewWithdraw() {
        cy.fixture(this.test_data).then((data) => {
            const swData = data.fieldOfficer.savingsWithdraw;
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.log(messages.ui.actionMessage);
        });
    }


    actionButtonCheck() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(messages.ui.actionMessage);
    }

    viewWithdraw() {
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.log(messages.ui.viewMessage);
    }

    viewGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.viewMessage);
    }

    actionWithdrawUnsubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
        cy.log(messages.form.submitSuccess);
    }

    actionWithdrawUnsubmitGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    withdrawUnsubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
        cy.imsId(COMMON.BUTTONS.UNSUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.form.submitSuccess);
    }

    actionEditSavingsWithdraw() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_MIS_EDIT).click();
        cy.log(messages.ui.editMessage);
    }

    editDraftButton() {
        cy.imsId(COMMON.BUTTONS.DRAFT).first().click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.editMessage);
    }

    editGoBack() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_MIS_EDIT).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.editMessage);
    }

    actionWithdrawSubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_SUBMIT).click();
        cy.log(messages.form.submitSuccess);
    }

    actionWithdrawGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.form.submitSuccess);
    }

    withdrawSubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_SUBMIT).click();
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.form.submitSuccess);
    }


    withdrawDeleteProcess() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
        cy.imsId(COMMON.BUTTONS.UNSUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.form.submitSuccess);
    }

    withdrawActionDelete() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_DELETE).click();
        cy.log(messages.form.submitSuccess);
    }


    withdrawDelete() {
        cy.imsId(COMMON.BUTTONS.DELETE).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.form.submitSuccess);
    }


    withdrawAgain() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            const swData = data.fieldOfficer.savingsWithdraw;
            cy.formController("samityId").click();
            cy.contains(swData.selectSamity).click()
            cy.formController("memberId").click();
            cy.contains(swData.selectMember).click()
            cy.formController("accountId").click();
            cy.contains(swData.selectAccount).click()
            cy.imsId(COMMON.INPUTS.AMOUNT_IMS).clear().type(swData.inputAmount);
            cy.log(messages.ui.actionMessage);
        });
    }

    againSaveNewWithdraw() {
        cy.fixture(this.test_data).then((data) => {
            const swData = data.fieldOfficer.savingsWithdraw;
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.log(messages.ui.actionMessage);
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

    gridSamityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const swData = data.fieldOfficer.savingsWithdraw;
            cy.formController("samity_id").type(swData.samity).type("{enter}");
            cy.log(messages.ui.actionMessage);
        });
    }

    gridHistoryButtonOnCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.historyOnMessage);
    }

    samityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const swData = data.fieldOfficer.savingsWithdraw;
            cy.formController("samity_id").type(swData.samityDropdown).type("{enter}");
            cy.log(messages.ui.samityDropdownMessage);
        })
    }

    gridHistoryButtonOffCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.historyOffMessage);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }



}

export const create_savings_withdraw = new savingsWithdraw();
