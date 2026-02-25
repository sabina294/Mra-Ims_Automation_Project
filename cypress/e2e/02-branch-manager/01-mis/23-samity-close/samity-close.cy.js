// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/23-samity-close/samity-close.cy.js --browser chrome --headed

import "cypress-file-upload";
import { Samity_close } from "./samity-close.po";

describe("23. Samity Close Module Test Cases", function () {
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

  it("23.01. Verify the samity close list page loads correctly.", function () {
    Samity_close.gridSamityCloseListPage();
  });

  it("23.02. Verify samity close with valid information", function () {
    Samity_close.samityClose();
  });

  it("23.03. Verify mfi-admin to successfully approve an samity close record after creation.", function () {
    Samity_close.approveSamityClose();
  });

  it("23.04. Verify successfully performs the action when the action button is clicked.", function () {
    Samity_close.actionButtonCheck();
  });

  it("23.05. Verify the user can successfully view the samity close information, including the name and description.", function () {
    Samity_close.viewSamityClose();
  });

  it("23.06. Verify that clicking the go back button on the samity close view page redirects the user to the samity close list page.", function () {
    Samity_close.viewGoBackButton();
  });

  it("23.07. Verify the user can filter inactive employee records using the status dropdown on the samity close List page.", function () {
    Samity_close.statusInactiveDropdownCheck();
  });

  it("23.08. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    Samity_close.statusActiveDropdownCheck();
  });

  it("23.09. Verify that the search results are displayed correctly when searching by samity close name.", function () {
    Samity_close.searchInSamityCloseName();
  });

  it("23.10. Verify the grid list resets successfully when the reset button is clicked on the samity close page.", function () {
    Samity_close.gridResetButtonCheck();
  });

  it("23.11. Verify that the grid list is refreshed successfully when the refresh button is clicked on the samity close page.", function () {
    Samity_close.gridRefreshButtonCheck();
  });

  it("23.12. Verify display the grid list successfully when the Draft button on is clicked on the samity close page", function () {
    Samity_close.gridDraftButton();
  });

  it("23.13. Verify display the grid list successfully when the Draft button off is clicked on the samity close page", function () {
    Samity_close.gridDraftButtonOff();
  });

  it("23.14. Verify check that the grid list content changes correctly from english to bangla.", function () {
    Samity_close.gridLanguageSwitchCheck();
  });
});
