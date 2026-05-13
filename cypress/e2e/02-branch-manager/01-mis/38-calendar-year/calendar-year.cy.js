// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/38-calendar-year/calendar-year.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_calendar_year } from "./calendar-year.po";

describe("38. Calendar Year Module Test Cases", function () {
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

  it("38.01. Verify that the Calendar Year list page loads successfully.", function () {
    grid_calendar_year.gridCalendarListPage();
  });

  it("38.02. Verify that the action button performs the expected action successfully.", function () {
    grid_calendar_year.actionButtonCheck();
  });

  it("38.03. Verify that the user can view Calendar Year details including name and description.", function () {
    grid_calendar_year.viewCalendar();
  });

  it("38.04. Verify that the Go Back button redirects the user to the Calendar Year list page.", function () {
    grid_calendar_year.viewGoBackButton();
  });

  it("38.05. Verify that searching by Calendar Year name returns correct results.", function () {
    grid_calendar_year.searchCalendarStatus();
  });

  it("38.06. Verify that the Reset button clears filters and resets the Calendar Year grid.", function () {
    grid_calendar_year.gridResetButtonCheck();
  });

  it("38.07. Verify that the Refresh button reloads the Calendar Year grid successfully.", function () {
    grid_calendar_year.gridRefreshButtonCheck();
  });

  it("38.08. Verify that clicking the Search button navigates and displays the Calendar Year list correctly.", function () {
    grid_calendar_year.gridSearchButtonCheck();
  });

  it("38.09. Verify that Draft records are displayed correctly when the Draft filter is enabled.", function () {
    grid_calendar_year.gridDraftButton();
  });

  it("38.10. Verify that Draft records are hidden correctly when the Draft filter is disabled.", function () {
    grid_calendar_year.gridDraftButtonOff();
  });

  it("38.11. Verify that the grid content switches correctly between English and Bangla languages.", function () {
    grid_calendar_year.gridLanguageSwitchCheck();
  });
});
