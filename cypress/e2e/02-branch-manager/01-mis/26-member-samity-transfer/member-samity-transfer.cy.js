
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

  it("26.11. Verify successfully approve a Samity transfer record after transfer", function () {
    member_samity_transfer.approveSamityTransfer();
  });

  it("26.12. Verify process Samity transfer successfully without New Samity field", function () {
    member_samity_transfer.withoutNewSamity();
  });

  it("26.13. Verify process Samity transfer successfully without Register Book Serial ID field", function () {
    member_samity_transfer.withoutRegisterBookSerialId();
  });

  it("26.14. Verify filter inactive Member Samity Transfers using Status dropdown", function () {
    member_samity_transfer.statusInactiveDropdownCheck();
  });

  it("26.15. Verify filter active Member Samity Transfers using Status dropdown", function () {
    member_samity_transfer.statusActiveDropdownCheck();
  });

  it("26.16. Verify return correct search results by Member Samity Transfer name", function () {
    member_samity_transfer.searchInMemberSamityTransferName();
  });

  it("26.17. Verify reset grid list successfully using Reset button", function () {
    member_samity_transfer.gridResetButtonCheck();
  });

  it("26.18. Verify refresh grid list successfully using Refresh button", function () {
    member_samity_transfer.gridRefreshButtonCheck();
  });

  it("26.19. Verify navigate to list page when Search button is clicked on grid page", function () {
    member_samity_transfer.gridSearchButtonCheck();
  });

  it("26.20. Verify switch grid content language between English and Bangla correctly", function () {
    member_samity_transfer.gridLanguageSwitchCheck();
  });
});
