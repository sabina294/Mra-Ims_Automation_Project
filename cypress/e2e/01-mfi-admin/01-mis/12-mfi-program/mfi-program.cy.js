// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/12-mfi-program/mfi-program.cy.js --browser chrome --headed


import "cypress-file-upload";
import { create_mfi_program } from "./mfi-program.po";

describe("12. MFI program Module Test Cases", function () {
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

  it("12.01. Verify the mfi program list page loads without errors.", function () {
    create_mfi_program.gridMfiProgramListPage();
  });

  it("12.02. Verify a new mfi program is created successfully when all required fields are filled with valid data.", function () {
    create_mfi_program.createMfiProgram();
  });

  it("12.03. Verify that a mfi program cannot be created without a mfi program name english, even if all other fields are valid.", function () {
    create_mfi_program.createWithoutNameEn();
  });

  it("12.04. Verify that an MFI Program can be created without the optional Bangla name when all required fields are valid.", function () {
    create_mfi_program.createWithoutNameBn();
  });

  it("12.05. Verify that a mfi program cannot be created without a short name, even if all other fields are valid.", function () {
    create_mfi_program.createWithoutShortName();
  });

  it("12.06. Verify that a mfi program cannot be created without a funding category, even if all other fields are valid.", function () {
    create_mfi_program.createWithoutFundingCategory();
  });

  it("12.07. Verify that a mfi program cannot be created without a loan fund, even if all other fields are valid.", function () {
    create_mfi_program.createWithoutLoanFund();
  });

  it("12.08. Verify that a mfi program cannot be created without status, even if all other fields are valid.", function () {
    create_mfi_program.createWithoutStatus();
  });

  it("12.09. Verify successfully performs the action when the action button is clicked.", function () {
    create_mfi_program.actionButtonCheck();
  });

  it("12.10. Verify the user can view all relevant details of a mfi program, including its associated fields.", function () {
    create_mfi_program.viewMfiProgram();
  });

  it("12.11. Verify that clicking the go back button on the mfi program view page redirects the user to the mfi program list page.", function () {
    create_mfi_program.viewGoBackButton();
  });

  it("12.12. Verify that the mfi program forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_mfi_program.turnOffEditMode();
  });

  it("12.13. Verify the mfi program name and description can be edited successfully.", function () {
    create_mfi_program.editMfiProgram();
  });

  it("12.14. Verify the mfi program edit reset button functions correctly.", function () {
    create_mfi_program.editResetButton();
  });

  it("12.15. Verify the mfi program edit submit button functions correctly.", function () {
    create_mfi_program.editSubmitButton();
  });

  it("12.16. Verify that clicking the go back button on the mfi program edit page redirects the user to the mfi program list page.", function () {
    create_mfi_program.editGoBackButton();
  });

  it("12.17. Verify the user can filter inactive mfi programs using the status dropdown on the mfi program list page.", function () {
    create_mfi_program.statusInactiveDropdownCheck();
  });

  it("12.18. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_mfi_program.statusActiveDropdownCheck();
  });

  it("12.19. Verify the search returns correct results when searching by mfi program name.", function () {
    create_mfi_program.searchInMfiProgramName();
  });

  it("12.20. Verify the grid list resets successfully when the reset button is clicked on the mfi program page.", function () {
    create_mfi_program.gridResetButtonCheck();
  });

  it("12.21. Verify that the grid list is refreshed successfully when the refresh button is clicked on the mfi program page.", function () {
    create_mfi_program.gridRefreshButtonCheck();
  });

  it("12.22. Verify the mfi program creation reset button clears all entered input values.", function () {
    create_mfi_program.createResetButtonCheck();
  });

  it("12.23. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_mfi_program.createValidationMessageCheck();
  });

  it("12.24. Verify that clicking the go back button on the mfi program create page redirects the user to the mfi program list page.", function () {
    create_mfi_program.createGoBackButtonCheck();
  });

  it("12.25. Verify that when the user clicks the Search button on the mfi program grid page, the system redirects to the mfi program List page..", function () {
    create_mfi_program.gridSearchButtonCheck();
  });

  it("12.26. Verify that the MFI Program list page displays the correct breadcrumb navigation.", function () {
    create_mfi_program.listBreadcrumbCheck();
  });

  it("12.27. Verify that the MFI Program grid displays all required columns.", function () {
    create_mfi_program.gridColumnsCheck();
  });

  it("12.28. Verify that displayed MFI Program records contain valid ID, English name, short name, funding category, and status.", function () {
    create_mfi_program.gridRecordDataCheck();
  });

  it("12.29. Verify that pagination is displayed and Previous is disabled on the first page.", function () {
    create_mfi_program.firstPagePaginationCheck();
  });

  it("12.30. Verify that Add MFI Program navigates to the creation page.", function () {
    create_mfi_program.addNavigationCheck();
  });

  it("12.31. Verify that the MFI Program creation page displays its breadcrumb, fields, and action buttons.", function () {
    create_mfi_program.createPageFieldsCheck();
  });

  it("12.32. Verify that required and optional MFI Program fields are marked correctly.", function () {
    create_mfi_program.requiredAndOptionalFieldsCheck();
  });

  it("12.33. Verify that Active is selected as the default status on the creation page.", function () {
    create_mfi_program.defaultStatusCheck();
  });

  it("12.34. Verify that the Status dropdown displays Active and Inactive options.", function () {
    create_mfi_program.statusOptionsCheck();
  });

  it("12.35. Verify that a Funding Category can be selected on the creation page.", function () {
    create_mfi_program.fundingCategorySelectionCheck();
  });

  it("12.36. Verify that a Loan Fund can be selected on the creation page.", function () {
    create_mfi_program.loanFundSelectionCheck();
  });

  it("12.37. Verify that searching with a non-existing MFI Program displays no records.", function () {
    create_mfi_program.searchNoResultCheck();
  });

  it("12.38. Verify that an exact English-name search returns only matching MFI Program records.", function () {
    create_mfi_program.exactSearchCheck();
  });

  it("12.39. Verify that clearing a search restores the MFI Program list.", function () {
    create_mfi_program.clearSearchCheck();
  });

  it("12.40. Verify that the View page displays all saved MFI Program details.", function () {
    create_mfi_program.viewDetailsCheck();
  });

  it("12.41. Verify that turning on Edit mode displays all editable MFI Program fields.", function () {
    create_mfi_program.editModeFieldsCheck();
  });

  it("12.42. Verify that the grid list content changes correctly from English to Bangla.", function () {
    create_mfi_program.gridLanguageSwitchCheck();
  });
});
