// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/37-savings-account-application-management/savings-account-application-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_savings_account_application_management } from "./savings-account-application-management.po";

describe("37. Savings Account Application Management Module Test Cases", function () {
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

  it("37.01. Verify that the Savings Account Application Management list page loads successfully.", function () {
    create_savings_account_application_management.gridSavingsAccApplicationListPage();
  });

  it("37.02. Verify that a new Savings Account Application Management record is created successfully when all required fields are filled with valid data.", function () {
    create_savings_account_application_management.createSavingsAccApplicationManagement();
  });

  it("37.03. Verify that MFI admin can successfully approve a Savings Account Application Management record after creation.", function () {
    create_savings_account_application_management.approvesavingsAccount();
  });

  it("37.04. Verify that the action button performs the expected operation successfully.", function () {
    create_savings_account_application_management.actionButtonCheck();
  });

  it("37.05. Verify that the user can view Savings Account Application Management details, including name and description.", function () {
    create_savings_account_application_management.viewSavingsAccApplicationManag();
  });

  it("37.06. Verify that the Go Back button on the view page redirects the user to the Savings Account Application Management list page.", function () {
    create_savings_account_application_management.viewGoBackButton();
  });

  it("37.07. Verify that inactive records can be filtered successfully using the status dropdown on the list page.", function () {
    create_savings_account_application_management.statusInactiveDropdownCheck();
  });

  it("37.08. Verify that active records can be filtered successfully using the status dropdown on the list page.", function () {
    create_savings_account_application_management.statusActiveDropdownCheck();
  });

  it("37.09. Verify that search functionality works correctly when searching by Savings Account Application Management name.", function () {
    create_savings_account_application_management.searchSavingsAccAppManag();
  });

  it("37.10. Verify that the Reset button clears all filters and resets the grid list successfully.", function () {
    create_savings_account_application_management.gridResetButtonCheck();
  });

  it("37.11. Verify that the Refresh button reloads the grid list successfully.", function () {
    create_savings_account_application_management.gridRefreshButtonCheck();
  });

  it("37.12. Verify that the grid displays draft records correctly when the Draft filter is enabled.", function () {
    create_savings_account_application_management.gridDraftButton();
  });

  it("37.13. Verify that the grid hides draft records correctly when the Draft filter is disabled.", function () {
    create_savings_account_application_management.gridDraftButtonOff();
  });

  it("37.14. Verify that the Reset button on the create page clears all input fields successfully.", function () {
    create_savings_account_application_management.createResetButtonCheck();
  });

  it("37.15. Verify that validation messages are displayed when submitting the form with empty required fields.", function () {
    create_savings_account_application_management.createValidationMessageCheck();
  });

  it("37.16. Verify that validation messages are displayed when clicking the Draft button with empty required fields.", function () {
    create_savings_account_application_management.createDraftButtonCheck();
  });

  it("37.17. Verify that the Go Back button on the create page redirects to the Savings Account Application Management list page.", function () {
    create_savings_account_application_management.createGoBackButtonCheck();
  });

  it("37.18. Verify that clicking the Search button on the grid page redirects and displays the correct list results.", function () {
    create_savings_account_application_management.gridSearchButtonCheck();
  });

  it("37.19. Verify that the list breadcrumb shows the Savings Account Application Management hierarchy.", function () {
    create_savings_account_application_management.listBreadcrumbCheck();
  });

  it("37.20. Verify that all savings application grid columns are visible.", function () {
    create_savings_account_application_management.requiredGridColumnsCheck();
  });

  it("37.21. Verify that application rows display serial numbers and required record data.", function () {
    create_savings_account_application_management.gridRecordDataCheck();
  });

  it("37.22. Verify that opening balances are finite non-negative numbers.", function () {
    create_savings_account_application_management.openingBalanceCheck();
  });

  it("37.23. Verify that the Approved filter displays only approved savings applications.", function () {
    create_savings_account_application_management.approvedStatusResultCheck();
  });

  it("37.24. Verify that the application ID ascending sort indicator is selected.", function () {
    create_savings_account_application_management.applicationIdAscendingSortCheck();
  });

  it("37.25. Verify that the application ID descending sort indicator is selected.", function () {
    create_savings_account_application_management.applicationIdDescendingSortCheck();
  });

  it("37.26. Verify that the first page shows pagination controls with Previous disabled.", function () {
    create_savings_account_application_management.firstPagePaginationCheck();
  });

  it("37.27. Verify that office, status, draft and search controls are available.", function () {
    create_savings_account_application_management.searchControlsCheck();
  });

  it("37.28. Verify that an unmatched search displays the No Data state.", function () {
    create_savings_account_application_management.noResultSearchCheck();
  });

  it("37.29. Verify that a partial member name search returns matching applications.", function () {
    create_savings_account_application_management.partialMemberNameSearchCheck();
  });

  it("37.30. Verify that the grid list content successfully switches between English and Bangla.", function () {
    create_savings_account_application_management.gridLanguageSwitchCheck();
  });

});