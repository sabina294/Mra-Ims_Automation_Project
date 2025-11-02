class fundTransferCreation {
    test_data = Cypress.env("TEST_DATA");

    gridfundListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu1("menu-fund");
            cy.log("Successfully fund transfer list page.");
        });
    }

    createfund() {
        cy.fixture(this.test_data).then((data) => {
            var ftData = data.mfiAdmin.fund;
            cy.imsId("btn-add-new").click();
            cy.formController("recipient_office_id").type(ftData.office).type("{enter}");
            cy.wait(2000);
            cy.formController("transaction_amount").type(ftData.Amount);
            cy.wait(1000);
            cy.formController("sender_pay_mode").type(ftData.senderPayment).type("{enter}");
            cy.formController("recipient_received_mode").type(ftData.recipientReceivedMode).type("{enter}");
            cy.formController("remarks").type(ftData.remarks);
            cy.imsId("btn-submit").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();

            cy.log("Successfully created fund transfer");
        });
    }


    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on the fund transfer list page.");
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var ftData = data.mfiAdmin.fund;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(ftData.selectStatus).type("{enter}");
            cy.log("ledger sub group status inactive dropdown check successfully");
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var ftData = data.mfiAdmin.fund;
            cy.formController("status").type(ftData.statusSelect).type("{enter}");
            cy.log("ledger sub group status active dropdown check successfully");
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            var ftData = data.mfiAdmin.fund;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(ftData.senderPayment);
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

export const create_fund_Transfer = new fundTransferCreation();
