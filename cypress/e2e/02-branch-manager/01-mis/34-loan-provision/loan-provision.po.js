import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanProvision {
  test_data = Cypress.env("TEST_DATA");

   gridLoanProvisionListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-loan-provision");
      cy.log(messages.ui.gridListMessage);
    });
  }
  
  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }

 
}

export const grid_loan_provision = new LoanProvision();
