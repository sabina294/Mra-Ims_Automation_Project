// npx cypress open
// npm run auto
// npm run dev

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
