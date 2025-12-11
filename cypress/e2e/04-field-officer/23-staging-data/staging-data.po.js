class StagingData {
  test_data = Cypress.env("TEST_DATA");

  gridStagingDataListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-staging-data");
      cy.log("Successfully staging data list page.");
    });
  }

  startProcessStagingData() {
    cy.imsId("btn-start-process").click();
    cy.wait(1000);
    cy.imsId("btn-yes").click();
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully start process page  displayed the grid list of the staging data form "
    );
  }

  refreshButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const clickCount = 3; // change this number as needed
      for (let i = 0; i < clickCount; i++) {
        cy.imsId("btn-refresh").click();
        cy.wait(1000); // optional wait between clicks
      }
      cy.log("Successfully clicked refresh button multiple times");
    });
  }


  deleteButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var sdData = data.fieldOfficer.gridStagingData;
      cy.imsId("btn-start-process").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-refresh").click();
      cy.imsId("btn-delete").click();
      cy.imsId("btn-yes").click();
      cy.wait(2000);

      cy.log("Successfully delete button check on the staging data details list");
    });
  }

  detailsListStagingData() {
    cy.fixture(this.test_data).then((data) => {
      var sdData = data.fieldOfficer.gridStagingData;
      cy.formController("samity_id").type(sdData.selectSamity).type("{enter}");
      cy.formController("employee_id").type(sdData.selectEmployee).type("{enter}");
      cy.wait(3000);

      cy.log("Successfully staging data details list");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const grid_staging_data = new StagingData();
