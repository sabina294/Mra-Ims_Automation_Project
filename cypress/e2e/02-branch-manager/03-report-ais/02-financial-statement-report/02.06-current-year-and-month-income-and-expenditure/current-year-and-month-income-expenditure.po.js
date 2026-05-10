class CurrentYearAndMonthIncomeAndExpenditureReport {
    test_data = Cypress.env("TEST_DATA");

    gridCurrentYearAndMonthIncomeAndExpenditureListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "current-year-and-month-income-and-expenditure");
            cy.log("Successfully Current Year and Month Income and Expenditure list page.");
        });
    }

    selectMonth() {
        cy.get('[formcontrolname="month"]')
            .should('be.visible')
            .click();
        cy.get('.ant-picker-header-view')
            .should('be.visible')
            .click();
        cy.contains('.ant-picker-cell-inner', '2025')
            .should('be.visible')
            .click({ force: true });
        cy.contains('.ant-picker-cell-inner', 'Feb')
            .should('be.visible')
            .click({ force: true });
        cy.log("Successful view report button check.");
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

export const current_year_and_month_income_expenditure_report = new CurrentYearAndMonthIncomeAndExpenditureReport();
