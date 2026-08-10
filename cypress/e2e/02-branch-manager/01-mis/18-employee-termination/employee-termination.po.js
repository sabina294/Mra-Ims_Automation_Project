import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class EmployeeTermination {
    test_data = Cypress.env("TEST_DATA");

    gridEmployeeTerminationListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-employee", "submenu-employee-termination");
            cy.log(messages.ui.gridListMessage);
        });
    }

    createEmployeeTermination() {
        cy.imsId("btn-table-action-termination")
            .not(":disabled")
            .first()
            .click();

        // ensure view page loaded
        cy.url().should("include", "employee-termination/view");

        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();

        cy.log(messages.ui.submitSuccess);
    }

    terminationGoBackButton() {
        cy.imsId("btn-table-action-termination")
            .not(":disabled")
            .first()
            .click();

        // ensure view page loaded
        cy.url().should("include", "employee-termination/view");

        cy.imsId(COMMON.BUTTONS.GO_BACK).click();

        cy.log("Successful termination go back button check.");
    }

    myTaskMenuEmployeeTermination() {
        cy.fixture(this.test_data).then((data) => {
            const etData = data.branchManager.gridEmpTerminationFrom;
            cy.imsId("menu-my-task").click();
            cy.imsId("submenu-awaiting-employee-termination").click();
            cy.log("Successfully navigate to my task menu employee termination");
        });
    }

    myTaskResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log("Successful clean my task displaying.");
    }

    myTaskRefreshButtonCheck() {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.log(
            "successfully refresh page  displayed the my task list of the Employee termination form "
        );
    }

    approveNewEmployeeTermination() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_VIEW).first().click();
        cy.imsId("btn-lock").click();
        cy.imsId(COMMON.BUTTONS.APPROVE).click();
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log("Successfully approved employee termination");
    }

    searchInEmployeeName() {
        cy.fixture(this.test_data).then((data) => {
            const etData = data.branchManager.gridEmpTerminationFrom;
            cy.selectMenu("menu-employee", "submenu-employee-termination");
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(etData.search);
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
            const etData = data.branchManager.gridEmpTerminationFrom;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(etData.search);
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

export const grid_employee_termination = new EmployeeTermination();
