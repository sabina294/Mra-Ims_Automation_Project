import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class DayEndProcessAis {
    test_data = Cypress.env("TEST_DATA");

    gridDayEndProcessPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-process", "submenu-day-end-process-ais");
            cy.log("Successfully Day end process AIS page.");
        });
    }
    processPreviewButtonCheck() {
        cy.imsId("btn-preview").eq(0).click();
        cy.log("Successful preview button check.");
    }

    processGoBackButtonCheck() {
        cy.imsId("go-back-button").click();
        cy.log("Successful go back button check.");
    }

    processPreviousButtonCheck() {
        cy.imsId("btn-draft-on")
            .should('exist')
            .click({ force: true });
        cy.log("Successful previous button check.");
    }

    processSearchButtonCheck() {
        cy.imsId("search-button").click();
        cy.log("Successful search button check.");
    }

    PreviousPreviewButtonCheck() {
        cy.imsId("btn-preview")
            .should("be.visible")
            .first()
            .click();

        cy.log("Successful preview button check.");
    }

     previousPreviewGoBackButton() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.GO_BACK).click();
            cy.log("Successfully day end process previous preview go back button clicked.");
        });
    }

    previousOff() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-draft-on").click();
            cy.log("Successfully day end process previous off.");
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_day_end_process_ais = new DayEndProcessAis();
