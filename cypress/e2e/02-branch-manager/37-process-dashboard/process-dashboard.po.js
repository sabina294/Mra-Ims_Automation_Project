class ProcessDashboard {
  test_data = Cypress.env("TEST_DATA");

  gridProcessDashboardListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-process-dashboard");
      cy.log("Successfully Process Dashboard list page.");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const grid_process_dashboard = new ProcessDashboard();
