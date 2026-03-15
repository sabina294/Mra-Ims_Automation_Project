class RegionCreation {
  test_data = Cypress.env("TEST_DATA");

  gridRegionListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-region");
      cy.log("Successfully region list page.");
    });
  }

  createRegion() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var regData = data.mfiAdmin.createRegionFrom;
      cy.formController("region_name_en").type(regData.nameEn);
      cy.formController("region_name_bn").type(regData.nameBn);
      cy.formController("region_code").type(regData.regionCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(regData.messageSaveRegion)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created region");
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var regData = data.mfiAdmin.createRegionFrom;
      cy.formController("region_name_bn").type(regData.nameBn);
      cy.formController("region_code").type(regData.regionCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation region without one mandatory field.");
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var regData = data.mfiAdmin.createRegionFrom;
      cy.formController("region_name_en").type(regData.nameEn);
      cy.formController("region_code").type(regData.regionCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation region without one mandatory field.");
    });
  }

  createWithoutCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var regData = data.mfiAdmin.createRegionFrom;
      cy.formController("region_name_en").type(regData.nameEn);
      cy.formController("region_name_bn").type(regData.nameBn);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation region without one mandatory field.");
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      cy.imsId("btn-reset").click();

      var regData = data.mfiAdmin.createRegionFrom;
      cy.formController("region_name_en").type(regData.nameEn);
      cy.formController("region_name_bn").type(regData.nameBn);
      cy.formController("region_code").type(regData.regionCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation region without one mandatory field.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the region list page.");
  }

  viewRegion() {
    cy.fixture(this.test_data).then((data) => {
      var regData = data.mfiAdmin.createRegionFrom;
      cy.formController("search_text").type(regData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      // cy.get("app-mfi-mis").contains(regData.nameEn).and("be.visible");
      cy.log("Successfully viewed the region list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the region list page");

  }

  turnOffEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Region form Edit Mode toggled successfully");
  }

  editRegion() {
    cy.fixture(this.test_data).then((data) => {
      var regData = data.mfiAdmin.createRegionFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(regData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
      cy.log("Region updated successfully");
    });
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-reset").click();

    cy.log("Successful clean displaying");
  }

  editSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successfully updated region");

  }

  editGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var regData = data.mfiAdmin.createRegionFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(regData.selectStatus).type("{enter}");
      cy.log("Region status inactive dropdown check successfully");
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var regData = data.mfiAdmin.createRegionFrom;
      cy.formController("status").type(regData.statusSelect).type("{enter}");
      cy.log("Region status active dropdown check successfully");
    });
  }

  searchInRegionName() {
    cy.fixture(this.test_data).then((data) => {
      var regData = data.mfiAdmin.createRegionFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(regData.nameEn);
      cy.log("Successfully search in the region");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log("successfully refresh page  displayed the grid list of the region ");
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var regData = data.mfiAdmin.createRegionFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("region_name_en").type(regData.nameEn);
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

export const create_region = new RegionCreation();
