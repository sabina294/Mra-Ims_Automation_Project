// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/25-process-dashboard/process-dashboard.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_process_dashboard } from "./process-dashboard.po";

describe("25. Process Dashboard Module Test Cases", function () {
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

  it("25.01. Verify Process Dashboard Grid List Page loads successfully", function () {
    grid_process_dashboard.gridProcessDashboardListPage();
  });

  it("25.02. Verify the dashboard breadcrumb is correct.", function () {
    grid_process_dashboard.dashboardBreadcrumbCheck();
  });

  it("25.03. Verify all four overview cards and their descriptions are visible.", function () {
    grid_process_dashboard.overviewCardsCheck();
  });

  it("25.04. Verify overview cards display non-negative integer counts.", function () {
    grid_process_dashboard.overviewCountsCheck();
  });

  it("25.05. Verify the branch section shows office and business-date labels.", function () {
    grid_process_dashboard.branchSectionCheck();
  });

  it("25.06. Verify the search input and button are available.", function () {
    grid_process_dashboard.searchControlsCheck();
  });

  it("25.07. Verify branch cards display staging, day-end and day-forward labels.", function () {
    grid_process_dashboard.branchProcessLabelsCheck();
  });

  it("25.08. Verify a branch Details control is visible and enabled.", function () {
    grid_process_dashboard.detailsControlCheck();
  });

  it("25.09. Verify real-time status includes a last-updated value.", function () {
    grid_process_dashboard.lastUpdatedCheck();
  });

  it("25.10. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_process_dashboard.gridLanguageSwitchCheck();
  });
});
