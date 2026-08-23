import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class GeneralLedger {
    test_data = Cypress.env("TEST_DATA");

    gridGeneralLedgerListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-financial-statement", "submenu-general-ledger");
            cy.log(messages.ui.gridListMessage);
        });
    }

    gridRefreshButtonCheck() {
        cy.imsId(COMMON.BUTTONS.RELOAD).click();
        cy.log(
            messages.ui.gridRefreshSuccess
        );
    }

    selectofficeDropdown() {
        cy.fixture(this.test_data).then((data) => {
            const glData = data.mfiAdmin.createGeneralLedgerFrom;
            cy.formController("office_id").type(glData.office);
            cy.log(messages.ui.gridListMessage);
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }

    gridGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }


}

export const create_general_ledger = new GeneralLedger();
