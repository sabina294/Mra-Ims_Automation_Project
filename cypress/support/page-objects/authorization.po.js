// Shared across 02-branch-manager/01-mis/53-authorization and workflow.cy.js.
import messages from "../constants/messages";
import { COMMON } from "../constants/selectors";
class Authorization {
    test_data = Cypress.env("TEST_DATA");

    gridAuthorizationListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-authorization");
            cy.log(messages.ui.gridListMessage);
        });
    }

    gridCheckboxCheck() {
        cy.imsId(COMMON.BUTTONS.CHECKBOX).click();
        cy.log(messages.ui.checkboxMessage);
    }

    authorizationLock() {
        cy.imsId(COMMON.BUTTONS.LOCK).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.authorizationLockMessage);
    }

    authorizationUnlock() {
        cy.imsId(COMMON.BUTTONS.AUTHORIZE_UNLOCK).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.authorizationUnlockMessage);
    }

    authorizeSamity() {
        cy.imsId(COMMON.BUTTONS.CHECKBOX).click();
        cy.imsId(COMMON.BUTTONS.LOCK).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.imsId(COMMON.BUTTONS.AUTHORIZE).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.authorizeSamityMessage);
    }

    authorizeSingleSamity() {
        cy.imsId(COMMON.BUTTONS.AUTHORIZE_SAMITY).click();
        cy.imsId(COMMON.BUTTONS.LOCK).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.imsId(COMMON.BUTTONS.AUTHORIZE).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.authorizeSingleSamityMessage);
    }

    gridResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.ui.gridResetSuccess);
    }

    gridRefreshButtonCheck() {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.log(messages.ui.gridRefreshSuccess);

    }


    gridDraftButton() {
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.draftOnMessage);
    }

    gridPendingFieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.branchManager.authorization;
            cy.formController("field_officer_id").type(aData.fieldOfficer).type("{enter}");
            cy.log(messages.ui.fieldOfficerDropdownMessage);
        })
    }

    gridDraftButtonOff() {
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.draftOffMessage);
    }

    gridHistoryButtonOnCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.historyOnMessage);
    }

    gridHistoryFieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.branchManager.authorization;
            cy.formController("field_officer_id").type(aData.fieldOfficer).type("{enter}");
            cy.log(messages.ui.fieldOfficerDropdownMessage);
        })
    }

    gridHistoryButtonOffCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.historyOffMessage);
    }

    gridFieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.branchManager.authorization;
            cy.formController("field_officer_id").type(aData.fieldOfficer).type("{enter}");
            cy.log(messages.ui.fieldOfficerDropdownMessage);
        })
    }

    gridSamityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.branchManager.authorization;
            cy.formController("field_officer_id").type(aData.samity).type("{enter}");
            cy.log(messages.ui.samityDropdownMessage);
        })
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }

}

export const authorization = new Authorization();
