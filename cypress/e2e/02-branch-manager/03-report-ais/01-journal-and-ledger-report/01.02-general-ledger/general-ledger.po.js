class GeneralLedgerReport {
    test_data = Cypress.env("TEST_DATA");

    gridGeneralLedgerListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "general-ledger");
            // cy.wait(3000);
            cy.log("Successfully General Ledger list page.");
        });
    }

    viewReportButtonCheck() {
        cy.selectMenu("menu-report", "general-ledger");
        cy.imsId("btn-view-report").click();
        // cy.wait(5000);
        cy.imsId("btn-go-back").click();
        cy.log("Successful view report button check.");
    }

    gridGoBackButtonCheck() {
        cy.selectMenu("menu-report", "general-ledger");
        cy.imsId("btn-go-back").click();
        cy.log("Successful go back button check.");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsccessful switch bangla language check.");
    }
}

export const general_ledger_report = new GeneralLedgerReport();
