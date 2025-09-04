class CashBookReport {
    test_data = Cypress.env("TEST_DATA");

    gridCashBookListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "cash-book");
            // cy.wait(3000);
            cy.log("Successfully Cash Book list page.");
        });
    }

    viewReportButtonCheck() {
        cy.selectMenu("menu-report", "cash-book");
        // cy.imsId("btn-view-report").click();
        cy.imsId("btn-go-back").click();
        cy.log("Successful view report button check.");
    }

    gridGoBackButtonCheck() {
        cy.selectMenu("menu-report", "cash-book");
        cy.imsId("btn-go-back").click();
        cy.log("Successful go back button check.");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch bangla language check.");
    }
}

export const cash_book_report = new CashBookReport();
