
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

  it("26.01.Verify Member Samity Transfer Grid List Page loads successfully.", function () {
    member_samity_transfer.gridMemberSamityTransferListPage();
  });

  it("26.02. Verify display the grid list successfully when the Draft button on is clicked on the Member Samity Transfer page", function () {
    member_samity_transfer.gridDraftButton();
  });

  it("26.03. Verify display the grid list successfully when the Draft button off is clicked on the Member Samity Transfer page", function () {
    member_samity_transfer.gridDraftButtonOff();
  });

  it("26.04. Verify successful Member Samity Transfer information View.", function () {
    member_samity_transfer.viewMemberSamityTransfer();
  });

  it("26.05. Verify that clicking the go back button on the Member Samity Transfer view page redirects the user to the Member Samity Transfer list page.", function () {
    member_samity_transfer.viewGoBackButton();
  });

  it("26.06. Verify that clicking the reset button on the Member Samity Transfer view page redirects the user to the Member Samity Transfer list page.", function () {
    member_samity_transfer.transferResetButton();
  });

  it("26.07. Verify that clicking the submit button on the Member Samity Transfer view page redirects the user to the Member Samity Transfer list page.", function () {
    member_samity_transfer.transferSubmitButton();
  });

  it("26.08. Verify that clicking the approve button on the Member Samity Transfer view page redirects the user to the Member Samity Transfer list page.", function () {
    member_samity_transfer.transferApproveButton();
  });

  it("26.09. Verify that clicking the go back button on the Member Samity Transfer view page redirects the user to the Member Samity Transfer list page.", function () {
    member_samity_transfer.transferGoBackButton();
  });

  it('26.10. Verify successful processing of a new  samity transfer.', function () {
    member_samity_transfer.newSamityTransfer();
  })

  it("26.11. Verify that a member samity transfer record is successfully approved after the transfer.", function () {
    member_samity_transfer.approveSamityTransfer();
  });

  it("26.12. Verify that the user can filter the inactive Member Samity Transfers using the Status Dropdown on the Member Samity Transfer List page.", function () {
    member_samity_transfer.statusInactiveDropdownCheck();
  });

  it("26.13. Verify Filter Active Result by Status Dropdown", function () {
    member_samity_transfer.statusActiveDropdownCheck();
  });

  it("26.14. Verify Successful Search Result by Member Samity Transfer Name", function () {
    member_samity_transfer.searchInMemberSamityTransferName();
  });

  it("26.15. Verify Successful Reset of Grid List Using the Reset Button on Member Samity Transfer Page.", function () {
    member_samity_transfer.gridResetButtonCheck();
  });

  it("26.16. Verify Successful Refresh of Grid List Using the Refresh Button on Member Samity Transfer Page.", function () {
    member_samity_transfer.gridRefreshButtonCheck();
  });

  it("26.17. Verify check that the grid list content changes correctly from english to bangla.", function () {
    member_samity_transfer.gridLanguageSwitchCheck();
  });
});
