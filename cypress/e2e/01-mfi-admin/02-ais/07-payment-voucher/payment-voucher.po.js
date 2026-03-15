class PaymentVoucherCreation {
    test_data = Cypress.env("TEST_DATA");

    gridPaymentVoucherListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-voucher", "submenu-payment-voucher");
            cy.log("Successfully payment voucher list page.");
        });
    }

    createPaymentVoucher() {
        cy.fixture(this.test_data).then((data) => {
            var pvData = data.mfiAdmin.paymentVoucher;
            cy.imsId("btn-add-new").click();

            cy.formController("voucher_name_en").type(pvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(pvData.voucherNameBn);
            cy.formController("payment_date").click();
            cy.wait(2000);
            cy.contains(12).click();
            cy.wait(1000);
            cy.formController("voucher_prepared_by").type(pvData.preparedBy).type("{enter}");
            cy.formController("remarks").eq(0).type(pvData.remarks);
            cy.formController("payment_mode").type(pvData.paymentMode).type("{enter}");
            cy.wait(1000);
            cy.formController("amount").type(pvData.amount);
            cy.formController("remarks").eq(1).type(pvData.remarks);
            cy.formController("transaction_date").click();
            cy.wait(1000);
            cy.contains(13).click();
            cy.wait(1000);
            cy.formController("ledger_id").type(pvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(pvData.remarks1);
            cy.formController("transaction_amount").clear().type(pvData.amount);
            cy.imsId("btn-submit").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();

            cy.log("Successfully created payment voucher");
        });
    }

    approvePaymentVoucher() {
        cy.fixture(this.test_data).then((data) => {
            var pvData = data.mfiAdmin.paymentVoucher;
            cy.imsId("menu-my-task").click();
            cy.imsId("submenu-awaiting-payment-voucher").click();
            // cy.formController("search_text").type(pvData.voucherNameEn);
            cy.imsId("toggle-action").first().click();
            cy.imsId("btn-table-action-view").click();
            cy.imsId("btn-lock").click();
            cy.imsId("btn-approve").click();
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();

            cy.log("Successfully approve payment voucher");
        });
    }

    actionButtonCheck() {
        cy.selectMenu("menu-voucher", "submenu-payment-voucher");
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on the payment voucher list page.");
    }

    detailsViewCheck() {
        cy.imsId("btn-table-action-view").click();
        cy.log("Details view button clicked successfully on the payment voucher list page.");
    }

    viewGoBackPaymentVoucher() {
        cy.imsId("btn-go-back").click();
        cy.log("Successfully go back the payment voucher page");
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var pvData = data.mfiAdmin.paymentVoucher;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(pvData.selectStatus).type("{enter}");
            cy.log("ledger sub group status inactive dropdown check successfully");
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var pvData = data.mfiAdmin.paymentVoucher;
            cy.formController("status").type(pvData.statusSelect).type("{enter}");
            cy.log("ledger sub group status active dropdown check successfully");
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            var pvData = data.mfiAdmin.paymentVoucher;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(pvData.voucherNameBn);
            cy.log("Successfully search in the payment voucher");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }

    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the payment voucher "
        );
    }

    gridDraftButton() {
        cy.imsId("btn-draft-on").click();
        cy.log("Draft button should be clickable and functional.");
    }

    gridDraftButtonOff() {
        cy.imsId("btn-draft-on").click();
        cy.log("Draft button should be clickable and functional.");
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
        cy.log("Successful validation message displaying.");
    }

    createApproveButtonCheck() {
        cy.imsId("btn-approve").click();
        cy.imsId("btn-ok").click();
        cy.log("Successful validation message displaying.");
    }

    createPaymentAddIconButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-add-icon").click();
        });
    }

    createPaymentRemoveIconButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-remove-icon").first().click();
        });
    }

    createGoBackButtonCheck() {
        cy.imsId("btn-go-back").click();
        cy.log("Successful go back button check.");
    }

    createNewJournalDetailsButtonCheck() {
        cy.imsId("btn-add-new").click();
        cy.imsId("btn-add-icon-0").click();
        cy.log("Successful add button check.");
    }

    createDeleteButtonCheck() {
        cy.imsId("btn-remove-icon-1").click();
        cy.imsId("btn-go-back").click();
        cy.log("Successful delete button check.");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsccessful switch bangla language check.");
    }
}

export const create_payment_voucher = new PaymentVoucherCreation();
