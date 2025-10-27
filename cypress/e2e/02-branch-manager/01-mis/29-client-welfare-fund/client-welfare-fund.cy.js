// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/29-client-welfare-fund/client-welfare-fund.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_client_welfare_fund } from "./client-welfare-fund.po";

describe("29. Client Welfare Fund Module Test Cases", function () {
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

  it("29.01. Verify Loan welfare fund Grid List Page loads successfully", function () {
    create_client_welfare_fund.gridClientWelfareFundListPage();
  });

  it("29.02. Verify successful creation of a Loan welfare fund record by MFI-Admin role", function () {
    create_client_welfare_fund.createClientWelfareFund();
  });

  it("29.03. Verify successful approve of a new loan welfare fund record", function () {
    create_client_welfare_fund.approveClientWelfareFund();
  });

  it("29.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_client_welfare_fund.actionButtonCheck();
  });

  it("29.05. Verify successful loan welfare fund information View.", function () {
    create_client_welfare_fund.viewClientWelfareFund();
  });

  it("29.06. Verify editing functionality for loan welfare fund record by MFI-Admin role", function () {
    create_client_welfare_fund.editClientWelfareFund();
  });

  it("29.07. Verify Successful Search Result by Loan welfare fund Name", function () {
    create_client_welfare_fund.searchInClientWelfareFundName();
  });

  it("29.08. Verify Successful Reset of Grid List Using the Reset Button on Loan welfare fund Page.", function () {
    create_client_welfare_fund.gridResetButtonCheck();
  });

  it("29.09.Verify Successful Refresh of Grid List Using the Refresh Button on Loan welfare fund Page.", function () {
    create_client_welfare_fund.gridRefreshButtonCheck();
  });

  it("29.10. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_client_welfare_fund.gridLanguageSwitchCheck();
  });
});
