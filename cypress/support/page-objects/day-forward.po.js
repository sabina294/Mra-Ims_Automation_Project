// Shared across 02-branch-manager/01-mis/56-day-forward and workflow.cy.js.
import messages from "../constants/messages";
import { COMMON } from "../constants/selectors";
class DayForwardMis {
    test_data = Cypress.env("TEST_DATA");

    gridDayForwardListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.PROCESS, COMMON.MENUS.DAY_FORWARD);
            cy.log(messages.ui.gridListMessage);
        });
    }

    gridDayForwardDayRoutine() {
        cy.imsId(COMMON.BUTTONS.FORWARD).click();
        cy.log(messages.ui.dayForwardMessage);
    }

    startProccess() {
        cy.imsId(COMMON.BUTTONS.START_PROCESS).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.startProcessMessage);
    }

    dayForwardConfirm() {
        cy.imsId(COMMON.BUTTONS.CONFIRM).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.confirmMessage);
    }

    gridDeleteButtonCheck() {
        cy.imsId(COMMON.BUTTONS.FORWARD_DELETE).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.imsId(COMMON.BUTTONS.FORWARD).click();
        cy.imsId(COMMON.BUTTONS.START_PROCESS).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.imsId(COMMON.BUTTONS.CONFIRM).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.forwardDeleteMessage);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_day_forward = new DayForwardMis();
