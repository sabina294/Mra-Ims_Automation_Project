// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/54-day-end-process-mis/day-end-process.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_day_end_process_mis } from "./day-end-process.po";

describe("54. Day End Process (MIS)  Module Test Cases", function () {
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

  it("54.01. Verify load the Day End Process (MIS) grid list page successfully", function () {
    create_day_end_process_mis.gridDayEndProcessMisListPage();
  });

  it("54.02. Verify successfully initiate the Day End Process (MIS)", function () {
    create_day_end_process_mis.startDayEndProcess();
  });

  it("54.03. Verify refresh the Day End Process (MIS) grid list correctly", function () {
    create_day_end_process_mis.refreshDayEndProcess();
  });

  it("54.04. Verify successfully revert a Day End Process (MIS) record", function () {
    create_day_end_process_mis.revertRecordDayEndProcess();
  });

  it("54.05. Verify correctly switch grid list content language from English to Bangla", function () {
    create_day_end_process_mis.gridLanguageSwitchCheck();
  });
});
