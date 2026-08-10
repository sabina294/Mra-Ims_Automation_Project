import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanAdjustment {
    test_data = Cypress.env("TEST_DATA");

    gridLoanAdjustmentListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-loan-adjustment");
            cy.log(messages.ui.gridListMessage);
        });
    }

    searchInLoanAdjustmentName() {
        cy.fixture(this.test_data).then((data) => {
            const laData = data.mfiAdmin.loanAdjustmentFrom;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(laData.samity);
            cy.log(messages.ui.searchMessage);
        });
    }
    statusOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const laData = data.mfiAdmin.loanAdjustmentFrom;
            cy.formController("office_id").type(laData.office).type("{enter}");
            cy.log(
                "Loan Adjustment status office dropdown check successfully"
            );
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
            const laData = data.mfiAdmin.loanAdjustmentFrom;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(laData.search);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();
            cy.log(messages.ui.searchMessage);
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_loan_adjustment = new LoanAdjustment();


