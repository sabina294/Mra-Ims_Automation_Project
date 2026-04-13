class ZoneCreation {
  test_data = Cypress.env("TEST_DATA");

  gridZoneListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-zone");
      cy.log("Successfully zone list page.");
    });
  }

  createZone() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("zone_name_en").type(zoData.nameEn);
      cy.formController("zone_name_bn").type(zoData.nameBn);
      cy.formController("region_id").type(zoData.regionName).type("{enter}");
      cy.formController("zone_code").type(zoData.zoneCode);

      cy.imsId("btn-submit").click();

      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(zoData.messageSaveZone)
        .and("be.visible");

      cy.imsId("btn-ok").click();
      cy.log("Successfully created zone");
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("zone_name_bn").type(zoData.nameBn);
      cy.formController("region_id").type(zoData.regionName).type("{enter}");
      cy.formController("zone_code").type(zoData.zoneCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation zone without one mandatory field.");
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("zone_name_en").type(zoData.nameEn);
      cy.formController("region_id").type(zoData.regionName).type("{enter}");
      cy.formController("zone_code").type(zoData.zoneCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation zone without one mandatory field.");
    });
  }

  createWithoutRegion() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("zone_name_en").type(zoData.nameEn);
      cy.formController("zone_name_bn").type(zoData.nameBn);
      cy.formController("zone_code").type(zoData.zoneCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation zone without one mandatory field.");
    });
  }

  createWithoutZoneCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("zone_name_en").type(zoData.nameEn);
      cy.formController("zone_name_bn").type(zoData.nameBn);
      cy.formController("region_id").type(zoData.regionName).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation zone without one mandatory field.");
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      cy.imsId("btn-reset").click();

      var zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("zone_name_en").type(zoData.nameEn);
      cy.formController("zone_name_bn").type(zoData.nameBn);
      cy.formController("region_id").type(zoData.regionName).type("{enter}");
      cy.formController("zone_code").type(zoData.zoneCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation zone without one mandatory field.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the zone list page.");
  }

  viewZone() {
    cy.fixture(this.test_data).then((data) => {
      var zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("search_text").type(zoData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the zone list page");
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

    cy.log("Zone form Edit Mode toggled successfully");
  }

  editZone() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      var zoData = data.mfiAdmin.createZoneFrom;
      cy.get("app-confirmation-modal")
        .contains(zoData.messageUpdateZone)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Zone updated successfully");
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
      var zoData = data.mfiAdmin.createZoneFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-reset").click();
      cy.formController("zone_name_en").type(zoData.nameEn);
      cy.formController("zone_name_bn").type(zoData.nameBn);
      cy.formController("region_id").type(zoData.regionName).type("{enter}");
      cy.formController("zone_code").type(zoData.zoneCode);
      cy.formController("status").type(zoData.status).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(zoData.messageUpdateZone)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully updated zone");
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
      var zoData = data.mfiAdmin.createZoneFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(zoData.selectStatus).type("{enter}");
      cy.log("Region status inactive dropdown check successfully");
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var zoData = data.mfiAdmin.createZoneFrom;
      cy.formController("status").type(zoData.statusSelect).type("{enter}");
      cy.log("Region status active dropdown check successfully");
    });
  }

  searchInZoneName() {
    cy.fixture(this.test_data).then((data) => {
      var zoData = data.mfiAdmin.createZoneFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(zoData.nameEn);
      cy.log("Successfully search in the region");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log("successfully refresh page  displayed the grid list of the zone ");
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var zoData = data.mfiAdmin.createZoneFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("zone_name_en").type(zoData.nameEn);
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
      var zoData = data.mfiAdmin.createZoneFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(zoData.search);
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

export const create_zone = new ZoneCreation();
