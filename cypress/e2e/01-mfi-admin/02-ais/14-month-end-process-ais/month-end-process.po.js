import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class MonthEndProcessAis {
    test_data = Cypress.env("TEST_DATA");

    gridMonthEndProcessPage() {
        cy.fixture(this.test_data).then(() => {
            cy.selectMenu("menu-process", "submenu-month-end-process-ais");
            cy.log(messages.ui.actionMessage);
        });
    }

    processPreviewButtonCheck() {
        cy.imsId("btn-preview").eq(0).click();
        cy.log(messages.ui.previewMessage);
    }

    processGoBackButtonCheck() {
        cy.imsId("go-back-button").click();
        cy.log(messages.ui.goBackSuccess);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_month_end_process_ais = new MonthEndProcessAis();
