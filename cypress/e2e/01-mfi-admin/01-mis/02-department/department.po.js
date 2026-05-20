import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class DepartmentCreation {
  test_data = Cypress.env("TEST_DATA");
  gridDepartmentListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-department");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createDepartment() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController("name_en").type(depData.nameEn);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_YES).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController("name_bn").type(depData.nameBn);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController("name_en").type(depData.nameEn);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_YES).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      cy.imsId(GRID.BUTTONS.RESET).click();
      var depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController("name_en").type(depData.nameEn);
      cy.formController("name_bn").type(depData.nameBn);
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

  viewDepartment() {
    cy.fixture(this.test_data).then((data) => {
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

  editDepartment() {
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
      var depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController("status").type(depData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController("status").type(depData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInDepartmentName() {
    cy.fixture(this.test_data).then((data) => {
      var depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(depData.nameEn);
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
      var depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      cy.formController("name_en").type(depData.nameEn);
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
      const depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(depData.search);
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

export const create_department = new DepartmentCreation();
