import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class CalendarManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridCalendarManagListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-calendar", "submenu-calendar-management");
      cy.log(messages.ui.gridListMessage);
    });
  }

  gridOfficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      const cmData = data.mfiAdmin.gridCalendarManagement;
      cy.formController("office_id").type(cmData.office).type("{enter}");
      cy.log("Successfully Calendar management office dropdown page.");
    });
  }

  calendarYearDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const cmData = data.mfiAdmin.gridCalendarManagement;
      cy.formController("calendar_year").clear().type(cmData.year);
      cy.log("Successful year selected");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_calendar_management = new CalendarManagementCreation();
