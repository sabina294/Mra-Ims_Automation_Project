// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/46-day-end-process-mis/day-end-process.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_day_end_process } from "./day-end-process.po";

describe("46. Day End Process (MIS)  Module Test Cases", function () {
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

  it("46.01. Verify Day end process mis grid List page loads successfully", function () {
    create_day_end_process.gridDayEndProcessMisListPage();
  });

  it("46.02. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_day_end_process.gridLanguageSwitchCheck();
    });


});
