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

    createEmployeeTransfer() {
        cy.fixture(this.test_data).then((data) => {
            var emtData = data.branchManager.gridEmpTransferFrom;
            cy.imsId("btn-table-action-transfer")
                .not(":disabled")
                .first()
                .click();
            cy.formController("effective_date").click();
            cy.wait(2000);
            cy.contains(15).click({ force: true });
            cy.formController("new_office_id").type(emtData.newOffice).type("{enter}");
            cy.imsId("btn-submit").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();
            cy.log("Successfully created employee transfer");
        });
    }

      approveNewEmployeeTransfer() {
        cy.imsId("menu-my-task").click();
        cy.imsId("submenu-awaiting-employee-transfer").click();
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-view").first().click();
        cy.imsId("btn-approve").click();
        cy.imsId("btn-submit").click();
        cy.imsId("btn-ok").click();
        cy.log("Successfully approved employee transfer");
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var emtData = data.branchManager.gridEmpTransferFrom;
            cy.selectMenu("menu-employee", "submenu-employee-transfer");
            cy.formController("status").type(emtData.selectStatus).type("{enter}");
            cy.log(
                "Employee Transfer form status inactive dropdown check successfully"
            );
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var emtData = data.branchManager.gridEmpTransferFrom;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(emtData.statusSelect).type("{enter}");
            cy.log(
                "Employee Transfer form status active dropdown check successfully"
            );
        });
    }

    searchInEmployeeName() {
        cy.fixture(this.test_data).then((data) => {
            var emtData = data.branchManager.gridEmpTransferFrom;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(emtData.search);
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
