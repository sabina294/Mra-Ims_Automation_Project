import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class StagingData {
  test_data = Cypress.env("TEST_DATA");

  gridStagingDataListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.PROCESS, COMMON.MENUS.STAGING_DATA);
      cy.log(messages.ui.gridListMessage);
    });
  }

  selectFieldOfficer() {
      cy.fixture(this.test_data).then((data) => {
        const sdData = data.fieldOfficer.gridStagingData;
        cy.formController("field_officer_id").type(sdData.selectFieldOfficer).type("{enter}");
      });
    cy.log(messages.ui.gridListMessage);
  }

  selectSamity() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.fieldOfficer.gridStagingData;
      cy.formController("samity_id").type(sdData.selectSamity).type("{enter}");
      cy.log(messages.ui.gridListMessage);
    });
  }

  refreshButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const clickCount = 2; // change this number as needed
      for (let i = 0; i < clickCount; i++) {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.wait(1000); // optional wait between clicks
      }
      cy.log(messages.ui.refreshSuccess);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_staging_data = new StagingData();
