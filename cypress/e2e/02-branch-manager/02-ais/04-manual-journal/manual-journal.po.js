import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class ManualJournalCreation {
    test_data = Cypress.env("TEST_DATA");

    gridManualJournalListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.ACCOUNTING, COMMON.MENUS.MANUAL_JOURNAL);
            cy.log(messages.ui.gridListMessage);
        });
    }

    createManualJournal() {
        cy.fixture(this.test_data).then((data) => {
            const mjData = data.branchManager.manualJournal;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            cy.imsId(COMMON.BUTTONS.DELETE).first().click();

            cy.formController("reference_no").type(mjData.reference);
            // First description field
            cy.formController("description").eq(0).type(mjData.description);

            // Ledger field
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");

            // Second description field
            cy.formController("description").eq(1).type(mjData.description1);

            cy.formController("debited_amount").clear().type(mjData.debitedAmount);
            cy.formController("credited_amount").clear().type(mjData.creditedAmount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();

            cy.log(messages.ui.submitSuccess);
        });
    }

    createWithoutReferenceNumber() {
        cy.fixture(this.test_data).then((data) => {
            const mjData = data.branchManager.manualJournal;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            cy.imsId(COMMON.BUTTONS.DELETE).first().click();

            cy.formController("description").eq(0).type(mjData.description);

            // Ledger field
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");

            // Second description field
            cy.formController("description").eq(1).type(mjData.description1);

            cy.formController("debited_amount").clear().type(mjData.debitedAmount);
            cy.formController("credited_amount").clear().type(mjData.creditedAmount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createWithoutDescription() {
        cy.fixture(this.test_data).then((data) => {
            const mjData = data.branchManager.manualJournal;
            cy.formController("reference_no").type(mjData.reference);
            // First description field
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");

            // Second description field
            cy.formController("description").eq(1).type(mjData.description1);

            cy.formController("debited_amount").clear().type(mjData.debitedAmount);
            cy.formController("credited_amount").clear().type(mjData.creditedAmount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();


            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createWithoutJournalDetailsLedger() {
        cy.fixture(this.test_data).then((data) => {
            const mjData = data.branchManager.manualJournal;
            cy.formController("reference_no").type(mjData.reference);
            // First description field
            cy.formController("description").eq(0).type(mjData.description);

            // Ledger field
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");

            // Second description field
            cy.formController("description").eq(1).type(mjData.description1);

            cy.formController("debited_amount").clear().type(mjData.debitedAmount);
            cy.formController("credited_amount").clear().type(mjData.creditedAmount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }
    createWithoutJournalDetailsDescription() {
        cy.fixture(this.test_data).then((data) => {
            const mjData = data.branchManager.manualJournal;

            cy.formController("reference_no").type(mjData.reference);
            // First description field
            cy.formController("description").eq(0).type(mjData.description);
            cy.formController("debited_amount").clear().type(mjData.debitedAmount);
            cy.formController("credited_amount").clear().type(mjData.creditedAmount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createWithoutJournalDetailsDebitedAmount() {
        cy.fixture(this.test_data).then((data) => {
            const mjData = data.branchManager.manualJournal;

            cy.formController("reference_no").type(mjData.reference);
            // First description field
            cy.formController("description").eq(0).type(mjData.description);

            // Ledger field
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");

            // Second description field
            cy.formController("description").eq(1).type(mjData.description1);
            cy.formController("credited_amount").clear().type(mjData.creditedAmount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createWithoutJournalDetailsCreditedAmount() {
        cy.fixture(this.test_data).then((data) => {
            const mjData = data.branchManager.manualJournal;

            cy.formController("reference_no").type(mjData.reference);
            // First description field
            cy.formController("description").eq(0).type(mjData.description);

            // Ledger field
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");

            // Second description field
            cy.formController("description").eq(1).type(mjData.description1);

            cy.formController("debited_amount").clear().type(mjData.debitedAmount);
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

    viewManualJournal() {
        cy.fixture(this.test_data).then((data) => {
            const mjData = data.branchManager.manualJournal;
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mjData.nameEn);
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_VIEW).click();
            cy.log(messages.ui.viewMessage);
        });
    }

    goBackManualJournal() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    statusApproveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const mjData = data.branchManager.manualJournal;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(mjData.selectStatus).type("{enter}");
            cy.log(messages.ui.actionMessage);
        });
    }

    statusRejectedDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const mjData = data.branchManager.manualJournal;
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(mjData.statusSelect).type("{enter}");
            cy.log(messages.ui.actionMessage);
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            const mjData = data.branchManager.manualJournal;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mjData.nameEn);
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

    gridDraftButton() {
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.draftOnMessage);
    }

    gridDraftButtonOff() {
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.draftOffMessage);
    }


    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const mjData = data.branchManager.manualJournal;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mjData.nameEn);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();

            cy.log(messages.ui.searchMessage);
        });
    }

    createResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.validation.requiredField);
    }

    createValidationMessageCheck() {
        cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.validation.requiredField);
    }

    createGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.createGoBackMessage);
    }


    createDeleteButtonCheck() {
        cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
        cy.imsId(COMMON.BUTTONS.DELETE).eq(1).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.submitSuccess);
    }

    createNewJournalDetailsButtonCheck() {
        cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
        cy.imsId(COMMON.BUTTONS.ADD).eq(1).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.submitSuccess);
    }

    openListForChecks() {
        cy.visit("/mfi-ais/accounting/manual-journal/list");
        cy.location("pathname").should("eq", "/mfi-ais/accounting/manual-journal/list");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true }).should("not.be.checked");
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        configurationGridChecks.breadcrumb("Manual Journal", ["Accounting"]);
    }

    requiredGridColumnsCheck() {
        this.openListForChecks();
        configurationGridChecks.columns(["#", "Journal Date", "Description", "Reference No", "Created By", "Amount", "Status", "Actions"]);
    }

    journalAmountCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
            expect($rows.length, "journals to verify").to.be.greaterThan(0);
            $rows.each((_, row) => {
                const amount = Cypress.$(row).find("td").eq(5).text().trim();
                expect(amount, "formatted journal amount").to.match(/^(?:\d+|\d{1,3}(?:,\d{2,3})+)(?:\.\d{1,2})?$/);
                expect(Number(amount.replace(/,/g, "")), "numeric amount").to.be.finite.and.at.least(0);
            });
        });
    }

    searchWithExistingDescription(partial = false) {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
            .first().find("td").eq(2).invoke("text").then((text) => {
                const description = text.trim();
                expect(description, "existing journal description").not.to.equal("");
                const search = partial && description.length > 1
                    ? description.slice(0, Math.ceil(description.length / 2)) : description;
                configurationGridChecks.exactSearch(search, 2);
            });
    }

    descriptionSearchCheck() {
        this.searchWithExistingDescription();
    }

    partialDescriptionSearchCheck() {
        this.searchWithExistingDescription(true);
    }

    noResultSearchCheck() {
        this.openListForChecks();
        configurationGridChecks.noResult("BM_MANUAL_JOURNAL");
    }

    approvedStatusResultCheck() {
        this.openListForChecks();
        cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type("Approved").type(COMMON.KEYS.ENTER);
        cy.imsId(COMMON.BUTTONS.SEARCH).click();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
            expect($rows.length, "approved journals").to.be.greaterThan(0);
            $rows.each((_, row) => {
                expect(Cypress.$(row).find("td").eq(6).text().trim(), "journal status").to.equal("Approved");
            });
        });
    }

    dateAscendingSortCheck() {
        this.openListForChecks();
        configurationGridChecks.sort("Journal Date", COMMON.SORT.ASCENDING);
    }

    dateDescendingSortCheck() {
        this.openListForChecks();
        configurationGridChecks.sort("Journal Date", COMMON.SORT.ASCENDING);
        configurationGridChecks.sort("Journal Date", COMMON.SORT.DESCENDING);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const create_manual_journal = new ManualJournalCreation();
