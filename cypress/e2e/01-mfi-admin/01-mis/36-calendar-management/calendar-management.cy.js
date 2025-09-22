// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/36-calendar-management/calendar-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_calendar_management } from "./calendare-management.po";

describe("36. Calendar Management Module Test Cases", function () {
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

  it("36.01. Verify the calendar management list page loads correctly.", function () {
    create_calendar_management.gridCalendarManagListPage();
  });

  it("36.02. Verify the calendar management office dropdown list page loads correctly.", function () {
    create_calendar_management.gridOfficeDropdown();
  });

  it("36.03. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_calendar_management.gridLanguageSwitchCheck();
  });
});
