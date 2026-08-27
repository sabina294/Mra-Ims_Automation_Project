import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanProvisionWriteOff {
    test_data = Cypress.env("TEST_DATA");

    gridLoanProvisionWriteOffListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.LOAN_ACCOUNT, COMMON.MENUS.LOAN_PROVISION_WRITE_OFF);
            cy.log(messages.ui.gridListMessage);
        });
    }

    selectofficeDropdown() {
        cy.fixture(this.test_data).then((data) => {
            const lpData = data.mfiAdmin.loanProvisionFrom;
            cy.formController("office_id").type(lpData.selectOffice).type("{enter}");
            cy.log(messages.ui.officeDropdownMessage);
        });
    }

    statusSubmittedDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const lpData = data.mfiAdmin.loanProvisionFrom;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lpData.selectStatus).type("{enter}");
            cy.log(messages.ui.actionMessage);
        });
    }
    statusApprovedDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const lpData = data.mfiAdmin.loanProvisionFrom;
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lpData.statusSelect).type("{enter}");
            cy.log(messages.ui.approveSuccess);
        });
    }

    searchInLoanProvisionWriteOffName() {
        cy.fixture(this.test_data).then((data) => {
            const lpData = data.mfiAdmin.loanProvisionFrom;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.search);
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

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const lpData = data.mfiAdmin.loanProvisionFrom;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.search);
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

export const create_loan_provision_write_off = new LoanProvisionWriteOff();
