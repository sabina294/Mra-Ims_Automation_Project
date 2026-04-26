class CalendarManagement {
  test_data = Cypress.env("TEST_DATA");

  gridCalendarManagListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-calendar", "submenu-calendar-management");
      cy.log("Successfully Calendar management list page.");
    });
  }

  calendarYearDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var cmdata = data.branchManager.calendarManagement;
      cy.formController("calendar_year").clear().type(cmdata.year);
      cy.log("Successful year selected");
    });
  }

  monthDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var cmdata = data.branchManager.calendarManagement;
      cy.formController("month").clear().type(cmdata.month);
      cy.log("Successful month selected");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const grid_calendar_management = new CalendarManagement();
