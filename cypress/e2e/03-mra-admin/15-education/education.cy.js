// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/15-education/education.cy.js --headed

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

  it("15.01. Should load the education list page without errors.", function () {
    create_education.gridEducationListPage();
  });

  it("15.02. Should create a new education successfully when all required fields are valid.", function () {
    create_education.createEducation();
  });

  it("15.03. Should show validation error when creating education without a name in English.", function () {
    create_education.createWithoutNameEn();
  });

  it("15.04. Should show validation error when creating education without a name in Bangla.", function () {
    create_education.createWithoutNameBn();
  });

  it("15.05. Should show validation error when creating education without a status.", function () {
    create_education.createWithoutStatus();
  });

  it("15.06. Should not create education if any mandatory field is missing.", function () {
    create_education.createWithoutOneMandatoryField();
  });

  it("15.07. Should perform the expected action when the action button is clicked.", function () {
    create_education.actionButtonCheck();
  });

  it("15.08. Should display all relevant details of an education including associated fields.", function () {
    create_education.viewEducation();
  });

  it("15.09. Should redirect to the education list page when the go back button is clicked on the view page.", function () {
    create_education.viewGoBackButton();
  });

  it("15.10. Should toggle the edit mode on the education form, enabling and disabling fields correctly.", function () {
    create_education.turnOffOnEditMode();
  });

  it("15.11. Should edit the education name and description successfully.", function () {
    create_education.editEducation();
  });

  it("15.12. Should reset all changes correctly when the edit reset button is clicked.", function () {
    create_education.editResetButton();
  });

  it("15.13. Should submit edited education data successfully.", function () {
    create_education.editSubmitButton();
  });

  it("15.14. Should redirect to the education list page when the go back button is clicked on the edit page.", function () {
    create_education.editGoBackButton();
  });

  it("15.15. Should filter inactive educations correctly using the status dropdown.", function () {
    create_education.statusInactiveDropdownCheck();
  });

  it("15.16. Should filter active educations correctly using the status dropdown.", function () {
    create_education.statusActiveDropdownCheck();
  });

  it("15.17. Should return correct results when searching by education name.", function () {
    create_education.searchInEducationName();
  });

  it("15.18. Should reset the grid list successfully when the reset button is clicked.", function () {
    create_education.gridResetButtonCheck();
  });

  it("15.19. Should refresh the grid list successfully when the refresh button is clicked.", function () {
    create_education.gridRefreshButtonCheck();
  });

  it("15.20. Should clear all input values when the education creation reset button is clicked.", function () {
    create_education.createResetButtonCheck();
  });

  it("15.21. Should display validation messages for required fields when submitting empty inputs.", function () {
    create_education.createValidationMessageCheck();
  });

  it("15.22. Should redirect to the education list page when the go back button is clicked on the create page.", function () {
    create_education.createGoBackButtonCheck();
  });

  it("15.23. Should switch the grid list content correctly between English and Bangla.", function () {
    create_education.gridLanguageSwitchCheck();
  });


});
