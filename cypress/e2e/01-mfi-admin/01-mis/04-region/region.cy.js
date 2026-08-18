// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/04-region/region.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_region } from "./region.po";

describe("04. Region Module Test Cases", function () {
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

  it("04.01. Verify that the region list page loads successfully without any errors.", function () {
    create_region.gridRegionListPage();
  });

  it("04.02. Verify that a new region is created successfully when all required fields are filled with valid data.", function () {
    create_region.createRegion();
  });

  it("04.03. Verify that a region cannot be created without entering the region name in English, even when all other fields contain valid data.", function () {
    create_region.createWithoutNameEn();
  });

  it("04.04. Verify that a region cannot be created without entering the region name in Bangla, even when all other fields contain valid data.", function () {
    create_region.createWithoutNameBn();
  });

  it("04.05. Verify that a region cannot be created without entering a region code, even when all other fields contain valid data.", function () {
    create_region.createWithoutCode();
  });

  it("04.06. Verify that a region cannot be created without selecting a status, even when all other fields contain valid data.", function () {
    create_region.createWithoutStatus();
  });

  it("04.07. Verify that the action button performs the expected action successfully when clicked.", function () {
    create_region.actionButtonCheck();
  });

  it("04.08. Verify that the user can view all relevant details of a region, including its associated information.", function () {
    create_region.viewRegion();
  });

  it("04.09. Verify that clicking the Go Back button on the region view page redirects the user to the region list page.", function () {
    create_region.viewGoBackButton();
  });

  it("04.10. Verify that edit mode on the region form can be toggled on and off, and all fields return to view-only mode when disabled.", function () {
    create_region.turnOffEditMode();
  });

  it("04.11. Verify that the Reset button on the region edit page functions correctly.", function () {
    create_region.editResetButton();
  });

  it("04.12. Verify that the Submit button on the region edit page functions correctly.", function () {
    create_region.editSubmitButton();
  });

  it("04.13. Verify that clicking the Go Back button on the region edit page redirects the user to the region list page.", function () {
    create_region.editGoBackButton();
  });

  it("04.14. Verify that the region name and description can be edited successfully.", function () {
    create_region.editRegion();
  });

  it("04.15. Verify that the user can filter inactive regions using the status dropdown on the region list page.", function () {
    create_region.statusInactiveDropdownCheck();
  });

  it("04.16. Verify that active regions are filtered correctly using the status dropdown.", function () {
    create_region.statusActiveDropdownCheck();
  });

  it("04.17. Verify that the search functionality returns correct results when searching by region name.", function () {
    create_region.searchInRegionName();
  });

  it("04.18. Verify that the grid list is reset successfully when the Reset button is clicked on the region page.", function () {
    create_region.gridResetButtonCheck();
  });

  it("04.19. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the region page.", function () {
    create_region.gridRefreshButtonCheck();
  });

  it("04.20. Verify that the Reset button on the region creation page clears all entered input values.", function () {
    create_region.createResetButtonCheck();
  });

  it("04.21. Verify that validation messages are displayed for all required fields when the Submit button is clicked with empty inputs.", function () {
    create_region.createValidationMessageCheck();
  });

  it("04.22. Verify that clicking the Go Back button on the region creation page redirects the user to the region list page.", function () {
    create_region.createGoBackButtonCheck();
  });

  it("04.23. Verify that clicking the Search button on the region grid page displays the correct filtered results.", function () {
    create_region.gridSearchButtonCheck();
  });

  it("04.24. Verify that the Region List page displays all required table columns correctly.", function () {
    create_region.gridColumnsCheck();
  });

  it("04.25. Verify that the Region Name column can be sorted in ascending order.", function () {
    create_region.regionNameAscendingSort();
  });

  it("04.26. Verify that the Region Name column can be sorted in descending order.", function () {
    create_region.regionNameDescendingSort();
  });

  it("04.27. Verify that searching with a non-existing region name displays no matching records.", function () {
    create_region.searchNoResult();
  });

  it("04.28. Verify that partial region name search returns matching records.", function () {
    create_region.partialSearch();
  });

  it("04.29. Verify that clearing the search text restores the complete region list.", function () {
    create_region.clearSearch();
  });

  it("04.30. Verify that the pagination control works correctly for the Region grid.", function () {
    create_region.paginationCheck();
  });

  it("04.31. Verify that the selected page size is applied correctly to the Region grid.", function () {
    create_region.pageSizeCheck();
  });

  it("04.32. Verify that the Add Region button redirects the user to the Region Creation page.", function () {
    create_region.addRegionNavigation();
  });

  it("04.33. Verify that the Region Creation page displays all required fields correctly.", function () {
    create_region.createPageFieldCheck();
  });

  it("04.34. Verify that the Region Name field handles whitespace-only input correctly.", function () {
    create_region.regionNameSpaceValidation();
  });

  it("04.35. Verify that the Region Name (Bangla) field handles whitespace-only input correctly.", function () {
    create_region.regionNameBnSpaceValidation();
  });

  it("04.36. Verify that the default status is displayed correctly on the Region Creation page.", function () {
    create_region.defaultStatusCheck();
  });

  it("04.37. Verify that all available status options are displayed in the status dropdown.", function () {
    create_region.statusOptionsCheck();
  });

  it("04.38. Verify that duplicate region names cannot be created.", function () {
    create_region.duplicateRegionCheck();
  });

  it("04.39. Verify that the Region Code field accepts valid alphanumeric values.", function () {
    create_region.regionCodeValidInputCheck();
  });

  it("04.40. Verify that the Region Code field does not accept duplicate region codes.", function () {
    create_region.duplicateRegionCodeCheck();
  });

  it("04.41. Verify that the Region Code field handles whitespace-only input correctly.", function () {
    create_region.regionCodeSpaceValidation();
  });

  it("04.42. Verify that the Region Code field rejects invalid special character input.", function () {
    create_region.regionCodeSpecialCharacterValidation();
  });

  it("04.43. Verify that the Region Name (English) field rejects input exceeding the maximum allowed character length.", function () {
    create_region.regionNameEnMaxLengthCheck();
  });

  it("04.44. Verify that the Region Name (Bangla) field rejects input exceeding the maximum allowed character length.", function () {
    create_region.regionNameBnMaxLengthCheck();
  });

  it("04.45. Verify that the Region Code field rejects input exceeding the maximum allowed character length.", function () {
    create_region.regionCodeMaxLengthCheck();
  });

  it("04.46. Verify that leading and trailing spaces are handled correctly in Region Name fields.", function () {
    create_region.regionNameTrimValidation();
  });

  it("04.47. Verify that the Region Creation form prevents submission when invalid data is entered in multiple required fields.", function () {
    create_region.multipleInvalidFieldValidation();
  });

  it("04.48. Verify that changing the selected status on the Region Creation page updates the status value correctly.", function () {
    create_region.changeStatusCheck();
  });

  it("04.49. Verify that the grid content updates correctly when the language is switched from English to Bangla.", function () {
    create_region.gridLanguageSwitchCheck();
  });

});
