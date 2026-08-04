// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/55-day-end-process-ais/day-end-process-ais.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_day_end_process_ais } from "./day-end-process-ais.po";

describe("55. Day End Process (AIS)  Module Test Cases", function () {
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

  it("55.01. Verify that the Day End Process AIS grid list page loads successfully", () => {
    create_day_end_process_ais.gridDayEndProcessAisListPage();
  });

  it("55.02. Verify that the preview functionality of Day End Process AIS works correctly", () => {
    create_day_end_process_ais.previewDayEndProcess();
  });

  it("55.03. Verify that the preview 'Go Back' functionality works correctly", () => {
    create_day_end_process_ais.previewGoBackButton();
  });

  it("55.04. Verify that the 'Previous On' functionality works correctly", () => {
    create_day_end_process_ais.previousOn();
  });

  it("55.05. Verify that the 'Previous Search' button works correctly", () => {
    create_day_end_process_ais.previousSearchButton();
  });

  it("55.06. Verify that the 'Previous Preview' functionality works correctly", () => {
    create_day_end_process_ais.previousPreviewButton();
  });

  it("55.07. Verify that the 'Previous Preview Go Back' functionality works correctly", () => {
    create_day_end_process_ais.previousPreviewGoBackButton();
  });

  it("55.08. Verify that the 'Previous Off' functionality works correctly", () => {
    create_day_end_process_ais.previousOff();
  });

  it("55.09. Verify that the Day End Process AIS execution works correctly", () => {
    create_day_end_process_ais.dayEndProcessAis();
  });

  it("55.10. Verify that the delete functionality of Day End Process AIS works correctly", () => {
    create_day_end_process_ais.DayEndProcessDelete();
  });

  it("55.11. Verify that the grid list content switches correctly from English to Bangla", () => {
    create_day_end_process_ais.gridLanguageSwitchCheck();
  });


});
