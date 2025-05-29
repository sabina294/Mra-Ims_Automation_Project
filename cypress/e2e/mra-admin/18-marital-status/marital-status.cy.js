// npx cypress run --spec cypress/e2e/mra-admin/18-marital-status/marital-status.cy.js --browser chrome --headed --reporter mochawesome

import "cypress-file-upload";
import { create_marital_status } from "./marital-status.po";

describe("18. Marital Status Grid list,Creation,View,Update,Inactive,Active,Search,Reset and Refresh Tests.", function () {
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

  it("18.01. Verify that the Marital Status List page loads successfully.", function () {
    create_marital_status.gridMaritalStatusListPage();
  });

  it("18.02. To verify that a new Marital Status can be successfully created when all required fields are filled with valid data.", function () {
    create_marital_status.createMaritalStatus();
  });

  it("18.03. To verify that the user can successfully edit an existing Marital Status information, including the Marital Status Name, and Description..", function () {
    create_marital_status.viewMaritalStatus();
  });

  it("18.04. should update the Marital Status with valid information by MRA-Admin role", function () {
    create_marital_status.editMaritalStatus();
  });

  it("18.05. To verify that the user can filter the inactive Marital Statuss using the Status Dropdown on the Marital Status List page.", function () {
    create_marital_status.statusInactiveDropdownCheck();
  });

  it("18.06. Verify Filter Active Result by Status Dropdown", function () {
    create_marital_status.statusActiveDropdownCheck();
  });

  it("18.07. Verify Successful Search Result by Marital Status Name", function () {
    create_marital_status.searchInMaritalStatusName();
  });

  it("18.08. Verify Successful Reset of Grid List Using the Reset Button on Marital Status Page.", function () {
    create_marital_status.gridResetButtonCheck();
  });

  it("18.09. Verify Successful Refresh of Grid List Using the Refresh Button on Marital Status Page.", function () {
    create_marital_status.gridRefreshButtonCheck();
  });
});
