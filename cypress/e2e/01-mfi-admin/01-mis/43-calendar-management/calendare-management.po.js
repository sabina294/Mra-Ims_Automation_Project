class CalendarManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridCalendarManagListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-calendar", "submenu-calendar-management");
      cy.log("Successfully Calendar management list page.");
    });
  }

  gridOfficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      var cmData = data.mfiAdmin.gridCalendarManagement;
      cy.formController("office_id").type(cmData.office).type("{enter}");
      cy.log("Successfully Calendar management office dropdown page.");
    });
  }

  calendarYearDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var cmData = data.mfiAdmin.gridCalendarManagement;
      cy.formController("calendar_year").clear().type(cmData.year);
      cy.log("Successful year selected");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_calendar_management = new CalendarManagementCreation();
