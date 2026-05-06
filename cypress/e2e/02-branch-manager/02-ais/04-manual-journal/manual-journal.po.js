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
            var mjData = data.branchManager.manualJournal;
            cy.imsId("btn-add-new").click();
            cy.imsId("btn-delete").first().click();

            cy.formController("reference").type(mjData.reference);
            // First description field
            cy.formController("description").eq(0).type(mjData.description);

            // Ledger field
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");

            // Second description field
            cy.formController("description").eq(1).type(mjData.description1);

            cy.formController("debited_amount").clear().type(mjData.debitedAmount);
            cy.formController("credited_amount").clear().type(mjData.creditedAmount);
            cy.imsId("btn-submit").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();

            cy.log("Successfully created manual journal");
        });
    }

    createWithoutReferenceNumber() {
        cy.fixture(this.test_data).then((data) => {
            var mjData = data.branchManager.manualJournal;
            cy.imsId("btn-add-new").click();
            cy.imsId("btn-delete").first().click();

            cy.formController("description").eq(0).type(mjData.description);

            // Ledger field
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");

            // Second description field
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
            var mjData = data.branchManager.manualJournal;
            cy.formController("reference").type(mjData.reference);
            // First description field
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");

            // Second description field
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
            var mjData = data.branchManager.manualJournal;
            cy.formController("reference").type(mjData.reference);
            // First description field
            cy.formController("description").eq(0).type(mjData.description);

            // Ledger field
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");

            // Second description field
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
            var mjData = data.branchManager.manualJournal;

            cy.formController("reference").type(mjData.reference);
            // First description field
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
            var mjData = data.branchManager.manualJournal;

            cy.formController("reference").type(mjData.reference);
            // First description field
            cy.formController("description").eq(0).type(mjData.description);

            // Ledger field
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");

            // Second description field
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
            var mjData = data.branchManager.manualJournal;

            cy.formController("reference").type(mjData.reference);
            // First description field
            cy.formController("description").eq(0).type(mjData.description);

            // Ledger field
            cy.formController("ledger_id").type(mjData.ledger).type("{enter}");

            // Second description field
            cy.formController("description").eq(1).type(mjData.description1);

            cy.formController("debited_amount").clear().type(mjData.debitedAmount);
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();
            cy.imsId("btn-go-back").click();

            cy.log("Unsuccessfully created manual journal without journal details debited amount");
        });
    }


    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on the manual journal list page.");
    }

    viewManualJournal() {
        cy.fixture(this.test_data).then((data) => {
            var mjData = data.branchManager.manualJournal;
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

    statusApproveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var mjData = data.branchManager.manualJournal;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(mjData.selectStatus).type("{enter}");
            cy.log("ledger sub group status inactive dropdown check successfully");
        });
    }

    statusRejectedDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var mjData = data.branchManager.manualJournal;
            cy.formController("status").type(mjData.statusSelect).type("{enter}");
            cy.log("ledger sub group status active dropdown check successfully");
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            var mjData = data.branchManager.manualJournal;
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

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            var mjData = data.branchManager.manualJournal;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(mjData.nameEn);
            cy.imsId("btn-search").click();

            cy.log("Successfully search button click.");
        });
    }

    createResetButtonCheck() {
        cy.imsId("btn-add-new").click();
        cy.imsId("btn-reset").click();
        cy.imsId("btn-go-back").click();
        cy.log("Successful reset button clean displaying.");
    }

    createValidationMessageCheck() {
        cy.imsId("btn-add-new").click();
        cy.imsId("btn-submit").click();
        cy.imsId("btn-ok").click();
        cy.imsId("btn-go-back").click();
        cy.log("Successful validation message displaying.");
    }

    createGoBackButtonCheck() {
        cy.imsId("btn-add-new").click();
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
