// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/21-member-management/member-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_member_management } from "./member-management.po";

describe("21. Member Management Module Test Cases", function () {
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

  it("21.01. Verify the member management list page loads correctly.", function () {
    create_member_management.gridMemberManagementListPage();
  });

  it("21.02. Verify a new member management record is created successfully when all required fields are filled with valid data.", function () {
    create_member_management.createMemberManagement();
  });

  it("21.03. Verify mfi-admin to successfully approve an member management record after creation.", function () {
    create_member_management.approveMemberManagement();
  });

  it("21.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_member_management.actionButtonCheck();
  });

  it("21.05. Verify the user can successfully view the member management information, including the name and description.", function () {
    create_member_management.viewMemberManagement();
  });

  it("21.06. Verify that clicking the go back button on the member management view page redirects the user to the member management list page.", function () {
    create_member_management.viewGoBackButton();
  });

  it("21.07. Verify the member management edit reset button functions correctly.", function () {
    create_member_management.editResetButton();
  });

  it("21.08. Verify the member management edit reset button functions correctly.", function () {
    create_member_management.editDraftButton();
  });

  it("21.09. Verify the member management edit reset button functions correctly.", function () {
    create_member_management.editSubmitButton();
  });

  it("21.10. Verify the member management edit reset button functions correctly.", function () {
    create_member_management.editApproveButton();
  });

  it("21.11. Verify that clicking the go back button on the member management edit page redirects the user to the member management list page.", function () {
    create_member_management.editGoBackButton();
  });

  it("21.12. Verify editing functionality for Member Management record by MFI-Admin role", function () {
    create_member_management.editMemberManagement();
  });

  it("21.13. Verify the user can filter inactive employee records using the status dropdown on the member management List page.", function () {
    create_member_management.statusInactiveDropdownCheck();
  });

  it("21.14. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_member_management.statusActiveDropdownCheck();
  });

  it("21.15. Verify that the search results are displayed correctly when searching by member management name.", function () {
    create_member_management.searchInMemberManagementName();
  });

  it("21.16. Verify the grid list resets successfully when the reset button is clicked on the member management page", function () {
    create_member_management.gridResetButtonCheck();
  });

  it("21.17. Verify the grid list resets successfully when the refresh button is clicked on the member management page ", function () {
    create_member_management.gridRefreshButtonCheck();
  });

  it("21.18. Verify that the checkbox functions correctly.", function () {
    create_member_management.gridCheckboxCheck();
  });

  it("21.19. Verify that the checkbox lock button operates correctly when selected.", function () {
    create_member_management.gridCheckboxLockButtonCheck();
  });

  it("21.20. Verify that the checkbox unlock button operates correctly when selected.", function () {
    create_member_management.gridCheckboxUnlockButtonCheck();
  });

  it("21.21. Verify display the grid list successfully when the Draft button on is clicked on the member management page", function () {
    create_member_management.gridDraftButton();
  });

  it("21.22. Verify display the grid list successfully when the Draft button off is clicked on the member management page", function () {
    create_member_management.gridDraftButtonOff();
  });

  it("21.23. Verify check that the member management  office selection works correctly from the dropdown on the samity list page.", function () {
    create_member_management.selectofficeDropdown();
  });

  it("21.24. Verify validation messages appear for required fields when the Approve button is clicked with empty inputs.", function () {
    create_member_management.createApproveButtonCheck();
  });

  it("21.25. Verify validation messages appear for required fields when the Submit button is clicked with empty inputs.", function () {
    create_member_management.createSubmitButtonCheck();
  });

  it("21.26. Verify validation messages appear for required fields when the Draft button is clicked with empty inputs.", function () {
    create_member_management.createDraftButtonCheck();
  });

  it("21.27. Verify validation messages appear for required fields when the Reset button is clicked with empty inputs.", function () {
    create_member_management.createResetButtonCheck();
  });

  it("21.28. Verify validation messages appear for required fields when the Go Back button is clicked with empty inputs.", function () {
    create_member_management.createGoBackButtonCheck();
  });

  it("21.29. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_member_management.gridLanguageSwitchCheck();
  });
});
