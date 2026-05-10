class JournalReport {
    test_data = Cypress.env("TEST_DATA");

    gridJournalReportListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "journal");
            cy.log("Successfully Journal Report list page.");
        });
    }

    viewReportButtonCheck() {
        cy.imsId("btn-view-report").click();
        cy.wait(3000);
        cy.log("Successful view report button check.");
    }

    gridGoBackButtonCheck() {
        cy.imsId("btn-go-back").click();
        cy.log("Successful go back button check.");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch bangla language check.");
    }
}

export const journal_report = new JournalReport();
