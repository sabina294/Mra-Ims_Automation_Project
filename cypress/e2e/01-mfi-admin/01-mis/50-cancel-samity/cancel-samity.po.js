class CancelSamity {
  test_data = Cypress.env("TEST_DATA");

  gridCancelSamityListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-cancel-samity");
      cy.log("Successfully cancel samity list page.");
    });
  }
  
  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsuccessful switch to Bangla language check.");
  }
}

export const grid_cancel_samity = new CancelSamity();
