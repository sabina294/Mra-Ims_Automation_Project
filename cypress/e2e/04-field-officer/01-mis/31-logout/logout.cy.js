// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/31-logout/logout.cy.js --headed

import { logout_page } from "./logout.po";

describe("31. Logout Test", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");

  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.fieldOfficerUserId,
        d.credential.fieldOfficerPassword
      );
    });
  });

  it("31.01. Verify check that the grid list content changes correctly from english to bangla.", function () {
    logout_page.gridLanguageSwitchCheck();
  });

  it("31.02. Verify the user can log out successfully.", function () {
    logout_page.logout();
  });
});
