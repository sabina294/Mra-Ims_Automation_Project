class FundingOrganizationCreation {
  test_data = Cypress.env("TEST_DATA");

  gridFundingOrganizationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-funding-organizations");
      cy.log("Successfully funding organization list page.");
    });
  }

  createFundingOrganization() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var foData = data.mfiAdmin.createFundingOrganizationFrom;

      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var idShortCode = foData.idShortCode + "-" + randomNumber;

      cy.formController("funding_org_name").type(foData.FundingNameEn);
      cy.formController("loan_funding_organization_id").type(idShortCode);
      cy.formController("funding_organization_type")
        .type(foData.fundingOrgType)
        .type("{enter}");

      cy.imsId("btn-submit").click();

      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(foData.messageSaveFundingOrganization)
        .and("be.visible");

      cy.imsId("btn-ok").click();
      cy.log("Successfully created funding organization");
    });
  }

  createWitoutFundingOrgName() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var foData = data.mfiAdmin.createFundingOrganizationFrom;

      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var idShortCode = foData.idShortCode + "-" + randomNumber;

      cy.formController("loan_funding_organization_id").type(idShortCode);
      cy.formController("funding_organization_type")
        .type(foData.fundingOrgType)
        .type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation funding organization without one mandatory field."
      );
    });
  }

  createWithoutId() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var foData = data.mfiAdmin.createFundingOrganizationFrom;

      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var idShortCode = foData.idShortCode + "-" + randomNumber;

      cy.formController("funding_org_name").type(foData.FundingNameEn);
      cy.formController("funding_organization_type")
        .type(foData.fundingOrgType)
        .type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation funding organization without one mandatory field."
      );
    });
  }

  createWithoutFundingOrgType() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var foData = data.mfiAdmin.createFundingOrganizationFrom;

      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var idShortCode = foData.idShortCode + "-" + randomNumber;

      cy.formController("funding_org_name").type(foData.FundingNameEn);
      cy.formController("loan_funding_organization_id").type(idShortCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation funding organization without one mandatory field."
      );
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      cy.imsId("btn-reset").click();

      var foData = data.mfiAdmin.createFundingOrganizationFrom;

      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var idShortCode = foData.idShortCode + "-" + randomNumber;

      cy.formController("funding_org_name").type(foData.FundingNameEn);
      cy.formController("loan_funding_organization_id").type(idShortCode);
      cy.formController("funding_organization_type")
        .type(foData.fundingOrgType)
        .type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation funding organization without one mandatory field."
      );
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the funding organization list page."
    );
  }

  viewFundingOrganization() {
    cy.fixture(this.test_data).then((data) => {
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.formController("search_text").type(foData.FundingNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mfi-mis").contains(foData.FundingNameEn).and("be.visible");
      cy.log("Successfully viewed the funding organization list page");
    });
  }

   viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the funding organization list page");

  }

  turnOffEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log(" Funding organization form Edit Mode toggled successfully");
  }

  editFundingOrganization() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.get("app-confirmation-modal")
        .contains(foData.messageUpdateFundingOrganization)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Funding organization updated successfully");
    });
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var foData = data.mfiAdmin.createFundingOrganizationFrom;

      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var idShortCode = foData.idShortCode + "-" + randomNumber;

      cy.formController("funding_org_name").type(foData.FundingNameEn);
      cy.formController("loan_funding_organization_id").type(idShortCode);
      cy.formController("funding_organization_type")
        .type(foData.fundingOrgType)
        .type("{enter}");

      cy.imsId("btn-submit").click();

      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(foData.messageSaveFundingOrganization)
        .and("be.visible");

      cy.imsId("btn-ok").click();
      cy.log("Successfully created funding organization");
    });
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-reset").click();
    cy.imsId("btn-go-back").click();

    cy.log("Successful clean displaying");
  }

  editGoBackButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(foData.selectStatus).type("{enter}");
      cy.log(
        "Funding organization status inactive dropdown check successfully"
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.formController("status").type(foData.statusSelect).type("{enter}");
      cy.log("Funding organization status active dropdown check successfully");
    });
  }

  searchInFundingOrganizationName() {
    cy.fixture(this.test_data).then((data) => {
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(foData.FundingNameEn);
      cy.log("Successfully search in the funding organization");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }
  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the funding organization "
    );
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var foData = data.mfiAdmin.createFundingOrganizationFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("funding_org_name").type(foData.FundingNameEn);
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

export const create_funding_organization = new FundingOrganizationCreation();
