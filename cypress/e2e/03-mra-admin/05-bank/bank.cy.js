// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/05-bank/bank.cy.js --headed

import "cypress-file-upload";
import { create_bank } from "./bank.po";

describe("05. Bank Module Test Cases.", function () {
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

  it("05.01. Verify that the Bank List page loads successfully without any errors.", function () {
    create_bank.gridBankListPage();
  });

  it("05.02. Verify that a new bank is created successfully when all required fields are filled with valid data.", function () {
    create_bank.createBank();
  });

  it("05.03. Verify that a new bank is created successfully when all fields are filled with valid data.", function () {
    create_bank.createAllField();
  });

  it("05.04. Verify that the system does not allow bank creation when the mandatory English name field is empty.", function () {
    create_bank.createWithoutMandatoryFieldNameEn();
  });

  it("05.05. Verify that the system does not allow bank creation when the mandatory Bangla name field is empty.", function () {
    create_bank.createWithoutMandatoryFieldNameBn();
  });

  it("05.06. Verify that the system does not allow bank creation when the mandatory website field is empty.", function () {
    create_bank.createWithoutMandatoryFieldWebsite();
  });

  it("05.07. Verify that the system does not allow bank creation when the Optional bank code field is empty.", function () {
    create_bank.createWithoutMandatoryFieldBankCode();
  });

  it("05.08. Verify that the system does not allow bank creation when the Optional bank short code field is empty.", function () {
    create_bank.createWithoutMandatoryFieldBankShortCode();
  });

  it("05.09. Verify that the system does not allow bank creation when the Optional status field is empty.", function () {
    create_bank.createWithoutMandatoryFieldStatus();
  });

  it("05.10. Verify that bank creation fails when all mandatory fields are missing.", function () {
    create_bank.createWithoutMandatoryAllField();
  });

  it("05.11. Verify that the appropriate action is performed when the action button is clicked.", function () {
    create_bank.actionButtonCheck();
  });

  it("05.12. Verify that the user can view all relevant bank details including associated fields.", function () {
    create_bank.viewBank();
  });

  it("05.13. Verify that clicking the Go Back button on the Bank View page redirects the user to the Bank List page.", function () {
    create_bank.viewGoBackButton();
  });

  it("05.14. Verify that the bank form edit mode can be toggled on and off, and fields switch between editable and view-only states accordingly.", function () {
    create_bank.turnOffOnEditMode();
  });

  it("05.15. Verify that the bank name and description are updated successfully in edit mode.", function () {
    create_bank.editBank();
  });

  it("05.16. Verify that the reset button in bank edit mode restores the previous values.", function () {
    create_bank.editResetButton();
  });

  it("05.17. Verify that clicking the Go Back button on the Bank Edit page redirects the user to the Bank List page.", function () {
    create_bank.editGoBackButton();
  });

  it("05.18. Verify that the user can filter inactive banks using the Status dropdown.", function () {
    create_bank.statusInactiveDropdownCheck();
  });

  it("05.19. Verify that the Status dropdown correctly filters active banks.", function () {
    create_bank.statusActiveDropdownCheck();
  });

  it("05.20. Verify that searching by bank name returns the correct results.", function () {
    create_bank.searchInBankName();
  });

  it("05.21. Verify that clicking the Reset button clears all applied filters on the Bank List page.", function () {
    create_bank.gridResetButtonCheck();
  });

  it("05.22. Verify that clicking the Refresh button reloads the Bank List successfully.", function () {
    create_bank.gridRefreshButtonCheck();
  });

  it("05.23. Verify that pagination works correctly when navigating to the last page of the Bank List.", function () {
    create_bank.paginationCheck();
  });

  it("05.24. Verify that the Reset button on the Bank Create page clears all entered input values.", function () {
    create_bank.createResetButtonCheck();
  });

  it("05.25. Verify that validation messages are displayed for required fields when submitting the form with empty inputs.", function () {
    create_bank.createValidationMessageCheck();
  });

  it("05.26. Verify that clicking the Go Back button on the Bank Create page redirects the user to the Bank List page.", function () {
    create_bank.createGoBackButtonCheck();
  });

  it("05.27. Verify that when the user clicks the Search button on the Bank grid page, the system redirects to the Bank List page..", function () {
    create_bank.gridSearchButtonCheck();
  });

  it("05.28. Verify that the bank grid list content switches correctly between English and Bangla languages.", function () {
    create_bank.gridLanguageSwitchCheck();
  });

});
