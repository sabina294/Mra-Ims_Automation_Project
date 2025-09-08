// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/01-login/login.cy.js --headed

import { login_test } from "./login.po";

describe("01. Login MRA Admin Role Module Test Cases", function () {
  before(() => {
    cy.window().then((win) => win.sessionStorage.clear());
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("01.01. Verify login successfully with valid credentials.", function () {
    login_test.mraAdminLogin();
  });  

});
