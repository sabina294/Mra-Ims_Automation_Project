// npx cypress open
// npm run auto
// npm run dev

import "cypress-file-upload";
import { create_loan_type } from "./loan-type.po";

describe("10. Loan type Grid list,Creation,View,Update,Inactive,Active,Search,Reset and Refresh Tests.", function () {
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

  it("10.01. Verify that the Loan Type List page loads successfully.", function () {
    create_loan_type.gridLoanTypeListPage();
  });

  it("10.02. To verify that a new Loan Type can be successfully created when all required fields are filled with valid data.", function () {
    create_loan_type.createLoanType();
  });

  it("10.03. To verify that the user can successfully edit an existing Loan Type information, including the Loan Type Name, and Description..", function () {
    create_loan_type.viewLoanType();
  });

  it("10.04. should update the Loan Type with valid information by MRA-Admin role", function () {
    create_loan_type.editLoanType();
  });

  it("10.05. To verify that the user can filter the inactive Loan Types using the Status Dropdown on the Loan Type List page.", function () {
    create_loan_type.statusInactiveDropdownCheck();
  });

  it("10.06. Verify Filter Active Result by Status Dropdown", function () {
    create_loan_type.statusActiveDropdownCheck();
  });

  it("10.07. Verify Successful Search Result by Loan Type Name", function () {
    create_loan_type.searchInLoanTypeName();
  });

  it("10.08. Verify Successful Reset of Grid List Using the Reset Button on Loan Type Page.", function () {
    create_loan_type.gridResetButtonCheck();
  });

  it("10.09. Verify Successful Refresh of Grid List Using the Refresh Button on Loan Type Page.", function () {
    create_loan_type.gridRefreshButtonCheck();
  });
});
