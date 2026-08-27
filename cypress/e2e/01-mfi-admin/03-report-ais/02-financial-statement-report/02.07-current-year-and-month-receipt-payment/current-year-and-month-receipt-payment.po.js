import messages from "../../../../../support/constants/messages";
import { COMMON } from "../../../../../support/constants/selectors";
class CurrentYearAndMonthReceiptPaymentReport {
    test_data = Cypress.env("TEST_DATA");

    gridCurrentYearAndMonthReceiptPaymentListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.REPORT, COMMON.MENUS.CURRENT_YEAR_AND_MONTH_RECEIPT_PAYMENT_REPORT);
            // cy.wait(3000);
            cy.log(messages.ui.gridListMessage);
        });
    }

    viewReportButtonCheck() {
        cy.selectMenu(COMMON.MENUS.REPORT, COMMON.MENUS.CURRENT_YEAR_AND_MONTH_RECEIPT_PAYMENT_REPORT);
        // cy.imsId(COMMON.BUTTONS.VIEW_REPORT).click();
        // cy.wait(5000);
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.viewMessage);
    }

    gridGoBackButtonCheck() {
        cy.selectMenu(COMMON.MENUS.REPORT, COMMON.MENUS.CURRENT_YEAR_AND_MONTH_RECEIPT_PAYMENT_REPORT);

        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const current_year_and_month_receipt_payment_report = new CurrentYearAndMonthReceiptPaymentReport();
