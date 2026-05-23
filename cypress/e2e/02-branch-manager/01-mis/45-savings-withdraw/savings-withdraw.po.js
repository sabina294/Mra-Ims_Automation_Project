import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class savingsWithdraw {
    test_data = Cypress.env("TEST_DATA");

    gridSavingsWithdrawListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-savings-withdraw");
            cy.log("Successfully savings withdraw collection list page.");
        });
    }

    createNewWithdraw() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-add-new").click();
            var swData = data.branchManager.savingsWithdraw;
            cy.formController("samityId").click();
            cy.contains(swData.selectSamity).click()
            cy.formController("memberId").click();
            cy.contains(swData.selectMember).click()
            cy.formController("accountId").click();
            cy.contains(swData.selectAccount).click()
            cy.imsId("amount-input").clear().type(swData.inputAmount);
            cy.log("Successfully created new savings withdraw");
        });
    }

    saveNewWithdraw() {
        cy.fixture(this.test_data).then((data) => {
            var swData = data.branchManager.savingsWithdraw;
            cy.imsId("btn-submit").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();
            cy.log("Successfully created new savings withdraw");
        });
    }

    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on the savings withdraw list page.");
    }

    viewWithdraw() {
        cy.imsId("btn-table-action-view").click();
        cy.log("successfully on the view savings withdraw list page.");
    }

    viewGoBack() {
        cy.imsId("btn-go-back").click();
        cy.log("successfully on the view go back savings withdraw list page.");
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }

    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the savings withdraw "
        );
    }

    gridSamityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var swData = data.branchManager.savingsWithdraw;
            cy.formController("samity_id").type(swData.samity).type("{enter}");
            cy.log("Successfully selected samity for new savings withdraw");
        });
    }

    gridHistoryButtonOnCheck() {
        cy.imsId(GRID.BUTTONS.HISTORY_ON)
            .check({ force: true });
        cy.log(messages.ui.historyOnMessage);
    }

    samityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var swData = data.branchManager.savingsWithdraw;
            cy.formController("samity_id").type(swData.samityDropdown).type("{enter}");
            cy.log(
                "successfully samity dropdown displayed the grid list of the savings withdraw "
            );
        })
    }

    gridHistoryButtonOffCheck() {
        cy.imsId(GRID.BUTTONS.HISTORY_OFF)
            .uncheck({ force: true });
        cy.log(messages.ui.historyOffMessage);
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch bangla language check.");
    }

}

export const create_savings_withdraw = new savingsWithdraw();
