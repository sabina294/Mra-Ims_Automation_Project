import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";

class RegularCollection {
    test_data = Cypress.env("TEST_DATA");

    gridRegularCollectionListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.TRANSACTION, COMMON.MENUS.REGULAR_COLLECTION);
            cy.log(messages.ui.gridListMessage);
        });
    }

    actionButtonCheck() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(messages.ui.actionMessage);
    }
    openButtonCheck() {
        cy.imsId(COMMON.GRID.ACTION_OPEN).first().click();
        cy.log(messages.ui.viewMessage);
    }

    collectionProcess() {
        cy.fixture(this.test_data).then((data) => {
            const rcData = data.branchManager.regularCollection;
            cy.get('tbody tr')
                .eq(0)
                .find('input')
                .eq(0)
                .clear()
                .type(rcData.loanAmount);
            cy.get('tbody tr')
                .eq(1)
                .find('input')
                .eq(0)
                .clear()
                .type(rcData.loanAmount2);

            cy.log(messages.ui.actionMessage);
        });
    }

    collectionSave() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.SAVE).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.log(messages.form.submitSuccess);
        });
    }

    viewRegularCollection() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.log(messages.ui.viewMessage);
    }

    viewGoBackButton() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    editRegularCollection() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();
        cy.log(messages.ui.editMessage);
    }

    editSaveButton() {
        cy.imsId(COMMON.BUTTONS.SAVE).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.editMessage);
    }

    collectionGoBack() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    collectionSubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_SUBMIT).click();
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.form.submitSuccess);
    }

    actionCollectionUnsubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
        cy.log(messages.form.submitSuccess);
    }


    collectionUnsubmit() {
        cy.imsId(COMMON.BUTTONS.UNSUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.form.submitSuccess);
    }

    againCollectionSubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_SUBMIT).click();
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.form.submitSuccess);
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
            const rcData = data.fieldOfficer.regularCollection;
            cy.formController("field_officer_id").type(rcData.fieldOfficer).type("{enter}");
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
            const rcData = data.fieldOfficer.regularCollection;
            cy.formController("field_officer_id").type(rcData.fieldOfficer).type("{enter}");
            cy.log(messages.ui.fieldOfficerDropdownMessage);
        })
    }

    gridSamityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const rcData = data.fieldOfficer.regularCollection;
            cy.formController("staging_samity_id").type(rcData.Samity).type("{enter}");
            cy.log(messages.ui.samityDropdownMessage);
        })
    }

    openListForChecks() {
        cy.visit("/mfi-mis/transaction/regular-collection/list");
        cy.location("pathname").should("eq", "/mfi-mis/transaction/regular-collection/list");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE).uncheck({ force: true }).should("not.be.checked");
        cy.get("thead th:visible").should("have.length.greaterThan", 0);
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
            .and("contain.text", "Home").and("contain.text", "Transaction")
            .and("contain.text", "Regular Collection").and("contain.text", "List");
    }

    requiredGridColumnsCheck() {
        this.openListForChecks();
        this.assertCollectionColumns();
    }

    assertCollectionColumns() {
        ["#", "Samity ID", "Samity Name", "Field Officer", "Loan Collection",
            "Savings Collection", "Total Collection", "Status", "Actions"].forEach((label) => {
            cy.contains("thead th:visible", new RegExp(`^\\s*${Cypress._.escapeRegExp(label)}\\s*$`))
                .should("be.visible");
        });
    }

    gridRecordDataCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
            expect($rows.length, "collection records required for this check").to.be.greaterThan(0);
            $rows.each((_, row) => {
                const cells = Cypress.$(row).children("td");
                expect(cells.eq(0).text().trim(), "row number").to.match(/^\d+$/);
                [1, 2, 3, 7].forEach((index) => {
                    expect(cells.eq(index).text().trim(), `collection column ${index}`).not.to.equal("");
                });
            });
        });
    }

    collectionTotalsCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
            expect($rows.length, "collection records").to.be.greaterThan(0);
            $rows.each((_, row) => {
                const cells = Cypress.$(row).children("td");
                const amounts = [4, 5, 6].map((index) => {
                    const text = cells.eq(index).text().trim().replace(/,/g, "");
                    expect(text, `collection amount column ${index}`).to.match(/^\d+(?:\.\d+)?$/);
                    const value = Number(text);
                    expect(Number.isFinite(value), "finite amount").to.equal(true);
                    return value;
                });
                expect(amounts[2], "total equals loan plus savings collection")
                    .to.be.closeTo(amounts[0] + amounts[1], 0.01);
            });
        });
    }

    searchControlsCheck() {
        this.openListForChecks();
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("not.be.disabled");
        cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("not.be.disabled");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").and("not.be.disabled");
    }

    refreshListCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.BUTTONS.REFRESH).should("be.visible").click();
        cy.location("pathname").should("eq", "/mfi-mis/transaction/regular-collection/list");
        this.assertCollectionColumns();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
    }

    firstPagePaginationCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
        cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("contain.text", "1");
        cy.get(COMMON.PAGINATION.PREVIOUS_PAGE).should("have.class", COMMON.PAGINATION.DISABLED_CLASS);
        cy.get(COMMON.PAGINATION.PAGE_SIZE_SELECT).should("be.visible");
        cy.get(COMMON.PAGINATION.TOTAL_TEXT).should("be.visible");
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }

}

export const create_regular_collection = new RegularCollection();
