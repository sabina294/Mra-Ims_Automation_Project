import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class Authorization {
    test_data = Cypress.env("TEST_DATA");

    gridAuthorizationListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-authorization");
            cy.log("Successfully authorization list page.");
        });
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

    gridPendingOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.mfiAdmin.authorizationFrom;
            cy.formController("office_id").type(aData.office).type("{enter}");
            cy.log("Office dropdown should be clickable and functional.");
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
            var aData = data.mfiAdmin.authorizationFrom;
            cy.formController("field_officer_id").type(aData.fieldOfficer).type("{enter}");
            cy.log(" History Field officer dropdown should be clickable and functional.");
        })
    }

    gridHistoryButtonOffCheck() {
        cy.imsId(GRID.BUTTONS.HISTORY_OFF)
            .uncheck({ force: true });
        cy.log(messages.ui.historyOffMessage);
    }

    gridHistoryOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.mfiAdmin.authorizationFrom;
            cy.formController("office_id").type(aData.office).type("{enter}");
            cy.log("Office dropdown should be clickable and functional.");
        })
    }

    gridOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.mfiAdmin.authorizationFrom;
            cy.formController("office_id").type(aData.office).type("{enter}");
            cy.log(" Office dropdown should be clickable and functional.");
        })
    }

    gridSamityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.mfiAdmin.authorizationFrom;
            cy.formController("field_officer_id").type(aData.samity).type("{enter}");
            cy.log(" Samity dropdown should be clickable and functional.");
        })
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch to Bangla language check.");
    }
}

export const grid_authroization = new Authorization();
