// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/43-calendar-management/calendar-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_calendar_management } from "./calendare-management.po";

describe("43. Calendar Management Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.branchManagerUserId,
        d.credential.branchManagerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("43.01. Verify the calendar management list page loads correctly.", function () {
    grid_calendar_management.gridCalendarManagListPage();
  });

  // it("43.02. Verify check if the filter for calendar year results works correctly with the year dropdown ", function () {
  //   grid_calendar_management.calendarYearDropdownCheck();
  // });

  // it("43.03. Verify check if the filter for month results works correctly with the month dropdown ", function () {
  //   grid_calendar_management.monthDropdownCheck();
  // });

  it("43.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_calendar_management.gridLanguageSwitchCheck();
  });
});
