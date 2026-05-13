// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/28-manage-member-pass-book/manage-member-pass-book.cy.js --browser chrome --headed

import "cypress-file-upload";
import { manage_member_passbook } from "./manage-member-pass-book.po";

describe("28. Memebr Passbook Module Test Cases", function () {
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
  it("28.01. Verify Manage  Member Pass Book List Page loads successfully.", function () {
    manage_member_passbook.gridMemberPassbookListPage();
  });

  it("28.02.Verify successful Manage Member Pass Book Passbook Detail Page by MFI-Admin role", function () {
    manage_member_passbook.detailsListMemberPassbook();
  });

  it("28.03. Verify check that the grid list content changes correctly from english to bangla.", function () {
    manage_member_passbook.gridLanguageSwitchCheck();
  });
});
