class FeeConfiguration {
  test_data = Cypress.env("TEST_DATA");

  gridFeeConfigurationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-fee-configuration");
      cy.log("Successfully fee configuration list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the fee configuration list page."
    );
  }

  viewFeeConfiguration() {
    cy.fixture(this.test_data).then((data) => {
      var fcData = data.branchManager.gridFeeConfigurationFrom;
      cy.formController("search_text").type(fcData.feeTypeNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mfi-mis").contains(fcData.feeTypeNameEn).and("be.visible");
      cy.log("Successfully viewed the fee configuration list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the fee configuration list page");

  }

  turnOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.imsId("switch-button").click();

    cy.log("Fee configuration form Edit Mode toggled successfully");
  }

  editResetButton() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying");
  }

  editSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful clean displaying");
  }

  editGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var fcData = data.branchManager.gridFeeConfigurationFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(fcData.selectStatus).type("{enter}");
      cy.log("Fee configuration status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var fcData = data.branchManager.gridFeeConfigurationFrom;
      cy.formController("status").type(fcData.statusSelect).type("{enter}");
      cy.log("Fee configuration status active dropdown check successfully");
    });
  }

  searchInFeeConfigurationName() {
    cy.fixture(this.test_data).then((data) => {
      var fcData = data.branchManager.gridFeeConfigurationFrom;
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

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const grid_fee_configuration = new FeeConfiguration();
