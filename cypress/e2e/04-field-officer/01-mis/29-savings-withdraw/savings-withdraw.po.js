import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class savingsWithdraw {
    test_data = Cypress.env("TEST_DATA");

    gridSavingsWithdrawListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-savings-withdraw");
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
            cy.imsId("amount-input").clear().type(swData.inputAmount);
            cy.log(messages.ui.submitSuccess);
        });
    }

    saveNewWithdraw() {
        cy.fixture(this.test_data).then((data) => {
            const swData = data.fieldOfficer.savingsWithdraw;
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.log("Successfully created new savings withdraw");
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
        cy.imsId("btn-table-action-unsubmit").click();
        cy.log("successfully on the action unsubmit button check.");
    }

    actionWithdrawUnsubmitGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log("successfully on the action unsubmit go back button check.");
    }

    withdrawUnsubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId("btn-table-action-unsubmit").click();
        cy.imsId("btn-unsubmit").click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log("successfully on the unsubmit savings withdraw.");
    }

    actionEditSavingsWithdraw() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId("btn-mis-table-action-edit").click();
        cy.log("successfully on the edit savings withdraw list page.");
    }

    editDraftButton() {
        cy.imsId(COMMON.BUTTONS.DRAFT).first().click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.editMessage);
    }

    editGoBack() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId("btn-mis-table-action-edit").click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.editMessage);
    }

    actionWithdrawSubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId("btn-table-action-submit").click();
        cy.log("successfully on the action submit button check.");
    }

    actionWithdrawGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log("successfully on the action submit button check.");
    }

    withdrawSubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId("btn-table-action-submit").click();
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log("successfully on the action submit button check.");
    }


    withdrawDeleteProcess() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId("btn-table-action-unsubmit").click();
        cy.imsId("btn-unsubmit").click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log("successfully on the action submit button check.");
    }

    withdrawActionDelete() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_DELETE).click();
        cy.log("successfully on the action submit button check.");
    }


    withdrawDelete() {
        cy.imsId("btn-delete").click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log("successfully on the action submit button check.");
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
            cy.imsId("amount-input").clear().type(swData.inputAmount);
            cy.log("Successfully created new savings withdraw");
        });
    }

    againSaveNewWithdraw() {
        cy.fixture(this.test_data).then((data) => {
            const swData = data.fieldOfficer.savingsWithdraw;
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.log("Successfully created new savings withdraw");
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
            cy.log("Successfully selected samity for new savings withdraw");
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
            cy.log(
                "successfully samity dropdown displayed the grid list of the savings withdraw "
            );
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
