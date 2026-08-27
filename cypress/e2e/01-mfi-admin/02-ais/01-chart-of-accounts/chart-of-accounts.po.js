import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class ChartOfAccountsCreation {
    test_data = Cypress.env("TEST_DATA");

    gridChartOfAccountsListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.ACCOUNTING, COMMON.MENUS.CHART_OF_ACCOUNTS);
            cy.log(messages.ui.gridListMessage);
        });
    }

    createChartOfAccounts() {
        cy.fixture(this.test_data).then((data) => {
            const coaData = data.mfiAdmin.chartOfAccounts;
            cy.imsId(COMMON.BUTTONS.ADD).click();
            cy.formController("ledger_group_id").type(coaData.ledgergroup).type("{enter}");
            cy.formController("ledger_subgroup_oid").type(coaData.ledgerSubGroup).type("{enter}");
            cy.formController(COMMON.INPUTS.NAME_EN).type(coaData.nameEn);
            cy.formController(COMMON.INPUTS.NAME_BN).type(coaData.nameBn);
            cy.formController("mnemonic").type(coaData.mnemonicEn);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();

            cy.log(messages.ui.submitSuccess);
        });
    }

    createwithoutLedgerId() {
        cy.fixture(this.test_data).then((data) => {
            const coaData = data.mfiAdmin.chartOfAccounts;
            cy.imsId(COMMON.BUTTONS.ADD).click();
            cy.formController(COMMON.INPUTS.NAME_EN).type(coaData.nameEn);
            cy.formController(COMMON.INPUTS.NAME_BN).type(coaData.nameBn);
            cy.formController("mnemonic").type(coaData.mnemonicEn);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createwithoutNameEnglish() {
        cy.fixture(this.test_data).then((data) => {
            const coaData = data.mfiAdmin.chartOfAccounts;
            cy.formController("ledger_group_id").type(coaData.ledgergroup).type("{enter}");
            cy.formController("ledger_subgroup_oid").type(coaData.ledgerSubGroup).type("{enter}");
            cy.formController(COMMON.INPUTS.NAME_BN).type(coaData.nameBn);
            cy.formController("mnemonic").type(coaData.mnemonicEn);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createwithoutNameBangla() {
        cy.fixture(this.test_data).then((data) => {
            const coaData = data.mfiAdmin.chartOfAccounts;
            cy.formController("ledger_group_id").type(coaData.ledgergroup).type("{enter}");
            cy.formController("ledger_subgroup_oid").type(coaData.ledgerSubGroup).type("{enter}");
            cy.formController(COMMON.INPUTS.NAME_EN).type(coaData.nameEn);
            cy.formController("mnemonic").type(coaData.mnemonicEn);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createwithoutMnemonics() {
        cy.fixture(this.test_data).then((data) => {
            const coaData = data.mfiAdmin.chartOfAccounts;
            cy.formController("ledger_group_id").type(coaData.ledgergroup).type("{enter}");
            cy.formController("ledger_subgroup_oid").type(coaData.ledgerSubGroup).type("{enter}");
            cy.formController(COMMON.INPUTS.NAME_EN).type(coaData.nameEn);
            cy.formController(COMMON.INPUTS.NAME_BN).type(coaData.nameBn);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createwithoutBalanceSheetItem() {
        cy.fixture(this.test_data).then((data) => {
            const coaData = data.mfiAdmin.chartOfAccounts;
            cy.formController("ledger_group_id").type(coaData.ledgergroup).type("{enter}");
            cy.formController("ledger_subgroup_oid").type(coaData.ledgerSubGroup).type("{enter}");
            cy.formController(COMMON.INPUTS.NAME_EN).type(coaData.nameEn);
            cy.formController(COMMON.INPUTS.NAME_BN).type(coaData.nameBn);
            cy.formController("mnemonic").type(coaData.mnemonicEn);
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(coaData.status);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createwithoutStatus() {
        cy.fixture(this.test_data).then((data) => {
            const coaData = data.mfiAdmin.chartOfAccounts;
            cy.formController("ledger_group_id").type(coaData.ledgergroup).type("{enter}");
            cy.formController("ledger_subgroup_oid").type(coaData.ledgerSubGroup).type("{enter}");
            cy.formController(COMMON.INPUTS.NAME_EN).type(coaData.nameEn);
            cy.formController(COMMON.INPUTS.NAME_BN).type(coaData.nameBn);
            cy.formController("mnemonic").type(coaData.mnemonicEn);
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.GO_BACK).click();
            cy.log(messages.ui.withoutDataMessage);
        });
    }

    createResetButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const coaData = data.mfiAdmin.chartOfAccounts;
            cy.imsId(COMMON.BUTTONS.ADD).click();
            cy.formController(COMMON.INPUTS.NAME_EN).type(coaData.nameEn);
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.validation.requiredField);
        });
    }

    createValidationMessageCheck() {
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.validation.requiredField);
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

export const create_chart_of_accounts = new ChartOfAccountsCreation();
