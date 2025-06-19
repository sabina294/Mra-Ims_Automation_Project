// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/18-occupation/occupation.cy.js --headed

import "cypress-file-upload";
import { create_occupation } from "./occupation.po";

describe("18. Occupation Test.", function () {
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

  it("18.03. Verify check if a occupation cannot be created when a mandatory field is missing.", function () {
    create_occupation.createWithoutOneMandatoryField();
  });

  it("18.04. Verify the user can view all relevant details of a occupation, including its associated fields.", function () {
    create_occupation.viewOccupation();
  });

  it("18.05. Verify the occupation name and description can be edited successfully.", function () {
    create_occupation.editOccupation();
  });

  it("18.06. Verify the user can filter inactive occupations using the status dropdown on the occupation list page.", function () {
    create_occupation.statusInactiveDropdownCheck();
  });

  it("18.07. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_occupation.statusActiveDropdownCheck();
  });

  it("18.08. Verify the search returns correct results when searching by occupation name.", function () {
    create_occupation.searchInOccupationName();
  });

  it("18.09. Verify the grid list resets successfully when the reset button is clicked on the occupation page.", function () {
    create_occupation.gridResetButtonCheck();
  });

  it("18.10. Verify that the grid list is refreshed successfully when the refresh button is clicked on the occupation page.", function () {
    create_occupation.gridRefreshButtonCheck();
  });

  it("18.11. Verify the occupation creation reset button clears all entered input values.", function () {
    create_occupation.createResetButtonCheck();
  });

  it("18.12. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_occupation.createValidationMessageCheck();
  });

  it("18.13. Verify that clicking the go back button on the occupation create page redirects the user to the occupation list page.", function () {
    create_occupation.createGoBackButtonCheck();
  });

  it("18.14. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_occupation.gridLanguageSwitchCheck();
  });
});
