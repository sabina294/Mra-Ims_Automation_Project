class DepartmentCreation {
  test_data = Cypress.env("TEST_DATA");

  gridDepartmentListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-department");
      cy.log("Successfully department list page.");
    });
  }

  createDepartment() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController("name_en").type(depData.nameEn);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(depData.messageSaveDepartment)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created department");
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController("name_bn").type(depData.nameBn);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation department without one mandatory field."
      );
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController("name_en").type(depData.nameEn);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(depData.messageSaveDepartment)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created department");
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      cy.imsId("btn-reset").click();

      var depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController("name_en").type(depData.nameEn);
      cy.formController("name_bn").type(depData.nameBn);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation department without one mandatory field."
      );
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the department list page.");
  }

  viewDepartment() {
    cy.fixture(this.test_data).then((data) => {
      var depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController("search_text").type(depData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mfi-mis").contains(depData.nameEn).and("be.visible");
      cy.log("Successfully viewed the department list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the department list page");

  }

  turnOffEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Department form Edit Mode toggled successfully");
  }

  editDepartment() {
    cy.fixture(this.test_data).then((data) => {
      var depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(depData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(depData.messageUpdateDepartment)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Department updated successfully");
    });
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-reset").click();
    cy.imsId("btn-go-back").click();

    cy.log("Successful clean displaying");
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      var depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-reset").click();
      cy.formController("name_en").type(depData.nameEn);
      cy.formController("name_bn").type(depData.nameBn);
      cy.formController("status").type(depData.status).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(depData.messageUpdateDepartment)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully updated department");
    });
  }

  editGoBackButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(depData.selectStatus).type("{enter}");
      cy.log("Department status inactive dropdown check successfully");
    });
  }
  
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var depData = data.mfiAdmin.createDepartmentFrom;
      cy.formController("status").type(depData.statusSelect).type("{enter}");
      cy.log("Department status active dropdown check successfully");
    });
  }

  searchInDepartmentName() {
    cy.fixture(this.test_data).then((data) => {
      var depData = data.mfiAdmin.createDepartmentFrom;
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

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var depData = data.mfiAdmin.createDepartmentFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(depData.nameEn);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful reset button clean displaying.");
    });
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

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const create_department = new DepartmentCreation();
