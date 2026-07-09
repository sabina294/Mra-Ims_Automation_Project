import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class Authorization {
    test_data = Cypress.env("TEST_DATA");

    gridAuthorizationListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-authorization");
            cy.log("Successfully loaded authorization list page.");
        });
    }

    gridCheckboxCheck() {
        cy.imsId("header-checkbox").click();
        cy.log("Checkbox should be clickable and functional.");
    }

    authorizationLock() {
        cy.imsId("btn-lock").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.log("Lock authorization should be clickable and functional.");
    }

    authorizationUnlock() {
        cy.imsId("unlock-button").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.log("Unlock authorization should be clickable and functional.");
    }

    authorizeSamity() {
        cy.imsId("header-checkbox").click();
        cy.imsId("btn-lock").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.imsId("authorize-button").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.log("authorization samity should be clickable and functional.");
    }

    UnauthorizeSamity() {
        cy.imsId("header-checkbox").click();
        cy.imsId("btn-lock").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.imsId("unauthorize-button").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.log("authorization samity should be clickable and functional.");
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }

    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the authorization form "
        );
    }


    gridDraftButton() {
        cy.imsId(GRID.BUTTONS.DRAFT_ON)
            .check({ force: true });
        cy.log(messages.ui.draftOnMessage);
    }

    gridPendingFieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.branchManager.authorization;
            cy.formController("field_officer_id").type(aData.fieldOfficer).type("{enter}");
            cy.log("Field officer dropdown should be clickable and functional.");
        })
    }

    gridDraftButtonOff() {
        cy.imsId(GRID.BUTTONS.DRAFT_OFF)
            .uncheck({ force: true });
        cy.log(messages.ui.draftOffMessage);
    }

    gridHistoryButtonOnCheck() {
        cy.imsId(GRID.BUTTONS.HISTORY_ON)
            .check({ force: true });
        cy.log(messages.ui.historyOnMessage);
    }

    gridHistoryFieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.branchManager.authorization;
            cy.formController("field_officer_id").type(aData.fieldOfficer).type("{enter}");
            cy.log(" History Field officer dropdown should be clickable and functional.");
        })
    }

    gridHistoryButtonOffCheck() {
        cy.imsId(GRID.BUTTONS.HISTORY_OFF)
            .uncheck({ force: true });
        cy.log(messages.ui.historyOffMessage);
    }

    gridHistoryFieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.branchManager.authorization;
            cy.formController("field_officer_id").type(aData.fieldOfficer).type("{enter}");
            cy.log(" History Field officer dropdown should be clickable and functional.");
        })
    }

    gridFieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.branchManager.authorization;
            cy.formController("field_officer_id").type(aData.fieldOfficer).type("{enter}");
            cy.log(" Field officer dropdown should be clickable and functional.");
        })
    }

    gridSamityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.branchManager.authorization;
            cy.formController("field_officer_id").type(aData.samity).type("{enter}");
            cy.log(" Samity dropdown should be clickable and functional.");
        })
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Successfully switched to bangla language.");
    }

}

export const authorization = new Authorization();
