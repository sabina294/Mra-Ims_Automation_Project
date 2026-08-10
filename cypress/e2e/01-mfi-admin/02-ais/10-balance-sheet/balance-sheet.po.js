import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class BalanceSheet {
    test_data = Cypress.env("TEST_DATA");

    gridBalanceSheetListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-financial-statement", "submenu-balance-sheet");
            cy.log(messages.ui.gridListMessage);
        });
    }

    gridRefreshButtonCheck() {
    cy.imsId("btn-reload").click();
    cy.log(
      messages.ui.gridRefreshSuccess
    );
  }

    selectofficeDropdown() {
        cy.fixture(this.test_data).then((data) => {
            const bsData = data.mfiAdmin.createBalanceSheetFrom;
            cy.formController("office_id").type(bsData.office);
            cy.log("Successfully select office in the balance sheet list page.");
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }

    gridGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log("Successful go back button check.");
    }
}

export const create_balance_sheet = new BalanceSheet();
