import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

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

    gridResetButtonCheck() {
        cy.formController(COMMON.INPUTS.SEARCH_TEXT)
            .should("be.visible").and("be.enabled")
            .clear().type("RESET_CHECK");
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
        cy.location("pathname").should("eq", "/mfi-mis/transaction/regular-collection/list");
        cy.get(COMMON.TABLE.HEAD).should("be.visible");
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
            const rcData = data.branchManager.regularCollection;
            cy.formController("field_officer_id").type(rcData.fieldOfficer).type("{enter}");
            cy.log(messages.ui.fieldOfficerDropdownMessage);
        })
    }

    gridHistoryButtonOffCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.historyOffMessage);
    }

    openListForChecks() {
        cy.visit("/mfi-mis/transaction/regular-collection/list");
        cy.location("pathname").should("eq", "/mfi-mis/transaction/regular-collection/list");
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE).uncheck({ force: true }).should("not.be.checked");
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
            .and("contain.text", "Home").and("contain.text", "Transaction")
            .and("contain.text", "Regular Collection").and("contain.text", "List");
    }

    columnsCheck() {
        this.openListForChecks();
        configurationGridChecks.columns(["#", "Samity ID", "Samity Name", "Field Officer",
            "Loan Collection", "Savings Collection", "Total Collection", "Status", "Actions"]);
    }

    recordsCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
            expect($rows.length, "collection records").to.be.greaterThan(0);
            $rows.each((_, row) => {
                const cells = Cypress.$(row).children("td");
                expect(cells.eq(0).text().trim(), "serial").to.match(/^\d+$/);
                [1, 2, 3, 7].forEach((index) => {
                    expect(cells.eq(index).text().trim(), "collection column " + index).not.to.equal("");
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
                    const value = cells.eq(index).text().trim().replace(/,/g, "");
                    expect(value, "collection amount").to.match(/^\d+(?:\.\d+)?$/);
                    expect(Number.isFinite(Number(value)), "finite amount").to.equal(true);
                    return Number(value);
                });
                expect(amounts[2], "loan plus savings equals total").to.be.closeTo(amounts[0] + amounts[1], 0.01);
            });
        });
    }

    controlsCheck() {
        this.openListForChecks();
        ["office_id", "field_officer_id", "staging_samity_id"].forEach((name) => {
            cy.formController(name).should("be.visible");
        });
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
        cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
    }

    firstPagePaginationCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
        configurationGridChecks.pagination();
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }

    fieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const rcData = data.branchManager.regularCollection;
            cy.formController("field_officer_id").type(rcData.fieldOfficer).type("{enter}");
            cy.log(messages.ui.fieldOfficerDropdownMessage);
        })
    }

    gridSamityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const rcData = data.branchManager.regularCollection;
            cy.formController("staging_samity_id").type(rcData.Samity).type("{enter}");
            cy.log(messages.ui.samityDropdownMessage);
        })
    }


}

export const create_regular_collection = new RegularCollection();
