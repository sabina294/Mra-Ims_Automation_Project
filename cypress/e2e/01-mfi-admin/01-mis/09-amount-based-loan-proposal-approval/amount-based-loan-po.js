import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";

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
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
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
      cy.imsId(COMMON.BUTTONS.SUBMIT)
        .click();
      cy.imsId(COMMON.CONFIRMATION.YES)
        .click();
      cy.imsId(COMMON.CONFIRMATION.OK)
        .click();
      cy.log(messages.ui.submitSuccess);

    });
  }

  createWithoutOfficeTypeId() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.formController("role_id").type(ablpaData.roleName).type("{enter}");
      cy.formController("min_loan_amount").type(ablpaData.minLoanAmount);
      cy.formController("max_loan_amount").type(ablpaData.maxLoanAmount);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutRole() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.formController("office_type_id").type(ablpaData.officeTypeId).type("{enter}");
      cy.formController("min_loan_amount").type(ablpaData.minLoanAmount);
      cy.formController("max_loan_amount").type(ablpaData.maxLoanAmount);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMiniLoanAmount() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.formController("office_type_id").type(ablpaData.officeTypeId).type("{enter}");
      cy.formController("role_id").type(ablpaData.roleName).type("{enter}");
      cy.formController("max_loan_amount").type(ablpaData.maxLoanAmount);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMaxiLoanAmount() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.formController("office_type_id").type(ablpaData.officeTypeId).type("{enter}");
      cy.formController("role_id").type(ablpaData.roleName).type("{enter}");
      cy.formController("min_loan_amount").type(ablpaData.minLoanAmount);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutRemarks() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
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
      cy.imsId(COMMON.BUTTONS.SUBMIT)
        .click();
      cy.imsId(COMMON.CONFIRMATION.YES)
        .click();
      cy.imsId(COMMON.CONFIRMATION.OK)
        .click();
      cy.log(messages.ui.submitSuccess);

    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.formController("office_type_id").type(ablpaData.officeTypeId).type("{enter}");
      cy.formController("role_id").type(ablpaData.roleName).type("{enter}");
      cy.formController("min_loan_amount").type(ablpaData.minLoanAmount);
      cy.formController("max_loan_amount").type(ablpaData.maxLoanAmount);
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

  viewAmountBasedLoanProposal() {
    cy.fixture(this.test_data).then((data) => {
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(ablpaData.roleName);
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

  editAmountBasedLoanProposal() {
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
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editResetMessage);
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.formController("office_type_id").type(ablpaData.officeTypeId).type("{enter}");
      cy.formController("role_id").type(ablpaData.roleName).type("{enter}");
      cy.formController("min_loan_amount").type(ablpaData.minLoanAmount);
      cy.formController("max_loan_amount").type(ablpaData.maxLoanAmount);
      cy.formController("status").type(ablpaData.status).type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
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

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
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
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(ablpaData.roleName);
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
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("office_type_id").type(ablpaData.officeTypeId);
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
      const ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(ablpaData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_amount_based_loan =
  new AmountBasedLoanProposalApprovalCreation();