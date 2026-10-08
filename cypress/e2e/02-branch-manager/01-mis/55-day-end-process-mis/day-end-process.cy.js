// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/55-day-end-process-mis/day-end-process.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_day_end_process_mis } from "../../../../support/page-objects/day-end-process-mis.po";

describe("55. Day End Process (MIS)  Module Test Cases", function () {
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

  it("55.01. Verify load the Day End Process (MIS) grid list page successfully", function () {
    create_day_end_process_mis.gridDayEndProcessMisListPage();
  });

  it("55.02. Verify successfully initiate the Day End Process (MIS)", function () {
    create_day_end_process_mis.startDayEndProcess();
  });

  it("55.03. Verify refresh the Day End Process (MIS) grid list correctly", function () {
    create_day_end_process_mis.refreshDayEndProcess();
  });

  it("55.04. Verify successfully revert a Day End Process (MIS) record", function () {
    create_day_end_process_mis.revertRecordDayEndProcess();
  });

  it("55.05. Verify that the Day End Process breadcrumb is displayed.", function () {
    create_day_end_process_mis.listBreadcrumbCheck();
  });

  it("55.06. Verify that branch, business day and system status headings are visible.", function () {
    create_day_end_process_mis.summaryLabelsCheck();
  });

  it("55.07. Verify that all day end grid columns are visible.", function () {
    create_day_end_process_mis.requiredColumnsCheck();
  });

  it("55.08. Verify that samity, field officer and search controls are available.", function () {
    create_day_end_process_mis.searchControlsCheck();
  });

  it("55.09. Verify that the grid displays required record data and numeric totals or a visible empty state.", function () {
    create_day_end_process_mis.recordsOrEmptyCheck();
  });

  it("55.10. Verify that Reset clears entered search text.", function () {
    create_day_end_process_mis.resetSearchCheck();
  });

  it("55.11. Verify that Refresh retains the list route and renders records or the empty state.", function () {
    create_day_end_process_mis.refreshResultCheck();
  });

  it("55.12. Verify correctly switch grid list content language from English to Bangla", function () {
    create_day_end_process_mis.gridLanguageSwitchCheck();
  });
});
