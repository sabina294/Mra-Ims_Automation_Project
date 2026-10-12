import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class FundTransferCreation {
    test_data = Cypress.env("TEST_DATA");

    gridFundListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu1(COMMON.MENUS.FUND);
            cy.log(messages.ui.gridListMessage);
        });
    }

    createFundTransfer() {
        cy.fixture(this.test_data).then((data) => {
            const ftData = data.branchManager.fund;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            cy.formController("transaction_amount").type(ftData.amount);
            cy.formController("sender_pay_mode").type(ftData.paymentMode).type("{enter}");
            cy.formController("recipient_received_mode").type(ftData.receivedMode).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.log(messages.ui.submitSuccess);
        });
    }

     createwithoutTransactionAmount() {
        cy.fixture(this.test_data).then((data) => {
            const ftData = data.branchManager.fund;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            cy.formController("sender_pay_mode").type(ftData.paymentMode).type("{enter}");
            cy.formController("recipient_received_mode").type(ftData.receivedMode).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

     createwithoutSenderPaymentMode() {
        cy.fixture(this.test_data).then((data) => {
            const ftData = data.branchManager.fund;
            cy.formController("transaction_amount").type(ftData.amount);
            cy.formController("recipient_received_mode").type(ftData.receivedMode).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

     createwithoutRecipientReceivedMode() {
        cy.fixture(this.test_data).then((data) => {
            const ftData = data.branchManager.fund;
            cy.formController("transaction_amount").type(ftData.amount);
            cy.formController("sender_pay_mode").type(ftData.paymentMode).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

     createwithoutRemarks() {
        cy.fixture(this.test_data).then((data) => {
            const ftData = data.branchManager.fund;
            cy.formController("transaction_amount").type(ftData.amount);
            cy.formController("sender_pay_mode").type(ftData.paymentMode).type("{enter}");
            cy.formController("recipient_received_mode").type(ftData.receivedMode).type("{enter}");
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

    viewFund() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.GRID.ACTION_VIEW).click();
            cy.log(messages.ui.viewMessage);
        });
    }

    viewGoBackfund() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.viewMessage);
    }

verifyFundTransfer() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_VERIFY).click();
            cy.log(messages.ui.viewMessage);
        });
    }

    verifyFundTransferGoBack() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.GO_BACK).click();
            cy.log(messages.ui.goBackSuccess);
        });
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const ftData = data.branchManager.fund;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(ftData.selectStatus).type("{enter}");
            cy.log(messages.ui.dropdownInactiveMessage);
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const ftData = data.branchManager.fund;
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(ftData.statusSelect).type("{enter}");
            cy.log(messages.ui.dropdownActiveMessage);
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            const ftData = data.branchManager.fund;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(ftData.search);
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

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const ftData = data.branchManager.fund;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(ftData.search);
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

    openListForChecks() {
        cy.visit("/mfi-ais/fund/fund-transfer/list");
        cy.location("pathname").should("eq", "/mfi-ais/fund/fund-transfer/list");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        configurationGridChecks.breadcrumb("Fund", []);
        cy.contains("Fund Transfer").should("be.visible");
    }

    requiredGridColumnsCheck() {
        this.openListForChecks();
        // Normalize whitespace because payment-mode headings wrap across lines.
        const expected = ["#", "Branch Fund Transfer ID", "Sender Office", "Recipient Office", "Sender Payment Mode", "Recipient Receive Mode", "Prepared By", "Created By", "Amount", "Status", "Actions"];
        cy.get(COMMON.TABLE.HEAD).should(($head) => {
            const headers = [...$head.find("th")].map((cell) => cell.textContent.replace(/\s+/g, " ").trim());
            expected.forEach((label) => expect(headers, "grid headers").to.include(label));
        });
    }

    gridRecordDataCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
            expect($rows.length, "fund transfer records").to.be.greaterThan(0);
            $rows.each((_, row) => {
                const cells = Cypress.$(row).find("td");
                expect(cells.eq(0).text().trim(), "serial").to.match(/^\d+$/);
                [1, 2, 3, 4, 5, 6, 7, 9].forEach((index) => {
                    expect(cells.eq(index).text().trim(), `column ${index + 1}`).not.to.equal("");
                });
            });
        });
    }

    transferAmountCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
            expect($rows.length, "fund transfers to verify").to.be.greaterThan(0);
            $rows.each((_, row) => {
                const amount = Cypress.$(row).find("td").eq(8).text().trim();
                expect(amount, "formatted transfer amount").to.match(/^(?:\d+|\d{1,3}(?:,\d{2,3})+)\.\d{2}$/);
                expect(Number(amount.replace(/,/g, "")), "positive transfer amount").to.be.finite.and.greaterThan(0);
            });
        });
    }

    transferIdSearchCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
            .first().find("td").eq(1).invoke("text").then((text) => {
                const id = text.trim();
                expect(id, "existing transfer ID").not.to.equal("");
                configurationGridChecks.exactSearch(id, 1);
            });
    }

    noResultSearchCheck() {
        this.openListForChecks();
        configurationGridChecks.noResult("BM_FUND_TRANSFER");
    }

    activeStatusResultCheck() {
        this.openListForChecks();
        configurationGridChecks.activeFilter("Active", 9);
    }

    senderAscendingSortCheck() {
        this.openListForChecks();
        configurationGridChecks.sort("Sender Office", COMMON.SORT.ASCENDING);
    }

    senderDescendingSortCheck() {
        this.openListForChecks();
        configurationGridChecks.sort("Sender Office", COMMON.SORT.ASCENDING);
        configurationGridChecks.sort("Sender Office", COMMON.SORT.DESCENDING);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const create_fund_Transfer = new FundTransferCreation();
