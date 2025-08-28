class ReceivedVoucherCreation {
    test_data = Cypress.env("TEST_DATA");

    gridreceivedVoucherListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-voucher", "submenu-received-voucher");
            cy.log("Successfully received voucher list page.");
        });
    }

    createreceivedVoucher() {
        cy.fixture(this.test_data).then((data) => {
            var rvData = data.branchManager.receivedVoucher;
            cy.imsId("btn-add-new").click();

            cy.formController("voucher_name_en").type(rvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(rvData.voucherNameBn);
            cy.formController("received_date").click();
            cy.contanins(19).click();
            cy.formController("received_mode").type(rvData.receivedMode).type("{enter}");
            cy.formController("voucher_prepared_by").type(rvData.peparedBy).type("{enter}");
            cy.formController("remarks").type(rvData.remarks).type("{enter}");
            cy.formController("transaction_date").click();
            cy.contanins(19).click();
            cy.formController("ledger_id").type(rvData.ledger).type("{enter}");
            cy.formController("remarks").type(rvData.remarks1);
            cy.formController("transaction_amount").type(rvData.amount);
            cy.imsId("btn-submit").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();

            cy.log("Successfully created received voucher");
        });
    }


    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on the received voucher list page.");
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var rvData = data.branchManager.receivedVoucher;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(rvData.selectStatus).type("{enter}");
            cy.log("ledger sub group status inactive dropdown check successfully");
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var rvData = data.branchManager.receivedVoucher;
            cy.formController("status").type(rvData.statusSelect).type("{enter}");
            cy.log("ledger sub group status active dropdown check successfully");
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            var rvData = data.branchManager.receivedVoucher;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(rvData.voucherNameBn);
            cy.log("Successfully search in the received voucher");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }
    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the received voucher "
        );
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
        cy.log("Unsccessful switch bangla language check.");
    }
}

export const create_received_voucher = new ReceivedVoucherCreation();
