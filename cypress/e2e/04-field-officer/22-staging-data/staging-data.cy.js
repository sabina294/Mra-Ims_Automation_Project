// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/22-staging-data/staging-data.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_staging_data } from "./staging-data.po";

describe("22. Staging Data Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.fieldOfficerUserId,
        d.credential.fieldOfficerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("22.01. Verify Staging Data Grid List Page loads successfully", function () {
    grid_staging_data.gridStagingDataListPage();
  });

  it("22.02. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_staging_data.gridLanguageSwitchCheck();
  });
});
