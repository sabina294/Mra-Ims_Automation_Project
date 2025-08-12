// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/17-samity-field-officer-change/samity-field-officer-change.cy.js --browser chrome --headed

import "cypress-file-upload";
import { samity_field_officer_change } from "./samity-field-officer-change.po";

describe("17. Samity Field Officer Change Module Test Cases", function () {
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

  it("17.01. Verify the samity field officer change list page loads correctly.", function () {
    samity_field_officer_change.gridSamityChangeListPage();
  });

  it("17.02. Verify successfully performs the action when the action button is clicked.", function () {
    samity_field_officer_change.actionButtonCheck();
  });

  // it("17.03. Verify the user can successfully view the samity field officer change information, including the name and description.", function () {
  //   samity_field_officer_change.viewSamityChange();
  // });

//   it("17.04. Verify new field officer change with valid information by MFI-Admin role", function () {
//     samity_field_officer_change.samityChange();
//   });

//   it("17.05. Verify mfi-admin to successfully approve an samity change record after creation.", function () {
//     create_samity_management.approveSamityChange();
//   });

  it("17.06. Verify the user can filter inactive employee records using the status dropdown on the samity field officer change List page.", function () {
    samity_field_officer_change.statusInactiveDropdownCheck();
  });

  it("17.07. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    samity_field_officer_change.statusActiveDropdownCheck();
  });

  it("17.08. Verify that the search results are displayed correctly when searching by samity field officer change name.", function () {
    samity_field_officer_change.searchInSamityFieldOfficerChangeName();
  });

  it("17.09. Verify the grid list resets successfully when the reset button is clicked on the samity field officer change page.", function () {
    samity_field_officer_change.gridResetButtonCheck();
  });

  it("17.10. Verify that the grid list is refreshed successfully when the refresh button is clicked on the samity field officer change page.", function () {
    samity_field_officer_change.gridRefreshButtonCheck();
  });

  it("17.11. Verify display the grid list successfully when the Draft button on is clicked on the samity field officer change page", function () {
    samity_field_officer_change.gridDraftButton();
  });

  it("17.12. Verify display the grid list successfully when the Draft button off is clicked on the samity field officer change page", function () {
    samity_field_officer_change.gridDraftButtonOff();
  });

  it("17.13. Verify check that the samity field officer change  office selection works correctly from the dropdown on the samity list page.", function () {
    samity_field_officer_change.selectofficeDropdown();
  });

  it("17.14 Verify check that the grid list content changes correctly from english to bangla.", function () {
    samity_field_officer_change.gridLanguageSwitchCheck();
  });
});
