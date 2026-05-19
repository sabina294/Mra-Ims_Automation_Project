import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class ReceivedVoucherCreation {
    test_data = Cypress.env("TEST_DATA");

    // ---------------- Page actions ----------------
    gridReceivedVoucherListPage() {
        cy.fixture(this.test_data).then(() => {
            cy.selectMenu("menu-voucher", "submenu-received-voucher");
            cy.log("Successfully received voucher list page.");
        });
    }

    createReceivedVoucher() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.mfiAdmin.receivedVoucher;
            cy.imsId("btn-add-new").click();
            cy.formController("voucher_name_en").type(rvData.voucherNameEn);
            cy.formController("voucher_name_bn").type(rvData.voucherNameBn);
            cy.formController("received_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("voucher_prepared_by").type(rvData.preparedBy).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(0).type(rvData.remarks);
            cy.formController("received_mode").type(rvData.paymentMode).type("{enter}");
            cy.formController("amount").type(rvData.amount);
            cy.formController("remarks").eq(1).type(rvData.remarks);
            cy.formController("transaction_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("ledger_id").type(rvData.ledger).type("{enter}");
            cy.wait(1000);
            cy.formController("remarks").eq(2).type(rvData.remarks1);
            cy.formController("transaction_amount").clear().type(rvData.amount);
            cy.imsId("btn-submit").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();
            cy.log("Successfully created received voucher");
        });
    }

    approveReceivedVoucher() {
        cy.fixture(this.test_data).then(() => {
            cy.imsId("menu-my-task").click();
            cy.imsId("submenu-awaiting-received-voucher").click();

            cy.imsId("toggle-action").first().click();
            cy.imsId("btn-table-action-view").click();
            cy.imsId("btn-lock").click();
            cy.imsId("btn-approve").click();
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();

            cy.log("Successfully approved received voucher");
        });
    }

    actionButtonCheck() {
        cy.selectMenu("menu-voucher", "submenu-received-voucher");
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on the received voucher list page.");
    }

    detailsViewCheck() {
        cy.imsId("btn-table-action-view").click();
        cy.log("Details view button clicked successfully on the received voucher list page.");
    }

    viewGoBackReceivedVoucher() {
        cy.imsId("btn-go-back").click();
        cy.log("Successfully went back to the received voucher list page");
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.mfiAdmin.receivedVoucher;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(rvData.selectStatus).type("{enter}");
            cy.log("Received voucher status inactive dropdown check successful");
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.mfiAdmin.receivedVoucher;
            cy.formController("status").type(rvData.statusSelect).type("{enter}");
            cy.log("Received voucher status active dropdown check successful");
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.mfiAdmin.receivedVoucher;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(rvData.voucherNameBn);
            cy.log("Successfully searched received voucher");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Grid reset button clicked successfully");
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const rvData = data.mfiAdmin.receivedVoucher;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(rvData.search);
            cy.imsId("btn-search").click();
            cy.log("Successful search button click.");
        });
    }

    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log("Grid refreshed successfully on received voucher list page");
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

    createResetButtonCheck() {
        cy.imsId("btn-add-new").click();
        cy.imsId("btn-reset").click();
        cy.log("Create reset button cleared all input successfully");
    }

    createValidationMessageCheck() {
        cy.imsId("btn-submit").click();
        cy.imsId("btn-ok").click();
        cy.log("Validation messages displayed successfully");
    }

    createDraftButtonCheck() {
        cy.imsId("btn-draft").click();
        cy.imsId("btn-ok").click();
        cy.log("Draft validation messages displayed successfully");
    }

    createApproveButtonCheck() {
        cy.imsId("btn-approve").click();
        cy.imsId("btn-ok").click();
        cy.log("Approve validation messages displayed successfully");
    }

    createPaymentAddIconButtonCheck() {
        cy.imsId("btn-add-icon").click();
        cy.log("Add icon button clicked successfully");
    }

    createPaymentRemoveIconButtonCheck() {
        cy.imsId("btn-remove-icon").first().click();
        cy.log("Remove icon button clicked successfully");
    }

    createGoBackButtonCheck() {
        cy.imsId("btn-go-back").click();
        cy.log("Go back button clicked successfully");
    }

    createNewJournalDetailsButtonCheck() {
        cy.imsId("btn-add-new").click();
        cy.imsId("btn-add-icon-0").click();
        cy.log("Add new journal details button clicked successfully");
    }

    createDeleteButtonCheck() {
        cy.imsId("btn-remove-icon-1").click();
        cy.imsId("btn-go-back").click();
        cy.log("Delete button clicked successfully");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Grid language switched successfully to Bangla");
    }
}

export const create_received_voucher = new ReceivedVoucherCreation();
