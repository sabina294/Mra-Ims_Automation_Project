class Department {
  test_data = Cypress.env("TEST_DATA");

  gridDepartmentListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-department");
      cy.log("Successfully department list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the department list page.");
  }

  viewDepartment() {
    cy.fixture(this.test_data).then((data) => {
      var depData = data.fieldOfficer.gridDepartmentFrom;
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the department list page");
    });
  }

  turnOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Department form Edit Mode toggled successfully");
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying");
  }

  editSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();

    cy.log("Successful submit validation check.");
  }

  editGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var depData = data.fieldOfficer.gridDepartmentFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(depData.selectStatus).type("{enter}");
      cy.log("Department status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var depData = data.fieldOfficer.gridDepartmentFrom;
      cy.formController("status").type(depData.statusSelect).type("{enter}");
      cy.log("Department status active dropdown check successfully");
    });
  }

  searchInDepartmentName() {
    cy.fixture(this.test_data).then((data) => {
      var depData = data.fieldOfficer.gridDepartmentFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(depData.nameEn);
      cy.log("Successfully search in the department");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }
  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the department "
    );
  }

   gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var depData = data.fieldOfficer.gridDepartmentFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(depData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const grid_department = new Department();
