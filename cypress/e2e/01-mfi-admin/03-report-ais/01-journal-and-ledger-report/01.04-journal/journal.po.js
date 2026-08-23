import messages from "../../../../../support/constants/messages";
import { COMMON } from "../../../../../support/constants/selectors";
class JournalReport {
    test_data = Cypress.env("TEST_DATA");

    gridJournalReportListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-report", "journal");
            // cy.wait(3000);
            cy.log(messages.ui.gridListMessage);
        });
    }

    viewReportButtonCheck() {
        cy.selectMenu("menu-report", "journal");
        // cy.imsId(COMMON.BUTTONS.VIEW_REPORT).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.viewMessage);
    }

    gridGoBackButtonCheck() {
        cy.selectMenu("menu-report", "journal");
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const journal_report = new JournalReport();
