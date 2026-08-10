import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class OccupationCreation {
  test_data = Cypress.env("TEST_DATA");

  gridOccupationListPage() {
    cy.selectMenu("menu-configuration", "submenu-occupation");
    cy.log(messages.ui.gridListMessage);
  }

  createOccupation() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("name_en").type(occupationData.nameEn);
      cy.formController("name_bn").type(occupationData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.get("app-confirmation-modal")
        .contains(occupationData.messageSaveOcc)
        .should("be.visible");
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("name_bn").type(occupationData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("name_en").type(occupationData.nameEn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click()
      cy.imsId(COMMON.BUTTONS.RESET).click();;
      cy.formController("name_en").type(occupationData.nameEn);
      cy.formController("name_bn").type(occupationData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("name_bn").type(occupationData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewOccupation() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(occupationData.nameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();

      cy.get("app-mra-mfi").contains(occupationData.nameEn).should("be.visible");
      cy.get("app-mra-mfi").contains(occupationData.nameBn).should("be.visible");

      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);
  }

  turnOffOnEditMode() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editOccupation() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.get("app-confirmation-modal")
        .contains(occupationData.messageUpdateOcc)
        .should("be.visible");
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.editMessage);
    });
  }

  editResetButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.editResetMessage);
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.formController("name_en").type(occupationData.nameEn);
      cy.formController("name_bn").type(occupationData.nameBn);
      cy.formController("status").type(occupationData.status).type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.get("app-confirmation-modal")
        .contains(occupationData.messageUpdateOcc)
        .should("be.visible");
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.editSubmitMessage);
    });
  }

  editGoBackButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.editGoBackMessage);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("status").type(occupationData.selectStatus).type("{enter}");

      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.formController("status").type(occupationData.statusSelect).type("{enter}");

      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInOccupationName() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(occupationData.nameEn);

      cy.log(messages.ui.searchMessage);
    });
  }

  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(messages.ui.gridRefreshSuccess);
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("name_en").type(occupationData.nameEn);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.validation.requiredField);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(occupationData.search);
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

export const create_occupation = new OccupationCreation();
