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

  it("19.01. Verify that the Samity Management list page loads successfully", function () {
    create_samity_management.gridSamityManagementListPage();
  });

  it("19.02. Verify that a new Samity Management record is created successfully with valid required data", function () {
    create_samity_management.createSamity();
  });

  it("19.03. Verify that the MFI Admin can successfully approve a Samity Management record after creation", function () {
    create_samity_management.approveSamity();
  });

  it("19.04. Verify that a Samity Management record cannot be created without Samity Name (English)", function () {
    create_samity_management.createWithoutNameEn();
  });

  it("19.05. Verify that a Samity Management record cannot be created without Samity Name (Bangla)", function () {
    create_samity_management.createWithoutNameBn();
  });

  it("19.06. Verify that a Samity Management record cannot be created without selecting Samity Type", function () {
    create_samity_management.createWithoutSamityType();
  });

  it("19.07. Verify that a Samity Management record cannot be created without selecting Office", function () {
    create_samity_management.createWithoutOffice();
  });

  it("19.08. Verify that a Samity Management record cannot be created without selecting Field Officer", function () {
    create_samity_management.createWithoutFieldOfficer();
  });

  it("19.09. Verify that a Samity Management record cannot be created without selecting MFI Program", function () {
    create_samity_management.createWithoutMfiProgram();
  });

  it("19.10. Verify that a Samity Management record cannot be created without selecting Samity Day", function () {
    create_samity_management.createWithoutSamityDay();
  });

  it("19.11. Verify that a Samity Management record cannot be created without selecting Samity Frequency", function () {
    create_samity_management.createWithoutSamityFrequency();
  });

  it("19.12. Verify that a Samity Management record cannot be created without specifying Maximum Member", function () {
    create_samity_management.createWithoutSamityMaximumMember();
  });

  it("19.13. Verify that a Samity Management record cannot be created without specifying Working Area", function () {
    create_samity_management.createWithoutSamityWorkingArea();
  });

  it("19.14. Verify that a Samity Management record cannot be created without Address Line 1", function () {
    create_samity_management.createWithoutSamityAdressLine1();
  });

  it("19.15. Verify that a Samity Management record cannot be created without selecting Geo Area Type", function () {
    create_samity_management.createWithoutSamityGeoAreaType();
  });

  it("19.16. Verify that the Action button performs the expected operation when clicked", function () {
    create_samity_management.actionButtonCheck();
  });

  it("19.17. Verify that Samity Management details can be viewed successfully", function () {
    create_samity_management.viewSamity();
  });

  it("19.18. Verify that clicking Go Back on the view page redirects to Samity Management list page", function () {
    create_samity_management.viewGoBackButton();
  });

  it("19.19. Verify that the Reset button on the edit page clears modified values", function () {
    create_samity_management.editResetButton();
  });

  it("19.20. Verify that clicking Go Back on the edit page redirects to Samity Management list page", function () {
    create_samity_management.editGoBackButton();
  });

  it("19.21. Verify that inactive Samity records can be filtered using Status dropdown", function () {
    create_samity_management.statusInactiveDropdownCheck();
  });

  it("19.22. Verify that active Samity records can be filtered using Status dropdown", function () {
    create_samity_management.statusActiveDropdownCheck();
  });

  it("19.23. Verify that Samity Management search works correctly by name", function () {
    create_samity_management.searchInSamityManagementName();
  });

  it("19.24. Verify that the grid resets successfully when Reset button is clicked", function () {
    create_samity_management.gridResetButtonCheck();
  });

  it("19.25. Verify that the grid refreshes successfully when Refresh button is clicked", function () {
    create_samity_management.gridRefreshButtonCheck();
  });

  it("19.26. Verify that grid checkbox selection works correctly", function () {
    create_samity_management.gridCheckboxCheck();
  });

  it("19.27. Verify that Lock button works correctly for selected records", function () {
    create_samity_management.gridCheckboxLockButtonCheck();
  });

  it("19.28. Verify that Unlock button works correctly for selected records", function () {
    create_samity_management.gridCheckboxUnlockButtonCheck();
  });

  it("19.29. Verify that a Samity Management record can be saved successfully as Draft", function () {
    create_samity_management.createDraftButton();
  });

  it("19.30. Verify that draft records are displayed when Draft filter is enabled", function () {
    create_samity_management.gridDraftButton();
  });

  it("19.31. Verify that draft records are hidden when Draft filter is disabled", function () {
    create_samity_management.gridDraftButtonOff();
  });

  it("19.32. Verify that Reset button clears all input fields on creation page", function () {
    create_samity_management.createResetButtonCheck();
  });

  it("19.33. Verify validation messages appear when saving Draft with empty required fields", function () {
    create_samity_management.createDraftButtonCheck();
  });

  it("19.34. Verify validation messages appear when submitting with empty required fields", function () {
    create_samity_management.createValidationMessageCheck();
  });

  it("19.35. Verify validation messages appear when approving with empty required fields", function () {
    create_samity_management.createApproveButtonCheck();
  });

  it("19.36. Verify that Go Back on creation page redirects to Samity Management list page", function () {
    create_samity_management.createGoBackButtonCheck();
  });

  it("19.37. Verify that clicking Search redirects and updates Samity Management list correctly", function () {
    create_samity_management.gridSearchButtonCheck();
  });

  it("19.38. Verify that grid updates correctly when switching language from English to Bangla", function () {
    create_samity_management.gridLanguageSwitchCheck();
  });
});
