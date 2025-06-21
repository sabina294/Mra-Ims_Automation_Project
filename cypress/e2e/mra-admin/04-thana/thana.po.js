class ThanaCreation {
  test_data = Cypress.env("TEST_DATA");

  gridThanaListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-thana");
      cy.log("Successfully thana list page.");
    });
  }

  createThana() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var upaData = data.mraAdmin.createthanaFrom;
      cy.formController("name_en").type(upaData.nameEn);
      cy.formController("district_oid").type(upaData.district).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(upaData.messageSaveUpa)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created thana");
    });
  }

  createAllField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var upaData = data.mraAdmin.createthanaFrom;
      cy.formController("name_en").type(upaData.nameEn);
      cy.formController("name_bn").type(upaData.nameBn);
      cy.formController("upazila_code").type(upaData.upaCode);
      cy.formController("postal_code").type(upaData.postCode);
      cy.formController("website").type(upaData.webSite);
      cy.formController("district_oid").type(upaData.district).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(upaData.messageSaveUpa)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created thana all field");
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var upaData = data.mraAdmin.createthanaFrom;
      cy.formController("name_bn").type(upaData.nameBn);
      cy.formController("upazila_code").type(upaData.upaCode);
      cy.formController("postal_code").type(upaData.postCode);
      cy.formController("website").type(upaData.webSite);
      cy.formController("district_oid").type(upaData.district).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation thana without one mandatory field.");
    });
  }

  createWithoutMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      var upaData = data.mraAdmin.createthanaFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_bn").type(upaData.nameBn);
      cy.formController("upazila_code").type(upaData.upaCode);
      cy.formController("postal_code").type(upaData.postCode);
      cy.formController("website").type(upaData.webSite);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful cannot creation thana without mandatory field..");
    });
  }

  viewThana() {
    cy.fixture(this.test_data).then((data) => {
      var upaData = data.mraAdmin.createthanaFrom;
      cy.formController("search_text").type(upaData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi").contains(upaData.nameEn).and("be.visible");
      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the thana list page");
    });
  }

  editThana() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      var upaData = data.mraAdmin.createthanaFrom;
      cy.get("app-confirmation-modal")
        .contains(upaData.messageUpdateUpa)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Thana updated successfully");
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

      var upaData = data.mraAdmin.createthanaFrom;
      cy.formController("name_en").type(upaData.nameEn);
      cy.formController("name_bn").type(upaData.nameBn);
      cy.formController("upazila_code").type(upaData.upaCode);
      cy.formController("postal_code").type(upaData.postCode);
      cy.formController("website").type(upaData.webSite);
      cy.formController("district_oid").type(upaData.district).type("{enter}");
      cy.formController("type").click();
      cy.get('[title="Upazila"] > .ant-select-item-option-content').click();
      cy.formController("status").click();
      cy.contains("Active").click();

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully updated thana");
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
      var upaData = data.mraAdmin.createthanaFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(upaData.selectStatus).type("{enter}");
      cy.log("Thana status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var upaData = data.mraAdmin.createthanaFrom;
      cy.formController("status").type(upaData.statusSelect).type("{enter}");
      cy.log("Thana status active dropdown check successfully");
    });
  }

  searchInThanaName() {
    cy.fixture(this.test_data).then((data) => {
      var upaData = data.mraAdmin.createthanaFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(upaData.nameEn);
      cy.log("Successfully search in the Thana");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log("successfully refresh page  displayed the grid list of the Thana ");
  }

  paginationCheck() {
    cy.get('[title="5"] > .ng-star-inserted').click();
    cy.log("Thana pagination check successfully");
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var upaData = data.mraAdmin.createthanaFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_bn").type(upaData.nameBn);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful reset button and clean displaying.");
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

export const create_thana = new ThanaCreation();
