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
      cy.formController("search_text").type(smData.samityNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mfi-mis").contains(smData.samityNameEn).and("be.visible");

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the samity list page");
    });
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
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const grid_samity_management = new Samity();
