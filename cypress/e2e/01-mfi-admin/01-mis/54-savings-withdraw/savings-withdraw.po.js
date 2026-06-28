import { GRID } from "../../../../support/constants/selectors";
import messages from "../../../../support/constants/messages";
class SavingsWithdraw {
    test_data = Cypress.env("TEST_DATA");

    gridSavingsWithdrawListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-savings-withdraw");
            cy.log("Successfully Savings Withdraw list page.");
        });
    }

    statusOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var swData = data.mfiAdmin.gridSavingsWithdraw;
            cy.formController("office_id").type(swData.selectOffice).type("{enter}");
            cy.log(
                "Savings Withdraw status office dropdown check successfully"
            );
        });
    }

    gridHistoryOnButton() {
        cy.imsId(GRID.BUTTONS.HISTORY_ON)
            .check({ force: true });
        cy.log(messages.ui.historyOnMessage);
    }

    gridHistoryButtonOff() {
        cy.imsId(GRID.BUTTONS.HISTORY_OFF)
            .uncheck({ force: true });
        cy.log(messages.ui.historyOffMessage);
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }
    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the Savings Withdraw"
        );
    }
    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsccessful switch bangla language check.");
    }
}

export const grid_savings_withdraw = new SavingsWithdraw();


