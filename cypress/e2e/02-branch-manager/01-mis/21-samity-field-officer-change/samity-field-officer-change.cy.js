// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/21-samity-field-officer-change/samity-field-officer-change.cy.js --browser chrome --headed

import "cypress-file-upload";
import { samity_field_officer_change } from "./samity-field-officer-change.po";

describe("21. Samity Field Officer Change Module Test Cases", function () {
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

  it("21.01. Verify load the Samity Field Officer Change list page successfully", function () {
    samity_field_officer_change.gridSamityChangeListPage();
  });

  it("21.02. Verify reset the Samity Field Officer Change form successfully when Reset button is clicked", function () {
    samity_field_officer_change.changeResetButtonCheck();
  });

  it("21.03. Verify submit the Samity Field Officer Change form successfully when Submit button is clicked", function () {
    samity_field_officer_change.changeSubmitButtonCheck();
  });

  it("21.04. Verify approve the Samity Field Officer Change request successfully from the approval page", function () {
    samity_field_officer_change.changeApproveButtonCheck();
  });

  it("21.05. Verify navigate back successfully when Go Back button is clicked on the Samity Field Officer Change page", function () {
    samity_field_officer_change.changeGoBackButtonCheck();
  });

  it("21.06. Verify create a new Samity Field Officer Change record with valid information", function () {
    samity_field_officer_change.samityChange();
  });

  it("21.07. Verify allow the branch manager to approve a Samity Field Officer Change record after creation", function () {
    samity_field_officer_change.approveSamityChange();
  });

  it("21.08. Verify perform the correct action when the action button is clicked", function () {
    samity_field_officer_change.actionButtonCheck();
  });

  it("21.09. Verify display Samity Field Officer Change details correctly including name and description", function () {
    samity_field_officer_change.viewSamityChange();
  });

  it("21.10. Verify redirect to the list page when clicking the Go Back button from view page", function () {
    samity_field_officer_change.viewGoBackButton();
  });

  it("21.11. Verify filter inactive records correctly using the Status dropdown on the list page", function () {
    samity_field_officer_change.statusInactiveDropdownCheck();
  });

  it("21.12. Verify filter active records correctly using the Status dropdown on the list page", function () {
    samity_field_officer_change.statusActiveDropdownCheck();
  });

  it("21.13. Verify display correct search results when searching by Samity Field Officer Change name", function () {
    samity_field_officer_change.searchInSamityFieldOfficerChangeName();
  });

  it("21.14. Verify reset the grid list successfully when Reset button is clicked", function () {
    samity_field_officer_change.gridResetButtonCheck();
  });

  it("21.15. Verify refresh the grid list successfully when Refresh button is clicked", function () {
    samity_field_officer_change.gridRefreshButtonCheck();
  });

  it("21.16. Verify navigate correctly when Search button is clicked on the grid page", function () {
    samity_field_officer_change.gridSearchButtonCheck();
  });

  it("21.17. Verify display draft records when Draft filter is enabled", function () {
    samity_field_officer_change.gridDraftButton();
  });

  it("21.18. Verify hide draft records when Draft filter is disabled", function () {
    samity_field_officer_change.gridDraftButtonOff();
  });

  it("21.19. Verify switch language correctly between English and Bangla in the grid view", function () {
    samity_field_officer_change.gridLanguageSwitchCheck();
  });
  
});
