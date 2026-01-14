class Samity {
  test_data = Cypress.env("TEST_DATA");

  gridSamityManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu1("menu-samity");
      cy.log("Successfully samity management list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the samity management list page."
    );
  }

  viewSamity() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.fieldOfficer.gridSamityFrom;
      // cy.formController("search_text").type(smData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the samity list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.imsId("btn-reset").click();

    cy.log("Successfully view go back the samity management list page");

  }

  turnOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.get('.ant-switch-inner > .hidden').click();

    cy.log("Samity Management form Edit Mode toggled successfully");
  }

  editResetButton() {
    cy.imsId("btn-reset").click();

    cy.log("Successful clean displaying");
  }

  editSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();

    cy.log("Successful submit validation check.");
  }

  editDraftButton() {
    cy.imsId("btn-draft").click();
    cy.imsId("btn-ok").click();

    cy.log("Successful draft button validation check.");
  }

  editGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.fieldOfficer.gridSamityFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(smData.selectStatus).type("{enter}");
      cy.log("Samity management status inactive dropdown check successfully");
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.fieldOfficer.gridSamityFrom;
      cy.formController("status").type(smData.statusSelect).type("{enter}");
      cy.log("Samity management status active dropdown check successfully");
    });
  }

  searchInSamityManagementName() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.fieldOfficer.gridSamityFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(smData.samityNameEn);
      cy.log("Successfully search in the Samity management");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the samity management "
    );
  }

  gridCheckboxCheck() {
    cy.imsId("row-checkbox-2").click();
    cy.imsId("btn-reset").click();
    cy.log("Checkbox should be clickable and functional.");
  }

  gridCheckboxLockButtonCheck() {
    cy.imsId("btn-lock").click();
    cy.log("Checkbox lock button should be clickable and functional.");
  }

  gridCheckboxUnlockButtonCheck() {
    cy.imsId("row-checkbox-2").click();
    cy.imsId("btn-unlock").click();
    cy.log("Checkbox unlock button should be clickable and functional.");
  }

  gridDraftButton() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  gridDraftButtonOff() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const grid_samity_management = new Samity();
