// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/02-logout/logout.cy.js --headed

import { logout_page } from "./logout.po";

describe("02. Logout Test", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");

  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.mraAdminUserId,
        d.credential.mraAdminPassword
      );
    });
  });

  it("02.01. should log out successfully", function () {
    logout_page.logout();
  });
});
