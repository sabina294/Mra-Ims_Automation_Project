// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/01-mfi/15-education/education.cy.js --headed

import "cypress-file-upload";
import { create_education } from "./education.po";

describe("15. Education Module Test Cases.", function () {
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

  it("15.01. Verify load the education list page without errors.", function () {
    create_education.gridEducationListPage();
  });

  it("15.02. Verify create a new education successfully when all required fields are valid.", function () {
    create_education.createEducation();
  });

  it("15.03. Verify show validation error when creating education without a name in English.", function () {
    create_education.createWithoutNameEn();
  });

  it("15.04. Verify show validation error when creating education without a name in Bangla.", function () {
    create_education.createWithoutNameBn();
  });

  it("15.05. Verify show validation error when creating education without a status.", function () {
    create_education.createWithoutStatus();
  });

  it("15.06. Verify not create education if any mandatory field is missing.", function () {
    create_education.createWithoutOneMandatoryField();
  });

  it("15.07. Verify perform the expected action when the action button is clicked.", function () {
    create_education.actionButtonCheck();
  });

  it("15.08. Verify display all relevant details of an education including associated fields.", function () {
    create_education.viewEducation();
  });

  it("15.09. Verify redirect to the education list page when the go back button is clicked on the view page.", function () {
    create_education.viewGoBackButton();
  });

  it("15.10. Verify toggle the edit mode on the education form, enabling and disabling fields correctly.", function () {
    create_education.turnOffOnEditMode();
  });

  it("15.11. Verify submit the existing education details successfully.", function () {
    create_education.editEducation();
  });

  it("15.12. Verify reset all changes correctly when the edit reset button is clicked.", function () {
    create_education.editResetButton();
  });

  it("15.13. Verify submit edited education data successfully.", function () {
    create_education.editSubmitButton();
  });

  it("15.14. Verify redirect to the education list page when the go back button is clicked on the edit page.", function () {
    create_education.editGoBackButton();
  });

  it("15.15. Verify filter inactive educations correctly using the status dropdown.", function () {
    create_education.statusInactiveDropdownCheck();
  });

  it("15.16. Verify filter active educations correctly using the status dropdown.", function () {
    create_education.statusActiveDropdownCheck();
  });

  it("15.17. Verify return correct results when searching by education name.", function () {
    create_education.searchInEducationName();
  });

  it("15.18. Verify reset the grid list successfully when the reset button is clicked.", function () {
    create_education.gridResetButtonCheck();
  });

  it("15.19. Verify refresh the grid list successfully when the refresh button is clicked.", function () {
    create_education.gridRefreshButtonCheck();
  });

  it("15.20. Verify clear all input values when the education creation reset button is clicked.", function () {
    create_education.createResetButtonCheck();
  });

  it("15.21. Verify display validation messages for required fields when submitting empty inputs.", function () {
    create_education.createValidationMessageCheck();
  });

  it("15.22. Verify redirect to the education list page when the go back button is clicked on the create page.", function () {
    create_education.createGoBackButtonCheck();
  });

  it("15.23. Verify that when the user clicks the Search button on the education grid page, the system redirects to the education List page..", function () {
    create_education.gridSearchButtonCheck();
  });

  it("15.24. Verify the Education list breadcrumb.", function () {
    create_education.listBreadcrumbCheck();
  });

  it("15.25. Verify the required Education grid columns.", function () {
    create_education.requiredGridColumnsCheck();
  });

  it("15.26. Verify valid Education grid row data.", function () {
    create_education.gridRecordDataCheck();
  });

  it("15.27. Verify Education exact name search.", function () {
    create_education.exactNameSearchCheck();
  });

  it("15.28. Verify Education partial name search.", function () {
    create_education.partialNameSearchCheck();
  });

  it("15.29. Verify non-existing Education search shows no records.", function () {
    create_education.noResultSearchCheck();
  });

  it("15.30. Verify Reset restores the Education grid.", function () {
    create_education.resetRestoresGridCheck();
  });

  it("15.31. Verify Education Active filter results.", function () {
    create_education.activeStatusResultCheck();
  });

  it("15.32. Verify Education name ascending sorting.", function () {
    create_education.nameAscendingSortCheck();
  });

  it("15.33. Verify Education name descending sorting.", function () {
    create_education.nameDescendingSortCheck();
  });

  it("15.34. Verify Education first-page pagination state.", function () {
    create_education.firstPagePaginationCheck();
  });

  it("15.35. Verify Education View breadcrumb and grid-to-view data.", function () {
    create_education.viewPageDataAndBreadcrumbCheck();
  });

  it("15.36. Verify Education Edit Mode fields and Reset behavior.", function () {
    create_education.editModeFieldsAndResetCheck();
  });

  it("15.37. Verify Education Create breadcrumb, empty names, default Active status and form buttons.", function () {
    create_education.createPageFieldsAndDefaultsCheck();
  });

  it("15.38. Verify Education Edit breadcrumb and prefilled English name, Bangla name and status match the grid.", function () {
    create_education.editPrefilledValuesCheck();
  });

  it("15.39. Verify switch the grid list content correctly between English and Bangla.", function () {
    create_education.gridLanguageSwitchCheck();
  });

});
