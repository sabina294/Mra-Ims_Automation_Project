import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class SavingsAccountClosure {

    test_data = Cypress.env("TEST_DATA");

    gridSavingsAccountClosureListPage() {
        cy.selectMenu(COMMON.MENUS.SAVINGS_ACCOUNT, COMMON.MENUS.SAVINGS_ACCOUNT_CLOSURE_MANAGEMENT);
        cy.log(messages.ui.gridListMessage);
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const sacmData = data.branchManager.createSavingsAccountClosureManagement;

            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
                .type(sacmData.selectStatus)
                .type("{enter}");

            cy.log(messages.ui.dropdownInactiveMessage);
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const sacmData = data.branchManager.createSavingsAccountClosureManagement;

            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
                .type(sacmData.statusSelect)
                .type("{enter}");

            cy.log(messages.ui.dropdownActiveMessage);
        });
    }

    searchSavingsAccountClosure() {
        cy.fixture(this.test_data).then((data) => {
            const sacmData = data.branchManager.createSavingsAccountClosureManagement;

            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(sacmData.search);

            cy.log(messages.ui.searchSuccess);
        });
    }

    gridResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.ui.gridResetSuccess);
    }

    gridRefreshButtonCheck() {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.log(messages.ui.gridRefreshSuccess);
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const sacmData = data.branchManager.createSavingsAccountClosureManagement;

            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(sacmData.search);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();

            cy.log(messages.ui.searchMessage);
        });
    }

    createResetButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const sacmData = data.branchManager.createSavingsAccountClosureManagement;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            cy.formController("samity_id").type(sacmData.samityId).type("{enter}");
            cy.formController("member_id").type(sacmData.memberId).type("{enter}");
            cy.formController("savings_account_id").type(sacmData.savingsAccountId).type("{enter}");
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.validation.requiredField);
        });
    }

    createDraftButtonCheck() {
        cy.imsId(COMMON.BUTTONS.DRAFT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.draftOnMessage);
    }

    createSubmitButtonCheck() {
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.submitSuccess);
    }

    createGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.createGoBackMessage);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();

        cy.log(messages.ui.languageSwitchMessage);
    }



}

export const savings_account_closure = new SavingsAccountClosure();