// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/30-client-welfare-fund/client-welfare-fund.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_client_welfare_fund } from "./client-welfare-fund.po";

describe("30. Client Welfare Fund Module Test Cases", function () {
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

  it("30.01. Verify Loan welfare fund Grid List Page loads successfully", function () {
    create_client_welfare_fund.gridClientWelfareFundListPage();
  });

  it("30.02. Verify the client welfare fund creation reset button clears all entered input values.", function () {
    create_client_welfare_fund.createResetButtonCheck();
  });

  it("30.03. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_client_welfare_fund.createValidationMessageCheck();
  });

  it("30.04. Verify that clicking the go back button on the client welfare fund create page redirects the user to the client welfare fund list page.", function () {
    create_client_welfare_fund.createGoBackButtonCheck();
  });

  it("30.05. Verify successful creation of a Loan welfare fund record by MFI-Admin role", function () {
    create_client_welfare_fund.createClientWelfareFund();
  });

  it("30.06. Verify successful approve of a new loan welfare fund record", function () {
    create_client_welfare_fund.approveClientWelfareFund();
  });

  it("30.07. Verify successfully performs the action when the action button is clicked.", function () {
    create_client_welfare_fund.actionButtonCheck();
  });

  it("30.08. Verify successful loan welfare fund information View.", function () {
    create_client_welfare_fund.viewClientWelfareFund();
  });

  it("30.09. Verify Successful Search Result by Loan welfare fund Name", function () {
    create_client_welfare_fund.searchInClientWelfareFundName();
  });

  it("30.10. Verify Successful Reset of Grid List Using the Reset Button on Loan welfare fund Page.", function () {
    create_client_welfare_fund.gridResetButtonCheck();
  });

  it("30.11. Verify Successful Refresh of Grid List Using the Refresh Button on Loan welfare fund Page.", function () {
    create_client_welfare_fund.gridRefreshButtonCheck();
  });

  it("30.12. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_client_welfare_fund.gridLanguageSwitchCheck();
  });
});
