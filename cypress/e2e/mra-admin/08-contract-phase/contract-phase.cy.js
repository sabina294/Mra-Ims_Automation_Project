// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/08-contract-phase/contract-phase.cy.js --headed

import "cypress-file-upload";
import { create_contract_phase } from "./contract-phase.po";

describe("08. Contract phase Grid list,Creation,View,Update,Inactive,Active,Search,Reset,Refresh,create Reset,Validation Messages and Go back Tests.", function () {
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

  it("08.01. Verify that the Contract Phase List page loads successfully.", function () {
    create_contract_phase.gridContractPhaseListPage();
  });

  it("08.02. To verify that a new Contract Phase can be successfully created when all required fields are filled with valid data by MRA-Admin role", function () {
    create_contract_phase.createContractPhase();
  });

  it("08.03. To verify that the user can successfully view the detailed information of a Contract Phase, including all the relevant fields.", function () {
    create_contract_phase.viewContractPhase();
  });

  it("08.04. To verify that the user can successfully edit an existing Contract Phase's information, including the Contract Phase Name, and Description. by MRA-Admin role", function () {
    create_contract_phase.editContractPhase();
  });

  it("08.05. To verify that the user can filter the inactive Contract Phases using the Status Dropdown on the Contract Phase List page.", function () {
    create_contract_phase.statusInactiveDropdownCheck();
  });

  it("08.06. Verify Filter Active Result by Status Dropdown", function () {
    create_contract_phase.statusActiveDropdownCheck();
  });

  it("08.07. Verify Successful Search Result by Contract Phase Name", function () {
    create_contract_phase.searchInContractPhasetName();
  });

  it("08.08. Verify Successful Reset of Grid List Using the Reset Button on Contract Phase Page.", function () {
    create_contract_phase.gridResetButtonCheck();
  });

  it("08.09. Verify Successful Refresh of Grid List Using the Refresh Button on Contract Phase Page.", function () {
    create_contract_phase.gridRefreshButtonCheck();
  });

  it("08.10. Verify that the Contract Phase creation reset button clears applied input terms.", function () {
    create_contract_phase.createResetButtonCheck();
  });

  it("08.11. Verify that required field validation messages appear when mandatory fields are left empty.", function () {
    create_contract_phase.createValidationMessageCheck();
  });

  it("08.12. Verify that clicking the Go Back button on the Contract Phase Create page navigates the user back to the Contract Phase List page.", function () {
    create_contract_phase.createGoBackButtonCheck();
  });
});
