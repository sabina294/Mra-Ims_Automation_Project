import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanFundCreation {
  test_data = Cypress.env("TEST_DATA");

  gridLoanFundListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.LOAN_FUND);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createLoanFund() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lfData = data.mfiAdmin.createLoanFundFrom;
      cy.formController("bank_account_id")
        .type(lfData.bankAccount)
        .type("{enter}");
      cy.formController("loan_funding_organization_id")
        .type(lfData.fundingOrgId)
        .type("{enter}");
      cy.formController("amount").type(lfData.amount);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutBankAccount() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lfData = data.mfiAdmin.createLoanFundFrom;
      cy.formController("loan_funding_organization_id")
        .type(lfData.fundingOrgId)
        .type("{enter}");
      cy.formController("amount").type(lfData.amount);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutFundingOrganizationId() {
    cy.fixture(this.test_data).then((data) => {
      const lfData = data.mfiAdmin.createLoanFundFrom;
      cy.formController("bank_account_id")
        .type(lfData.bankAccount)
        .type("{enter}");
      cy.formController("amount").type(lfData.amount);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutAmount() {
    cy.fixture(this.test_data).then((data) => {
      const lfData = data.mfiAdmin.createLoanFundFrom;
      cy.formController("bank_account_id")
        .type(lfData.bankAccount)
        .type("{enter}");
      cy.formController("loan_funding_organization_id")
        .type(lfData.fundingOrgId)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      const lfData = data.mfiAdmin.createLoanFundFrom;
      cy.formController("bank_account_id")
        .type(lfData.bankAccount)
        .type("{enter}");
      cy.formController("loan_funding_organization_id")
        .type(lfData.fundingOrgId)
        .type("{enter}");
      cy.formController("amount").type(lfData.amount);
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

  viewLoanFund() {
    cy.fixture(this.test_data).then((data) => {
      const lfData = data.mfiAdmin.createLoanFundFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lfData.amount);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
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

  editLoanFund() {
    cy.fixture(this.test_data).then((data) => {
      const lfData = data.mfiAdmin.createLoanFundFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lfData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.editSubmitMessage);
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lfData = data.mfiAdmin.createLoanFundFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lfData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lfData = data.mfiAdmin.createLoanFundFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lfData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInLoanFundName() {
    cy.fixture(this.test_data).then((data) => {
      const lfData = data.mfiAdmin.createLoanFundFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lfData.fundingOrgId);
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
      const lfData = data.mfiAdmin.createLoanFundFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("loan_funding_organization_id").type(
        lfData.fundingOrgId
      );
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
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
      const lfData = data.mfiAdmin.createLoanFundFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lfData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }

  listBreadcrumbCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    ["Home", "Configuration", "Loan Fund", "List"].forEach((text) => {
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, text).should("be.visible");
    });
    cy.get(COMMON.TABLE.HEAD).should("be.visible");
    cy.log(messages.ui.listPageNavigationCheck);
  }

  gridColumnsCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createLoanFundFrom: d } }) => {
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
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().within(() => {
      [1, 3].forEach((index) => {
        cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(index).invoke("text")
          .then((value) => expect(value.trim()).to.not.equal(""));
      });
      cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(5).invoke("text")
        .then((amount) => expect(Number(amount.trim())).to.be.greaterThan(0));
      cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(7).invoke("text")
        .then((status) => expect(["Active", "Inactive"]).to.include(status.trim()));
    });
    cy.log(messages.ui.recordStatusCheck);
  }

  firstPagePaginationCheck() {
    cy.get(COMMON.PAGINATION.CONTAINER).should("be.visible");
    cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("have.text", "1");
    cy.get(COMMON.PAGINATION.PREVIOUS_PAGE)
      .should("have.class", COMMON.PAGINATION.DISABLED_CLASS);
    cy.get(COMMON.PAGINATION.PAGE_SIZE_SELECT).should("be.visible");
    cy.log(messages.ui.pagination);
  }

  addNavigationCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.location("pathname").should("include", "/loan-fund/create");
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.location("pathname").should("include", "/loan-fund/list");
    cy.log(messages.ui.addNavigation);
  }

  createPageFieldsCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    ["Home", "Configuration", "Loan Fund", "Create"].forEach((text) => {
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, text).should("be.visible");
    });
    ["Bank Account", "Funding Organization Id", "Loan Fund Id", "Amount",
      "Funding Notes", "Loan Availability Date", "Status"].forEach((label) => {
      cy.contains(COMMON.FORM.LABEL, label).should("be.visible");
    });
    ["bank_account_id", "loan_funding_organization_id", "amount",
      COMMON.INPUTS.STATUS_DROPDOWN]
      .forEach((control) => cy.formController(control).should("be.visible"));
    [COMMON.BUTTONS.GO_BACK, COMMON.BUTTONS.RESET, COMMON.BUTTONS.SUBMIT]
      .forEach((button) => cy.imsId(button).should("be.visible"));
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createPageFields);
  }

  requiredAndOptionalFieldsCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    ["Bank Account", "Funding Organization Id", "Loan Fund Id", "Amount", "Status"]
      .forEach((label) => {
        cy.contains(COMMON.FORM.LABEL, label)
          .should("have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
      });
    ["Funding Notes", "Loan Availability Date"].forEach((label) => {
      cy.contains(COMMON.FORM.LABEL, label)
        .should("not.have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
    });
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.requiredFieldIndicatorCheck);
  }

  defaultStatusCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createLoanFundFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("contain.text", d.status);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.defaultStatus);
    });
  }

  statusOptionsCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createLoanFundFrom: d } }) => {
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

  bankAccountSelectionCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createLoanFundFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("bank_account_id").click();
      cy.get(COMMON.SELECT.VISIBLE_DROPDOWN)
        .contains(COMMON.SELECT.OPTION, d.bankAccount).click();
      cy.formController("bank_account_id").should("contain.text", d.bankAccount);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.dropdownSelection);
    });
  }

  fundingOrganizationSelectionCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createLoanFundFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("loan_funding_organization_id").click();
      cy.get(COMMON.SELECT.VISIBLE_DROPDOWN)
        .contains(COMMON.SELECT.OPTION, d.fundingOrgId).click();
      cy.formController("loan_funding_organization_id").should("contain.text", d.fundingOrgId);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.dropdownSelection);
    });
  }

  searchNoResultCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createLoanFundFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(d.invalidSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.BODY)
        .find("tr:not(.ant-table-placeholder):visible").should("have.length", 0);
      cy.log(messages.ui.searchNoResult);
    });
  }

  exactSearchCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createLoanFundFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(d.existingLoanFundId);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
        .each(($row) => cy.wrap($row).should("contain.text", d.existingLoanFundId));
      cy.log(messages.ui.exactSearchCheck);
    });
  }

  clearSearchCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createLoanFundFrom: d } }) => {
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
    ["Loan Fund Id", "Funding Organization Id", "Bank Account", "Amount",
      "Funding Notes", "Loan Availability Date", "Status"].forEach((label) => {
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, label).should("be.visible");
    });
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).should("be.visible");
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.viewField);
  }

  editModeFieldsCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    ["Bank Account", "Funding Organization Id", "Loan Fund Id", "Amount",
      "Funding Notes", "Loan Availability Date", "Status"].forEach((label) => {
      cy.contains(COMMON.FORM.LABEL, label).should("be.visible");
    });
    ["bank_account_id", "loan_funding_organization_id", "amount",
      COMMON.INPUTS.STATUS_DROPDOWN]
      .forEach((control) => cy.formController(control).should("be.visible"));
    [COMMON.BUTTONS.RESET, COMMON.BUTTONS.SUBMIT, COMMON.BUTTONS.GO_BACK]
      .forEach((button) => cy.imsId(button).should("be.visible"));
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editField);
  }
}

export const create_loan_fund = new LoanFundCreation();
