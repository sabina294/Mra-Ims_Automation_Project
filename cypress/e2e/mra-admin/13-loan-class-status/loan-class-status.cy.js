// npx cypress run --spec cypress/e2e/mra-admin/13-loan-class-status/loan-class-status.cy.js --browser chrome --headed --reporter mochawesome

import "cypress-file-upload";
import { create_loan_class_status } from "./loan-class-status.po";

describe("13. Loan class status Grid list,Creation,View,Update,Inactive,Active,Search,Reset and Refresh Tests.", function () {
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

  it("13.01. Verify that the Loan Class Status List page loads successfully.", function () {
    create_loan_class_status.gridLoanClassStatusListPage();
  });

  it("13.02. To verify that a new Loan Class Status can be successfully created when all required fields are filled with valid data.", function () {
    create_loan_class_status.createLoanClassStatus();
  });

  it("13.03. To verify that the user can successfully edit an existing Loan Class Status information, including the Loan Class Status Name, and Description..", function () {
    create_loan_class_status.viewLoanClassStatus();
  });

  it("13.04. should update the Loan Class Status with valid information by MRA-Admin role", function () {
    create_loan_class_status.editLoanClassStatus();
  });

  it("13.05. To verify that the user can filter the inactive Loan Class Statuss using the Status Dropdown on the Loan Class Status List page.", function () {
    create_loan_class_status.statusInactiveDropdownCheck();
  });

  it("13.06. Verify Filter Active Result by Status Dropdown", function () {
    create_loan_class_status.statusActiveDropdownCheck();
  });

  it("13.07. Verify Successful Search Result by Loan Class Status Name", function () {
    create_loan_class_status.searchInPaymentMethodName();
  });

  it("13.08. Verify Successful Reset of Grid List Using the Reset Button on Loan Class Status Page.", function () {
    create_loan_class_status.gridResetButtonCheck();
  });

  it("13.09. Verify Successful Refresh of Grid List Using the Refresh Button on Loan Class Status Page.", function () {
    create_loan_class_status.gridRefreshButtonCheck();
  });
});
