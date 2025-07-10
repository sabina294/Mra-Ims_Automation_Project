// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mfi-admin/18-samity-day-change/samity-day-change.cy.js --browser chrome --headed

import "cypress-file-upload";
import { samity_day_change } from "./samity-day-change.po";

describe("18. Samity Day Change Module Test Cases", function () {
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

  it("18.01. Verify the samity day change list page loads correctly.", function () {
    samity_day_change.gridSamityChangeListPage();
  });

  it("18.02. Verify successfully performs the action when the action button is clicked.", function () {
    samity_day_change.actionButtonCheck();
  });

  it("18.03. Verify the user can successfully view the samity day change information, including the name and description.", function () {
    samity_day_change.viewSamityDayChange();
  });

  //   it("18.04. Verify new day change with valid information by MFI-Admin role", function () {
  //     samity_day_change.samityDayChange();
  //   });

  //   it("18.05. Verify mfi-admin to successfully approve an samity day change record after creation.", function () {
  //     create_samity_management.approveSamityDayChange();
  //   });

  it("18.06. Verify the user can filter inactive employee records using the status dropdown on the samity day change List page.", function () {
    samity_day_change.statusInactiveDropdownCheck();
  });

  it("18.07. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    samity_day_change.statusActiveDropdownCheck();
  });

  it("18.08. Verify that the search results are displayed correctly when searching by samity day change name.", function () {
    samity_day_change.searchInSamityDayChangeName();
  });

  it("18.09. Verify the grid list resets successfully when the reset button is clicked on the samity day change page.", function () {
    samity_day_change.gridResetButtonCheck();
  });

  it("18.10. Verify that the grid list is refreshed successfully when the refresh button is clicked on the samity day change page.", function () {
    samity_day_change.gridRefreshButtonCheck();
  });

  it("18.11. Verify display the grid list successfully when the Draft button on is clicked on the samity day change page", function () {
    samity_day_change.gridDraftButton();
  });

  it("18.12. Verify display the grid list successfully when the Draft button off is clicked on the samity day change page", function () {
    samity_day_change.gridDraftButtonOff();
  });

  it("18.13. Verify check that the samity day change  office selection works correctly from the dropdown on the samity list page.", function () {
    samity_day_change.selectofficeDropdown();
  });

  it("18.14 Verify check that the grid list content changes correctly from english to bangla.", function () {
    samity_day_change.gridLanguageSwitchCheck();
  });
});
