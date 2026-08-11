import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class DayEndProcessAis {
    test_data = Cypress.env("TEST_DATA");

    gridDayEndProcessPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-process", "submenu-day-end-process-ais");
            cy.log(messages.ui.actionMessage);
        });
    }
    processPreviewButtonCheck() {
        cy.imsId("btn-preview").eq(0).click();
        cy.log(messages.ui.previewMessage);
    }

    processGoBackButtonCheck() {
        cy.imsId("go-back-button").click();
        cy.log(messages.ui.goBackSuccess);
    }

    processPreviousButtonCheck() {
        cy.imsId("btn-draft-on")
            .should('exist')
            .click({ force: true });
        cy.log(messages.ui.previousSearchMessage);
    }

    processSearchButtonCheck() {
        cy.imsId("search-button").click();
        cy.log(messages.ui.searchSuccess);
    }

    PreviousPreviewButtonCheck() {
        cy.imsId("btn-preview")
            .should("be.visible")
            .first()
            .click();

        cy.log(messages.ui.previewMessage);
    }

     previousPreviewGoBackButton() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.GO_BACK).click();
            cy.log(messages.ui.goBackSuccess);
        });
    }

    previousOff() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-draft-on").click();
            cy.log(messages.ui.previousSearchMessage);
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_day_end_process_ais = new DayEndProcessAis();
