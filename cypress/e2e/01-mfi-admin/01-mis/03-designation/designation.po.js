class DesignationCreation {
  test_data = Cypress.env("TEST_DATA");

  gridDesignationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-designation");
      cy.log("Successfully designation list page.");
    });
  }

  createDesignation() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var desData = data.mfiAdmin.createDesignationFrom;
      cy.formController("emp_designation_en").type(desData.nameEn);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(desData.messageSaveDesignation)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created designation");
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var desData = data.mfiAdmin.createDesignationFrom;
      cy.formController("emp_designation_bn").type(desData.nameBn);
      cy.formController("emp_designation_short_name").type(desData.shortName);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation designation without one mandatory field."
      );
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var desData = data.mfiAdmin.createDesignationFrom;
      cy.formController("emp_designation_en").type(desData.nameEn);
      cy.formController("emp_designation_short_name").type(desData.shortName);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(desData.messageSaveDesignation)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created designation");
    });
  }

  createWithoutShortName() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var desData = data.mfiAdmin.createDesignationFrom;
      cy.formController("emp_designation_en").type(desData.nameEn);
      cy.formController("emp_designation_bn").type(desData.nameBn);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(desData.messageSaveDesignation)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created designation");
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      cy.imsId("btn-reset").click();

      var desData = data.mfiAdmin.createDesignationFrom;
      cy.formController("emp_designation_en").type(desData.nameEn);
      cy.formController("emp_designation_bn").type(desData.nameBn);
      cy.formController("emp_designation_short_name").type(desData.shortName);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation designation without one mandatory field."
      );
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the designation list page.");
  }

  viewDesignation() {
    cy.fixture(this.test_data).then((data) => {
      var desData = data.mfiAdmin.createDesignationFrom;

      cy.formController("search_text").type(desData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the designation list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the department list page");

  }

  turnOffEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Designation form Edit Mode toggled successfully");
  }

  editDesignation() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      var desData = data.mfiAdmin.createDesignationFrom;
      cy.get("app-confirmation-modal")
        .contains(desData.messageUpdateDesignation)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Designation updated successfully");
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
      var desData = data.mfiAdmin.createDesignationFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-reset").click();
      cy.formController("emp_designation_en").type(desData.nameEn);
      cy.formController("emp_designation_bn").type(desData.nameBn);
      cy.formController("emp_designation_short_name").type(desData.shortName);
      cy.formController("status").type(desData.status).type("{enter}");

      cy.formController("status").type(desData.status).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(desData.messageUpdateDesignation)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully updated designation");
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
      var desData = data.mfiAdmin.createDesignationFrom;

      cy.imsId("btn-reset").click();
      cy.formController("status").type(desData.selectStatus).type("{enter}");
      cy.log("Designation status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var desData = data.mfiAdmin.createDesignationFrom;

      cy.formController("status").type(desData.statusSelect).type("{enter}");
      cy.log("Designation status active dropdown check successfully");
    });
  }

  searchInDesignationName() {
    cy.fixture(this.test_data).then((data) => {
      var desData = data.mfiAdmin.createDesignationFrom;

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
      "successfully refresh page  displayed the grid list of the designation"
    );
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var desData = data.mfiAdmin.createDesignationFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("emp_designation_en").type(desData.nameEn);
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

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var desData = data.mfiAdmin.createDesignationFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(desData.search);
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


export const create_designation = new DesignationCreation();
