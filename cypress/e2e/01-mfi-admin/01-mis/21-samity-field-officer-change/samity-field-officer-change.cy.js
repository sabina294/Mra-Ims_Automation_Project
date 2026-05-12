// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/21-samity-field-officer-change/samity-field-officer-change.cy.js --browser chrome --headed

import "cypress-file-upload";
import { samity_field_officer_change } from "./samity-field-officer-change.po";

describe("21. Samity Field Officer Change Module Test Cases", function () {
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

  it("21.01. Verify the samity field officer change list page loads correctly.", function () {
    samity_field_officer_change.gridSamityChangeListPage();
  });

  it("21.02. Verify that the Submit button for creating a new Field Officer functions correctly.", function () {
    samity_field_officer_change.samityChangeSubmit();
  });

  it("21.03. Verify that the Approve button for the new field officer change functions correctly.", function () {
    samity_field_officer_change.samityChangeApprove();
  });

  it("21.04. Verify that the Reset button in the New Field Officer Change form functions correctly.", function () {
    samity_field_officer_change.samityChangeReset();
  });

  it("21.05. Verify that the Go Back button functions correctly on the new Field Officer change screen.", function () {
    samity_field_officer_change.samityChangeGoBack();
  });

  it("21.06. Verify new field officer change with valid information by MFI-Admin role", function () {
    samity_field_officer_change.samityChange();
  });

  it("21.07. Verify mfi-admin to successfully approve an samity change record after creation.", function () {
    samity_field_officer_change.approveSamityChange();
  });

  it("21.08. Verify successfully performs the action when the action button is clicked.", function () {
    samity_field_officer_change.actionButtonCheck();
  });

  it("21.09. Verify the user can successfully view the samity field officer change information, including the name and description.", function () {
    samity_field_officer_change.viewSamityChange();
  });

  it("21.10. Verify that clicking the go back button on the samity field officer change view page redirects the user to the samity field officer change list page.", function () {
    samity_field_officer_change.viewGoBackButton();
  });

  it("21.11. Verify the user can filter inactive employee records using the status dropdown on the samity field officer change List page.", function () {
    samity_field_officer_change.statusInactiveDropdownCheck();
  });

  it("21.12. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    samity_field_officer_change.statusActiveDropdownCheck();
  });

  it("21.13. Verify that the search results are displayed correctly when searching by samity field officer change name.", function () {
    samity_field_officer_change.searchInSamityFieldOfficerChangeName();
  });

  it("21.14. Verify the grid list resets successfully when the reset button is clicked on the samity field officer change page.", function () {
    samity_field_officer_change.gridResetButtonCheck();
  });

  it("21.15. Verify that when the user clicks the Search button on the samity field officer change grid page, the system redirects to the samity field officer change List page..", function () {
    samity_field_officer_change.gridSearchButtonCheck();
  });

  it("21.16. Verify that the grid list is refreshed successfully when the refresh button is clicked on the samity field officer change page.", function () {
    samity_field_officer_change.gridRefreshButtonCheck();
  });

  it("21.17. Verify display the grid list successfully when the Draft button on is clicked on the samity field officer change page", function () {
    samity_field_officer_change.gridDraftButton();
  });

  it("21.21. Verify display the grid list successfully when the Draft button off is clicked on the samity field officer change page", function () {
    samity_field_officer_change.gridDraftButtonOff();
  });

  it("21.19. Verify check that the samity field officer change  office selection works correctly from the dropdown on the samity list page.", function () {
    samity_field_officer_change.selectofficeDropdown();
  });

  it("21.20. Verify check that the grid list content changes correctly from english to bangla.", function () {
    samity_field_officer_change.gridLanguageSwitchCheck();
  });
}); 
