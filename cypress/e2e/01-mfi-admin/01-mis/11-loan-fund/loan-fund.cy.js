// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/11-loan-fund/loan-fund.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_fund } from "./loan-fund.po";

describe("11. Loan Fund Module Test Cases", function () {
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

  it("11.01. Verify that the Loan Fund list page loads successfully without any errors.", function () {
    create_loan_fund.gridLoanFundListPage();
  });

  it("11.02. Verify that a new Loan Fund is created successfully when all required fields are filled with valid data.", function () {
    create_loan_fund.createLoanFund();
  });

  it("11.03. Verify that a Loan Fund cannot be created without a Bank Account, even if all other fields are valid.", function () {
    create_loan_fund.createWithoutBankAccount();
  });

  it("11.04. Verify that a Loan Fund cannot be created without a Funding Organization ID, even if all other fields are valid.", function () {
    create_loan_fund.createWithoutFundingOrganizationId();
  });

  it("11.05. Verify that a Loan Fund cannot be created without an Amount, even if all other fields are valid.", function () {
    create_loan_fund.createWithoutAmount();
  });

  it("11.06. Verify that a Loan Fund cannot be created without a Status, even if all other fields are valid.", function () {
    create_loan_fund.createWithoutStatus();
  });

  it("11.07. Verify that the action button performs the expected action successfully.", function () {
    create_loan_fund.actionButtonCheck();
  });

  it("11.08. Verify that the user can view all relevant details of a Loan Fund, including associated fields.", function () {
    create_loan_fund.viewLoanFund();
  });

  it("11.09. Verify that clicking the Go Back button on the Loan Fund view page redirects the user to the Loan Fund list page.", function () {
    create_loan_fund.viewGoBackButton();
  });

  it("11.10. Verify that the Loan Fund form edit mode can be toggled on and off, and all fields are properly enabled or disabled accordingly.", function () {
    create_loan_fund.turnOffEditMode();
  });

  it("11.11. Verify that the Loan Fund edit reset button functions correctly.", function () {
    create_loan_fund.editResetButton();
  });

  it("11.12. Verify that the Loan Fund edit submit button functions correctly.", function () {
    create_loan_fund.editSubmitButton();
  });

  it("11.13. Verify that clicking the Go Back button on the Loan Fund edit page redirects the user to the Loan Fund list page.", function () {
    create_loan_fund.editGoBackButton();
  });

  it("11.14. Verify that the Loan Fund name and description can be edited successfully.", function () {
    create_loan_fund.editLoanFund();
  });

  it("11.15. Verify that inactive Loan Funds can be filtered using the status dropdown on the Loan Fund list page.", function () {
    create_loan_fund.statusInactiveDropdownCheck();
  });

  it("11.16. Verify that active Loan Funds are filtered correctly using the status dropdown.", function () {
    create_loan_fund.statusActiveDropdownCheck();
  });

  it("11.17. Verify that searching by Loan Fund name returns correct results.", function () {
    create_loan_fund.searchInLoanFundName();
  });

  it("11.18. Verify that the grid list resets successfully when the Reset button is clicked on the Loan Fund page.", function () {
    create_loan_fund.gridResetButtonCheck();
  });

  it("11.19. Verify that the grid list refreshes successfully when the Refresh button is clicked on the Loan Fund page.", function () {
    create_loan_fund.gridRefreshButtonCheck();
  });

  it("11.20. Verify that the Loan Fund creation reset button clears all entered input values.", function () {
    create_loan_fund.createResetButtonCheck();
  });

  it("11.21. Verify that validation messages appear for required fields when submitting empty inputs.", function () {
    create_loan_fund.createValidationMessageCheck();
  });

  it("11.22. Verify that clicking the Go Back button on the Loan Fund create page redirects the user to the Loan Fund list page.", function () {
    create_loan_fund.createGoBackButtonCheck();
  });

  it("11.23. Verify that clicking the Search button on the Loan Fund grid page redirects and displays the Loan Fund list correctly.", function () {
    create_loan_fund.gridSearchButtonCheck();
  });

  it("11.24. Verify that the Loan Fund list page displays the correct breadcrumb navigation.", function () {
    create_loan_fund.listBreadcrumbCheck();
  });

  it("11.25. Verify that the Loan Fund grid displays all required columns.", function () {
    create_loan_fund.gridColumnsCheck();
  });

  it("11.26. Verify that displayed Loan Fund records contain valid ID, funding organization, amount, and status values.", function () {
    create_loan_fund.gridRecordDataCheck();
  });

  it("11.27. Verify that pagination is displayed and Previous is disabled on the first page.", function () {
    create_loan_fund.firstPagePaginationCheck();
  });

  it("11.28. Verify that Add Loan Fund navigates to the creation page.", function () {
    create_loan_fund.addNavigationCheck();
  });

  it("11.29. Verify that the Loan Fund creation page displays its breadcrumb, fields, and action buttons.", function () {
    create_loan_fund.createPageFieldsCheck();
  });

  it("11.30. Verify that required and optional Loan Fund fields are marked correctly.", function () {
    create_loan_fund.requiredAndOptionalFieldsCheck();
  });

  it("11.31. Verify that Active is selected as the default status on the creation page.", function () {
    create_loan_fund.defaultStatusCheck();
  });

  it("11.32. Verify that the Status dropdown displays Active and Inactive options.", function () {
    create_loan_fund.statusOptionsCheck();
  });

  it("11.33. Verify that a Bank Account can be selected on the creation page.", function () {
    create_loan_fund.bankAccountSelectionCheck();
  });

  it("11.34. Verify that a Funding Organization can be selected on the creation page.", function () {
    create_loan_fund.fundingOrganizationSelectionCheck();
  });

  it("11.35. Verify that searching with a non-existing Loan Fund displays no records.", function () {
    create_loan_fund.searchNoResultCheck();
  });

  it("11.36. Verify that an exact Loan Fund ID search returns only matching records.", function () {
    create_loan_fund.exactSearchCheck();
  });

  it("11.37. Verify that clearing a search restores the Loan Fund list.", function () {
    create_loan_fund.clearSearchCheck();
  });

  it("11.38. Verify that the View page displays all saved Loan Fund details.", function () {
    create_loan_fund.viewDetailsCheck();
  });

  it("11.39. Verify that turning on Edit mode displays all editable Loan Fund fields.", function () {
    create_loan_fund.editModeFieldsCheck();
  });

  it("11.40. Verify that the grid list content successfully switches between English and Bangla languages.", function () {
    create_loan_fund.gridLanguageSwitchCheck();
  });
});
