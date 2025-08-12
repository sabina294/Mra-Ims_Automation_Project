// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/32-calendar-management/calendar-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_calendar_management } from "./calendare-management.po";

describe("32. Calendar Management Module Test Cases", function () {
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

  it("32.01. Verify the calendar management list page loads correctly.", function () {
    create_calendar_management.gridCalendarManagListPage();
  });

  it("32.02. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_calendar_management.gridLanguageSwitchCheck();
  });
});
