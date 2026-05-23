import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";

class RegionCreation {
  test_data = Cypress.env("TEST_DATA");

  gridRegionListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-region");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createRegion() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var regData = data.mfiAdmin.createRegionFrom;
      cy.formController("region_name_en").type(regData.nameEn);
      cy.formController("region_name_bn").type(regData.nameBn);
      cy.formController("region_code").type(regData.regionCode);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_YES).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var regData = data.mfiAdmin.createRegionFrom;
      cy.formController("region_name_bn").type(regData.nameBn);
      cy.formController("region_code").type(regData.regionCode);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var regData = data.mfiAdmin.createRegionFrom;
      cy.formController("region_name_en").type(regData.nameEn);
      cy.formController("region_code").type(regData.regionCode);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var regData = data.mfiAdmin.createRegionFrom;
      cy.formController("region_name_en").type(regData.nameEn);
      cy.formController("region_name_bn").type(regData.nameBn);
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
      var regData = data.mfiAdmin.createRegionFrom;
      cy.formController("region_name_en").type(regData.nameEn);
      cy.formController("region_name_bn").type(regData.nameBn);
      cy.formController("region_code").type(regData.regionCode);
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

  viewRegion() {
    cy.fixture(this.test_data).then((data) => {
      var regData = data.mfiAdmin.createRegionFrom;
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(regData.nameEn);
      cy.imsId(GRID.BUTTONS.SEARCH).click();
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
    cy.imsId(GRID.BUTTONS.ACTIONVIEW).click();
    cy.imsId(GRID.BUTTONS.TURNEDITMODE).click();
    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editRegion() {
    cy.fixture(this.test_data).then((data) => {
      var regData = data.mfiAdmin.createRegionFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(regData.search);
      cy.imsId(GRID.BUTTONS.SEARCH).click();
      cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
      cy.imsId(GRID.BUTTONS.ACTIONEDIT).click();
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_YES).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  editResetButton() {
    cy.imsId(GRID.BUTTONS.RESET).click();
    cy.log(messages.ui.editResetMessage);
  }

  editSubmitButton() {
    cy.imsId(GRID.CREATE.CREATESUBMIT).click();
    cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
    cy.log(messages.ui.editSubmitMessage);
  }

  editGoBackButton() {
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var regData = data.mfiAdmin.createRegionFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController("status").type(regData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var regData = data.mfiAdmin.createRegionFrom;
      cy.formController("status").type(regData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInRegionName() {
    cy.fixture(this.test_data).then((data) => {
      var regData = data.mfiAdmin.createRegionFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(regData.nameEn);
      cy.imsId(GRID.BUTTONS.SEARCH).click();
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
      var regData = data.mfiAdmin.createRegionFrom;
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      cy.formController("region_name_en").type(regData.nameEn);
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
      const regData = data.mfiAdmin.createRegionFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(regData.search);
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

export const create_region = new RegionCreation();