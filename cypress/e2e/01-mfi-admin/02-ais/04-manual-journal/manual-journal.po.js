import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class ManualJournalCreation {
    test_data = Cypress.env("TEST_DATA");

    gridManualJournalListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-accounting", "submenu-manual-journal");
            cy.log(messages.ui.gridListMessage);
        });
    }

    createManualJournal() {
        cy.fixture(this.test_data).then((data) => {
            const mjData = data.mfiAdmin.manualJournal;
            cy.imsId(COMMON.BUTTONS.ADD_NEW)
                .click();
            cy.imsId("btn-delete")
                .first()
                .click();
            cy.formController("reference_no")
                .type(mjData.reference);
            cy.formController("description")
                .eq(0)
                .type(mjData.description);
            cy.formController("ledger_id")
                .click();

            cy.get(".ant-select-dropdown")
                .should("be.visible")
                .contains(".ant-select-item-option", mjData.ledger)
                .click();
            cy.formController("description")
                .eq(1)
                .type(mjData.description1);
            cy.formController("debited_amount")
                .clear()
                .type(mjData.debitedAmount);
            cy.formController("credited_amount")
                .clear()
                .type(mjData.creditedAmount);
            cy.imsId(COMMON.BUTTONS.SUBMIT)
                .click();
            cy.imsId(COMMON.CONFIRMATION.YES)
                .click();
            cy.imsId(COMMON.CONFIRMATION.OK)
                .click();
            cy.log(messages.ui.submitSuccess);

        });
    }

    createWithoutReferenceNumber() {
        cy.fixture(this.test_data).then((data) => {
            const mjData = data.mfiAdmin.manualJournal;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            cy.imsId("btn-delete").first().click();
            cy.formController("description").eq(0).type(mjData.description);
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");
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
            const mjData = data.mfiAdmin.manualJournal;
            cy.formController("reference_no").type(mjData.reference);
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");
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
            const mjData = data.mfiAdmin.manualJournal;
            cy.formController("reference_no").type(mjData.reference);
            cy.formController("description").eq(0).type(mjData.description);
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");
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
            const mjData = data.mfiAdmin.manualJournal;

            cy.formController("reference_no").type(mjData.reference);
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
            const mjData = data.mfiAdmin.manualJournal;
            cy.formController("reference_no").type(mjData.reference);
            cy.formController("description").eq(0).type(mjData.description);
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");
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
            const mjData = data.mfiAdmin.manualJournal;
            cy.formController("reference_no").type(mjData.reference);
            cy.formController("description").eq(0).type(mjData.description);
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");
            cy.formController("description").eq(1).type(mjData.description1);
            cy.formController("debited_amount").clear().type(mjData.debitedAmount);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.GO_BACK).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    myTaskMenuManualJournal() {
        cy.fixture(this.test_data).then((data) => {
            const mjData = data.mfiAdmin.manualJournal;
            cy.imsId("menu-my-task").click();
            cy.imsId("submenu-awaiting-manual-journal").click();
            cy.log("Successfully navigate to my task menu manual journal");
        });
    }

    myTaskResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log("Successful clean my task displaying.");
    }

    myTaskRefreshButtonCheck() {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.imsId(COMMON.BUTTONS.REFRESH).click()
        cy.log(
            "successfully refresh page  displayed the my task list of the manual journal "
        );
    }

    approveManualJournal() {
        cy.fixture(this.test_data).then((data) => {
            const mjData = data.mfiAdmin.manualJournal;
            // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mjData.journalNameEn);
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_VIEW).click();
            cy.imsId("btn-lock").click();
            cy.imsId(COMMON.BUTTONS.APPROVE).click();
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();

            cy.log("Successfully approve manual journal");
        });
    }


    actionButtonCheck() {
        cy.selectMenu("menu-accounting", "submenu-manual-journal");
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(messages.ui.actionMessage);
    }

    viewManualJournal() {
        cy.fixture(this.test_data).then((data) => {
            const mjData = data.mfiAdmin.manualJournal;
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mjData.nameEn);
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_VIEW).click();
            cy.log(messages.ui.viewMessage);
        });
    }

    goBackManualJournal() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log("Successfully go back the manual journal page");
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            const mjData = data.mfiAdmin.manualJournal;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mjData.nameEn);
            cy.log("Successfully search in the manual journal");
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
            const mjData = data.mfiAdmin.manualJournal;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mjData.nameEn);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();

            cy.log(messages.ui.searchMessage);
        });
    }

    createResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.validation.requiredField);
    }

    createValidationMessageCheck() {
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.validation.requiredField);
    }

    createDraftButtonCheck() {
        cy.imsId(COMMON.BUTTONS.DRAFT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.draftOnMessage);
    }

    createApproveButtonCheck() {
        cy.imsId(COMMON.BUTTONS.APPROVE).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.submitSuccess);
    }

    createGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.createGoBackMessage);
    }

    createDeleteButtonCheck() {
        cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
        cy.imsId("btn-delete").eq(1).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.submitSuccess);
    }

    createNewJournalDetailsButtonCheck() {
        cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
        cy.imsId("btn-add").eq(1).click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.submitSuccess);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const create_manual_journal = new ManualJournalCreation();
