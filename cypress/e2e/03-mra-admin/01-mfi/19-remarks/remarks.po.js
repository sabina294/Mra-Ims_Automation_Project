import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class RemarksCreation {
  test_data = Cypress.env("TEST_DATA");

  /* ------------------ Grid & Navigation ------------------ */

  gridRemarksListPage() {
    cy.fixture(this.test_data).then(() => {
      cy.selectMenu("menu-configuration", "submenu-remarks");
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(messages.ui.gridRefreshSuccess);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }

  /* ------------------ Create Remarks ------------------ */

  createRemarks() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).should("be.visible");

      cy.formController(COMMON.INPUTS.NAME_EN).type(remarksData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(remarksData.nameBn);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.get("app-confirmation-modal")
        .contains(remarksData.messageSaveRem)
        .should("be.visible");

      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_BN).type(remarksData.nameBn);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(remarksData.nameEn);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.formController(COMMON.INPUTS.NAME_EN).type(remarksData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(remarksData.nameBn);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(remarksData.nameEn);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(remarksData.nameEn);
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
      const remarksData = data.mraAdmin.createremarksFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(remarksData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  /* ------------------ View Remarks ------------------ */

  viewRemarks() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(remarksData.nameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();

      cy.get("app-mra-mfi").contains(remarksData.nameEn).should("be.visible");
      cy.get("app-mra-mfi").contains(remarksData.nameBn).should("be.visible");

      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);
  }

  /* ------------------ Edit Remarks ------------------ */

  turnOffOnEditMode() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editRemarks() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.get("app-confirmation-modal")
        .contains(remarksData.messageUpdateRem)
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
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.formController(COMMON.INPUTS.NAME_EN).type(remarksData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(remarksData.nameBn);
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(remarksData.status).type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.get("app-confirmation-modal")
        .contains(remarksData.messageUpdateRem)
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

  /* ------------------ Filter & Search ------------------ */

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(remarksData.selectStatus)
        .type("{enter}");

      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(remarksData.statusSelect)
        .type("{enter}");

      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInRemarksName() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(remarksData.nameEn);

      cy.log(messages.ui.searchMessage);
    });
  }
}

export const create_remarks = new RemarksCreation();
