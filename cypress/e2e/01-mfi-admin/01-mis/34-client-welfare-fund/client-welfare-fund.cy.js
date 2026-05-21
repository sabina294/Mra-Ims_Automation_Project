// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/34-client-welfare-fund/client-welfare-fund.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_client_welfare_fund } from "./client-welfare-fund.po";

describe("34. Client Welfare Fund Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.mfiAdminUserId,
        d.credential.mfiAdminPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("34.01. Verify Loan welfare fund Grid List Page loads successfully", function () {
    create_client_welfare_fund.gridClientWelfareFundListPage();
  });

  it("34.02. Verify successful creation of a Loan welfare fund record by MFI-Admin role", function () {
    create_client_welfare_fund.createClientWelfareFund();
  });

  it("34.03. Verify successful approve of a new loan welfare fund record", function () {
    create_client_welfare_fund.approveClientWelfareFund();
  });

  it("34.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_client_welfare_fund.actionButtonCheck();
  });

  it("34.05. Verify successful loan welfare fund information View.", function () {
    create_client_welfare_fund.viewClientWelfareFund();
  });

  it("34.06. Verify that clicking the go back button on the client welfare fund view page redirects the user to the client welfare fund list page.", function () {
    create_client_welfare_fund.viewGoBackButton();
  });

  it("34.07. Verify Successful Search Result by Loan welfare fund Name", function () {
    create_client_welfare_fund.searchInClientWelfareFundName();
  });

  it("34.08. Verify Successful Reset of Grid List Using the Reset Button on Loan welfare fund Page.", function () {
    create_client_welfare_fund.gridResetButtonCheck();
  });

  it("34.09. Verify Successful Refresh of Grid List Using the Refresh Button on Loan welfare fund Page.", function () {
    create_client_welfare_fund.gridRefreshButtonCheck();
  });

  it("34.10. Verify the Loan welfare fund creation reset button clears all entered input values.", function () {
    create_client_welfare_fund.createResetButtonCheck();
  });

  it("34.11. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_client_welfare_fund.createValidationMessageCheck();
  });

  it("34.12. Verify validation messages appear for required fields when the approve button is clicked with empty inputs.", function () {
    create_client_welfare_fund.createApproveButtonCheck();
  });

  it("34.13. Verify that clicking the go back button on the Loan welfare fund create page redirects the user to the Loan welfare fund list page.", function () {
    create_client_welfare_fund.createGoBackButtonCheck();
  });

  it("34.14. Verify that when the user clicks the Search button on the Loan welfare fund grid page, the system redirects to the Loan welfare fund List page..", function () {
    create_client_welfare_fund.gridSearchButtonCheck();
  });

  it("34.15. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_client_welfare_fund.gridLanguageSwitchCheck();
  });
});
