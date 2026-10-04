import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";

class loanAdjustment {
    test_data = Cypress.env("TEST_DATA");

    gridLoanAdjustmentListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.TRANSACTION, COMMON.MENUS.LOAN_ADJUSTMENT);
            cy.log(messages.ui.gridListMessage);
        });
    }

    createNewLoanAdjustment() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

            const laData = data.fieldOfficer.loanAdjustment;

            cy.formController("samity_id").click();
            cy.contains(laData.selectSamity).click()
            cy.formController("member_id").click();
            cy.contains(laData.selectMember).click()
            cy.formController("loan_account_id").click();
            cy.contains(laData.selectAccount).click()
            cy.imsId(COMMON.CHECKBOXES.FIRST).click();
            cy.imsId(COMMON.INPUTS.AMOUNT_FIRST).clear().type(laData.inputAmount);
            cy.log(messages.ui.submitSuccess);
        });
    }


    saveNewLoanAdjustment() {
        cy.fixture(this.test_data).then((data) => {

            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();

            cy.log(messages.form.submitSuccess);
        });
    }


    actionButtonCheck() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(messages.ui.actionMessage);
    }


    viewLoanAdjustment() {
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.log(messages.ui.viewMessage);
    }


    viewGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.viewMessage);
    }


    actionLoanAdjustmentUnsubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();

        cy.log(messages.form.submitSuccess);
    }


    actionLoanAdjustmentUnsubmitGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();

        cy.log(messages.ui.goBackSuccess);
    }


    loanAdjustmentUnsubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();

        cy.imsId(COMMON.BUTTONS.UNSUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log(messages.form.submitSuccess);
    }


    actionEditLoanAdjustment() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();

        cy.log(messages.ui.editMessage);
    }

    editGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();

        cy.log(messages.ui.editMessage);
    }

    actionLoanAdjustmentSubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_SUBMIT).click();

        cy.log(messages.form.submitSuccess);
    }


    actionLoanAdjustmentGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();

        cy.log(messages.ui.goBackSuccess);
    }


    loanAdjustmentSubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_SUBMIT).click();

        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log(messages.form.submitSuccess);
    }

    loanAdjustmentDeleteProcess() {

        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();

        cy.imsId(COMMON.BUTTONS.UNSUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log(messages.ui.actionMessage);
    }


    loanAdjustmentActionDelete() {

        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_DELETE).click();
        cy.log(messages.ui.viewMessage);
    }

    loanAdjustmentActionDeleteGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    loanAdjustmentDelete() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_DELETE).click();
        cy.imsId(COMMON.BUTTONS.DELETE).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log(messages.ui.actionMessage);
    }

    loanAdjustmentAgain() {

        cy.fixture(this.test_data).then((data) => {

            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

            const laData = data.fieldOfficer.loanAdjustment;

            cy.formController("samity_id").click();
            cy.contains(laData.selectSamity).click()
            cy.formController("member_id").click();
            cy.contains(laData.selectMember).click()
            cy.formController("loan_account_id").click();
            cy.contains(laData.selectAccount).click()
            cy.imsId(COMMON.CHECKBOXES.FIRST).click();
            cy.imsId(COMMON.INPUTS.AMOUNT_FIRST).clear().type(laData.inputAmount);

            cy.log(messages.ui.actionMessage);
        });
    }


    againSaveNewLoanAdjustment() {

        cy.imsId(COMMON.BUTTONS.SUBMIT).click();

        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log(messages.form.submitSuccess);
    }

    editDraftButton() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
        cy.imsId(COMMON.BUTTONS.UNSUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();
        cy.imsId(COMMON.BUTTONS.DRAFT).first().click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log(messages.ui.editMessage);
    }

    editSubmitButton() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.get('.ant-switch-inner').click();
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.editSubmitMessage);
    }


    gridResetButtonCheck() {

        cy.imsId(COMMON.BUTTONS.RESET).click();

        cy.log(messages.ui.gridResetSuccess);
    }


    gridRefreshButtonCheck() {

        cy.imsId(COMMON.BUTTONS.REFRESH).click();

        cy.log(messages.ui.gridRefreshSuccess);
    }

    openListForChecks() {
        cy.visit("/mfi-mis/transaction/loan-adjustment/list");
        cy.location("pathname").should("eq", "/mfi-mis/transaction/loan-adjustment/list");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
        cy.get("thead th:visible").should("have.length.greaterThan", 0);
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
            .and("contain.text", "Home").and("contain.text", "Transaction")
            .and("contain.text", "Loan Adjustment").and("contain.text", "List");
    }

    requiredGridColumnsCheck() {
        this.openListForChecks();
        this.assertTransactionColumns();
    }

    assertTransactionColumns() {
        ["#", "Loan Account ID", "Account Type", "Samity Name (English)", "Member Name (English)", "Amount", "Status", "Actions"].forEach((label) => {
            cy.contains("thead th:visible", new RegExp(`^\\s*${Cypress._.escapeRegExp(label)}\\s*$`))
                .should("be.visible");
        });
    }

    recordsAndAmountsCheck() {
        this.openListForChecks();
        this.assertTransactionGridState();
    }

    assertTransactionGridState() {
        // An empty current list is valid; never create transactions just for these checks.
        cy.get(COMMON.TABLE.BODY).should(($body) => {
            const rows = $body.find("tr:not(.ant-table-placeholder):visible");
            if (rows.length === 0) {
                const empty = $body.find(".ant-empty:visible");
                expect(empty.length, "visible empty state").to.be.greaterThan(0);
                expect(empty.text(), "empty list message").to.contain("No Data");
            } else {
                rows.each((_, row) => {
                    const cells = Cypress.$(row).children("td");
                    expect(cells.eq(0).text().trim(), "row number").to.match(/^\d+$/);
                    [1, 2, 3, 4, 6].forEach((index) => {
                        expect(cells.eq(index).text().trim(), `transaction column ${index}`).not.to.equal("");
                    });
                    const amount = cells.eq(5).text().trim().replace(/,/g, "");
                    expect(amount, "non-negative transaction amount").to.match(/^\d+(?:\.\d+)?$/);
                    expect(Number.isFinite(Number(amount)), "finite amount").to.equal(true);
                });
            }
        });
    }

    searchControlsCheck() {
        this.openListForChecks();
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("not.be.disabled");
        cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("not.be.disabled");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").and("not.be.disabled");
    }

    newButtonAvailableCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible").and("not.be.disabled")
            .and("contain.text", "New Adjustment");
    }

    refreshListStateCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.BUTTONS.REFRESH).should("be.visible").click();
        cy.location("pathname").should("eq", "/mfi-mis/transaction/loan-adjustment/list");
        this.assertTransactionColumns();
        this.assertTransactionGridState();
    }

    paginationOrEmptyStateCheck() {
        this.openListForChecks();
        this.assertTransactionGridState();
        cy.get(COMMON.TABLE.BODY).then(($body) => {
            const rows = $body.find("tr:not(.ant-table-placeholder):visible");
            if (rows.length === 0) {
                cy.get(COMMON.TABLE.BODY).find(".ant-empty").should("be.visible");
                cy.log("Empty list: No Data verified; pagination requires records.");
                return;
            }
            cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("contain.text", "1");
            cy.get(COMMON.PAGINATION.PREVIOUS_PAGE).should("have.class", COMMON.PAGINATION.DISABLED_CLASS);
            cy.get(COMMON.PAGINATION.PAGE_SIZE_SELECT).should("be.visible");
            cy.get(COMMON.PAGINATION.TOTAL_TEXT).should("be.visible");
        });
    }

    gridLanguageSwitchCheck() {

        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }

}


export const create_loan_adjustment = new loanAdjustment();