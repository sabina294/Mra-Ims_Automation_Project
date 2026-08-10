// Shared across 02-branch-manager/01-mis/55-day-end-process-ais and workflow.cy.js.
import messages from "../constants/messages";
import { COMMON } from "../constants/selectors";
class DayEndProcessAis {
  test_data = Cypress.env("TEST_DATA");

  gridDayEndProcessAisListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-day-end-process-ais");
      cy.log(messages.ui.gridListMessage);
    });
  }

  previewDayEndProcess() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.PREVIEW).click();
      cy.log(messages.ui.previewMessage);
    });
  }

  previewGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.AIS_GOBACK).click();
      cy.log(messages.ui.previousOnMessage);
    });
  }

  previousOn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.PREVIOUS).click();
      cy.log(messages.ui.previousOnMessage);
    });
  }

  previousSearchButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.AIS_SEARCH).click();
      cy.log(messages.ui.previousSearchMessage);
    });
  }

  previousPreviewButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.PREVIEW).click();
      cy.log(messages.ui.previewMessage);
    });
  }

  previousPreviewGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.previousOnMessage);
    });
  }

  previousOff() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.PREVIOUS).click();
      cy.log(messages.ui.previousOnMessage);
    });
  }

  dayEndProcessAis() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.DAYENDAIS_PROCESS).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.dayEndAisMessage);
    });
  }

  DayEndProcessDelete() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.DELETE).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.DAYENDAIS_PROCESS).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.dayEndAisMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }

}

export const create_day_end_process_ais = new DayEndProcessAis();
