import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class MonthEndProcess {
  test_data = Cypress.env("TEST_DATA");

  gridMonthEndProcessListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.PROCESS, COMMON.MENUS.MONTH_END_PROCESS_MIS);
      cy.log(messages.ui.gridListMessage);
    });
  }
  
  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_month_end_process = new MonthEndProcess();
