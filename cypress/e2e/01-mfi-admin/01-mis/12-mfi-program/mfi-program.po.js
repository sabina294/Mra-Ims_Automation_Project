import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class MfiProgramCreation {
  test_data = Cypress.env("TEST_DATA");

  gridMfiProgramListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.MFI_PROGRAM);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createMfiProgram() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.formController("mfi_program_short_name").type(mpData.programShortName);
      cy.formController("funding_category")
        .type(mpData.fundingCategory)
        .type("{enter}");
      cy.formController("loan_fund_ids").type(mpData.loanFund).type("{enter}");
      cy.get("body").click(0, 0);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mpData.messageSaveMfiProgram)
        .and("be.visible");

      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_short_name").type(mpData.programShortName);
      cy.formController("funding_category")
        .type(mpData.fundingCategory)
        .type("{enter}");
      cy.formController("loan_fund_ids").type(mpData.loanFund).type("{enter}");
      cy.get("body").click(0, 0);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.formController("mfi_program_short_name").type(mpData.programShortName);
      cy.formController("funding_category")
        .type(mpData.fundingCategory)
        .type("{enter}");
      cy.formController("loan_fund_ids").type(mpData.loanFund).type("{enter}");
      cy.get("body").click(0, 0);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mpData.messageSaveMfiProgram)
        .and("be.visible");

      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutShortName() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.formController("funding_category")
        .type(mpData.fundingCategory)
        .type("{enter}");
      cy.formController("loan_fund_ids").type(mpData.loanFund).type("{enter}");
      cy.get("body").click(0, 0);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutFundingCategory() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.formController("mfi_program_short_name").type(mpData.programShortName);
      cy.formController("loan_fund_ids").type(mpData.loanFund).type("{enter}");
      cy.get("body").click(0, 0);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutLoanFund() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.formController("mfi_program_short_name").type(mpData.programShortName);
      cy.formController("funding_category")
        .type(mpData.fundingCategory)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");
      cy.imsId(COMMON.BUTTONS.RESET).click();

      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.formController("mfi_program_short_name").type(mpData.programShortName);
      cy.formController("funding_category")
        .type(mpData.fundingCategory)
        .type("{enter}");
      cy.formController("loan_fund_ids").type(mpData.loanFund).type("{enter}");
      cy.get("body").click(0, 0);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewMfiProgram() {
    cy.fixture(this.test_data).then((data) => {
      const mpData = data.mfiAdmin.createMfiProgramFrom;
      // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mpData.programNameEn);
      // cy.imsId(COMMON.TOGGLES.ACTION).first().click();
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

  editMfiProgram() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.YES).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.editMessage);

  }

  editResetButton() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.editResetMessage);
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mpData.messageUpdateMfiProgram)
        .and("be.visible");
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
      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(mpData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(mpData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInMfiProgramName() {
    cy.fixture(this.test_data).then((data) => {
      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mpData.programNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(
      messages.ui.gridRefreshSuccess
    );
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
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
      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mpData.search);
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
    ["Home", "Configuration", "MFI Program", "List"].forEach((text) => {
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, text).should("be.visible");
    });
    cy.get(COMMON.TABLE.HEAD).should("be.visible");
    cy.log(messages.ui.listPageNavigationCheck);
  }

  gridColumnsCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createMfiProgramFrom: d } }) => {
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
      [1, 2, 4, 5].forEach((index) => {
        cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(index).invoke("text")
          .then((value) => expect(value.trim()).to.not.equal(""));
      });
      cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(6).invoke("text")
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
    cy.location("pathname").should("include", "/mfi-program/create");
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.location("pathname").should("include", "/mfi-program/list");
    cy.log(messages.ui.addNavigation);
  }

  createPageFieldsCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    ["Home", "Configuration", "MFI Program", "Create"].forEach((text) => {
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, text).should("be.visible");
    });
    ["MFI Program Name (English)", "MFI Program Name (Bangla)",
      "MFI Program Short Name", "Funding Category", "MFI Program Id",
      "Loan Fund", "Status"].forEach((label) => {
      cy.contains(COMMON.FORM.LABEL, label).should("be.visible");
    });
    ["mfi_program_name_en", "mfi_program_name_bn", "mfi_program_short_name",
      "funding_category", "loan_fund_ids", COMMON.INPUTS.STATUS_DROPDOWN]
      .forEach((control) => cy.formController(control).should("be.visible"));
    [COMMON.BUTTONS.GO_BACK, COMMON.BUTTONS.RESET, COMMON.BUTTONS.SUBMIT]
      .forEach((button) => cy.imsId(button).should("be.visible"));
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createPageFields);
  }

  requiredAndOptionalFieldsCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    ["MFI Program Name (English)", "MFI Program Short Name", "Funding Category",
      "MFI Program Id", "Loan Fund", "Status"].forEach((label) => {
      cy.contains(COMMON.FORM.LABEL, label)
        .should("have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
    });
    cy.contains(COMMON.FORM.LABEL, "MFI Program Name (Bangla)")
      .should("not.have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.requiredFieldIndicatorCheck);
  }

  defaultStatusCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createMfiProgramFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("contain.text", d.status);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.defaultStatus);
    });
  }

  statusOptionsCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createMfiProgramFrom: d } }) => {
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

  fundingCategorySelectionCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createMfiProgramFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("funding_category").click();
      cy.get(COMMON.SELECT.VISIBLE_DROPDOWN)
        .contains(COMMON.SELECT.OPTION, d.fundingCategory).click();
      cy.formController("funding_category").should("contain.text", d.fundingCategory);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.dropdownSelection);
    });
  }

  loanFundSelectionCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createMfiProgramFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("loan_fund_ids").click();
      cy.get(COMMON.SELECT.VISIBLE_DROPDOWN)
        .contains(COMMON.SELECT.OPTION, d.loanFund).click();
      cy.formController("loan_fund_ids").should("contain.text", d.loanFund);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.dropdownSelection);
    });
  }

  searchNoResultCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createMfiProgramFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(d.invalidSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.BODY)
        .find("tr:not(.ant-table-placeholder):visible").should("have.length", 0);
      cy.log(messages.ui.searchNoResult);
    });
  }

  exactSearchCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createMfiProgramFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(d.existingProgramName);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
        .each(($row) => cy.wrap($row).should("contain.text", d.existingProgramName));
      cy.log(messages.ui.exactSearchCheck);
    });
  }

  clearSearchCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createMfiProgramFrom: d } }) => {
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
    ["MFI Program Name (English)", "MFI Program Name (Bangla)",
      "MFI Program Id", "Funding Category", "MFI Program Short Name",
      "Loan Fund", "Status"].forEach((label) => {
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
    ["mfi_program_name_en", "mfi_program_name_bn", "mfi_program_short_name",
      "funding_category", "loan_fund_ids", COMMON.INPUTS.STATUS_DROPDOWN]
      .forEach((control) => cy.formController(control).should("be.visible"));
    [COMMON.BUTTONS.RESET, COMMON.BUTTONS.SUBMIT, COMMON.BUTTONS.GO_BACK]
      .forEach((button) => cy.imsId(button).should("be.visible"));
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editField);
  }
}

export const create_mfi_program = new MfiProgramCreation();
