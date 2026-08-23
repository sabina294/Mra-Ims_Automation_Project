import messages from "../../../../../support/constants/messages";
import { COMMON } from "../../../../../support/constants/selectors";
class CashBookReport {
    test_data = Cypress.env("TEST_DATA");

    gridCashBookListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "cash-book");
            cy.log(messages.ui.gridListMessage);
        });
    }

    viewReportButtonCheck() {
        cy.imsId(COMMON.BUTTONS.VIEW_REPORT).click();
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

export const cash_book_report = new CashBookReport();
