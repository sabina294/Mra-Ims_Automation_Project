class EconomicPurposeCreation {
  test_data = Cypress.env("TEST_DATA");

  gridEconomicPurposeListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-economic-purpose");
      cy.log("Successfully economic purpose list page.");
    });
  }

  createEconomicPurpose() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("mra_code").type(ecoPurData.economicPurposeCode);
      cy.formController("name_en").type(ecoPurData.nameEn);
      cy.formController("name_bn").type(ecoPurData.nameBn);
      cy.formController("sector").type(ecoPurData.economicSector);
      cy.formController("econ_activity").type(ecoPurData.economicActivity);
      cy.formController("lending_category_id")
        .type(ecoPurData.lendingCategory)
        .type("{enter}");
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(ecoPurData.messageSaveEcPu)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created economic purpose");
    });
  }

  createWithoutEcoPurCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("name_en").type(ecoPurData.nameEn);
      cy.formController("name_bn").type(ecoPurData.nameBn);
      cy.formController("sector").type(ecoPurData.economicSector);
      cy.formController("econ_activity").type(ecoPurData.economicActivity);
      cy.formController("lending_category_id")
        .type(ecoPurData.lendingCategory)
        .type("{enter}");
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation division without one mandatory field."
      );
    });
  }

  createWithoutEcoPurNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("mra_code").type(ecoPurData.economicPurposeCode);
      cy.formController("name_bn").type(ecoPurData.nameBn);
      cy.formController("sector").type(ecoPurData.economicSector);
      cy.formController("econ_activity").type(ecoPurData.economicActivity);
      cy.formController("lending_category_id")
        .type(ecoPurData.lendingCategory)
        .type("{enter}");
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation division without one mandatory field."
      );
    });
  }

  createWithoutEcoPurNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("mra_code").type(ecoPurData.economicPurposeCode);
      cy.formController("name_en").type(ecoPurData.nameEn);
      cy.formController("sector").type(ecoPurData.economicSector);
      cy.formController("econ_activity").type(ecoPurData.economicActivity);
      cy.formController("lending_category_id")
        .type(ecoPurData.lendingCategory)
        .type("{enter}");
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation division without one mandatory field."
      );
    });
  }

  createWithoutEcoPurSector() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("mra_code").type(ecoPurData.economicPurposeCode);
      cy.formController("name_en").type(ecoPurData.nameEn);
      cy.formController("name_bn").type(ecoPurData.nameBn);
      cy.formController("econ_activity").type(ecoPurData.economicActivity);
      cy.formController("lending_category_id")
        .type(ecoPurData.lendingCategory)
        .type("{enter}");
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation division without one mandatory field."
      );
    });
  }

  createWithoutEcoPurActivity() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("mra_code").type(ecoPurData.economicPurposeCode);
      cy.formController("name_en").type(ecoPurData.nameEn);
      cy.formController("name_bn").type(ecoPurData.nameBn);
      cy.formController("sector").type(ecoPurData.economicSector);
      cy.formController("lending_category_id")
        .type(ecoPurData.lendingCategory)
        .type("{enter}");
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation division without one mandatory field."
      );
    });
  }

  createWithoutLendingCategory() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("mra_code").type(ecoPurData.economicPurposeCode);
      cy.formController("name_en").type(ecoPurData.nameEn);
      cy.formController("name_bn").type(ecoPurData.nameBn);
      cy.formController("sector").type(ecoPurData.economicSector);
      cy.formController("econ_activity").type(ecoPurData.economicActivity);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation division without one mandatory field."
      );
    });
  }

  createWithoutEcoPurStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("mra_code").type(ecoPurData.economicPurposeCode);
      cy.formController("name_en").type(ecoPurData.nameEn);
      cy.formController("name_bn").type(ecoPurData.nameBn);
      cy.formController("sector").type(ecoPurData.economicSector);
      cy.formController("econ_activity").type(ecoPurData.economicActivity);
      cy.formController("lending_category_id")
        .type(ecoPurData.lendingCategory)
        .type("{enter}");
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation division without one mandatory field."
      );
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("mra_code").type(ecoPurData.economicPurposeCode);
      cy.formController("name_bn").type(ecoPurData.nameBn);
      cy.formController("sector").type(ecoPurData.economicSector);
      cy.formController("econ_activity").type(ecoPurData.economicActivity);
      cy.formController("lending_category_id")
        .type(ecoPurData.lendingCategory)
        .type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation economic purpose without one mandatory field"
      );
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the economic purpose list page."
    );
  }

  viewEconomicPurpose() {
    cy.fixture(this.test_data).then((data) => {
      var ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("search_text").type(ecoPurData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi")
        .contains(ecoPurData.economicPurposeCode)
        .and("be.visible");
      cy.get("app-mra-mfi").contains(ecoPurData.nameEn).and("be.visible");
      cy.get("app-mra-mfi").contains(ecoPurData.nameBn).and("be.visible");

      cy.log("Successfully viewed the economic purpose list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the economic purpose list page");

  }

  turnOffOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Economic purpose form Edit Mode toggled successfully");
  }

  editEconomicPurpose() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      var ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.get("app-confirmation-modal")
        .contains(ecoPurData.messageUpdateEcPu)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Economic purpose updated successfully");
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

      var ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("mra_code").type(ecoPurData.economicPurposeCode);
      cy.formController("name_en").type(ecoPurData.nameEn);
      cy.formController("name_bn").type(ecoPurData.nameBn);
      cy.formController("sector").type(ecoPurData.economicSector);
      cy.formController("econ_activity").type(ecoPurData.economicActivity);
      cy.formController("lending_category_id")
        .type(ecoPurData.lendingCategory)
        .type("{enter}");
      cy.formController("status").type(ecoPurData.status).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(ecoPurData.messageUpdateEcPu)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully updated economic purpose");
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
      var ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(ecoPurData.selectStatus).type("{enter}");
      cy.log("economic purpose status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("status").type(ecoPurData.statusSelect).type("{enter}");
      cy.log("economic purpose status active dropdown check successfully");
    });
  }

  searchInEconomicPurposetName() {
    cy.fixture(this.test_data).then((data) => {
      var ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(ecoPurData.nameEn);
      cy.log("Successfully search in the economic purpose");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the economic purpose "
    );
  }

  paginationCheck() {
    cy.get('[title="5"] > .ng-star-inserted').click();
    cy.log("Economic purpose pagination check successfully");
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(ecoPurData.nameEn);
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

export const create_economic_purpose = new EconomicPurposeCreation();
