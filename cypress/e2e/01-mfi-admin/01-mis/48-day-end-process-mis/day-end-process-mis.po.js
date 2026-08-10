import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class DayEndProcessMis {
  test_data = Cypress.env("TEST_DATA");

  gridDayEndProcessListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-day-end-process-mis");
      cy.log(messages.ui.gridListMessage);
    });
  }
  
  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_day_end_process = new DayEndProcessMis();
