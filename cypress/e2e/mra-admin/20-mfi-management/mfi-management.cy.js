// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/20-mfi-management/mfi-management.cy.js --headed

import "cypress-file-upload";
import { create_mfi_management } from "./mfi-management.po";

describe("20. MFI management Grid list,Creation,View,Update,Inactive,Active,Search,Reset,Refresh,All field,Without one field,Create Reset,Submit button Validation Messages,Go back and Language switch bangla Tests.", function () {
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

  it("20.01. Verify that the MFI  Management List page loads successfully.", function () {
    create_mfi_management.gridMfiManagementListPage();
  });

  it("20.02. To verify that a new MFI  Management can be successfully created when all required fields are filled with valid data.", function () {
    create_mfi_management.createMfi();
  });

  it("20.03. To verify that the user can successfully edit an existing MFI  Management information, including the MFI  Management Name, and Description..", function () {
    create_mfi_management.viewMfi();
  });

  it("20.04. should update the MFI  Management with valid information by MRA-Admin role", function () {
    create_mfi_management.editMfi();
  });

  it("20.05. To verify that the user can filter the inactive MFI  Managements using the Status Dropdown on the MFI  Management List page.", function () {
    create_mfi_management.statusInactiveDropdownCheck();
  });

  it("20.06. Verify Filter Active Result by Status Dropdown", function () {
    create_mfi_management.statusActiveDropdownCheck();
  });

  it("20.07. Verify Successful Search Result by MFI  Management Name", function () {
    create_mfi_management.searchInMfiManagementName();
  });

  it("20.08. Verify Successful Reset of Grid List Using the Reset Button on MFI  Management Page.", function () {
    create_mfi_management.gridResetButtonCheck();
  });

  it("20.09. Verify Successful Refresh of Grid List Using the Refresh Button on MFI  Management Page.", function () {
    create_mfi_management.gridRefreshButtonCheck();
  });

  it("20.10. Verify that a new mfi management can be successfully created when all fields are filled with valid data.", function () {
    create_mfi_management.createAllField();
  });

  it("20.11. Verify check if mfi management can be create without one mandatory field.", function () {
    create_mfi_management.createWithoutOneMandatoryField();
  });

  it("20.12. Verify that the MFI Management creation reset button clears applied input terms.", function () {
    create_mfi_management.createResetButtonCheck();
  });

  it("20.13. Verify that required field validation messages appear when mandatory fields are left empty.", function () {
    create_mfi_management.createValidationMessageCheck();
  });

  it("20.14. Verify that clicking the Go Back button on the MFI Management Create page navigates the user back to the MFI Management List page.", function () {
    create_mfi_management.createGoBackButtonCheck();
  });

  it("20.15. Verify successful MFI Management creation without mandatory field.", function () {
    create_mfi_management.createWithoutMandatoryField();
  });

  it("20.16. Verify that the grid list content successfully switches from English to Bangla.", function () {
    create_mfi_management.gridLanguageSwitchCheck();
  });
});
