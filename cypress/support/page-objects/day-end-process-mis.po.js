// Shared across 02-branch-manager/01-mis/54-day-end-process-mis and workflow.cy.js.
import messages from "../constants/messages";
import { COMMON } from "../constants/selectors";
class DayEndProcessMis {
  test_data = Cypress.env("TEST_DATA");

  gridDayEndProcessMisListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-day-end-process-mis");
      cy.log(messages.ui.gridListMessage);
    });
  }

  startDayEndProcess() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.DAYENDMIS_STARTPROCESS).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.dayEndMisMessage);
    });
  }

  refreshDayEndProcess() {
    cy.fixture(this.test_data).then((data) => {
      const clickCount = 3; // change this number as needed
      for (let i = 0; i < clickCount; i++) {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.wait(2000); // optional wait between clicks
      }
      cy.log(messages.ui.refreshDayEndMessage);
    });
  }

  revertRecordDayEndProcess() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.DELETE).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.DAYENDMIS_STARTPROCESS).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.REFRESH).click();
      cy.log(messages.ui.revertMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }

}

export const create_day_end_process_mis = new DayEndProcessMis();
