class StagingData {
  test_data = Cypress.env("TEST_DATA");

  gridStagingDataListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-staging-data");
      cy.log("Successfully staging data list page.");
    });
  }
  
    startProcessButtonCheck() {
    // cy.fixture(this.test_data).then((data) => {
    //   var sdData = data.mfiAdmin.stagingDataFrom;
    //   cy.imsId("btn-start-process").click();
    //   cy.imsId("btn-yes").click();
    //   cy.imsId("btn-refresh").click();
    //   cy.imsId("btn-delete").click();
    //   cy.imsId("btn-yes").click();
    //   cy.wait(2000);

    //   cy.log("Successfully start process data details list");
    // });
  }

  refreshButtonCheck() {
    // cy.fixture(this.test_data).then((data) => {
    //   var sdData = data.mfiAdmin.stagingDataFrom;
    //   cy.imsId("btn-start-process").click();
    //   cy.imsId("btn-yes").click();
    //   cy.imsId("btn-refresh").click();
    //   cy.imsId("btn-delete").click();
    //   cy.imsId("btn-yes").click();
    //   cy.wait(2000);

    //   cy.log("Successfully start process data details list");
    // });
  }

  deleteButtonCheck() {
    // cy.fixture(this.test_data).then((data) => {
    //   var sdData = data.mfiAdmin.stagingDataFrom;
    //   cy.imsId("btn-start-process").click();
    //   cy.imsId("btn-yes").click();
    //   cy.imsId("btn-refresh").click();
    //   cy.imsId("btn-delete").click();
    //   cy.imsId("btn-yes").click();
    //   cy.wait(2000);

    //   cy.log("Successfully start process data details list");
    // });
  }

  detailsListStagingData() {
    // cy.fixture(this.test_data).then((data) => {
    //   var sdData = data.mfiAdmin.gridStagingData;
    //   cy.formController("office_id").type(sdData.selectOffice).type("{enter}");
    //   cy.formController("samity_id").type(sdData.selectSamity).type("{enter}");
    //   cy.formController("employee_id").type(sdData.selectEmployee).type("{enter}");
    //   cy.wait(3000);

    //   cy.log("Successfully staging data details list");
    // });
  }

  gridLanguageSwitchCheck() {
    // cy.imsId("profile-menu").click();
    // cy.imsId("btn-lang-bangla").click();
    // cy.log("Unsuccessful switch to Bangla language check.");
  }
}

export const grid_staging_data = new StagingData();
