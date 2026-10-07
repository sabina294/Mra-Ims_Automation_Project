// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/40-calendar-year/calendar-year.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_calendar_year } from "./calendar-year.po";

describe("40. Calendar Year Module Test Cases", function () {
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

  it("40.01. Verify that the Calendar Year list page loads successfully.", function () {
    grid_calendar_year.gridCalendarListPage();
  });

  it("40.02. Verify that the action button performs the expected action successfully.", function () {
    grid_calendar_year.actionButtonCheck();
  });

  it("40.03. Verify that the user can view Calendar Year details including calendar and holiday details.", function () {
    grid_calendar_year.viewCalendar();
  });

  it("40.04. Verify that the Go Back button redirects the user to the Calendar Year list page.", function () {
    grid_calendar_year.viewGoBackButton();
  });

  it("40.05. Verify that searching by year returns correct results.", function () {
    grid_calendar_year.searchCalendarStatus();
  });

  it("40.06. Verify that the Reset button clears filters and resets the Calendar Year grid.", function () {
    grid_calendar_year.gridResetButtonCheck();
  });

  it("40.07. Verify that the Refresh button reloads the Calendar Year grid successfully.", function () {
    grid_calendar_year.gridRefreshButtonCheck();
  });

  it("40.08. Verify that clicking the Search button navigates and displays the Calendar Year list correctly.", function () {
    grid_calendar_year.gridSearchButtonCheck();
  });

  it("40.09. Verify that Draft records are displayed correctly when the Draft filter is enabled.", function () {
    grid_calendar_year.gridDraftButton();
  });

  it("40.10. Verify that Draft records are hidden correctly when the Draft filter is disabled.", function () {
    grid_calendar_year.gridDraftButtonOff();
  });

  it("40.11. Verify the Calendar Year list breadcrumb.", function () {
    grid_calendar_year.listBreadcrumbCheck();
  });

  it("40.12. Verify the required Calendar Year grid columns.", function () {
    grid_calendar_year.requiredGridColumnsCheck();
  });

  it("40.13. Verify exact year search results.", function () {
    grid_calendar_year.exactYearSearchCheck();
  });

  it("40.14. Verify partial year search results.", function () {
    grid_calendar_year.partialYearSearchCheck();
  });

  it("40.15. Verify a non-existing search shows no records.", function () {
    grid_calendar_year.noResultSearchCheck();
  });

  it("40.16. Verify Reset clears search and restores Calendar Year records.", function () {
    grid_calendar_year.resetRestoresGridCheck();
  });

  it("40.17. Verify Year ascending sorting.", function () {
    grid_calendar_year.yearAscendingSortCheck();
  });

  it("40.18. Verify Year descending sorting.", function () {
    grid_calendar_year.yearDescendingSortCheck();
  });

  it("40.19. Verify the Calendar Year first-page pagination state.", function () {
    grid_calendar_year.firstPagePaginationCheck();
  });

  it("40.20. Verify the grid content switches between English and Bangla.", function () {
    grid_calendar_year.gridLanguageSwitchCheck();
  });

});
