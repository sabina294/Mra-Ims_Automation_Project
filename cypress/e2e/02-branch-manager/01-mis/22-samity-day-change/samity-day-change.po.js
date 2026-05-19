import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class SamityDayChange {
  test_data = Cypress.env("TEST_DATA");

  gridSamityChangeListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-samity", "submenu-samity-day-change");
      cy.log("Successfully samity day change list page.");
    });
  }

  samityDayChange() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.branchManager.samityDayChangeFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-mis-table-action-change").click();
      cy.formController("new_samity_day").click();
      cy.get('.ant-select-item-option')
        .should('have.length.greaterThan', 0);
      cy.get('.ant-select-item-option')
        .first()
        .click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .should("be.visible")
        .and("contain", sdData.messageSamityDayChange);
      cy.imsId("btn-ok").click();
      cy.log("Successfully samity day changed");
    });
  }
  approveSamityDayChange() {
    cy.fixture(this.test_data).then((data) => {
      var sdData = data.branchManager.samityDayChangeFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-samity-day-change").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-lock").click();
      cy.imsId("btn-approve").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully approve samity change");
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-samity", "submenu-samity-day-change");
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the samity day change list page."
    );
  }

  viewSamityDayChange() {
    cy.fixture(this.test_data).then((data) => {
      var sdData = data.branchManager.samityDayChangeFrom;
      cy.imsId("btn-table-action-view").click();

      cy.log("Successfully viewed the samity change list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the samity change list page");
  }

  dayChangeResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var sdData = data.branchManager.samityDayChangeFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-mis-table-action-change").click();
      cy.imsId("btn-reset").click();
      cy.log("Successfully field officer change reset button check");
    });
  }

  dayChangeSubmitButtonCheck() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successfully field officer change submit button check");

  }

  dayChangeApproveButtonCheck() {
    cy.imsId("btn-approve").click();
    cy.imsId("btn-ok").click();
    cy.log("Successfully field officer change approve button check");
  }

  dayChangeGoBackButtonCheck() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully field officer change go back button check");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var sdData = data.branchManager.samityDayChangeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(sdData.selectStatus).type("{enter}");
      cy.log(
        "Samity day change status inactive dropdown check successfully"
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var sdData = data.branchManager.samityDayChangeFrom;
      cy.formController("status").type(sdData.statusSelect).type("{enter}");
      cy.log(
        "Samity day change status active dropdown check successfully"
      );
    });
  }
  searchInSamityDayChangeName() {
    cy.fixture(this.test_data).then((data) => {
      var sdData = data.branchManager.samityDayChangeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(sdData.samityNameEn);
      cy.log("Successfully search in the Samity day change");
    });
  }
  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var sdData = data.branchManager.samityDayChangeFrom;
      cy.formController("office_id").type(sdData.SelectOffice).type("{enter}");
      cy.log(
        "Samity day change status office dropdown check successfully"
      );
    });
  }
  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Samity day change "
    );
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var sdData = data.branchManager.samityDayChangeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(sdData.search);
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

export const samity_day_change = new SamityDayChange();
