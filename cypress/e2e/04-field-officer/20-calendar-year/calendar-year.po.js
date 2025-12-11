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
      var cyData = data.fieldOfficer.gridCalendarYear;

      cy.formController("search_text").type(cyData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.log("Successfully viewed the Calendar Year list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully viewed go back the calendar year list page");

  }

  searchCalendarStatus() {
    cy.fixture(this.test_data).then((data) => {
      var cyData = data.fieldOfficer.gridCalendarYear;
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

export const grid_calendar_year = new CalendarYear();
