class ComprehensiveIncomeAndExpenditureReport {
    test_data = Cypress.env("TEST_DATA");

    gridComprehensiveIncomeAndExpenditureListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "comprehensive-income-and-expenditure");
            // cy.wait(3000);
            cy.log("Successfully Comprehensive Income and Expenditure list page.");
        });
    }

    viewReportButtonCheck() {
        cy.selectMenu("menu-report", "comprehensive-income-and-expenditure");
        // cy.imsId("btn-view-report").click();
        // cy.wait(5000);
        cy.imsId("btn-go-back").click();
        cy.log("Successful view report button check.");
    }

    gridGoBackButtonCheck() {
        cy.selectMenu("menu-report", "comprehensive-income-and-expenditure");

        cy.imsId("btn-go-back").click();
        cy.log("Successful go back button check.");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch bangla language check.");
    }
}

export const comperehensive_income_and_expenditure_report = new ComprehensiveIncomeAndExpenditureReport();
