import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class DayEndProcessAis {
    test_data = Cypress.env("TEST_DATA");

    gridDayEndProcessPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.PROCESS, COMMON.MENUS.DAY_END_PROCESS_AIS);
            cy.log(messages.ui.actionMessage);
        });
    }
    processPreviewButtonCheck() {
        cy.imsId(COMMON.BUTTONS.PREVIEW).eq(0).click();
        cy.log(messages.ui.previewMessage);
    }

    processGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.AIS_GOBACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    processPreviousButtonCheck() {
        cy.imsId(COMMON.BUTTONS.PREVIOUS)
            .should('exist')
            .click({ force: true });
        cy.log(messages.ui.previousSearchMessage);
    }

    processSearchButtonCheck() {
        cy.imsId(COMMON.BUTTONS.AIS_SEARCH).click();
        cy.log(messages.ui.searchSuccess);
    }

    PreviousPreviewButtonCheck() {
        cy.imsId(COMMON.BUTTONS.PREVIEW)
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
            cy.imsId(COMMON.BUTTONS.PREVIOUS).click();
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
