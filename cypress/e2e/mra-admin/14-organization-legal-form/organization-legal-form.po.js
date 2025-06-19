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

  viewOrganizationLegalForm() {
    cy.fixture(this.test_data).then((data) => {
      var orgLegalFormData = data.mraAdmin.createOrgLegForm;
      cy.formController("search_text").type(orgLegalFormData.nameEn),
        cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi").contains(orgLegalFormData.nameEn).and("be.visible");
      cy.get("app-mra-mfi").contains(orgLegalFormData.nameBn).and("be.visible");

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the organization legal form list page");
    });
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

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_organization_legal_form =
  new OrganizationLegalFormCreation();
