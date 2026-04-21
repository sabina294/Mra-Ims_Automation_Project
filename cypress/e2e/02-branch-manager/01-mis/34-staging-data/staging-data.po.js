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
    cy.wait(3000);
    cy.log(
      "successfully refresh page  displayed the grid list of the staging data form "
    );
  }

  refreshButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const clickCount = 3; // change this number as needed
      for (let i = 0; i < clickCount; i++) {
        cy.imsId("btn-refresh").click();
        cy.wait(2000); // optional wait between clicks
      }
      cy.log("Successfully clicked refresh button multiple times");
    });
  }

  fieldOfficerDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var SData = data.branchManager.createStagingDataFrom;
      cy.formController("field_officer_id").type(SData.fieldOfficer).type("{enter}");
      cy.wait(2000);
      cy.log(
        "successfully field officer dropdown selected and grid list displayed "
      );
    });
  }

  samityDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var SData = data.branchManager.createStagingDataFrom;
      cy.formController("samity_id").type(SData.samity).type("{enter}");
      cy.wait(2000);
      cy.log(
        "successfully samity dropdown selected and grid list displayed "
      );
    });
  }

  deleteButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var SData = data.branchManager.createStagingDataFrom;
      cy.imsId("btn-delete").click();
      cy.imsId("btn-yes").click();
      cy.wait(5000);
      cy.imsId("btn-start-process").click();
      cy.wait(1000);
      cy.imsId("btn-yes").click();
      cy.wait(3000);
      cy.log(
        "successfully delete button clicked and grid list displayed "
      );
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch to Bangla language check.");
  }

}

export const create_staging_data = new StagingData();
