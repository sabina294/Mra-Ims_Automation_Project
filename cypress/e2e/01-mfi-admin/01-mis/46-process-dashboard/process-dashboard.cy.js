// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/46-process-dashboard/process-dashboard.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_process_dashboard } from "./process-dashboard.po";

describe("46. Process Dashboard Module Test Cases", function () {
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
  it("46.01. Verify process dashboard List Page loads successfully.", function () {
    grid_process_dashboard.gridProcessDashboardListPage();
  });

  it("46.02. Verify that the breadcrumb shows Home, Process and Process Dashboard.", function () {
    grid_process_dashboard.dashboardBreadcrumbCheck();
  });

  it("46.03. Verify that the four system overview cards display their labels and captions.", function () {
    grid_process_dashboard.overviewCardsCheck();
  });

  it("46.04. Verify that system overview counts are non-negative integers.", function () {
    grid_process_dashboard.overviewCountsCheck();
  });

  it("46.05. Verify that the Branch Processes section displays branch office and business date information.", function () {
    grid_process_dashboard.branchSectionCheck();
  });

  it("46.06. Verify that the branch search input and Search button are available.", function () {
    grid_process_dashboard.searchControlsCheck();
  });

  it("46.07. Verify that branch cards display staging, day end and day forward process labels.", function () {
    grid_process_dashboard.branchProcessLabelsCheck();
  });

  it("46.08. Verify that a branch Details control is visible and enabled.", function () {
    grid_process_dashboard.detailsControlCheck();
  });

  it("46.09. Verify that the real-time status section displays a last-updated value.", function () {
    grid_process_dashboard.lastUpdatedCheck();
  });

  it("46.10. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_process_dashboard.gridLanguageSwitchCheck();
  });
});
