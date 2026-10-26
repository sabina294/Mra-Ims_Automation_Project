// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/51-month-end-process/month-end-process.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_month_end_process } from "./month-end-process.po";

describe("51. Month End Process Module Test Cases", function () {
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

  it("51.01. Verify month end process List Page loads successfully.", function () {
    grid_month_end_process.gridMonthEndProcessListPage();
  });

  it("51.02. Verify that the breadcrumb displays Home, Process, Month End Process (MIS) and List.", function () {
    grid_month_end_process.breadcrumbCheck();
  });

  it("51.03. Verify that branch, business day and system status headings are visible.", function () {
    grid_month_end_process.summaryCheck();
  });

  it("51.04. Verify that all Month End Process grid columns are visible.", function () {
    grid_month_end_process.columnsCheck();
  });

  it("51.05. Verify that calendar year, month, status and search controls are available.", function () {
    grid_month_end_process.filterControlsCheck();
  });

  it("51.06. Verify that Run Month End Process and View Details controls are visible.", function () {
    grid_month_end_process.actionControlsCheck();
  });

  it("51.07. Verify that the grid displays valid record fields or a visible empty state.", function () {
    grid_month_end_process.recordsOrEmptyCheck();
  });

  it("51.08. Verify that a non-matching search returns no rows and Reset clears the search.", function () {
    grid_month_end_process.searchAndResetCheck();
  });

  it("51.09. Verify that Refresh retains the list route and displays records or the empty state.", function () {
    grid_month_end_process.refreshCheck();
  });

  it("51.10. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_month_end_process.gridLanguageSwitchCheck();
  });
});
