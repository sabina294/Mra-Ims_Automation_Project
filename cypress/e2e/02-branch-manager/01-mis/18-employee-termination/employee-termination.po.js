class EmployeeTermination {
    test_data = Cypress.env("TEST_DATA");

    gridEmployeeTerminationListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-employee", "submenu-employee-termination");
            cy.log("Successfully Employee Termination list page.");
        });
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var etData = data.branchManager.gridEmpTerminationFrom;
            cy.formController("status").type(etData.selectStatus).type("{enter}");
            cy.log(
                "Employee Termination form status inactive dropdown check successfully"
            );
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var etData = data.branchManager.gridEmpTerminationFrom;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(etData.statusSelect).type("{enter}");
            cy.log(
                "Employee Termination form status active dropdown check successfully"
            );
        });
    }

    searchInEmployeeName() {
        cy.fixture(this.test_data).then((data) => {
            var etData = data.branchManager.gridEmpTerminationFrom;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(etData.search);
            cy.log("Successfully search in the Employee Termination form");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }

    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the Employee Termination form "
        );
    }

    gridDraftButton() {
        cy.imsId("btn-draft-on").click();
        cy.log("Draft button should be clickable and functional.");
    }

    gridDraftButtonOff() {
        cy.imsId("btn-draft-on").click();
        cy.log("Draft button should be clickable and functional.");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Successful switch to bangla language check.");
    }
}

export const grid_employee_termination = new EmployeeTermination();
