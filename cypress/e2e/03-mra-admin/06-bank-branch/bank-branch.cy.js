// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/06-bank-branch/bank-branch.cy.js --headed

import "cypress-file-upload";
import { create_bank_branch } from "./bank-branch.po";

describe("06. Bank Branch Module Test Cases.", function () {
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

  it("06.01. Verify that the Bank Branch list page loads successfully without errors.", function () {
    create_bank_branch.gridBankBranchListPage();
  });

  it("06.02. Verify that a bank branch is created successfully with valid mandatory fields.", function () {
    create_bank_branch.createBankBranch();
  });

  it("06.03. Verify that a bank branch is created successfully when all fields are filled with valid data.", function () {
    create_bank_branch.createAllField();
  });

  it("06.04. Verify that bank branch creation is not allowed when the English name field is empty.", function () {
    create_bank_branch.createWithoutMandatoryFieldNameEn();
  });

  it("06.05. Verify that bank branch creation is not allowed when the Bengali name field is empty.", function () {
    create_bank_branch.createWithoutMandatoryFieldNameBn();
  });

  it("06.06. Verify that bank branch creation is not allowed when the branch code field is empty.", function () {
    create_bank_branch.createWithoutMandatoryFieldBranchCode();
  });

  it("06.07. Verify that bank branch creation fails when the bank field is not selected.", function () {
    create_bank_branch.createWithoutMandatoryFieldBank();
  });

  it("06.08. Verify that bank branch creation is not allowed when the working days field is empty.", function () {
    create_bank_branch.createWithoutMandatoryFieldWorkingDays();
  });

  it("06.09. Verify that bank branch creation is not allowed when the district field is not selected.", function () {
    create_bank_branch.createWithoutMandatoryFieldDistrict();
  });

  it("06.10. Verify that bank branch creation is not allowed when the English address field is empty.", function () {
    create_bank_branch.createWithoutMandatoryFieldBranchAdress();
  });

  it("06.11. Verify that bank branch creation is not allowed when the Bengali address field is empty.", function () {
    create_bank_branch.createWithoutMandatoryFieldAdressBn();
  });

  it("06.12. Verify that bank branch creation is not allowed when the telephone number field is empty.", function () {
    create_bank_branch.createWithoutMandatoryFieldTelephoneNumber();
  });

  it("06.13. Verify that bank branch creation is not allowed when the fax field is empty.", function () {
    create_bank_branch.createWithoutMandatoryFieldFax();
  });

  it("06.14. Verify that bank branch creation is not allowed when the routing number field is empty.", function () {
    create_bank_branch.createWithoutMandatoryFieldRoutingNumber();
  });

  it("06.15. Verify that bank branch creation is not allowed when the SWIFT code field is empty.", function () {
    create_bank_branch.createWithoutMandatoryFieldSwiftCode();
  });

  it("06.16. Verify that bank branch creation is not allowed when the email field is empty.", function () {
    create_bank_branch.createWithoutMandatoryFieldEmail();
  });

  it("06.17. Verify that bank branch creation is not allowed when the opening date field is empty.", function () {
    create_bank_branch.createWithoutMandatoryFieldDateOpening();
  });

  it("06.18. Verify that the action buttons work correctly for a bank branch record.", function () {
    create_bank_branch.actionButtonCheck();
  });

  it("06.19. Verify that the user can view complete details of a bank branch.", function () {
    create_bank_branch.viewBankBranch();
  });

  it("06.20. Verify that clicking the Go Back button from the view page redirects to the bank branch list page.", function () {
    create_bank_branch.viewGoBackButton();
  });

  it("06.21. Verify that edit mode can be enabled and disabled and fields behave accordingly.", function () {
    create_bank_branch.turnOffOnEditMode();
  });

  it("06.22. Verify that the bank branch information can be edited successfully.", function () {
    create_bank_branch.editBankBranch();
  });

  it("06.23. Verify that the reset button clears changes on the bank branch edit form.", function () {
    create_bank_branch.editResetButton();
  });

  it("06.24. Verify that clicking the Go Back button from the edit page redirects to the bank branch list page.", function () {
    create_bank_branch.editGoBackButton();
  });

  it("06.25. Verify that inactive bank branches can be filtered using the status dropdown.", function () {
    create_bank_branch.statusInactiveDropdownCheck();
  });

  it("06.26. Verify that active bank branches are filtered correctly using the status dropdown.", function () {
    create_bank_branch.statusActiveDropdownCheck();
  });

  it("06.27. Verify that bank branch selection works correctly from the bank dropdown.", function () {
    create_bank_branch.selectBankDropdown();
  });

  it("06.28. Verify that searching by bank branch name returns correct results.", function () {
    create_bank_branch.searchInBankBranchName();
  });

  it("06.29. Verify that the grid list resets correctly when the reset button is clicked.", function () {
    create_bank_branch.gridResetButtonCheck();
  });

  it("06.30. Verify that the grid list refreshes correctly when the refresh button is clicked.", function () {
    create_bank_branch.gridRefreshButtonCheck();
  });

  it("06.31. Verify that pagination works correctly on the bank branch list page.", function () {
    create_bank_branch.paginationCheck();
  });

  it("06.32. Verify that the reset button clears all input fields on the create bank branch form.", function () {
    create_bank_branch.createResetButtonCheck();
  });

  it("06.33. Verify that validation messages appear when submitting the form with empty mandatory fields.", function () {
    create_bank_branch.createValidationMessageCheck();
  });

  it("06.34. Verify that clicking the Go Back button from the create page redirects to the bank branch list page.", function () {
    create_bank_branch.createGoBackButtonCheck();
  });

  it("06.35. Verify that when the user clicks the Search button on the bank branch grid page, the system redirects to the bank branch List page..", function () {
    create_bank_branch.gridSearchButtonCheck();
  });

  it("06.36. Verify that the grid list content updates correctly when switching language from English to Bangla.", function () {
    create_bank_branch.gridLanguageSwitchCheck();
  });

});
