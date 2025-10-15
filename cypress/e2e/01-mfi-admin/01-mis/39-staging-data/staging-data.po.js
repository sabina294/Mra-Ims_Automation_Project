class StagingData {
  test_data = Cypress.env("TEST_DATA");

  gridStagingDataListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-staging-data");
      cy.log("Successfully staging data list page.");
    });
  }

  refreshButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-refresh").click();
      cy.wait(2000);
      cy.log("Successfully refresh button check");
    });
  }

  selectOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var sData = data.mfiAdmin.gridStagingData;
      cy.formController("office_id").type(sData.selectOffice).type("{enter}");
      cy.wait(2000);
      cy.log("Successfully select office dropdown check");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsuccessful switch to Bangla language check.");
  }
}

export const grid_staging_data = new StagingData();
