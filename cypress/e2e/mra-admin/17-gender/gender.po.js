class GenderCreation {
  test_data = Cypress.env("TEST_DATA");

  gridGenderListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-gender");
      cy.log("Successfully Gender list page.");
    });
  }

  createGender() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var genderData = data.mraAdmin.creategenderFrom;
      cy.formController("name_en").type(genderData.nameEn);
      cy.formController("name_bn").type(genderData.nameBn);
      cy.formController("gender_id").type(genderData.genderId);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(genderData.messageSaveGe)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created gender");
    });
  }

  viewGender() {
    cy.fixture(this.test_data).then((data) => {
      var genderData = data.mraAdmin.creategenderFrom;
      cy.formController("search_text").type(genderData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi").contains(genderData.nameEn).and("be.visible");
      cy.get("app-mra-mfi").contains(genderData.nameBn).and("be.visible");
      cy.get("app-mra-mfi").contains(genderData.genderId).and("be.visible");

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the gender list page");
    });
  }

  editGender() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      var genderData = data.mraAdmin.creategenderFrom;
      cy.get("app-confirmation-modal")
        .contains(genderData.messageUpdateGe)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Gender updated successfully");
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var genderData = data.mraAdmin.creategenderFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(genderData.selectStatus).type("{enter}");
      cy.log("gender form status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var genderData = data.mraAdmin.creategenderFrom;
      cy.formController("status").type(genderData.statusSelect).type("{enter}");
      cy.log("gender form status active dropdown check successfully");
    });
  }

  searchInGenderName() {
    cy.fixture(this.test_data).then((data) => {
      var genderData = data.mraAdmin.creategenderFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(genderData.nameEn);
      cy.log("Successfully search in the gender form");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the gender form "
    );
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var genderData = data.mraAdmin.creategenderFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(genderData.nameEn);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful clean displaying.");
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
}

export const create_gender = new GenderCreation();
