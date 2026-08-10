import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class CancelSamity {
  test_data = Cypress.env("TEST_DATA");

  gridCancelSamityListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-cancel-samity");
      cy.log(messages.ui.gridListMessage);
    });
  }
  
  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_cancel_samity = new CancelSamity();
