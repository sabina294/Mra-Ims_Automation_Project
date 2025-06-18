// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/05-bank/bank.cy.js --headed

import "cypress-file-upload";
import { create_bank } from "./bank.po";

describe("05. Bank Grid list,Creation,View,Update,Inactive,Active,Search,Reset,Refresh,Pagination,All field,Without one field,Create Reset,Submit button Validation Messages,Go back and Language switch bangla Tests.", function () {
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

  it("05.01. Verify that the Bank List page loads successfully.", function () {
    create_bank.gridBankListPage();
  });

  it("05.02. To verify that a new Bank can be successfully created when all required fields are filled with valid data.", function () {
    create_bank.createBank();
  });

  it("05.03. To verify that the user can successfully edit an existing Bank information, including the Bank Name, and Description..", function () {
    create_bank.viewBank();
  });

  it("05.04. should update the Bank with valid information by MRA-Admin role", function () {
    create_bank.editBank();
  });

  it("05.05. To verify that the user can filter the inactive Banks using the Status Dropdown on the Bank List page.", function () {
    create_bank.statusInactiveDropdownCheck();
  });

  it("05.06. Verify Filter Active Result by Status Dropdown", function () {
    create_bank.statusActiveDropdownCheck();
  });

  it("05.07. Verify Successful Search Result by Bank Name", function () {
    create_bank.searchInBankName();
  });

  it("05.08. Verify Successful Reset of Grid List Using the Reset Button on Bank Page.", function () {
    create_bank.gridResetButtonCheck();
  });

  it("05.09. Verify Successful Refresh of Grid List Using the Refresh Button on Bank Page.", function () {
    create_bank.gridRefreshButtonCheck();
  });

  it("05.10.Verify pagination works correctly on last page of the bank list", function () {
    create_bank.paginationCheck();
  });

  it("05.11. Verify that a new Bank can be successfully created when all fields are filled with valid data.", function () {
    create_bank.createAllField();
  });

  it("05.12. Verify check if Bank can be create without one mandatory field.", function () {
    create_bank.createWithoutOneMandatoryField();
  });

  it("05.13. Verify that the bank creation reset button clears applied input terms.", function () {
    create_bank.createResetButtonCheck();
  });

  it("05.14. Verify that required field validation messages appear when mandatory fields are left empty.", function () {
    create_bank.createValidationMessageCheck();
  });

  it("05.15. Verify that clicking the Go Back button on the bank Create page navigates the user back to the bank List page.", function () {
    create_bank.createGoBackButtonCheck();
  });

  it("05.16. Verify successful bank creation without mandatory field.", function () {
    create_bank.createWithoutMandatoryField();
  });

  it("05.17. Verify that the grid list content successfully switches from English to Bangla.", function () {
    create_bank.gridLanguageSwitchCheck();
  });
});
