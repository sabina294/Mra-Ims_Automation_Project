import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class ManualJournalCreation {
    test_data = Cypress.env("TEST_DATA");

    gridManualJournalListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-accounting", "submenu-manual-journal");
            cy.log("Successfully Chart of accounts list page.");
        });
    }

    createManualJournal() {
        cy.fixture(this.test_data).then((data) => {
            var mjData = data.mfiAdmin.manualJournal;
            cy.imsId("btn-add-new")
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
            cy.imsId("btn-submit")
                .click();
            cy.imsId("btn-yes")
                .click();
            cy.imsId("btn-ok")
                .click();
            cy.log("Successfully created manual journal");

        });
    }

    createWithoutReferenceNumber() {
        cy.fixture(this.test_data).then((data) => {
            var mjData = data.mfiAdmin.manualJournal;
            cy.imsId("btn-add-new").click();
            cy.imsId("btn-delete").first().click();
            cy.formController("description").eq(0).type(mjData.description);
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");
            cy.formController("description").eq(1).type(mjData.description1);
            cy.formController("debited_amount").clear().type(mjData.debitedAmount);
            cy.formController("credited_amount").clear().type(mjData.creditedAmount);
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();
            cy.imsId("btn-reset").click();
            cy.log("Unsuccessfully created manual journal without reference number");
        });
    }

    createWithoutDescription() {
        cy.fixture(this.test_data).then((data) => {
            var mjData = data.mfiAdmin.manualJournal;
            cy.formController("reference_no").type(mjData.reference);
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");
            cy.formController("description").eq(1).type(mjData.description1);
            cy.formController("debited_amount").clear().type(mjData.debitedAmount);
            cy.formController("credited_amount").clear().type(mjData.creditedAmount);
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();
            cy.imsId("btn-reset").click();
            cy.log("Unsuccessfully created manual journal without description");
        });
    }

    createWithoutJournalDetailsLedger() {
        cy.fixture(this.test_data).then((data) => {
            var mjData = data.mfiAdmin.manualJournal;
            cy.formController("reference_no").type(mjData.reference);
            cy.formController("description").eq(0).type(mjData.description);
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");
            cy.formController("description").eq(1).type(mjData.description1);
            cy.formController("debited_amount").clear().type(mjData.debitedAmount);
            cy.formController("credited_amount").clear().type(mjData.creditedAmount);
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();
            cy.imsId("btn-reset").click();
            cy.log("Unsuccessfully created manual journal without journal details ledger");
        });
    }
    createWithoutJournalDetailsDescription() {
        cy.fixture(this.test_data).then((data) => {
            var mjData = data.mfiAdmin.manualJournal;

            cy.formController("reference_no").type(mjData.reference);
            cy.formController("description").eq(0).type(mjData.description);
            cy.formController("debited_amount").clear().type(mjData.debitedAmount);
            cy.formController("credited_amount").clear().type(mjData.creditedAmount);
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();
            cy.imsId("btn-reset").click();

            cy.log("Unsuccessfully created manual journal without journal details description");
        });
    }

    createWithoutJournalDetailsDebitedAmount() {
        cy.fixture(this.test_data).then((data) => {
            var mjData = data.mfiAdmin.manualJournal;
            cy.formController("reference_no").type(mjData.reference);
            cy.formController("description").eq(0).type(mjData.description);
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");
            cy.formController("description").eq(1).type(mjData.description1);
            cy.formController("credited_amount").clear().type(mjData.creditedAmount);
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();
            cy.imsId("btn-reset").click();

            cy.log("Unsuccessfully created manual journal without journal details credited amount");
        });
    }

    createWithoutJournalDetailsCreditedAmount() {
        cy.fixture(this.test_data).then((data) => {
            var mjData = data.mfiAdmin.manualJournal;
            cy.formController("reference_no").type(mjData.reference);
            cy.formController("description").eq(0).type(mjData.description);
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");
            cy.formController("description").eq(1).type(mjData.description1);
            cy.formController("debited_amount").clear().type(mjData.debitedAmount);
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();
            cy.imsId("btn-go-back").click();

            cy.log("Unsuccessfully created manual journal without journal details debited amount");
        });
    }

    myTaskMenuManualJournal() {
        cy.fixture(this.test_data).then((data) => {
            var mjData = data.mfiAdmin.manualJournal;
            cy.imsId("menu-my-task").click();
            cy.imsId("submenu-awaiting-manual-journal").click();
            cy.log("Successfully navigate to my task menu manual journal");
        });
    }

    myTaskResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean my task displaying.");
    }

    myTaskRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.imsId("btn-reset").click();
        cy.imsId("btn-refresh").click()
        cy.log(
            "successfully refresh page  displayed the my task list of the manual journal "
        );
    }

    approveManualJournal() {
        cy.fixture(this.test_data).then((data) => {
            var mjData = data.mfiAdmin.manualJournal;
            // cy.formController("search_text").type(mjData.journalNameEn);
            cy.imsId("toggle-action").first().click();
            cy.imsId("btn-table-action-view").click();
            cy.imsId("btn-lock").click();
            cy.imsId("btn-approve").click();
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();

            cy.log("Successfully approve manual journal");
        });
    }


    actionButtonCheck() {
        cy.selectMenu("menu-accounting", "submenu-manual-journal");
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on the manual journal list page.");
    }

    viewManualJournal() {
        cy.fixture(this.test_data).then((data) => {
            var mjData = data.mfiAdmin.manualJournal;
            cy.formController("search_text").type(mjData.nameEn);
            cy.imsId("toggle-action").first().click();
            cy.imsId("btn-table-action-view").click();
            cy.log("Successfully viewed the manual journal page");
        });
    }

    goBackManualJournal() {
        cy.imsId("btn-go-back").click();
        cy.log("Successfully go back the manual journal page");
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            var mjData = data.mfiAdmin.manualJournal;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(mjData.nameEn);
            cy.log("Successfully search in the manual journal");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }
    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the manual journal "
        );
    }

    gridDraftButton() {
        cy.imsId(GRID.BUTTONS.DRAFT_ON)
            .check({ force: true });
        cy.log(messages.ui.draftOnMessage);
    }

    gridDraftButtonOff() {
        cy.imsId(GRID.BUTTONS.DRAFT_OFF)
            .uncheck({ force: true });
        cy.log(messages.ui.draftOffMessage);
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            var mjData = data.mfiAdmin.manualJournal;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(mjData.nameEn);
            cy.imsId("btn-search").click();

            cy.log("Successfully search button click.");
        });
    }

    createResetButtonCheck() {
        cy.imsId("btn-add-new").click();
        cy.imsId("btn-reset").click();
        cy.log("Successful reset button clean displaying.");
    }

    createValidationMessageCheck() {
        cy.imsId("btn-submit").click();
        cy.imsId("btn-ok").click();
        cy.log("Successful validation message displaying.");
    }

    createDraftButtonCheck() {
        cy.imsId("btn-draft").click();
        cy.imsId("btn-ok").click();
        cy.log("Successful draft button check displaying.");
    }

    createApproveButtonCheck() {
        cy.imsId("btn-approve").click();
        cy.imsId("btn-ok").click();
        cy.log("Successful approve button check displaying.");
    }

    createGoBackButtonCheck() {
        cy.imsId("btn-go-back").click();
        cy.log("Successful go back button check.");
    }

    createDeleteButtonCheck() {
        cy.imsId("btn-add-new").click();
        cy.imsId("btn-delete").eq(1).click();
        cy.imsId("btn-go-back").click();
        cy.log("Successful delete button check.");
    }

    createNewJournalDetailsButtonCheck() {
        cy.imsId("btn-add-new").click();
        cy.imsId("btn-add").eq(1).click();
        cy.imsId("btn-go-back").click();
        cy.log("Successful delete button check.");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Successful switch bangla language check.");
    }
}

export const create_manual_journal = new ManualJournalCreation();
