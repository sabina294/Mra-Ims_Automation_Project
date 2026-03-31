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

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var divData = data.mraAdmin.createdivisionFrom;
      cy.formController("name_bn").type(divData.nameBn);
      cy.formController("division_code").type(divData.Code);
      cy.formController("establish_year").type(divData.establishedYear);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation division without one mandatory field."
      );
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var divData = data.mraAdmin.createdivisionFrom;
      cy.formController("name_en").type(divData.nameEn);
      cy.formController("division_code").type(divData.Code);
      cy.formController("establish_year").type(divData.establishedYear);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation division without one mandatory field."
      );
    });
  }

  createWithoutDivisionCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var divData = data.mraAdmin.createdivisionFrom;
      cy.formController("name_en").type(divData.nameEn);
      cy.formController("name_bn").type(divData.nameBn);
      cy.formController("establish_year").type(divData.establishedYear);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation division without one mandatory field."
      );
    });
  }

  createWithoutEstabYear() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var divData = data.mraAdmin.createdivisionFrom;
      cy.formController("name_en").type(divData.nameEn);
      cy.formController("name_bn").type(divData.nameBn);
      cy.formController("division_code").type(divData.Code);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation division without one mandatory field."
      );
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var divData = data.mraAdmin.createdivisionFrom;
      cy.imsId("btn-reset").click();
      cy.formController("name_en").type(divData.nameEn);
      cy.formController("name_bn").type(divData.nameBn);
      cy.formController("division_code").type(divData.Code);
      cy.formController("establish_year").type(divData.establishedYear);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation division without one mandatory field."
      );
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the division list page.");
  }

  viewDivision() {
    cy.fixture(this.test_data).then((data) => {
      var divData = data.mraAdmin.createdivisionFrom;
      cy.formController("search_text").type(divData.nameEn);
      cy.imsId("btn-search").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the division list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the division list page");

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

  turnOffEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Division form Edit Mode toggled successfully");

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
      var divData = data.mraAdmin.createdivisionFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-reset").click();
      cy.formController("name_en").type(divData.nameEn);
      cy.formController("name_bn").type(divData.nameBn);
      cy.formController("division_code").type(divData.Code);
      cy.formController("establish_year").type(divData.establishedYear);
      cy.formController("status").type(divData.status).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(divData.messageUpdateDivi)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully updated division");
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

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var divData = data.mraAdmin.createdivisionFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(divData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var divData = data.mraAdmin.createdivisionFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(divData.nameEn);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful reset button clean displaying.");
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
    cy.log("Successful switch bangla language check.");
  }
}

export const create_division = new DivisionCreation();
