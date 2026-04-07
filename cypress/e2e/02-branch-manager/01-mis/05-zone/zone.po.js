class Zone {
  test_data = Cypress.env("TEST_DATA");

  gridZoneListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-zone");
      cy.log("Successfully zone list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the zone list page.");
  }

  viewZone() {
    cy.fixture(this.test_data).then((data) => {
      var zoData = data.branchManager.gridZoneFrom;
      // cy.formController("search_text").type(zoData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      // cy.get("app-mfi-mis").contains(zoData.nameEn).and("be.visible");
      cy.log("Successfully viewed the zone list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the zone list page");

  }

  turnOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.imsId("switch-button").click();

    cy.log("Zone form Edit Mode toggled successfully");
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
    cy.
      log("Successful edit go back button check.");
  }
  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var zoData = data.branchManager.gridZoneFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(zoData.selectStatus).type("{enter}");
      cy.log("zone status inactive dropdown check successfully");
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var zoData = data.branchManager.gridZoneFrom;
      cy.formController("status").type(zoData.statusSelect).type("{enter}");
      cy.log("zone status active dropdown check successfully");
    });
  }

  searchInZoneName() {
    cy.fixture(this.test_data).then((data) => {
      var zoData = data.branchManager.gridZoneFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(zoData.nameEn);
      cy.log("Successfully search in the zone");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log("successfully refresh page  displayed the grid list of the zone ");
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var zoData = data.branchManager.gridZoneFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(zoData.search);
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

export const grid_zone = new Zone();
