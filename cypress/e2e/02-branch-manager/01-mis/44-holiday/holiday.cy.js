// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/44-holiday/holiday.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_holiday } from "./holiday.po";

describe("44. holiday Module Test Cases", function () {
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

  it("44.01. Verify the holiday list page loads correctly.", function () {
    create_holiday.gridHolidayListPage();
  });

  it("44.02. Verify a new holiday record is created successfully when all required fields are filled with valid data.", function () {
    create_holiday.createHoliday();
  });

  it("44.03. Verify the holiday creation reset button clears all entered input values.", function () {
    create_holiday.createResetButtonCheck();
  });

  it("44.04. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_holiday.createValidationMessageCheck();
  });

  it("44.05. Verify that clicking the go back button on the holiday create page redirects the user to the holiday list page.", function () {
    create_holiday.createGoBackButtonCheck();
  });

  it("44.06. Verify mfi-admin to successfully approve an holiday record after creation.", function () {
    create_holiday.approveHoliday();
  });

  it("44.07. Verify that the search results are displayed correctly when searching by holiday name.", function () {
    create_holiday.searchHolidayTitle();
  });

  it("44.08. Verify that the selected year results are displayed correctly when calendar year is selected.", function () {
    create_holiday.selectCalendarYear();
  });

  it("44.09. Verify the grid list resets successfully when the reset button is clicked on the holiday page.", function () {
    create_holiday.gridResetButtonCheck();
  });

  it("44.10. Verify that the grid list is refreshed successfully when the refresh button is clicked on the holiday page.", function () {
    create_holiday.gridRefreshButtonCheck();
  });

  it("44.11. Verify display the grid list successfully when the Draft button on is clicked on the holiday page", function () {
    create_holiday.gridDraftButton();
  });

  it("44.12. Verify display the grid list successfully when the Draft button off is clicked on the holiday page", function () {
    create_holiday.gridDraftButtonOff();
  });

  it("44.13. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_holiday.gridLanguageSwitchCheck();
  });
});
