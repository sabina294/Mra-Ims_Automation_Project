// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/02-division/division.cy.js --headed

import "cypress-file-upload";
import { create_division } from "./division.po";

describe("02. Division Grid list,Creation,View,Update,Inactive,Active,Search,Reset,Refresh,create Reset,submit button Validation Messages,Go back and Language switch bangla Tests.", function () {
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

  it("02.01. Verify that the Division List page loads successfully.", function () {
    create_division.gridDivisionListPage();
  });

  it("02.02. To verify that a new Division can be successfully created when all required fields are filled with valid data by MRA-Admin role", function () {
    create_division.createDivision();
  });

  it("02.03. To verify that the user can successfully view the detailed information of a Division, including all the relevant fields.", function () {
    create_division.viewDivision();
  });

  it("02.04. To verify that the user can successfully edit an existing Division's information, including the Division Name, and Description. by MRA-Admin role", function () {
    create_division.editDivision();
  });

  it("02.05. To verify that the user can filter the inactive Divisions using the Status Dropdown on the Division List page.", function () {
    create_division.statusInactiveDropdownCheck();
  });

  it("02.06. Verify Filter Active Result by Status Dropdown", function () {
    create_division.statusActiveDropdownCheck();
  });

  it("02.07. Verify Successful Search Result by division Name", function () {
    create_division.searchInDivisionName();
  });

  it("02.08. Verify Successful Reset of Grid List Using the Reset Button on division Page.", function () {
    create_division.gridResetButtonCheck();
  });

  it("02.09. Verify Successful Refresh of Grid List Using the Refresh Button on division Page.", function () {
    create_division.gridRefreshButtonCheck();
  });

  it("02.10.Verify pagination works correctly on last page of the division list", function () {
    create_division.paginationCheck();
  });

  it("02.11. Verify that the division creation reset button clears applied input terms.", function () {
    create_division.createResetButtonCheck();
  });

  it("02.12. Verify that required field validation messages appear when mandatory fields are left empty.", function () {
    create_division.createValidationMessageCheck();
  });

  it("02.13. Verify that clicking the Go Back button on the Division Create page navigates the user back to the Division List page.", function () {
    create_division.createGoBackButtonCheck();
  });

  it("02.14. Verify that the grid list content successfully switches from English to Bangla.", function () {
    create_division.gridLanguageSwitchCheck();
  });
});
