// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/22-savings-account-closure-management/savings-account-closure.cy.js --browser chrome --headed
import { savings_account_closure } from "./savings-account-closure.po";

describe("22. Savings Account Closure Management Module Test Cases", function () {
  before(() => {
    cy.fixture(Cypress.env("TEST_DATA")).then((data) => {
      cy.login(Cypress.env("BASE_URL"), data.credential.fieldOfficerUserId, data.credential.fieldOfficerPassword);
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });
2
  it("22.01. Verify Savings Account Closure: the Field Officer can open the list using the Savings Account submenu.", function () {
    savings_account_closure.gridListPage();
  });

  it("22.02. Verify Savings Account Closure: the list displays the correct breadcrumb.", function () {
    savings_account_closure.breadcrumbCheck();
  });

  it("22.03. Verify Savings Account Closure: all required grid columns are visible.", function () {
    savings_account_closure.columnsCheck();
  });

  it("22.04. Verify Savings Account Closure: records contain valid identifiers and closing amounts or show No Data.", function () {
    savings_account_closure.recordsCheck();
  });

  it("22.05. Verify Savings Account Closure: office, status and search controls are visible.", function () {
    savings_account_closure.controlsCheck();
  });

  it("22.06. Verify Savings Account Closure: a non-existing search displays No Data.", function () {
    savings_account_closure.noResultSearchCheck();
  });

  it("22.07. Verify Savings Account Closure: Reset clears search and restores the list state.", function () {
    savings_account_closure.resetSearchCheck();
  });

  it("22.08. Verify Savings Account Closure: Refresh reloads the closure list.", function () {
    savings_account_closure.refreshCheck();
  });

  it("22.09. Verify Savings Account Closure: Create Savings Encashment is visible and enabled.", function () {
    savings_account_closure.createButtonCheck();
  });

  it("22.10. Verify Savings Account Closure: the language can be switched from English to Bangla.", function () {
    savings_account_closure.languageSwitchCheck();
  });

});
