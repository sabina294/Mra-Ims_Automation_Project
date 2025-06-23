class OccupationCreation {
  test_data = Cypress.env("TEST_DATA");

  gridOccupationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-occupation");
      cy.log("Successfully Occupation list page.");
    });
  }

  createOccupation() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var occupationData = data.mraAdmin.createoccupationFrom;
      cy.formController("name_en").type(occupationData.nameEn);
      cy.formController("name_bn").type(occupationData.nameBn);
      cy.imsId("btn-submit").click();

      cy.get("app-confirmation-modal")
        .contains(occupationData.messageSaveOcc)
        .and("be.visible");
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully created occupation");
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var occupationData = data.mraAdmin.createoccupationFrom;
      cy.formController("name_bn").type(occupationData.nameBn);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation education without one mandatory field."
      );
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the occupation list page.");
  }

  viewOccupation() {
    cy.fixture(this.test_data).then((data) => {
      var occupationData = data.mraAdmin.createoccupationFrom;

      cy.formController("search_text").type(occupationData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi").contains(occupationData.nameEn).and("be.visible");
      cy.get("app-mra-mfi").contains(occupationData.nameBn).and("be.visible");

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the occupation list page");
    });
  }

  turnOffOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Occupation form Edit Mode toggled successfully");
  }

  editOccupation() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();

      var occupationData = data.mraAdmin.createoccupationFrom;
      cy.get("app-confirmation-modal")
        .contains(occupationData.messageUpdateOcc)
        .and("be.visible");
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Occupation updated successfully");
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

      var occupationData = data.mraAdmin.createoccupationFrom;
      cy.formController("name_en").type(occupationData.nameEn);
      cy.formController("name_bn").type(occupationData.nameBn);
      cy.formController("status").type(occupationData.status).type("{enter}");

      cy.imsId("btn-submit").click();

      cy.get("app-confirmation-modal")
        .contains(occupationData.messageUpdateOcc)
        .and("be.visible");
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully updated occupation");
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
      var occupationData = data.mraAdmin.createoccupationFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status")
        .type(occupationData.selectStatus)
        .type("{enter}");
      cy.log("occupation form status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var occupationData = data.mraAdmin.createoccupationFrom;
      cy.formController("status")
        .type(occupationData.statusSelect)
        .type("{enter}");
      cy.log("occupation form status active dropdown check successfully");
    });
  }

  searchInOccupationName() {
    cy.fixture(this.test_data).then((data) => {
      var occupationData = data.mraAdmin.createoccupationFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(occupationData.nameEn);
      cy.log("Successfully search in the occupation form");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the occupation form "
    );
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var occupationData = data.mraAdmin.createoccupationFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(occupationData.nameEn);
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

export const create_occupation = new OccupationCreation();
