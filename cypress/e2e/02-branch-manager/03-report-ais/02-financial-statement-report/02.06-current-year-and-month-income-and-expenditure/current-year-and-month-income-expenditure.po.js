import messages from "../../../../../support/constants/messages";
import { COMMON } from "../../../../../support/constants/selectors";
class CurrentYearAndMonthIncomeAndExpenditureReport {
    test_data = Cypress.env("TEST_DATA");

    gridCurrentYearAndMonthIncomeAndExpenditureListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "current-year-and-month-income-and-expenditure");
            cy.log(messages.ui.gridListMessage);
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
        cy.log(messages.ui.viewMessage);
    }


    viewReportButtonCheck() {
        cy.imsId(COMMON.BUTTONS.VIEW_REPORT).click();
        cy.wait(3000);
        cy.log(messages.ui.viewMessage);
    }

    gridGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const current_year_and_month_income_expenditure_report = new CurrentYearAndMonthIncomeAndExpenditureReport();
