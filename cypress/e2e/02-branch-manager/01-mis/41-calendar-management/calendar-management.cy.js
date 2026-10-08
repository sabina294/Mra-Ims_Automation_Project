// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/41-calendar-management/calendar-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_calendar_management } from "./calendare-management.po";

describe("41. Calendar Management Module Test Cases", function () {
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

  it("41.01. Verify that the Calendar Management list page loads successfully", function () {
    grid_calendar_management.gridCalendarManagListPage();
  });

  it("41.02. Verify that the Calendar Management breadcrumb is visible.", function () {
    grid_calendar_management.breadcrumbCheck();
  });

  it("41.03. Verify that office is disabled and year and month selectors have selected values.", function () {
    grid_calendar_management.calendarControlsCheck();
  });

  it("41.04. Verify that holiday details display Date, Holiday Title and Holiday Type columns.", function () {
    grid_calendar_management.holidayColumnsCheck();
  });

  it("41.05. Verify that holiday details display valid dates and required data or a visible empty state.", function () {
    grid_calendar_management.holidayRecordsOrEmptyCheck();
  });

  it("41.06. Verify that the grid list content switches correctly from English to Bangla language", function () {
    grid_calendar_management.gridLanguageSwitchCheck();
  });
});
