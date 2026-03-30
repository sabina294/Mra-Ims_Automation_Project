class OrganizationLegalFormCreation {
  test_data = Cypress.env("TEST_DATA");

  gridOrganizationLegalFromListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-organization-legal-form");
      cy.log("Successfully Organization legal form list page.");
    });
  }

  createOrganizationLegalForm() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var orgLegalFormData = data.mraAdmin.createOrgLegForm;
      cy.formController("name_en").type(orgLegalFormData.nameEn);
      cy.formController("name_bn").type(orgLegalFormData.nameBn);
      cy.imsId("btn-submit").click();

      cy.get("app-confirmation-modal")
        .contains(orgLegalFormData.messageSaveOrgLegForm)
        .and("be.visible");
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully created organization legal form");
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var orgLegalFormData = data.mraAdmin.createOrgLegForm;
      cy.formController("name_bn").type(orgLegalFormData.nameBn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation organization legal form without one mandatory field."
      );
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var orgLegalFormData = data.mraAdmin.createOrgLegForm;
      cy.formController("name_en").type(orgLegalFormData.nameEn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation organization legal form without one mandatory field."
      );
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      cy.imsId("btn-reset").click();

      var orgLegalFormData = data.mraAdmin.createOrgLegForm;
      cy.formController("name_en").type(orgLegalFormData.nameEn);
      cy.formController("name_bn").type(orgLegalFormData.nameBn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation organization legal form without one mandatory field."
      );
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var orgLegalFormData = data.mraAdmin.createOrgLegForm;
      cy.formController("name_bn").type(orgLegalFormData.nameBn);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation education without one mandatory field."
      );
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the organization legal form list page."
    );
  }

  viewOrganizationLegalForm() {
    cy.fixture(this.test_data).then((data) => {
      var orgLegalFormData = data.mraAdmin.createOrgLegForm;
      cy.formController("search_text").type(orgLegalFormData.nameEn),
        cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi").contains(orgLegalFormData.nameEn).and("be.visible");
      cy.get("app-mra-mfi").contains(orgLegalFormData.nameBn).and("be.visible");
      cy.log("Successfully viewed the organization legal form list page");
    });
  }

   viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the organization legal form list page");
  }

  turnOffOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Organization legal form Edit Mode toggled successfully");
  }

  editOrganizationLegalForm() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();

      var orgLegalFormData = data.mraAdmin.createOrgLegForm;
      cy.get("app-confirmation-modal")
        .contains(orgLegalFormData.messageUpdateOrgLegForm)
        .and("be.visible");
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Organization legal form updated successfully");
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

      var orgLegalFormData = data.mraAdmin.createOrgLegForm;
      cy.formController("name_en").type(orgLegalFormData.nameEn);
      cy.formController("name_bn").type(orgLegalFormData.nameBn);
      cy.formController("status").type(orgLegalFormData.status).type("{enter}");

      cy.imsId("btn-submit").click();

      cy.get("app-confirmation-modal")
        .contains(orgLegalFormData.messageUpdateOrgLegForm)
        .and("be.visible");
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully created organization legal form");
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
      var orgLegalFormData = data.mraAdmin.createOrgLegForm;
      cy.imsId("btn-reset").click();
      cy.formController("status")
        .type(orgLegalFormData.selectStatus)
        .type("{enter}");
      cy.log(
        "Organization legal form status inactive dropdown check successfully"
      );
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var orgLegalFormData = data.mraAdmin.createOrgLegForm;
      cy.formController("status")
        .type(orgLegalFormData.statusSelect)
        .type("{enter}");
      cy.log(
        "Organization legal form status active dropdown check successfully"
      );
    });
  }

  searchInOrganizationLegalFromName() {
    cy.fixture(this.test_data).then((data) => {
      var orgLegalFormData = data.mraAdmin.createOrgLegForm;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(orgLegalFormData.nameEn);
      cy.log("Successfully search in the Organization legal form");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Organization legal form "
    );
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var orgLegalFormData = data.mraAdmin.createOrgLegForm;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(orgLegalFormData.nameEn);
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
      var orgLegalFormData = data.mraAdmin.createOrgLegForm;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(orgLegalFormData.search);
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

export const create_organization_legal_form =
  new OrganizationLegalFormCreation();
