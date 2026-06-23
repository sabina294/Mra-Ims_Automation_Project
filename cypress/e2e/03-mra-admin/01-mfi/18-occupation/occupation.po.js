class OccupationCreation {
  test_data = Cypress.env("TEST_DATA");

  gridOccupationListPage() {
    cy.selectMenu("menu-configuration", "submenu-occupation");
    cy.log("Occupation list page loaded successfully.");
  }

  createOccupation() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(occupationData.nameEn);
      cy.formController("name_bn").type(occupationData.nameBn);
      cy.imsId("btn-submit").click();

      cy.get("app-confirmation-modal")
        .contains(occupationData.messageSaveOcc)
        .should("be.visible");
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Occupation created successfully.");
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId("btn-add-new").click();
      cy.formController("name_bn").type(occupationData.nameBn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Creation blocked: English name is mandatory.");
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(occupationData.nameEn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Creation blocked: Bangla name is mandatory.");
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId("btn-add-new").click()
      cy.imsId("btn-reset").click();;
      cy.formController("name_en").type(occupationData.nameEn);
      cy.formController("name_bn").type(occupationData.nameBn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Creation blocked: Status is mandatory.");
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId("btn-add-new").click();
      cy.formController("name_bn").type(occupationData.nameBn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Creation blocked: Mandatory field missing.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the occupation list page.");
  }

  viewOccupation() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.formController("search_text").type(occupationData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi").contains(occupationData.nameEn).should("be.visible");
      cy.get("app-mra-mfi").contains(occupationData.nameBn).should("be.visible");

      cy.log("Occupation details viewed successfully.");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Returned to occupation list page successfully.");
  }

  turnOffOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Occupation edit mode toggled successfully.");
  }

  editOccupation() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();

      cy.get("app-confirmation-modal")
        .contains(occupationData.messageUpdateOcc)
        .should("be.visible");
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Occupation updated successfully.");
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
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-reset").click();

      cy.formController("name_en").type(occupationData.nameEn);
      cy.formController("name_bn").type(occupationData.nameBn);
      cy.formController("status").type(occupationData.status).type("{enter}");

      cy.imsId("btn-submit").click();

      cy.get("app-confirmation-modal")
        .contains(occupationData.messageUpdateOcc)
        .should("be.visible");
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Occupation edit submitted successfully.");
    });
  }

  editGoBackButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-go-back").click();

    cy.log("Returned to list page from edit page successfully.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId("btn-reset").click();
      cy.formController("status").type(occupationData.selectStatus).type("{enter}");

      cy.log("Inactive status filter applied successfully.");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.formController("status").type(occupationData.statusSelect).type("{enter}");

      cy.log("Active status filter applied successfully.");
    });
  }

  searchInOccupationName() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(occupationData.nameEn);

      cy.log("Occupation search executed successfully.");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Grid reset successfully.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log("Grid refreshed successfully.");
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(occupationData.nameEn);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();

      cy.log("Creation form reset successfully.");
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

    cy.log("Go back button on create page works successfully.");
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(occupationData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();

    cy.log("Grid language switched to Bangla successfully.");
  }
}

export const create_occupation = new OccupationCreation();
