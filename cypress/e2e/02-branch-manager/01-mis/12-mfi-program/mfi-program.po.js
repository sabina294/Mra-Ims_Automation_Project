class MfiProgram {
  test_data = Cypress.env("TEST_DATA");

  gridMfiProgramListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-mfi-program");
      cy.log("Successfully mfi program list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the mfi program list page.");
  }

  viewMfiProgram() {
    cy.fixture(this.test_data).then((data) => {
      var mpData = data.branchManager.gridMfiProgramFrom;
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the mfi program list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the  mfi program list page");
  }

  turnOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.imsId("switch-button").click();

    cy.log("Mfi program form Edit Mode toggled successfully");
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
      var mpData = data.branchManager.gridMfiProgramFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(mpData.selectStatus).type("{enter}");
      cy.log("Mfi program status inactive dropdown check successfully");
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var mpData = data.branchManager.gridMfiProgramFrom;
      cy.formController("status").type(mpData.statusSelect).type("{enter}");
      cy.log("Mfi program status active dropdown check successfully");
    });
  }

  searchInMfiProgramName() {
    cy.fixture(this.test_data).then((data) => {
      var mpData = data.branchManager.gridMfiProgramFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(mpData.programNameEn);
      cy.log("Successfully search in the mfi program");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the mfi program "
    );
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var mpData = data.branchManager.gridMfiProgramFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(mpData.search);
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

export const grid_mfi_program = new MfiProgram();
