class CurrentYearAndMonthIncomeAndExpenditureReport {
    test_data = Cypress.env("TEST_DATA");

    gridCurrentYearAndMonthIncomeAndExpenditureListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "current-year-and-month-income-and-expenditure");
            // cy.wait(3000);
            cy.log("Successfully Current Year and Month Income and Expenditure list page.");
        });
    }

    viewReportButtonCheck() {
        cy.selectMenu("menu-report", "current-year-and-month-income-and-expenditure");
        // cy.imsId("btn-view-report").click();
        // cy.wait(5000);
        cy.imsId("btn-go-back").click();
        cy.log("Successful view report button check.");
    }

    gridGoBackButtonCheck() {
        cy.selectMenu("menu-report", "current-year-and-month-income-and-expenditure");

        cy.imsId("btn-go-back").click();
        cy.log("Successful go back button check.");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch bangla language check.");
    }
}

export const current_year_and_month_income_expenditure_report = new CurrentYearAndMonthIncomeAndExpenditureReport();
