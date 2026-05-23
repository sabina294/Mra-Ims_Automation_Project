import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";

class ZoneCreation {
  test_data = Cypress.env("TEST_DATA");

  gridZoneListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-zone");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createZone() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("zone_name_en").type(zoData.nameEn);
      cy.formController("zone_name_bn").type(zoData.nameBn);
      cy.formController("region_id").type(zoData.regionName).type("{enter}");
      cy.formController("zone_code").type(zoData.zoneCode);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_YES).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("zone_name_bn").type(zoData.nameBn);
      cy.formController("region_id").type(zoData.regionName).type("{enter}");
      cy.formController("zone_code").type(zoData.zoneCode);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("zone_name_en").type(zoData.nameEn);
      cy.formController("region_id").type(zoData.regionName).type("{enter}");
      cy.formController("zone_code").type(zoData.zoneCode);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutRegion() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("zone_name_en").type(zoData.nameEn);
      cy.formController("zone_name_bn").type(zoData.nameBn);
      cy.formController("zone_code").type(zoData.zoneCode);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutZoneCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("zone_name_en").type(zoData.nameEn);
      cy.formController("zone_name_bn").type(zoData.nameBn);
      cy.formController("region_id").type(zoData.regionName).type("{enter}");
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
      var zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("zone_name_en").type(zoData.nameEn);
      cy.formController("zone_name_bn").type(zoData.nameBn);
      cy.formController("region_id").type(zoData.regionName).type("{enter}");
      cy.formController("zone_code").type(zoData.zoneCode);
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

  viewZone() {
    cy.fixture(this.test_data).then((data) => {
      var zoData = data.mfiAdmin.createZoneFrom;
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(zoData.nameEn);
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

  editZone() {
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
      var zoData = data.mfiAdmin.createZoneFrom;
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
      var zoData = data.mfiAdmin.createZoneFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController("status").type(zoData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("status").type(zoData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInZoneName() {
    cy.fixture(this.test_data).then((data) => {
      var zoData = data.mfiAdmin.createZoneFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(zoData.nameEn);
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
      var zoData = data.mfiAdmin.createZoneFrom;
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      cy.formController("zone_name_en").type(zoData.nameEn);
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
      const zoData = data.mfiAdmin.createZoneFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(zoData.search);
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

export const create_zone = new ZoneCreation();