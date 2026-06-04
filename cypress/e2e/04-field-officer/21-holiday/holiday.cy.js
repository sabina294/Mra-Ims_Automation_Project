// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/21-holiday/holiday.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_holiday } from "./holiday.po";

describe("21. Holiday Module Test Cases", function () {
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

  it("21.01. Verify that the Holiday List page loads successfully.", function () {
    create_holiday.gridHolidayListPage();
  });

  it("21.02. Verify that a new holiday record is created successfully with valid required data.", function () {
    create_holiday.createHoliday();
  });

  // it("21.03. Verify that the MFI Admin can successfully approve a holiday record after creation.", function () {
  //   create_holiday.approveHoliday();
  // });

  it("21.04. Verify that the search results are displayed correctly when searching by holiday name.", function () {
    create_holiday.searchHolidayTitle();
  });

  it("21.05. Verify that the calendar year dropdown displays the correct results.", function () {
    create_holiday.selectHolidayYear();
  });

  it("21.06. Verify that the Holiday grid list resets successfully when the Reset button is clicked.", function () {
    create_holiday.gridResetButtonCheck();
  });

  it("21.07. Verify that the Holiday grid list refreshes successfully when the Refresh button is clicked.", function () {
    create_holiday.gridRefreshButtonCheck();
  });

  it("21.08. Verify that the system redirects to the Holiday List page when the Search button is clicked.", function () {
    create_holiday.gridSearchButtonCheck();
  });

  it("21.09. Verify that the Holiday grid list displays draft records successfully when the Draft button is enabled.", function () {
    create_holiday.gridDraftButton();
  });

  it("21.10. Verify that the Holiday grid list displays non-draft records successfully when the Draft button is disabled.", function () {
    create_holiday.gridDraftButtonOff();
  });

  it("21.11. Verify that validation messages are displayed for required fields when the Submit button is clicked with empty inputs.", function () {
    create_holiday.createSubmitButtonCheck();
  });

  it("21.12. Verify that the form fields are reset successfully when the Reset button is clicked.", function () {
    create_holiday.createResetButtonCheck();
  });

  it("21.13. Verify that the system navigates back successfully when the Go Back button is clicked.", function () {
    create_holiday.createGoBackButtonCheck();
  });

  it("21.14. Verify that the Holiday grid list content changes correctly from English to Bangla.", function () {
    create_holiday.gridLanguageSwitchCheck();
  });
});
