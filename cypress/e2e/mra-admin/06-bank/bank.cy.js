// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/06-bank/bank.cy.js --headed

import "cypress-file-upload";
import { create_bank } from "./bank.po";

describe("06. Bank Grid list,Creation,View,Update,Inactive,Active,Search,Reset,Refresh,create Reset,Validation Messages and Go back Tests.", function () {
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

  it("06.01. Verify that the Bank List page loads successfully.", function () {
    create_bank.gridBankListPage();
  });

  it("06.02. To verify that a new Bank can be successfully created when all required fields are filled with valid data.", function () {
    create_bank.createBank();
  });

  it("06.03. To verify that the user can successfully edit an existing Bank information, including the Bank Name, and Description..", function () {
    create_bank.viewBank();
  });

  it("06.04. should update the Bank with valid information by MRA-Admin role", function () {
    create_bank.editBank();
  });

  it("06.05. To verify that the user can filter the inactive Banks using the Status Dropdown on the Bank List page.", function () {
    create_bank.statusInactiveDropdownCheck();
  });

  it("06.06. Verify Filter Active Result by Status Dropdown", function () {
    create_bank.statusActiveDropdownCheck();
  });

  it("06.07. Verify Successful Search Result by Bank Name", function () {
    create_bank.searchInBankName();
  });

  it("06.08. Verify Successful Reset of Grid List Using the Reset Button on Bank Page.", function () {
    create_bank.gridResetButtonCheck();
  });

  it("06.09. Verify Successful Refresh of Grid List Using the Refresh Button on Bank Page.", function () {
    create_bank.gridRefreshButtonCheck();
  });

  it("06.10. Verify that the bank creation reset button clears applied input terms.", function () {
    create_bank.createResetButtonCheck();
  });

  it("06.11. Verify that required field validation messages appear when mandatory fields are left empty.", function () {
    create_bank.createValidationMessageCheck();
  });

  it("06.12. Verify that clicking the Go Back button on the bank Create page navigates the user back to the bank List page.", function () {
    create_bank.createGoBackButtonCheck();
  });
});
