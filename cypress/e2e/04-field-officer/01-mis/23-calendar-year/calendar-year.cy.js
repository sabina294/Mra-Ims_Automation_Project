// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/23-calendar-year/calendar-year.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_calendar_year } from "./calendar-year.po";

describe("23. Calendar Year Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.fieldOfficerUserId,
        d.credential.fieldOfficerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("23.01. Verify the calendar year list page loads correctly.", function () {
    grid_calendar_year.gridCalendarListPage();
  });

  it("23.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_calendar_year.actionButtonCheck();
  });

  it("23.03. Verify the user can successfully view the calendar year information, including the name and description.", function () {
    grid_calendar_year.viewCalendar();
  });

  it("23.04. Verify that clicking the go back button on the calendar year view list page.", function () {
    grid_calendar_year.viewGoBackButton();
  });

  it("23.05. Verify that the search results are displayed correctly when searching by calendar year name.", function () {
    grid_calendar_year.searchCalendarStatus();
  });

  it("23.06. Verify the grid list resets successfully when the reset button is clicked on the calendar year page.", function () {
    grid_calendar_year.gridResetButtonCheck();
  });

  it("23.07. Verify that the grid list is refreshed successfully when the refresh button is clicked on the calendar year page.", function () {
    grid_calendar_year.gridRefreshButtonCheck();
  });

  it("23.08. Verify display the grid list successfully when the Draft button on is clicked on the calendar year page", function () {
    grid_calendar_year.gridDraftButton();
  });

  it("23.09. Verify display the grid list successfully when the Draft button off is clicked on the calendar year page", function () {
    grid_calendar_year.gridDraftButtonOff();
  });

  it("23.10. Verify that when the user clicks the Search button on the Calendar Year grid page, the system redirects to the Calendar Year List page..", function () {
    grid_calendar_year.gridSearchButtonCheck();
  });

  it("23.11. Verify Calendar Year: the list displays the correct breadcrumb.", function () {
    grid_calendar_year.listBreadcrumbCheck();
  });

  it("23.12. Verify Calendar Year: the grid displays all required columns.", function () {
    grid_calendar_year.requiredGridColumnsCheck();
  });

  it("23.13. Verify Calendar Year: calendar start and end dates match the year.", function () {
    grid_calendar_year.calendarDateRangeCheck();
  });

  it("23.14. Verify Calendar Year: a non-existing search displays no records.", function () {
    grid_calendar_year.noResultSearchCheck();
  });

  it("23.15. Verify Calendar Year: clearing search restores the original record.", function () {
    grid_calendar_year.clearSearchRestoresGridCheck();
  });

  it("23.16. Verify Calendar Year: Refresh keeps the list available.", function () {
    grid_calendar_year.refreshRetainsListCheck();
  });

  it("23.17. Verify Calendar Year: Year supports ascending sorting.", function () {
    grid_calendar_year.ascendingSortCheck();
  });

  it("23.18. Verify Calendar Year: Year supports descending sorting.", function () {
    grid_calendar_year.descendingSortCheck();
  });

  it("23.19. Verify Calendar Year: pagination starts on page one with Previous disabled.", function () {
    grid_calendar_year.firstPagePaginationCheck();
  });

  it("23.20. Verify Calendar Year: a grid record exposes the View action.", function () {
    grid_calendar_year.viewActionAvailableCheck();
  });

  it("23.21. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_calendar_year.gridLanguageSwitchCheck();
  });
});
