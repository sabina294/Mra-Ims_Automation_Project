import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanProvisionWriteOff {
    test_data = Cypress.env("TEST_DATA");

    gridLoanProvisionWriteOffListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-loan-account", "submenu-loan-provision-write-off");
            cy.log(messages.ui.gridListMessage);
        });
    }

    selectofficeDropdown() {
        cy.fixture(this.test_data).then((data) => {
            const lpData = data.mfiAdmin.loanProvisionFrom;
            cy.formController("office_id").type(lpData.selectOffice).type("{enter}");
            cy.log(
                "loan provision write-off office dropdown check successfully"
            );
        });
    }

    statusSubmittedDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const lpData = data.mfiAdmin.loanProvisionFrom;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController("status").type(lpData.selectStatus).type("{enter}");
            cy.log(
                "loan provision write-off status submitted dropdown check successfully"
            );
        });
    }
    statusApprovedDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const lpData = data.mfiAdmin.loanProvisionFrom;
            cy.formController("status").type(lpData.statusSelect).type("{enter}");
            cy.log(
                "loan provision write-off status approved dropdown check successfully"
            );
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
