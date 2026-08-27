import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
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
    cy.imsId(COMMON.CONFIRMATION.YES).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.actionMessage);
  }

  gridDeleteButtonCheck() {
    cy.imsId(COMMON.BUTTONS.FORWARD_DELETE).click();
    cy.imsId(COMMON.CONFIRMATION.YES).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.actionMessage);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_day_forward = new DayForwardMis();
