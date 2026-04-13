class AreaCreation {
  test_data = Cypress.env("TEST_DATA");

  gridAreaListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-area");
      cy.log("Successfully area list page.");
    });
  }

  createArea() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var arData = data.mfiAdmin.createAreaFrom;
      cy.formController("area_name_en").type(arData.nameEn);
      cy.formController("area_name_bn").type(arData.nameBn);
      cy.formController("zone_id").type(arData.zoneName).type("{enter}");
      cy.formController("area_code").type(arData.areaCode);

      cy.imsId("btn-submit").click();

      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(arData.messageSaveArea)
        .and("be.visible");

      cy.imsId("btn-ok").click();
      cy.log("Successfully created area");
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var arData = data.mfiAdmin.createAreaFrom;
      cy.formController("area_name_bn").type(arData.nameBn);
      cy.formController("zone_id").type(arData.zoneName).type("{enter}");
      cy.formController("area_code").type(arData.areaCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation area without one mandatory field.");
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var arData = data.mfiAdmin.createAreaFrom;
      cy.formController("area_name_en").type(arData.nameEn);
      cy.formController("zone_id").type(arData.zoneName).type("{enter}");

      cy.formController("area_code").type(arData.areaCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation area without one mandatory field.");
    });
  }

  createWithoutZone() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var arData = data.mfiAdmin.createAreaFrom;
      cy.formController("area_name_en").type(arData.nameEn);
      cy.formController("area_name_bn").type(arData.nameBn);
      cy.formController("area_code").type(arData.areaCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation area without one mandatory field.");
    });
  }

  createWithoutAreaCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var arData = data.mfiAdmin.createAreaFrom;
      cy.formController("area_name_en").type(arData.nameEn);
      cy.formController("area_name_bn").type(arData.nameBn);
      cy.formController("zone_id").type(arData.zoneName).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation area without one mandatory field.");
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      cy.imsId("btn-reset").click();

      var arData = data.mfiAdmin.createAreaFrom;
      cy.formController("area_name_en").type(arData.nameEn);
      cy.formController("area_name_bn").type(arData.nameBn);
      cy.formController("zone_id").type(arData.zoneName).type("{enter}");
      cy.formController("area_code").type(arData.areaCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation zone without one mandatory field.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the area list page.");
  }

  viewArea() {
    cy.fixture(this.test_data).then((data) => {
      var arData = data.mfiAdmin.createAreaFrom;
      cy.formController("search_text").type(arData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the area list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the zone list page");

  }

  turnOffEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Area form Edit Mode toggled successfully");
  }

  editArea() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      var arData = data.mfiAdmin.createAreaFrom;
      cy.get("app-confirmation-modal")
        .contains(arData.messageUpdateArea)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Area updated successfully");
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
      var arData = data.mfiAdmin.createAreaFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-reset").click();
      cy.formController("area_name_en").type(arData.nameEn);
      cy.formController("area_name_bn").type(arData.nameBn);
      cy.formController("zone_id").type(arData.zoneName).type("{enter}");
      cy.formController("area_code").type(arData.areaCode);
      cy.formController("status").type(arData.status).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(arData.messageUpdateArea)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully updated area");
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
      var arData = data.mfiAdmin.createAreaFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(arData.selectStatus).type("{enter}");
      cy.log("Area status inactive dropdown check successfully");
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var arData = data.mfiAdmin.createAreaFrom;
      cy.formController("status").type(arData.statusSelect).type("{enter}");
      cy.log("Area status active dropdown check successfully");
    });
  }

  searchInAreaName() {
    cy.fixture(this.test_data).then((data) => {
      var arData = data.mfiAdmin.createAreaFrom;
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

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var arData = data.mfiAdmin.createAreaFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("area_name_en").type(arData.nameEn);
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
      var arData = data.mfiAdmin.createAreaFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(arData.search);
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

export const create_area = new AreaCreation();
