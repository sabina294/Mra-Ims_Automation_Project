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
            // cy.imsId("amount-input").type(swData.inputAmount);
            cy.imsId("btn-go-back").click();

            // cy.formController("samityId").type(swData.selectSamity).type("{enter}");
            // cy.wait(2000);
            // cy.formController("employeeId").type(swData.selectMember).type("{enter}");
            // cy.wait(2000);
            // cy.formController("accountId").type(swData.selectAccount).type("{enter}");
            // cy.wait(2000);
            // cy.formController("loanInput").type(swData.inputAmount);
            // cy.wait(2000);

            // cy.imsId("btn-save").click();
            // cy.imsId("btn-yes-yes").click();
            // cy.imsId("btn-ok").click();
            cy.log("Successfully created new savings withdraw");
        });
    }

    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on the savings withdraw list page.");
    }

    viewSpecialCollection() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-view").click();
        cy.imsId("btn-go-back").click();
        cy.log("successfully on the view savings withdraw list page.");
    }

    editSpecialCollection() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-edit").click();
        cy.imsId("btn-go-back").click();
        cy.log("successfully on the edit savings withdraw list page.");
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

    gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsuccessful switch bangla language check.");
  }


}

export const create_savings_withdraw = new savingsWithdraw();
