class StagingData {
  test_data = Cypress.env("TEST_DATA");

  gridStagingDataListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-staging-data");
      cy.log("Successfully staging data list page.");
    });
  }

  selectFieldOfficer() {
      cy.fixture(this.test_data).then((data) => {
        var sdData = data.fieldOfficer.gridStagingData;
        cy.formController("field_officer_id").type(sdData.selectFieldOfficer).type("{enter}");
      });
    cy.log(
      "successfully start process page  displayed the grid list of the select field officer form "
    );
  }

  selectSamity() {
    cy.fixture(this.test_data).then((data) => {
      var sdData = data.fieldOfficer.gridStagingData;
      cy.formController("samity_id").type(sdData.selectSamity).type("{enter}");
      cy.log("successfully start process page  displayed the grid list of the select samity form ");
    });
  }

  refreshButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const clickCount = 2; // change this number as needed
      for (let i = 0; i < clickCount; i++) {
        cy.imsId("btn-refresh").click();
        cy.wait(1000); // optional wait between clicks
      }
      cy.log("Successfully clicked refresh button multiple times");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const grid_staging_data = new StagingData();
