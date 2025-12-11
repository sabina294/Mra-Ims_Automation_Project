class SavingsProductCreation {
  test_data = Cypress.env("TEST_DATA");

  gridSavingsProductListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu1("menu-savings-product");
      cy.log("Successfully savings product list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the savings product  list page."
    );
  }

  viewSavingsProduct() {
    cy.fixture(this.test_data).then((data) => {
      var spData = data.fieldOfficer.gridSavingsProduct;
      cy.formController("search_text").type(spData.intersetTerms);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mfi-mis").contains(spData.intersetTerms).and("be.visible");
      cy.log("Successfully viewed the savings product list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully viewed go back the savings product management list page");

  }

  turnOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.get('.ant-switch-inner > .hidden').click();

    cy.log("savings product Management form Edit Mode toggled successfully");
  }

  editResetButton() {
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
      var spData = data.fieldOfficer.gridSavingsProduct;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(spData.selectStatus).type("{enter}");
      cy.log("savings product  status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var spData = data.fieldOfficer.gridSavingsProduct;
      cy.formController("status").type(spData.statusSelect).type("{enter}");
      cy.log("savings product  status active dropdown check successfully");
    });
  }

  searchInSavingsProductName() {
    cy.fixture(this.test_data).then((data) => {
      var spData = data.fieldOfficer.gridSavingsProduct;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(spData.intersetTerms);
      cy.log("Successfully search in the savings product ");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the savings product  "
    );
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const create_savings_product = new SavingsProductCreation();
