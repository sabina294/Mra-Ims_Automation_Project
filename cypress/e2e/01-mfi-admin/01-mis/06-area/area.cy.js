// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/06-area/area.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_area } from "./area.po";

describe("06. Area Module Test Cases", function () {
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

  it("06.01. Verify that the area list page loads successfully without any errors.", function () {
    create_area.gridAreaListPage();
  });

  it("06.02. Verify that a new area is created successfully when all required fields are filled with valid data.", function () {
    create_area.createArea();
  });

  it("06.03. Verify that an area cannot be created without entering the area name in English, even when all other fields contain valid data.", function () {
    create_area.createWithoutNameEn();
  });

  it("06.04. Verify that an area cannot be created without entering the area name in Bangla, even when all other fields contain valid data.", function () {
    create_area.createWithoutNameBn();
  });

  it("06.05. Verify that an area cannot be created without selecting a zone, even when all other fields contain valid data.", function () {
    create_area.createWithoutZone();
  });

  it("06.06. Verify that an area cannot be created without entering an area code, even when all other fields contain valid data.", function () {
    create_area.createWithoutAreaCode();
  });

  it("06.07. Verify that an area cannot be created without selecting a status, even when all other fields contain valid data.", function () {
    create_area.createWithoutStatus();
  });

  it("06.08. Verify that the action button performs the expected action successfully when clicked.", function () {
    create_area.actionButtonCheck();
  });

  it("06.09. Verify that the user can view all relevant details of an area, including its associated information.", function () {
    create_area.viewArea();
  });

  it("06.10. Verify that clicking the Go Back button on the area view page redirects the user to the area list page.", function () {
    create_area.viewGoBackButton();
  });

  it("06.11. Verify that edit mode on the area form can be toggled on and off, and all fields return to view-only mode when disabled.", function () {
    create_area.turnOffEditMode();
  });

  it("06.12. Verify that the area name and description can be edited successfully.", function () {
    create_area.editArea();
  });

  it("06.13. Verify that the Reset button on the area edit page clears all modified values correctly.", function () {
    create_area.editResetButton();
  });

  it("06.14. Verify that the Submit button on the area edit page updates the data successfully.", function () {
    create_area.editSubmitButton();
  });

  it("06.15. Verify that clicking the Go Back button on the area edit page redirects the user to the area list page.", function () {
    create_area.editGoBackButton();
  });

  it("06.16. Verify that inactive areas can be filtered correctly using the status dropdown on the area list page.", function () {
    create_area.statusInactiveDropdownCheck();
  });

  it("06.17. Verify that active areas are filtered correctly using the status dropdown on the area list page.", function () {
    create_area.statusActiveDropdownCheck();
  });

  it("06.18. Verify that the search functionality returns correct results when searching by area name.", function () {
    create_area.searchInAreaName();
  });

  it("06.19. Verify that the grid list is reset successfully when the Reset button is clicked on the area page.", function () {
    create_area.gridResetButtonCheck();
  });

  it("06.20. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the area page.", function () {
    create_area.gridRefreshButtonCheck();
  });

  it("06.21. Verify that the Reset button on the area creation page clears all entered input values.", function () {
    create_area.createResetButtonCheck();
  });

  it("06.22. Verify that validation messages are displayed for all required fields when the Submit button is clicked with empty inputs.", function () {
    create_area.createValidationMessageCheck();
  });

  it("06.23. Verify that clicking the Go Back button on the area creation page redirects the user to the area list page.", function () {
    create_area.createGoBackButtonCheck();
  });

  it("06.24. Verify that clicking the Search button on the area grid page displays the correct filtered results.", function () {
    create_area.gridSearchButtonCheck();
  });

  it("06.25. Verify that the Area List page displays all required table columns correctly.", function () {
    create_area.gridColumnsCheck();
  });

  it("06.26. Verify that the Area Name column can be sorted in ascending order.", function () {
    create_area.areaNameAscendingSort();
  });

  it("06.27. Verify that the Area Name column can be sorted in descending order.", function () {
    create_area.areaNameDescendingSort();
  });

  it("06.28. Verify that searching with a non-existing area name displays no matching records.", function () {
    create_area.searchNoResult();
  });

  it("06.29. Verify that partial area name search returns matching records.", function () {
    create_area.partialSearch();
  });

  it("06.30. Verify that clearing the search text restores the complete area list.", function () {
    create_area.clearSearch();
  });

  it("06.31. Verify that the pagination control works correctly for the Area grid.", function () {
    create_area.paginationCheck();
  });

  it("06.32. Verify that the selected page size is applied correctly to the Area grid.", function () {
    create_area.pageSizeCheck();
  });

  it("06.33. Verify that the Add Area button redirects the user to the Area Creation page.", function () {
    create_area.addAreaNavigation();
  });

  it("06.34. Verify that the Area Creation page displays all required fields correctly.", function () {
    create_area.createPageFieldCheck();
  });

  it("06.35. Verify that the Area Name field handles whitespace-only input correctly.", function () {
    create_area.areaNameSpaceValidation();
  });

  it("06.36. Verify that the Area Name (Bangla) field handles whitespace-only input correctly.", function () {
    create_area.areaNameBnSpaceValidation();
  });

  it("06.37. Verify that the default status is displayed correctly on the Area Creation page.", function () {
    create_area.defaultStatusCheck();
  });

  it("06.38. Verify that all available status options are displayed in the status dropdown.", function () {
    create_area.statusOptionsCheck();
  });

  it("06.39. Verify that duplicate area names cannot be created.", function () {
    create_area.duplicateAreaCheck();
  });

  it("06.40. Verify that the Area Code field accepts valid alphanumeric values.", function () {
    create_area.areaCodeValidInputCheck();
  });

  it("06.41. Verify that the Area Code field does not accept duplicate area codes.", function () {
    create_area.duplicateAreaCodeCheck();
  });

  it("06.42. Verify that the Area Code field handles whitespace-only input correctly.", function () {
    create_area.areaCodeSpaceValidation();
  });

  it("06.43. Verify that the Area Code field rejects invalid special character input.", function () {
    create_area.areaCodeSpecialCharacterValidation();
  });

  it("06.44. Verify that the Area Name (English) field rejects input exceeding the maximum allowed character length.", function () {
    create_area.areaNameEnMaxLengthCheck();
  });

  it("06.45. Verify that the Area Name (Bangla) field rejects input exceeding the maximum allowed character length.", function () {
    create_area.areaNameBnMaxLengthCheck();
  });

  it("06.46. Verify that the Area Code field rejects input exceeding the maximum allowed character length.", function () {
    create_area.areaCodeMaxLengthCheck();
  });

  it("06.47. Verify that leading and trailing spaces are handled correctly in Area Name fields.", function () {
    create_area.areaNameTrimValidation();
  });

  it("06.48. Verify that the Area Creation form prevents submission when invalid data is entered in multiple required fields.", function () {
    create_area.multipleInvalidFieldValidation();
  });

  it("06.49. Verify that changing the selected status on the Area Creation page updates the status value correctly.", function () {
    create_area.changeStatusCheck();
  });

  it("06.50. Verify that selecting a zone on the Area Creation page updates the Zone field correctly.", function () {
    create_area.zoneSelectionCheck();
  });

  it("06.51. Verify that the grid list content updates correctly when switching the language from English to Bangla.", function () {
    create_area.gridLanguageSwitchCheck();
  });
});
