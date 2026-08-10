// Shared across 02-branch-manager/01-mis/44-staging-data, workflow.cy.js,
// and 04-field-officer/01-mis/15-loan-penalty (uses it as a setup precondition).
import messages from "../constants/messages";
import { COMMON } from "../constants/selectors";
class StagingData {
  test_data = Cypress.env("TEST_DATA");

  gridStagingDataListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-staging-data");
      cy.log(messages.ui.gridListMessage);
    });
  }

  startProcessStagingData() {
    cy.imsId(COMMON.BUTTONS.START_PROCESS).click();
    cy.wait(1000);
    cy.imsId(COMMON.CONFIRMATION.YES).click();
    cy.wait(3000);
    cy.log(
      messages.ui.startProcessMessage
    );
  }

  refreshButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const clickCount = 3; // change this number as needed
      for (let i = 0; i < clickCount; i++) {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.wait(2000); // optional wait between clicks
      }
      cy.log(messages.ui.gridRefreshSuccess);
    });
  }

  fieldOfficerDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var SData = data.branchManager.createStagingDataFrom;
      cy.formController("field_officer_id").type(SData.fieldOfficer).type("{enter}");
      cy.wait(2000);
      cy.log(messages.ui.fieldOfficerDropdownMessage);
    });
  }

  samityDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var SData = data.branchManager.createStagingDataFrom;
      cy.formController("samity_id").type(SData.samity).type("{enter}");
      cy.wait(2000);
      cy.log(messages.ui.samityDropdownMessage);
    });
  }

  StatusDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var SData = data.branchManager.createStagingDataFrom;
      cy.formController("status").type(SData.status).type("{enter}");
      cy.wait(2000);
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var SData = data.branchManager.createStagingDataFrom;
      cy.formController("search_text").type(SData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.wait(2000);
      cy.log(messages.ui.searchMessage);
    });
  }

  deleteButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var SData = data.branchManager.createStagingDataFrom;
      cy.imsId(COMMON.BUTTONS.DELETE).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.wait(5000);
      cy.imsId(COMMON.BUTTONS.START_PROCESS).click();
      cy.wait(1000);
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.wait(3000);
      cy.imsId(COMMON.BUTTONS.REFRESH).click();
      cy.wait(3000);
      cy.log(messages.ui.revertMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }

}

export const create_staging_data = new StagingData();
