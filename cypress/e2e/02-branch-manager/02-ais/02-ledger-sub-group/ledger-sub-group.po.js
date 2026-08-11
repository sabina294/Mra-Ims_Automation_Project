import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LedgerSubGroupCreation {
    test_data = Cypress.env("TEST_DATA");

    gridLedgerSubGroupListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-accounting", "submenu-ledger-sub-group");
            cy.log(messages.ui.gridListMessage);
        });
    }

    createLedgerSubGroup() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

            cy.formController("group_id").type(lsgData.groupId).type("{enter}");
            cy.formController("ledger_subgroup_name_en").type(lsgData.ledgerSubGroupNameEn);
            cy.formController("ledger_subgroup_name_bn").type(lsgData.ledgerSubGroupNameBn);
            cy.formController("balance_sheet_item").type(lsgData.balanceSheet).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();

            cy.log(messages.ui.submitSuccess);
        });
    }

    createwithoutGroupId() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

            cy.formController("ledger_subgroup_name_en").type(lsgData.ledgerSubGroupNameEn);
            cy.formController("ledger_subgroup_name_bn").type(lsgData.ledgerSubGroupNameBn);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createwithoutNameEnglish() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.formController("group_id").type(lsgData.groupId).type("{enter}");
            cy.formController("ledger_subgroup_name_bn").type(lsgData.ledgerSubGroupNameBn);
            cy.formController("balance_sheet_item").type(lsgData.balanceSheet).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createwithoutNameBangla() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.formController("group_id").type(lsgData.groupId).type("{enter}");
            cy.formController("ledger_subgroup_name_en").type(lsgData.ledgerSubGroupNameEn);
            cy.formController("balance_sheet_item").type(lsgData.balanceSheet).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createwithoutBalanceSheetItem() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.formController("group_id").type(lsgData.groupId).type("{enter}");
            cy.formController("ledger_subgroup_name_en").type(lsgData.ledgerSubGroupNameEn);
            cy.formController("ledger_subgroup_name_bn").type(lsgData.ledgerSubGroupNameBn);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createwithoutStatus() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController("group_id").type(lsgData.groupId).type("{enter}");
            cy.formController("ledger_subgroup_name_en").type(lsgData.ledgerSubGroupNameEn);
            cy.formController("ledger_subgroup_name_bn").type(lsgData.ledgerSubGroupNameBn);
            cy.formController("balance_sheet_item").type(lsgData.balanceSheet).type("{enter}");
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

    turnOffEditMode() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();
        cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
        cy.log(messages.ui.turnOnEditModeMessage);
    }

    turnOffEditModeGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.editMessage);
    }

    editButton() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();
        cy.log(messages.ui.editMessage);
    }

    editResetButton() {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.ui.editResetMessage);
    }

    editValidationMessageCheck() {
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log(messages.ui.editMessage);
    }

    editGoBackButton() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.editGoBackMessage);
    }

    editSubmitButton() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log(messages.ui.editSubmitMessage);
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lsgData.selectStatus).type("{enter}");
            cy.log(messages.ui.dropdownInactiveMessage);
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lsgData.statusSelect).type("{enter}");
            cy.log(messages.ui.dropdownActiveMessage);
        });
    }

    ledgerGroupId() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController("ledger_group").type(lsgData.ledgerGroupId);
            cy.log(messages.ui.searchSuccess);
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lsgData.ledgerSubGroupNameEn);
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

    gridLedgerSubGroupDropdown() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.formController("ledger_group").click().type(lsgData.ledgerGroupId).type("{enter}");
        });
    }

    createResetButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.validation.requiredField);
        });
    }

    createValidationMessageCheck() {
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.validation.requiredField);
    }

    createGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.createGoBackMessage);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const create_ledger_sub_group = new LedgerSubGroupCreation();
