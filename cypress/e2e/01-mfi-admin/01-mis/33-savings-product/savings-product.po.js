class SavingsProductCreation {
  test_data = Cypress.env("TEST_DATA");

  gridSavingsProductListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu1("menu-savings-product");
      cy.log("Successfully savings product list page.");
    });
  }

  createSavingsProduct() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var spData = data.mfiAdmin.createSavingsProduct;

      cy.formController("office_id_list").type(spData.office).type("{enter}");
      cy.formController("savings_type_id")
        .type(spData.savingsType)
        .type("{enter}");
      cy.formController("short_name_dep").type(spData.depositId);
      cy.formController("savings_prod_name_en").type(spData.savingsProNameEn);
      cy.formController("savings_prod_name_bn").type(spData.savingsProNameBn);
      cy.formController("display_name").type(spData.displayNmae);
      cy.formController("interest_rate_terms")
        .type(spData.intersetTerms)
        .type("{enter}");
      cy.formController("interest_rate_frequency")
        .type(spData.intersetFrequency)
        .type("{enter}");
      cy.formController("interest_rate").type(spData.intersetRate);
      cy.formController("provision_interest_rate").type(
        spData.provisionIntRate
      );
      cy.formController("interest_calculated_using")
        .type(spData.intersetCalculate)
        .type("{enter}");
      cy.formController("interest_posting_period")
        .type(spData.intersetPostin)
        .type("{enter}");
      cy.formController("start_date").click();
      cy.contains("15").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(spData.saveSavingsMessage)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created savings product");
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
      var spData = data.mfiAdmin.createSavingsProduct;
      cy.formController("search_text").type(spData.intersetTerms);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mfi-mis").contains(spData.intersetTerms).and("be.visible");
      cy.log("Successfully viewed the savings product list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the savings product list page");

  }

  turnOffEditMode() {
    cy.fixture(this.test_data).then((data) => {
      var spData = data.mfiAdmin.createSavingsProduct;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(spData.intersetTerms);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("switch-button").click();
      cy.imsId("btn-go-back").click();

      cy.log("Savings product form Edit Mode toggled successfully");
    });
  }

  editSavingsProduct() {
    cy.fixture(this.test_data).then((data) => {
      var spData = data.mfiAdmin.createSavingsProduct;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(spData.intersetTerms);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(spData.updateSavingsMessage)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Savings product updated successfully");
    });
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-reset").click();
    cy.imsId("btn-go-back").click();

    cy.log("Successful clean displaying");
  }

  editGoBackButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var spData = data.mfiAdmin.createSavingsProduct;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(spData.selectStatus).type("{enter}");
      cy.log("savings product  status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var spData = data.mfiAdmin.createSavingsProduct;
      cy.formController("status").type(spData.statusSelect).type("{enter}");
      cy.log("savings product  status active dropdown check successfully");
    });
  }

  searchInSavingsProductName() {
    cy.fixture(this.test_data).then((data) => {
      var spData = data.mfiAdmin.createSavingsProduct;
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

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var spData = data.mfiAdmin.createSavingsProduct;
      cy.imsId("btn-add-new").click();
      cy.formController("interest_rate_terms").first().type(spData.intersetTerms);
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

export const create_savings_product = new SavingsProductCreation();
