import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class CalendarYearCreation {
  test_data = Cypress.env("TEST_DATA");

  gridCalendarListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-calendar", "submenu-calendar-year");
      cy.log("Successfully Calendar Year list page.");
    });
  }

  createCalendar() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      // cy.imsId("btn-submit").and("be.visible");

      var cyData = data.mfiAdmin.createCalendarYear;
      cy.imsId("btn-add").click();
      cy.formController("holiday_title_bn").type(cyData.holidayTitleBn);
      cy.formController("holiday_title_en").type(cyData.holidayTitleEn);
      cy.formController("day_of_month").type(cyData.dayOfMonth).type("{enter}");
      cy.formController("month_of_year")
        .type(cyData.monthOfYear)
        .type("{enter}");

      cy.imsId("btn-modal-submit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(cyData.messageSaveCalendar)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created Calendar Year ");
    });
  }

  approveCalendare() {
    cy.imsId("menu-my-task").click();
    cy.imsId("submenu-awaiting-calendar-year").click();
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.imsId("btn-add").click();
    cy.imsId("btn-yes").click();
    cy.wait(5000);
    cy.imsId("btn-ok").click();
    cy.log("Successfully approve Calendar Year ");
  }

  actionButtonCheck() {
    cy.selectMenu("menu-calendar", "submenu-calendar-year");
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the Calendar Year list page."
    );
  }

  viewCalendar() {
    cy.fixture(this.test_data).then((data) => {
      var cyData = data.mfiAdmin.createCalendarYear;

      cy.formController("search_text").type(cyData.search);
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
      var cyData = data.mfiAdmin.createCalendarYear;
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

  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var cyData = data.mfiAdmin.createCalendarYear;
      cy.formController("office_id").type(cyData.selectOffice).type("{enter}");
      cy.log(
        "Calendar year status office dropdown check successfully"
      );
    });
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful clean displaying.");
    });
  }

  createSubmitButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successful submit button working.");
    });
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var cyData = data.mfiAdmin.createCalendarYear;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(cyData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_calendar_year = new CalendarYearCreation();
