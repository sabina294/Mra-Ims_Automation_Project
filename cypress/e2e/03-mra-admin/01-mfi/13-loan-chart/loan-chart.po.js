class LoanChartUpdate {
  test_data = Cypress.env("TEST_DATA");

  gridLoanChartListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-loan-classification-chart");
      cy.log("Successfully loan classification chart list page.");
    });
  }

  updateloanchart() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-update").and("be.visible");

      var loChart = data.mraAdmin.updateloanChartFrom;
      cy.imsId("min-over-due-day-6").type(loChart.minOverDays);
      cy.imsId("max-over-due-day-6").type(loChart.maxOverDays);
      cy.imsId("accumulation-rate-6").type(loChart.accRate);
      cy.imsId("min-over-due-day-7").type(loChart.minOver1Days);
      cy.imsId("max-over-due-day-7").type(loChart.maxOver1Days);
      cy.imsId("accumulation-rate-7").type(loChart.acc1Rate);
      cy.imsId("btn-update").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(loChart.messageUpdateLoCh)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully updated loan classification chart");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the loan classification chart list page.");
  }

  viewloanchart() {
    cy.fixture(this.test_data).then((data) => {
      var loChart = data.mraAdmin.updateloanChartFrom;
      // cy.formController("search_text").type(loChart.chartNameEn);
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi").contains(loChart.chartNameEn).and("be.visible");
      cy.log("Successfully viewed the loan classification chart list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the loan classification chart list page");
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying");
  }

  editSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful submit button displaying");
  }

  editGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var loChart = data.mraAdmin.updateloanChartFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(loChart.selectStatus).type("{enter}");
      cy.log("Loan classification chart update inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var loChart = data.mraAdmin.updateloanChartFrom;
      cy.formController("status").type(loChart.statusSelect).type("{enter}");
      cy.log("Loan classification chart update active dropdown check successfully");
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
      "successfully refresh page  displayed the grid list of the loan classification chart update refresh list "
    );
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }

    gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var loChart = data.mraAdmin.updateloanChartFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(loChart.search);
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

export const update_loan_chart = new LoanChartUpdate();
