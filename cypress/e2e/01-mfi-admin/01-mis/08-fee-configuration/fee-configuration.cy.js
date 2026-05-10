// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/08-fee-configuration/fee-configuration.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_fee_configuration } from "./fee-configuration.po";

describe("08. Fee Configuration Module Test Cases ", function () {
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

  it("08.01. Verify that the Fee Configuration list page loads successfully without any errors.", function () {
    create_fee_configuration.gridFeeConfigurationListPage();
  });

  it("08.02. Verify that a new Fee Configuration is created successfully when all required fields are provided with valid data.", function () {
    create_fee_configuration.createFeeConfiguration();
  });

  it("08.03. Verify that a Fee Configuration cannot be created without a Fee Collection Code, even if all other fields are valid.", function () {
    create_fee_configuration.createWitoutCollCode();
  });

  it("08.04. Verify that a Fee Configuration cannot be created without a Fee Type Name (English), even if all other fields are valid.", function () {
    create_fee_configuration.createWithoutNameEn();
  });

  it("08.05. Verify that a Fee Configuration cannot be created without a Fee Type Name (Bangla), even if all other fields are valid.", function () {
    create_fee_configuration.createWithoutNameBn();
  });

  it("08.06. Verify that a Fee Configuration cannot be created without an Amount, even if all other fields are valid.", function () {
    create_fee_configuration.createWithoutAmount();
  });

  it("08.07. Verify that a Fee Configuration cannot be created without a Ledger, even if all other fields are valid.", function () {
    create_fee_configuration.createWithoutLedger();
  });

  it("08.08. Verify that a Fee Configuration cannot be created without a Subledger, even if all other fields are valid.", function () {
    create_fee_configuration.createWithoutSubledger();
  });

  it("08.09. Verify that a Fee Configuration cannot be created without a Status, even if all other fields are valid.", function () {
    create_fee_configuration.createWithoutStatus();
  });

  it("08.10. Verify that the action button works correctly when clicked.", function () {
    create_fee_configuration.actionButtonCheck();
  });

  it("08.11. Verify that the user can view all relevant details of a Fee Configuration, including all associated fields.", function () {
    create_fee_configuration.viewFeeConfiguration();
  });

  it("08.12. Verify that clicking the Go Back button on the Fee Configuration view page redirects the user to the list page.", function () {
    create_fee_configuration.viewGoBackButton();
  });

  it("08.13. Verify that edit mode for the Fee Configuration form can be toggled on and off, and all fields return to read-only mode when disabled.", function () {
    create_fee_configuration.turnOffEditMode();
  });

  it("08.14. Verify that the Fee Configuration name and description can be edited successfully.", function () {
    create_fee_configuration.editFeeConfiguration();
  });

  it("08.15. Verify that the Fee Configuration edit reset button functions correctly.", function () {
    create_fee_configuration.editResetButton();
  });

  it("08.16. Verify that the Fee Configuration edit submit button functions correctly.", function () {
    create_fee_configuration.editSubmitButton();
  });

  it("08.17. Verify that clicking the Go Back button on the Fee Configuration edit page redirects the user to the list page.", function () {
    create_fee_configuration.editGoBackButton();
  });

  it("08.18. Verify that inactive Fee Configurations can be filtered correctly using the Status dropdown.", function () {
    create_fee_configuration.statusInactiveDropdownCheck();
  });

  it("08.19. Verify that active Fee Configurations are filtered correctly using the Status dropdown.", function () {
    create_fee_configuration.statusActiveDropdownCheck();
  });

  it("08.20. Verify that searching by Fee Configuration name returns correct results.", function () {
    create_fee_configuration.searchInFeeConfigurationName();
  });

  it("08.21. Verify that the grid list resets successfully when the Reset button is clicked.", function () {
    create_fee_configuration.gridResetButtonCheck();
  });

  it("08.22. Verify that the grid list refreshes successfully when the Refresh button is clicked.", function () {
    create_fee_configuration.gridRefreshButtonCheck();
  });

  it("08.23. Verify that the Create Fee Configuration reset button clears all input fields successfully.", function () {
    create_fee_configuration.createResetButtonCheck();
  });

  it("08.24. Verify that validation messages are displayed for required fields when submitting empty inputs.", function () {
    create_fee_configuration.createValidationMessageCheck();
  });

  it("08.25. Verify that clicking the Go Back button on the Fee Configuration create page redirects the user to the list page.", function () {
    create_fee_configuration.createGoBackButtonCheck();
  });

  it("08.26. Verify that clicking the Search button on the Fee Configuration grid page redirects to the list page.", function () {
    create_fee_configuration.gridSearchButtonCheck();
  });

  it("08.27. Verify that the grid list content correctly switches between English and Bangla languages.", function () {
    create_fee_configuration.gridLanguageSwitchCheck();
  });
});
