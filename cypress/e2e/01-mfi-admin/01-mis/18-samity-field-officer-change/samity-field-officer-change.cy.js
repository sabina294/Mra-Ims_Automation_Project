// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/18-samity-field-officer-change/samity-field-officer-change.cy.js --browser chrome --headed

import "cypress-file-upload";
import { samity_field_officer_change } from "./samity-field-officer-change.po";

describe("18. Samity Field Officer Change Module Test Cases", function () {
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

  it("18.01. Verify the samity field officer change list page loads correctly.", function () {
    samity_field_officer_change.gridSamityChangeListPage();
  });

  it("18.02. Verify new field officer change with valid information by MFI-Admin role", function () {
    samity_field_officer_change.samityChange();
  });

  it("18.03. Verify mfi-admin to successfully approve an samity change record after creation.", function () {
    samity_field_officer_change.approveSamityChange();
  });

  it("18.04. Verify successfully performs the action when the action button is clicked.", function () {
    samity_field_officer_change.actionButtonCheck();
  });

  it("18.05. Verify the user can successfully view the samity field officer change information, including the name and description.", function () {
    samity_field_officer_change.viewSamityChange();
  });

  it("18.06. Verify that clicking the go back button on the samity field officer change view page redirects the user to the samity field officer change list page.", function () {
    samity_field_officer_change.viewGoBackButton();
  });

  it("18.07. Verify that the Submit button for creating a new Field Officer functions correctly.", function () {
    samity_field_officer_change.samityChangeSubmit();
  });

  it("18.08. Verify that the Approve button for the new field officer change functions correctly.", function () {
    samity_field_officer_change.samityChangeApprove();
  });

  it("18.09. Verify that the Reset button in the New Field Officer Change form functions correctly.", function () {
    samity_field_officer_change.samityChangeReset();
  });

  it("18.10. Verify that the Go Back button functions correctly on the new Field Officer change screen.", function () {
    samity_field_officer_change.samityChangeGoBack();
  });

  it("18.11. Verify the user can filter inactive employee records using the status dropdown on the samity field officer change List page.", function () {
    samity_field_officer_change.statusInactiveDropdownCheck();
  });

  it("18.12. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    samity_field_officer_change.statusActiveDropdownCheck();
  });

  it("18.13. Verify that the search results are displayed correctly when searching by samity field officer change name.", function () {
    samity_field_officer_change.searchInSamityFieldOfficerChangeName();
  });

  it("18.14. Verify the grid list resets successfully when the reset button is clicked on the samity field officer change page.", function () {
    samity_field_officer_change.gridResetButtonCheck();
  });

  it("18.15. Verify that the grid list is refreshed successfully when the refresh button is clicked on the samity field officer change page.", function () {
    samity_field_officer_change.gridRefreshButtonCheck();
  });

  it("18.16. Verify display the grid list successfully when the Draft button on is clicked on the samity field officer change page", function () {
    samity_field_officer_change.gridDraftButton();
  });

  it("18.17. Verify display the grid list successfully when the Draft button off is clicked on the samity field officer change page", function () {
    samity_field_officer_change.gridDraftButtonOff();
  });

  it("18.18. Verify check that the samity field officer change  office selection works correctly from the dropdown on the samity list page.", function () {
    samity_field_officer_change.selectofficeDropdown();
  });

  it("18.19. Verify check that the grid list content changes correctly from english to bangla.", function () {
    samity_field_officer_change.gridLanguageSwitchCheck();
  });
}); 
