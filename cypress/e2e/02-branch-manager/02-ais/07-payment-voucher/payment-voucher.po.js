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
            var pvData = data.branchManager.paymentVoucher;
            cy.imsId("btn-add-new").click();

            cy.formController("voucher_name_en").type(pvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(pvData.voucherNameBn);
            cy.formController("payment_date").click();
            cy.contanins(19).click();
            cy.formController("payment_mode").type(pvData.paymentMode).type("{enter}");
            cy.formController("voucher_prepared_by").type(pvData.peparedBy).type("{enter}");
            cy.formController("remarks").type(pvData.remarks).type("{enter}");
            cy.formController("transaction_date").click();
            cy.contanins(19).click();
            cy.formController("ledger_id").type(pvData.ledger).type("{enter}");
            cy.formController("remarks").type(pvData.remarks1);
            cy.formController("transaction_amount").type(pvData.amount);
            cy.imsId("btn-submit").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();

            cy.log("Successfully created payment voucher");
        });
    }


    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on the payment voucher list page.");
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var pvData = data.branchManager.paymentVoucher;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(pvData.selectStatus).type("{enter}");
            cy.log("ledger sub group status inactive dropdown check successfully");
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var pvData = data.branchManager.paymentVoucher;
            cy.formController("status").type(pvData.statusSelect).type("{enter}");
            cy.log("ledger sub group status active dropdown check successfully");
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            var pvData = data.branchManager.paymentVoucher;
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

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsccessful switch bangla language check.");
    }
}

export const create_payment_voucher = new PaymentVoucherCreation();
