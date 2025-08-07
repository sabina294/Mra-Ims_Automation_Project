class LogoutPage {
  logout() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-logout").click();
    cy.log("Successfully logged out");
  }
}

export const logout_page = new LogoutPage();

