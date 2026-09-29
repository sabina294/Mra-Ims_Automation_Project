import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class Authorization {
    test_data = Cypress.env("TEST_DATA");

    gridAuthorizationListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.TRANSACTION, COMMON.MENUS.AUTHORIZATION);
            cy.log(messages.ui.gridListMessage);
        });
    }

    gridCheckboxCheck() {
        cy.imsId(COMMON.BUTTONS.CHECKBOX).click();
        cy.log(messages.ui.checkboxMessage);
    }

    authorizationLock() {
        cy.imsId(COMMON.BUTTONS.LOCK).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.authorizationLockMessage);
    }

    authorizationUnlock() {
        cy.imsId(COMMON.BUTTONS.AUTHORIZE_UNLOCK).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.authorizationUnlockMessage);
    }

    authorizeSamity() {
        cy.imsId(COMMON.BUTTONS.CHECKBOX).click();
        cy.imsId(COMMON.BUTTONS.LOCK).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.imsId(COMMON.BUTTONS.AUTHORIZE).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.authorizeSamityMessage);
    }

    authorizeSingleSamity() {
        cy.imsId(COMMON.BUTTONS.AUTHORIZE_SAMITY).click();
        cy.imsId(COMMON.BUTTONS.LOCK).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.imsId(COMMON.BUTTONS.AUTHORIZE).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.authorizeSingleSamityMessage);
    }

    gridResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.ui.gridResetSuccess);
    }

    gridRefreshButtonCheck() {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.log(messages.ui.gridRefreshSuccess);

    }


    gridDraftButton() {
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.draftOnMessage);
    }

    gridPendingFieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.fieldOfficer.authorization;
            cy.formController("field_officer_id").type(aData.fieldOfficer).type("{enter}");
            cy.log(messages.ui.fieldOfficerDropdownMessage);
        })
    }

    gridDraftButtonOff() {
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.draftOffMessage);
    }

    gridHistoryButtonOnCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.historyOnMessage);
    }

    gridHistoryFieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.fieldOfficer.authorization;
            cy.formController("field_officer_id").type(aData.fieldOfficer).type("{enter}");
            cy.log(messages.ui.fieldOfficerDropdownMessage);
        })
    }

    gridHistoryButtonOffCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.historyOffMessage);
    }

    gridFieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.fieldOfficer.authorization;
            cy.formController("field_officer_id").type(aData.fieldOfficer).type("{enter}");
            cy.log(messages.ui.fieldOfficerDropdownMessage);
        })
    }

    gridSamityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.fieldOfficer.authorization;
            cy.formController("samity_id").type(aData.samity).type("{enter}");
            cy.log(messages.ui.samityDropdownMessage);
        })
    }

    openListForChecks() {
        cy.visit("/mfi-mis/transaction/authorization/list");
        cy.location("pathname").should("eq", "/mfi-mis/transaction/authorization/list");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE).uncheck({ force: true }).should("not.be.checked");
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true }).should("not.be.checked");
        cy.get("thead th:visible").should("have.length.greaterThan", 0);
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
            .and("contain.text", "Home").and("contain.text", "Transaction")
            .and("contain.text", "Authorization").and("contain.text", "List");
    }

    requiredGridColumnsCheck() {
        this.openListForChecks();
        this.assertTransactionColumns();
    }

    assertTransactionColumns() {
        ["#", "Samity ID", "Samity Name", "Field Officer", "Adjustment", "Encashment", "Withdraw", "Collection", "Status", "Locked By", "Actions"].forEach((label) => {
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
                    expect(cells.eq(1).text().trim(), "row number").to.match(/^\d+$/);
                    [2, 3, 4, 9].forEach((index) => {
                        expect(cells.eq(index).text().trim(), `transaction column ${index}`).not.to.equal("");
                    });
                    // Checkbox is column 0; monetary columns are 5 through 8.
                    [5, 6, 7, 8].forEach((index) => {
                        const amount = cells.eq(index).text().trim().replace(/,/g, "");
                        expect(amount, `authorization amount column ${index}`).to.match(/^\d+(?:\.\d+)?$/);
                        expect(Number.isFinite(Number(amount)), "finite amount").to.equal(true);
                    });
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

    refreshListStateCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.BUTTONS.REFRESH).should("be.visible").click();
        cy.location("pathname").should("eq", "/mfi-mis/transaction/authorization/list");
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

export const authorization = new Authorization();
