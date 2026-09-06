// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/07-bank-account/bank-account.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_bank_account } from "./bank-account.po";

describe("07. Bank Account Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.branchManagerUserId,
        d.credential.branchManagerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });
  it("07.01. Verify that the bank account list page loads successfully without any errors.", function () {
    create_bank_account.gridBankAccountListPage();
  });

  it("07.02. Verify that a new bank account is created successfully when all required fields are filled with valid data.", function () {
    create_bank_account.createBankAccount();
  });

  it("07.03. Verify that a bank account cannot be created without selecting a bank, even when all other fields contain valid data.", function () {
    create_bank_account.createWithoutBank();
  });

  it("07.04. Verify that a bank account cannot be created without selecting a bank branch, even when all other fields contain valid data.", function () {
    create_bank_account.createWithoutBankBranch();
  });

  it("07.05. Verify that a bank account cannot be created without entering the account name in English, even when all other fields contain valid data.", function () {
    create_bank_account.createWithoutNameEn();
  });

  it("07.06. Verify that a bank account cannot be created without entering the account name in Bangla, even when all other fields contain valid data.", function () {
    create_bank_account.createWithoutNameBn();
  });

  it("07.07. Verify that a bank account cannot be created without selecting an account type, even when all other fields contain valid data.", function () {
    create_bank_account.createWithoutAccType();
  });

  it("07.08. Verify that a bank account cannot be created without entering an account number, even when all other fields contain valid data.", function () {
    create_bank_account.createWithoutAccNumber();
  });

  it("07.09. Verify that a bank account cannot be created without selecting a status, even when all other fields contain valid data.", function () {
    create_bank_account.createWithoutStatus();
  });

  it("07.10. Verify that the action button performs the expected action successfully when clicked.", function () {
    create_bank_account.actionButtonCheck();
  });

  it("07.11. Verify that the user can view all relevant details of a bank account, including its associated information.", function () {
    create_bank_account.viewBankAccount();
  });

  it("07.12. Verify that clicking the Go Back button on the bank account view page redirects the user to the bank account list page.", function () {
    create_bank_account.viewGoBackButton();
  });

  it("07.13. Verify that edit mode on the bank account form can be toggled on and off, and all fields return to view-only mode when disabled.", function () {
    create_bank_account.turnOffEditMode();
  });

  it("07.14. Verify that the bank account name and description can be edited successfully.", function () {
    create_bank_account.editBankAccount();
  });

  it("07.15. Verify that the Reset button on the bank account edit page clears all modified values correctly.", function () {
    create_bank_account.editResetButton();
  });

  it("07.16. Verify that the Submit button on the bank account edit page updates the data successfully.", function () {
    create_bank_account.editSubmitButton();
  });

  it("07.17. Verify that clicking the Go Back button on the bank account edit page redirects the user to the bank account list page.", function () {
    create_bank_account.editGoBackButton();
  });

  it("07.18. Verify that inactive bank accounts can be filtered correctly using the status dropdown on the bank account list page.", function () {
    create_bank_account.statusInactiveDropdownCheck();
  });

  it("07.19. Verify that active bank accounts are filtered correctly using the status dropdown on the bank account list page.", function () {
    create_bank_account.statusActiveDropdownCheck();
  });

  it("07.20. Verify that the search functionality returns correct results when searching by bank account name.", function () {
    create_bank_account.searchInBankAccountName();
  });

  it("07.21. Verify that the grid list is reset successfully when the Reset button is clicked on the bank account page.", function () {
    create_bank_account.gridResetButtonCheck();
  });

  it("07.22. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the bank account page.", function () {
    create_bank_account.gridRefreshButtonCheck();
  });

  it("07.23. Verify that pagination works correctly on the last page of the bank account list.", function () {
    create_bank_account.paginationCheck();
  });

  it("07.24. Verify that the Reset button on the bank account creation page clears all entered input values.", function () {
    create_bank_account.createResetButtonCheck();
  });

  it("07.25. Verify that validation messages are displayed for all required fields when the Submit button is clicked with empty inputs.", function () {
    create_bank_account.createValidationMessageCheck();
  });

  it("07.26. Verify that clicking the Go Back button on the bank account creation page redirects the user to the bank account list page.", function () {
    create_bank_account.createGoBackButtonCheck();
  });

  it("07.27. Verify that clicking the Search button on the bank account grid page displays the correct filtered results.", function () {
    create_bank_account.gridSearchButtonCheck();
  });

  it("07.28. Verify that the Bank Account Creation page displays all required fields correctly.", function () {
    create_bank_account.createPageFieldCheck();
  });

  it("07.28. Verify that the Bank dropdown displays available bank options correctly.", function () {
    create_bank_account.bankOptionsCheck();
  });

  it("07.29. Verify that a bank can be selected successfully from the Bank dropdown.", function () {
    create_bank_account.bankSelectionCheck();
  });

  it("07.30. Verify that bank branches are loaded according to the selected bank.", function () {
    create_bank_account.bankBranchDependencyCheck();
  });

  it("07.31. Verify that the Bank Branch dropdown displays available branch options correctly.", function () {
    create_bank_account.bankBranchOptionsCheck();
  });

  it("07.32. Verify that the Account Type dropdown displays available account type options correctly.", function () {
    create_bank_account.accountTypeOptionsCheck();
  });

  it("07.33. Verify that an Account Type can be selected successfully.", function () {
    create_bank_account.accountTypeSelectionCheck();
  });

  it("07.34. Verify that the default Status value is displayed correctly on the Bank Account Creation page.", function () {
    create_bank_account.defaultStatusCheck();
  });

  it("07.35. Verify that all available Status options are displayed correctly.", function () {
    create_bank_account.statusOptionsCheck();
  });

  it("07.36. Verify that duplicate bank account information cannot be created.", function () {
    create_bank_account.duplicateBankAccountCheck();
  });

  it("07.37. Verify that the Account Name English field accepts valid English input.", function () {
    create_bank_account.accountNameEnValidInputCheck();
  });

  it("07.38. Verify that the Account Name English field does not accept whitespace-only input.", function () {
    create_bank_account.accountNameEnSpaceValidation();
  });

  it("07.39. Verify that the Account Name Bangla field accepts valid Bangla input.", function () {
    create_bank_account.accountNameBnValidInputCheck();
  });

  it("07.40. Verify that the Account Name Bangla field does not accept whitespace-only input.", function () {
    create_bank_account.accountNameBnSpaceValidation();
  });

  it("07.41. Verify that the Account Number field accepts valid account number data.", function () {
    create_bank_account.accountNumberValidInputCheck();
  });

  it("07.43. Verify that the Account Number field rejects invalid input according to the field validation rules.", function () {
    create_bank_account.accountNumberInvalidInputCheck();
  });

  it("07.44. Verify that the Account Number field does not accept whitespace-only input.", function () {
    create_bank_account.accountNumberSpaceValidation();
  });

  it("07.45. Verify that submitting the form with only the Bank field empty displays the required validation.", function () {
    create_bank_account.bankRequiredValidationCheck();
  });

  it("07.46. Verify that submitting the form with only the Bank Branch field empty displays the required validation.", function () {
    create_bank_account.bankBranchRequiredValidationCheck();
  });

  it("07.47. Verify that submitting the form with only the Account Name English field empty displays the required validation.", function () {
    create_bank_account.accountNameEnRequiredValidationCheck();
  });

  it("07.48. Verify that submitting the form with only the Account Name Bangla field empty displays the required validation.", function () {
    create_bank_account.accountNameBnRequiredValidationCheck();
  });

  it("07.49. Verify that submitting the form with only the Account Type field empty displays the required validation.", function () {
    create_bank_account.accountTypeRequiredValidationCheck();
  });

  it("07.50. Verify that submitting the form with only the Account Number field empty displays the required validation.", function () {
    create_bank_account.accountNumberRequiredValidationCheck();
  });

  it("07.51. Verify that the Account Name English field handles leading and trailing spaces correctly.", function () {
    create_bank_account.accountNameEnTrimValidation();
  });

  it("07.52. Verify that the Account Name Bangla field handles leading and trailing spaces correctly.", function () {
    create_bank_account.accountNameBnTrimValidation();
  });

  it("07.53. Verify that duplicate Account Number cannot be created.", function () {
    create_bank_account.duplicateAccountNumberCheck();
  });

  it("07.54. Verify that the Bank Account List page displays all required table columns correctly.", function () {
    create_bank_account.gridColumnsCheck();
  });

  it("07.55. Verify that the Add Bank Account button redirects to the Bank Account Creation page.", function () {
    create_bank_account.addBankAccountNavigation();
  });

  it("07.56. Verify that searching with a non-existing bank account name displays no matching records.", function () {
    create_bank_account.searchNoResult();
  });

  it("07.57. Verify that partial bank account name search returns matching records.", function () {
    create_bank_account.partialSearch();
  });

  it("07.58. Verify that clearing the search text restores the complete bank account list.", function () {
    create_bank_account.clearSearch();
  });

  it("07.59. Verify that the selected page size is applied correctly to the Bank Account grid.", function () {
    create_bank_account.pageSizeCheck();
  });

  it("07.60. Verify that the Account Name column can be sorted in ascending order.", function () {
    create_bank_account.accountNameAscendingSort();
  });

  it("07.61. Verify that the Account Name column can be sorted in descending order.", function () {
    create_bank_account.accountNameDescendingSort();
  });

  it("07.62. Verify that the Account Number column can be sorted in ascending order.", function () {
    create_bank_account.accountNumberAscendingSort();
  });

  it("07.63. Verify that the Account Number column can be sorted in descending order.", function () {
    create_bank_account.accountNumberDescendingSort();
  });

  it("07.64. Verify that the Bank Account View page displays Bank information correctly.", function () {
    create_bank_account.viewBankFieldCheck();
  });

  it("07.65. Verify that the Bank Account View page displays Bank Branch information correctly.", function () {
    create_bank_account.viewBankBranchFieldCheck();
  });

  it("07.66. Verify that the Bank Account View page displays Account Name English correctly.", function () {
    create_bank_account.viewAccountNameEnCheck();
  });

  it("07.67. Verify that the Bank Account View page displays Account Name Bangla correctly.", function () {
    create_bank_account.viewAccountNameBnCheck();
  });

  it("07.68. Verify that the Bank Account View page displays Account Type correctly.", function () {
    create_bank_account.viewAccountTypeCheck();
  });

  it("07.69. Verify that the Bank Account View page displays Account Number correctly.", function () {
    create_bank_account.viewAccountNumberCheck();
  });

  it("07.70. Verify that the Bank Account View page displays Status correctly.", function () {
    create_bank_account.viewStatusCheck();
  });

  it("07.71. Verify that the Bank field can be updated successfully from the Edit page.", function () {
    create_bank_account.editBankCheck();
  });

  it("07.72. Verify that the Bank Branch field can be updated successfully from the Edit page.", function () {
    create_bank_account.editBankBranchCheck();
  });

  it("07.73. Verify that the Account Name English can be updated successfully.", function () {
    create_bank_account.editAccountNameEnCheck();
  });

  it("07.74. Verify that the Account Name Bangla can be updated successfully.", function () {
    create_bank_account.editAccountNameBnCheck();
  });

  it("07.75. Verify that the Account Type can be updated successfully.", function () {
    create_bank_account.editAccountTypeCheck();
  });

  it("07.76. Verify that the Account Number can be updated successfully.", function () {
    create_bank_account.editAccountNumberCheck();
  });

  it("07.77. Verify that the Status can be updated successfully.", function () {
    create_bank_account.editStatusCheck();
  });

  it("07.78. Verify that required field validation works correctly when an editable Bank Account field is cleared before submission.", function () {
    create_bank_account.editRequiredValidationCheck();
  });

  it("07.79. Verify that updated Bank Account information is displayed correctly in the list after successful submission.", function () {
    create_bank_account.updatedBankAccountListCheck();
  });

  it("07.80. Verify that the grid list content updates correctly when switching the language from English to Bangla.", function () {
    create_bank_account.gridLanguageSwitchCheck();
  });

});
