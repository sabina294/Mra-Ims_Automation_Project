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

  it("23.01 Verify that the Samity Close list page loads successfully.", function () {
    Samity_close.gridSamityCloseListPage();
  });

  it("23.02 Verify that a Samity Close record can be created with valid information.", function () {
    Samity_close.samityClose();
  });

  it("23.03 Verify that the MFI Admin can successfully approve a Samity Close record after creation.", function () {
    Samity_close.approveSamityClose();
  });

  it("23.04 Verify that the action button performs the expected operation when clicked.", function () {
    Samity_close.actionButtonCheck();
  });

  it("23.05 Verify that the user can view Samity Close details including name and description.", function () {
    Samity_close.viewSamityClose();
  });

  it("23.06 Verify that clicking the Go Back button on the Samity Close view page redirects the user to the Samity Close list page.", function () {
    Samity_close.viewGoBackButton();
  });

  it("23.07 Verify that the user can filter inactive Samity Close records using the Status dropdown on the list page.", function () {
    Samity_close.statusInactiveDropdownCheck();
  });

  it("23.08 Verify that the user can filter active Samity Close records using the Status dropdown.", function () {
    Samity_close.statusActiveDropdownCheck();
  });

  it("23.09 Verify that the correct results are displayed when searching by Samity Close name.", function () {
    Samity_close.searchInSamityCloseName();
  });

  it("23.10 Verify that the grid list resets successfully when the Reset button is clicked.", function () {
    Samity_close.gridResetButtonCheck();
  });

  it("23.11 Verify that the grid list refreshes successfully when the Refresh button is clicked.", function () {
    Samity_close.gridRefreshButtonCheck();
  });

  it("23.12 Verify that the grid list displays draft records when the Draft button is enabled.", function () {
    Samity_close.gridDraftButton();
  });

  it("23.13 Verify that the grid list hides draft records when the Draft button is disabled.", function () {
    Samity_close.gridDraftButtonOff();
  });

  it("23.14 Verify that the grid list content changes correctly when switching language from English to Bangla.", function () {
    Samity_close.gridLanguageSwitchCheck();
  });
});
