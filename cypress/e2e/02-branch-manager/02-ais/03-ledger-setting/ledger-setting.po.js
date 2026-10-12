import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class LedgerSetting {
    test_data = Cypress.env("TEST_DATA");

    gridLedgerSubGroupListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.ACCOUNTING, COMMON.MENUS.LEDGER_SETTING);
            cy.log(messages.ui.gridListMessage);
        });
    }

    actionButtonCheck() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(messages.ui.actionMessage);
    }


    editResetButton() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();

        cy.log(messages.ui.editResetMessage);
    }

    editGoBackButton() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.editGoBackMessage);
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const lsData = data.branchManager.ledgerSetting;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lsData.selectStatus).type("{enter}");
            cy.log(messages.ui.dropdownInactiveMessage);
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const lsData = data.branchManager.ledgerSetting;
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lsData.statusSelect).type("{enter}");
            cy.log(messages.ui.dropdownActiveMessage);
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            const lsData = data.branchManager.ledgerSetting;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lsData.nameEn);
            cy.log(messages.ui.searchSuccess);
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

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const lsData = data.branchManager.ledgerSetting;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lsData.nameEn);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();

            cy.log(messages.ui.searchMessage);
        });
    }

    openListForChecks() {
        cy.visit("/mfi-ais/accounting/ledger-setting");
        cy.location("pathname").should("eq", "/mfi-ais/accounting/ledger-setting");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        // This page has no List segment in its breadcrumb.
        cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
            .and("contain.text", "Home").and("contain.text", "Accounting")
            .and("contain.text", "Ledger Setting");
    }

    requiredGridColumnsCheck() {
        this.openListForChecks();
        configurationGridChecks.columns(["#", "Ledger Key", "Ledger Code", "Name (EN)", "Name (BN)", "Created By", "Status", "Actions"]);
    }

    assertLedgerRecords() {
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
            expect($rows.length, "ledger records").to.be.greaterThan(0);
            $rows.each((_, row) => {
                const cells = Cypress.$(row).find("td");
                expect(cells.eq(0).text().trim(), "serial").to.match(/^\d+$/);
                expect(cells.eq(2).text().trim(), "ledger code").to.match(/^\d+-\d+$/);
                [1, 3, 4, 5].forEach((index) => {
                    expect(cells.eq(index).text().trim(), `column ${index + 1}`).not.to.equal("");
                });
                expect(["Active", "Inactive"]).to.include(cells.eq(6).text().trim());
            });
        });
    }

    gridRecordDataCheck() {
        this.openListForChecks();
        this.assertLedgerRecords();
    }

    searchWithExistingValue(columnIndex, partial = false) {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
            .first().find("td").eq(columnIndex).invoke("text").then((text) => {
                const value = text.trim();
                expect(value, "existing search value").not.to.equal("");
                const search = partial && value.length > 1 ? value.slice(0, Math.ceil(value.length / 2)) : value;
                configurationGridChecks.exactSearch(search, columnIndex);
            });
    }

    nameSearchCheck() {
        this.searchWithExistingValue(3);
    }

    partialNameSearchCheck() {
        this.searchWithExistingValue(3, true);
    }

    noResultSearchCheck() {
        this.openListForChecks();
        configurationGridChecks.noResult("BM_LEDGER_SETTING");
    }


    activeStatusResultCheck() {
        this.openListForChecks();
        configurationGridChecks.activeFilter("Active", 6);
    }

    creatorAscendingSortCheck() {
        this.openListForChecks();
        configurationGridChecks.sort("Created By", COMMON.SORT.ASCENDING);
    }

    creatorDescendingSortCheck() {
        this.openListForChecks();
        configurationGridChecks.sort("Created By", COMMON.SORT.ASCENDING);
        configurationGridChecks.sort("Created By", COMMON.SORT.DESCENDING);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_ledger_setting = new LedgerSetting();
