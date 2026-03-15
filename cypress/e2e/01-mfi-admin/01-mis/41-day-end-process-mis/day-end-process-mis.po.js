class DayEndProcessMis {
  test_data = Cypress.env("TEST_DATA");

  gridDayEndProcessListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-day-end-process-mis");
      cy.log("Successfully day end process list page.");
    });
  }
  
  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsuccessful switch to Bangla language check.");
  }
}

export const grid_day_end_process = new DayEndProcessMis();
