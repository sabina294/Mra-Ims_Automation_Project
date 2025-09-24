// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/01-login/login.cy.js --headed

import { login_test } from "./login.po";

describe("01. Login MFI Admin Role Module Test Cases", function () {
  before(() => {
    cy.window().then((win) => win.sessionStorage.clear());
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("01.01. Verify login successfully with valid credentials.", function () {
    login_test.mfiAdminLogin();
  });

  it("01.02. Verify check that the grid list content changes correctly from english to bangla.", function () {
    login_test.gridLanguageSwitchCheck();
  });
});
