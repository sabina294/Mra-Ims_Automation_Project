import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";

class AreaCreation {
  test_data = Cypress.env("TEST_DATA");

  gridAreaListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-area");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createArea() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var arData = data.mfiAdmin.createAreaFrom;
      cy.formController("area_name_en").type(arData.nameEn);
      cy.formController("area_name_bn").type(arData.nameBn);
      cy.formController("zone_id").type(arData.zoneName).type("{enter}");
      cy.formController("area_code").type(arData.areaCode);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_YES).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var arData = data.mfiAdmin.createAreaFrom;
      cy.formController("area_name_bn").type(arData.nameBn);
      cy.formController("zone_id").type(arData.zoneName).type("{enter}");
      cy.formController("area_code").type(arData.areaCode);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var arData = data.mfiAdmin.createAreaFrom;
      cy.formController("area_name_en").type(arData.nameEn);
      cy.formController("zone_id").type(arData.zoneName).type("{enter}");
      cy.formController("area_code").type(arData.areaCode);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutZone() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var arData = data.mfiAdmin.createAreaFrom;
      cy.formController("area_name_en").type(arData.nameEn);
      cy.formController("area_name_bn").type(arData.nameBn);
      cy.formController("area_code").type(arData.areaCode);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutAreaCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var arData = data.mfiAdmin.createAreaFrom;
      cy.formController("area_name_en").type(arData.nameEn);
      cy.formController("area_name_bn").type(arData.nameBn);
      cy.formController("zone_id").type(arData.zoneName).type("{enter}");
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      cy.imsId(GRID.BUTTONS.RESET).click();
      var arData = data.mfiAdmin.createAreaFrom;
      cy.formController("area_name_en").type(arData.nameEn);
      cy.formController("area_name_bn").type(arData.nameBn);
      cy.formController("zone_id").type(arData.zoneName).type("{enter}");
      cy.formController("area_code").type(arData.areaCode);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewArea() {
    cy.fixture(this.test_data).then((data) => {
      var arData = data.mfiAdmin.createAreaFrom;
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(arData.nameEn);
      cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
      cy.imsId(GRID.BUTTONS.ACTIONVIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.ui.goBackSuccess);
  }

  turnOffEditMode() {
    cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
    cy.imsId(GRID.BUTTONS.ACTIONEDIT).click();
    cy.imsId(GRID.BUTTONS.TURNEDITMODE).click();
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editArea() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
      cy.imsId(GRID.BUTTONS.ACTIONEDIT).click();
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_YES).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  editResetButton() {
    cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
    cy.imsId(GRID.BUTTONS.ACTIONEDIT).click();
    cy.imsId(GRID.BUTTONS.RESET).click();
    cy.log(messages.ui.editResetMessage);
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      var arData = data.mfiAdmin.createAreaFrom;
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.log(messages.ui.editSubmitMessage);
    });
  }

  editGoBackButton() {
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var arData = data.mfiAdmin.createAreaFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController("status").type(arData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var arData = data.mfiAdmin.createAreaFrom;
      cy.formController("status").type(arData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInAreaName() {
    cy.fixture(this.test_data).then((data) => {
      var arData = data.mfiAdmin.createAreaFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(arData.nameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  gridResetButtonCheck() {
    cy.imsId(GRID.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridRefreshButtonCheck() {
    cy.imsId(GRID.BUTTONS.REFRESH).click();
    cy.log(messages.ui.gridRefreshSuccess);
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var arData = data.mfiAdmin.createAreaFrom;
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      cy.formController("area_name_en").type(arData.nameEn);
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(GRID.CREATE.CREATESUBMIT).click();
    cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
    cy.log(messages.validation.requiredField);
  }

  createGoBackButtonCheck() {
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const arData = data.mfiAdmin.createAreaFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(arData.search);
      cy.imsId(GRID.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(GRID.BUTTONS.PROFILE).click();
    cy.imsId(GRID.BUTTONS.LANGUAGECHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_area = new AreaCreation();