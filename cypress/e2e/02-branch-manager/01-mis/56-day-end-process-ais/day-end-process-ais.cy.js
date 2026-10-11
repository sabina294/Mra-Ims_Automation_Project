// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/56-day-end-process-ais/day-end-process-ais.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_day_end_process_ais } from "../../../../support/page-objects/day-end-process-ais.po";

describe("56. Day End Process (AIS)  Module Test Cases", function () {
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
      cy.switchModule("AIS");

    });
  });

  after(() => {
    cy.logout();
  });

  it("56.01. Verify that the Day End Process AIS grid list page loads successfully", () => {
    create_day_end_process_ais.gridDayEndProcessAisListPage();
  });

  it("56.02. Verify that the preview functionality of Day End Process AIS works correctly", () => {
    create_day_end_process_ais.previewDayEndProcess();
  });

  it("56.03. Verify that the preview 'Go Back' functionality works correctly", () => {
    create_day_end_process_ais.previewGoBackButton();
  });

  it("56.04. Verify that the 'Previous On' functionality works correctly", () => {
    create_day_end_process_ais.previousOn();
  });

  it("56.05. Verify that the 'Previous Search' button works correctly", () => {
    create_day_end_process_ais.previousSearchButton();
  });

  it("56.06. Verify that the 'Previous Preview' functionality works correctly", () => {
    create_day_end_process_ais.previousPreviewButton();
  });

  it("56.07. Verify that the 'Previous Preview Go Back' functionality works correctly", () => {
    create_day_end_process_ais.previousPreviewGoBackButton();
  });

  it("56.08. Verify that the 'Previous Off' functionality works correctly", () => {
    create_day_end_process_ais.previousOff();
  });

  it("56.09. Verify that the Day End Process AIS execution works correctly", () => {
    create_day_end_process_ais.dayEndProcessAis();
  });

  it("56.10. Verify that the delete functionality of Day End Process AIS works correctly", () => {
    create_day_end_process_ais.DayEndProcessDelete();
  });

  it("56.11. Verify that the breadcrumb displays the correct navigation hierarchy", () => {
    create_day_end_process_ais.listBreadcrumbCheck();
  });

  it("56.12. Verify that the Auto Voucher List displays all required columns", () => {
    create_day_end_process_ais.requiredGridColumnsCheck();
  });

  it("56.13. Verify that voucher records contain required data and numeric amounts, or display No Data", () => {
    create_day_end_process_ais.gridRecordDataCheck();
  });

  it("56.15. Verify that Previous, Preview, Day End Process and Delete controls are visible", () => {
    create_day_end_process_ais.actionControlsCheck();
  });

  it("56.16. Verify that the grid list content switches correctly from English to Bangla", () => {
    create_day_end_process_ais.gridLanguageSwitchCheck();
  });


});
