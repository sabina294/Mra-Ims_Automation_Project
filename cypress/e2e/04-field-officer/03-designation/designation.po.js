class Designation {
  test_data = Cypress.env("TEST_DATA");

  gridDesignationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-designation");
      cy.log("Successfully designation list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the designation list page.");
  }

  viewDesignation() {
    cy.fixture(this.test_data).then((data) => {
      var desData = data.fieldOfficer.gridDesignationFrom;

      cy.formController("search_text").type(desData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      // cy.get("app-mfi-mis").contains(desData.nameEn).and("be.visible");

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the designation list page");
    });
  }

  turnOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Designation form Edit Mode toggled successfully");
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-reset").click();

    cy.log("Successful clean displaying");
  }

  editSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();

    cy.log("Successful submit validation check.");
  }

  editGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var desData = data.fieldOfficer.gridDesignationFrom;

      cy.imsId("btn-reset").click();
      cy.formController("status").type(desData.selectStatus).type("{enter}");
      cy.log("Designation status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var desData = data.fieldOfficer.gridDesignationFrom;

      cy.formController("status").type(desData.statusSelect).type("{enter}");
      cy.log("Designation status active dropdown check successfully");
    });
  }

  searchInDesignationName() {
    cy.fixture(this.test_data).then((data) => {
      var desData = data.fieldOfficer.gridDesignationFrom;

      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(desData.nameEn);
      cy.log("Successfully search in the designation");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the designation "
    );
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const grid_designation = new Designation();
