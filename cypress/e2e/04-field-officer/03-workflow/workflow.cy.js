// cypress/e2e/04-field-officer/03-workflow/workflow.cy.js

// npx cypress run --spec cypress/e2e/04-field-officer/03-workflow/workflow.cy.js --browser chrome --headed

import "cypress-file-upload";

import { cancel_samity } from "../../../support/page-objects/cancel-samity.po";
import { authorization } from "../../../support/page-objects/authorization.po";
import { create_day_end_process_mis } from "../../../support/page-objects/day-end-process-mis.po";
import { create_day_end_process_ais } from "../../../support/page-objects/day-end-process-ais.po";
import { grid_day_forward } from "../../../support/page-objects/day-forward.po";

describe("01. Branch Manager Complete Workflow", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");

  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.branchManagerUserId,
        d.credential.branchManagerPassword,
      );

      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("Run Branch Manager End to End Workflow", () => {
    // ==========================
    // Cancel Samity
    // ==========================
    cancel_samity.gridCancelSamityListPage();
    cancel_samity.cancelSamity();
    cancel_samity.submitCancelSamity();

    // ==========================
    // Authorization
    // ==========================
    authorization.gridAuthorizationListPage();
    authorization.authorizeSamity();

    // ==========================
    // Day End Process (MIS)
    // ==========================
    create_day_end_process_mis.gridDayEndProcessMisListPage();
    create_day_end_process_mis.startDayEndProcess();
    create_day_end_process_mis.refreshDayEndProcess();

    // ==========================
    // Switch to AIS
    // ==========================
    cy.switchModule("AIS");

    // ==========================
    // Day End Process (AIS)
    // ==========================
    create_day_end_process_ais.gridDayEndProcessAisListPage();
    create_day_end_process_ais.dayEndProcessAis();

    // ==========================
    // Switch to MIS
    // ==========================
    cy.switchModule("MIS");
    // ==========================

    // Day Forward
    // ==========================
    grid_day_forward.gridDayForwardListPage();
    grid_day_forward.gridDayForwardDayRoutine();
    grid_day_forward.startProccess();
    grid_day_forward.dayForwardConfirm();
  });
});
