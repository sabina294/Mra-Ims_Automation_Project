// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/08-fee-configuration/fee-configuration.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_fee_configuration } from "./fee-configuration.po";

describe("08. Fee Configuration Module Test Cases", function () {
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

  it("08.01. Verify that the fee configuration list page loads successfully without any errors.", function () {
    create_fee_configuration.gridFeeConfigurationListPage();
  });

  it("08.02. Verify that a new fee configuration is created successfully when all required fields are filled with valid data.", function () {
    create_fee_configuration.createFeeConfiguration();
  });

  it("08.03. Verify that a fee configuration cannot be created without entering a fee collection code, even when all other fields contain valid data.", function () {
    create_fee_configuration.createWitoutCollCode();
  });

  it("08.04. Verify that a fee configuration cannot be created without entering the fee type name in English, even when all other fields contain valid data.", function () {
    create_fee_configuration.createWithoutNameEn();
  });

  it("08.05. Verify that a fee configuration cannot be created without entering the fee type name in Bangla, even when all other fields contain valid data.", function () {
    create_fee_configuration.createWithoutNameBn();
  });

  it("08.06. Verify that a fee configuration cannot be created without entering an amount, even when all other fields contain valid data.", function () {
    create_fee_configuration.createWithoutAmount();
  });

  it("08.07. Verify that a fee configuration cannot be created without selecting a ledger, even when all other fields contain valid data.", function () {
    create_fee_configuration.createWithoutLedger();
  });

  it("08.08. Verify that a fee configuration cannot be created without selecting a subledger, even when all other fields contain valid data.", function () {
    create_fee_configuration.createWithoutSubledger();
  });

  it("08.09. Verify that a fee configuration cannot be created without selecting a status, even when all other fields contain valid data.", function () {
    create_fee_configuration.createWithoutStatus();
  });

  it("08.10. Verify that the action button performs the expected action successfully when clicked.", function () {
    create_fee_configuration.actionButtonCheck();
  });

  it("08.11. Verify that the user can view all relevant details of a fee configuration, including its associated information.", function () {
    create_fee_configuration.viewFeeConfiguration();
  });

  it("08.12. Verify that clicking the Go Back button on the fee configuration view page redirects the user to the fee configuration list page.", function () {
    create_fee_configuration.viewGoBackButton();
  });

  it("08.13. Verify that edit mode on the fee configuration form can be toggled on and off, and all fields return to view-only mode when disabled.", function () {
    create_fee_configuration.turnOffEditMode();
  });

  it("08.14. Verify that the fee configuration name and description can be edited successfully.", function () {
    create_fee_configuration.editFeeConfiguration();
  });

  it("08.15. Verify that the Reset button on the fee configuration edit page clears all modified values correctly.", function () {
    create_fee_configuration.editResetButton();
  });

  it("08.16. Verify that the Submit button on the fee configuration edit page updates the data successfully.", function () {
    create_fee_configuration.editSubmitButton();
  });

  it("08.17. Verify that clicking the Go Back button on the fee configuration edit page redirects the user to the fee configuration list page.", function () {
    create_fee_configuration.editGoBackButton();
  });

  it("08.18. Verify that inactive fee configurations can be filtered correctly using the status dropdown on the fee configuration list page.", function () {
    create_fee_configuration.statusInactiveDropdownCheck();
  });

  it("08.19. Verify that active fee configurations are filtered correctly using the status dropdown on the fee configuration list page.", function () {
    create_fee_configuration.statusActiveDropdownCheck();
  });

  it("08.20. Verify that the search functionality returns correct results when searching by fee configuration name.", function () {
    create_fee_configuration.searchInFeeConfigurationName();
  });

  it("08.21. Verify that the grid list is reset successfully when the Reset button is clicked on the fee configuration page.", function () {
    create_fee_configuration.gridResetButtonCheck();
  });

  it("08.22. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the fee configuration page.", function () {
    create_fee_configuration.gridRefreshButtonCheck();
  });

  it("08.23. Verify that the Reset button on the fee configuration creation page clears all entered input values.", function () {
    create_fee_configuration.createResetButtonCheck();
  });

  it("08.24. Verify that validation messages are displayed for all required fields when the Submit button is clicked with empty inputs.", function () {
    create_fee_configuration.createValidationMessageCheck();
  });

  it("08.25. Verify that clicking the Go Back button on the fee configuration creation page redirects the user to the fee configuration list page.", function () {
    create_fee_configuration.createGoBackButtonCheck();
  });

  it("08.26. Verify that clicking the Search button on the fee configuration grid page displays the correct filtered results.", function () {
    create_fee_configuration.gridSearchButtonCheck();
  });

  it("08.27. Verify that the Fee Configuration List page displays the correct breadcrumb navigation.", function () {
    create_fee_configuration.listBreadcrumbCheck();
  });

  it("08.28. Verify that the Fee Configuration grid displays all required columns.", function () {
    create_fee_configuration.gridColumnsCheck();
  });

  it("08.29. Verify that displayed fee configuration records contain valid code, amount, and status values.", function () {
    create_fee_configuration.gridRecordDataCheck();
  });

  it("08.30. Verify that pagination is displayed and Previous is disabled on the first page.", function () {
    create_fee_configuration.firstPagePaginationCheck();
  });

  it("08.31. Verify that Add Fee Configuration navigates to the creation page.", function () {
    create_fee_configuration.addFeeConfigurationNavigationCheck();
  });

  it("08.32. Verify that the Fee Configuration Creation page displays its breadcrumb and all form fields.", function () {
    create_fee_configuration.createPageFieldsCheck();
  });

  it("08.33. Verify that required and optional Fee Configuration fields are marked correctly.", function () {
    create_fee_configuration.requiredAndOptionalFieldsCheck();
  });

  it("08.34. Verify that Active is selected as the default status on the creation page.", function () {
    create_fee_configuration.defaultStatusCheck();
  });

  it("08.35. Verify that the Status dropdown displays Active and Inactive options.", function () {
    create_fee_configuration.statusOptionsCheck();
  });

  it("08.36. Verify that a ledger can be selected on the Fee Configuration Creation page.", function () {
    create_fee_configuration.ledgerSelectionCheck();
  });

  it("08.37. Verify that searching with a non-existing fee name displays no records.", function () {
    create_fee_configuration.searchNoResultCheck();
  });

  it("08.38. Verify that an exact fee-name search returns only matching records.", function () {
    create_fee_configuration.exactSearchCheck();
  });

  it("08.39. Verify that clearing a fee-name search restores the Fee Configuration list.", function () {
    create_fee_configuration.clearSearchCheck();
  });

  it("08.40. Verify that the View page displays all saved Fee Configuration details.", function () {
    create_fee_configuration.viewDetailsCheck();
  });

  it("08.41. Verify that turning on Edit mode displays editable Fee Configuration fields.", function () {
    create_fee_configuration.editModeFieldsCheck();
  });

  it("08.42. Verify that the grid list content updates correctly when switching the language from English to Bangla.", function () {
    create_fee_configuration.gridLanguageSwitchCheck();
  });
});
