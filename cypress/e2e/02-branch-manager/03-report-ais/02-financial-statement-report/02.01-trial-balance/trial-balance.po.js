class TrialBalanceReport {
    test_data = Cypress.env("TEST_DATA");

    gridTrialBalanceListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "trial-balance");
            cy.log("Successfully Trial Balance list page.");
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

export const trial_balance_report = new TrialBalanceReport();
