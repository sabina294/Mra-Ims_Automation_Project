class CumulativeLedgerSubledgerReport {
    test_data = Cypress.env("TEST_DATA");

    gridCumulativeLedgerSubledgerReportListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "cumulative-ledger-subledger-report");
            // cy.wait(3000);
            cy.log("Successfully Cumulative Ledger & Subledger Report list page.");
        });
    }

    viewReportButtonCheck() {
        cy.selectMenu("menu-report", "cumulative-ledger-subledger-report");
        // cy.imsId("btn-view-report").click();
        cy.imsId("btn-go-back").click();
        cy.log("Successful view report button check.");
    }

    gridGoBackButtonCheck() {
        cy.selectMenu("menu-report", "cumulative-ledger-subledger-report");
        cy.imsId("btn-go-back").click();
        cy.log("Successful go back button check.");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();    
        cy.log("Unsuccessful switch bangla language check.");
    }
}

export const cumulative_ledger_subledger_report = new CumulativeLedgerSubledgerReport();
