// npx cypress run
// npx cypress run --spec cypress/e2e/mra-admin --browser chrome --headless --reporter mochawesome
// npx cypress run --spec cypress/e2e/mra-admin/01-login/login.cy.js --browser chrome --headed --reporter mochawesome
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
