// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/16-gender/gender.cy.js --headed

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

  it("16.01. Should load the gender list page without errors", function () {
    create_gender.gridGenderListPage();
  });

  it("16.02. Should create a new gender successfully when all required fields are valid", function () {
    create_gender.createGender();
  });

  it("16.03. Should not allow creating a gender without a name in English", function () {
    create_gender.createWithoutNameEn();
  });

  it("16.04. Should not allow creating a gender without a name in Bangla", function () {
    create_gender.createWithoutNameBn();
  });

  it("16.05. Should not allow creating a gender without a gender ID", function () {
    create_gender.createWithoutGenderId();
  });

  it("16.06. Should not allow creating a gender without selecting a status", function () {
    create_gender.createWithoutStatus();
  });

  it("16.07. Should prevent creation if any mandatory field is missing", function () {
    create_gender.createWithoutOneMandatoryField();
  });

  it("16.08. Should perform actions correctly when the action button is clicked", function () {
    create_gender.actionButtonCheck();
  });

  it("16.09. Should display all relevant details of a gender correctly", function () {
    create_gender.viewGender();
  });

  it("16.10. Should redirect to the gender list page when clicking the 'Go Back' button from the view page", function () {
    create_gender.viewGoBackButton();
  });

  it("16.11. Should toggle edit mode on and off, disabling or enabling all fields accordingly", function () {
    create_gender.turnOffOnEditMode();
  });

  it("16.12. Should successfully edit the gender name and description", function () {
    create_gender.editGender();
  });

  it("16.13. Should reset the gender edit form correctly when the reset button is clicked", function () {
    create_gender.editResetButton();
  });

  it("16.14. Should submit the gender edit form successfully", function () {
    create_gender.editSubmitButton();
  });

  it("16.15. Should redirect to the gender list page when clicking 'Go Back' from the edit page", function () {
    create_gender.editGoBackButton();
  });

  it("16.16. Should filter inactive genders correctly using the status dropdown", function () {
    create_gender.statusInactiveDropdownCheck();
  });

  it("16.17. Should filter active genders correctly using the status dropdown", function () {
    create_gender.statusActiveDropdownCheck();
  });

  it("16.18. Should return correct results when searching by gender name", function () {
    create_gender.searchInGenderName();
  });

  it("16.19. Should reset the grid list successfully when the reset button is clicked", function () {
    create_gender.gridResetButtonCheck();
  });

  it("16.20. Should refresh the grid list successfully when the refresh button is clicked", function () {
    create_gender.gridRefreshButtonCheck();
  });

  it("16.21. Should clear all inputs correctly when the gender creation reset button is clicked", function () {
    create_gender.createResetButtonCheck();
  });

  it("16.22. Should display validation messages for required fields when submitting empty inputs", function () {
    create_gender.createValidationMessageCheck();
  });

  it("16.23. Should redirect to the gender list page when clicking 'Go Back' from the create page", function () {
    create_gender.createGoBackButtonCheck();
  });

  it("16.24. Should change grid list content correctly when switching language between English and Bangla", function () {
    create_gender.gridLanguageSwitchCheck();
  });
});
