// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/03-division/division.cy.js --headed

import { login_test } from "./login.po";

describe("01. Login Test", function () {
  before(() => {
    cy.window().then((win) => win.sessionStorage.clear());
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("01.01. should log in successfully with valid MRA Admin credentials", function () {
    login_test.mraAdminLogin();
  });
});
