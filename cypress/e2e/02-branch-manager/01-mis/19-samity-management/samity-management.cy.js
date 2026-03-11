// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/19-samity-management/samity-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_samity_management } from "./samity-management.po";

describe("19. Samity management Module Test Cases", function () {
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

  it("19.01 Verify that the Samity Management list page loads successfully.", function () {
    create_samity_management.gridSamityManagementListPage();
  });

  it("19.02 Verify that a new Samity Management record is created successfully when all required fields contain valid data.", function () {
    create_samity_management.createSamity();
  });

  it("19.03 Verify that the MFI Admin can successfully approve a Samity Management record after creation.", function () {
    create_samity_management.approveSamity();
  });

  it("19.04 Verify that a Samity Management record cannot be created without a Samity Name (English).", function () {
    create_samity_management.createWithoutNameEn();
  });

  it("19.05 Verify that a Samity Management record cannot be created without a Samity Name (Bangla).", function () {
    create_samity_management.createWithoutNameBn();
  });

  it("19.06 Verify that a Samity Management record cannot be created without selecting a Samity Type.", function () {
    create_samity_management.createWithoutSamityType();
  });

  it("19.07 Verify that a Samity Management record cannot be created without selecting an Office.", function () {
    create_samity_management.createWithoutOffice();
  });

  it("19.08 Verify that a Samity Management record cannot be created without selecting a Field Officer.", function () {
    create_samity_management.createWithoutFieldOfficer();
  });

  it("19.09 Verify that a Samity Management record cannot be created without selecting an MFI Program.", function () {
    create_samity_management.createWithoutMfiProgram();
  });

  it("19.10 Verify that a Samity Management record cannot be created without selecting a Samity Day.", function () {
    create_samity_management.createWithoutSamityDay();
  });

  it("19.11 Verify that a Samity Management record cannot be created without selecting a Samity Frequency.", function () {
    create_samity_management.createWithoutSamityFrequency();
  });

  it("19.12 Verify that a Samity Management record cannot be created without specifying the Maximum Member.", function () {
    create_samity_management.createWithoutSamityMaximumMember();
  });

  it("19.13 Verify that a Samity Management record cannot be created without specifying the Working Area.", function () {
    create_samity_management.createWithoutSamityWorkingArea();
  });

  it("19.14 Verify that a Samity Management record cannot be created without entering Address Line 1.", function () {
    create_samity_management.createWithoutSamityAdressLine1();
  });

  it("19.15 Verify that a Samity Management record cannot be created without selecting a Geo Area Type.", function () {
    create_samity_management.createWithoutSamityGeoAreaType();
  });

  it("19.16 Verify that the Action button performs the expected operation when clicked.", function () {
    create_samity_management.actionButtonCheck();
  });

  it("19.17 Verify that the user can successfully view Samity Management details including name and description.", function () {
    create_samity_management.viewSamity();
  });

  it("19.18 Verify that clicking the Go Back button on the Samity view page redirects the user to the Samity Management list page.", function () {
    create_samity_management.viewGoBackButton();
  });

  it("19.19 Verify that the Reset button on the Samity edit page clears the modified values.", function () {
    create_samity_management.editResetButton();
  });

  it("19.20 Verify that clicking the Go Back button on the Samity edit page redirects the user to the Samity Management list page.", function () {
    create_samity_management.editGoBackButton();
  });

  it("19.21 Verify that inactive Samity records can be filtered using the Status dropdown.", function () {
    create_samity_management.statusInactiveDropdownCheck();
  });

  it("19.22 Verify that active Samity records can be filtered using the Status dropdown.", function () {
    create_samity_management.statusActiveDropdownCheck();
  });

  it("19.23 Verify that the search results display correctly when searching by Samity Management name.", function () {
    create_samity_management.searchInSamityManagementName();
  });

  it("19.24 Verify that the grid list resets successfully when the Reset button is clicked.", function () {
    create_samity_management.gridResetButtonCheck();
  });

  it("19.25 Verify that the grid list refreshes successfully when the Refresh button is clicked.", function () {
    create_samity_management.gridRefreshButtonCheck();
  });

  it("19.26 Verify that the grid checkbox functions correctly.", function () {
    create_samity_management.gridCheckboxCheck();
  });

  it("19.27 Verify that the Lock button works correctly for selected records.", function () {
    create_samity_management.gridCheckboxLockButtonCheck();
  });

  it("19.28 Verify that the Unlock button works correctly for selected records.", function () {
    create_samity_management.gridCheckboxUnlockButtonCheck();
  });

  it("19.29 Verify that a Samity Management record can be saved successfully using the Draft button.", function () {
    create_samity_management.createDraftButton();
  });

  it("19.30 Verify that the grid list displays draft records when the Draft filter is enabled.", function () {
    create_samity_management.gridDraftButton();
  });

  it("19.31 Verify that the grid list hides draft records when the Draft filter is disabled.", function () {
    create_samity_management.gridDraftButtonOff();
  });

  it("19.32 Verify that the Reset button on the Samity creation page clears all entered input values.", function () {
    create_samity_management.createResetButtonCheck();
  });

  it("19.33 Verify that validation messages appear when the Draft button is clicked with empty required fields.", function () {
    create_samity_management.createDraftButtonCheck();
  });

  it("19.34 Verify that validation messages appear when the Submit button is clicked with empty required fields.", function () {
    create_samity_management.createValidationMessageCheck();
  });

  it("19.35 Verify that validation messages appear when the Approve button is clicked with empty required fields.", function () {
    create_samity_management.createApproveButtonCheck();
  });

  it("19.36 Verify that clicking the Go Back button on the Samity creation page redirects the user to the Samity Management list page.", function () {
    create_samity_management.createGoBackButtonCheck();
  });

  it("19.37 Verify that the grid list content updates correctly when switching the language from English to Bangla.", function () {
    create_samity_management.gridLanguageSwitchCheck();
  });
});
