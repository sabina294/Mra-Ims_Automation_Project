import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";

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
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("zone_name_en").type(zoData.nameEn);
      cy.formController("zone_name_bn").type(zoData.nameBn);
      cy.formController("region_id").type(zoData.regionName).type("{enter}");
      cy.formController("zone_code").type(zoData.zoneCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("zone_name_bn").type(zoData.nameBn);
      cy.formController("region_id").type(zoData.regionName).type("{enter}");
      cy.formController("zone_code").type(zoData.zoneCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("zone_name_en").type(zoData.nameEn);
      cy.formController("region_id").type(zoData.regionName).type("{enter}");
      cy.formController("zone_code").type(zoData.zoneCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutRegion() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("zone_name_en").type(zoData.nameEn);
      cy.formController("zone_name_bn").type(zoData.nameBn);
      cy.formController("zone_code").type(zoData.zoneCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutZoneCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("zone_name_en").type(zoData.nameEn);
      cy.formController("zone_name_bn").type(zoData.nameBn);
      cy.formController("region_id").type(zoData.regionName).type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      const zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("zone_name_en").type(zoData.nameEn);
      cy.formController("zone_name_bn").type(zoData.nameBn);
      cy.formController("region_id").type(zoData.regionName).type("{enter}");
      cy.formController("zone_code").type(zoData.zoneCode);
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

  viewZone() {
    cy.fixture(this.test_data).then((data) => {
      const zoData = data.mfiAdmin.createZoneFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(zoData.nameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);
  }

  turnOffEditMode() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editZone() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  editResetButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.editResetMessage);
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      const zoData = data.mfiAdmin.createZoneFrom;
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.editSubmitMessage);
    });
  }

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const zoData = data.mfiAdmin.createZoneFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(zoData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const zoData = data.mfiAdmin.createZoneFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(zoData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInZoneName() {
    cy.fixture(this.test_data).then((data) => {
      const zoData = data.mfiAdmin.createZoneFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(zoData.nameEn);
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
      const zoData = data.mfiAdmin.createZoneFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("zone_name_en").type(zoData.nameEn);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.validation.requiredField);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const zoData = data.mfiAdmin.createZoneFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(zoData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridColumnsCheck() {
    cy.log(messages.ui.gridColumns);
  }

  zoneNameAscendingSort() {
    cy.contains("Zone Name").click();
    cy.log(messages.ui.ascendingSort);
  }

  zoneNameDescendingSort() {
    cy.contains("Zone Name").click();
    cy.contains("Zone Name").click();
    cy.log(messages.ui.descendingSort);
  }

  searchNoResult() {
    cy.fixture(this.test_data).then((data) => {
      const zoneData = data.mfiAdmin.createZoneFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(zoneData.invalidSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchNoResult);
    });
  }

  partialSearch() {
    cy.fixture(this.test_data).then((data) => {
      const zoneData = data.mfiAdmin.createZoneFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(zoneData.partialSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.partialSearch);
    });
  }

  clearSearch() {
    cy.fixture(this.test_data).then((data) => {
      const zoneData = data.mfiAdmin.createZoneFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(zoneData.partialSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear();
      cy.log(messages.ui.clearSearch);
    });
  }

  paginationCheck() {
    cy.get(".ant-pagination").should("be.visible");
    cy.log(messages.ui.pagination);
  }

  pageSizeCheck() {
    cy.fixture(this.test_data).then((data) => {
      const zoneData = data.mfiAdmin.createZoneFrom;
      cy.get(".ant-pagination-options").should("be.visible");
      cy.get(".ant-pagination-options .ant-select").click();
      cy.contains(".ant-select-item-option", zoneData.pageSize).click();
      cy.log(messages.ui.pageSize);
    });
  }

  addZoneNavigation() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.log(messages.ui.addNavigation);
  }

  createPageFieldCheck() {
    cy.fixture(this.test_data).then((data) => {
      const zoneData = data.mfiAdmin.createZoneFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("zone_name_en").type(zoneData.nameEn);
      cy.formController("zone_name_bn").type(zoneData.nameBn);
      cy.formController("region_id").type(zoneData.regionName).type("{enter}");
      cy.formController("zone_code").type(zoneData.zoneCode);
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(zoneData.selectStatus)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.createPageFields);
    });
  }

  zoneNameSpaceValidation() {
    cy.fixture(this.test_data).then((data) => {
      const zoneData = data.mfiAdmin.createZoneFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("zone_name_en").type(zoneData.spaceOnly);
      cy.formController("zone_name_bn").type(zoneData.nameBn);
      cy.formController("region_id").type(zoneData.regionName).type("{enter}");
      cy.formController("zone_code").type(zoneData.zoneCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.spaceValidation);
    });
  }

  zoneNameBnSpaceValidation() {
    cy.fixture(this.test_data).then((data) => {
      const zoneData = data.mfiAdmin.createZoneFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("zone_name_en").type(zoneData.nameEn);
      cy.formController("zone_name_bn").type(zoneData.spaceOnly);
      cy.formController("region_id").type(zoneData.regionName).type("{enter}");
      cy.formController("zone_code").type(zoneData.zoneCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.spaceValidation);
    });
  }

  defaultStatusCheck() {
    cy.fixture(this.test_data).then((data) => {
      const zoneData = data.mfiAdmin.createZoneFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .should("be.visible");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(zoneData.status);
      cy.log(messages.ui.defaultStatus);
    });
  }

  statusOptionsCheck() {
    cy.fixture(this.test_data).then((data) => {
      const zoneData = data.mfiAdmin.createZoneFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).click();
      cy.contains(zoneData.status).should("be.visible");
      cy.contains(zoneData.selectStatus).should("be.visible");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.statusOptions);
    });
  }

  duplicateZoneCheck() {
    cy.fixture(this.test_data).then((data) => {
      const zoneData = data.mfiAdmin.createZoneFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("zone_name_en").type(zoneData.duplicateNameEn);
      cy.formController("zone_name_bn").type(zoneData.duplicateNameBn);
      cy.formController("region_id").type(zoneData.regionName).type("{enter}");
      cy.formController("zone_code").type(zoneData.duplicateCode);
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(zoneData.statusSelect)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.duplicate);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitch);
  }
}

export const create_zone = new ZoneCreation();
