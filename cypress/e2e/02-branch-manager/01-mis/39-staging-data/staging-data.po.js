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
    cy.imsId("btn-yes").click();
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the staging data form "
    );
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the staging data form "
    );
  }
}

export const create_staging_data = new StagingData();
