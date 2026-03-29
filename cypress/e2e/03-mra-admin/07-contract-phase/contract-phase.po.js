class ContractPhaseCreation {
  test_data = Cypress.env("TEST_DATA");

  gridContractPhaseListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-contract-phase");
      cy.log("Successfully contract phase list page.");
    });
  }

  createContractPhase() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var conPhaData = data.mraAdmin.createcontractPhaseFrom;
      cy.formController("name_en").type(conPhaData.nameEn);
      cy.formController("name_bn").type(conPhaData.nameBn);

      cy.imsId("btn-submit").click();
      cy.get("app-confirmation-modal")
        .contains(conPhaData.messageSaveCoPh)
        .and("be.visible");
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully created contract phase");
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var conPhaData = data.mraAdmin.createcontractPhaseFrom;
      cy.formController("name_bn").type(conPhaData.nameBn);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation contract phase without one mandatory field."
      );
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var conPhaData = data.mraAdmin.createcontractPhaseFrom;
      cy.formController("name_en").type(conPhaData.nameEn);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation contract phase without one mandatory field."
      );
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      cy.imsId("btn-reset").click();

      var conPhaData = data.mraAdmin.createcontractPhaseFrom;
      cy.formController("name_en").type(conPhaData.nameEn);
      cy.formController("name_bn").type(conPhaData.nameBn);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation contract phase without one mandatory field."
      );

    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      var conPhaData = data.mraAdmin.createcontractPhaseFrom;
      cy.formController("name_bn").type(conPhaData.nameBn);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation contract phase without one mandatory field."
      );
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the contract phase list page."
    );
  }

  viewContractPhase() {
    cy.fixture(this.test_data).then((data) => {
      var conPhaData = data.mraAdmin.createcontractPhaseFrom;
      cy.formController("search_text").type(conPhaData.nameBn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.get("app-mra-mfi").contains(conPhaData.nameEn).and("be.visible");
      cy.get("app-mra-mfi").contains(conPhaData.nameBn).and("be.visible");

      cy.log("Successfully viewed the contract phase list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the contract phase list page");

  }

  turnOffOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Contract phase form Edit Mode toggled successfully");
  }

  editContractPhase() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();

      var conPhaData = data.mraAdmin.createcontractPhaseFrom;
      cy.get("app-confirmation-modal")
        .contains(conPhaData.messageUpdateCoPh)
        .and("be.visible");
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Contract phase updated successfully");
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
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-reset").click();

      var conPhaData = data.mraAdmin.createcontractPhaseFrom;
      cy.formController("name_en").type(conPhaData.nameEn);
      cy.formController("name_bn").type(conPhaData.nameBn);
      cy.formController("status").type(conPhaData.status).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.get("app-confirmation-modal")
        .contains(conPhaData.messageUpdateCoPh)
        .and("be.visible");
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully updated contract phase");
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
      var conPhaData = data.mraAdmin.createcontractPhaseFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(conPhaData.selectStatus).type("{enter}");
      cy.log("contract phase status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var conPhaData = data.mraAdmin.createcontractPhaseFrom;
      cy.formController("status").type(conPhaData.statusSelect).type("{enter}");
      cy.log("contract phase status active dropdown check successfully");
    });
  }

  searchInContractPhasetName() {
    cy.fixture(this.test_data).then((data) => {
      var conPhaData = data.mraAdmin.createcontractPhaseFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(conPhaData.nameEn);
      cy.log("Successfully search in the contract phase");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the contract phase "
    );
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var conPhaData = data.mraAdmin.createcontractPhaseFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(conPhaData.nameEn);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful clean displaying.");
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
      var conPhaData = data.mraAdmin.createcontractPhaseFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(conPhaData.search);
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

export const create_contract_phase = new ContractPhaseCreation();
