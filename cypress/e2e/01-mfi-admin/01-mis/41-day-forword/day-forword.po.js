class DayForwardMis {
  test_data = Cypress.env("TEST_DATA");

  gridDayForwardListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-day-forward");
      cy.log("Successfully day forward  list page.");
    });
  }
  
  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsuccessful switch to Bangla language check.");
  }
}

export const grid_day_forward = new DayForwardMis();
