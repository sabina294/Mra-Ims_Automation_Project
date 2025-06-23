// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/15-education/education.cy.js --headed

import "cypress-file-upload";
import { create_education } from "./education.po";

describe("15. Education Test.", function () {
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

  it("15.01. Verify the education list page loads without errors.", function () {
    create_education.gridEducationListPage();
  });

  it("15.02. Verify a new education is created successfully when all required fields are filled with valid data.", function () {
    create_education.createEducation();
  });

  it("15.03. Verify check if a education cannot be created when a mandatory field is missing.", function () {
    create_education.createWithoutOneMandatoryField();
  });

  it("15.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_education.actionButtonCheck();
  });

  it("15.05. Verify the user can view all relevant details of a education, including its associated fields.", function () {
    create_education.viewEducation();
  });

  // it("15.06. Verify that the education forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
  //   create_education.turnOffOnEditMode();
  // });

  it("15.07. Verify the education name and description can be edited successfully.", function () {
    create_education.editEducation();
  });

  it("15.08. Verify the education edit reset button functions correctly.", function () {
    create_education.editResetButton();
  });

  it("15.09. Verify the education edit submit button functions correctly.", function () {
    create_education.editSubmitButton();
  });

  it("15.10. Verify that clicking the go back button on the education edit page redirects the user to the education list page.", function () {
    create_education.editGoBackButton();
  });

  it("15.11. Verify the user can filter inactive educations using the status dropdown on the education list page.", function () {
    create_education.statusInactiveDropdownCheck();
  });

  it("15.12. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_education.statusActiveDropdownCheck();
  });

  it("15.13. Verify the search returns correct results when searching by education name.", function () {
    create_education.searchInEducationName();
  });

  it("15.14. Verify the grid list resets successfully when the reset button is clicked on the education page.", function () {
    create_education.gridResetButtonCheck();
  });

  it("15.15. Verify that the grid list is refreshed successfully when the refresh button is clicked on the education page.", function () {
    create_education.gridRefreshButtonCheck();
  });

  it("15.16. Verify the education creation reset button clears all entered input values.", function () {
    create_education.createResetButtonCheck();
  });

  it("15.17. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_education.createValidationMessageCheck();
  });

  it("15.18. Verify that clicking the go back button on the education create page redirects the user to the education list page.", function () {
    create_education.createGoBackButtonCheck();
  });

  it("15.19. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_education.gridLanguageSwitchCheck();
  });
});
