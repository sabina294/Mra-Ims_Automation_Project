class MaritalStatusCreation {
  test_data = Cypress.env("TEST_DATA");

  // ---------------- List Page ----------------
  gridMaritalStatusListPage() {
    cy.fixture(this.test_data).then(() => {
      cy.selectMenu("menu-configuration", "submenu-marital-status");
      cy.log("Marital status list page loaded successfully.");
    });
  }

  // ---------------- Create Marital Status ----------------
  createMaritalStatus() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;

      cy.imsId("btn-add-new").click();
      cy.formController("description_en").type(maritalStatusData.nameEn);
      cy.formController("description_bn").type(maritalStatusData.nameBn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(maritalStatusData.messageSaveMalSt)
        .should("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Marital status created successfully.");
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;

      cy.imsId("btn-add-new").click();
      cy.formController("description_bn").type(maritalStatusData.nameBn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Creation blocked: English name is mandatory.");
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;

      cy.imsId("btn-add-new").click();
      cy.formController("description_en").type(maritalStatusData.nameEn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Creation blocked: Bangla name is mandatory.");
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;

      cy.imsId("btn-add-new").click();
      cy.imsId("btn-reset").click();
      cy.formController("description_en").type(maritalStatusData.nameEn);
      cy.formController("description_bn").type(maritalStatusData.nameBn);
      // intentionally not selecting status
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Creation blocked: Status is mandatory.");
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;

      cy.imsId("btn-add-new").click();
      cy.formController("description_en").type(maritalStatusData.nameEn);
      // leave other mandatory fields empty
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Creation blocked: Mandatory field missing.");
    });
  }

  // ---------------- Action Button ----------------
  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the marital status list page.");
  }

  // ---------------- View Marital Status ----------------
  viewMaritalStatus() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;

      cy.formController("search_text").type(maritalStatusData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi")
        .contains(maritalStatusData.nameEn)
        .should("be.visible");
      cy.get("app-mra-mfi")
        .contains(maritalStatusData.nameBn)
        .should("be.visible");

      cy.log("Marital status details viewed successfully.");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Returned successfully to the marital status list page from view.");
  }

  // ---------------- Edit Marital Status ----------------
  turnOffOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click(); // toggle edit mode
    cy.imsId("btn-go-back").click();

    cy.log("Edit mode toggled successfully.");
  }

  editMaritalStatus() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;

      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(maritalStatusData.messageUpdateMaSt)
        .should("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Marital status updated successfully.");
    });
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-reset").click();
    cy.imsId("btn-go-back").click();

    cy.log("Edit form reset successfully.");
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;

      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-reset").click();

      cy.formController("description_en").type(maritalStatusData.nameEn);
      cy.formController("description_bn").type(maritalStatusData.nameBn);
      cy.formController("status")
        .type(maritalStatusData.status)
        .type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(maritalStatusData.messageUpdateMaSt)
        .should("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Marital status edited and submitted successfully.");
    });
  }

  editGoBackButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-go-back").click();
    cy.log("Returned successfully to the marital status list page from edit.");
  }

  // ---------------- Filter / Search ----------------
  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status")
        .type(maritalStatusData.selectStatus)
        .type("{enter}");
      cy.log("Inactive status filter applied successfully.");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;
      cy.formController("status")
        .type(maritalStatusData.statusSelect)
        .type("{enter}");
      cy.log("Active status filter applied successfully.");
    });
  }

  searchInMaritalStatusName() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(maritalStatusData.nameEn);
      cy.log("Search by marital status name performed successfully.");
    });
  }

  // ---------------- Grid Operations ----------------
  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Grid reset successfully.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log("Grid refreshed successfully.");
  }

  // ---------------- Create Form Operations ----------------
  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("description_en").type(maritalStatusData.nameEn);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Create form reset successfully.");
    });
  }

  createValidationMessageCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.imsId("btn-go-back").click();
    cy.log("Validation messages displayed successfully.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-go-back").click();
    cy.log("Returned successfully to the marital status list page from create form.");
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(maritalStatusData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  // ---------------- Language Switch ----------------
  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Grid language switched to Bangla successfully.");
  }
}

export const create_marital_status = new MaritalStatusCreation();
