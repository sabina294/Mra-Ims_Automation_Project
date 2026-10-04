// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/24-holiday/holiday.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_holiday } from "./holiday.po";

describe("24. Holiday Module Test Cases", function () {
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

  it("24.01. Verify that the Holiday List page loads successfully.", function () {
    create_holiday.gridHolidayListPage();
  });

  it("24.02. Verify that a new holiday record is created successfully with valid required data.", function () {
    create_holiday.createHoliday();
  });

  // it("24.03. Verify that the MFI Admin can successfully approve a holiday record after creation.", function () {
  //   create_holiday.approveHoliday();
  // });

  it("24.04. Verify that the search results are displayed correctly when searching by holiday name.", function () {
    create_holiday.searchHolidayTitle();
  });

  it("24.05. Verify that the calendar year dropdown displays the correct results.", function () {
    create_holiday.selectHolidayYear();
  });

  it("24.06. Verify that the Holiday grid list resets successfully when the Reset button is clicked.", function () {
    create_holiday.gridResetButtonCheck();
  });

  it("24.07. Verify that the Holiday grid list refreshes successfully when the Refresh button is clicked.", function () {
    create_holiday.gridRefreshButtonCheck();
  });

  it("24.08. Verify that the system redirects to the Holiday List page when the Search button is clicked.", function () {
    create_holiday.gridSearchButtonCheck();
  });

  it("24.09. Verify that the Holiday grid list displays draft records successfully when the Draft button is enabled.", function () {
    create_holiday.gridDraftButton();
  });

  it("24.10. Verify that the Holiday grid list displays non-draft records successfully when the Draft button is disabled.", function () {
    create_holiday.gridDraftButtonOff();
  });

  it("24.11. Verify that validation messages are displayed for required fields when the Submit button is clicked with empty inputs.", function () {
    create_holiday.createSubmitButtonCheck();
  });

  it("24.12. Verify that the form fields are reset successfully when the Reset button is clicked.", function () {
    create_holiday.createResetButtonCheck();
  });

  it("24.13. Verify that the system navigates back successfully when the Go Back button is clicked.", function () {
    create_holiday.createGoBackButtonCheck();
  });

  it("24.14. Verify Holiday: the list breadcrumb is correct.", function () {
    create_holiday.listBreadcrumbCheck();
  });

  it("24.15. Verify Holiday: all required grid columns are visible.", function () {
    create_holiday.requiredGridColumnsCheck();
  });

  it("24.16. Verify Holiday: Reset clears entered search text.", function () {
    create_holiday.resetSearchInputCheck();
  });

  it("24.17. Verify Holiday: Refresh retains the list route and columns.", function () {
    create_holiday.refreshListCheck();
  });

  it("24.18. Verify Holiday: Draft can be enabled and disabled.", function () {
    create_holiday.draftToggleStateCheck();
  });

  it("24.19. Verify Holiday: the add button is visible and enabled.", function () {
    create_holiday.addButtonAvailableCheck();
  });

  it("24.20. Verify Holiday: holiday dates match their years and rows contain holiday data.", function () {
    create_holiday.holidayDateAndYearCheck();
  });

  it("24.21. Verify Holiday: pagination starts on page one with Previous disabled.", function () {
    create_holiday.firstPagePaginationCheck();
  });

  it("24.22. Verify that the Holiday grid list content changes correctly from English to Bangla.", function () {
    create_holiday.gridLanguageSwitchCheck();
  });
});
