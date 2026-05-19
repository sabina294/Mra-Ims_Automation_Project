import messages from "../../../support/constants/messages";
import { GRID } from "../../../support/constants/selectors";
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
      cy.log("Successfully viewed the office list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successful view go back button check.");
  }

  turnOnEditMode() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.fieldOfficer.gridOfficeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(omData.search);
      cy.imsId("btn-search").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("switch-button").click();

      cy.log("Office form Edit Mode toggled successfully");
    });
  }

  editSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();

    cy.log("Successful submit validation check.");
  }

  editGoBackButton() {
    cy.imsId("btn-back").click();
    cy.log("Successful edit go back button check.");
  }

  editDraftButton() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.fieldOfficer.gridOfficeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(omData.search);
      cy.imsId("btn-search").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("switch-button").click();
      cy.imsId("btn-draft").click();
      cy.imsId("btn-ok").click();

      cy.log("Office form Edit Mode toggled successfully");
    });
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
    cy.imsId(GRID.BUTTONS.DRAFT_ON)
      .check({ force: true });
    cy.log(messages.ui.draftOnMessage);
  }

  gridDraftButtonOff() {
    cy.imsId(GRID.BUTTONS.DRAFT_OFF)
      .uncheck({ force: true });
    cy.log(messages.ui.draftOffMessage);
  }


  createGoBackButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-back").click();
    cy.log("Successful go back button check.");
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.fieldOfficer.gridOfficeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(omData.search);
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

export const grid_office = new OfficeGrid();

