class OfficeGrid {
  test_data = Cypress.env("TEST_DATA");

  gridOfficePage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu1("menu-office");
      cy.log("Successfully office list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the office list page."
    );
  }

  viewOffice() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.fieldOfficer.gridOfficeFrom;
      cy.formController("search_text").type(omData.officeNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mfi-mis").contains(omData.officeNameEn).and("be.visible");

      cy.log("Successfully viewed the office list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successful view go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.fieldOfficer.gridOfficeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(omData.selectStatus).type("{enter}");
      cy.log("office status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.fieldOfficer.gridOfficeFrom;
      cy.formController("status").type(omData.statusSelect).type("{enter}");
      cy.log("officestatus active dropdown check successfully");
    });
  }

  searchInOfficeManagementName() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.fieldOfficer.gridOfficeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(omData.officeNameEn);
      cy.log("Successfully search in the office");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the office "
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

  createGoBackButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-back").click();
    cy.log("Successful go back button check.");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const grid_office = new OfficeGrid();

