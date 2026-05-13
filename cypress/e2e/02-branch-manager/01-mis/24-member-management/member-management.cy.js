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
  
  it("24.01. Verify that the Member Management list page loads successfully", function () {
    create_member_management.gridMemberManagementListPage();
  });

  it("24.02. Verify that a new Member Management record is created successfully with valid input data", function () {
    create_member_management.createMemberManagement();
  });

  it("24.03. Verify that MFI Admin can successfully approve a Member Management record after creation", function () {
    create_member_management.approveMemberManagement();
  });

  it("24.04. Verify that the action button performs the expected operation successfully", function () {
    create_member_management.actionButtonCheck();
  });

  it("24.05. Verify that Member Management details (name and description) are displayed correctly in the view page", function () {
    create_member_management.viewMemberManagement();
  });

  it("24.06. Verify that the Go Back button on the view page redirects to the Member Management list page", function () {
    create_member_management.viewGoBackButton();
  });

  it("24.07. Verify that the Member Management profile view displays correct name and description", function () {
    create_member_management.profileViewMemberManagement();
  });

  it("24.08. Verify that the Go Back button on the profile view page redirects to the list page", function () {
    create_member_management.profileViewGoBackButton();
  });

  it("24.09. Verify that the Member Management record can be edited successfully", function () {
    create_member_management.editMemberManagement();
  });

  it("24.10. Verify that the Reset button works correctly on the edit page", function () {
    create_member_management.editResetButton();
  });

  it("24.11. Verify that the Go Back button on the edit page redirects to the list page", function () {
    create_member_management.editGoBackButton();
  });

  it("24.12. Verify that inactive Member Management records can be filtered using the status dropdown", function () {
    create_member_management.statusInactiveDropdownCheck();
  });

  it("24.13. Verify that active Member Management records can be filtered using the status dropdown", function () {
    create_member_management.statusActiveDropdownCheck();
  });

  it("24.14. Verify that searching by Member Management name returns correct results", function () {
    create_member_management.searchInMemberManagementName();
  });

  it("24.15. Verify validation messages appear when Approve is clicked with empty required fields", function () {
    create_member_management.createApproveButtonCheck();
  });

  it("24.16. Verify validation messages appear when Submit is clicked with empty required fields", function () {
    create_member_management.createSubmitButtonCheck();
  });

  it("24.17. Verify validation messages appear when Draft is clicked with empty required fields", function () {
    create_member_management.createDraftButtonCheck();
  });

  it("24.18. Verify validation messages appear when Reset is clicked with empty required fields", function () {
    create_member_management.createResetButtonCheck();
  });

  it("24.19. Verify validation messages appear when Go Back is clicked with empty required fields", function () {
    create_member_management.createGoBackButtonCheck();
  });

  it("24.20. Verify that the grid list resets successfully when the Reset button is clicked", function () {
    create_member_management.gridResetButtonCheck();
  });

  it("24.21. Verify that clicking the Search button redirects to the Member Management list page", function () {
    create_member_management.gridSearchButtonCheck();
  });

  it("24.22. Verify that the grid refresh functionality works correctly", function () {
    create_member_management.gridRefreshButtonCheck();
  });

  it("24.23. Verify that the checkbox functionality works correctly in the grid", function () {
    create_member_management.gridCheckboxCheck();
  });

  it("24.24. Verify that the checkbox lock action works correctly when selected", function () {
    create_member_management.gridCheckboxLockButtonCheck();
  });

  it("24.25. Verify that the checkbox unlock action works correctly when selected", function () {
    create_member_management.gridCheckboxUnlockButtonCheck();
  });

  it("24.26. Verify that grid list displays correctly when Draft button is clicked", function () {
    create_member_management.gridDraftButton();
  });

  it("24.27. Verify that grid list behaves correctly when Draft button is turned off", function () {
    create_member_management.gridDraftButtonOff();
  });

  it("24.28. Verify that grid language switching works correctly from English to Bangla", function () {
    create_member_management.gridLanguageSwitchCheck();
  });

});
