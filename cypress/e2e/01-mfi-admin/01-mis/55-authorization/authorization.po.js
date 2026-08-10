import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class Authorization {
    test_data = Cypress.env("TEST_DATA");

    gridAuthorizationListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-authorization");
            cy.log(messages.ui.gridListMessage);
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

    gridDraftButton() {
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.draftOnMessage);
    }

    gridPendingOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const aData = data.mfiAdmin.authorizationFrom;
            cy.formController("office_id").type(aData.office).type("{enter}");
            cy.log("Office dropdown should be clickable and functional.");
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
            const aData = data.mfiAdmin.authorizationFrom;
            cy.formController("field_officer_id").type(aData.fieldOfficer).type("{enter}");
            cy.log(messages.ui.historyOffMessage);
        })
    }

    gridHistoryButtonOffCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.historyOffMessage);
    }

    gridHistoryOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const aData = data.mfiAdmin.authorizationFrom;
            cy.formController("office_id").type(aData.office).type("{enter}");
            cy.log(messages.ui.historyOffMessage);
        })
    }

    gridOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const aData = data.mfiAdmin.authorizationFrom;
            cy.formController("office_id").type(aData.office).type("{enter}");
            cy.log(" Office dropdown should be clickable and functional.");
        })
    }

    gridSamityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const aData = data.mfiAdmin.authorizationFrom;
            cy.formController("field_officer_id").type(aData.samity).type("{enter}");
            cy.log(" Samity dropdown should be clickable and functional.");
        })
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_authroization = new Authorization();
