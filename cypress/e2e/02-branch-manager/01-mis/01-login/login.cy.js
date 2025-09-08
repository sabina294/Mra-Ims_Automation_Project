// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/01-login/login.cy.js --headed
// npx cypress run --spec cypress/e2e/02-branch-manager --browser chrome --headed

import { login_test } from "./login.po";

describe("01. Login Branch Manager Role Module Test Cases", function () {
  before(() => {
    cy.window().then((win) => win.sessionStorage.clear());
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("01.01. Verify login successfully with valid credentials.", function () {
    login_test.branchManagerLogin();
  });

  it("01.02. Verify check that the grid list content changes correctly from english to bangla.", function () {
      login_test.gridLanguageSwitchCheck();
    });

});

