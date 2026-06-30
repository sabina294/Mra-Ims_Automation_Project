import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";

class AmountBasedLoanProposalApprovalCreation {
  test_data = Cypress.env("TEST_DATA");

  gridAmountBasedLoanListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(
        "menu-configuration",
        "submenu-amount-based-loan-proposal-approval"
      );
      cy.log(messages.ui.gridListMessage);
    });
  }

  createAmountBasedLoanProposal() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      // Office Type Select
      cy.formController("office_type_id")
        .click();
      cy.get(".ant-select-dropdown")
        .should("be.visible")
        .contains(".ant-select-item-option", ablpaData.officeTypeId)
        .click();
      // Role Select
      cy.formController("role_id")
        .click();
      cy.get(".ant-select-dropdown")
        .should("be.visible")
        .contains(".ant-select-item-option", ablpaData.roleName)
        .click();
      cy.formController("min_loan_amount")
        .type(ablpaData.minLoanAmount);
      cy.formController("max_loan_amount")
        .type(ablpaData.maxLoanAmount);
      cy.imsId(GRID.CREATE.CREATESUBMIT)
        .click();
      cy.imsId(GRID.CREATE.CONFIRMATION_YES)
        .click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK)
        .click();
      cy.log(messages.ui.submitSuccess);

    });
  }

  createWithoutOfficeTypeId() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.formController("role_id").type(ablpaData.roleName).type("{enter}");
      cy.formController("min_loan_amount").type(ablpaData.minLoanAmount);
      cy.formController("max_loan_amount").type(ablpaData.maxLoanAmount);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutRole() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.formController("office_type_id").type(ablpaData.officeTypeId).type("{enter}");
      cy.formController("min_loan_amount").type(ablpaData.minLoanAmount);
      cy.formController("max_loan_amount").type(ablpaData.maxLoanAmount);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMiniLoanAmount() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.formController("office_type_id").type(ablpaData.officeTypeId).type("{enter}");
      cy.formController("role_id").type(ablpaData.roleName).type("{enter}");
      cy.formController("max_loan_amount").type(ablpaData.maxLoanAmount);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMaxiLoanAmount() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.formController("office_type_id").type(ablpaData.officeTypeId).type("{enter}");
      cy.formController("role_id").type(ablpaData.roleName).type("{enter}");
      cy.formController("min_loan_amount").type(ablpaData.minLoanAmount);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutRemarks() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      // Office Type Select
      cy.formController("office_type_id")
        .click();
      cy.get(".ant-select-dropdown")
        .should("be.visible")
        .contains(".ant-select-item-option", ablpaData.officeTypeId)
        .click();
      // Role Select
      cy.formController("role_id")
        .click();
      cy.get(".ant-select-dropdown")
        .should("be.visible")
        .contains(".ant-select-item-option", ablpaData.roleName)
        .click();
      cy.formController("min_loan_amount")
        .type(ablpaData.minLoanAmount);
      cy.formController("max_loan_amount")
        .type(ablpaData.maxLoanAmount);
      cy.imsId(GRID.CREATE.CREATESUBMIT)
        .click();
      cy.imsId(GRID.CREATE.CONFIRMATION_YES)
        .click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK)
        .click();
      cy.log(messages.ui.submitSuccess);

    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      cy.imsId(GRID.BUTTONS.RESET).click();
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.formController("office_type_id").type(ablpaData.officeTypeId).type("{enter}");
      cy.formController("role_id").type(ablpaData.roleName).type("{enter}");
      cy.formController("min_loan_amount").type(ablpaData.minLoanAmount);
      cy.formController("max_loan_amount").type(ablpaData.maxLoanAmount);
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

  viewAmountBasedLoanProposal() {
    cy.fixture(this.test_data).then((data) => {
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(ablpaData.roleName);
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

  editAmountBasedLoanProposal() {
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
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.ui.editResetMessage);
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      cy.imsId(GRID.BUTTONS.RESET).click();
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.formController("office_type_id").type(ablpaData.officeTypeId).type("{enter}");
      cy.formController("role_id").type(ablpaData.roleName).type("{enter}");
      cy.formController("min_loan_amount").type(ablpaData.minLoanAmount);
      cy.formController("max_loan_amount").type(ablpaData.maxLoanAmount);
      cy.formController("status").type(ablpaData.status).type("{enter}");
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_YES).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.log(messages.ui.editSubmitMessage);
    });
  }

  editGoBackButton() {
    cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
    cy.imsId(GRID.BUTTONS.ACTIONEDIT).click();
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController("status").type(ablpaData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.formController("status").type(ablpaData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInRoleName() {
    cy.fixture(this.test_data).then((data) => {
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(ablpaData.roleName);
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
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      cy.formController("office_type_id").type(ablpaData.officeTypeId);
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(GRID.CREATE.ADD_NEW).click();
    cy.imsId(GRID.CREATE.CREATESUBMIT).click();
    cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.validation.requiredField);
  }

  createGoBackButtonCheck() {
    cy.imsId(GRID.CREATE.ADD_NEW).click();
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(ablpaData.search);
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

export const create_amount_based_loan =
  new AmountBasedLoanProposalApprovalCreation();