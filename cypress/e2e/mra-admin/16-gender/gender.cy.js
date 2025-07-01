// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/16-gender/gender.cy.js --headed

import "cypress-file-upload";
import { create_gender } from "./gender.po";

describe("16. Gender Module Test Cases.", function () {
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

  it("16.01. Verify the gender list page loads without errors.", function () {
    create_gender.gridGenderListPage();
  });

  it("16.02. Verify a new gender is created successfully when all required fields are filled with valid data.", function () {
    create_gender.createGender();
  });

  it("16.03. Verify creating a gender without an name en,even if all other fields are valid.", function () {
    create_gender.createWithoutNameEn();
  });

  it("16.04. Verify creating a gender without an name bn,even if all other fields are valid.", function () {
    create_gender.createWithoutNameBn();
  });

  it("16.05. Verify creating a gender without an gender id,even if all other fields are valid.", function () {
    create_gender.createWithoutGenderId();
  });

  it("16.06. Verify creating a gender without an status,even if all other fields are valid.", function () {
    create_gender.createWithoutStatus();
  });

  it("16.07. Verify check if a gender cannot be created when a mandatory field is missing.", function () {
    create_gender.createWithoutOneMandatoryField();
  });

  it("16.08. Verify successfully performs the action when the action button is clicked.", function () {
    create_gender.actionButtonCheck();
  });

  it("16.09. Verify the user can view all relevant details of a gender, including its associated fields.", function () {
    create_gender.viewGender();
  });

  it("16.10. Verify that the gender forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_gender.turnOffOnEditMode();
  });

  it("16.11. Verify the gender name and description can be edited successfully.", function () {
    create_gender.editGender();
  });

  it("16.12. Verify the gender edit reset button functions correctly.", function () {
    create_gender.editResetButton();
  });

  it("16.13. Verify the gender edit submit button functions correctly.", function () {
    create_gender.editSubmitButton();
  });

  it("16.14. Verify that clicking the go back button on the gender edit page redirects the user to the gender list page.", function () {
    create_gender.editGoBackButton();
  });

  it("16.15. Verify the user can filter inactive genders using the status dropdown on the gender list page.", function () {
    create_gender.statusInactiveDropdownCheck();
  });

  it("16.16. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_gender.statusActiveDropdownCheck();
  });

  it("16.17. Verify the search returns correct results when searching by gender name.", function () {
    create_gender.searchInGenderName();
  });

  it("16.18. Verify the grid list resets successfully when the reset button is clicked on the gender page.", function () {
    create_gender.gridResetButtonCheck();
  });

  it("16.19. Verify that the grid list is refreshed successfully when the refresh button is clicked on the gender page.", function () {
    create_gender.gridRefreshButtonCheck();
  });

  it("16.20. Verify the gender creation reset button clears all entered input values.", function () {
    create_gender.createResetButtonCheck();
  });

  it("16.21. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_gender.createValidationMessageCheck();
  });

  it("16.22. Verify that clicking the go back button on the gender create page redirects the user to the gender list page.", function () {
    create_gender.createGoBackButtonCheck();
  });

  it("16.23. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_gender.gridLanguageSwitchCheck();
  });
});
