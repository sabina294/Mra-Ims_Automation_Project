import messages from "../../../../../support/constants/messages";
import { COMMON } from "../../../../../support/constants/selectors";
class CumulativeLedgerSubledgerReport {
    test_data = Cypress.env("TEST_DATA");

    gridCumulativeLedgerSubledgerReportListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "cumulative-ledger-subledger-report");
            cy.log(messages.ui.gridListMessage);
        });
    }

    viewReportButtonCheck() {
        cy.imsId("btn-view-report").click();
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

export const cumulative_ledger_subledger_report = new CumulativeLedgerSubledgerReport();
