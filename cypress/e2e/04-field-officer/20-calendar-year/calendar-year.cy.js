// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/20-calendar-year/calendar-year.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_calendar_year } from "./calendar-year.po";

describe("20. Calendar Year Module Test Cases", function () {
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

  it("20.01. Verify the calendar year list page loads correctly.", function () {
    grid_calendar_year.gridCalendarListPage();
  });

  it("20.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_calendar_year.actionButtonCheck();
  });

  it("20.03. Verify the user can successfully view the calendar year information, including the name and description.", function () {
    grid_calendar_year.viewCalendar();
  });

  it("20.04. Verify that clicking the go back button on the calendar year view list page.", function () {
    grid_calendar_year.viewGoBackButton();
  });

  it("20.05. Verify that the search results are displayed correctly when searching by calendar year name.", function () {
    grid_calendar_year.searchCalendarStatus();
  });

  it("20.06. Verify the grid list resets successfully when the reset button is clicked on the calendar year page.", function () {
    grid_calendar_year.gridResetButtonCheck();
  });

  it("20.07. Verify that the grid list is refreshed successfully when the refresh button is clicked on the calendar year page.", function () {
    grid_calendar_year.gridRefreshButtonCheck();
  });

  it("20.08. Verify display the grid list successfully when the Draft button on is clicked on the calendar year page", function () {
    grid_calendar_year.gridDraftButton();
  });

  it("20.09. Verify display the grid list successfully when the Draft button off is clicked on the calendar year page", function () {
    grid_calendar_year.gridDraftButtonOff();
  });

  it("20.10. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_calendar_year.gridLanguageSwitchCheck();
  });
});
