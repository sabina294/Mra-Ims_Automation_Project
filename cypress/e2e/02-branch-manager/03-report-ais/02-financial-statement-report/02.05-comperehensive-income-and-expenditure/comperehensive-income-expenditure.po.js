import messages from "../../../../../support/constants/messages";
import { COMMON } from "../../../../../support/constants/selectors";
class ComprehensiveIncomeAndExpenditureReport {
    test_data = Cypress.env("TEST_DATA");

    gridComprehensiveIncomeAndExpenditureListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "comprehensive-income-and-expenditure");
            cy.log(messages.ui.gridListMessage);
        });
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

export const comperehensive_income_and_expenditure_report = new ComprehensiveIncomeAndExpenditureReport();
