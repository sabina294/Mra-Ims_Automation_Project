// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/05-bank/bank.cy.js --headed

import "cypress-file-upload";
import { create_bank } from "./bank.po";

describe("05. Bank Test.", function () {
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

  it("05.01. Verify the bank list page loads without errors.", function () {
    create_bank.gridBankListPage();
  });

  it("05.02. Verify a new bank is created successfully when all required fields are filled with valid data.", function () {
    create_bank.createBank();
  });

  it("05.03. Verify a new bank is created successfully when all fields are filled with valid data.", function () {
    create_bank.createAllField();
  });

  it("05.04. Verify that a bank cannot be created without filling in the mandatory field.", function () {
    create_bank.createWithoutOneMandatoryField();
  });

  it("05.05. Verify bank creation fails when mandatory fields are missing.", function () {
    create_bank.createWithoutMandatoryField();
  });

  it("05.06. Verify the user can view all relevant details of a bank, including its associated fields.", function () {
    create_bank.viewBank();
  });

  it("05.07. Verify the bank name and description can be edited successfully.", function () {
    create_bank.editBank();
  });

  it("05.08. Verify the user can filter inactive banks using the status dropdown on the bank list page.", function () {
    create_bank.statusInactiveDropdownCheck();
  });

  it("05.09. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_bank.statusActiveDropdownCheck();
  });

  it("05.10. Verify the search returns correct results when searching by bank name.", function () {
    create_bank.searchInBankName();
  });

  it("05.11. Verify the grid list resets successfully when the reset button is clicked on the bank page.", function () {
    create_bank.gridResetButtonCheck();
  });

  it("05.12. Verify that the grid list is refreshed successfully when the refresh button is clicked on the bank page.", function () {
    create_bank.gridRefreshButtonCheck();
  });

  it("05.15. Verify pagination functions as expected on the last page of the bank list.", function () {
    create_bank.paginationCheck();
  });

  it("05.15. Verify the bank creation reset button clears all entered input values.", function () {
    create_bank.createResetButtonCheck();
  });

  it("05.15. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_bank.createValidationMessageCheck();
  });

  it("05.16. Verify that clicking the go back button on the bank create page redirects the user to the bank list page.", function () {
    create_bank.createGoBackButtonCheck();
  });

  it("05.17. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_bank.gridLanguageSwitchCheck();
  });
});
