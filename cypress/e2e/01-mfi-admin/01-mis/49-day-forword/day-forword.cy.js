// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/49-day-forword/day-forword.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_day_forward } from "./day-forword.po";

describe("49. Day Forward Module Test Cases", function () {
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

  it("49.01. Verify day forward mis List Page loads successfully.", function () {
    grid_day_forward.gridDayForwardListPage();
  });

  it("49.02. Verify the successful execution of the delete button.", function () {
    grid_day_forward.gridDeleteButtonCheck();
  });

  it("49.03. Verify that the Day Forward breadcrumb is displayed.", function () {
    grid_day_forward.breadcrumbCheck();
  });

  it("49.04. Verify that branch, business day and system status headings are visible.", function () {
    grid_day_forward.summaryLabelsCheck();
  });

  it("49.05. Verify that all Day Forward grid columns are visible.", function () {
    grid_day_forward.columnsCheck();
  });

  it("49.06. Verify that records show serial numbers, business weekdays, dates and start timestamps.", function () {
    grid_day_forward.recordDataCheck();
  });

  it("49.07. Verify that collection, disbursement and withdrawal totals are numeric.", function () {
    grid_day_forward.transactionTotalsCheck();
  });

  it("49.08. Verify that Forward Day Routine and Delete controls are visible.", function () {
    grid_day_forward.actionControlsCheck();
  });

  it("49.09. Verify that the first page displays pagination controls with Previous disabled.", function () {
    grid_day_forward.firstPagePaginationCheck();
  });

  it("49.10. Verify that each business date matches its displayed weekday.", function () {
    grid_day_forward.businessDateWeekdayCheck();
  });

  it("49.11. Verify that pagination moves to the next page and returns, or disables navigation for one page.", function () {
    grid_day_forward.paginationRoundTripCheck();
  });

  it("49.12. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_day_forward.gridLanguageSwitchCheck();
  });
});
