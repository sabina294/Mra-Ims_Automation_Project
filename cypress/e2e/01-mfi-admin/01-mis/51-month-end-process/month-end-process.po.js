class MonthEndProcess {
  test_data = Cypress.env("TEST_DATA");

  gridMonthEndProcessListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-month-end-process-mis");
      cy.log("Successfully month end process list page.");
    });
  }
  
  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsuccessful switch to Bangla language check.");
  }
}

export const grid_month_end_process = new MonthEndProcess();
