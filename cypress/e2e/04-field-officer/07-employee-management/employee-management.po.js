class EmployeeManagement {
  test_data = Cypress.env("TEST_DATA");

  gridEmployeeListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu1("menu-employee");
      cy.log("Successfully Employee Management list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the employee management list page."
    );
  }

  viewEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.fieldOfficer.gridEmpMangFrom;

      cy.formController("search_text").type(emData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the employee management list page");
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.fieldOfficer.gridEmpMangFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(emData.selectStatus).type("{enter}");
      cy.log(
        "Employee Management form status inactive dropdown check successfully"
      );
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.fieldOfficer.gridEmpMangFrom;
      cy.formController("status").type(emData.statusSelect).type("{enter}");
      cy.log(
        "Employee Management form status active dropdown check successfully"
      );
    });
  }

  searchInEmployeeName() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.fieldOfficer.gridEmpMangFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(emData.empNameEn);
      cy.log("Successfully search in the Employee Management form");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Employee Management form "
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

  createDraftButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-draft").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful draft button check.");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const grid_employee_management = new EmployeeManagement();
