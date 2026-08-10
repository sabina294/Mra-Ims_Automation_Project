import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class ProcessDashboard {
  test_data = Cypress.env("TEST_DATA");

  gridProcessDashboardListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-process-dashboard");
      cy.log(messages.ui.gridListMessage);
    });
  }
  
  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_process_dashboard = new ProcessDashboard();
