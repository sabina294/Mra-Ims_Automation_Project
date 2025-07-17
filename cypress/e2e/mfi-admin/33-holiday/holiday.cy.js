// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mfi-admin/33-holiday/holiday.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_holiday } from "./holiday.po";

describe("33. holiday Module Test Cases", function () {
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

  it("33.01. Verify the holiday list page loads correctly.", function () {
    create_holiday.gridHolidayListPage();
  });

  //   it("33.02. Verify a new holiday record is created successfully when all required fields are filled with valid data.", function () {
  //     create_holiday.createHoliday();
  //   });

  //   it("33.03. Verify mfi-admin to successfully approve an holiday record after creation.", function () {
  //     create_holiday.approveHoliday();
  //   });

  it("33.04. Verify that the search results are displayed correctly when searching by holiday name.", function () {
    create_holiday.searchHolidayTitle();
  });

  it("33.05. Verify the grid list resets successfully when the reset button is clicked on the holiday page.", function () {
    create_holiday.gridResetButtonCheck();
  });

  it("33.06. Verify that the grid list is refreshed successfully when the refresh button is clicked on the holiday page.", function () {
    create_holiday.gridRefreshButtonCheck();
  });

  it("33.07. Verify display the grid list successfully when the Draft button on is clicked on the holiday page", function () {
    create_holiday.gridDraftButton();
  });

  it("33.08. Verify display the grid list successfully when the Draft button off is clicked on the holiday page", function () {
    create_holiday.gridDraftButtonOff();
  });

  it("33.09. Verify check that the holiday  office selection works correctly from the dropdown on the holiday list page.", function () {
    create_holiday.selectofficeDropdown();
  });

  it("33.10. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_holiday.gridLanguageSwitchCheck();
  });
});
