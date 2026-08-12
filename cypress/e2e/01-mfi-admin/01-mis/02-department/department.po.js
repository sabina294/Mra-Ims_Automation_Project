import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class DepartmentCreation {
  test_data = Cypress.env("TEST_DATA");

  gridDepartmentListPage() {
    cy.selectMenu("menu-configuration", "submenu-department");
    cy.log(messages.ui.gridListMessage);
  }

  createDepartment() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(depData.nameEn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController(COMMON.INPUTS.NAME_BN).type(depData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(depData.nameEn);
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
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(depData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(depData.nameBn);
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

  viewDepartment() {
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.log(messages.ui.viewMessage);

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

  editDepartment() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.YES).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.editMessage);
  }

  editResetButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.editResetMessage);
  }

  editSubmitButton() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.editSubmitMessage);
  }

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(depData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(depData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInDepartmentName() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(depData.nameEn);
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
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(depData.nameEn);
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
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(depData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridColumnsCheck() {
    cy.log(messages.ui.gridColumnsMessage);
  }

  departmentNameAscendingSort() {
    cy.contains("Department Name").click();
    cy.log(messages.ui.departmentNameAscendingSortMessage);
  }

  departmentNameDescendingSort() {
    cy.contains("Department Name").click();
    cy.contains("Department Name").click();
    cy.log(messages.ui.departmentNameDescendingSortMessage);
  }

  searchNoResult() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(depData.invalidSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchNoResultMessage);
    });
  }

  partialSearch() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(depData.partialSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.partialSearchMessage);
    });
  }

  clearSearch() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(depData.partialSearch);
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
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.get(".ant-pagination-options").should("be.visible");
      cy.get(".ant-pagination-options .ant-select").click();
      cy.contains(".ant-select-item-option", depData.pageSize).click();
      cy.log(messages.ui.pageSizeMessage);
    });
  }

  addDepartmentNavigation() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.log(messages.ui.addDepartmentNavigationMessage);
  }

  createPageFieldCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.NAME_EN).should("be.visible");
      cy.formController(COMMON.INPUTS.NAME_BN).should("be.visible");
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(depData.selectStatus)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.createPageFieldMessage);
    });
  }

  departmentNameSpaceValidation() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(depData.spaceOnly);
      cy.formController(COMMON.INPUTS.NAME_BN).type(depData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.spaceValidationMessage);
    });
  }

  departmentNameBnSpaceValidation() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(depData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(depData.spaceOnly);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.spaceValidationMessage);
    });
  }

  defaultStatusCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("be.visible");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(depData.status);
      cy.log(messages.ui.defaultStatusMessage);
    });
  }

  statusOptionsCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).click();
      cy.contains(depData.status).should("be.visible");
      cy.contains(depData.selectStatus).should("be.visible");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.statusOptionsMessage);
    });
  }

  duplicateDepartmentCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(depData.duplicateNameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(depData.duplicateNameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.duplicateDepartmentMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_department = new DepartmentCreation();
