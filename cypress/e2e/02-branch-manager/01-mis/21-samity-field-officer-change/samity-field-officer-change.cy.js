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

  it("21.01. Verify that the Samity Field Officer Change list page loads successfully.", function () {
    samity_field_officer_change.gridSamityChangeListPage();
  });

  it("21.02. Verify that a new Samity Field Officer Change record can be created with valid information.", function () {
    samity_field_officer_change.samityChange();
  });

  it("21.03. Verify that the MFI Admin can successfully approve a Samity Field Officer Change record after creation.", function () {
    samity_field_officer_change.approveSamityChange();
  });

  it("21.04. Verify that the appropriate action is performed when the action button is clicked.", function () {
    samity_field_officer_change.actionButtonCheck();
  });

  it("21.05. Verify that the user can successfully view Samity Field Officer Change details, including the name and description.", function () {
    samity_field_officer_change.viewSamityChange();
  });

  it("21.06. Verify that clicking the Go Back button on the view page redirects the user to the Samity Field Officer Change list page.", function () {
    samity_field_officer_change.viewGoBackButton();
  });

  it("21.07. Verify that the Reset button works correctly on the Samity Field Officer Change form.", function () {
    samity_field_officer_change.changeResetButtonCheck();
  });

  it("21.08. Verify that the Submit button functions correctly on the Samity Field Officer Change form.", function () {
    samity_field_officer_change.changeSubmitButtonCheck();
  });

  it("21.09. Verify that the Approve button functions correctly on the Samity Field Officer Change page.", function () {
    samity_field_officer_change.changeApproveButtonCheck();
  });

  it("21.10. Verify that the Go Back button functions correctly on the Samity Field Officer Change page.", function () {
    samity_field_officer_change.changeGoBackButtonCheck();
  });

  it("21.11. Verify that the user can filter inactive records using the Status dropdown on the list page.", function () {
    samity_field_officer_change.statusInactiveDropdownCheck();
  });

  it("21.12. Verify that the Status dropdown correctly filters active records.", function () {
    samity_field_officer_change.statusActiveDropdownCheck();
  });

  it("21.13. Verify that search results are displayed correctly when searching by Samity Field Officer Change name.", function () {
    samity_field_officer_change.searchInSamityFieldOfficerChangeName();
  });

  it("21.14. Verify that the grid list resets successfully when the Reset button is clicked.", function () {
    samity_field_officer_change.gridResetButtonCheck();
  });

  it("21.15. Verify that the grid list refreshes successfully when the Refresh button is clicked.", function () {
    samity_field_officer_change.gridRefreshButtonCheck();
  });

  it("21.16. Verify that the grid list displays draft records when the Draft filter is enabled.", function () {
    samity_field_officer_change.gridDraftButton();
  });

  it("21.17. Verify that the grid list hides draft records when the Draft filter is disabled.", function () {
    samity_field_officer_change.gridDraftButtonOff();
  });

  it("21.18. Verify that the grid content changes correctly when switching the language from English to Bangla.", function () {
    samity_field_officer_change.gridLanguageSwitchCheck();
  });
});
