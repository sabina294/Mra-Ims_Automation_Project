// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/19-samity-close/samity-close.cy.js --browser chrome --headed

import "cypress-file-upload";
import { Samity_close } from "./samity-close.po";

describe("19. Samity Close Module Test Cases", function () {
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

  it("19.01. Verify the samity close list page loads correctly.", function () {
    Samity_close.gridSamityCloseListPage();
  });

  it("19.02. Verify successfully performs the action when the action button is clicked.", function () {
    Samity_close.actionButtonCheck();
  });

  it("19.03. Verify the user can successfully view the samity close information, including the name and description.", function () {
    Samity_close.viewSamityClose();
  });

    it("19.04. Verify samity close with valid information by MFI-Admin role", function () {
      Samity_close.samityClose();
    });

    it("19.05. Verify mfi-admin to successfully approve an samity close record after creation.", function () {
      Samity_close.approveSamityClose();
    });

  it("19.06. Verify the user can filter inactive employee records using the status dropdown on the samity close List page.", function () {
    Samity_close.statusInactiveDropdownCheck();
  });

  it("19.07. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    Samity_close.statusActiveDropdownCheck();
  });

  it("19.08. Verify that the search results are displayed correctly when searching by samity close name.", function () {
    Samity_close.searchInSamityCloseName();
  });

  it("19.09. Verify the grid list resets successfully when the reset button is clicked on the samity close page.", function () {
    Samity_close.gridResetButtonCheck();
  });

  it("19.10. Verify that the grid list is refreshed successfully when the refresh button is clicked on the samity close page.", function () {
    Samity_close.gridRefreshButtonCheck();
  });

  it("19.11. Verify display the grid list successfully when the Draft button on is clicked on the samity close page", function () {
    Samity_close.gridDraftButton();
  });

  it("19.12. Verify display the grid list successfully when the Draft button off is clicked on the samity close page", function () {
    Samity_close.gridDraftButtonOff();
  });

  it("19.13 Verify check that the grid list content changes correctly from english to bangla.", function () {
    Samity_close.gridLanguageSwitchCheck();
  });
});
