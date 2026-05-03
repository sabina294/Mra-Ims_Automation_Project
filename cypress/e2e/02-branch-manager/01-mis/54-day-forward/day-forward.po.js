class DayForwardMis {
    test_data = Cypress.env("TEST_DATA");

    gridDayForwardListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-process", "submenu-day-forward");
            cy.log("Successfully day forward  list page.");
        });
    }

    gridDayForwardDayRoutine() {
        cy.imsId("btn-forward").click();
        cy.log("Successfully switch to day forward check.");
    }

    startProccess() {
        cy.imsId("btn-start-process").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.log("Successfully switch to start process button check.");
    }

    dayForwardConfirm() {
        cy.imsId("btn-confirm").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.log("Successfully confirm button check.");
    }

    gridDeleteButtonCheck() {
        cy.imsId("delete-button").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.imsId("btn-forward").click();
        cy.imsId("btn-start-process").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.imsId("btn-confirm").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.log("Successfully delete button check.");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Successful switch to Bangla language check.");
    }
}

export const grid_day_forward = new DayForwardMis();
