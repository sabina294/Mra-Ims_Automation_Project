// npx cypress run --spec cypress/e2e/mra-admin/19-occupation/occupation.cy.js --browser chrome --headed --reporter mochawesome

import "cypress-file-upload";
import { create_occupation } from "./occupation.po";

describe("19. Occupation Grid list,Creation,View,Update,Inactive,Active,Search,Reset and Refresh Tests.", function () {
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

  it("19.01. Verify that the Occupation List page loads successfully.", function () {
    create_occupation.gridOccupationListPage();
  });

  it("19.02. To verify that a new Occupation can be successfully created when all required fields are filled with valid data.", function () {
    create_occupation.createOccupation();
  });

  it("19.03. To verify that the user can successfully edit an existing Occupation information, including the Occupation Name, and Description..", function () {
    create_occupation.viewOccupation();
  });

  it("19.04. should update the Occupation with valid information by MRA-Admin role", function () {
    create_occupation.editOccupation();
  });

  it("19.05. To verify that the user can filter the inactive Occupations using the Status Dropdown on the Occupation List page.", function () {
    create_occupation.statusInactiveDropdownCheck();
  });

  it("19.06. Verify Filter Active Result by Status Dropdown", function () {
    create_occupation.statusActiveDropdownCheck();
  });

  it("19.07. Verify Successful Search Result by Occupation Name", function () {
    create_occupation.searchInOccupationName();
  });

  it("19.08. Verify Successful Reset of Grid List Using the Reset Button on Occupation Page.", function () {
    create_occupation.gridResetButtonCheck();
  });

  it("19.09. Verify Successful Refresh of Grid List Using the Refresh Button on Occupation Page.", function () {
    create_occupation.gridRefreshButtonCheck();
  });
});
