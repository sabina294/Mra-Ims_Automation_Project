import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class BalanceSheet {
    test_data = Cypress.env("TEST_DATA");

    gridBalanceSheetListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-financial-statement", "submenu-balance-sheet");
            cy.log(messages.ui.gridListMessage);
        });
    }

    gridRefreshButtonCheck() {
        cy.imsId(COMMON.BUTTONS.RELOAD).click();
        cy.log(messages.ui.gridRefreshSuccess);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }

    gridGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

}

export const create_balance_sheet = new BalanceSheet();
