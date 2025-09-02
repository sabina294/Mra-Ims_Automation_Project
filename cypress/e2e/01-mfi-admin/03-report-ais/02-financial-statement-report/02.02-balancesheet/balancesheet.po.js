class BalancesheetReport {
    test_data = Cypress.env("TEST_DATA");

    gridBalancesheetListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "balance-sheet");
            // cy.wait(3000);
            cy.log("Successfully Balance Sheet list page.");
        });
    }

    viewReportButtonCheck() {
        cy.selectMenu("menu-report", "balance-sheet");
        cy.imsId("btn-view-report").click();
        // cy.wait(5000);
        cy.imsId("btn-go-back").click();
        cy.log("Successful view report button check.");
    }

    gridGoBackButtonCheck() {
        cy.selectMenu("menu-report", "balance-sheet");

        cy.imsId("btn-go-back").click();
        cy.log("Successful go back button check.");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch bangla language check.");
    }
}

export const balancesheet_report = new BalancesheetReport();
