class MaritalStatusCreation {
  test_data = Cypress.env("TEST_DATA");

  gridMaritalStatusListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-gender");
      cy.log("Successfully marital status list page.");
    });
  }

  createMaritalStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-marital-status");
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var maritalStatusData = data.mraAdmin.createmaritalstatusFrom;
      cy.formController("description_en").type(maritalStatusData.nameEn);
      cy.formController("description_bn").type(maritalStatusData.nameBn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(maritalStatusData.messageSaveMalSt)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created marital status");
    });
  }

  viewMaritalStatus() {
    cy.fixture(this.test_data).then((data) => {
      var maritalStatusData = data.mraAdmin.createmaritalstatusFrom;
      cy.formController("search_text").type(maritalStatusData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi")
        .contains(maritalStatusData.nameEn)
        .and("be.visible");
      cy.get("app-mra-mfi")
        .contains(maritalStatusData.nameBn)
        .and("be.visible");

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the marital status list page");
    });
  }

  editMaritalStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      var maritalStatusData = data.mraAdmin.createmaritalstatusFrom;
      cy.get("app-confirmation-modal")
        .contains(maritalStatusData.messageUpdateMaSt)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Marital status updated successfully");
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var maritalStatusData = data.mraAdmin.createmaritalstatusFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status")
        .type(maritalStatusData.selectStatus)
        .type("{enter}");
      cy.log("marital status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var maritalStatusData = data.mraAdmin.createmaritalstatusFrom;
      cy.formController("status")
        .type(maritalStatusData.statusSelect)
        .type("{enter}");
      cy.log("marital form status active dropdown check successfully");
    });
  }

  searchInMaritalStatusName() {
    cy.fixture(this.test_data).then((data) => {
      var maritalStatusData = data.mraAdmin.createmaritalstatusFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(maritalStatusData.nameEn);
      cy.log("Successfully search in the marital form");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the marital form "
    );
  }

  paginationCheck() {
    cy.get('[title="2"] > .ng-star-inserted').click();
    cy.log("Marital status pagination check successfully");
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var maritalStatusData = data.mraAdmin.createmaritalstatusFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("description_en").type(maritalStatusData.nameEn);
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

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_marital_status = new MaritalStatusCreation();
