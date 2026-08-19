// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/05-zone/zone.cy.js --browser chrome --headed
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/05-zone/zone.cy.js --browser chrome --headless

import "cypress-file-upload";
import { create_zone } from "./zone.po";

describe("05. Zone Module Test Cases", function () {
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

  it("05.01. Verify that the zone list page loads successfully without any errors.", function () {
    create_zone.gridZoneListPage();
  });

  it("05.02. Verify that a new zone is created successfully when all required fields are filled with valid data.", function () {
    create_zone.createZone();
  });

  it("05.03. Verify that a zone cannot be created without entering the zone name in English, even when all other fields contain valid data.", function () {
    create_zone.createWithoutNameEn();
  });

  it("05.04. Verify that a zone cannot be created without entering the zone name in Bangla, even when all other fields contain valid data.", function () {
    create_zone.createWithoutNameBn();
  });

  it("05.05. Verify that a zone cannot be created without selecting a region, even when all other fields contain valid data.", function () {
    create_zone.createWithoutRegion();
  });

  it("05.06. Verify that a zone cannot be created without entering a zone code, even when all other fields contain valid data.", function () {
    create_zone.createWithoutZoneCode();
  });

  it("05.07. Verify that a zone cannot be created without selecting a status, even when all other fields contain valid data.", function () {
    create_zone.createWithoutStatus();
  });

  it("05.08. Verify that the action button performs the expected action successfully when clicked.", function () {
    create_zone.actionButtonCheck();
  });

  it("05.09. Verify that the user can view all relevant details of a zone, including its associated information.", function () {
    create_zone.viewZone();
  });

  it("05.10. Verify that clicking the Go Back button on the zone view page redirects the user to the zone list page.", function () {
    create_zone.viewGoBackButton();
  });

  it("05.11. Verify that edit mode on the zone form can be toggled on and off, and all fields return to view-only mode when disabled.", function () {
    create_zone.turnOffEditMode();
  });

  it("05.12. Verify that the zone name and description can be edited successfully.", function () {
    create_zone.editZone();
  });

  it("05.13. Verify that the Reset button on the zone edit page clears all modified values correctly.", function () {
    create_zone.editResetButton();
  });

  it("05.14. Verify that the Submit button on the zone edit page updates the data successfully.", function () {
    create_zone.editSubmitButton();
  });

  it("05.15. Verify that clicking the Go Back button on the zone edit page redirects the user to the zone list page.", function () {
    create_zone.editGoBackButton();
  });

  it("05.16. Verify that inactive zones can be filtered correctly using the status dropdown on the zone list page.", function () {
    create_zone.statusInactiveDropdownCheck();
  });

  it("05.17. Verify that active zones are filtered correctly using the status dropdown on the zone list page.", function () {
    create_zone.statusActiveDropdownCheck();
  });

  it("05.18. Verify that the search functionality returns correct results when searching by zone name.", function () {
    create_zone.searchInZoneName();
  });

  it("05.19. Verify that the grid list is reset successfully when the Reset button is clicked on the zone page.", function () {
    create_zone.gridResetButtonCheck();
  });

  it("05.20. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the zone page.", function () {
    create_zone.gridRefreshButtonCheck();
  });

  it("05.21. Verify that the Reset button on the zone creation page clears all entered input values.", function () {
    create_zone.createResetButtonCheck();
  });

  it("05.22. Verify that validation messages are displayed for all required fields when the Submit button is clicked with empty inputs.", function () {
    create_zone.createValidationMessageCheck();
  });

  it("05.23. Verify that clicking the Go Back button on the zone creation page redirects the user to the zone list page.", function () {
    create_zone.createGoBackButtonCheck();
  });

  it("05.24. Verify that clicking the Search button on the zone grid page displays the correct filtered results.", function () {
    create_zone.gridSearchButtonCheck();
  });

  it("05.25. Verify that the Zone List page displays all required table columns correctly.", function () {
    create_zone.gridColumnsCheck();
  });

  it("05.26. Verify that the Zone Name column can be sorted in ascending order.", function () {
    create_zone.zoneNameAscendingSort();
  });

  it("05.27. Verify that the Zone Name column can be sorted in descending order.", function () {
    create_zone.zoneNameDescendingSort();
  });

  it("05.28. Verify that searching with a non-existing zone name displays no matching records.", function () {
    create_zone.searchNoResult();
  });

  it("05.29. Verify that partial zone name search returns matching records.", function () {
    create_zone.partialSearch();
  });

  it("05.30. Verify that clearing the search text restores the complete zone list.", function () {
    create_zone.clearSearch();
  });

  it("05.31. Verify that the pagination control works correctly for the Zone grid.", function () {
    create_zone.paginationCheck();
  });

  it("05.32. Verify that the selected page size is applied correctly to the Zone grid.", function () {
    create_zone.pageSizeCheck();
  });

  it("05.33. Verify that the Add Zone button redirects the user to the Zone Creation page.", function () {
    create_zone.addZoneNavigation();
  });

  it("05.34. Verify that the Zone Creation page displays all required fields correctly.", function () {
    create_zone.createPageFieldCheck();
  });

  it("05.35. Verify that the Zone Name field handles whitespace-only input correctly.", function () {
    create_zone.zoneNameSpaceValidation();
  });

  it("05.36. Verify that the Zone Name (Bangla) field handles whitespace-only input correctly.", function () {
    create_zone.zoneNameBnSpaceValidation();
  });

  it("05.37. Verify that the default status is displayed correctly on the Zone Creation page.", function () {
    create_zone.defaultStatusCheck();
  });

  it("05.38. Verify that all available status options are displayed in the status dropdown.", function () {
    create_zone.statusOptionsCheck();
  });

  it("05.39. Verify that duplicate zone names cannot be created.", function () {
    create_zone.duplicateZoneCheck();
  });

  it("05.40. Verify that the Zone Code field accepts valid alphanumeric values.", function () {
    create_zone.zoneCodeValidInputCheck();
  });

  it("05.41. Verify that the Zone Code field does not accept duplicate zone codes.", function () {
    create_zone.duplicateZoneCodeCheck();
  });

  it("05.42. Verify that the Zone Code field handles whitespace-only input correctly.", function () {
    create_zone.zoneCodeSpaceValidation();
  });

  it("05.43. Verify that the Zone Code field rejects invalid special character input.", function () {
    create_zone.zoneCodeSpecialCharacterValidation();
  });

  it("05.44. Verify that the Zone Name (English) field rejects input exceeding the maximum allowed character length.", function () {
    create_zone.zoneNameEnMaxLengthCheck();
  });

  it("05.45. Verify that the Zone Name (Bangla) field rejects input exceeding the maximum allowed character length.", function () {
    create_zone.zoneNameBnMaxLengthCheck();
  });

  it("05.46. Verify that the Zone Code field rejects input exceeding the maximum allowed character length.", function () {
    create_zone.zoneCodeMaxLengthCheck();
  });

  it("05.47. Verify that leading and trailing spaces are handled correctly in Zone Name fields.", function () {
    create_zone.zoneNameTrimValidation();
  });

  it("05.48. Verify that the Zone Creation form prevents submission when invalid data is entered in multiple required fields.", function () {
    create_zone.multipleInvalidFieldValidation();
  });

  it("05.49. Verify that changing the selected status on the Zone Creation page updates the status value correctly.", function () {
    create_zone.changeStatusCheck();
  });

  it("05.50. Verify that selecting a region on the Zone Creation page updates the Region field correctly.", function () {
    create_zone.regionSelectionCheck();
  });

  it("05.51. Verify that the grid list content updates correctly when switching the language from English to Bangla.", function () {
    create_zone.gridLanguageSwitchCheck();
  });
});
