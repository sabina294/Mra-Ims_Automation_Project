// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/01-mfi/18-occupation/occupation.cy.js --headed

import "cypress-file-upload";
import { create_occupation } from "./occupation.po";

describe("18. Occupation Module Test Cases.", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");

  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.mraAdminUserId,
        d.credential.mraAdminPassword
      );
      cy.changeLanguage("english");
      cy.switchModule("MFI");
    });
  });

  after(() => {
    cy.logout();
  });

  it("18.01. Should load the occupation list page without errors.", function () {
    create_occupation.gridOccupationListPage();
  });

  it("18.02. Should create a new occupation successfully when all required fields are valid.", function () {
    create_occupation.createOccupation();
  });

  it("18.03. Should not allow creation of an occupation without an English name, even if other fields are valid.", function () {
    create_occupation.createWithoutNameEn();
  });

  it("18.04. Should not allow creation of an occupation without a Bangla name, even if other fields are valid.", function () {
    create_occupation.createWithoutNameBn();
  });

  it("18.05. Should not allow creation of an occupation without a status, even if other fields are valid.", function () {
    create_occupation.createWithoutStatus();
  });

  it("18.06. Should prevent creation when any mandatory field is missing.", function () {
    create_occupation.createWithoutOneMandatoryField();
  });

  it("18.07. Should perform the action successfully when the action button is clicked.", function () {
    create_occupation.actionButtonCheck();
  });

  it("18.08. Should display all relevant details of an occupation, including associated fields.", function () {
    create_occupation.viewOccupation();
  });

  it("18.09. Should redirect to the occupation list page when the go back button on the view page is clicked.", function () {
    create_occupation.viewGoBackButton();
  });

  it("18.10. Should toggle the edit mode of the occupation form, enabling and disabling all fields accordingly.", function () {
    create_occupation.turnOffOnEditMode();
  });

  it("18.11. Should allow editing of occupation name and description successfully.", function () {
    create_occupation.editOccupation();
  });

  it("18.12. Should reset the occupation edit form when the reset button is clicked.", function () {
    create_occupation.editResetButton();
  });

  it("18.13. Should submit the occupation edit form successfully when the submit button is clicked.", function () {
    create_occupation.editSubmitButton();
  });

  it("18.14. Should redirect to the occupation list page when the go back button on the edit page is clicked.", function () {
    create_occupation.editGoBackButton();
  });

  it("18.15. Should filter inactive occupations correctly using the status dropdown.", function () {
    create_occupation.statusInactiveDropdownCheck();
  });

  it("18.16. Should filter active occupations correctly using the status dropdown.", function () {
    create_occupation.statusActiveDropdownCheck();
  });

  it("18.17. Should return correct results when searching by occupation name.", function () {
    create_occupation.searchInOccupationName();
  });

  it("18.18. Should reset the grid list successfully when the reset button is clicked.", function () {
    create_occupation.gridResetButtonCheck();
  });

  it("18.19. Should refresh the grid list successfully when the refresh button is clicked.", function () {
    create_occupation.gridRefreshButtonCheck();
  });

  it("18.20. Should clear all input values when the occupation creation reset button is clicked.", function () {
    create_occupation.createResetButtonCheck();
  });

  it("18.21. Should display validation messages for required fields when submitting empty inputs.", function () {
    create_occupation.createValidationMessageCheck();
  });

  it("18.22. Should redirect to the occupation list page when the go back button on the creation page is clicked.", function () {
    create_occupation.createGoBackButtonCheck();
  });

  it("18.23. Verify that when the user clicks the Search button on the occupation grid page, the system redirects to the occupation List page..", function () {
    create_occupation.gridSearchButtonCheck();
  });

  it("18.24. Verify the Occupation list breadcrumb.", function () {
    create_occupation.listBreadcrumbCheck();
  });

  it("18.25. Verify the required Occupation grid columns.", function () {
    create_occupation.requiredGridColumnsCheck();
  });

  it("18.26. Verify valid Occupation grid row data.", function () {
    create_occupation.gridRecordDataCheck();
  });

  it("18.27. Verify Occupation exact name search.", function () {
    create_occupation.exactNameSearchCheck();
  });

  it("18.28. Verify Occupation partial name search.", function () {
    create_occupation.partialNameSearchCheck();
  });

  it("18.29. Verify non-existing Occupation search shows no records.", function () {
    create_occupation.noResultSearchCheck();
  });

  it("18.30. Verify Reset restores the Occupation grid.", function () {
    create_occupation.resetRestoresGridCheck();
  });

  it("18.31. Verify Occupation Active filter results.", function () {
    create_occupation.activeStatusResultCheck();
  });

  it("18.32. Verify Occupation name ascending sorting.", function () {
    create_occupation.nameAscendingSortCheck();
  });

  it("18.33. Verify Occupation name descending sorting.", function () {
    create_occupation.nameDescendingSortCheck();
  });

  it("18.34. Verify Occupation first-page pagination state.", function () {
    create_occupation.firstPagePaginationCheck();
  });

  it("18.35. Verify Occupation View breadcrumb and grid-to-view data.", function () {
    create_occupation.viewPageDataAndBreadcrumbCheck();
  });

  it("18.36. Verify Occupation Edit Mode fields and Reset behavior.", function () {
    create_occupation.editModeFieldsAndResetCheck();
  });

  it("18.37. Verify Occupation Create breadcrumb, empty names, default Active status and form buttons.", function () {
    create_occupation.createPageFieldsAndDefaultsCheck();
  });

  it("18.38. Verify Occupation Edit breadcrumb and prefilled English name, Bangla name and status match the grid.", function () {
    create_occupation.editPrefilledValuesCheck();
  });

  it("18.39. Should switch grid list content correctly between English and Bangla.", function () {
    create_occupation.gridLanguageSwitchCheck();
  });

});
