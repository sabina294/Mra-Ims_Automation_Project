class FeeConfigurationCreation {
  test_data = Cypress.env("TEST_DATA");

  gridFeeConfigurationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-fee-configuration");
      cy.log("Successfully fee configuration list page.");
    });
  }

  createFeeConfiguration() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;

      cy.formController("fee_collection_code").type(FeeCollectionCode);
      cy.formController("fee_type_name_en").type(fcData.feeTypeNameEn);
      cy.formController("amount").type(fcData.amount);
      cy.formController("ledger_id").type(fcData.ledger).type("{enter}");
      cy.imsId("btn-submit").click();

      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(fcData.messageSaveFeeConfig)
        .and("be.visible");

      cy.imsId("btn-ok").click();
      cy.log("Successfully created fee configuration");
    });
  }

  createWitoutCollCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;

      cy.formController("fee_type_name_en").type(fcData.feeTypeNameEn);
      cy.formController("amount").type(fcData.amount);
      cy.formController("ledger_id").type(fcData.ledger).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation fee configuration without one mandatory field."
      );
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;

      cy.formController("fee_collection_code").type(FeeCollectionCode);
      cy.formController("amount").type(fcData.amount);
      cy.formController("ledger_id").type(fcData.ledger).type("{enter}");
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation fee configuration without one mandatory field."
      );
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;

      cy.formController("fee_collection_code").type(FeeCollectionCode);
      cy.formController("fee_type_name_en").type(fcData.feeTypeNameEn);
      cy.formController("amount").type(fcData.amount);
      cy.formController("ledger_id").type(fcData.ledger).type("{enter}");
      cy.imsId("btn-submit").click();

      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(fcData.messageSaveFeeConfig)
        .and("be.visible");

      cy.imsId("btn-ok").click();
      cy.log("Successfully created fee configuration");
    });
  }

  createWithoutAmount() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;

      cy.formController("fee_collection_code").type(FeeCollectionCode);
      cy.formController("fee_type_name_en").type(fcData.feeTypeNameEn);
      cy.formController("ledger_id").type(fcData.ledger).type("{enter}");
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation fee configuration without one mandatory field."
      );
    });
  }

  createWithoutLedger() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;

      cy.formController("fee_collection_code").type(FeeCollectionCode);
      cy.formController("fee_type_name_en").type(fcData.feeTypeNameEn);
      cy.formController("amount").type(fcData.amount);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation fee configuration without one mandatory field."
      );
    });
  }

  createWithoutSubledger() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;

      cy.formController("fee_collection_code").type(FeeCollectionCode);
      cy.formController("fee_type_name_en").type(fcData.feeTypeNameEn);
      cy.formController("amount").type(fcData.amount);
      cy.formController("ledger_id").type(fcData.ledger).type("{enter}");
      cy.imsId("btn-submit").click();

      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(fcData.messageSaveFeeConfig)
        .and("be.visible");

      cy.imsId("btn-ok").click();
      cy.log("Successfully created fee configuration");
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      cy.imsId("btn-reset").click();

      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var FeeCollectionCode = fcData.FeeCollCode + "-" + randomNumber;

      cy.formController("fee_collection_code").type(FeeCollectionCode);
      cy.formController("fee_type_name_en").type(fcData.feeTypeNameEn);
      cy.formController("amount").type(fcData.amount);
      cy.formController("ledger_id").type(fcData.ledger).type("{enter}");
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation fee configuration without one mandatory field."
      );
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the fee configuration list page.");
  }

  viewFeeConfiguration() {
    cy.fixture(this.test_data).then((data) => {
      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.formController("search_text").type(fcData.feeTypeNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the fee configuration list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the fee configuration list page");

  }

  turnOffEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Fee configuration form Edit Mode toggled successfully");
  }

  editFeeConfiguration() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.get("app-confirmation-modal")
        .contains(fcData.messageUpdateFeeConfig)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Fee configuration updated successfully");
    });
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-reset").click();
    cy.imsId("btn-go-back").click();

    cy.log("Successful clean displaying");
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(fcData.messageUpdateFeeConfig)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created fee configuration");
    });
  }

  editGoBackButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(fcData.selectStatus).type("{enter}");
      cy.log("Fee configuration status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.formController("status").type(fcData.statusSelect).type("{enter}");
      cy.log("Fee configuration status active dropdown check successfully");
    });
  }

  searchInFeeConfigurationName() {
    cy.fixture(this.test_data).then((data) => {
      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(fcData.feeTypeNameEn);
      cy.log("Successfully search in the fee configuration");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }
  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the fee configuration "
    );
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("fee_type_name_en").type(fcData.feeTypeNameEn);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful reset button clean displaying.");
    });
  }

  createValidationMessageCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful validation message displaying.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }

    gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var fcData = data.mfiAdmin.createFeeConfigurationFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(fcData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const create_fee_configuration = new FeeConfigurationCreation();
