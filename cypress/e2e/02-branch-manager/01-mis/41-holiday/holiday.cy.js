// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/41-holiday/holiday.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_holiday } from "./holiday.po";

describe("41. holiday Module Test Cases", function () {
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

  it("41.01. Verify that the Holiday List page loads successfully and displays all required grid data.", function () {
    create_holiday.gridHolidayListPage();
  });

  it("41.02. Verify that a new holiday record is created successfully when all required fields are filled with valid data.", function () {
    create_holiday.createHoliday();
  });

  it("41.03. Verify that clicking the Reset button on the Holiday Create page clears all entered input values.", function () {
    create_holiday.createResetButtonCheck();
  });

  it("41.04. Verify that validation messages are displayed for all required fields when the Submit button is clicked with empty inputs.", function () {
    create_holiday.createValidationMessageCheck();
  });

  it("41.05. Verify that clicking the Go Back button on the Holiday Create page redirects the user to the Holiday List page.", function () {
    create_holiday.createGoBackButtonCheck();
  });

  it("41.06. Verify that the successfully approve a holiday record after creation.", function () {
    create_holiday.approveHoliday();
  });

  it("41.07. Verify that the correct search results are displayed when searching by holiday name.", function () {
    create_holiday.searchHolidayTitle();
  });

  it("41.08. Verify that the correct results are displayed when a calendar year is selected from the year filter.", function () {
    create_holiday.selectCalendarYear();
  });

  it("41.09. Verify that clicking the Reset button on the Holiday Grid page clears all applied filters and resets the grid list.", function () {
    create_holiday.gridResetButtonCheck();
  });

  it("41.10. Verify that clicking the Refresh button on the Holiday Grid page reloads and refreshes the grid list successfully.", function () {
    create_holiday.gridRefreshButtonCheck();
  });

  it("41.11. Verify that clicking the Search button on the Holiday Grid page redirects the user to the Holiday List page.", function () {
    create_holiday.gridSearchButtonCheck();
  });

  it("41.12. Verify that the grid list displays only draft records when the Draft button is enabled on the Holiday page.", function () {
    create_holiday.gridDraftButton();
  });

  it("41.13. Verify that the grid list displays all applicable records when the Draft button is disabled on the Holiday page.", function () {
    create_holiday.gridDraftButtonOff();
  });

  it("41.14. Verify that the grid list content is correctly translated when switching the language from English to Bangla.", function () {
    create_holiday.gridLanguageSwitchCheck();
  });
});
