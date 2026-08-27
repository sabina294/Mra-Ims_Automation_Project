
import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanDisbursement {
    test_data = Cypress.env("TEST_DATA");

    gridLoanDisbursementListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.LOAN_ACCOUNT, COMMON.MENUS.LOAN_DISBURSEMENT);
            cy.log(messages.ui.gridListMessage);
        });
    }

    actionButtonCheck() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(
            messages.ui.actionMessage
        );
    }

    viewLoanDisbursement() {
        cy.fixture(this.test_data).then((data) => {
            const ldData = data.branchManager.loanDisbursementFrom;
            cy.imsId(COMMON.GRID.ACTION_VIEW).click();
            cy.log(messages.ui.viewMessage);
        });
    }

    viewGoBackButton() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();

        cy.log(messages.ui.goBackSuccess);
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const ldData = data.branchManager.loanDisbursementFrom;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(ldData.search);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();
            cy.log(messages.ui.searchMessage);
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

     gridDisbursedButton() {
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.draftOnMessage);
    }

    gridDisbursedButtonOff() {
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.draftOffMessage);
    }

    loanDisburseButtonCheck() {
        cy.fixture(this.test_data).then(() => {

            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_DISBURSE).click();
            cy.imsId(COMMON.BUTTONS.LOAN_DISBURSE).click({ force: true });
            cy.log(messages.ui.actionMessage);
        });
    }
    loanDisburseSubmitButtonCheck() {
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.form.submitSuccess);
    }

     gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
    
}
export const create_loan_disbursement = new LoanDisbursement();


