class DistrictCreation {
  test_data = Cypress.env("TEST_DATA");

  gridDistrictListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-district");
      cy.log("Successfully district list page.");
    });
  }

  createDistrict() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var disData = data.mraAdmin.createdistrictFrom;
      cy.formController("name_en").type(disData.nameEn);
      cy.formController("district_code").type(disData.Code);
      cy.formController("establish_year").type(disData.establishedYear);
      cy.formController("division_oid").type(disData.division).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(disData.messageSaveDis)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created district");
    });
  }

  createAllField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var disData = data.mraAdmin.createdistrictFrom;
      cy.formController("name_en").type(disData.nameEn);
      cy.formController("name_bn").type(disData.nameBn);
      cy.formController("district_code").type(disData.Code);
      cy.formController("establish_year").type(disData.establishedYear);
      cy.formController("division_oid").type(disData.division).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(disData.messageSaveDis)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created district all field");
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var disData = data.mraAdmin.createdistrictFrom;
      cy.formController("name_bn").type(disData.nameBn);
      cy.formController("district_code").type(disData.Code);
      cy.formController("establish_year").type(disData.establishedYear);
      cy.formController("division_oid").type(disData.division).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation district without one mandatory field."
      );
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var disData = data.mraAdmin.createdistrictFrom;
      cy.formController("name_en").type(disData.nameEn);
      cy.formController("district_code").type(disData.Code);
      cy.formController("establish_year").type(disData.establishedYear);
      cy.formController("division_oid").type(disData.division).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log(
        "Successful cannot creation district without one mandatory field."
      );
    });
  }

  createWithoutDisCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var disData = data.mraAdmin.createdistrictFrom;
      cy.formController("name_en").type(disData.nameEn);
      cy.formController("name_bn").type(disData.nameBn);
      cy.formController("establish_year").type(disData.establishedYear);
      cy.formController("division_oid").type(disData.division).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation district without one mandatory field."
      );
    });
  }

  createWithoutEstabYear() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var disData = data.mraAdmin.createdistrictFrom;
      cy.formController("name_en").type(disData.nameEn);
      cy.formController("name_bn").type(disData.nameBn);
      cy.formController("district_code").type(disData.Code);
      cy.formController("division_oid").type(disData.division).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation district without one mandatory field."
      );
    });
  }

  createWithoutDivision() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var disData = data.mraAdmin.createdistrictFrom;
      cy.formController("name_en").type(disData.nameEn);
      cy.formController("name_bn").type(disData.nameBn);
      cy.formController("district_code").type(disData.Code);
      cy.formController("establish_year").type(disData.establishedYear);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation district without one mandatory field."
      );
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      var disData = data.mraAdmin.createdistrictFrom;
      cy.imsId("btn-reset").click();
      cy.formController("name_en").type(disData.nameEn);
      cy.formController("name_bn").type(disData.nameBn);
      cy.formController("district_code").type(disData.Code);
      cy.formController("establish_year").type(disData.establishedYear);
      cy.formController("division_oid").type(disData.division).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful cannot creation district without mandatory field.");
    });
  }

  createWithoutMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      var disData = data.mraAdmin.createdistrictFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_bn").type(disData.nameBn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful cannot creation district without mandatory field.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the district list page.");
  }

  viewDistrict() {
    cy.fixture(this.test_data).then((data) => {
      var disData = data.mraAdmin.createdistrictFrom;
      cy.formController("search_text").type(disData.nameEn);
      cy.imsId("btn-search").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi").contains(disData.nameEn).and("be.visible");
      cy.log("Successfully viewed the district list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the district list page");

  }

  turnOffOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("District form Edit Mode toggled successfully");
  }

  editDistrict() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      var disData = data.mraAdmin.createdistrictFrom;
      cy.get("app-confirmation-modal")
        .contains(disData.messageUpdateDis)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("District updated successfully");
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
      var disData = data.mraAdmin.createdistrictFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-reset").click();
      cy.formController("name_en").type(disData.nameEn);
      cy.formController("name_bn").type(disData.nameBn);
      cy.formController("district_code").type(disData.Code);
      cy.formController("establish_year").type(disData.establishedYear);
      cy.formController("division_oid").type(disData.division).type("{enter}");
      cy.formController("status").type(disData.status).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully updated district");
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
      var disData = data.mraAdmin.createdistrictFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(disData.selectStatus).type("{enter}");
      cy.log("district status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var disData = data.mraAdmin.createdistrictFrom;
      cy.formController("status").type(disData.statusSelect).type("{enter}");
      cy.log("district status active dropdown check successfully");
    });
  }

  searchInDistrictName() {
    cy.fixture(this.test_data).then((data) => {
      var disData = data.mraAdmin.createdistrictFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(disData.nameEn);
      cy.log("Successfully search in the district");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the district "
    );
  }

  paginationCheck() {
    cy.get('[title="5"] > .ng-star-inserted').click();
    cy.log("District pagination check successfully");
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var disData = data.mraAdmin.createdistrictFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(disData.nameEn);
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

   gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var disData = data.mraAdmin.createdistrictFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(disData.search);
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

export const create_district = new DistrictCreation();
