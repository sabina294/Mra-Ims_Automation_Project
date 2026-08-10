import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class ChartOfAccountsCreation {
    test_data = Cypress.env("TEST_DATA");

    gridChartOfAccountsListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-accounting", "submenu-chart-of-accounts");
            cy.log(messages.ui.gridListMessage);
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_chart_of_accounts = new ChartOfAccountsCreation();
