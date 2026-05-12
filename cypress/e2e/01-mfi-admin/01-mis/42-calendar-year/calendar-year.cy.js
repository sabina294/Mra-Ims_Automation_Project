// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/42-calendar-year/calendar-year.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_calendar_year } from "./calendar-year.po";

describe("42. Calendar Year Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.mfiAdminUserId,
        d.credential.mfiAdminPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("42.01. Verify the calendar year list page loads correctly.", function () {
    create_calendar_year.gridCalendarListPage();
  });

  it("42.02. Verify a new calendar year record is created successfully when all required fields are filled with valid data.", function () {
    create_calendar_year.createCalendar();
  });

  it("42.03. Verify mfi-admin to successfully approve an calendar year record after creation.", function () {
    create_calendar_year.approveCalendare();
  });

  it("42.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_calendar_year.actionButtonCheck();
  });

  it("42.05. Verify the user can successfully view the calendar year information, including the name and description.", function () {
    create_calendar_year.viewCalendar();
  });

  it("42.06. Verify that clicking the go back button on the calendar year view page redirects the user to the calendar year list page.", function () {
    create_calendar_year.viewGoBackButton();
  });

  it("42.07. Verify that the search results are displayed correctly when searching by calendar year name.", function () {
    create_calendar_year.searchCalendarStatus();
  });

  it("42.08. Verify the grid list resets successfully when the reset button is clicked on the calendar year page.", function () {
    create_calendar_year.gridResetButtonCheck();
  });

  it("42.09. Verify that the grid list is refreshed successfully when the refresh button is clicked on the calendar year page.", function () {
    create_calendar_year.gridRefreshButtonCheck();
  });

  it("42.10. Verify display the grid list successfully when the Draft button on is clicked on the calendar year page", function () {
    create_calendar_year.gridDraftButton();
  });

  it("42.11. Verify display the grid list successfully when the Draft button off is clicked on the calendar year page", function () {
    create_calendar_year.gridDraftButtonOff();
  });

  it('42.12. Verify the functionality and expected behavior of the "Successful Office Status" dropdown.', function () {
    create_calendar_year.statusOfficeDropdownCheck();
  });

  it("42.13. Verify the calendar year creation reset button clears all entered input values.", function () {
    create_calendar_year.createResetButtonCheck();
  });

  it("42.14. Verify that clicking the submit button  on the calendar year create page redirects the user to the calendar year list page.", function () {
    create_calendar_year.createSubmitButtonCheck();
  });

  it("42.15. Verify that clicking the go back button on the calendar year create page redirects the user to the calendar year list page.", function () {
    create_calendar_year.createGoBackButtonCheck();
  });

  it("42.16. Verify that when the user clicks the Search button on the calendar year grid page, the system redirects to the calendar year List page..", function () {
    create_calendar_year.gridSearchButtonCheck();
  });

  it("42.17. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_calendar_year.gridLanguageSwitchCheck();
  });
});
