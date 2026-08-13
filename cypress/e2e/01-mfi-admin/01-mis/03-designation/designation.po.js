import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";

class DesignationCreation {
  test_data = Cypress.env("TEST_DATA");

  gridDesignationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-designation");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createDesignation() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.formController("emp_designation_en").type(desData.nameEn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.formController("emp_designation_bn").type(desData.nameBn);
      cy.formController("emp_designation_short_name").type(desData.shortName);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.formController("emp_designation_en").type(desData.nameEn);
      cy.formController("emp_designation_short_name").type(desData.shortName);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutShortName() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.formController("emp_designation_en").type(desData.nameEn);
      cy.formController("emp_designation_bn").type(desData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.formController("emp_designation_en").type(desData.nameEn);
      cy.formController("emp_designation_bn").type(desData.nameBn);
      cy.formController("emp_designation_short_name").type(desData.shortName);
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

  viewDesignation() {
    cy.fixture(this.test_data).then((data) => {
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(desData.nameEn);
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

  editDesignation() {
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
      const desData = data.mfiAdmin.createDesignationFrom;
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
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(desData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(desData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInDesignationName() {
    cy.fixture(this.test_data).then((data) => {
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(desData.nameEn);
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
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("emp_designation_en").type(desData.nameEn);
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
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(desData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridColumnsCheck() {
    cy.log(messages.ui.gridColumnsMessage);
  }

  designationNameAscendingSort() {
    cy.contains("Designation Name").click();
    cy.log(messages.ui.designationNameAscendingSortMessage);
  }

  designationNameDescendingSort() {
    cy.contains("Designation Name").click();
    cy.contains("Designation Name").click();
    cy.log(messages.ui.designationNameDescendingSortMessage);
  }

  searchNoResult() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(designationData.invalidSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();

      cy.log(messages.ui.searchNoResultMessage);
    });
  }

  partialSearch() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(designationData.partialSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();

      cy.log(messages.ui.partialSearchMessage);
    });
  }

  clearSearch() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(designationData.partialSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear();
      cy.log(messages.ui.clearSearchMessage);
    });
  }

  paginationCheck() {
    cy.get(".ant-pagination").should("be.visible");
    cy.log(messages.ui.paginationMessage);
  }

  pageSizeCheck() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;
      cy.get(".ant-pagination-options").should("be.visible");
      cy.get(".ant-pagination-options .ant-select").click();
      cy.contains(
        ".ant-select-item-option",
        designationData.pageSize
      ).click();

      cy.log(messages.ui.pageSizeMessage);
    });
  }

  addDesignationNavigation() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.log(messages.ui.addDesignationNavigationMessage);
  }

  createPageFieldCheck() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("emp_designation_en").type(designationData.nameEn);
      cy.formController("emp_designation_bn").type(designationData.nameBn);
      cy.formController("emp_designation_short_name").type(designationData.shortName);
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(designationData.selectStatus)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.createPageFieldMessage);
    });
  }

  designationNameSpaceValidation() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("emp_designation_en")
        .type(designationData.spaceOnly);
      cy.formController("emp_designation_bn")
        .type(designationData.nameBn);
      cy.formController("emp_designation_short_name")
        .type(designationData.shortName);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.spaceValidationMessage);
    });
  }

  designationNameBnSpaceValidation() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("emp_designation_en")
        .type(designationData.nameEn);
      cy.formController("emp_designation_bn")
        .type(designationData.spaceOnly);
      cy.formController("emp_designation_short_name")
        .type(designationData.shortName);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.spaceValidationMessage);
    });
  }

  defaultStatusCheck() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .should("be.visible");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(designationData.status);
      cy.log(messages.ui.defaultStatusMessage);
    });
  }

  statusOptionsCheck() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).click();
      cy.contains(designationData.status)
        .should("be.visible");
      cy.contains(designationData.selectStatus)
        .should("be.visible");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.statusOptionsMessage);
    });
  }

  duplicateDesignationCheck() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("emp_designation_en")
        .type(designationData.duplicateNameEn);
      cy.formController("emp_designation_bn")
        .type(designationData.duplicateNameBn);
      cy.formController("emp_designation_short_name")
        .type(designationData.duplicateShortName);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.duplicateDesignationMessage);
    });
  }
  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_designation = new DesignationCreation();