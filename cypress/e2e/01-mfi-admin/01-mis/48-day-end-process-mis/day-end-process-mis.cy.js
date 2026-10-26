// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/48-day-end-process-mis/day-end-process-mis.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_day_end_process} from "./day-end-process-mis.po";

describe("48. Day End Process Module Test Cases", function () {
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

    it("48.01. Verify day end process mis List Page loads successfully.", function () {
        grid_day_end_process.gridDayEndProcessListPage();
    });

  it("48.02. Verify that the Day End Process breadcrumb is displayed.", function () {
    grid_day_end_process.listBreadcrumbCheck();
  });

  it("48.03. Verify that branch, business day and system status headings are visible.", function () {
    grid_day_end_process.summaryLabelsCheck();
  });

  it("48.04. Verify that all day end grid columns are visible.", function () {
    grid_day_end_process.requiredColumnsCheck();
  });

  it("48.05. Verify that samity, field officer and search controls are available.", function () {
    grid_day_end_process.searchControlsCheck();
  });

  it("48.06. Verify that the grid displays required record data and numeric totals or a visible empty state.", function () {
    grid_day_end_process.recordsOrEmptyCheck();
  });

  it("48.07. Verify that Reset clears entered search text.", function () {
    grid_day_end_process.resetSearchCheck();
  });

  it("48.08. Verify that Refresh retains the list route and renders records or the empty state.", function () {
    grid_day_end_process.refreshResultCheck();
  });

  it("48.09. Verify that a non-matching search displays no process results.", function () {
    grid_day_end_process.nonMatchingSearchCheck();
  });

  it("48.10. Verify that clearing a non-matching search restores the original results.", function () {
    grid_day_end_process.clearedSearchRestoresResultsCheck();
  });

    it("48.11. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_day_end_process.gridLanguageSwitchCheck();
    });
});
