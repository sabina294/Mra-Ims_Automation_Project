class CurrentYearAndMonthReceiptPaymentReport {
    test_data = Cypress.env("TEST_DATA");

    gridCurrentYearAndMonthReceiptPaymentListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "current-year-and-month-receipt-payment");
            cy.log("Successfully Current Year and Month Receipt and Payment list page.");
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

export const current_year_and_month_receipt_payment_report = new CurrentYearAndMonthReceiptPaymentReport();
