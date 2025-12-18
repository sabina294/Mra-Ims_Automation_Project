class EducationCreation {
  test_data = Cypress.env("TEST_DATA");

  gridEducationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-education");
      cy.log("Successfully education list page.");
    });
  }

  createEducation() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var eduData = data.mraAdmin.createeducationFrom;
      cy.formController("name_en").type(eduData.nameEn);
      cy.formController("name_bn").type(eduData.nameBn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(eduData.messageSaveEd)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created education");
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var eduData = data.mraAdmin.createeducationFrom;
      cy.formController("name_bn").type(eduData.nameBn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation education without one mandatory field."
      );
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var eduData = data.mraAdmin.createeducationFrom;
      cy.formController("name_en").type(eduData.nameEn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation education without one mandatory field."
      );
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      cy.imsId("btn-reset").click();

      var eduData = data.mraAdmin.createeducationFrom;
      cy.formController("name_en").type(eduData.nameEn);
      cy.formController("name_bn").type(eduData.nameBn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation education without one mandatory field."
      );
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var eduData = data.mraAdmin.createeducationFrom;
      cy.formController("name_bn").type(eduData.nameBn);

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
    cy.log("Action button clicked successfully on the education list page.");
  }

  viewEducation() {
    cy.fixture(this.test_data).then((data) => {
      var eduData = data.mraAdmin.createeducationFrom;
      cy.formController("search_text").type(eduData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi").contains(eduData.nameEn).and("be.visible");
      cy.get("app-mra-mfi").contains(eduData.nameBn).and("be.visible");

      cy.log("Successfully viewed the education list page");
    });
  }

   viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    
    cy.log("Successfully view go back the education list page");
  }

  turnOffOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Education form Edit Mode toggled successfully");
  }

  editEducation() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      var eduData = data.mraAdmin.createeducationFrom;
      cy.get("app-confirmation-modal")
        .contains(eduData.messageUpdateEd)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Education updated successfully");
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

      var eduData = data.mraAdmin.createeducationFrom;
      cy.formController("name_en").type(eduData.nameEn);
      cy.formController("name_bn").type(eduData.nameBn);
      cy.formController("status").type(eduData.status).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(eduData.messageUpdateEd)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created education");
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
      var eduData = data.mraAdmin.createeducationFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(eduData.selectStatus).type("{enter}");
      cy.log("education form status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var eduData = data.mraAdmin.createeducationFrom;
      cy.formController("status").type(eduData.statusSelect).type("{enter}");
      cy.log("education form status active dropdown check successfully");
    });
  }

  searchInEducationName() {
    cy.fixture(this.test_data).then((data) => {
      var eduData = data.mraAdmin.createeducationFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(eduData.nameEn);
      cy.log("Successfully search in the education form");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the education form "
    );
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var eduData = data.mraAdmin.createeducationFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(eduData.nameEn);
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
    cy.log("Successful switch bangla language check.");
  }
}

export const create_education = new EducationCreation();
