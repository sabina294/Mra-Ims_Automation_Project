class SavingsWithdraw {
    test_data = Cypress.env("TEST_DATA");

    gridSavingsWithdrawListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-savings-withdraw");
            cy.log("Successfully Savings Withdraw list page.");
        });
    }

    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log(
            "Action button clicked successfully on the Savings Withdraw list page."
        );
    }

    viewSavingsWithdraw() {
        cy.fixture(this.test_data).then((data) => {
            var swData = data.mfiAdmin.gridSavingsWithdraw;
            cy.formController("search_text").type(swData.samity);
            cy.imsId("toggle-action").first().click();
            cy.imsId("btn-table-action-view").click();
            cy.imsId("btn-go-back").click();
            cy.log("Successfully viewed the Savings Withdraw list page");
        });
    }

    viewGoBackButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-view").click();
        cy.imsId("btn-go-back").click();
        cy.log("Successful go back button check.");
    }

    searchInSavingsWithdrawName() {
        cy.fixture(this.test_data).then((data) => {
            var swData = data.mfiAdmin.gridSavingsWithdraw;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(swData.samity);
            cy.log("Successfully search in the Savings Withdraw");
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

    statusDraftDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var swData = data.mfiAdmin.gridSavingsWithdraw;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(swData.Status).type("{enter}");
            cy.log("Savings Withdraw status inactive dropdown check successfully");
        });
    }

    statusSubmittedDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var swData = data.mfiAdmin.gridSavingsWithdraw;
            cy.formController("status").type(swData.statusSelect).type("{enter}");
            cy.log("Savings Withdraw status active dropdown check successfully");
        });
    }

    gridHistoryOnButton() {
        cy.imsId("btn-draft-on").click();
        cy.log("History button should be clickable and functional.");
    }

    gridHistoryButtonOff() {
    cy.imsId("btn-draft-on").click();
        cy.log("History button should be clickable and functional.");
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


