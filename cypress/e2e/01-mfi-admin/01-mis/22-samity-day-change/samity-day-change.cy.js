// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/22-samity-day-change/samity-day-change.cy.js --browser chrome --headed

import "cypress-file-upload";
import { samity_day_change } from "./samity-day-change.po";

describe("22. Samity Day Change Module Test Cases", function () {
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

  it("22.01. Verify the samity day change list page loads correctly.", function () {
    samity_day_change.gridSamityChangeListPage();
  });

  it("22.02. Verify new day change with valid information by MFI-Admin role", function () {
    samity_day_change.samityDayChange();
  });

  it("22.03. Verify mfi-admin to successfully approve an samity day change record after creation.", function () {
    samity_day_change.approveSamityDayChange();
  });

  it("22.04. Verify successfully performs the action when the action button is clicked.", function () {
    samity_day_change.actionButtonCheck();
  });

  it("22.05. Verify the user can successfully view the samity day change information, including the name and description.", function () {
    samity_day_change.viewSamityDayChange();
  });

  it("22.06. Verify that clicking the go back button on the samity day change view page redirects the user to the samity day change list page.", function () {
    samity_day_change.viewGoBackButton();
  });

  it("22.07. Verify that the Submit button for creating a new samity day functions correctly.", function () {
    samity_day_change.samityChangeSubmit();
  });

  it("22.08. Verify that the Approve button for the new samity day change functions correctly.", function () {
    samity_day_change.samityChangeApprove();
  });

  it("22.09. Verify that the Reset button in the New samity day Change form functions correctly.", function () {
    samity_day_change.samityChangeReset();
  });

  it("22.10. Verify that the Go Back button functions correctly on the new samity day change screen.", function () {
    samity_day_change.samityChangeGoBack();
  });

  it("22.11. Verify the user can filter inactive employee records using the status dropdown on the samity day change List page.", function () {
    samity_day_change.statusInactiveDropdownCheck();
  });

  it("22.12. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    samity_day_change.statusActiveDropdownCheck();
  });

  it("22.13. Verify that the search results are displayed correctly when searching by samity day change name.", function () {
    samity_day_change.searchInSamityDayChangeName();
  });

  it("22.14. Verify the grid list resets successfully when the reset button is clicked on the samity day change page.", function () {
    samity_day_change.gridResetButtonCheck();
  });

  it("22.15. Verify that when the user clicks the Search button on the samity day change grid page, the system redirects to the samity day change List page..", function () {
    samity_day_change.gridSearchButtonCheck();
  });

  it("22.16. Verify that the grid list is refreshed successfully when the refresh button is clicked on the samity day change page.", function () {
    samity_day_change.gridRefreshButtonCheck();
  });

  it("22.17. Verify display the grid list successfully when the Draft button on is clicked on the samity day change page", function () {
    samity_day_change.gridDraftButton();
  });

  it("22.18. Verify display the grid list successfully when the Draft button off is clicked on the samity day change page", function () {
    samity_day_change.gridDraftButtonOff();
  });

  it("22.22. Verify check that the samity day change  office selection works correctly from the dropdown on the samity list page.", function () {
    samity_day_change.selectofficeDropdown();
  });

  it("22.20. Verify check that the grid list content changes correctly from english to bangla.", function () {
    samity_day_change.gridLanguageSwitchCheck();
  });
});
