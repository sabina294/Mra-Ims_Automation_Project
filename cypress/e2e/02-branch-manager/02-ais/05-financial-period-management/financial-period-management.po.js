import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class FinancialPeriodManagementCreation {
    test_data = Cypress.env("TEST_DATA");

    gridFinancialPeriodListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-accounting", "submenu-financial-period-management");
            cy.log("Successfully Chart of accounts list page.");
        });
    }

    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on the financial period management list page.");
    }

    viewFinancialPeriod() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("toggle-action").first().click();
            cy.imsId("btn-table-action-view").click();
            cy.log("Successfully viewed the financial period management page");
        });
    }

    goBackFinancialPeriod() {
        cy.imsId("btn-go-back").eq(0).click();
        cy.log("Successfully go back the financial period management page");
    }

    closeFinancialPeriod() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("toggle-action").first().click();
            cy.imsId("btn-table-action-close").click();
            cy.log("Successfully closed the financial period management page");
        });
    }

    closeGoBackButtonCheck() {
        cy.imsId("btn-go-back").click();
        cy.log("Successfully go back the financial period management page");
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var fpmData = data.branchManager.financialPeriodManagement;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(fpmData.selectStatus).type("{enter}");
            cy.log("ledger sub group status inactive dropdown check successfully");
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var fpmData = data.branchManager.financialPeriodManagement;
            cy.formController("status").type(fpmData.statusSelect).type("{enter}");
            cy.log("ledger sub group status active dropdown check successfully");
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            var fpmData = data.branchManager.financialPeriodManagement;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(fpmData.nameEn);
            cy.log("Successfully search in the financial period management");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }
    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the financial period management "
        );
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            var fpmData = data.branchManager.financialPeriodManagement;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(fpmData.nameEn);
            cy.imsId("btn-search").click();

            cy.log("Successfully search button click.");
        });
    }

    gridDraftButton() {
    cy.imsId(GRID.BUTTONS.DRAFT_ON)
      .check({ force: true });
    cy.log(messages.ui.draftOnMessage);
  }

  gridDraftButtonOff() {
    cy.imsId(GRID.BUTTONS.DRAFT_OFF)
      .uncheck({ force: true });
    cy.log(messages.ui.draftOffMessage);
  }


    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Successful switch bangla language check.");
    }
}

export const grid_financial_period_management = new FinancialPeriodManagementCreation();
