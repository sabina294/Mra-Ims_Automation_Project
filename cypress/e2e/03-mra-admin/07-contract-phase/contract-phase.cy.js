// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/07-contract-phase/contract-phase.cy.js --headed

import "cypress-file-upload";
import { create_contract_phase } from "./contract-phase.po";

describe("07. Contract Phase Module Test Cases.", function () {
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

  it("07.01. Verify that the Contract Phase list page loads successfully without any errors.", function () {
    create_contract_phase.gridContractPhaseListPage();
  });

  it("07.02. Verify that a new Contract Phase is created successfully when all required fields are filled with valid data.", function () {
    create_contract_phase.createContractPhase();
  });

  it("07.03. Verify that the Contract Phase cannot be created when the English name field is left empty.", function () {
    create_contract_phase.createWithoutNameEn();
  });

  it("07.04. Verify that the Contract Phase cannot be created when the Bangla name field is left empty.", function () {
    create_contract_phase.createWithoutNameBn();
  });

  it("07.05. Verify that the Contract Phase cannot be created when the status field is not selected.", function () {
    create_contract_phase.createWithoutStatus();
  });

  it("07.06. Verify that the Contract Phase cannot be created when any mandatory field is missing.", function () {
    create_contract_phase.createWithoutOneMandatoryField();
  });

  it("07.07. Verify that the action button functions correctly when clicked.", function () {
    create_contract_phase.actionButtonCheck();
  });

  it("07.08. Verify that the user can view all details of a Contract Phase successfully.", function () {
    create_contract_phase.viewContractPhase();
  });

  it("07.09. Verify that clicking the Go Back button on the Contract Phase view page redirects to the Contract Phase list page.", function () {
    create_contract_phase.viewGoBackButton();
  });

  it("07.10. Verify that the Contract Phase edit mode can be toggled on and off and fields become enabled or disabled accordingly.", function () {
    create_contract_phase.turnOffOnEditMode();
  });

  it("07.11. Verify that the Contract Phase name and description can be edited successfully.", function () {
    create_contract_phase.editContractPhase();
  });

  it("07.12. Verify that the Contract Phase edit reset button resets all modified fields correctly.", function () {
    create_contract_phase.editResetButton();
  });

  it("07.13. Verify that the Contract Phase edit submit button updates the data successfully.", function () {
    create_contract_phase.editSubmitButton();
  });

  it("07.14. Verify that clicking the Go Back button on the Contract Phase edit page redirects to the Contract Phase list page.", function () {
    create_contract_phase.editGoBackButton();
  });

  it("07.15. Verify that inactive Contract Phases are filtered correctly using the status dropdown.", function () {
    create_contract_phase.statusInactiveDropdownCheck();
  });

  it("07.16. Verify that active Contract Phases are filtered correctly using the status dropdown.", function () {
    create_contract_phase.statusActiveDropdownCheck();
  });

  it("07.17. Verify that the search functionality returns correct results when searching by Contract Phase name.", function () {
    create_contract_phase.searchInContractPhasetName();
  });

  it("07.18. Verify that clicking the reset button clears all applied filters and resets the grid list.", function () {
    create_contract_phase.gridResetButtonCheck();
  });

  it("07.19. Verify that clicking the refresh button reloads the Contract Phase grid list successfully.", function () {
    create_contract_phase.gridRefreshButtonCheck();
  });

  it("07.20. Verify that the Contract Phase creation reset button clears all entered input values.", function () {
    create_contract_phase.createResetButtonCheck();
  });

  it("07.21. Verify that validation messages are displayed for required fields when submitting the form with empty inputs.", function () {
    create_contract_phase.createValidationMessageCheck();
  });

  it("07.22. Verify that clicking the Go Back button on the Contract Phase create page redirects to the Contract Phase list page.", function () {
    create_contract_phase.createGoBackButtonCheck();
  });

  it("07.23. Verify that when the user clicks the Search button on the Contract Phase grid page, the system redirects to the Contract Phase List page..", function () {
    create_contract_phase.gridSearchButtonCheck();
  });

  it("07.23. Verify that the Contract Phase grid list content switches correctly between English and Bangla.", function () {
    create_contract_phase.gridLanguageSwitchCheck();
  });
});