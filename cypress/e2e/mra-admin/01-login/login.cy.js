// npx cypress open
// npm run auto
// npm run dev

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
