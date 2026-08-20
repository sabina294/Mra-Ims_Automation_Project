// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/02-department/department.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_department } from "./department.po";

describe("02. Department Module Test Cases", function () {
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

  it("02.01. Verify that the Department List page loads successfully without any errors.", function () {
    create_department.gridDepartmentListPage();
  });

  it("02.02. Verify that a new department is created successfully when all required fields are provided with valid data.", function () {
    create_department.createDepartment();
  });

  it("02.03. Verify that a department cannot be created without entering the department name in English, even when all other fields are valid.", function () {
    create_department.createWithoutNameEn();
  });

  it("02.04. Verify that a department cannot be created without entering the department name in Bangla, even when all other fields are valid.", function () {
    create_department.createWithoutNameBn();
  });

  it("02.05. Verify that a department cannot be created without selecting a status, even when all other fields are valid.", function () {
    create_department.createWithoutStatus();
  });

  it("02.06. Verify that the action button functions correctly when clicked.", function () {
    create_department.actionButtonCheck();
  });

  it("02.07. Verify that the user can view all relevant department details, including all associated fields.", function () {
    create_department.viewDepartment();
  });

  it("02.08. Verify that clicking the Go Back button on the Department View page redirects the user to the Department List page.", function () {
    create_department.viewGoBackButton();
  });

  it("02.09. Verify that edit mode can be toggled on and off, and that all fields return to view-only mode when edit mode is disabled.", function () {
    create_department.turnOffEditMode();
  });

  it("02.10. Verify that the department name and description can be updated successfully.", function () {
    create_department.editDepartment();
  });

  it("02.11. Verify that the Reset button on the Department Edit page functions correctly.", function () {
    create_department.editResetButton();
  });

  it("02.12. Verify that the Submit button on the Department Edit page functions correctly.", function () {
    create_department.editSubmitButton();
  });

  it("02.13. Verify that clicking the Go Back button on the Department Edit page redirects the user to the Department List page.", function () {
    create_department.editGoBackButton();
  });

  it("02.14. Verify that inactive departments can be filtered using the status dropdown on the Department List page.", function () {
    create_department.statusInactiveDropdownCheck();
  });

  it("02.15. Verify that active departments can be filtered using the status dropdown on the Department List page.", function () {
    create_department.statusActiveDropdownCheck();
  });

  it("02.16. Verify that the search functionality returns correct results when searching by department name.", function () {
    create_department.searchInDepartmentName();
  });

  it("02.17. Verify that the grid list resets successfully when the Reset button is clicked.", function () {
    create_department.gridResetButtonCheck();
  });

  it("02.18. Verify that the grid list refreshes successfully when the Refresh button is clicked.", function () {
    create_department.gridRefreshButtonCheck();
  });

  it("02.19. Verify that the Reset button on the Department Creation page clears all entered input fields.", function () {
    create_department.createResetButtonCheck();
  });

  it("02.20. Verify that validation messages are displayed when required fields are submitted empty.", function () {
    create_department.createValidationMessageCheck();
  });

  it("02.21. Verify that clicking the Go Back button on the Department Creation page redirects the user to the Department List page.", function () {
    create_department.createGoBackButtonCheck();
  });

  it("02.22. Verify that clicking the Search button on the Department List page correctly filters the results.", function () {
    create_department.gridSearchButtonCheck();
  });

  it("02.23. Verify that the Department List page displays all required table columns correctly.", function () {
    create_department.gridColumnsCheck();
  });

  it("02.24. Verify that the Department Name column can be sorted in ascending order.", function () {
    create_department.departmentNameAscendingSort();
  });

  it("02.25. Verify that the Department Name column can be sorted in descending order.", function () {
    create_department.departmentNameDescendingSort();
  });

  it("02.26. Verify that searching with a non-existing department name displays no matching records.", function () {
    create_department.searchNoResult();
  });

  it("02.27. Verify that partial department name search returns matching records.", function () {
    create_department.partialSearch();
  });

  it("02.28. Verify that clearing the search text restores the complete department list.", function () {
    create_department.clearSearch();
  });

  it("02.29. Verify that the pagination control works correctly for the Department grid.", function () {
    create_department.paginationCheck();
  });

  it("02.30. Verify that the selected page size is applied correctly to the Department grid.", function () {
    create_department.pageSizeCheck();
  });

  it("02.31. Verify that the Add Department button redirects the user to the Department Creation page.", function () {
    create_department.addDepartmentNavigation();
  });

  it("02.32. Verify that the Department Creation page displays all required fields correctly.", function () {
    create_department.createPageFieldCheck();
  });

  it("02.33. Verify that the Department Name field handles whitespace-only input correctly.", function () {
    create_department.departmentNameSpaceValidation();
  });

  it("02.34. Verify that the Department Name (Bangla) field handles whitespace-only input correctly.", function () {
    create_department.departmentNameBnSpaceValidation();
  });

  it("02.35. Verify that the default status is displayed correctly on the Department Creation page.", function () {
    create_department.defaultStatusCheck();
  });

  it("02.36. Verify that all available status options are displayed in the status dropdown.", function () {
    create_department.statusOptionsCheck();
  });

  it("02.37. Verify that the Department List page displays the correct page title and breadcrumb navigation.", function () {
    create_department.listPageTitleAndBreadcrumbCheck();
  });

  it("02.38. Verify that the Department List grid displays the # column correctly.", function () {
    create_department.gridNumberColumnCheck();
  });

  it("02.39. Verify that the Department List grid displays the Department Name column correctly.", function () {
    create_department.gridDepartmentNameColumnCheck();
  });

  it("02.40. Verify that the Department List grid displays the Department Name (Bangla) column correctly.", function () {
    create_department.gridDepartmentNameBnColumnCheck();
  });

  it("02.41. Verify that the Department List grid displays the Department Id column correctly.", function () {
    create_department.gridDepartmentIdColumnCheck();
  });

  it("02.42. Verify that the Department List grid displays the Status column correctly.", function () {
    create_department.gridStatusColumnCheck();
  });

  it("02.43. Verify that the Department List grid displays the Actions column correctly.", function () {
    create_department.gridActionsColumnCheck();
  });

  it("02.44. Verify that each department record displays a valid department ID.", function () {
    create_department.departmentIdDataCheck();
  });

  it("02.45. Verify that each department record displays its corresponding status correctly.", function () {
    create_department.departmentStatusDataCheck();
  });

  it("02.46. Verify that the department action menu opens successfully for a selected department record.", function () {
    create_department.actionMenuOpenCheck();
  });

  it("02.47. Verify that the department action menu closes successfully when dismissed without selecting an action.", function () {
    create_department.actionMenuCloseCheck();
  });

  it("02.48. Verify that searching for an exact existing Department Name returns the corresponding department record only.", function () {
    create_department.exactDepartmentNameSearch();
  });

  it("02.49. Verify that searching with leading and trailing spaces does not produce an incorrect department result.", function () {
    create_department.searchWithLeadingTrailingSpaces();
  });

  it("02.50. Verify that the status filter can be cleared and the complete department list is displayed again.", function () {
    create_department.clearStatusFilter();
  });

  it("02.51. Verify that applying the status filter and department-name search together returns only records matching both criteria.", function () {
    create_department.statusAndNameCombinedSearch();
  });

  it("02.52. Verify that changing the status filter after performing a search updates the grid according to the newly selected filter.", function () {
    create_department.changeStatusAfterSearch();
  });

  it("02.53. Verify that changing the search text after applying a status filter updates the result correctly.", function () {
    create_department.changeSearchAfterStatusFilter();
  });

  it("02.54. Verify that the Department Name (Bangla) column can be sorted in ascending order.", function () {
    create_department.departmentNameBnAscendingSort();
  });

  it("02.55. Verify that the Department Name (Bangla) column can be sorted in descending order.", function () {
    create_department.departmentNameBnDescendingSort();
  });

  it("02.56. Verify that the Department Id column can be sorted in ascending order.", function () {
    create_department.departmentIdAscendingSort();
  });

  it("02.57. Verify that the Department Id column can be sorted in descending order.", function () {
    create_department.departmentIdDescendingSort();
  });

  it("02.58. Verify that sorting a column does not remove or modify the existing department records.", function () {
    create_department.sortingDataIntegrityCheck();
  });

  it("02.59. Verify that the Previous page button is disabled on the first page.", function () {
    create_department.previousPageDisabledCheck();
  });

  it("02.60. Verify that the Next page button is disabled on the last page.", function () {
    create_department.nextPageDisabledCheck();
  });

  it("02.61. Verify that changing the page size updates the number of displayed department records accordingly.", function () {
    create_department.pageSizeRecordCountCheck();
  });

  it("02.62. Verify that changing the page size keeps the department grid data consistent without losing records.", function () {
    create_department.pageSizeDataIntegrityCheck();
  });

  it("02.63. Verify that the Department Creation page displays the correct page title and breadcrumb navigation.", function () {
    create_department.createPageTitleAndBreadcrumbCheck();
  });

  it("02.64. Verify that the Department Name (English) field accepts valid English department names.", function () {
    create_department.validEnglishNameCheck();
  });

  it("02.65. Verify that the Department Name (Bangla) field accepts valid Bangla department names.", function () {
    create_department.validBanglaNameCheck();
  });

  it("02.66. Verify that the Department Name (English) field does not accept an empty value after entering and clearing a valid value.", function () {
    create_department.clearEnglishNameValidation();
  });

  it("02.67. Verify that the optional Department Name (Bangla) field can be cleared before submission.", function () {
    create_department.clearOptionalBanglaNameCheck();
  });

  it("02.68. Verify that the Department Status field allows the user to change the selected status before submission.", function () {
    create_department.changeStatusBeforeSubmit();
  });

  it("02.69. Verify that the selected status is submitted correctly when creating a department.", function () {
    create_department.selectedStatusSubmissionCheck();
  });

  it("02.70. Verify that clicking Submit with valid data opens the confirmation dialog before final submission.", function () {
    create_department.submitConfirmationDialogCheck();
  });

  it("02.71. Verify that cancelling the submission from the confirmation dialog does not create a new department.", function () {
    create_department.cancelSubmissionCheck();
  });

  it("02.72. Verify that clicking OK in the successful creation confirmation completes department creation successfully.", function () {
    create_department.confirmSuccessfulCreationCheck();
  });

  it("02.73. Verify that the Department Name (English) field handles leading and trailing spaces correctly when valid department data is entered.", function () {
    create_department.englishNameLeadingTrailingSpacesCheck();
  });

  it("02.74. Verify that the Department Name (Bangla) field handles leading and trailing spaces correctly when valid department data is entered.", function () {
    create_department.banglaNameLeadingTrailingSpacesCheck();
  });

  it("02.75. Verify that entering special characters in the Department Name (English) field follows the application's validation rules.", function () {
    create_department.englishNameSpecialCharacterValidation();
  });

  it("02.76. Verify that entering special characters in the Department Name (Bangla) field follows the application's validation rules.", function () {
    create_department.banglaNameSpecialCharacterValidation();
  });

  it("02.77. Verify that entering a very long Department Name (English) follows the field's maximum-length validation rule.", function () {
    create_department.englishNameMaximumLengthCheck();
  });

  it("02.78. Verify that entering a very long Department Name (Bangla) follows the field's maximum-length validation rule.", function () {
    create_department.banglaNameMaximumLengthCheck();
  });

  it("02.79. Verify that the View page displays the saved Department Name (English) exactly as stored.", function () {
    create_department.viewEnglishNameDataCheck();
  });

  it("02.80. Verify that the View page displays the saved Department Name (Bangla) exactly as stored.", function () {
    create_department.viewBanglaNameDataCheck();
  });

  it("02.81. Verify that the View page displays the correct Department ID for the selected department.", function () {
    create_department.viewDepartmentIdCheck();
  });

  it("02.82. Verify that the View page displays the current department status correctly.", function () {
    create_department.viewDepartmentStatusCheck();
  });

  it("02.83. Verify that cancelling or backing out from edit mode without submitting changes does not modify the department data.", function () {
    create_department.editWithoutSubmitDataIntegrityCheck();
  });

  it("02.84. Verify that updated department information is displayed correctly in the Department List after a successful edit.", function () {
    create_department.updatedDepartmentListDataCheck();
  });

  it("02.85. Verify that a department created with Active status appears with Active status in the Department List.", function () {
    create_department.createdActiveStatusCheck();
  });

  it("02.86. Verify that a department created with Inactive status appears with Inactive status in the Department List.", function () {
    create_department.createdInactiveStatusCheck();
  });

  it("02.87. Verify that the grid content updates correctly when the language is switched from English to Bangla.", function () {
    create_department.gridLanguageSwitchCheck();
  });

});
