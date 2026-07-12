class loanAdjustment {
    test_data = Cypress.env("TEST_DATA");


    gridLoanAdjustmentListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-loan-adjustment");
            cy.log("Successfully loan adjustment list page loaded.");
        });
    }

    createNewLoanAdjustment() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-add-new").click();

            var laData = data.branchManager.loanAdjustment;

            cy.formController("samity_id").click();
            cy.contains(laData.selectSamity).click()
            cy.formController("member_id").click();
            cy.contains(laData.selectMember).click()
            cy.formController("loan_account_id").click();
            cy.contains(laData.selectAccount).click()
            cy.imsId("checkbox-1").click();
            cy.imsId("input-1").clear().type(laData.inputAmount);
            cy.log("Successfully created new loan adjustment.");
        });
    }


    saveNewLoanAdjustment() {
        cy.fixture(this.test_data).then((data) => {

            cy.imsId("btn-submit").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();

            cy.log("Successfully saved new loan adjustment.");
        });
    }


    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on loan adjustment list page.");
    }


    viewLoanAdjustment() {
        cy.imsId("btn-table-action-view").click();
        cy.log("Successfully viewed loan adjustment details.");
    }


    viewGoBack() {
        cy.imsId("btn-go-back").click();
        cy.log("Successfully back from loan adjustment view page.");
    }


    actionLoanAdjustmentUnsubmit() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-unsubmit").click();

        cy.log("Successfully opened loan adjustment unsubmit action.");
    }


    actionLoanAdjustmentUnsubmitGoBack() {
        cy.imsId("btn-go-back").click();

        cy.log("Successfully back from unsubmit action page.");
    }


    loanAdjustmentUnsubmit() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-unsubmit").click();

        cy.imsId("btn-unsubmit").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();

        cy.log("Successfully unsubmitted loan adjustment.");
    }


    actionEditLoanAdjustment() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-edit").click();

        cy.log("Successfully opened loan adjustment edit page.");
    }

    editDraftButton() {
        cy.imsId("btn-draft").first().click();

        // cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();

        cy.log("Successfully saved loan adjustment draft.");
    }


    editGoBack() {
        // cy.imsId("toggle-action").first().click();
        // cy.imsId("btn-table-action-edit").click();

        cy.imsId("btn-go-back").click();

        cy.log("Successfully back from loan adjustment edit page.");
    }


    actionLoanAdjustmentSubmit() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-submit").click();

        cy.log("Successfully opened loan adjustment submit action.");
    }


    actionLoanAdjustmentGoBack() {
        cy.imsId("btn-go-back").click();

        cy.log("Successfully back from loan adjustment submit page.");
    }


    loanAdjustmentSubmit() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-submit").click();

        cy.imsId("btn-submit").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();

        cy.log("Successfully submitted loan adjustment.");
    }


    loanAdjustmentDeleteProcess() {

        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-unsubmit").click();

        cy.imsId("btn-unsubmit").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();

        cy.log("Successfully prepared loan adjustment delete process.");
    }


    loanAdjustmentActionDelete() {

        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-delete").click();

        cy.log("Successfully opened loan adjustment delete action.");
    }

    loanAdjustmentActionDeleteGoBack() {
        cy.imsId("btn-go-back").click();
        cy.log("Successfully delete go back loan adjustment delete action.");
    }


    loanAdjustmentDelete() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-delete").click();
        cy.imsId("btn-delete").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();

        cy.log("Successfully deleted loan adjustment.");
    }


    loanAdjustmentAgain() {

        cy.fixture(this.test_data).then((data) => {

            cy.imsId("btn-add-new").click();

            var laData = data.branchManager.loanAdjustment;

            cy.formController("samity_id").click();
            cy.contains(laData.selectSamity).click()
            cy.formController("member_id").click();
            cy.contains(laData.selectMember).click()
            cy.formController("loan_account_id").click();
            cy.contains(laData.selectAccount).click()
            cy.imsId("checkbox-1").click();
            cy.imsId("input-1").clear().type(laData.inputAmount);

            cy.log("Successfully created loan adjustment again.");
        });
    }


    againSaveNewLoanAdjustment() {

        cy.imsId("btn-submit").click();

        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();

        cy.log("Successfully saved loan adjustment again.");
    }


    editDraftButton() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-unsubmit").click();
        cy.imsId("btn-unsubmit").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-edit").click();
        cy.imsId("btn-draft").first().click();
        cy.imsId("btn-ok").click();

        cy.log("Successfully saved loan adjustment draft.");
    }

    editSubmitButton() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-view").click();
        cy.get('.ant-switch-inner').click();
        cy.imsId("btn-submit").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.log("Successfully Edit submit loan adjustment draft.");
    }

    gridResetButtonCheck() {

        cy.imsId("btn-reset").click();

        cy.log("Successfully reset loan adjustment grid.");
    }


    gridRefreshButtonCheck() {

        cy.imsId("btn-refresh").click();

        cy.log("Successfully refreshed loan adjustment grid.");
    }

    gridLanguageSwitchCheck() {

        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Successfully switched loan adjustment language to Bangla.");
    }
}

export const create_loan_adjustment = new loanAdjustment();
