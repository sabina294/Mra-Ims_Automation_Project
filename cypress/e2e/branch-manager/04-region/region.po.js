class Region {
  test_data = Cypress.env("TEST_DATA");

  gridRegionListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-region");
      cy.log("Successfully region list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the region list page.");
  }

  viewRegion() {
    cy.fixture(this.test_data).then((data) => {
      var regData = data.branchManager.gridRegionFrom;
      cy.formController("search_text").type(regData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mfi-mis").contains(regData.nameEn).and("be.visible");

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the region list page");
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var regData = data.branchManager.gridRegionFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(regData.selectStatus).type("{enter}");
      cy.log("Region status inactive dropdown check successfully");
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var regData = data.branchManager.gridRegionFrom;
      cy.formController("status").type(regData.statusSelect).type("{enter}");
      cy.log("Region status active dropdown check successfully");
    });
  }

  searchInRegionName() {
    cy.fixture(this.test_data).then((data) => {
      var regData = data.branchManager.gridRegionFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(regData.nameEn);
      cy.log("Successfully search in the region");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log("successfully refresh page  displayed the grid list of the region ");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const grid_region = new Region();
