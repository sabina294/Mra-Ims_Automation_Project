// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/16-gender/gender.cy.js --headed

import "cypress-file-upload";
import { create_gender } from "./gender.po";

describe("16. Gender Test.", function () {
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

  it("16.03. Verify check if a gender cannot be created when a mandatory field is missing.", function () {
    create_gender.createWithoutOneMandatoryField();
  });

  it("16.04. Verify the user can view all relevant details of a gender, including its associated fields.", function () {
    create_gender.viewGender();
  });

  it("16.05. Verify the gender name and description can be edited successfully.", function () {
    create_gender.editGender();
  });

  it("16.06. Verify the user can filter inactive genders using the status dropdown on the gender list page.", function () {
    create_gender.statusInactiveDropdownCheck();
  });

  it("16.07. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_gender.statusActiveDropdownCheck();
  });

  it("16.08. Verify the search returns correct results when searching by gender name.", function () {
    create_gender.searchInGenderName();
  });

  it("16.09. Verify the grid list resets successfully when the reset button is clicked on the gender page.", function () {
    create_gender.gridResetButtonCheck();
  });

  it("16.10. Verify that the grid list is refreshed successfully when the refresh button is clicked on the gender page.", function () {
    create_gender.gridRefreshButtonCheck();
  });

  it("16.11. Verify the gender creation reset button clears all entered input values.", function () {
    create_gender.createResetButtonCheck();
  });

  it("16.12. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_gender.createValidationMessageCheck();
  });

  it("16.13. Verify that clicking the go back button on the gender create page redirects the user to the gender list page.", function () {
    create_gender.createGoBackButtonCheck();
  });

  it("16.14. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_gender.gridLanguageSwitchCheck();
  });
});
