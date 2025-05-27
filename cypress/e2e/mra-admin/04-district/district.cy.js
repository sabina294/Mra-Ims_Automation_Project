//   npx cypress run --spec cypress/e2e/mra-admin/04-district/district.cy.js --browser chrome --headed --reporter mochawesome

import "cypress-file-upload";
import { create_district } from "./district.po";

describe("04. District Grid list,Creation,View,Update,Inactive,Active,Search,Reset and Refresh Tests.", function () {
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

  it("04.01. Verify that the District List page loads successfully.", function () {
    create_district.gridDistrictListPage();
  });

  it("04.02. To verify that a new District can be successfully created when all required fields are filled with valid data.", function () {
    create_district.createDistrict();
  });

  it("04.03. To verify that the user can successfully edit an existing District information, including the District Name, and Description..", function () {
    create_district.viewDistrict();
  });

  it("04.04. should update the district with valid information by MRA-Admin role", function () {
    create_district.editDistrict();
  });

  it("04.05. To verify that the user can filter the inactive Districts using the Status Dropdown on the District List page.", function () {
    create_district.statusInactiveDropdownCheck();
  });

  it("04.06. Verify Filter Active Result by Status Dropdown", function () {
    create_district.statusActiveDropdownCheck();
  });

  it("04.07. Verify Successful Search Result by District Name", function () {
    create_district.searchInDistrictName();
  });

  it("04.08. Verify Successful Reset of Grid List Using the Reset Button on District Page.", function () {
    create_district.gridResetButtonCheck();
  });

  it("04.09. Verify Successful Refresh of Grid List Using the Refresh Button on District Page.", function () {
    create_district.gridRefreshButtonCheck();
  });
});
