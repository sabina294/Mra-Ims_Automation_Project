import messages from "../../../../../support/constants/messages";
import { COMMON } from "../../../../../support/constants/selectors";
class IncomeStatementReport {
    test_data = Cypress.env("TEST_DATA");

    gridIncomeStatementListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "income-statement");
            // cy.wait(3000);
            cy.log(messages.ui.gridListMessage);
        });
    }

    viewReportButtonCheck() {
        cy.selectMenu("menu-report", "income-statement");
        cy.imsId(COMMON.BUTTONS.VIEW_REPORT).click();
        // cy.wait(5000);
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.viewMessage);
    }

    gridGoBackButtonCheck() {
        cy.selectMenu("menu-report", "income-statement");

        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const income_statement_report = new IncomeStatementReport();
