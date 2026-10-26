// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/50-cancel-samity/cancel-samity.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_cancel_samity } from "./cancel-samity.po";

describe("50. Cancel Samity Module Test Cases", function () {
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

  it("50.01. Verify cancel samity List Page loads successfully.", function () {
    grid_cancel_samity.gridCancelSamityListPage();
  });

  it("50.02. Verify that the Cancel Samity breadcrumb is displayed.", function () {
    grid_cancel_samity.breadcrumbCheck();
  });

  it("50.03. Verify that branch, business day and system status headings are visible.", function () {
    grid_cancel_samity.summaryLabelsCheck();
  });

  it("50.04. Verify that all Cancel Samity columns are visible.", function () {
    grid_cancel_samity.columnsCheck();
  });

  it("50.05. Verify that samity, field officer and search controls are available.", function () {
    grid_cancel_samity.searchControlsCheck();
  });

  it("50.06. Verify that the grid displays required samity data and weekdays or a visible empty state.", function () {
    grid_cancel_samity.recordsOrEmptyCheck();
  });

  it("50.07. Verify that Cancel Multiple and Restore Multiple controls are visible.", function () {
    grid_cancel_samity.bulkControlsCheck();
  });

  it("50.08. Verify that the branch selector displays a selected branch.", function () {
    grid_cancel_samity.selectedBranchCheck();
  });

  it("50.09. Verify that Cancel Multiple and Restore Multiple are disabled when no samity is selected.", function () {
    grid_cancel_samity.bulkControlsWithoutSelectionCheck();
  });

  it("50.10. Verify that a non-matching search displays no process results.", function () {
    grid_cancel_samity.nonMatchingSearchCheck();
  });

  it("50.11. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_cancel_samity.gridLanguageSwitchCheck();
  });
});
