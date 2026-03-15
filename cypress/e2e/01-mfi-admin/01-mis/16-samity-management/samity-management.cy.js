// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/16-samity-management/samity-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_samity_management } from "./samity-management.po";

describe("16. Samity management Module Test Cases", function () {
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

  it("16.01. Verify the samity management list page loads correctly.", function () {
    create_samity_management.gridSamityManagementListPage();
  });

  it("16.02. Verify a new samity management record is created successfully when all required fields are filled with valid data.", function () {
    create_samity_management.createSamity();
  });

  it("16.03. Verify mfi-admin to successfully approve an samity management record after creation.", function () {
    create_samity_management.approveSamity();
  });

  it("16.04. Verify that a samity management cannot be created without a samity management name english, even if all other fields are valid.", function () {
    create_samity_management.createWithoutNameEn();
  });

  it("16.05. Verify that a samity management cannot be created without a samity management name bangla, even if all other fields are valid.", function () {
    create_samity_management.createWithoutNameBn();
  });

  it("16.06 Verify that a Samity Management record cannot be created without selecting a Samity Type.", function () {
    create_samity_management.createWithoutSamityType();
  });

  it("16.07 Verify that a Samity Management record cannot be created without selecting an Office.", function () {
    create_samity_management.createWithoutOffice();
  });

  it("16.08 Verify that a Samity Management record cannot be created without selecting a Field Officer.", function () {
    create_samity_management.createWithoutFieldOfficer();
  });

  it("16.09 Verify that a Samity Management record cannot be created without selecting an MFI Program.", function () {
    create_samity_management.createWithoutMfiProgram();
  });

  it("16.10 Verify that a Samity Management record cannot be created without selecting a Samity Day.", function () {
    create_samity_management.createWithoutSamityDay();
  });

  it("16.11 Verify that a Samity Management record cannot be created without selecting a Samity Frequency.", function () {
    create_samity_management.createWithoutSamityFrequency();
  });

  it("16.12 Verify that a Samity Management record cannot be created without specifying the Maximum Member.", function () {
    create_samity_management.createWithoutSamityMaximumMember();
  });

  it("16.13 Verify that a Samity Management record cannot be created without specifying the Working Area.", function () {
    create_samity_management.createWithoutSamityWorkingArea();
  });

  it("16.14 Verify that a Samity Management record cannot be created without entering Address Line 1.", function () {
    create_samity_management.createWithoutSamityAdressLine1();
  });

  it("16.15 Verify that a Samity Management record cannot be created without selecting a Geo Area Type.", function () {
    create_samity_management.createWithoutSamityGeoAreaType();
  });

  it("16.16. Verify successfully performs the action when the action button is clicked.", function () {
    create_samity_management.actionButtonCheck();
  });

  it("16.17. Verify the user can successfully view the samity management information, including the name and description.", function () {
    create_samity_management.viewSamity();
  });

  it("16.18. Verify that clicking the go back button on the samity management view page redirects the user to the samity management list page.", function () {
    create_samity_management.viewGoBackButton();
  });

  it("16.19. Verify the samity management edit reset button functions correctly.", function () {
    create_samity_management.editResetButton();
  });

  it("16.20. Verify the samity management edit reset button functions correctly.", function () {
    create_samity_management.editDraftButton();
  });

  it("16.21. Verify the samity management edit reset button functions correctly.", function () {
    create_samity_management.editSubmitButton();
  });

  it("16.22. Verify the samity management edit reset button functions correctly.", function () {
    create_samity_management.editApproveButton();
  });

  it("16.23. Verify that clicking the go back button on the samity management edit page redirects the user to the samity management list page.", function () {
    create_samity_management.editGoBackButton();
  });

  it("16.24. Verify the user can filter inactive employee records using the status dropdown on the samity management List page.", function () {
    create_samity_management.statusInactiveDropdownCheck();
  });

  it("16.25. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    create_samity_management.statusActiveDropdownCheck();
  });

  it("16.26. Verify that the search results are displayed correctly when searching by samity management name.", function () {
    create_samity_management.searchInSamityManagementName();
  });

  it("16.27. Verify the grid list resets successfully when the reset button is clicked on the samity management page.", function () {
    create_samity_management.gridResetButtonCheck();
  });

  it("16.28. Verify that the grid list is refreshed successfully when the refresh button is clicked on the samity management page.", function () {
    create_samity_management.gridRefreshButtonCheck();
  });

  it("16.29. Verify a new samity management record is created successfully when all required fields are filled with valid data.", function () {
    create_samity_management.createDraftButton();
  });

  it("16.30. Verify display the grid list successfully when the Draft button on is clicked on the Samity Management page", function () {
    create_samity_management.gridDraftButton();
  });

  it("16.31. Verify display the grid list successfully when the Draft button off is clicked on the Samity Management page", function () {
    create_samity_management.gridDraftButtonOff();
  });

  it("16.32. Verify that the checkbox functions correctly.", function () {
    create_samity_management.gridCheckboxCheck();
  });

  it("16.33. Verify that the checkbox lock button operates correctly when selected.", function () {
    create_samity_management.gridCheckboxLockButtonCheck();
  });

  it("16.34. Verify that the checkbox unlock button operates correctly when selected.", function () {
    create_samity_management.gridCheckboxUnlockButtonCheck();
  });

  it("16.35. Verify check that the samity management  office selection works correctly from the dropdown on the samity list page.", function () {
    create_samity_management.selectofficeDropdown();
  });

  it("16.36. Verify the samity management creation reset button clears all entered input values.", function () {
    create_samity_management.createResetButtonCheck();
  });

  it("16.37. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_samity_management.createValidationMessageCheck();
  });

  it("16.38. Verify validation messages appear for required fields when the approve button is clicked with empty inputs.", function () {
    create_samity_management.createApproveButtonCheck();
  });

  it("16.39. Verify that clicking the go back button on the samity management create page redirects the user to the samity management list page.", function () {
    create_samity_management.createGoBackButtonCheck();
  });

  it("16.40. Verify that clicking the draft button on the samity management create page redirects the user to the samity management list page.", function () {
    create_samity_management.createDraftButtonCheck();
  });

  it("16.41. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_samity_management.gridLanguageSwitchCheck();
  });
});
