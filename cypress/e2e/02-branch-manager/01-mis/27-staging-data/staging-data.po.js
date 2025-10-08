class StagingData {
  test_data = Cypress.env("TEST_DATA");

  gridStagingDataListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-staging-data");
      cy.log("SuccessfullyStaging Data list page.");
    });
  }

  startProcessStagingData() {
    cy.imsId("btn-start-process").click();
    cy.wait(1000);
    cy.imsId("btn-yes").click();
    cy.wait(5000);
    cy.log(
      "successfully refresh page  displayed the grid list of the staging data form "
    );
  }
  refreshButtonCheck() {
  cy.fixture(this.test_data).then((data) => {
    const clickCount = 5; // change this number as needed
    for (let i = 0; i < clickCount; i++) {                                                            
      cy.imsId("btn-refresh").click();
      cy.wait(1000); // optional wait between clicks
    }
    cy.log("Successfully clicked refresh button multiple times");
  });
}
}

export const create_staging_data = new StagingData();
