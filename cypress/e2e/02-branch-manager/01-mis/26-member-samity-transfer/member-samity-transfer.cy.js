
// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/26-member-samity-transfer/member-samity-transfer.cy.js --browser chrome --headed

import "cypress-file-upload";
import { member_samity_transfer } from "./member-samity-transfer.po";
describe("26. Member Samity Transfer Module Test Cases", function () {
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

  it("26.01. Verify load the Member Samity Transfer grid list page successfully", function () {
    member_samity_transfer.gridMemberSamityTransferListPage();
  });

  it("26.02. Verify display grid list when Draft button is enabled on Member Samity Transfer page", function () {
    member_samity_transfer.gridDraftButton();
  });

  it("26.03. Verify display grid list when Draft button is disabled on Member Samity Transfer page", function () {
    member_samity_transfer.gridDraftButtonOff();
  });

  it("26.04. Verify successfully view Member Samity Transfer information", function () {
    member_samity_transfer.viewMemberSamityTransfer();
  });

  it("26.05. Verify redirect to list page when Go Back is clicked from view page", function () {
    member_samity_transfer.viewGoBackButton();
  });

  it("26.06. Verify redirect to list page when Reset button is clicked from view page", function () {
    member_samity_transfer.transferResetButton();
  });

  it("26.07. Verify redirect to list page after submitting Member Samity Transfer", function () {
    member_samity_transfer.transferSubmitButton();
  });

  it("26.08. Verify redirect to list page after approving Member Samity Transfer", function () {
    member_samity_transfer.transferApproveButton();
  });

  it("26.09. Verify navigate back to list page from view page using Go Back button", function () {
    member_samity_transfer.transferGoBackButton();
  });

  it("26.10. Verify successfully process a new Samity transfer", function () {
    member_samity_transfer.newSamityTransfer();
  });

  it("26.11. Verify that the newly created Samity transfer record appears in the My Tasks list.", function () {
    member_samity_transfer.myTaskMenuSamityTransfer();
  });

  it("26.12. Verify that the Reset button clears all applied filters on the My Tasks page.", function () {
    member_samity_transfer.myTaskResetButtonCheck();
  });

  it("26.13. Verify that the Refresh button reloads the My Tasks list successfully.", function () {
    member_samity_transfer.myTaskRefreshButtonCheck();
  });

  it("26.14. Verify successfully approve a Samity transfer record after transfer", function () {
    member_samity_transfer.approveSamityTransfer();
  });

  it("26.15. Verify process Samity transfer successfully without New Samity field", function () {
    member_samity_transfer.withoutNewSamity();
  });

  it("26.16. Verify process Samity transfer successfully without Register Book Serial ID field", function () {
    member_samity_transfer.withoutRegisterBookSerialId();
  });

  it("26.17. Verify filter inactive Member Samity Transfers using Status dropdown", function () {
    member_samity_transfer.statusInactiveDropdownCheck();
  });

  it("26.18. Verify filter active Member Samity Transfers using Status dropdown", function () {
    member_samity_transfer.statusActiveDropdownCheck();
  });

  it("26.19. Verify return correct search results by Member Samity Transfer name", function () {
    member_samity_transfer.searchInMemberSamityTransferName();
  });

  it("26.20. Verify reset grid list successfully using Reset button", function () {
    member_samity_transfer.gridResetButtonCheck();
  });

  it("26.21. Verify refresh grid list successfully using Refresh button", function () {
    member_samity_transfer.gridRefreshButtonCheck();
  });

  it("26.22. Verify navigate to list page when Search button is clicked on grid page", function () {
    member_samity_transfer.gridSearchButtonCheck();
  });

  it("26.23. Verify that the Member Samity Transfer breadcrumb displays the correct navigation hierarchy.", function () {
    member_samity_transfer.listBreadcrumbCheck();
  });

  it("26.24. Verify that the member samity transfer grid displays all required columns.", function () {
    member_samity_transfer.requiredGridColumnsCheck();
  });

  it("26.25. Verify that member records contain a serial, member ID, name and status, or show No Data.", function () {
    member_samity_transfer.gridRecordDataCheck();
  });

  it("26.26. Verify that the office, Draft and search controls are available.", function () {
    member_samity_transfer.searchControlsCheck();
  });

  it("26.27. Verify that searching by an existing member name returns matching records.", function () {
    member_samity_transfer.memberNameSearchCheck();
  });

  it("26.28. Verify that searching by a partial member name returns matching records.", function () {
    member_samity_transfer.memberPartialNameSearchCheck();
  });

  it("26.29. Verify that a nonexistent search displays No Data.", function () {
    member_samity_transfer.noResultSearchCheck();
  });

  it("26.30. Verify that Reset clears an unmatched search and restores the list.", function () {
    member_samity_transfer.resetRestoresGridCheck();
  });

  it("26.31. Verify that Refresh keeps the Member Samity Transfer list available.", function () {
    member_samity_transfer.refreshListStateCheck();
  });

  it("26.32. Verify that Name displays the ascending sort indicator.", function () {
    member_samity_transfer.nameAscendingSortCheck();
  });

  it("26.33. Verify that Name displays the descending sort indicator.", function () {
    member_samity_transfer.nameDescendingSortCheck();
  });

  it("26.34. Verify that the first-page pagination controls or empty state display correctly.", function () {
    member_samity_transfer.paginationOrEmptyStateCheck();
  });

  it("26.35. Verify that the Active status filter returns only Active member records.", function () {
    member_samity_transfer.activeStatusResultCheck();
  });

  it("26.36. Verify switch grid content language between English and Bangla correctly", function () {
    member_samity_transfer.gridLanguageSwitchCheck();
  });
});
