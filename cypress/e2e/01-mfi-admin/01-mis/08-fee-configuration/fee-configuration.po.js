import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";

class FeeConfigurationCreation {
  test_data = Cypress.env("TEST_DATA");

  gridFeeConfigurationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.FEE_CONFIGURATION);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createFeeConfiguration() {
  cy.fixture(this.test_data).then((data) => {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    const fcData = data.mfiAdmin.createFeeConfigurationFrom;
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;
    cy.formController("fee_collection_code")
      .type(FeeCollectionCode);
    cy.formController("fee_type_name_en")
      .type(fcData.feeTypeNameEn);
    cy.formController("amount")
      .type(fcData.amount);
    // Ledger Select
    cy.formController("ledger_id")
      .click();
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .within(() => {
        cy.get(".ant-select-item-option-content")
          .contains(fcData.ledger)
          .click();
      });
    cy.wait(2000);
    cy.imsId(COMMON.BUTTONS.SUBMIT)
      .click();
    cy.imsId(COMMON.CONFIRMATION.YES)
      .click();
    cy.imsId(COMMON.CONFIRMATION.OK)
      .click();
    cy.log(messages.ui.submitSuccess);
  });
}

  createWitoutCollCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.formController("fee_type_name_en").type(fcData.feeTypeNameEn);
      cy.formController("amount").type(fcData.amount);
      cy.formController("ledger_id").type(fcData.ledger).type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const fcData = data.mfiAdmin.createFeeConfigurationFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;
      cy.formController("fee_collection_code").type(FeeCollectionCode);
      cy.formController("amount").type(fcData.amount);
      cy.formController("ledger_id").type(fcData.ledger).type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
     cy.fixture(this.test_data).then((data) => {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    const fcData = data.mfiAdmin.createFeeConfigurationFrom;
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;
    cy.formController("fee_collection_code")
      .type(FeeCollectionCode);
    cy.formController("fee_type_name_en")
      .type(fcData.feeTypeNameEn);
    cy.formController("amount")
      .type(fcData.amount);
    // Ledger Select
    cy.formController("ledger_id")
      .click();
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .within(() => {
        cy.get(".ant-select-item-option-content")
          .contains(fcData.ledger)
          .click();
      });
    cy.wait(2000);
    cy.imsId(COMMON.BUTTONS.SUBMIT)
      .click();
    cy.imsId(COMMON.CONFIRMATION.YES)
      .click();
    cy.imsId(COMMON.CONFIRMATION.OK)
      .click();
    cy.log(messages.ui.submitSuccess);
  });
  }

  createWithoutAmount() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const fcData = data.mfiAdmin.createFeeConfigurationFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;
      cy.formController("fee_collection_code").type(FeeCollectionCode);
      cy.formController("fee_type_name_en").type(fcData.feeTypeNameEn);
      cy.formController("ledger_id").type(fcData.ledger).type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutLedger() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const fcData = data.mfiAdmin.createFeeConfigurationFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;
      cy.formController("fee_collection_code").type(FeeCollectionCode);
      cy.formController("fee_type_name_en").type(fcData.feeTypeNameEn);
      cy.formController("amount").type(fcData.amount);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

   createWithoutSubledger() {
  cy.fixture(this.test_data).then((data) => {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    const fcData = data.mfiAdmin.createFeeConfigurationFrom;
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;
    cy.formController("fee_collection_code")
      .type(FeeCollectionCode);
    cy.formController("fee_type_name_en")
      .type(fcData.feeTypeNameEn);
    cy.formController("amount")
      .type(fcData.amount);
    // Ledger Select
    cy.formController("ledger_id")
      .click();
    cy.get(".ant-select-dropdown")
      .should("be.visible")
      .within(() => {
        cy.get(".ant-select-item-option-content")
          .contains(fcData.ledger)
          .click();
      });
    cy.wait(2000);
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
      const fcData = data.mfiAdmin.createFeeConfigurationFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;
      cy.formController("fee_collection_code").type(FeeCollectionCode);
      cy.formController("fee_type_name_en").type(fcData.feeTypeNameEn);
      cy.formController("amount").type(fcData.amount);
      cy.formController("ledger_id").type(fcData.ledger).type("{enter}");
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

  viewFeeConfiguration() {
    cy.fixture(this.test_data).then((data) => {
      const fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(fcData.feeTypeNameEn);
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

  editFeeConfiguration() {
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
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
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
      const fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(fcData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(fcData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInFeeConfigurationName() {
    cy.fixture(this.test_data).then((data) => {
      const fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(fcData.feeTypeNameEn);
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
      const fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("fee_type_name_en").type(fcData.feeTypeNameEn);
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
      const fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(fcData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  listBreadcrumbCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    ["Home", "Configuration", "Fee Configuration", "List"].forEach((text) => {
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, text).should("be.visible");
    });
    cy.get(COMMON.TABLE.HEAD).should("be.visible");
    cy.log(messages.ui.listPageNavigationCheck);
  }

  gridColumnsCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createFeeConfigurationFrom: d } }) => {
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
      cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(1).invoke("text")
        .then((code) => expect(code.trim()).to.not.equal(""));
      cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(5).invoke("text")
        .then((amount) => expect(Number(amount.trim())).to.be.at.least(0));
      cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(7).invoke("text")
        .then((status) => expect(["Active", "Inactive"]).to.include(status.trim()));
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

  addFeeConfigurationNavigationCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.location("pathname").should("include", "/fee-configuration/create");
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.location("pathname").should("include", "/fee-configuration/list");
    cy.log(messages.ui.addNavigation);
  }

  createPageFieldsCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    ["Home", "Configuration", "Fee Configuration", "Create"].forEach((text) => {
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, text).should("be.visible");
    });
    [
      "fee_collection_code",
      "fee_type_name_en",
      "fee_type_name_bn",
      "amount",
      "ledger_id",
      "subledger_id",
      COMMON.INPUTS.STATUS_DROPDOWN,
    ].forEach((control) => cy.formController(control).should("be.visible"));
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createPageFields);
  }

  requiredAndOptionalFieldsCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    ["Fee Collection Code", "Fee Type Name (English)", "Amount", "Ledger", "Status"]
      .forEach((label) => {
        cy.contains(COMMON.FORM.LABEL, label)
          .should("have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
      });
    ["Fee Type Name (Bangla)", "Subledger"].forEach((label) => {
      cy.contains(COMMON.FORM.LABEL, label)
        .should("not.have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
    });
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.requiredFieldIndicatorCheck);
  }

  defaultStatusCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createFeeConfigurationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .should("contain.text", d.status);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.defaultStatus);
    });
  }

  statusOptionsCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createFeeConfigurationFrom: d } }) => {
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

  ledgerSelectionCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createFeeConfigurationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("ledger_id").click();
      cy.get(COMMON.SELECT.VISIBLE_DROPDOWN)
        .contains(COMMON.SELECT.OPTION, d.ledger).click();
      cy.formController("ledger_id").should("contain.text", d.ledger);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.dropdownSelection);
    });
  }

  searchNoResultCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createFeeConfigurationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(d.invalidSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.BODY)
        .find("tr:not(.ant-table-placeholder):visible")
        .should("have.length", 0);
      cy.log(messages.ui.searchNoResult);
    });
  }

  exactSearchCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createFeeConfigurationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(d.existingFeeName);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
        .each(($row) => cy.wrap($row).should("contain.text", d.existingFeeName));
      cy.log(messages.ui.exactSearchCheck);
    });
  }

  clearSearchCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createFeeConfigurationFrom: d } }) => {
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
    ["Fee Collection Code", "Fee Type Name (English)", "Fee Type Name (Bangla)",
      "Amount", "Ledger", "Subledger", "Status"].forEach((label) => {
      cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, label).should("be.visible");
    });
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.viewField);
  }

  editModeFieldsCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    ["fee_collection_code", "fee_type_name_en", "fee_type_name_bn", "amount",
      "ledger_id", "subledger_id", COMMON.INPUTS.STATUS_DROPDOWN]
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

export const create_fee_configuration = new FeeConfigurationCreation();
