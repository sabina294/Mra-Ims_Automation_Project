class IncomeStatementReport {
    test_data = Cypress.env("TEST_DATA");

    gridIncomeStatementListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "income-statement");
            cy.log("Successfully Income Statement list page.");
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

export const income_statement_report = new IncomeStatementReport();
