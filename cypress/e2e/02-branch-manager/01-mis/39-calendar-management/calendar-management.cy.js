// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/39-calendar-management/calendar-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_calendar_management } from "./calendare-management.po";

describe("39. Calendar Management Module Test Cases", function () {
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

  it("39.01. Verify that the Calendar Management list page loads successfully", function () {
    grid_calendar_management.gridCalendarManagListPage();
  });

  it("39.02. Verify that the grid list content switches correctly from English to Bangla language", function () {
    grid_calendar_management.gridLanguageSwitchCheck();
  });
});
