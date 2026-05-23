import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
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
      var omData = data.branchManager.gridOfficeFrom;
      cy.formController("search_text").type(omData.officeNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the office list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the office list page");
  }

  editGoBackButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.branchManager.gridOfficeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(omData.selectStatus).type("{enter}");
      cy.log("office status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.branchManager.gridOfficeFrom;
      cy.formController("status").type(omData.statusSelect).type("{enter}");
      cy.log("officestatus active dropdown check successfully");
    });
  }

  searchInOfficeManagementName() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.branchManager.gridOfficeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(omData.officeNameEn);
      cy.log("Successfully search in the office");
    });
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var omData = data.branchManager.gridOfficeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(omData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
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

  gridDraftButton() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
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

  gridCheckboxCheck() {
    cy.imsId("header-checkbox").click();
    cy.log("Checkbox lock button should be clickable and functional.");
  }

  gridCheckboxLockButtonCheck() {
    cy.imsId("btn-lock").click();
    cy.log("Checkbox lock button should be clickable and functional.");
  }

  gridCheckboxUnlockButtonCheck() {
    cy.imsId("header-checkbox").click();
    cy.imsId("btn-unlock").click();
    cy.log("Checkbox unlock button should be clickable and functional.");
  }


  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const grid_office = new OfficeGrid();
