// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/07-bank-branch/bank-branch.cy.js --headed

import "cypress-file-upload";
import { create_bank_branch } from "./bank-branch.po";

describe("07. Bank branch Grid list,Creation,View,Update,Inactive,Active,Search,Reset,Refresh,create Reset,submit button Validation Messages,Go back and Language switch bangla Tests.", function () {
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

  it("07.01. Verify that the Bank Branch List page loads successfully.", function () {
    create_bank_branch.gridBankBranchListPage();
  });

  it("07.02. To verify that a new Bank Branch can be successfully created when all required fields are filled with valid data.", function () {
    create_bank_branch.createBankBranch();
  });

  it("07.03. To verify that the user can successfully edit an existing Bank information, including the Bank Branch Name, and Description..", function () {
    create_bank_branch.viewBankBranch();
  });

  it("07.04. should update the Bank Branch with valid information by MRA-Admin role", function () {
    create_bank_branch.editBankBranch();
  });

  it("07.05. To verify that the user can filter the inactive Banks Branch using the Status Dropdown on the Bank List page.", function () {
    create_bank_branch.statusInactiveDropdownCheck();
  });

  it("07.06. Verify Filter Active Result by Status Dropdown", function () {
    create_bank_branch.statusActiveDropdownCheck();
  });

  it("07.07. Verify Successful Search Result by Bank Branch Name", function () {
    create_bank_branch.searchInBankBranchName();
  });

  it("07.08. Verify Successful Reset of Grid List Using the Reset Button on Bank Branch Page.", function () {
    create_bank_branch.gridResetButtonCheck();
  });

  it("07.09. Verify Successful Refresh of Grid List Using the Refresh Button on Bank Branch Page.", function () {
    create_bank_branch.gridRefreshButtonCheck();
  });

  it("07.10. Verify Bank Selection Functionality from Dropdown on Bank List Page", function () {
    create_bank_branch.selectBankDropdown();
  });

  it("07.11. Verify that the Bank Branch creation reset button clears applied input terms.", function () {
    create_bank_branch.createResetButtonCheck();
  });

  it("07.12. Verify that required field validation messages appear when mandatory fields are left empty.", function () {
    create_bank_branch.createValidationMessageCheck();
  });

  it("07.13. Verify that clicking the Go Back button on the Bank Branch Create page navigates the user back to the Bank Branch List page.", function () {
    create_bank_branch.createGoBackButtonCheck();
  });

  it("07.14. Verify successful bank branch creation without mandatory field.", function () {
    create_bank_branch.createWithoutMandatoryField();
  });

  it("07.15. Verify that the grid list content successfully switches from English to Bangla.", function () {
    create_bank_branch.gridLanguageSwitchCheck();
  });
});
