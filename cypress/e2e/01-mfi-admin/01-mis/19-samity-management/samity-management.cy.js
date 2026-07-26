// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/19-samity-management/samity-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_samity_management } from "./samity-management.po";

describe("19. Samity management Module Test Cases", function () {
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

  it("19.01. Verify that the Samity Management list page loads successfully.", function () {
    create_samity_management.gridSamityManagementListPage();
  });

  it("19.02. Verify that a new Samity Management record is created successfully when all required fields are filled with valid data.", function () {
    create_samity_management.createSamity();
  });

  it("19.03. Verify that the created Samity Management record appears in My Tasks.", function () {
    create_samity_management.myTaskMenuSamity();
  });

  it("19.04. Verify that the Office dropdown filter works correctly on the My Tasks page.", function () {
    create_samity_management.myTaskSamityOfficeDropdownCheck();
  });

  it("19.05. Verify that the Reset button clears all applied filters on the My Tasks page.", function () {
    create_samity_management.myTaskResetButtonCheck();
  });

  it("19.06. Verify that the Refresh button reloads the My Tasks list successfully.", function () {
    create_samity_management.myTaskRefreshButtonCheck();
  });

  it("19.07. Verify that the Search button displays the correct Samity Management records in My Tasks.", function () {
    create_samity_management.myTaskSearchButtonCheck();
  });

  it("19.08. Verify that the MFI Admin can successfully approve a Samity Management record.", function () {
    create_samity_management.approveSamity();
  });

  it("19.09. Verify that a Samity Management record cannot be created without an English name, even when all other required fields are valid.", function () {
    create_samity_management.createWithoutNameEn();
  });

  it("19.10. Verify that a Samity Management record cannot be created without a Bangla name, even when all other required fields are valid.", function () {
    create_samity_management.createWithoutNameBn();
  });

  it("19.11. Verify that a Samity Management record cannot be created without selecting a Samity Type.", function () {
    create_samity_management.createWithoutSamityType();
  });

  it("19.12. Verify that a Samity Management record cannot be created without selecting an Office.", function () {
    create_samity_management.createWithoutOffice();
  });

  it("19.13. Verify that a Samity Management record cannot be created without selecting a Field Officer.", function () {
    create_samity_management.createWithoutFieldOfficer();
  });

  it("19.14. Verify that a Samity Management record cannot be created without selecting an MFI Program.", function () {
    create_samity_management.createWithoutMfiProgram();
  });

  it("19.15. Verify that a Samity Management record cannot be created without selecting a Samity Day.", function () {
    create_samity_management.createWithoutSamityDay();
  });

  it("19.16. Verify that a Samity Management record cannot be created without selecting a Samity Frequency.", function () {
    create_samity_management.createWithoutSamityFrequency();
  });

  it("19.17. Verify that a Samity Management record cannot be created without specifying the Maximum Member.", function () {
    create_samity_management.createWithoutSamityMaximumMember();
  });

  it("19.18. Verify that a Samity Management record cannot be created without specifying the Working Area.", function () {
    create_samity_management.createWithoutSamityWorkingArea();
  });

  it("19.19. Verify that a Samity Management record cannot be created without entering Address Line 1.", function () {
    create_samity_management.createWithoutSamityAdressLine1();
  });

  it("19.20. Verify that a Samity Management record cannot be created without selecting a Geo Area Type.", function () {
    create_samity_management.createWithoutSamityGeoAreaType();
  });

  it("19.21. Verify that the Action button functions correctly.", function () {
    create_samity_management.actionButtonCheck();
  });

  it("19.22. Verify that the user can successfully view the Samity Management details.", function () {
    create_samity_management.viewSamity();
  });

  it("19.23. Verify that clicking the Go Back button on the Samity Management view page redirects the user to the Samity Management list page.", function () {
    create_samity_management.viewGoBackButton();
  });

  it("19.24. Verify that the Reset button functions correctly on the Samity Management edit page.", function () {
    create_samity_management.editResetButton();
  });

  it("19.25. Verify that the Draft button functions correctly on the Samity Management edit page.", function () {
    create_samity_management.editDraftButton();
  });

  it("19.26. Verify that the Submit button functions correctly on the Samity Management edit page.", function () {
    create_samity_management.editSubmitButton();
  });

  it("19.27. Verify that the Approve button functions correctly on the Samity Management edit page.", function () {
    create_samity_management.editApproveButton();
  });

  it("19.28. Verify that clicking the Go Back button on the Samity Management edit page redirects the user to the Samity Management list page.", function () {
    create_samity_management.editGoBackButton();
  });

  it("19.29. Verify that the Status filter displays inactive Samity Management records correctly.", function () {
    create_samity_management.statusInactiveDropdownCheck();
  });

  it("19.30. Verify that the Status filter displays active Samity Management records correctly.", function () {
    create_samity_management.statusActiveDropdownCheck();
  });

  it("19.31. Verify that the search results are displayed correctly when searching by Samity Management name.", function () {
    create_samity_management.searchInSamityManagementName();
  });

  it("19.32. Verify that the Reset button clears all applied filters on the Samity Management list page.", function () {
    create_samity_management.gridResetButtonCheck();
  });

  it("19.33. Verify that the Refresh button reloads the Samity Management list successfully.", function () {
    create_samity_management.gridRefreshButtonCheck();
  });

  it("19.34. Verify that the Search button displays the correct records on the Samity Management list page.", function () {
    create_samity_management.gridSearchButtonCheck();
  });

  it("19.35. Verify that a Samity Management record can be saved successfully as a draft.", function () {
    create_samity_management.createDraftButton();
  });

  it("19.36. Verify that enabling the Draft filter displays draft records correctly on the Samity Management list page.", function () {
    create_samity_management.gridDraftButton();
  });

  it("19.37. Verify that disabling the Draft filter displays all records correctly on the Samity Management list page.", function () {
    create_samity_management.gridDraftButtonOff();
  });

  it("19.38. Verify that the record selection checkbox functions correctly.", function () {
    create_samity_management.gridCheckboxCheck();
  });

  it("19.39. Verify that the Lock action works correctly for the selected records.", function () {
    create_samity_management.gridCheckboxLockButtonCheck();
  });

  it("19.40. Verify that the Unlock action works correctly for the selected records.", function () {
    create_samity_management.gridCheckboxUnlockButtonCheck();
  });

  it("19.41. Verify that the Office dropdown filter works correctly on the Samity Management list page.", function () {
    create_samity_management.selectofficeDropdown();
  });

  it("19.42. Verify that the Reset button clears all entered values on the Samity Management creation page.", function () {
    create_samity_management.createResetButtonCheck();
  });

  it("19.43. Verify that validation messages are displayed for all required fields when the Submit button is clicked with empty inputs.", function () {
    create_samity_management.createValidationMessageCheck();
  });

  it("19.44. Verify that validation messages are displayed for all required fields when the Approve button is clicked with empty inputs.", function () {
    create_samity_management.createApproveButtonCheck();
  });

  it("19.45. Verify that clicking the Go Back button on the Samity Management creation page redirects the user to the Samity Management list page.", function () {
    create_samity_management.createGoBackButtonCheck();
  });

  it("19.46. Verify that clicking the Draft button on the Samity Management creation page saves the record as a draft successfully.", function () {
    create_samity_management.createDraftButtonCheck();
  });

  it("19.47. Verify that the Samity Management list is displayed correctly after switching the language from English to Bangla.", function () {
    create_samity_management.gridLanguageSwitchCheck();
  });
});
