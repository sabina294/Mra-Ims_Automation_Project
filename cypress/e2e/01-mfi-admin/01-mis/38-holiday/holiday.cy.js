// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/38-holiday/holiday.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_holiday } from "./holiday.po";

describe("38. Holiday Module Test Cases", function () {
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

  it("38.01. Verify the holiday list page loads correctly.", function () {
    create_holiday.gridHolidayListPage();
  });

  it("38.02. Verify the loan holiday create reset button functions correctly.", function () {
    create_holiday.createResetButton();
  });

  it("38.03. Verify the loan holiday create submit button functions correctly.", function () {
    create_holiday.createSubmitButton();
  });

  it("38.04. Verify the loan holiday create go back button functions correctly.", function () {
    create_holiday.createGoBackButton();
  });

  // it("38.05. Verify a new holiday record is created successfully when all required fields are filled with valid data.", function () {
  //   create_holiday.createHoliday();
  // });

  // it("38.06. Verify mfi-admin to successfully approve an holiday record after creation.", function () {
  //   create_holiday.approveHoliday();
  // });

  it("38.07. Verify that the search results are displayed correctly when searching by holiday name.", function () {
    create_holiday.searchHolidayTitle();
  });

  it("38.08. Verify the grid list resets successfully when the reset button is clicked on the holiday page.", function () {
    create_holiday.gridResetButtonCheck();
  });

  it("38.09. Verify that the grid list is refreshed successfully when the refresh button is clicked on the holiday page.", function () {
    create_holiday.gridRefreshButtonCheck();
  });

  it("38.10. Verify display the grid list successfully when the Draft button on is clicked on the holiday page", function () {
    create_holiday.gridDraftButton();
  });

  it("38.11. Verify display the grid list successfully when the Draft button off is clicked on the holiday page", function () {
    create_holiday.gridDraftButtonOff();
  });

  it("38.11. Verify check that the holiday  office selection works correctly from the dropdown on the holiday list page.", function () {
    create_holiday.selectofficeDropdown();
  });

  it("38.12. Verify check that the holiday  calendar year selection works correctly from the dropdown on the holiday list page.", function () {
    create_holiday.selectCalendarYearDropdown();
  });

  it("38.13. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_holiday.gridLanguageSwitchCheck();
  });
});
