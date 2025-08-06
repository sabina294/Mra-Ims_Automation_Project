
// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/22-member-samity-transfer/member-samity-transfer.cy.js --browser chrome --headed

import "cypress-file-upload";
import { member_samity_transfer } from "./member-samity-transfer.po";

describe("22. Member Samity Transfer Module Test Cases", function () {
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

  it("22.01.Verify Member Samity Transfer Grid List Page loads successfully.", function () {
    member_samity_transfer.gridMemberSamityTransferListPage();
  });

  it("22.02. Verify successful Member Samity Transfer information View.", function () {
    member_samity_transfer.viewMemberSamityTransfer();
  });

  // it('22.03. Verify successful processing of a new  samity transfer by MFI-Admin role', function () {
  //     member_samity_transfer.newSamityTransfer();
  // })

  it("22.04. Verify that the user can filter the inactive Member Samity Transfers using the Status Dropdown on the Member Samity Transfer List page.", function () {
    member_samity_transfer.statusInactiveDropdownCheck();
  });

  it("22.05. Verify Filter Active Result by Status Dropdown", function () {
    member_samity_transfer.statusActiveDropdownCheck();
  });

  it("21.06. Verify Successful Search Result by Member Samity Transfer Name", function () {
    member_samity_transfer.searchInMemberSamityTransferName();
  });

  it("22.07.Verify Successful Reset of Grid List Using the Reset Button on Member Samity Transfer Page.", function () {
    member_samity_transfer.gridResetButtonCheck();
  });

  it("22.08. Verify Successful Refresh of Grid List Using the Refresh Button on Member Samity Transfer Page.", function () {
    member_samity_transfer.gridRefreshButtonCheck();
  });

  it("22.09. Verify display the grid list successfully when the Draft button on is clicked on the Member Samity Transfer page", function () {
    member_samity_transfer.gridDraftButton();
  });

  it("22.10. Verify display the grid list successfully when the Draft button off is clicked on the Member Samity Transfer page", function () {
    member_samity_transfer.gridDraftButtonOff();
  });

  it("22.11. Verify check that the grid list content changes correctly from english to bangla.", function () {
    member_samity_transfer.gridLanguageSwitchCheck();
  });
});
