import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class FinancialPeriodManagementCreation {
    test_data = Cypress.env("TEST_DATA");

    gridFinancialPeriodListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.ACCOUNTING, COMMON.MENUS.FINANCIAL_PERIOD_MANAGEMENT);
            cy.log(messages.ui.gridListMessage);
        });
    }

    createFinancialPeriodManagement() {
        cy.fixture(this.test_data).then((data) => {
            const fpmData = data.mfiAdmin.financialPeriodManagement;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            cy.formController(COMMON.INPUTS.NAME_EN).type(fpmData.nameEn);
            cy.formController(COMMON.INPUTS.NAME_BN).type(fpmData.nameBn);
            cy.formController("period_type").type(fpmData.periodType).type("{enter}");
            cy.formController("start_date").click();
            cy.wait(1000);
            cy.contains(15).click();
            cy.wait(1000);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();

            cy.log(messages.ui.submitSuccess);
        });
    }


    createwithoutNameEnglish() {
        cy.fixture(this.test_data).then((data) => {
            const fpmData = data.mfiAdmin.financialPeriodManagement;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            cy.formController(COMMON.INPUTS.NAME_BN).type(fpmData.nameBn);
            cy.formController("period_type").type(fpmData.periodType).type("{enter}");
            cy.formController("start_date").click();
            cy.wait(1000);
            cy.contains(15).click();
            cy.wait(1000);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createwithoutNameBangla() {
        cy.fixture(this.test_data).then((data) => {
            const fpmData = data.mfiAdmin.financialPeriodManagement;
            cy.formController(COMMON.INPUTS.NAME_EN).type(fpmData.nameEn);
            cy.formController("period_type").type(fpmData.periodType).type("{enter}");
            cy.formController("start_date").click();
            cy.wait(1000);
            cy.contains(15).click();
            cy.wait(1000);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createwithoutPeriodType() {
        cy.fixture(this.test_data).then((data) => {
            const fpmData = data.mfiAdmin.financialPeriodManagement;
            cy.formController(COMMON.INPUTS.NAME_EN).type(fpmData.nameEn);
            cy.formController(COMMON.INPUTS.NAME_BN).type(fpmData.nameBn);
            cy.formController("start_date").click();
            cy.wait(1000);
            cy.contains(15).click();
            cy.wait(1000);
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

    createDetailsViewCheck() {
        cy.imsId(COMMON.GRID.ACTION_VIEW).first().click();
        cy.log(messages.ui.submitSuccess);
    }

    goBackFinancialPeriodManagement() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const fpmData = data.mfiAdmin.financialPeriodManagement;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(fpmData.selectStatus).type("{enter}");
            cy.log(messages.ui.dropdownInactiveMessage);
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const fpmData = data.mfiAdmin.financialPeriodManagement;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(fpmData.statusSelect).type("{enter}");
            cy.log(messages.ui.dropdownActiveMessage);
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            const fpmData = data.mfiAdmin.financialPeriodManagement;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(fpmData.nameEn);
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

    gridDraftButton() {
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.draftOnMessage);
    }

    gridDraftButtonOff() {
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.draftOffMessage);
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

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const fpmData = data.mfiAdmin.financialPeriodManagement;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(fpmData.search);
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

export const create_financial_period_management = new FinancialPeriodManagementCreation();
