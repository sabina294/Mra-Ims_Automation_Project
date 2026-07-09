import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class CalendarYear {
  test_data = Cypress.env("TEST_DATA");

  gridCalendarListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-calendar", "submenu-calendar-year");
      cy.log("Successfully Calendar Year list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the Calendar Year list page."
    );
  }

  viewCalendar() {
    cy.fixture(this.test_data).then((data) => {
      var cyData = data.branchManager.gridCalendarYear;

      cy.formController("search_text").type(cyData.search);
      cy.imsId("btn-search").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the Calendar Year list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the Calendar Year list page");
  }

  searchCalendarStatus() {
    cy.fixture(this.test_data).then((data) => {
      var cyData = data.branchManager.gridCalendarYear;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(cyData.search);
      cy.log("Successfully search in the Calendar Year form");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Calendar Year form "
    );
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var cyData = data.branchManager.gridCalendarYear;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(cyData.search);
      cy.imsId("btn-search").click();

      cy.log("Successfully search button click.");
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
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const grid_calendar_year = new CalendarYear();
