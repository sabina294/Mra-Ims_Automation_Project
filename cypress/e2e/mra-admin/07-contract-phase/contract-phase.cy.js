// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/07-contract-phase/contract-phase.cy.js --headed

import "cypress-file-upload";
import { create_contract_phase } from "./contract-phase.po";

describe("07. Contract Phase Test.", function () {
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

  it("07.01. Verify the contract phase list page loads without errors.", function () {
    create_contract_phase.gridContractPhaseListPage();
  });

  it("07.02. Verify a new contract phase is created successfully when all required fields are filled with valid data.", function () {
    create_contract_phase.createContractPhase();
  });

  it("07.03. Verify check if a contract phase cannot be created when a mandatory field is missing.", function () {
    create_contract_phase.createWithoutOneMandatoryField();
  });

  it("07.04. Verify the user can view all relevant details of a contract phase, including its associated fields.", function () {
    create_contract_phase.viewContractPhase();
  });

  it("07.05. Verify successfully performs the action when the action button is clicked.", function () {
    create_contract_phase.actionButtonCheck();
  });

  it("07.06. Verify the contract phase name and description can be edited successfully.", function () {
    create_contract_phase.editContractPhase();
  });

  it("07.07. Verify the contract phase edit reset button functions correctly.", function () {
    create_contract_phase.editResetButton();
  });

  it("07.08. Verify the contract phase edit submit button functions correctly.", function () {
    create_contract_phase.editSubmitButton();
  });

  it("07.09. Verify that clicking the go back button on the contract phase  edit page redirects the user to the contract phase list page.", function () {
    create_contract_phase.editGoBackButton();
  });

  it("07.10. Verify the user can filter inactive contract phases using the status dropdown on the contract phase list page.", function () {
    create_contract_phase.statusInactiveDropdownCheck();
  });

  it("07.11. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_contract_phase.statusActiveDropdownCheck();
  });

  it("07.12. Verify the search returns correct results when searching by contract phase name.", function () {
    create_contract_phase.searchInContractPhasetName();
  });

  it("07.13. Verify the grid list resets successfully when the reset button is clicked on the contract phase page.", function () {
    create_contract_phase.gridResetButtonCheck();
  });

  it("07.14. Verify that the grid list is refreshed successfully when the refresh button is clicked on the contract phase page.", function () {
    create_contract_phase.gridRefreshButtonCheck();
  });

  it("07.15. Verify the contract phase creation reset button clears all entered input values.", function () {
    create_contract_phase.createResetButtonCheck();
  });

  it("07.16. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_contract_phase.createValidationMessageCheck();
  });

  it("07.17. Verify that clicking the go back button on the contract phase create page redirects the user to the contract phase list page.", function () {
    create_contract_phase.createGoBackButtonCheck();
  });

  it("07.18. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_contract_phase.gridLanguageSwitchCheck();
  });
});
