// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/45-process-dashboard/process-dashboard.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_process_dashboard } from "./process-dashboard.po";

describe("45. Process Dashboard Module Test Cases", function () {
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

  it("45.01. Verify Process Dashboard Grid List Page loads successfully", function () {
    grid_process_dashboard.gridProcessDashboardListPage();
  });

  it("45.02. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_process_dashboard.gridLanguageSwitchCheck();
  });
});
