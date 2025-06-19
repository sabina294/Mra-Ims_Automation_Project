// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/02-division/division.cy.js --headed

import "cypress-file-upload";
import { create_division } from "./division.po";

describe("02. Division Test.", function () {
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

  it("02.01. Verify the division list page loads without errors.", function () {
    create_division.gridDivisionListPage();
  });

  it("02.02. Verify a new division is created successfully when all required fields are filled with valid data.", function () {
    create_division.createDivision();
  });

  it("02.03. Verify that a division cannot be created without a division name english, even if the division name,code,established year,are valid.", function () {
    create_division.createWithoutNameEn();
  });

  it("02.04. Verify that a division cannot be created without a division name bangla, even if the division name,code,year, are valid.", function () {
    create_division.createWithoutNameBn();
  });

  it("02.05. Verify that a division cannot be created without a division code, even if the division name,year, are valid.", function () {
    create_division.createWithoutDivisionCode();
  });

  it("02.06. Verify that a division cannot be created without established year, even if the division name,code, are valid.", function () {
    create_division.createWithoutEstabYear();
  });

  it("02.07. Verify the user can view all relevant details of a division, including its associated fields.", function () {
    create_division.viewDivision();
  });

  it("02.08. Verify the division name and description can be edited successfully.", function () {
    create_division.editDivision();
  });

  it("02.09. Verify the division edit reset button functions correctly.", function () {
    create_division.editResetButton();
  });

  it("02.10. Verify the division edit submit button functions correctly.", function () {
    create_division.editSubmitButton();
  });

  it("02.11. Verify that clicking the go back button on the division edit page redirects the user to the division list page.", function () {
    create_division.editGoBackButton();
  });

  it("02.12. Verify the user can filter inactive divisions using the status dropdown on the division list page.", function () {
    create_division.statusInactiveDropdownCheck();
  });

  it("02.13. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_division.statusActiveDropdownCheck();
  });

  it("02.14. Verify the search returns correct results when searching by division name.", function () {
    create_division.searchInDivisionName();
  });

  it("02.15. Verify the grid list resets successfully when the reset button is clicked on the division page.", function () {
    create_division.gridResetButtonCheck();
  });

  it("02.16. Verify that the grid list is refreshed successfully when the refresh button is clicked on the division page.", function () {
    create_division.gridRefreshButtonCheck();
  });

  it("02.17. Verify the division creation reset button clears all entered input values.", function () {
    create_division.createResetButtonCheck();
  });

  it("02.18. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_division.createValidationMessageCheck();
  });

  it("02.19. Verify that clicking the go back button on the division create page redirects the user to the division list page.", function () {
    create_division.createGoBackButtonCheck();
  });

  it("02.20. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_division.gridLanguageSwitchCheck();
  });
});
