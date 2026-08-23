import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";

class AmountBasedLoanProposalApprovalCreation {
  test_data = Cypress.env("TEST_DATA");

  gridAmountBasedLoanListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.AMOUNT_BASED_LOAN_PROPOSAL_APPROVAL);
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
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(ablpaData.status).type("{enter}");
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
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(ablpaData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(ablpaData.statusSelect).type("{enter}");
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

  listBreadcrumbCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    ["Home", "Configuration", "Amount Based Loan Proposal Approval", "List"]
      .forEach((text) => cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, text).should("be.visible"));
    cy.get(COMMON.TABLE.HEAD).should("be.visible");
    cy.log(messages.ui.listPageNavigationCheck);
  }

  gridColumnsCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createAmountBasedLoanFrom: d } }) => {
      cy.get(COMMON.TABLE.HEAD).within(() => {
        d.gridColumns.forEach((column) => {
          cy.contains(COMMON.TABLE.HEADER_CELL, column).should("be.visible");
        });
      });
      cy.log(messages.ui.gridColumns);
    });
  }

  gridRecordDataCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).each(($row) => {
      const cells = $row.find(COMMON.TABLE.VISIBLE_CELLS);
      const minimum = Number(cells.eq(5).text().trim());
      const maximum = Number(cells.eq(6).text().trim());
      const status = cells.eq(7).text().trim();
      expect(minimum).to.be.at.least(0);
      expect(maximum).to.be.at.least(minimum);
      expect(["Active", "Inactive"]).to.include(status);
    });
    cy.log(messages.ui.recordStatusCheck);
  }

  firstPagePaginationCheck() {
    cy.get(COMMON.PAGINATION.CONTAINER).should("be.visible");
    cy.get(COMMON.PAGINATION.PAGE_ITEMS).first().click();
    cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("have.text", "1");
    cy.get(COMMON.PAGINATION.PREVIOUS_PAGE)
      .should("have.class", COMMON.PAGINATION.DISABLED_CLASS);
    cy.log(messages.ui.pagination);
  }

  addNavigationCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.location("pathname").should("include", "/amount-based-loan-proposal-approval/create");
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.location("pathname").should("include", "/amount-based-loan-proposal-approval/list");
    cy.log(messages.ui.addNavigation);
  }

  createPageFieldsCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    ["Home", "Configuration", "Amount Based Loan Proposal Approval", "Create"]
      .forEach((text) => cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, text).should("be.visible"));
    ["office_type_id", "role_id", "min_loan_amount", "max_loan_amount", "remarks",
      COMMON.INPUTS.STATUS_DROPDOWN]
      .forEach((control) => cy.formController(control).should("be.visible"));
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createPageFields);
  }

  requiredAndOptionalFieldsCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    ["Office Type ID", "Role", "Minimum Loan Amount", "Maximum Loan Amount", "Status"]
      .forEach((label) => {
        cy.contains(COMMON.FORM.LABEL, label)
          .should("have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
      });
    cy.contains(COMMON.FORM.LABEL, "Remarks")
      .should("not.have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.requiredFieldIndicatorCheck);
  }

  defaultStatusCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createAmountBasedLoanFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("contain.text", d.status);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.defaultStatus);
    });
  }

  statusOptionsCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createAmountBasedLoanFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).click();
      cy.get(COMMON.SELECT.VISIBLE_DROPDOWN).within(() => {
        cy.contains(COMMON.SELECT.OPTION, d.status).should("be.visible");
        cy.contains(COMMON.SELECT.OPTION, d.selectStatus).should("be.visible");
      });
      cy.get(COMMON.PAGE.BODY).click(0, 0);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.statusOptions);
    });
  }

  officeTypeAndRoleSelectionCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createAmountBasedLoanFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("office_type_id").click();
      cy.get(COMMON.SELECT.VISIBLE_DROPDOWN)
        .contains(COMMON.SELECT.OPTION, d.officeTypeId).click();
      cy.formController("office_type_id").should("contain.text", d.officeTypeId);
      cy.formController("role_id").click();
      cy.get(COMMON.SELECT.VISIBLE_DROPDOWN)
        .contains(COMMON.SELECT.OPTION, d.roleName).click();
      cy.formController("role_id").should("contain.text", d.roleName);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.dependentDropdown);
    });
  }

  searchNoResultCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createAmountBasedLoanFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(d.invalidSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.BODY).find("tr:not(.ant-table-placeholder):visible")
        .should("have.length", 0);
      cy.log(messages.ui.searchNoResult);
    });
  }

  exactSearchCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createAmountBasedLoanFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(d.existingRole);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
        .each(($row) => cy.wrap($row).should("contain.text", d.existingRole));
      cy.log(messages.ui.exactSearchCheck);
    });
  }

  clearSearchCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createAmountBasedLoanFrom: d } }) => {
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(d.invalidSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
      cy.log(messages.ui.clearSearch);
    });
  }

  viewDetailsCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    ["Office Type ID", "Office Type", "Role ID", "Role", "Minimum Loan Amount",
      "Maximum Loan Amount", "Remarks", "Status"]
      .forEach((label) => cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, label).should("be.visible"));
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.viewField);
  }

  editModeFieldsCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    ["office_type_id", "role_id", "min_loan_amount", "max_loan_amount", "remarks",
      COMMON.INPUTS.STATUS_DROPDOWN]
      .forEach((control) => cy.formController(control).should("be.visible"));
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editField);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_amount_based_loan =
  new AmountBasedLoanProposalApprovalCreation();
