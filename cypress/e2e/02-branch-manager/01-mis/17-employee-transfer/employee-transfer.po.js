class EmployeeTransfer {
    test_data = Cypress.env("TEST_DATA");

    gridEmployeeTransferListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-employee", "submenu-employee-transfer");
            cy.log("Successfully Employee Transfer list page.");
        });
    }

     transferResetButton() {

        cy.imsId("btn-table-action-transfer")
            .not(":disabled")
            .first()
            .click();

        cy.imsId("btn-reset").click();

        cy.log("Successful clean displaying");
    }

    transferSubmitButton() {
        cy.imsId("btn-submit").click();
        cy.imsId("btn-ok").click();
        cy.log("Successfully validation check transfer");
    }

    transferGoBackButton() {
        cy.imsId("btn-go-back").click();
        cy.log("Successful transfer go back button check.");
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var emData = data.branchManager.gridEmpTransferFrom;
            cy.formController("status").type(emData.selectStatus).type("{enter}");
            cy.log(
                "Employee Transfer form status inactive dropdown check successfully"
            );
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var emData = data.branchManager.gridEmpTransferFrom;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(emData.statusSelect).type("{enter}");
            cy.log(
                "Employee Transfer form status active dropdown check successfully"
            );
        });
    }

    searchInEmployeeName() {
        cy.fixture(this.test_data).then((data) => {
            var emData = data.branchManager.gridEmpTransferFrom;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(emData.search);
            cy.log("Successfully search in the Employee Transfer form");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }

    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the Employee Transfer form "
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

export const grid_employee_transfer = new EmployeeTransfer();
