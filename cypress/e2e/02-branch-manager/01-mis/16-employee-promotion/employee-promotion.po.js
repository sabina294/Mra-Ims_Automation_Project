import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class EmployeePromotion {
    test_data = Cypress.env("TEST_DATA");

    gridEmployeePromotionListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-employee", "submenu-employee-promotion");
            cy.log("Successfully Employee Promotion list page.");
        });
    }

    promotionResetButton() {

        cy.imsId("btn-table-action-promotion")
            .not(":disabled")
            .first()
            .click();

        cy.imsId("btn-reset").click();

        cy.log("Successful clean displaying");
    }

    promotionSubmitButton() {
        cy.imsId("btn-submit").click();
        cy.imsId("btn-ok").click();
        cy.log("Successfully validation check promotion");
    }

    createEmployeePromotionWithoutEffectiveDate() {
        cy.fixture(this.test_data).then((data) => {
            var empata = data.branchManager.gridEmpPromotionFrom;
            cy.formController("new_department_id").type(empata.newDepartment).type("{enter}");
            cy.formController("new_designation_id").type(empata.newDesignation).type("{enter}");
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();
            cy.imsId("btn-reset").click();
            cy.log("Successful promotion effective date field check.");
        });
    }

    createEmployeePromotionWithoutDepartment() {
        cy.fixture(this.test_data).then((data) => {
            var empata = data.branchManager.gridEmpPromotionFrom;
            cy.formController("effective_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("new_designation_id").type(empata.newDesignation).type("{enter}");
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();
            cy.imsId("btn-reset").click();
            cy.log("Successful promotion department field check.");
        });
    }

    createEmployeePromotionWithoutDesignation() {
        cy.fixture(this.test_data).then((data) => {
            var empata = data.branchManager.gridEmpPromotionFrom;
            cy.formController("effective_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("new_department_id").type(empata.newDepartment).type("{enter}");
            cy.imsId("btn-submit").click();
            cy.imsId("btn-ok").click();
            cy.log("Successful promotion designation field check.");
        });
    }

    promotionGoBackButton() {
        cy.imsId("btn-go-back").click();
        cy.log("Successful promotion go back button check.");
    }

    createEmployeePromotion() {
        cy.fixture(this.test_data).then((data) => {
            var empata = data.branchManager.gridEmpPromotionFrom;
            cy.imsId("btn-table-action-promotion")
                .not(":disabled")
                .first()
                .click();
            cy.formController("effective_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("new_department_id").type(empata.newDepartment).type("{enter}");
            cy.formController("new_designation_id").type(empata.newDesignation).type("{enter}");
            cy.imsId("btn-submit").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();
            cy.log("Successfully created employee promotion");
        });
    }

    approveNewEmployeePromotion() {
        cy.imsId("menu-my-task").click();
        cy.imsId("submenu-awaiting-employee-promotion").click();
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-view").first().click();
        cy.imsId("btn-approve").click();
        cy.imsId("btn-submit").click();
        cy.imsId("btn-ok").click();
        cy.log("Successfully approved employee promotion");
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var emData = data.branchManager.gridEmpPromotionFrom;
            cy.selectMenu("menu-employee", "submenu-employee-promotion");
            cy.formController("status").type(emData.selectStatus).type("{enter}");
            cy.log(
                "Employee Promotion form status inactive dropdown check successfully"
            );
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var emData = data.branchManager.gridEmpPromotionFrom;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(emData.statusSelect).type("{enter}");
            cy.log(
                "Employee Promotion form status active dropdown check successfully"
            );
        });
    }

    searchInEmployeeName() {
        cy.fixture(this.test_data).then((data) => {
            var emData = data.branchManager.gridEmpPromotionFrom;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(emData.search);
            cy.log("Successfully search in the Employee Promotion form");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }

    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the Employee Promotion form "
        );
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            var emData = data.branchManager.gridEmpPromotionFrom;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(emData.search);
            cy.imsId("btn-search").click();
            cy.log("Successful search button click.");
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
        cy.log("Successful switch to bangla language check.");
    }
}

export const grid_employee_promotion = new EmployeePromotion();
