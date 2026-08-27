import messages from "../../../../../support/constants/messages";
import { COMMON } from "../../../../../support/constants/selectors";
class CumulativeLedgerSubledgerReport {
    test_data = Cypress.env("TEST_DATA");

    gridCumulativeLedgerSubledgerReportListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.REPORT, COMMON.MENUS.CUMULATIVE_LEDGER_SUBLEDGER_REPORT);
            // cy.wait(3000);
            cy.log(messages.ui.gridListMessage);
        });
    }

    viewReportButtonCheck() {
        cy.selectMenu(COMMON.MENUS.REPORT, COMMON.MENUS.CUMULATIVE_LEDGER_SUBLEDGER_REPORT);
        // cy.imsId(COMMON.BUTTONS.VIEW_REPORT).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.viewMessage);
    }

    gridGoBackButtonCheck() {
        cy.selectMenu(COMMON.MENUS.REPORT, COMMON.MENUS.CUMULATIVE_LEDGER_SUBLEDGER_REPORT);
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const cumulative_ledger_subledger_report = new CumulativeLedgerSubledgerReport();
