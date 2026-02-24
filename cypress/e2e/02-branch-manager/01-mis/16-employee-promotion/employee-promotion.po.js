class EmployeePromotion {
    test_data = Cypress.env("TEST_DATA");

    gridEmployeePromotionListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-employee", "submenu-employee-promotion");
            cy.log("Successfully Employee Promotion list page.");
        });
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var emData = data.branchManager.gridEmpProMangFrom;
            cy.formController("status").type(emData.selectStatus).type("{enter}");
            cy.log(
                "Employee Promotion form status inactive dropdown check successfully"
            );
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var emData = data.branchManager.gridEmpProMangFrom;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(emData.statusSelect).type("{enter}");
            cy.log(
                "Employee Promotion form status active dropdown check successfully"
            );
        });
    }

    searchInEmployeeName() {
        cy.fixture(this.test_data).then((data) => {
            var emData = data.branchManager.gridEmpProMangFrom;
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

export const grid_employee_promotion = new EmployeePromotion();
