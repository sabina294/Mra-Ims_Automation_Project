import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class FinancialPeriodManagementCreation {
    test_data = Cypress.env("TEST_DATA");

    gridFinancialPeriodListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-accounting", "submenu-financial-period-management");
            cy.log(messages.ui.gridListMessage);
        });
    }

    actionButtonCheck() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(messages.ui.actionMessage);
    }

    viewFinancialPeriod() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_VIEW).click();
            cy.log(messages.ui.viewMessage);
        });
    }

    goBackFinancialPeriod() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).eq(0).click();
        cy.log("Successfully go back the financial period management page");
    }

    closeFinancialPeriod() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId("btn-table-action-close").click();
            cy.log("Successfully closed the financial period management page");
        });
    }

    closeGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log("Successfully go back the financial period management page");
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const fpmData = data.branchManager.financialPeriodManagement;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController("status").type(fpmData.selectStatus).type("{enter}");
            cy.log(messages.ui.dropdownInactiveMessage);
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const fpmData = data.branchManager.financialPeriodManagement;
            cy.formController("status").type(fpmData.statusSelect).type("{enter}");
            cy.log(messages.ui.dropdownActiveMessage);
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            const fpmData = data.branchManager.financialPeriodManagement;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(fpmData.nameEn);
            cy.log("Successfully search in the financial period management");
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
            const fpmData = data.branchManager.financialPeriodManagement;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(fpmData.nameEn);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();

            cy.log(messages.ui.searchMessage);
        });
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


    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_financial_period_management = new FinancialPeriodManagementCreation();
