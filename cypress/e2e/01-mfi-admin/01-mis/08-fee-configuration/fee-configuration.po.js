import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";

class FeeConfigurationCreation {
  test_data = Cypress.env("TEST_DATA");

  gridFeeConfigurationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-fee-configuration");
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
      cy.formController("status").type(fcData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.formController("status").type(fcData.statusSelect).type("{enter}");
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

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_fee_configuration = new FeeConfigurationCreation();