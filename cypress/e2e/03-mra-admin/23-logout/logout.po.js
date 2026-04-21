class LogoutPage {

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }

  logout() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-logout").click();
    cy.log("Successfully logged out");
  }

}

export const logout_page = new LogoutPage();
