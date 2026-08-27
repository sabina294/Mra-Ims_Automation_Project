import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class EmployeePromotion {
    test_data = Cypress.env("TEST_DATA");

    gridEmployeePromotionListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.EMPLOYEE, COMMON.MENUS.EMPLOYEE_PROMOTION);
            cy.log(messages.ui.gridListMessage);
        });
    }

    promotionResetButton() {

        cy.imsId(COMMON.GRID.ACTION_PROMOTION)
            .not(":disabled")
            .first()
            .click();

        cy.imsId(COMMON.BUTTONS.RESET).click();

        cy.log(messages.ui.resetSuccess);
    }

    promotionSubmitButton() {
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.actionMessage);
    }

    createEmployeePromotionWithoutEffectiveDate() {
        cy.fixture(this.test_data).then((data) => {
            const empata = data.branchManager.gridEmpPromotionFrom;
            cy.formController("new_department_id").type(empata.newDepartment).type("{enter}");
            cy.formController("new_designation_id").type(empata.newDesignation).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.submitSuccess);
        });
    }

    createEmployeePromotionWithoutDepartment() {
        cy.fixture(this.test_data).then((data) => {
            const empata = data.branchManager.gridEmpPromotionFrom;
            cy.formController("effective_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("new_designation_id").type(empata.newDesignation).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.submitSuccess);
        });
    }

    createEmployeePromotionWithoutDesignation() {
        cy.fixture(this.test_data).then((data) => {
            const empata = data.branchManager.gridEmpPromotionFrom;
            cy.formController("effective_date").click();
            cy.get('.ant-picker-dropdown')
                .should('be.visible');
            cy.get('.ant-picker-cell-in-view')
                .not('.ant-picker-cell-disabled')
                .first()
                .click({ force: true });
            cy.formController("new_department_id").type(empata.newDepartment).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.log(messages.ui.submitSuccess);
        });
    }

    promotionGoBackButton() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    createEmployeePromotion() {
        cy.fixture(this.test_data).then((data) => {
            const empata = data.branchManager.gridEmpPromotionFrom;
            cy.imsId(COMMON.GRID.ACTION_PROMOTION)
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
            cy.wait(1000);
            cy.formController("new_designation_id").type(empata.newDesignation).type("{enter}");
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.log(messages.ui.submitSuccess);
        });
    }

    myTaskMenuEmployeePromotion() {
        cy.fixture(this.test_data).then((data) => {
            const empData = data.branchManager.gridEmpPromotionFrom;
            cy.imsId(COMMON.MENUS.MY_TASK).click();
            cy.imsId(COMMON.MENUS.AWAITING_EMPLOYEE_PROMOTION).click();
            cy.log(messages.ui.actionMessage);
        });
    }

    myTaskResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.ui.resetSuccess);
    }

    myTaskRefreshButtonCheck() {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.log(messages.ui.refreshSuccess);
    }

    approveNewEmployeePromotion() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_VIEW).first().click();
        cy.imsId(COMMON.BUTTONS.LOCK).click();
        cy.imsId(COMMON.BUTTONS.APPROVE).click();
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.approveSuccess);
    }

    searchInEmployeeName() {
        cy.fixture(this.test_data).then((data) => {
            const emData = data.branchManager.gridEmpPromotionFrom;
            cy.selectMenu(COMMON.MENUS.EMPLOYEE, COMMON.MENUS.EMPLOYEE_PROMOTION);
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(emData.search);
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
            const emData = data.branchManager.gridEmpPromotionFrom;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(emData.search);
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

export const grid_employee_promotion = new EmployeePromotion();
