// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/33-client-welfare-fund/client-welfare-fund.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_client_welfare_fund } from "./client-welfare-fund.po";

describe("33. Client Welfare Fund Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.branchManagerUserId,
        d.credential.branchManagerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("33.01. Verify that the Loan Welfare Fund grid list page loads successfully", function () {
    create_client_welfare_fund.gridClientWelfareFundListPage();
  });

  it("33.02. Verify that the reset button clears all input fields on the create Loan Welfare Fund page", function () {
    create_client_welfare_fund.createResetButtonCheck();
  });

  it("33.03. Verify that validation messages appear when required fields are submitted empty", function () {
    create_client_welfare_fund.createValidationMessageCheck();
  });

  it("33.04. Verify that the Go Back button redirects to the Loan Welfare Fund list page", function () {
    create_client_welfare_fund.createGoBackButtonCheck();
  });

  it("33.05. Verify successful creation of a Loan Welfare Fund record by MFI Admin", function () {
    create_client_welfare_fund.createClientWelfareFund();
  });

  it("33.06. Verify successful approval of a newly created Loan Welfare Fund record", function () {
    create_client_welfare_fund.approveClientWelfareFund();
  });

  it("33.07. Verify that the action button performs the expected operations successfully", function () {
    create_client_welfare_fund.actionButtonCheck();
  });

  it("33.08. Verify that Loan Welfare Fund details can be viewed successfully", function () {
    create_client_welfare_fund.viewClientWelfareFund();
  });

  it("33.09. Verify that search works correctly by Loan Welfare Fund name", function () {
    create_client_welfare_fund.searchInClientWelfareFundName();
  });

  it("33.10. Verify that the reset button clears filters on the grid list page", function () {
    create_client_welfare_fund.gridResetButtonCheck();
  });

  it("33.11. Verify that the refresh button reloads the grid list successfully", function () {
    create_client_welfare_fund.gridRefreshButtonCheck();
  });

  it("33.12. Verify that clicking the search button navigates correctly to the Loan Welfare Fund list page", function () {
    create_client_welfare_fund.gridSearchButtonCheck();
  });

  it("33.13. Verify that grid content language switches correctly between English and Bangla", function () {
    create_client_welfare_fund.gridLanguageSwitchCheck();
  });

});