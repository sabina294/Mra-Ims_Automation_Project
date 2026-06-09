// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/22-holiday/holiday.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_holiday } from "./holiday.po";

describe("22. Holiday Module Test Cases", function () {
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

  it("22.01. Verify that the Holiday List page loads successfully.", function () {
    create_holiday.gridHolidayListPage();
  });

  it("22.02. Verify that a new holiday record is created successfully with valid required data.", function () {
    create_holiday.createHoliday();
  });

  // it("22.03. Verify that the MFI Admin can successfully approve a holiday record after creation.", function () {
  //   create_holiday.approveHoliday();
  // });

  it("22.04. Verify that the search results are displayed correctly when searching by holiday name.", function () {
    create_holiday.searchHolidayTitle();
  });

  it("22.05. Verify that the calendar year dropdown displays the correct results.", function () {
    create_holiday.selectHolidayYear();
  });

  it("22.06. Verify that the Holiday grid list resets successfully when the Reset button is clicked.", function () {
    create_holiday.gridResetButtonCheck();
  });

  it("22.07. Verify that the Holiday grid list refreshes successfully when the Refresh button is clicked.", function () {
    create_holiday.gridRefreshButtonCheck();
  });

  it("22.08. Verify that the system redirects to the Holiday List page when the Search button is clicked.", function () {
    create_holiday.gridSearchButtonCheck();
  });

  it("22.09. Verify that the Holiday grid list displays draft records successfully when the Draft button is enabled.", function () {
    create_holiday.gridDraftButton();
  });

  it("22.10. Verify that the Holiday grid list displays non-draft records successfully when the Draft button is disabled.", function () {
    create_holiday.gridDraftButtonOff();
  });

  it("22.11. Verify that validation messages are displayed for required fields when the Submit button is clicked with empty inputs.", function () {
    create_holiday.createSubmitButtonCheck();
  });

  it("22.12. Verify that the form fields are reset successfully when the Reset button is clicked.", function () {
    create_holiday.createResetButtonCheck();
  });

  it("22.13. Verify that the system navigates back successfully when the Go Back button is clicked.", function () {
    create_holiday.createGoBackButtonCheck();
  });

  it("22.14. Verify that the Holiday grid list content changes correctly from English to Bangla.", function () {
    create_holiday.gridLanguageSwitchCheck();
  });
});
