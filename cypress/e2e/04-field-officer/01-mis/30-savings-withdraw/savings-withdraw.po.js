import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class savingsWithdraw {
    test_data = Cypress.env("TEST_DATA");

    gridSavingsWithdrawListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.TRANSACTION, COMMON.MENUS.SAVINGS_WITHDRAW);
            cy.log(messages.ui.gridListMessage);
        });
    }

    createNewWithdraw() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            const swData = data.fieldOfficer.savingsWithdraw;
            cy.formController("samityId").click();
            cy.contains(swData.selectSamity).click()
            cy.formController("memberId").click();
            cy.contains(swData.selectMember).click()
            cy.formController("accountId").click();
            cy.contains(swData.selectAccount).click()
            cy.imsId(COMMON.INPUTS.AMOUNT_IMS).clear().type(swData.inputAmount);
            cy.log(messages.ui.submitSuccess);
        });
    }

    saveNewWithdraw() {
        cy.fixture(this.test_data).then((data) => {
            const swData = data.fieldOfficer.savingsWithdraw;
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.log(messages.ui.actionMessage);
        });
    }


    actionButtonCheck() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(messages.ui.actionMessage);
    }

    viewWithdraw() {
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.log(messages.ui.viewMessage);
    }

    viewGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.viewMessage);
    }

    actionWithdrawUnsubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
        cy.log(messages.form.submitSuccess);
    }

    actionWithdrawUnsubmitGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    withdrawUnsubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
        cy.imsId(COMMON.BUTTONS.UNSUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.form.submitSuccess);
    }

    actionEditSavingsWithdraw() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_MIS_EDIT).click();
        cy.log(messages.ui.editMessage);
    }

    editDraftButton() {
        cy.imsId(COMMON.BUTTONS.DRAFT).first().click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.editMessage);
    }

    editGoBack() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_MIS_EDIT).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.editMessage);
    }

    actionWithdrawSubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_SUBMIT).click();
        cy.log(messages.form.submitSuccess);
    }

    actionWithdrawGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.form.submitSuccess);
    }

    withdrawSubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_SUBMIT).click();
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.form.submitSuccess);
    }


    withdrawDeleteProcess() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
        cy.imsId(COMMON.BUTTONS.UNSUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.form.submitSuccess);
    }

    withdrawActionDelete() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_DELETE).click();
        cy.log(messages.form.submitSuccess);
    }


    withdrawDelete() {
        cy.imsId(COMMON.BUTTONS.DELETE).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.form.submitSuccess);
    }


    withdrawAgain() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            const swData = data.fieldOfficer.savingsWithdraw;
            cy.formController("samityId").click();
            cy.contains(swData.selectSamity).click()
            cy.formController("memberId").click();
            cy.contains(swData.selectMember).click()
            cy.formController("accountId").click();
            cy.contains(swData.selectAccount).click()
            cy.imsId(COMMON.INPUTS.AMOUNT_IMS).clear().type(swData.inputAmount);
            cy.log(messages.ui.actionMessage);
        });
    }

    againSaveNewWithdraw() {
        cy.fixture(this.test_data).then((data) => {
            const swData = data.fieldOfficer.savingsWithdraw;
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.log(messages.ui.actionMessage);
        });
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

    gridSamityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const swData = data.fieldOfficer.savingsWithdraw;
            cy.formController("samity_id").type(swData.samity).type("{enter}");
            cy.log(messages.ui.actionMessage);
        });
    }

    gridHistoryButtonOnCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.historyOnMessage);
    }

    samityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const swData = data.fieldOfficer.savingsWithdraw;
            cy.formController("samity_id").type(swData.samityDropdown).type("{enter}");
            cy.log(messages.ui.samityDropdownMessage);
        })
    }

    gridHistoryButtonOffCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.historyOffMessage);
    }

    openListForChecks() {
        cy.visit("/mfi-mis/transaction/savings-withdraw/list");
        cy.location("pathname").should("eq", "/mfi-mis/transaction/savings-withdraw/list");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE).uncheck({ force: true }).should("not.be.checked");
        cy.get("thead th:visible").should("have.length.greaterThan", 0);
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
            .and("contain.text", "Home").and("contain.text", "Transaction")
            .and("contain.text", "Savings Withdraw").and("contain.text", "List");
    }

    requiredGridColumnsCheck() {
        this.openListForChecks();
        this.assertTransactionColumns();
    }

    assertTransactionColumns() {
        ["#", "Savings Account ID", "Member ID", "Member", "Samity Name", "Transacted By", "Amount", "Status", "Actions"].forEach((label) => {
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
                    [1, 2, 3, 4, 7].forEach((index) => {
                        expect(cells.eq(index).text().trim(), `transaction column ${index}`).not.to.equal("");
                    });
                    const amount = cells.eq(6).text().trim().replace(/,/g, "");
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
            .and("contain.text", "New Withdraw");
    }

    refreshListStateCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.BUTTONS.REFRESH).should("be.visible").click();
        cy.location("pathname").should("eq", "/mfi-mis/transaction/savings-withdraw/list");
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

export const create_savings_withdraw = new savingsWithdraw();
