import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class specialCollection {
    test_data = Cypress.env("TEST_DATA");

    gridSpecialCollectionListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.TRANSACTION, COMMON.MENUS.SPECIAL_COLLECTION);
            cy.log(messages.ui.gridListMessage);
        });
    }

    deleteNewCollection() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            const scData = data.fieldOfficer.specialCollection;
            cy.formController("samityId").click();
            cy.contains(scData.selectSamity).click()
            cy.formController("employeeId").click();
            cy.contains(scData.selectMember).click()
            cy.formController("accountId").click();
            cy.contains(scData.selectAccount).click();
             cy.get('input:visible:not(:disabled)')
                .last()
                .should('be.visible')
                .clear()
                .type(scData.inputAmount);
            cy.imsId(COMMON.BUTTONS.SAVE).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_DELETE).click();
            cy.imsId(COMMON.BUTTONS.DELETE).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();

            cy.log(messages.ui.actionMessage);
        });
    }

    createNewCollection() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            const scData = data.fieldOfficer.specialCollection;
            cy.formController("samityId").click();
            cy.contains(scData.selectSamity).click()
            cy.formController("employeeId").click();
            cy.contains(scData.selectMember).click()
            cy.formController("accountId").click();
            cy.contains(scData.selectAccount).click();
             cy.get('input:visible:not(:disabled)')
                .last()
                .should('be.visible')
                .clear()
                .type(scData.inputAmount);
            cy.imsId(COMMON.BUTTONS.SAVE).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.log(messages.ui.submitSuccess);
        });
    }

    actionButtonCheck() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(messages.ui.actionMessage);
    }

    viewSpecialCollection() {
        // cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.log(messages.ui.viewMessage);
    }

    viewGoBackButton() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    editSpecialCollection() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();
        cy.log(messages.ui.editMessage);
    }

    editGoBackButton() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.editGoBackMessage);
    }

    submitCollection() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_SUBMIT).click();
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.form.submitSuccess);
    }

    viewUnsubmitted() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.log(messages.ui.viewMessage);
    }

    viewGoBackButtonUnsubmitted() {
        // cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.viewMessage);
    }

    gridActionUnsubmittedButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const scData = data.fieldOfficer.createSpecialCollectionForm;
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
            cy.log(messages.form.submitSuccess);
        });
    }

    gridActionUnsubmittedGoBackButton() {
        cy.fixture(this.test_data).then((data) => {
            const scData = data.fieldOfficer.createSpecialCollectionForm;
            cy.imsId(COMMON.BUTTONS.GO_BACK).click();
            cy.log(messages.ui.goBackSuccess);
        });
    }

    UnsubmittedButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const scData = data.fieldOfficer.createSpecialCollectionForm;
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
            cy.imsId(COMMON.BUTTONS.UNSUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_SUBMIT).click();
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.log(messages.form.submitSuccess);
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

    gridHistoryButtonOnCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.historyOnMessage);
    }

    fieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const spcData = data.fieldOfficer.specialCollection;
            cy.formController("field_officer_id").type(spcData.fieldOfficer).type("{enter}");
            cy.log(messages.ui.fieldOfficerDropdownMessage);
        })
    }

    gridHistoryButtonOffCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.historyOffMessage);
    }

    fieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const scData = data.fieldOfficer.specialCollection;
            cy.formController("field_officer_id").type(scData.fieldOfficer).type("{enter}");
            cy.log(messages.ui.fieldOfficerDropdownMessage);
        })
    }

    gridSamityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const scData = data.fieldOfficer.specialCollection;
            cy.formController("staging_samity_id").type(scData.Samity).type("{enter}");
            cy.log(messages.ui.samityDropdownMessage);
        })
    }

    openListForChecks() {
        cy.visit("/mfi-mis/transaction/special-collection/list");
        cy.location("pathname").should("eq", "/mfi-mis/transaction/special-collection/list");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE).uncheck({ force: true }).should("not.be.checked");
        cy.get("thead th:visible").should("have.length.greaterThan", 0);
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
            .and("contain.text", "Home").and("contain.text", "Transaction")
            .and("contain.text", "Special Collection").and("contain.text", "List");
    }

    requiredGridColumnsCheck() {
        this.openListForChecks();
        this.assertTransactionColumns();
    }

    assertTransactionColumns() {
        ["#", "Samity ID", "Samity Name", "Member", "Account Id", "Field Officer", "Collection Type", "Amount", "Status", "Actions"].forEach((label) => {
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
                    [1, 2, 3, 4, 5, 6, 8].forEach((index) => {
                        expect(cells.eq(index).text().trim(), `transaction column ${index}`).not.to.equal("");
                    });
                    const amount = cells.eq(7).text().trim().replace(/,/g, "");
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
            .and("contain.text", "New Collection");
    }

    refreshListStateCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.BUTTONS.REFRESH).should("be.visible").click();
        cy.location("pathname").should("eq", "/mfi-mis/transaction/special-collection/list");
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

export const create_special_collection = new specialCollection();
