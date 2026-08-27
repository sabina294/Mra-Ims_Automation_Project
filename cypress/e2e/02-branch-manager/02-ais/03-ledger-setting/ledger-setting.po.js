import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LedgerSetting {
    test_data = Cypress.env("TEST_DATA");

    gridLedgerSubGroupListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.ACCOUNTING, COMMON.MENUS.LEDGER_SETTING);
            cy.log(messages.ui.gridListMessage);
        });
    }

    actionButtonCheck() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(messages.ui.actionMessage);
    }


    editResetButton() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();

        cy.log(messages.ui.editResetMessage);
    }

    editGoBackButton() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.editGoBackMessage);
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const lsData = data.branchManager.ledgerSetting;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lsData.selectStatus).type("{enter}");
            cy.log(messages.ui.dropdownInactiveMessage);
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const lsData = data.branchManager.ledgerSetting;
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lsData.statusSelect).type("{enter}");
            cy.log(messages.ui.dropdownActiveMessage);
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            const lsData = data.branchManager.ledgerSetting;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lsData.nameEn);
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
            const lsData = data.branchManager.ledgerSetting;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lsData.nameEn);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();

            cy.log(messages.ui.searchMessage);
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_ledger_setting = new LedgerSetting();
