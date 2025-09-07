class IncomeStatementReport {
    test_data = Cypress.env("TEST_DATA");

    gridIncomeStatementListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "income-statement");
            // cy.wait(3000);
            cy.log("Successfully Income Statement list page.");
        });
    }

    viewReportButtonCheck() {
        cy.selectMenu("menu-report", "income-statement");
        cy.imsId("btn-view-report").click();
        // cy.wait(5000);
        cy.imsId("btn-go-back").click();
        cy.log("Successful view report button check.");
    }

    gridGoBackButtonCheck() {
        cy.selectMenu("menu-report", "income-statement");

        cy.imsId("btn-go-back").click();
        cy.log("Successful go back button check.");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch bangla language check.");
    }
}

export const income_statement_report = new IncomeStatementReport();
