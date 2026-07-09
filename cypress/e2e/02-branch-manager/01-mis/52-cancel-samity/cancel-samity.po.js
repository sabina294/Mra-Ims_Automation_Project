class cancelSamity {
    test_data = Cypress.env("TEST_DATA");

    gridCancelSamityListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-process", "submenu-cancel-samity");
            cy.log("Successfully Cancel Samity list page.");
        });
    }

    gridCheckboxCheck() {
        cy.imsId("check-samity-2").click();
        cy.log("Checkbox should be clickable and functional.");
    }

    cancelMultipleSamity() {
        cy.imsId("btn-cancel-multiple").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.log("Cancel samity should be clickable and functional.");
    }

    restoreSamity() {
        cy.imsId("btn-restore-2").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.log("Restore samity should be clickable and functional.");
    }

    cancelSamity() {
        cy.fixture(this.test_data).then((data) => {
            const csData = data.branchManager.cancelSamity;

            cy.imsId("btn-cancel-2").click();
            cy.imsId("btn-yes").click();

            cy.get('[formcontrolname="remarks"]')   // 🔥 use this first
                .should("be.visible")
                .and("not.be.disabled")
                .clear()
                .type(csData.remarksCancel);
        });
    }

    submitCancelSamity() {
        cy.imsId("btn-submit").should("be.visible").click();
        cy.imsId("btn-ok").click();
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Successfully switched to bangla language.");
    }

}

export const cancel_samity = new cancelSamity();
