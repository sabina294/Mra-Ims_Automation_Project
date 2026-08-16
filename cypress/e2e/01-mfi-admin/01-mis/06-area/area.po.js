import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";

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
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const arData = data.mfiAdmin.createAreaFrom;
      cy.formController("area_name_en").type(arData.nameEn);
      cy.formController("area_name_bn").type(arData.nameBn);
      cy.formController("zone_id").type(arData.zoneName).type("{enter}");
      cy.formController("area_code").type(arData.areaCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const arData = data.mfiAdmin.createAreaFrom;
      cy.formController("area_name_bn").type(arData.nameBn);
      cy.formController("zone_id").type(arData.zoneName).type("{enter}");
      cy.formController("area_code").type(arData.areaCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const arData = data.mfiAdmin.createAreaFrom;
      cy.formController("area_name_en").type(arData.nameEn);
      cy.formController("zone_id").type(arData.zoneName).type("{enter}");
      cy.formController("area_code").type(arData.areaCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutZone() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const arData = data.mfiAdmin.createAreaFrom;
      cy.formController("area_name_en").type(arData.nameEn);
      cy.formController("area_name_bn").type(arData.nameBn);
      cy.formController("area_code").type(arData.areaCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutAreaCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const arData = data.mfiAdmin.createAreaFrom;
      cy.formController("area_name_en").type(arData.nameEn);
      cy.formController("area_name_bn").type(arData.nameBn);
      cy.formController("zone_id").type(arData.zoneName).type("{enter}");
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
      const arData = data.mfiAdmin.createAreaFrom;
      cy.formController("area_name_en").type(arData.nameEn);
      cy.formController("area_name_bn").type(arData.nameBn);
      cy.formController("zone_id").type(arData.zoneName).type("{enter}");
      cy.formController("area_code").type(arData.areaCode);
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

  viewArea() {
    cy.fixture(this.test_data).then((data) => {
      const arData = data.mfiAdmin.createAreaFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(arData.nameEn);
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

  editArea() {
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
      const arData = data.mfiAdmin.createAreaFrom;
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
      const arData = data.mfiAdmin.createAreaFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(arData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const arData = data.mfiAdmin.createAreaFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(arData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInAreaName() {
    cy.fixture(this.test_data).then((data) => {
      const arData = data.mfiAdmin.createAreaFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(arData.nameEn);
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
      const arData = data.mfiAdmin.createAreaFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("area_name_en").type(arData.nameEn);
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
      const arData = data.mfiAdmin.createAreaFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(arData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridColumnsCheck() {
    cy.log(messages.ui.gridColumns);
  }

  areaNameAscendingSort() {
    cy.contains("Area Name").click();
    cy.log(messages.ui.ascendingSort);
  }

  areaNameDescendingSort() {
    cy.contains("Area Name").click();
    cy.contains("Area Name").click();
    cy.log(messages.ui.descendingSort);
  }

  searchNoResult() {
    cy.fixture(this.test_data).then((data) => {
      const areaData = data.mfiAdmin.createAreaFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(areaData.invalidSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchNoResult);
    });
  }

  partialSearch() {
    cy.fixture(this.test_data).then((data) => {
      const areaData = data.mfiAdmin.createAreaFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(areaData.partialSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.partialSearch);
    });
  }

  clearSearch() {
    cy.fixture(this.test_data).then((data) => {
      const areaData = data.mfiAdmin.createAreaFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(areaData.partialSearch);
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
      const areaData = data.mfiAdmin.createAreaFrom;
      cy.get(".ant-pagination-options").should("be.visible");
      cy.get(".ant-pagination-options .ant-select").click();
      cy.contains(".ant-select-item-option", areaData.pageSize).click();
      cy.log(messages.ui.pageSize);
    });
  }

  addAreaNavigation() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.log(messages.ui.addNavigation);
  }

  createPageFieldCheck() {
    cy.fixture(this.test_data).then((data) => {
      const areaData = data.mfiAdmin.createAreaFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("area_name_en").type(areaData.nameEn);
      cy.formController("area_name_bn").type(areaData.nameBn);
      cy.formController("zone_id").type(areaData.zoneName).type("{enter}");
      cy.formController("area_code").type(areaData.areaCode);
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(areaData.selectStatus)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.createPageFields);
    });
  }

  areaNameSpaceValidation() {
    cy.fixture(this.test_data).then((data) => {
      const areaData = data.mfiAdmin.createAreaFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("area_name_en").type(areaData.spaceOnly);
      cy.formController("area_name_bn").type(areaData.nameBn);
      cy.formController("zone_id").type(areaData.zoneName).type("{enter}");
      cy.formController("area_code").type(areaData.areaCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.spaceValidation);
    });
  }

  areaNameBnSpaceValidation() {
    cy.fixture(this.test_data).then((data) => {
      const areaData = data.mfiAdmin.createAreaFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("area_name_en").type(areaData.nameEn);
      cy.formController("area_name_bn").type(areaData.spaceOnly);
      cy.formController("zone_id").type(areaData.zoneName).type("{enter}");
      cy.formController("area_code").type(areaData.areaCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.spaceValidation);
    });
  }

  defaultStatusCheck() {
    cy.fixture(this.test_data).then((data) => {
      const areaData = data.mfiAdmin.createAreaFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .should("be.visible");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(areaData.status);
      cy.log(messages.ui.defaultStatus);
    });
  }

  statusOptionsCheck() {
    cy.fixture(this.test_data).then((data) => {
      const areaData = data.mfiAdmin.createAreaFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).click();
      cy.contains(areaData.status).should("be.visible");
      cy.contains(areaData.selectStatus).should("be.visible");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.statusOptions);
    });
  }

  duplicateAreaCheck() {
    cy.fixture(this.test_data).then((data) => {
      const areaData = data.mfiAdmin.createAreaFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("area_name_en").type(areaData.duplicateNameEn);
      cy.formController("area_name_bn").type(areaData.duplicateNameBn);
      cy.formController("zone_id").type(areaData.zoneName).type("{enter}");
      cy.formController("area_code").type(areaData.duplicateCode);
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(areaData.statusSelect)
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

export const create_area = new AreaCreation();
