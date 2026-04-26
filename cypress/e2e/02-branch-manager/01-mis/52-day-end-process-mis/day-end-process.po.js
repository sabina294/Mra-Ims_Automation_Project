class DayEndProcessMis {
  test_data = Cypress.env("TEST_DATA");

  gridDayEndProcessMisListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-day-end-process-mis");
      cy.log("Successfully Day end process list page.");
    });
  }

   gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch bangla language check.");
    }

    
}

export const create_day_end_process = new DayEndProcessMis();
