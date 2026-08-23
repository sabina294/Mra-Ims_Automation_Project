import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class OfficeGrid {
  test_data = Cypress.env("TEST_DATA");

  gridOfficePage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu1("menu-office");
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewOffice() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.fieldOfficer.gridOfficeFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(omData.officeNameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.goBackSuccess);
  }

  turnOnEditMode() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.fieldOfficer.gridOfficeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(omData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();

      cy.log(messages.ui.turnOnEditModeMessage);
    });
  }

  editSubmitButton() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();

    cy.log(messages.ui.editSubmitMessage);
  }

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  editDraftButton() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.fieldOfficer.gridOfficeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(omData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
      cy.imsId(COMMON.BUTTONS.DRAFT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.editMessage);
    });
  }



  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.fieldOfficer.gridOfficeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(omData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.fieldOfficer.gridOfficeFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(omData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInOfficeManagementName() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.fieldOfficer.gridOfficeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(omData.officeNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(
      messages.ui.gridRefreshSuccess
    );
  }

  gridCheckboxCheck() {
    cy.imsId(COMMON.CHECKBOXES.ROW_2).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.checkboxMessage);
  }

  gridCheckboxLockButtonCheck() {
    cy.imsId(COMMON.BUTTONS.LOCK).click();
    cy.log(messages.ui.lockSuccess);
  }

  gridCheckboxUnlockButtonCheck() {
    cy.imsId(COMMON.CHECKBOXES.ROW_2).click();
    cy.imsId(COMMON.BUTTONS.UNLOCK).click();
    cy.log(messages.ui.unlockSuccess);
  }

  gridDraftButton() {
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
      .check({ force: true });
    cy.log(messages.ui.draftOnMessage);
  }

  gridDraftButtonOff() {
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
      .uncheck({ force: true });
    cy.log(messages.ui.draftOffMessage);
  }


  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.fieldOfficer.gridOfficeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(omData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_office = new OfficeGrid();
