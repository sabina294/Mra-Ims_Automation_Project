class LogoutPage {
  logout() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-logout").click();
    cy.log("Successfully logged out");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }

}

export const logout_page = new LogoutPage();
