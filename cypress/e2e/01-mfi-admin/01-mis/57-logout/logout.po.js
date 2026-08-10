import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LogoutPage {
  logout() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId("btn-logout").click();
    cy.log("Successfully logged out");
  }

  gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }

}

export const logout_page = new LogoutPage();
