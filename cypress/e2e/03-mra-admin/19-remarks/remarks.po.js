class RemarksCreation {
  test_data = Cypress.env("TEST_DATA");

  gridRemarksListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-remarks");
      cy.log("Successfully remarks list page.");
    });
  }

  createRemarks() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var remarksData = data.mraAdmin.createremarksFrom;
      cy.formController("name_en").type(remarksData.nameEn);
      cy.formController("name_bn").type(remarksData.nameBn);
      cy.imsId("btn-submit").click();

      cy.get("app-confirmation-modal")
        .contains(remarksData.messageSaveRem)
        .and("be.visible");
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully created remarks");
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var remarksData = data.mraAdmin.createremarksFrom;
      cy.formController("name_bn").type(remarksData.nameBn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation remarks without one mandatory field.");
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var remarksData = data.mraAdmin.createremarksFrom;
      cy.formController("name_en").type(remarksData.nameEn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation remarks without one mandatory field.");
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-reset").click();

      var remarksData = data.mraAdmin.createremarksFrom;
      cy.formController("name_en").type(remarksData.nameEn);
      cy.formController("name_bn").type(remarksData.nameBn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation remarks without one mandatory field.");
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var remarksData = data.mraAdmin.createremarksFrom;
      cy.formController("name_en").type(remarksData.nameEn);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation remarks without one mandatory field.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the remarks list page.");
  }

  viewRemarks() {
    cy.fixture(this.test_data).then((data) => {
      var remarksData = data.mraAdmin.createremarksFrom;

      cy.formController("search_text").type(remarksData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi").contains(remarksData.nameEn).and("be.visible");
      cy.get("app-mra-mfi").contains(remarksData.nameBn).and("be.visible");

      cy.log("Successfully viewed the remarks list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the remarks list page");
  }


  turnOffOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Remarks form Edit Mode toggled successfully");
  }

  editRemarks() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();

      var remarksData = data.mraAdmin.createremarksFrom;
      cy.get("app-confirmation-modal")
        .contains(remarksData.messageUpdateRem)
        .and("be.visible");
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Remarks updated successfully");
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

      var remarksData = data.mraAdmin.createremarksFrom;
      cy.formController("name_en").type(remarksData.nameEn);
      cy.formController("name_bn").type(remarksData.nameBn);
      cy.formController("status").type(remarksData.status).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.get("app-confirmation-modal")
        .contains(remarksData.messageUpdateRem)
        .and("be.visible");
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully updated remarks");
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
      var remarksData = data.mraAdmin.createremarksFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status")
        .type(remarksData.selectStatus)
        .type("{enter}");
      cy.log("remarks form status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var remarksData = data.mraAdmin.createremarksFrom;
      cy.formController("status")
        .type(remarksData.statusSelect)
        .type("{enter}");
      cy.log("remarks form status active dropdown check successfully");
    });
  }

  searchInRemarksName() {
    cy.fixture(this.test_data).then((data) => {
      var remarksData = data.mraAdmin.createremarksFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(remarksData.nameEn);
      cy.log("Successfully search in the remarks form");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the remarks form "
    );
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var remarksData = data.mraAdmin.createremarksFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(remarksData.nameEn);
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

export const create_remarks = new RemarksCreation();
