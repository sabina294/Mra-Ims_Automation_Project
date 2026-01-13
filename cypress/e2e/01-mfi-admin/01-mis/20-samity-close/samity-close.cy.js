// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/20-samity-close/samity-close.cy.js --browser chrome --headed

import "cypress-file-upload";
import { Samity_close } from "./samity-close.po";

describe("20. Samity Close Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.mfiAdminUserId,
        d.credential.mfiAdminPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("20.01. Verify the samity close list page loads correctly.", function () {
    Samity_close.gridSamityCloseListPage();
  });

  it("20.02. Verify samity close with valid information by MFI-Admin role", function () {
    Samity_close.samityClose();
  });

  it("20.03. Verify mfi-admin to successfully approve an samity close record after creation.", function () {
    Samity_close.approveSamityClose();
  });

  it("20.04. Verify successfully performs the action when the action button is clicked.", function () {
    Samity_close.actionButtonCheck();
  });

  it("20.05. Verify the user can successfully view the samity close information, including the name and description.", function () {
    Samity_close.viewSamityClose();
  });

  it("20.06. Verify that clicking the go back button on the samity close view page redirects the user to the samity close list page.", function () {
    Samity_close.viewGoBackButton();
  });

  it("20.07. Verify the user can filter inactive employee records using the status dropdown on the samity close List page.", function () {
    Samity_close.statusInactiveDropdownCheck();
  });

  it("20.08. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    Samity_close.statusActiveDropdownCheck();
  });

  it("20.09. Verify that the search results are displayed correctly when searching by samity close name.", function () {
    Samity_close.searchInSamityCloseName();
  });

  it("20.10. Verify the grid list resets successfully when the reset button is clicked on the samity close page.", function () {
    Samity_close.gridResetButtonCheck();
  });

  it("20.11. Verify that the grid list is refreshed successfully when the refresh button is clicked on the samity close page.", function () {
    Samity_close.gridRefreshButtonCheck();
  });

  it("20.12. Verify display the grid list successfully when the Draft button on is clicked on the samity close page", function () {
    Samity_close.gridDraftButton();
  });

  it("20.13. Verify display the grid list successfully when the Draft button off is clicked on the samity close page", function () {
    Samity_close.gridDraftButtonOff();
  });

  it("20.14. Verify check that the samity close  office selection works correctly from the dropdown on the samity list page.", function () {
    Samity_close.selectofficeDropdown();
  });

  it("20.15 Verify check that the grid list content changes correctly from english to bangla.", function () {
    Samity_close.gridLanguageSwitchCheck();
  });
});
