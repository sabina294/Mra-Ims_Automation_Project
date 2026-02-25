// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/24-member-management/member-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_member_management } from "./member-management.po";

describe("24. Member Management Module Test Cases", function () {
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

  it("24.01. Verify the member management list page loads correctly.", function () {
    create_member_management.gridMemberManagementListPage();
  });

  it("24.02. Verify a new member management record is created successfully when all required fields are filled with valid data.", function () {
    create_member_management.createMemberManagement();
  });

  it("24.03. Verify mfi-admin to successfully approve an member management record after creation.", function () {
    create_member_management.approveMemberManagement();
  });

  it("24.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_member_management.actionButtonCheck();
  });

  it("24.05. Verify the user can successfully view the member management information, including the name and description.", function () {
    create_member_management.viewMemberManagement();
  });

  it("24.06. Verify that clicking the go back button on the member management view page redirects the user to the member management list page.", function () {
    create_member_management.viewGoBackButton();
  });

  it("24.07. Verify editing functionality for Member Management.", function () {
    create_member_management.editMemberManagement();
  });

  it("24.08. Verify the member management edit reset button functions correctly.", function () {
    create_member_management.editResetButton();
  });

  it("24.09. Verify that clicking the go back button on the member management edit page redirects the user to the member management list page.", function () {
    create_member_management.editGoBackButton();
  });

  it("24.10. Verify the user can filter inactive employee records using the status dropdown on the member management List page.", function () {
    create_member_management.statusInactiveDropdownCheck();
  });

  it("24.11. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_member_management.statusActiveDropdownCheck();
  });

  it("24.12. Verify that the search results are displayed correctly when searching by member management name.", function () {
    create_member_management.searchInMemberManagementName();
  });

  it("24.13. Verify validation messages appear for required fields when the Approve button is clicked with empty inputs.", function () {
    create_member_management.createApproveButtonCheck();
  });

  it("24.14. Verify validation messages appear for required fields when the Submit button is clicked with empty inputs.", function () {
    create_member_management.createSubmitButtonCheck();
  });

  it("24.15. Verify validation messages appear for required fields when the Draft button is clicked with empty inputs.", function () {
    create_member_management.createDraftButtonCheck();
  });

  it("24.16. Verify validation messages appear for required fields when the Reset button is clicked with empty inputs.", function () {
    create_member_management.createResetButtonCheck();
  });

  it("24.17. Verify validation messages appear for required fields when the Go Back button is clicked with empty inputs.", function () {
    create_member_management.createGoBackButtonCheck();
  });

  it("24.18. Verify the grid list resets successfully when the reset button is clicked on the member management page", function () {
    create_member_management.gridResetButtonCheck();
  });

  it("24.19. Verify a new member management record is created successfully when all required fields are filled with valid data", function () {
    create_member_management.gridRefreshButtonCheck();
  });

  it("24.20. Verify that the checkbox functions correctly.", function () {
    create_member_management.gridCheckboxCheck();
  });

  it("24.24. Verify that the checkbox lock button operates correctly when selected.", function () {
    create_member_management.gridCheckboxLockButtonCheck();
  });

  it("24.22. Verify that the checkbox unlock button operates correctly when selected.", function () {
    create_member_management.gridCheckboxUnlockButtonCheck();
  });

  it("24.23. Verify display the grid list successfully when the Draft button on is clicked on the member management page", function () {
    create_member_management.gridDraftButton();
  });

  it("24.24. Verify display the grid list successfully when the Draft button off is clicked on the member management page", function () {
    create_member_management.gridDraftButtonOff();
  });

  it("24.25. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_member_management.gridLanguageSwitchCheck();
  });
});
