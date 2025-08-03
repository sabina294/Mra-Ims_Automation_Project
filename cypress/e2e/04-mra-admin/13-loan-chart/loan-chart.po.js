class LoanChartUpdate {
  test_data = Cypress.env("TEST_DATA");

  gridLoanChartListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-loan-classification-chart");
      cy.log("Successfully loanchart list page.");
    });
  }

  updateloanchart() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-update").and("be.visible");

      var loChart = data.mraAdmin.updateloanChartFrom;
      cy.imsId("btn-update").click();
      cy.get("app-confirmation-modal")
        .contains(loChart.messageUpdateLoCh)
        .and("be.visible");
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully updated loan chart");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the loan chart list page.");
  }

  viewloanchart() {
    cy.fixture(this.test_data).then((data) => {
      var loChart = data.mraAdmin.updateloanChartFrom;
      cy.formController("search_text").type(loChart.chartNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi").contains(loChart.chartNameEn).and("be.visible");
      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the loanchart list page");
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
      var loChart = data.mraAdmin.updateloanChartFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(loChart.selectStatus).type("{enter}");
      cy.log("Loanchart update inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var loChart = data.mraAdmin.updateloanChartFrom;
      cy.formController("status").type(loChart.statusSelect).type("{enter}");
      cy.log("Loanchart update active dropdown check successfully");
    });
  }

  searchInChartName() {
    cy.fixture(this.test_data).then((data) => {
      var loChart = data.mraAdmin.updateloanChartFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(loChart.chartNameEn);
      cy.log("Successfully search in the loanchart update list");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the loanchart update refresh list "
    );
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const update_loan_chart = new LoanChartUpdate();
