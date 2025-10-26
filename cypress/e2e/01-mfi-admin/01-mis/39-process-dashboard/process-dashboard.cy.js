// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/39-process-dashboard/process-dashboard.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_process_dashboard } from "./process-dashboard.po";

describe("39. Process Dashboard Module Test Cases", function () {
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
  it("39.01. Verify process dashboard List Page loads successfully.", function () {
    grid_process_dashboard.gridProcessDashboardListPage();
  });

  it("39.02. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_process_dashboard.gridLanguageSwitchCheck();
  });
});
