// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/53-day-end-process-ais/day-end-process.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_day_end_process_ais } from "./day-end-process.po";

describe("53. Day End Process (AIS)  Module Test Cases", function () {
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

  it("53.01. Verify that the Day End Process AIS grid list page loads successfully", () => {
    create_day_end_process_ais.gridDayEndProcessAisListPage();
  });

  it("53.02. Verify that the preview functionality of Day End Process AIS works correctly", () => {
    create_day_end_process_ais.previewDayEndProcess();
  });

  it("53.03. Verify that the preview 'Go Back' functionality works correctly", () => {
    create_day_end_process_ais.previewGoBackButton();
  });

  it("53.04. Verify that the 'Previous On' functionality works correctly", () => {
    create_day_end_process_ais.previousOn();
  });

  it("53.05. Verify that the 'Previous Search' button works correctly", () => {
    create_day_end_process_ais.previousSearchButton();
  });

  it("53.06. Verify that the 'Previous Preview' functionality works correctly", () => {
    create_day_end_process_ais.previousPreviewButton();
  });

  it("53.07. Verify that the 'Previous Preview Go Back' functionality works correctly", () => {
    create_day_end_process_ais.previousPreviewGoBackButton();
  });

  it("53.08. Verify that the 'Previous Off' functionality works correctly", () => {
    create_day_end_process_ais.previousOff();
  });

  it("53.09. Verify that the Day End Process AIS execution works correctly", () => {
    create_day_end_process_ais.dayEndProcessAis();
  });

  it("53.10. Verify that the delete functionality of Day End Process AIS works correctly", () => {
    create_day_end_process_ais.DayEndProcessDelete();
  });

  it("53.11. Verify that the grid list content switches correctly from English to Bangla", () => {
    create_day_end_process_ais.gridLanguageSwitchCheck();
  });


});
