// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/branch-manager/01-login/login.cy.js --headed

import { login_test } from "./login.po";

describe("01. Login Branch Manager Module Test Cases", function () {
  before(() => {
    cy.window().then((win) => win.sessionStorage.clear());
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("01.01. Verify login successfully with valid credentials.", function () {
    login_test.branchManagerLogin();
  });
});
