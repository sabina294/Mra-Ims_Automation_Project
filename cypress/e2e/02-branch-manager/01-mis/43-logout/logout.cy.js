// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/43-logout/logout.cy.js --headed

import { logout_page } from "./logout.po";

describe("43. Logout Test", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");

  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.branchManagerUserId,
        d.credential.branchManagerPassword
      );
    });
  });

  it("43.01. Verify the user can log out successfully.", function () {
    logout_page.logout();
  });
});
