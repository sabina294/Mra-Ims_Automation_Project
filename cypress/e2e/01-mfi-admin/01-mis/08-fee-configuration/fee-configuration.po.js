import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";

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
    cy.imsId(GRID.CREATE.ADD_NEW).click();
    var fcData = data.mfiAdmin.createFeeConfigurationFrom;
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    var FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;
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
    cy.imsId(GRID.CREATE.CREATESUBMIT)
      .click();
    cy.imsId(GRID.CREATE.CONFIRMATION_YES)
      .click();
    cy.imsId(GRID.CREATE.CONFIRMATION_OK)
      .click();
    cy.log(messages.ui.submitSuccess);
  });
}

  createWitoutCollCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.formController("fee_type_name_en").type(fcData.feeTypeNameEn);
      cy.formController("amount").type(fcData.amount);
      cy.formController("ledger_id").type(fcData.ledger).type("{enter}");
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;
      cy.formController("fee_collection_code").type(FeeCollectionCode);
      cy.formController("amount").type(fcData.amount);
      cy.formController("ledger_id").type(fcData.ledger).type("{enter}");
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
     cy.fixture(this.test_data).then((data) => {
    cy.imsId(GRID.CREATE.ADD_NEW).click();
    var fcData = data.mfiAdmin.createFeeConfigurationFrom;
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    var FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;
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
    cy.imsId(GRID.CREATE.CREATESUBMIT)
      .click();
    cy.imsId(GRID.CREATE.CONFIRMATION_YES)
      .click();
    cy.imsId(GRID.CREATE.CONFIRMATION_OK)
      .click();
    cy.log(messages.ui.submitSuccess);
  });
  }

  createWithoutAmount() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;
      cy.formController("fee_collection_code").type(FeeCollectionCode);
      cy.formController("fee_type_name_en").type(fcData.feeTypeNameEn);
      cy.formController("ledger_id").type(fcData.ledger).type("{enter}");
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutLedger() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;
      cy.formController("fee_collection_code").type(FeeCollectionCode);
      cy.formController("fee_type_name_en").type(fcData.feeTypeNameEn);
      cy.formController("amount").type(fcData.amount);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

   createWithoutSubledger() {
  cy.fixture(this.test_data).then((data) => {
    cy.imsId(GRID.CREATE.ADD_NEW).click();
    var fcData = data.mfiAdmin.createFeeConfigurationFrom;
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    var FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;
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
      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;
      cy.formController("fee_collection_code").type(FeeCollectionCode);
      cy.formController("fee_type_name_en").type(fcData.feeTypeNameEn);
      cy.formController("amount").type(fcData.amount);
      cy.formController("ledger_id").type(fcData.ledger).type("{enter}");
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

  viewFeeConfiguration() {
    cy.fixture(this.test_data).then((data) => {
      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(fcData.feeTypeNameEn);
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

  editFeeConfiguration() {
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
      cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
      cy.imsId(GRID.BUTTONS.ACTIONEDIT).click();
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
      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController("status").type(fcData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.formController("status").type(fcData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInFeeConfigurationName() {
    cy.fixture(this.test_data).then((data) => {
      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(fcData.feeTypeNameEn);
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
      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      cy.formController("fee_type_name_en").type(fcData.feeTypeNameEn);
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
      const fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(fcData.search);
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

export const create_fee_configuration = new FeeConfigurationCreation();