import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class LoanChartUpdate {
  test_data = Cypress.env("TEST_DATA");

  gridLoanChartListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.LOAN_CLASSIFICATION_CHART);
      cy.log(messages.ui.gridListMessage);
    });
  }

  updateloanchart() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.UPDATE).and("be.visible");

      const loChart = data.mraAdmin.updateloanChartFrom;
      cy.imsId(COMMON.LOAN_CHART.MIN_OVERDUE_DAY_6).type(loChart.minOverDays);
      cy.imsId(COMMON.LOAN_CHART.MAX_OVERDUE_DAY_6).type(loChart.maxOverDays);
      cy.imsId(COMMON.LOAN_CHART.ACCUMULATION_RATE_6).type(loChart.accRate);
      cy.imsId(COMMON.LOAN_CHART.MIN_OVERDUE_DAY_7).type(loChart.minOver1Days);
      cy.imsId(COMMON.LOAN_CHART.MAX_OVERDUE_DAY_7).type(loChart.maxOver1Days);
      cy.imsId(COMMON.LOAN_CHART.ACCUMULATION_RATE_7).type(loChart.acc1Rate);
      cy.imsId(COMMON.BUTTONS.UPDATE).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(loChart.messageUpdateLoCh)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.actionMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewloanchart() {
    cy.fixture(this.test_data).then((data) => {
      const loChart = data.mraAdmin.updateloanChartFrom;
      // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(loChart.chartNameEn);
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();

      cy.get("app-mra-mfi").contains(loChart.chartNameEn).and("be.visible");
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.goBackSuccess);
  }

  editResetButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.editResetMessage);
  }

  editSubmitButton() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.editSubmitMessage);
  }

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const loChart = data.mraAdmin.updateloanChartFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(loChart.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const loChart = data.mraAdmin.updateloanChartFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(loChart.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInChartName() {
    cy.fixture(this.test_data).then((data) => {
      const loChart = data.mraAdmin.updateloanChartFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(loChart.chartNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(
      messages.ui.gridRefreshSuccess
    );
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

    gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const loChart = data.mraAdmin.updateloanChartFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(loChart.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  listBreadcrumbCheck() {
    configurationGridChecks.breadcrumb("Loan Classification Chart");
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns(["#", "Loan Classification Chart Name", "Min Over Due Day", "Max Over Due Day", "Accumulation Rate", "Status", "Actions"]);
  }

  gridRecordDataCheck() {
    configurationGridChecks.records(5, [1, 2, 3, 4]);
  }

  exactNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.exactSearch(data.mraAdmin.updateloanChartFrom.chartNameEn, 1);
    });
  }

  partialNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.partialSearch(data.mraAdmin.updateloanChartFrom.chartNameEn);
    });
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("LOAN_CHART");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.activeFilter(data.mraAdmin.updateloanChartFrom.statusSelect, 5);
    });
  }

  nameAscendingSortCheck() {
    configurationGridChecks.sort("Loan Classification Chart Name", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    configurationGridChecks.sort("Loan Classification Chart Name", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    configurationGridChecks.pagination();
  }

  viewPageDataAndBreadcrumbCheck() {
    configurationGridChecks.view("Loan Classification Chart", [1, 2, 3, 4, 5]);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const update_loan_chart = new LoanChartUpdate();
