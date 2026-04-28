class cancelSamity {
    test_data = Cypress.env("TEST_DATA");

    gridCancelSamityListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-process", "submenu-cancel-samity");
            cy.log("Successfully Cancel Samity list page.");
        });
    }
    
  gridCheckboxCheck() {
    cy.imsId("row-checkbox-2").click();
    cy.log("Checkbox should be clickable and functional.");
  }

   cancelMultipleSamity() {
    cy.imsId("btn-cancel-multiple").click();
    cy.imsId("btn-yes").click();
    cy.imsId("btn-ok").click();
    cy.log("Cancel samity should be clickable and functional.");
  }

   restoreSamity() {
    cy.imsId("btn-delete-1020-109").click();
    cy.imsId("btn-yes").click();
    cy.imsId("btn-ok").click();
    cy.log("Restore samity should be clickable and functional.");
  }

   cancelSamity() {
    cy.fixture(this.test_data).then((data) => {
    var csData = data.branchManager.cancelSamity;
    cy.imsId("btn-cancel-1020-109").click();
    cy.imsId("btn-yes").click();
    cy.fromController("remarks").type(csData.remarksCancel);
    cy.log("Cancel samity should be clickable and functional.");
    });
  }

   submitCancelSamity() {
    cy.fixture(this.test_data).then((data) => {
    var csData = data.branchManager.cancelSamity;
    cy.imsId("btn-yes").click();
    cy.log("Cancel samity should be clickable and functional.");
    });
  }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Successfully switched to bangla language.");
    }

}

export const cancel_samity = new cancelSamity();
