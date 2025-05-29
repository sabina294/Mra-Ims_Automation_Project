// npx cypress run --spec cypress/e2e/mra-admin/15-organization-legal-form/organization-legal-form.cy.js --browser chrome --headed --reporter mochawesome

import "cypress-file-upload";
import { create_organization_legal_form } from "./organization-legal-form.po";

describe("15. Organization Legal Form Grid list,Creation,View,Update,Inactive,Active,Search,Reset and Refresh Tests.", function () {
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

  it("15.01. Verify that the Organization Legal From List page loads successfully.", function () {
    create_organization_legal_form.gridOrganizationLegalFromListPage();
  });

  it("15.02. To verify that a new Organization Legal From can be successfully created when all required fields are filled with valid data.", function () {
    create_organization_legal_form.createOrganizationLegalForm();
  });

  it("15.03. To verify that the user can successfully edit an existing Organization Legal From information, including the Organization Legal From Name, and Description..", function () {
    create_organization_legal_form.viewOrganizationLegalForm();
  });

  it("15.04. should update the Organization Legal From with valid information by MRA-Admin role", function () {
    create_organization_legal_form.editOrganizationLegalForm();
  });

  it("15.05. To verify that the user can filter the inactive Organization Legal Froms using the Status Dropdown on the Organization Legal From List page.", function () {
    create_organization_legal_form.statusInactiveDropdownCheck();
  });

  it("15.06. Verify Filter Active Result by Status Dropdown", function () {
    create_organization_legal_form.statusActiveDropdownCheck();
  });

  it("15.07. Verify Successful Search Result by Organization Legal From Name", function () {
    create_organization_legal_form.searchInOrganizationLegalFromName();
  });

  it("15.08. Verify Successful Reset of Grid List Using the Reset Button on Organization Legal From Page.", function () {
    create_organization_legal_form.gridResetButtonCheck();
  });

  it("15.09. Verify Successful Refresh of Grid List Using the Refresh Button on Organization Legal From Page.", function () {
    create_organization_legal_form.gridRefreshButtonCheck();
  });
});
