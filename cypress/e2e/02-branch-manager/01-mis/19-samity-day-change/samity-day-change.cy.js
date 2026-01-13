// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/19-samity-day-change/samity-day-change.cy.js --browser chrome --headed

import "cypress-file-upload";
import { samity_day_change } from "./samity-day-change.po";

describe("19. Samity Day Change Module Test Cases", function () {
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

  it("19.01. Verify the samity day change list page loads correctly.", function () {
    samity_day_change.gridSamityChangeListPage();
  });

  it("19.02. Verify new day change with valid information", function () {
    samity_day_change.samityDayChange();
  });

  it("19.03. Verify mfi-admin to successfully approve an samity day change record after creation.", function () {
    samity_day_change.approveSamityDayChange();
  });

  it("19.04. Verify successfully performs the action when the action button is clicked.", function () {
    samity_day_change.actionButtonCheck();
  });

  it("19.05. Verify the user can successfully view the samity day change information, including the name and description.", function () {
    samity_day_change.viewSamityDayChange();
  });

  it("19.06. Verify that clicking the go back button on the samity day change view page redirects the user to the samity day change list page.", function () {
    samity_day_change.viewGoBackButton();
  });

  it("19.07. Verify the user can filter inactive employee records using the status dropdown on the samity day change List page.", function () {
    samity_day_change.statusInactiveDropdownCheck();
  });

  it("19.08. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    samity_day_change.statusActiveDropdownCheck();
  });

  it("19.09. Verify that the search results are displayed correctly when searching by samity day change name.", function () {
    samity_day_change.searchInSamityDayChangeName();
  });

  it("19.10. Verify the grid list resets successfully when the reset button is clicked on the samity day change page.", function () {
    samity_day_change.gridResetButtonCheck();
  });

  it("19.11. Verify that the grid list is refreshed successfully when the refresh button is clicked on the samity day change page.", function () {
    samity_day_change.gridRefreshButtonCheck();
  });

  it("19.12. Verify display the grid list successfully when the Draft button on is clicked on the samity day change page", function () {
    samity_day_change.gridDraftButton();
  });

  it("19.13. Verify display the grid list successfully when the Draft button off is clicked on the samity day change page", function () {
    samity_day_change.gridDraftButtonOff();
  });

  it("19.14. Verify check that the grid list content changes correctly from english to bangla.", function () {
    samity_day_change.gridLanguageSwitchCheck();
  });
});
