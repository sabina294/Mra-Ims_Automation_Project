import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class SamityClose {
  test_data = Cypress.env("TEST_DATA");

  gridSamityCloseListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-samity", "submenu-samity-close");
      cy.log("Successfully Samity close list page.");
    });
  }

  samityClose() {
    cy.fixture(this.test_data).then((data) => {
      var scData = data.branchManager.samityCloseFrom;
      cy.formController("search_text").type(scData.samityNameEn);
      cy.imsId("btn-search").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-mis-table-action-close").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully Samity close");
    });
  }

  approveSamityClose() {
    cy.fixture(this.test_data).then((data) => {
      var scData = data.branchManager.samityCloseFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-samity-close").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-lock").click();
      cy.imsId("btn-approve").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully approve samity close");
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-samity", "submenu-samity-close");
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the Samity close list page.");
  }

  viewSamityClose() {
    cy.fixture(this.test_data).then((data) => {
      var scData = data.branchManager.samityCloseFrom;
      cy.formController("search_text").type(scData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the Samity close list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the Samity close list page");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var scData = data.branchManager.samityCloseFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(scData.selectStatus).type("{enter}");
      cy.log("Samity close status inactive dropdown check successfully");
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var scData = data.branchManager.samityCloseFrom;
      cy.formController("status").type(scData.statusSelect).type("{enter}");
      cy.log("Samity close status active dropdown check successfully");
    });
  }
  searchInSamityCloseName() {
    cy.fixture(this.test_data).then((data) => {
      var scData = data.branchManager.samityCloseFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(scData.samityNameEn);
      cy.log("Successfully search in the Samity close");
    });
  }
  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var scData = data.branchManager.samityCloseFrom;
      cy.formController("office_id").type(scData.SelectOffice).type("{enter}");
      cy.log("Samity close status office dropdown check successfully");
    });
  }
  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Samity close "
    );
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var scData = data.branchManager.samityCloseFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(scData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
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

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const Samity_close = new SamityClose();
