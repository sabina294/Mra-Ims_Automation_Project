class Area {
  test_data = Cypress.env("TEST_DATA");

  gridAreaListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-area");
      cy.log("Successfully area list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the area list page.");
  }

  viewArea() {
    cy.fixture(this.test_data).then((data) => {
      var arData = data.branchManager.gridAreaFrom;
      cy.formController("search_text").type(arData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mfi-mis").contains(arData.nameEn).and("be.visible");

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the area list page");
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var arData = data.branchManager.gridAreaFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(arData.selectStatus).type("{enter}");
      cy.log("Area status inactive dropdown check successfully");
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var arData = data.branchManager.gridAreaFrom;
      cy.formController("status").type(arData.statusSelect).type("{enter}");
      cy.log("Area status active dropdown check successfully");
    });
  }

  searchInAreaName() {
    cy.fixture(this.test_data).then((data) => {
      var arData = data.branchManager.gridAreaFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(arData.nameEn);
      cy.log("Successfully search in the area");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }
  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log("successfully refresh page  displayed the grid list of the area ");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const grid_area = new Area();
