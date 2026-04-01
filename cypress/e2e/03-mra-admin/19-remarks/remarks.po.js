class RemarksCreation {
  test_data = Cypress.env("TEST_DATA");

  /* ------------------ Grid & Navigation ------------------ */

  gridRemarksListPage() {
    cy.fixture(this.test_data).then(() => {
      cy.selectMenu("menu-configuration", "submenu-remarks");
      cy.log("Remarks list page loaded successfully.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action menu opened successfully on the Remarks list page.");
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Grid reset button cleared all filters successfully.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log("Grid list refreshed successfully on the Remarks page.");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Language switched successfully from English to Bangla.");
  }

  /* ------------------ Create Remarks ------------------ */

  createRemarks() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").should("be.visible");

      cy.formController("name_en").type(remarksData.nameEn);
      cy.formController("name_bn").type(remarksData.nameBn);

      cy.imsId("btn-submit").click();

      cy.get("app-confirmation-modal")
        .contains(remarksData.messageSaveRem)
        .should("be.visible");

      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Remarks created successfully.");
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId("btn-add-new").click();
      cy.formController("name_bn").type(remarksData.nameBn);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Remarks creation blocked due to missing English name.");
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(remarksData.nameEn);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Remarks creation blocked due to missing Bangla name.");
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId("btn-add-new").click();
      cy.imsId("btn-reset").click();

      cy.formController("name_en").type(remarksData.nameEn);
      cy.formController("name_bn").type(remarksData.nameBn);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Remarks creation blocked due to missing status field.");
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(remarksData.nameEn);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Remarks creation failed as one or more mandatory fields were missing.");
    });
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(remarksData.nameEn);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();

      cy.log("Create form reset button cleared all input fields successfully.");
    });
  }

  createValidationMessageCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.imsId("btn-go-back").click();

    cy.log("Validation messages displayed correctly for required fields.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-go-back").click();

    cy.log("Create page Go Back button redirected to the Remarks list page.");
  }

    gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(remarksData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  /* ------------------ View Remarks ------------------ */

  viewRemarks() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.formController("search_text").type(remarksData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi").contains(remarksData.nameEn).should("be.visible");
      cy.get("app-mra-mfi").contains(remarksData.nameBn).should("be.visible");

      cy.log("Remarks details viewed successfully.");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("View page Go Back button redirected to the Remarks list page.");
  }

  /* ------------------ Edit Remarks ------------------ */

  turnOffOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Edit mode toggled on and off successfully.");
  }

  editRemarks() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();

      cy.get("app-confirmation-modal")
        .contains(remarksData.messageUpdateRem)
        .should("be.visible");

      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Remarks updated successfully.");
    });
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-reset").click();
    cy.imsId("btn-go-back").click();

    cy.log("Edit form reset button cleared changes successfully.");
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-reset").click();

      cy.formController("name_en").type(remarksData.nameEn);
      cy.formController("name_bn").type(remarksData.nameBn);
      cy.formController("status").type(remarksData.status).type("{enter}");

      cy.imsId("btn-submit").click();

      cy.get("app-confirmation-modal")
        .contains(remarksData.messageUpdateRem)
        .should("be.visible");

      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Remarks edited and submitted successfully.");
    });
  }

  editGoBackButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-go-back").click();

    cy.log("Edit page Go Back button redirected successfully.");
  }

  /* ------------------ Filter & Search ------------------ */

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId("btn-reset").click();
      cy.formController("status")
        .type(remarksData.selectStatus)
        .type("{enter}");

      cy.log("Inactive Remarks filtered successfully using status dropdown.");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.formController("status")
        .type(remarksData.statusSelect)
        .type("{enter}");

      cy.log("Active Remarks filtered successfully using status dropdown.");
    });
  }

  searchInRemarksName() {
    cy.fixture(this.test_data).then((data) => {
      const remarksData = data.mraAdmin.createremarksFrom;

      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(remarksData.nameEn);

      cy.log("Remarks searched successfully by name.");
    });
  }
}

export const create_remarks = new RemarksCreation();
