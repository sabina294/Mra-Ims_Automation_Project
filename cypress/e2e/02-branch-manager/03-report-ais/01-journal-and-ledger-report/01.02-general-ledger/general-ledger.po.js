import messages from "../../../../../support/constants/messages";
import { COMMON } from "../../../../../support/constants/selectors";
class GeneralLedgerReport {
    test_data = Cypress.env("TEST_DATA");

    gridGeneralLedgerListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "general-ledger");
            cy.log(messages.ui.gridListMessage);
        });
    }

    viewReportButtonCheck() {
        cy.imsId(COMMON.BUTTONS.VIEW_REPORT).click();
        cy.wait(3000);
        cy.log(messages.ui.viewMessage);
    }

    viewReportLedgerCheck() {
        cy.fixture(this.test_data).then((data) => {
            const glData = data.branchManager.gridGeneralLedgerFrom;
            cy.formController("ledger_id").type(glData.selectLedger).type("{enter}");
            cy.imsId(COMMON.BUTTONS.VIEW_REPORT).click();
            cy.wait(3000);
            cy.log(messages.ui.viewMessage);
        });
    }

    gridGoBackButtonCheck() {
        cy.selectMenu("menu-report", "general-ledger");
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const general_ledger_report = new GeneralLedgerReport();
