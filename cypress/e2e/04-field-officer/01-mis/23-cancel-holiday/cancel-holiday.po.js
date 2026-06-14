import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class CancelHoliday {
    test_data = Cypress.env("TEST_DATA");

    gridCancelHolidayListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-calendar", "submenu-cancel-holiday");
            cy.log("Successfully Cancel Holiday list page.");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }

    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the Cancel Holiday "
        );
    }

    gridDraftButton() {
        cy.imsId(GRID.BUTTONS.DRAFT_ON)
            .check({ force: true });
        cy.log(messages.ui.draftOnMessage);
    }

    gridDraftButtonOff() {
        cy.imsId(GRID.BUTTONS.DRAFT_OFF)
            .uncheck({ force: true });
        cy.log(messages.ui.draftOffMessage);
    }

    createResetButtonCheck() {
        cy.imsId("btn-add-new").click();
        cy.imsId("btn-reset").click();
        cy.log("Successful reset button check.");
    }

    createApproveButtonCheck() {
        cy.imsId("btn-approve").click();
        cy.log("Successful approve button check.");
    }

    createOkButton() {
        cy.imsId("btn-ok").click();
        cy.log("Successful ok button check.");
    }

    createSubmitButtonCheck() {
        cy.imsId("btn-submit").click();
        // cy.imsId("btn-ok").click();
        cy.log("Successful submit button check.");
    }

    createDraftButtonCheck() {
        cy.imsId("btn-draft").click();
        cy.log("Successful draft button check.");
    }

    createDraftOkButton() {
        cy.imsId("btn-ok").click();
        cy.log("Successful ok button check.");
    }

    createGoBackButtonCheck() {
        cy.imsId("btn-go-back").click();
        cy.log("Successful go back button check.");
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            var chData = data.fieldOfficer.cancelHoliday;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(chData.search);
            cy.imsId("btn-search").click();
            cy.log("Successful search button click.");
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsccessful switch bangla language check.");
    }
}

export const create_cancel_holiday = new CancelHoliday();
