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

  refreshButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.REFRESH).click();
      cy.wait(2000);
      cy.log(messages.ui.refreshSuccess);
    });
  }

  selectOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sData = data.mfiAdmin.gridStagingData;
      cy.formController("office_id").type(sData.selectOffice).type("{enter}");
      cy.wait(2000);
      cy.log(messages.ui.officeDropdownMessage);
    });
  }

   selectSamityDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sData = data.mfiAdmin.gridStagingData;
      cy.formController("samity_id").type(sData.selectSamity).type("{enter}");
      cy.wait(2000);
      cy.log(messages.ui.samityDropdownMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_staging_data = new StagingData();
