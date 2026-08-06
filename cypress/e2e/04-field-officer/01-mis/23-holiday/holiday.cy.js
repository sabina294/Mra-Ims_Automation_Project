// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/23-holiday/holiday.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_holiday } from "./holiday.po";

describe("23. Holiday Module Test Cases", function () {
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

  it("23.01. Verify that the Holiday List page loads successfully.", function () {
    create_holiday.gridHolidayListPage();
  });

  it("23.02. Verify that a new holiday record is created successfully with valid required data.", function () {
    create_holiday.createHoliday();
  });

  // it("23.03. Verify that the MFI Admin can successfully approve a holiday record after creation.", function () {
  //   create_holiday.approveHoliday();
  // });

  it("23.04. Verify that the search results are displayed correctly when searching by holiday name.", function () {
    create_holiday.searchHolidayTitle();
  });

  it("23.05. Verify that the calendar year dropdown displays the correct results.", function () {
    create_holiday.selectHolidayYear();
  });

  it("23.06. Verify that the Holiday grid list resets successfully when the Reset button is clicked.", function () {
    create_holiday.gridResetButtonCheck();
  });

  it("23.07. Verify that the Holiday grid list refreshes successfully when the Refresh button is clicked.", function () {
    create_holiday.gridRefreshButtonCheck();
  });

  it("23.08. Verify that the system redirects to the Holiday List page when the Search button is clicked.", function () {
    create_holiday.gridSearchButtonCheck();
  });

  it("23.09. Verify that the Holiday grid list displays draft records successfully when the Draft button is enabled.", function () {
    create_holiday.gridDraftButton();
  });

  it("23.10. Verify that the Holiday grid list displays non-draft records successfully when the Draft button is disabled.", function () {
    create_holiday.gridDraftButtonOff();
  });

  it("23.11. Verify that validation messages are displayed for required fields when the Submit button is clicked with empty inputs.", function () {
    create_holiday.createSubmitButtonCheck();
  });

  it("23.12. Verify that the form fields are reset successfully when the Reset button is clicked.", function () {
    create_holiday.createResetButtonCheck();
  });

  it("23.13. Verify that the system navigates back successfully when the Go Back button is clicked.", function () {
    create_holiday.createGoBackButtonCheck();
  });

  it("23.14. Verify that the Holiday grid list content changes correctly from English to Bangla.", function () {
    create_holiday.gridLanguageSwitchCheck();
  });
});
