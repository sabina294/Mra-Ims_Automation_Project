class DivisionCreation {
  test_data = Cypress.env("TEST_DATA");

  gridDivisionListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-division");
      cy.log("Successfully division list page.");
    });
  }

  createDivision() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      var divData = data.mraAdmin.createdivisionFrom;
      cy.formController("name_en").type(divData.nameEn);
      cy.formController("name_bn").type(divData.nameBn);
      cy.formController("division_code").type(divData.Code);
      cy.formController("establish_year").type(divData.establishedYear);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(divData.messageSaveDivi)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created division");
    });
  }

  viewDivision() {
    cy.fixture(this.test_data).then((data) => {
      var divData = data.mraAdmin.createdivisionFrom;
      cy.formController("search_text").type(divData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi").contains(divData.nameEn).and("be.visible");
      cy.get("app-mra-mfi").contains(divData.nameBn).and("be.visible");

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the division list page");
    });
  }

  editDivision() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      var divData = data.mraAdmin.createdivisionFrom;
      cy.get("app-confirmation-modal")
        .contains(divData.messageUpdateDivi)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Division updated successfully");
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var divData = data.mraAdmin.createdivisionFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(divData.selectStatus).type("{enter}");
      cy.log("division status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var divData = data.mraAdmin.createdivisionFrom;
      cy.formController("status").type(divData.statusSelect).type("{enter}");
      cy.log("division status active dropdown check successfully");
    });
  }

  searchInDivisionName() {
    cy.fixture(this.test_data).then((data) => {
      var divData = data.mraAdmin.createdivisionFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(divData.nameEn);
      cy.log("Successfully search in the division");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the division "
    );
  }
}

export const create_division = new DivisionCreation();
