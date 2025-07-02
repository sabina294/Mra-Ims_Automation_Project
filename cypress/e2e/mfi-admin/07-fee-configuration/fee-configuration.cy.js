// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mfi-admin/07-fee-configuration/fee-configuration.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_fee_configuration } from "./fee-configuration.po";

describe("07. Fee Configuration Module Test Cases ", function () {
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

  it("07.01. Verify the fee configuration list page loads without errors.", function () {
    create_fee_configuration.gridFeeConfigurationListPage();
  });

  it("07.02. Verify a new fee configuration is created successfully when all required fields are filled with valid data.", function () {
    create_fee_configuration.createFeeConfiguration();
  });

  it("07.03. Verify that a fee configuration cannot be created without a fee collection code , even if all other fields are valid.", function () {
    create_fee_configuration.createWitoutCollCode();
  });

  it("07.04. Verify that a fee configuration cannot be created without a fee type name english, even if all other fields are valid.", function () {
    create_fee_configuration.createWithoutNameEn();
  });

  it("07.05. Verify that a fee configuration cannot be created without a fee type name bangla, even if all other fields are valid.", function () {
    create_fee_configuration.createWithoutNameBn();
  });

  it("07.06. Verify that a fee configuration cannot be created without a amount, even if all other fields are valid.", function () {
    create_fee_configuration.createWithoutAmount();
  });

  it("07.07. Verify that a fee configuration cannot be created without a ledger, even if all other fields are valid.", function () {
    create_fee_configuration.createWithoutLedger();
  });

  it("07.08. Verify that a fee configuration cannot be created without a subledger, even if all other fields are valid.", function () {
    create_fee_configuration.createWithoutSubledger();
  });

  it("07.09. Verify that a fee configuration cannot be created without a status, even if all other fields are valid.", function () {
    create_fee_configuration.createWithoutStatus();
  });

  it("07.10. Verify successfully performs the action when the action button is clicked.", function () {
    create_fee_configuration.actionButtonCheck();
  });

  it("07.11. Verify the user can view all relevant details of a fee configuration, including its associated fields.", function () {
    create_fee_configuration.viewFeeConfiguration();
  });

  it("07.12. Verify that the fee configuration forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_fee_configuration.turnOffEditMode();
  });

  it("07.13. Verify the fee configuration name and description can be edited successfully.", function () {
    create_fee_configuration.editFeeConfiguration();
  });

  it("07.14. Verify the fee configuration edit reset button functions correctly.", function () {
    create_fee_configuration.editResetButton();
  });

  //   it("07.15. Verify the fee configuration edit submit button functions correctly.", function () {
  //     create_fee_configuration.editSubmitButton();
  //   });

  it("07.16. Verify that clicking the go back button on the fee configuration edit page redirects the user to the fee configuration list page.", function () {
    create_fee_configuration.editGoBackButton();
  });

  it("07.17. Verify the user can filter inactive fee configurations using the status dropdown on the fee configuration list page.", function () {
    create_fee_configuration.statusInactiveDropdownCheck();
  });

  it("07.18. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_fee_configuration.statusActiveDropdownCheck();
  });

  it("07.19. Verify the search returns correct results when searching by fee configuration name.", function () {
    create_fee_configuration.searchInFeeConfigurationName();
  });

  it("07.20. Verify the grid list resets successfully when the reset button is clicked on the fee configuration page.", function () {
    create_fee_configuration.gridResetButtonCheck();
  });

  it("07.21. Verify that the grid list is refreshed successfully when the refresh button is clicked on the fee configuration page.", function () {
    create_fee_configuration.gridRefreshButtonCheck();
  });

  it("07.22. Verify the fee configuration creation reset button clears all entered input values.", function () {
    create_fee_configuration.createResetButtonCheck();
  });

  it("07.23. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_fee_configuration.createValidationMessageCheck();
  });

  it("07.24. Verify that clicking the go back button on the fee configuration create page redirects the user to the fee configuration list page.", function () {
    create_fee_configuration.createGoBackButtonCheck();
  });

  it("07.25. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_fee_configuration.gridLanguageSwitchCheck();
  });
});
