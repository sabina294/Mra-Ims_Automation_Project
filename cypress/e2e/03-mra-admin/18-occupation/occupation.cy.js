// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/18-occupation/occupation.cy.js --headed

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

  it("18.01. Verify the occupation list page loads without errors.", function () {
    create_occupation.gridOccupationListPage();
  });

  it("18.02. Verify a new occupation is created successfully when all required fields are filled with valid data.", function () {
    create_occupation.createOccupation();
  });

  it("18.03. Verify creating a occupation without an name en,even if all other fields are valid.", function () {
    create_occupation.createWithoutNameEn();
  });

  it("18.04. Verify creating a occupation without an name bn,even if all other fields are valid.", function () {
    create_occupation.createWithoutNameBn();
  });

  it("18.05. Verify creating a occupation without an status,even if all other fields are valid.", function () {
    create_occupation.createWithoutStatus();
  });

  it("18.06. Verify check if a occupation cannot be created when a mandatory field is missing.", function () {
    create_occupation.createWithoutOneMandatoryField();
  });

  it("18.07. Verify successfully performs the action when the action button is clicked.", function () {
    create_occupation.actionButtonCheck();
  });

  it("18.08. Verify the user can view all relevant details of a occupation, including its associated fields.", function () {
    create_occupation.viewOccupation();
  });

  it("18.09. Verify that clicking the go back button on the occupation view page redirects the user to the occupation list page.", function () {
    create_occupation.viewGoBackButton();
  });

  it("18.10. Verify that the occupation forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_occupation.turnOffOnEditMode();
  });

  it("18.11. Verify the occupation name and description can be edited successfully.", function () {
    create_occupation.editOccupation();
  });

  it("18.12. Verify the occupation edit reset button functions correctly.", function () {
    create_occupation.editResetButton();
  });

  it("18.13. Verify the occupation edit submit button functions correctly.", function () {
    create_occupation.editSubmitButton();
  });

  it("18.14. Verify that clicking the go back button on the occupation edit page redirects the user to the occupation list page.", function () {
    create_occupation.editGoBackButton();
  });

  it("18.15. Verify the user can filter inactive occupations using the status dropdown on the occupation list page.", function () {
    create_occupation.statusInactiveDropdownCheck();
  });

  it("18.16. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_occupation.statusActiveDropdownCheck();
  });

  it("18.17. Verify the search returns correct results when searching by occupation name.", function () {
    create_occupation.searchInOccupationName();
  });

  it("18.18. Verify the grid list resets successfully when the reset button is clicked on the occupation page.", function () {
    create_occupation.gridResetButtonCheck();
  });

  it("18.19. Verify that the grid list is refreshed successfully when the refresh button is clicked on the occupation page.", function () {
    create_occupation.gridRefreshButtonCheck();
  });

  it("18.20. Verify the occupation creation reset button clears all entered input values.", function () {
    create_occupation.createResetButtonCheck();
  });

  it("18.21. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_occupation.createValidationMessageCheck();
  });

  it("18.22. Verify that clicking the go back button on the occupation create page redirects the user to the occupation list page.", function () {
    create_occupation.createGoBackButtonCheck();
  });

  it("18.23. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_occupation.gridLanguageSwitchCheck();
  });
});
