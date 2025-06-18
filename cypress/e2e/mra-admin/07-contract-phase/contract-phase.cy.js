// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/07-contract-phase/contract-phase.cy.js --headed

import "cypress-file-upload";
import { create_contract_phase } from "./contract-phase.po";

describe("07. Contract phase Grid list,Creation,View,Update,Inactive,Active,Search,Reset,Refresh,Without one field,Create Reset,Submit button Validation Messages,Go back and Language switch bangla Tests.", function () {
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

  it("07.01. Verify that the Contract Phase List page loads successfully.", function () {
    create_contract_phase.gridContractPhaseListPage();
  });

  it("07.02. To verify that a new Contract Phase can be successfully created when all required fields are filled with valid data by MRA-Admin role", function () {
    create_contract_phase.createContractPhase();
  });

  it("07.03. To verify that the user can successfully view the detailed information of a Contract Phase, including all the relevant fields.", function () {
    create_contract_phase.viewContractPhase();
  });

  it("07.04. To verify that the user can successfully edit an existing Contract Phase's information, including the Contract Phase Name, and Description. by MRA-Admin role", function () {
    create_contract_phase.editContractPhase();
  });

  it("07.05. To verify that the user can filter the inactive Contract Phases using the Status Dropdown on the Contract Phase List page.", function () {
    create_contract_phase.statusInactiveDropdownCheck();
  });

  it("07.06. Verify Filter Active Result by Status Dropdown", function () {
    create_contract_phase.statusActiveDropdownCheck();
  });

  it("07.07. Verify Successful Search Result by Contract Phase Name", function () {
    create_contract_phase.searchInContractPhasetName();
  });

  it("07.08. Verify Successful Reset of Grid List Using the Reset Button on Contract Phase Page.", function () {
    create_contract_phase.gridResetButtonCheck();
  });

  it("07.09. Verify Successful Refresh of Grid List Using the Refresh Button on Contract Phase Page.", function () {
    create_contract_phase.gridRefreshButtonCheck();
  });

  it("07.10. Verify check if contract phase can be create without one mandatory field.", function () {
    create_contract_phase.createWithoutOneMandatoryField();
  });

  it("07.11. Verify that the Contract Phase creation reset button clears applied input terms.", function () {
    create_contract_phase.createResetButtonCheck();
  });

  it("07.12. Verify that required field validation messages appear when mandatory fields are left empty.", function () {
    create_contract_phase.createValidationMessageCheck();
  });

  it("07.13. Verify that clicking the Go Back button on the Contract Phase Create page navigates the user back to the Contract Phase List page.", function () {
    create_contract_phase.createGoBackButtonCheck();
  });

  it("07.14. Verify that the grid list content successfully switches from English to Bangla.", function () {
    create_contract_phase.gridLanguageSwitchCheck();
  });
});
