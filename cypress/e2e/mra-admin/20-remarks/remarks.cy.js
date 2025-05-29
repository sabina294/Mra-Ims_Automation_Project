// npx cypress run --spec cypress/e2e/mra-admin/20-remarks/remarks.cy.js --browser chrome --headed --reporter mochawesome

import "cypress-file-upload";
import { create_remarks } from "./remarks.po";

describe("20. Remarks Grid list,Creation,View,Update,Inactive,Active,Search,Reset and Refresh Tests.", function () {
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

  it("20.01. Verify that the Remarks List page loads successfully.", function () {
    create_remarks.gridRemarksListPage();
  });

  it("20.02. To verify that a new Remarks can be successfully created when all required fields are filled with valid data.", function () {
    create_remarks.createRemarks();
  });

  it("20.03. To verify that the user can successfully edit an existing Remarks information, including the Remarks Name, and Description..", function () {
    create_remarks.viewRemarks();
  });

  it("20.04. should update the Remarks with valid information by MRA-Admin role", function () {
    create_remarks.editRemarks();
  });

  it("20.05. To verify that the user can filter the inactive Remarkss using the Status Dropdown on the Remarks List page.", function () {
    create_remarks.statusInactiveDropdownCheck();
  });

  it("20.06. Verify Filter Active Result by Status Dropdown", function () {
    create_remarks.statusActiveDropdownCheck();
  });

  it("20.07. Verify Successful Search Result by Remarks Name", function () {
    create_remarks.searchInRemarksName();
  });

  it("20.08. Verify Successful Reset of Grid List Using the Reset Button on Remarks Page.", function () {
    create_remarks.gridResetButtonCheck();
  });

  it("20.09. Verify Successful Refresh of Grid List Using the Refresh Button on Remarks Page.", function () {
    create_remarks.gridRefreshButtonCheck();
  });
});
