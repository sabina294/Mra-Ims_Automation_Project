import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class LedgerSubGroupCreation {
    test_data = Cypress.env("TEST_DATA");

    gridLedgerSubGroupListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.ACCOUNTING, COMMON.MENUS.LEDGER_SUB_GROUP);
            cy.log(messages.ui.gridListMessage);
        });
    }

    createLedgerSubGroup() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

            cy.formController("group_id").type(lsgData.groupId).type("{enter}");
            cy.formController("ledger_subgroup_name_en").type(lsgData.ledgerSubGroupNameEn);
            cy.formController("ledger_subgroup_name_bn").type(lsgData.ledgerSubGroupNameBn);
            cy.formController("balance_sheet_item").type(lsgData.balanceSheet).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();

            cy.log(messages.ui.submitSuccess);
        });
    }

    createwithoutGroupId() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

            cy.formController("ledger_subgroup_name_en").type(lsgData.ledgerSubGroupNameEn);
            cy.formController("ledger_subgroup_name_bn").type(lsgData.ledgerSubGroupNameBn);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createwithoutNameEnglish() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.formController("group_id").type(lsgData.groupId).type("{enter}");
            cy.formController("ledger_subgroup_name_bn").type(lsgData.ledgerSubGroupNameBn);
            cy.formController("balance_sheet_item").type(lsgData.balanceSheet).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createwithoutNameBangla() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.formController("group_id").type(lsgData.groupId).type("{enter}");
            cy.formController("ledger_subgroup_name_en").type(lsgData.ledgerSubGroupNameEn);
            cy.formController("balance_sheet_item").type(lsgData.balanceSheet).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createwithoutBalanceSheetItem() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.formController("group_id").type(lsgData.groupId).type("{enter}");
            cy.formController("ledger_subgroup_name_en").type(lsgData.ledgerSubGroupNameEn);
            cy.formController("ledger_subgroup_name_bn").type(lsgData.ledgerSubGroupNameBn);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createwithoutStatus() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController("group_id").type(lsgData.groupId).type("{enter}");
            cy.formController("ledger_subgroup_name_en").type(lsgData.ledgerSubGroupNameEn);
            cy.formController("ledger_subgroup_name_bn").type(lsgData.ledgerSubGroupNameBn);
            cy.formController("balance_sheet_item").type(lsgData.balanceSheet).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.GO_BACK).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    actionButtonCheck() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(messages.ui.actionMessage);
    }

    turnOffEditMode() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();
        cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
        cy.log(messages.ui.turnOnEditModeMessage);
    }

    turnOffEditModeGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.editMessage);
    }

    editButton() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();
        cy.log(messages.ui.editMessage);
    }

    editResetButton() {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.ui.editResetMessage);
    }

    editValidationMessageCheck() {
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log(messages.ui.editMessage);
    }

    editGoBackButton() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.editGoBackMessage);
    }

    editSubmitButton() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log(messages.ui.editSubmitMessage);
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lsgData.selectStatus).type("{enter}");
            cy.log(messages.ui.dropdownInactiveMessage);
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lsgData.statusSelect).type("{enter}");
            cy.log(messages.ui.dropdownActiveMessage);
        });
    }

    ledgerGroupId() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController("ledger_group").type(lsgData.ledgerGroupId);
            cy.log(messages.ui.searchSuccess);
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lsgData.ledgerSubGroupNameEn);
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

    gridLedgerSubGroupDropdown() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.formController("ledger_group").click().type(lsgData.ledgerGroupId).type("{enter}");
        });
    }

    createResetButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const lsgData = data.branchManager.ledgerSubGroup;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.validation.requiredField);
        });
    }

    createValidationMessageCheck() {
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.validation.requiredField);
    }

    createGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.createGoBackMessage);
    }

    openListForChecks() {
        cy.visit("/mfi-ais/accounting/ledger-sub-group/list");
        cy.location("pathname").should("eq", "/mfi-ais/accounting/ledger-sub-group/list");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        configurationGridChecks.breadcrumb("Ledger Sub Group", ["Accounting"]);
    }

    requiredGridColumnsCheck() {
        this.openListForChecks();
        configurationGridChecks.columns(["#", "Ledger Sub Group ID", "Name (EN)", "Name (BN)", "Ledger Group Type", "Balance Sheet Item", "Created By", "Status", "Actions"]);
    }

    assertLedgerRecords() {
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
            expect($rows.length, "ledger sub group records").to.be.greaterThan(0);
            $rows.each((_, row) => {
                const cells = Cypress.$(row).find("td");
                expect(cells.eq(0).text().trim(), "serial").to.match(/^\d+$/);
                expect(cells.eq(1).text().trim(), "ledger sub group ID").to.match(/^\d+$/);
                [2, 3, 6].forEach((index) => {
                    expect(cells.eq(index).text().trim(), `column ${index + 1}`).not.to.equal("");
                });
                expect(["Debit", "Credit"]).to.include(cells.eq(4).text().trim());
                expect(["Yes", "No"]).to.include(cells.eq(5).text().trim());
                expect(["Active", "Inactive"]).to.include(cells.eq(7).text().trim());
            });
        });
    }

    gridRecordDataCheck() {
        this.openListForChecks();
        this.assertLedgerRecords();
    }

    searchControlsCheck() {
        this.openListForChecks();
        cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("be.visible");
        cy.formController("ledger_group").should("be.visible");
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
        [COMMON.BUTTONS.SEARCH, COMMON.BUTTONS.RESET, COMMON.BUTTONS.REFRESH, COMMON.BUTTONS.ADD_NEW]
            .forEach((button) => cy.imsId(button).should("be.visible").and("be.enabled"));
    }

    searchWithExistingName(partial = false) {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
            .first().find("td").eq(2).invoke("text").then((text) => {
                const name = text.trim();
                expect(name, "existing English name").not.to.equal("");
                // A partial search must also match the English-name column.
                const search = partial && name.length > 1 ? name.slice(0, Math.ceil(name.length / 2)) : name;
                configurationGridChecks.exactSearch(search, 2);
            });
    }

    nameSearchCheck() {
        this.searchWithExistingName();
    }

    partialNameSearchCheck() {
        this.searchWithExistingName(true);
    }

    noResultSearchCheck() {
        this.openListForChecks();
        configurationGridChecks.noResult("BM_LEDGER_SUB_GROUP");
    }

    resetRestoresGridCheck() {
        this.noResultSearchCheck();
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
        this.assertLedgerRecords();
    }

    refreshListStateCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.location("pathname").should("eq", "/mfi-ais/accounting/ledger-sub-group/list");
        this.assertLedgerRecords();
    }

    nameAscendingSortCheck() {
        this.openListForChecks();
        configurationGridChecks.sort("Name (EN)", COMMON.SORT.ASCENDING);
    }

    nameDescendingSortCheck() {
        this.openListForChecks();
        configurationGridChecks.sort("Name (EN)", COMMON.SORT.ASCENDING);
        configurationGridChecks.sort("Name (EN)", COMMON.SORT.DESCENDING);
    }

    paginationCheck() {
        this.openListForChecks();
        this.assertLedgerRecords();
        configurationGridChecks.pagination();
    }

    activeStatusResultCheck() {
        this.openListForChecks();
        configurationGridChecks.activeFilter("Active", 7);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const create_ledger_sub_group = new LedgerSubGroupCreation();
