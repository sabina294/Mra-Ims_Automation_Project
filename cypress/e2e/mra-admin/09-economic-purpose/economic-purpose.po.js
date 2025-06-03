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

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the economic purpose list page");
    });
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
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_economic_purpose = new EconomicPurposeCreation();
