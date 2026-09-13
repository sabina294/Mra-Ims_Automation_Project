// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/01-mfi/16-gender/gender.cy.js --headed

import "cypress-file-upload";
import { create_gender } from "./gender.po";

describe("16. Gender Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");

  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(baseURL, d.credential.mraAdminUserId, d.credential.mraAdminPassword);
      cy.changeLanguage("english");
      cy.switchModule("MFI");
    });
  });

  after(() => {
    cy.logout();
  });

  it("16.01. Verify load the gender list page without errors", function () {
    create_gender.gridGenderListPage();
  });

  it("16.02. Verify create a new gender successfully when all required fields are valid", function () {
    create_gender.createGender();
  });

  it("16.03. Verify not allow creating a gender without a name in English", function () {
    create_gender.createWithoutNameEn();
  });

  it("16.04. Verify not allow creating a gender without a name in Bangla", function () {
    create_gender.createWithoutNameBn();
  });

  it("16.05. Verify not allow creating a gender without a gender ID", function () {
    create_gender.createWithoutGenderId();
  });

  it("16.06. Verify not allow creating a gender without selecting a status", function () {
    create_gender.createWithoutStatus();
  });

  it("16.07. Verify prevent creation if any mandatory field is missing", function () {
    create_gender.createWithoutOneMandatoryField();
  });

  it("16.08. Verify perform actions correctly when the action button is clicked", function () {
    create_gender.actionButtonCheck();
  });

  it("16.09. Verify display all relevant details of a gender correctly", function () {
    create_gender.viewGender();
  });

  it("16.10. Verify redirect to the gender list page when clicking the 'Go Back' button from the view page", function () {
    create_gender.viewGoBackButton();
  });

  it("16.11. Verify toggle edit mode on and off, disabling or enabling all fields accordingly", function () {
    create_gender.turnOffOnEditMode();
  });

  it("16.12. Verify successfully submit the existing gender details", function () {
    create_gender.editGender();
  });

  it("16.13. Verify reset the gender edit form correctly when the reset button is clicked", function () {
    create_gender.editResetButton();
  });

  it("16.14. Verify submit the gender edit form successfully", function () {
    create_gender.editSubmitButton();
  });

  it("16.15. Verify redirect to the gender list page when clicking 'Go Back' from the edit page", function () {
    create_gender.editGoBackButton();
  });

  it("16.16. Verify filter inactive genders correctly using the status dropdown", function () {
    create_gender.statusInactiveDropdownCheck();
  });

  it("16.17. Verify filter active genders correctly using the status dropdown", function () {
    create_gender.statusActiveDropdownCheck();
  });

  it("16.18. Verify return correct results when searching by gender name", function () {
    create_gender.searchInGenderName();
  });

  it("16.19. Verify reset the grid list successfully when the reset button is clicked", function () {
    create_gender.gridResetButtonCheck();
  });

  it("16.20. Verify refresh the grid list successfully when the refresh button is clicked", function () {
    create_gender.gridRefreshButtonCheck();
  });

  it("16.21. Verify clear all inputs correctly when the gender creation reset button is clicked", function () {
    create_gender.createResetButtonCheck();
  });

  it("16.22. Verify display validation messages for required fields when submitting empty inputs", function () {
    create_gender.createValidationMessageCheck();
  });

  it("16.23. Verify redirect to the gender list page when clicking 'Go Back' from the create page", function () {
    create_gender.createGoBackButtonCheck();
  });

  it("16.24. Verify that when the user clicks the Search button on the gender grid page, the system redirects to the gender List page..", function () {
    create_gender.gridSearchButtonCheck();
  });

  it("16.25. Verify the Gender list breadcrumb.", function () {
    create_gender.listBreadcrumbCheck();
  });

  it("16.26. Verify the required Gender grid columns.", function () {
    create_gender.requiredGridColumnsCheck();
  });

  it("16.27. Verify valid Gender grid row data.", function () {
    create_gender.gridRecordDataCheck();
  });

  it("16.28. Verify Gender exact name search.", function () {
    create_gender.exactNameSearchCheck();
  });

  it("16.29. Verify Gender partial name search.", function () {
    create_gender.partialNameSearchCheck();
  });

  it("16.30. Verify non-existing Gender search shows no records.", function () {
    create_gender.noResultSearchCheck();
  });

  it("16.31. Verify Reset restores the Gender grid.", function () {
    create_gender.resetRestoresGridCheck();
  });

  it("16.32. Verify Gender Active filter results.", function () {
    create_gender.activeStatusResultCheck();
  });

  it("16.33. Verify Gender name ascending sorting.", function () {
    create_gender.nameAscendingSortCheck();
  });

  it("16.34. Verify Gender name descending sorting.", function () {
    create_gender.nameDescendingSortCheck();
  });

  it("16.35. Verify Gender first-page pagination state.", function () {
    create_gender.firstPagePaginationCheck();
  });

  it("16.36. Verify Gender View breadcrumb and grid-to-view data.", function () {
    create_gender.viewPageDataAndBreadcrumbCheck();
  });

  it("16.37. Verify Gender Edit Mode fields and Reset behavior.", function () {
    create_gender.editModeFieldsAndResetCheck();
  });

  it("16.38. Verify Gender Create breadcrumb, empty names and Gender ID, default Active status and form buttons.", function () {
    create_gender.createPageFieldsAndDefaultsCheck();
  });

  it("16.39. Verify Gender View breadcrumb in edit mode and prefilled English name, Bangla name, Gender ID and status match the grid.", function () {
    create_gender.editPrefilledValuesCheck();
  });

  it("16.40. Verify change grid list content correctly when switching language between English and Bangla", function () {
    create_gender.gridLanguageSwitchCheck();
  });
});
