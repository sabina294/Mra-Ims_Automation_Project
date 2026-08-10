import { COMMON } from "../../../../support/constants/selectors";
import messages from "../../../../support/constants/messages";
class SavingsWithdraw {
    test_data = Cypress.env("TEST_DATA");

    gridSavingsWithdrawListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-savings-withdraw");
            cy.log(messages.ui.gridListMessage);
        });
    }

    statusOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const swData = data.mfiAdmin.gridSavingsWithdraw;
            cy.formController("office_id").type(swData.selectOffice).type("{enter}");
            cy.log(
                "Savings Withdraw status office dropdown check successfully"
            );
        });
    }

    gridHistoryOnButton() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.historyOnMessage);
    }

    gridHistoryButtonOff() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.historyOffMessage);
    }

    gridResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.ui.gridResetSuccess);
    }
    gridRefreshButtonCheck() {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.log(
            messages.ui.gridRefreshSuccess
        );
    }
    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_savings_withdraw = new SavingsWithdraw();


