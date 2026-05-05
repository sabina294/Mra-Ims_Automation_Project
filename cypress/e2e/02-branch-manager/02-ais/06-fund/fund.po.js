class FundTransferCreation {
    test_data = Cypress.env("TEST_DATA");

    gridFundListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu1("menu-fund");
            cy.log("Successfully fund transfer list page.");
        });
    }

    createFundTransfer() {
        cy.fixture(this.test_data).then((data) => {
            var ftData = data.branchManager.fund;
            cy.imsId("btn-add-new").click();
            cy.formController("transaction_amount").type(ftData.amount);
            cy.formController("sender_pay_mode").type(ftData.paymentMode).type("{enter}");
            cy.formController("recipient_received_mode").type(ftData.receivedMode).type("{enter}");
            cy.imsId("btn-submit").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();
            cy.log("Successfully created fund transfer");
        });
    }

     createwithoutTransactionAmount() {
        cy.fixture(this.test_data).then((data) => {
            var ftData = data.branchManager.fund;
            cy.imsId("btn-add-new").click();
            cy.formController("sender_pay_mode").type(ftData.paymentMode).type("{enter}");
            cy.formController("recipient_received_mode").type(ftData.receivedMode).type("{enter}");
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();
            cy.imsId("btn-reset").click();
            cy.log("Unsuccessfully created fund transfer Transaction Amount");
        });
    }

     createwithoutSenderPaymentMode() {
        cy.fixture(this.test_data).then((data) => {
            var ftData = data.branchManager.fund;
            cy.formController("transaction_amount").type(ftData.amount);
            cy.formController("recipient_received_mode").type(ftData.receivedMode).type("{enter}");
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();
            cy.imsId("btn-reset").click();
            cy.log("Unsuccessfully created fund transfer without Sender Payment Mode");
        });
    }

     createwithoutRecipientReceivedMode() {
        cy.fixture(this.test_data).then((data) => {
            var ftData = data.branchManager.fund;
            cy.formController("transaction_amount").type(ftData.amount);
            cy.formController("sender_pay_mode").type(ftData.paymentMode).type("{enter}");
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();
            cy.imsId("btn-reset").click();
            cy.log("Unsuccessfully created fund transfer without Recipient Received Mode");
        });
    }

     createwithoutRemarks() {
        cy.fixture(this.test_data).then((data) => {
            var ftData = data.branchManager.fund;
            cy.formController("transaction_amount").type(ftData.amount);
            cy.formController("sender_pay_mode").type(ftData.paymentMode).type("{enter}");
            cy.formController("recipient_received_mode").type(ftData.receivedMode).type("{enter}");
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();
            cy.imsId("btn-go-back").click();
            cy.log("Successfully created fund transfer");
        });
    }

    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on the fund transfer list page.");
    }

    viewFund() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-table-action-view").click();
            cy.log("Successfully viewed the fund transfer page");
        });
    }

    viewGoBackfund() {
        cy.imsId("btn-go-back").click();
        cy.log("Successfully go back the fund transfer page");
    }

verifyFundTransfer() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("toggle-action").first().click();
            cy.imsId("btn-table-action-verify").click();
            cy.log("Successfully viewed the fund  transfer page");
        });
    }

    verifyFundTransferGoBack() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-go-back").click();
            cy.log("Successfully viewed the fund verify go back page");
        });
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var ftData = data.branchManager.fund;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(ftData.selectStatus).type("{enter}");
            cy.log("ledger sub group status inactive dropdown check successfully");
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var ftData = data.branchManager.fund;
            cy.formController("status").type(ftData.statusSelect).type("{enter}");
            cy.log("ledger sub group status active dropdown check successfully");
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            var ftData = data.branchManager.fund;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(ftData.search);
            cy.log("Successfully search in the fund transfer");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }
    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the fund transfer "
        );
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            var ftData = data.branchManager.fund;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(ftData.search);
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

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Successful switch bangla language check.");
    }
}

export const create_fund_Transfer = new FundTransferCreation();
