// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/03-designation/designation.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_designation } from "./designation.po";

describe("03. Designation Module Test Cases", function () {
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

  it("03.01. Verify that the Designation List page loads successfully without any errors.", function () {
    create_designation.gridDesignationListPage();
  });

  it("03.02. Verify that a new designation is created successfully when all required fields are filled with valid data.", function () {
    create_designation.createDesignation();
  });

  it("03.03. Verify that a designation cannot be created without entering the Designation Name (English), even if all other fields contain valid data.", function () {
    create_designation.createWithoutNameEn();
  });

  it("03.04. Verify that a designation cannot be created without entering the Designation Name (Bangla), even if all other fields contain valid data.", function () {
    create_designation.createWithoutNameBn();
  });

  it("03.05. Verify that a designation cannot be created without entering the Designation Short Name, even if all other fields contain valid data.", function () {
    create_designation.createWithoutShortName();
  });

  it("03.06. Verify that a designation cannot be created without selecting a status, even if all other fields contain valid data.", function () {
    create_designation.createWithoutStatus();
  });

  it("03.07. Verify that each action button (view, edit) performs its intended function correctly when clicked.", function () {
    create_designation.actionButtonCheck();
  });

  it("03.08. Verify that the user can view all relevant designation details along with associated information.", function () {
    create_designation.viewDesignation();
  });

  it("03.09. Verify that clicking the Go Back button on the designation view page redirects the user to the Designation List page.", function () {
    create_designation.viewGoBackButton();
  });

  it("03.10. Verify that the designation form edit mode can be toggled on and off successfully, and that all fields revert to view-only mode when edit mode is disabled.", function () {
    create_designation.turnOffEditMode();
  });

  it("03.11. Verify that the designation name and description can be edited successfully.", function () {
    create_designation.editDesignation();
  });

  it("03.12. Verify that the Reset button on the designation edit form functions correctly.", function () {
    create_designation.editResetButton();
  });

  it("03.13. Verify that the Submit button on the designation edit form functions correctly.", function () {
    create_designation.editSubmitButton();
  });

  it("03.14. Verify that clicking the Go Back button on the designation edit page redirects the user to the Designation List page.", function () {
    create_designation.editGoBackButton();
  });

  it("03.15. Verify that inactive designations are filtered correctly using the Status dropdown on the Designation List page.", function () {
    create_designation.statusInactiveDropdownCheck();
  });

  it("03.16. Verify that active designations are filtered correctly using the Status dropdown.", function () {
    create_designation.statusActiveDropdownCheck();
  });

  it("03.17. Verify that the search functionality returns the correct results when searching by designation name.", function () {
    create_designation.searchInDesignationName();
  });

  it("03.18. Verify that the designation list resets successfully when the Reset button is clicked on the Designation List page.", function () {
    create_designation.gridResetButtonCheck();
  });

  it("03.19. Verify that the designation list refreshes successfully when the Refresh button is clicked on the Designation List page.", function () {
    create_designation.gridRefreshButtonCheck();
  });

  it("03.20. Verify that the designation creation Reset button clears all entered input values successfully.", function () {
    create_designation.createResetButtonCheck();
  });

  it("03.21. Verify that validation messages are displayed for all required fields when the Submit button is clicked with empty inputs.", function () {
    create_designation.createValidationMessageCheck();
  });

  it("03.22. Verify that clicking the Go Back button on the designation creation page redirects the user to the Designation List page.", function () {
    create_designation.createGoBackButtonCheck();
  });

  it("03.23. Verify that clicking the Search button on the Designation List page returns the filtered results correctly.", function () {
    create_designation.gridSearchButtonCheck();
  });

  it("03.24. Verify that the Designation List page displays all required table columns correctly.", function () {
    create_designation.gridColumnsCheck();
  });

  it("03.25. Verify that the Designation Name column can be sorted in ascending order.", function () {
    create_designation.designationNameAscendingSort();
  });

  it("03.26. Verify that the Designation Name column can be sorted in descending order.", function () {
    create_designation.designationNameDescendingSort();
  });

  it("03.27. Verify that searching with a non-existing designation name displays no matching records.", function () {
    create_designation.searchNoResult();
  });

  it("03.28. Verify that partial designation name search returns matching records.", function () {
    create_designation.partialSearch();
  });

  it("03.29. Verify that clearing the search text restores the complete designation list.", function () {
    create_designation.clearSearch();
  });

  it("03.30. Verify that the pagination control works correctly for the Designation grid.", function () {
    create_designation.paginationCheck();
  });

  it("03.31. Verify that the selected page size is applied correctly to the Designation grid.", function () {
    create_designation.pageSizeCheck();
  });

  it("03.32. Verify that the Add Designation button redirects the user to the Designation Creation page.", function () {
    create_designation.addDesignationNavigation();
  });

  it("03.33. Verify that the Designation Creation page displays all required fields correctly.", function () {
    create_designation.createPageFieldCheck();
  });

  it("03.34. Verify that the Designation Name field handles whitespace-only input correctly.", function () {
    create_designation.designationNameSpaceValidation();
  });

  it("03.35. Verify that the Designation Name (Bangla) field handles whitespace-only input correctly.", function () {
    create_designation.designationNameBnSpaceValidation();
  });

  it("03.36. Verify that the default status is displayed correctly on the Designation Creation page.", function () {
    create_designation.defaultStatusCheck();
  });

  it("03.37. Verify that all available status options are displayed in the status dropdown.", function () {
    create_designation.statusOptionsCheck();
  });

  it("03.38. Verify that duplicate designation names cannot be created.", function () {
    create_designation.duplicateDesignationCheck();
  });

  it("03.39. Verify that the Designation ID column can be sorted in ascending order.", function () {
    create_designation.designationIdAscendingSort();
  });

  it("03.40. Verify that the Designation ID column can be sorted in descending order.", function () {
    create_designation.designationIdDescendingSort();
  });

  it("03.41. Verify that the Designation Name (Bangla) column can be sorted in ascending order.", function () {
    create_designation.designationNameBnAscendingSort();
  });

  it("03.42. Verify that the Designation Name (Bangla) column can be sorted in descending order.", function () {
    create_designation.designationNameBnDescendingSort();
  });

  it("03.43. Verify that the Designation Short Name column can be sorted in ascending order.", function () {
    create_designation.designationShortNameAscendingSort();
  });

  it("03.44. Verify that the Designation Short Name column can be sorted in descending order.", function () {
    create_designation.designationShortNameDescendingSort();
  });

  it("03.45. Verify that the Status column can be sorted in ascending order.", function () {
    create_designation.statusAscendingSort();
  });

  it("03.46. Verify that the Status column can be sorted in descending order.", function () {
    create_designation.statusDescendingSort();
  });

  it("03.47. Verify that the Designation Name (English) field is displayed as a required field on the creation page.", function () {
    create_designation.designationNameRequiredCheck();
  });

  it("03.48. Verify that the Status field is displayed as a required field on the creation page.", function () {
    create_designation.statusRequiredCheck();
  });

  it("03.49. Verify that the Designation Name (Bangla) field is displayed correctly as an optional field.", function () {
    create_designation.designationNameBnOptionalCheck();
  });

  it("03.50. Verify that the Designation Short Name field is displayed correctly as an optional field.", function () {
    create_designation.designationShortNameOptionalCheck();
  });

  it("03.51. Verify that the Designation List displays the correct total number of records.", function () {
    create_designation.totalRecordCountCheck();
  });

  it("03.52. Verify that the Previous page button is disabled on the first page of the Designation List.", function () {
    create_designation.previousButtonCheck();
  });

  it("03.53. Verify that the Next page button navigates to the next page of the Designation List successfully.", function () {
    create_designation.nextButtonCheck();
  });

  it("03.54. Verify that the selected page number is highlighted correctly in the Designation List pagination.", function () {
    create_designation.selectedPageCheck();
  });

  it("03.55. Verify that the Designation List page displays the correct title and breadcrumb navigation.", function () {
    create_designation.listPageTitleAndBreadcrumbCheck();
  });

  it("03.56. Verify that the Designation List grid displays the # column correctly.", function () {
    create_designation.gridNumberColumnCheck();
  });

  it("03.57. Verify that the Designation List grid displays the Designation Name column correctly.", function () {
    create_designation.gridDesignationNameColumnCheck();
  });

  it("03.58. Verify that the Designation List grid displays the Designation Name (Bangla) column correctly.", function () {
    create_designation.gridDesignationNameBnColumnCheck();
  });

  it("03.59. Verify that the Designation List grid displays the Designation Short Name column correctly.", function () {
    create_designation.gridShortNameColumnCheck();
  });

  it("03.60. Verify that the Designation List grid displays the Designation Id column correctly.", function () {
    create_designation.gridDesignationIdColumnCheck();
  });

  it("03.61. Verify that the Designation List grid displays the Status column correctly.", function () {
    create_designation.gridStatusColumnCheck();
  });

  it("03.62. Verify that the Designation List grid displays the Actions column correctly.", function () {
    create_designation.gridActionsColumnCheck();
  });

  it("03.63. Verify that each designation record displays a valid designation ID.", function () {
    create_designation.designationIdDataCheck();
  });

  it("03.64. Verify that each designation record displays a valid status.", function () {
    create_designation.designationStatusDataCheck();
  });

  it("03.65. Verify that the designation action menu opens successfully.", function () {
    create_designation.actionMenuOpenCheck();
  });

  it("03.66. Verify that the designation action menu closes when dismissed.", function () {
    create_designation.actionMenuCloseCheck();
  });

  it("03.67. Verify that an exact existing Designation Name search returns the matching record.", function () {
    create_designation.exactDesignationNameSearch();
  });

  it("03.68. Verify searching with leading and trailing spaces does not return an incorrect result.", function () {
    create_designation.searchWithLeadingTrailingSpaces();
  });

  it("03.69. Verify clearing the status filter restores the designation list.", function () {
    create_designation.clearStatusFilter();
  });

  it("03.70. Verify applying status and name filters together returns matching records.", function () {
    create_designation.statusAndNameCombinedSearch();
  });

  it("03.71. Verify changing the status after a search updates the designation grid.", function () {
    create_designation.changeStatusAfterSearch();
  });

  it("03.72. Verify changing search text after applying status updates the result.", function () {
    create_designation.changeSearchAfterStatusFilter();
  });

  it("03.73. Verify sorting does not remove designation records.", function () {
    create_designation.sortingDataIntegrityCheck();
  });

  it("03.74. Verify Previous returns the designation grid to the previous page.", function () {
    create_designation.previousPageNavigationCheck();
  });

  it("03.75. Verify Next is disabled on the last designation page.", function () {
    create_designation.nextPageDisabledCheck();
  });

  it("03.76. Verify changing page size updates the displayed designation record count.", function () {
    create_designation.pageSizeRecordCountCheck();
  });

  it("03.77. Verify changing page size preserves designation grid data.", function () {
    create_designation.pageSizeDataIntegrityCheck();
  });

  it("03.78. Verify the Designation Creation page title and breadcrumb navigation.", function () {
    create_designation.createPageTitleAndBreadcrumbCheck();
  });

  it("03.79. Verify the English designation-name field accepts valid input.", function () {
    create_designation.validEnglishNameCheck();
  });

  it("03.80. Verify the Bangla designation-name field accepts valid input.", function () {
    create_designation.validBanglaNameCheck();
  });

  it("03.81. Verify clearing the required English name triggers validation.", function () {
    create_designation.clearEnglishNameValidation();
  });

  it("03.82. Verify the optional Bangla name can be cleared before submission.", function () {
    create_designation.clearOptionalBanglaNameCheck();
  });

  it("03.83. Verify status can be changed before designation submission.", function () {
    create_designation.changeStatusBeforeSubmit();
  });

  it("03.84. Verify the selected status is submitted correctly.", function () {
    create_designation.selectedStatusSubmissionCheck();
  });

  it("03.85. Verify valid designation submission opens a confirmation dialog.", function () {
    create_designation.submitConfirmationDialogCheck();
  });

  it("03.86. Verify cancelling confirmation does not create a designation.", function () {
    create_designation.cancelSubmissionCheck();
  });

  it("03.87. Verify confirming creation successfully creates a designation.", function () {
    create_designation.confirmSuccessfulCreationCheck();
  });

  it("03.88. Verify English designation names handle leading and trailing spaces.", function () {
    create_designation.englishNameLeadingTrailingSpacesCheck();
  });

  it("03.89. Verify Bangla designation names handle leading and trailing spaces.", function () {
    create_designation.banglaNameLeadingTrailingSpacesCheck();
  });

  it("03.90. Verify special characters in the English designation name follow validation rules.", function () {
    create_designation.englishNameSpecialCharacterValidation();
  });

  it("03.91. Verify special characters in the Bangla designation name follow validation rules.", function () {
    create_designation.banglaNameSpecialCharacterValidation();
  });

  it("03.92. Verify a very long English designation name follows maximum-length rules.", function () {
    create_designation.englishNameMaximumLengthCheck();
  });

  it("03.93. Verify a very long Bangla designation name follows maximum-length rules.", function () {
    create_designation.banglaNameMaximumLengthCheck();
  });

  it("03.94. Verify the View page displays the saved English designation name.", function () {
    create_designation.viewEnglishNameDataCheck();
  });

  it("03.95. Verify the View page displays the saved Bangla designation name.", function () {
    create_designation.viewBanglaNameDataCheck();
  });

  it("03.96. Verify the View page displays the correct designation ID.", function () {
    create_designation.viewDesignationIdCheck();
  });

  it("03.97. Verify the View page displays the current designation status.", function () {
    create_designation.viewDesignationStatusCheck();
  });

  it("03.98. Verify cancelling edit does not modify designation data.", function () {
    create_designation.editWithoutSubmitDataIntegrityCheck();
  });

  it("03.99. Verify updated designation information appears in the list.", function () {
    create_designation.updatedDesignationListDataCheck();
  });

  it("03.100. Verify Active and Inactive status changes are displayed correctly after creation and edit.", function () {
    create_designation.designationStatusLifecycleCheck();
  });

  it("03.101. Verify that the grid content updates correctly when the language is switched from English to Bangla.", function () {
    create_designation.gridLanguageSwitchCheck();
  });

});
