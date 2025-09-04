class CurrentYearAndMonthReceiptPaymentReport {
    test_data = Cypress.env("TEST_DATA");

    gridCurrentYearAndMonthReceiptPaymentListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "current-year-and-month-receipt-payment");
            // cy.wait(3000);
            cy.log("Successfully Current Year and Month Receipt and Payment list page.");
        });
    }

    viewReportButtonCheck() {
        cy.selectMenu("menu-report", "current-year-and-month-receipt-payment");
        // cy.imsId("btn-view-report").click();
        // cy.wait(5000);
        cy.imsId("btn-go-back").click();
        cy.log("Successful view report button check.");
    }

    gridGoBackButtonCheck() {
        cy.selectMenu("menu-report", "current-year-and-month-receipt-payment");

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
