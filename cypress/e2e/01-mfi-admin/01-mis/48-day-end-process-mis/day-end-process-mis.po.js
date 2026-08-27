import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class DayEndProcessMis {
  test_data = Cypress.env("TEST_DATA");

  gridDayEndProcessListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.PROCESS, COMMON.MENUS.DAY_END_PROCESS_MIS);
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
