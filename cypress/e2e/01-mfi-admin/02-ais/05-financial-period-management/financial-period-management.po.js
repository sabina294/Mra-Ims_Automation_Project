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

    createFinancialPeriodManagement() {
        cy.fixture(this.test_data).then((data) => {
            var fpmData = data.mfiAdmin.financialPeriodManagement;
            cy.imsId("btn-add-new").click();
            cy.formController("name_en").type(fpmData.nameEn);
            cy.formController("name_bn").type(fpmData.nameBn);
            cy.formController("period_type").type(fpmData.periodType).type("{enter}");
            cy.formController("start_date").click();
            cy.wait(1000);
            cy.contains(15).click();
            cy.wait(1000);
            cy.imsId("btn-submit").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();

            cy.log("Successfully created financial period management");
        });
    }


    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on the financial period management list page.");
    }

    createDetailsViewCheck() {
        cy.imsId("btn-table-action-view").first().click();
        cy.log("View button clicked successfully on the financial period management list page.");
    }

    goBackFinancialPeriodManagement() {
        cy.imsId("btn-go-back").click();
        cy.log("Successfully go back the financial period management page");
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var fpmData = data.mfiAdmin.financialPeriodManagement;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(fpmData.selectStatus).type("{enter}");
            cy.log("ledger sub group status inactive dropdown check successfully");
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var fpmData = data.mfiAdmin.financialPeriodManagement;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(fpmData.statusSelect).type("{enter}");
            cy.log("ledger sub group status active dropdown check successfully");
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            var fpmData = data.mfiAdmin.financialPeriodManagement;
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

    createResetButtonCheck() {
        cy.imsId("btn-add-new").click();
        cy.imsId("btn-reset").click();
        cy.imsId("btn-go-back").click();
        cy.log("Successful reset button clean displaying.");
    }

    createValidationMessageCheck() {
        cy.imsId("btn-add-new").click();
        cy.imsId("btn-submit").click();
        cy.imsId("btn-ok").click();
        cy.imsId("btn-go-back").click();
        cy.log("Successful validation message displaying.");
    }

    createGoBackButtonCheck() {
        cy.imsId("btn-add-new").click();
        cy.imsId("btn-go-back").click();
        cy.log("Successful go back button check.");
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            var fpmData = data.mfiAdmin.financialPeriodManagement;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(fpmData.search);
            cy.imsId("btn-search").click();
            cy.log("Successful search button click.");
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsccessful switch bangla language check.");
    }
}

export const create_financial_period_management = new FinancialPeriodManagementCreation();
