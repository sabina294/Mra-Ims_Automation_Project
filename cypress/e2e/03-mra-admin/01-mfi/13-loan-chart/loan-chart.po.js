import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanChartUpdate {
  test_data = Cypress.env("TEST_DATA");

  gridLoanChartListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-loan-classification-chart");
      cy.log(messages.ui.gridListMessage);
    });
  }

  updateloanchart() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId("btn-update").and("be.visible");

      const loChart = data.mraAdmin.updateloanChartFrom;
      cy.imsId("min-over-due-day-6").type(loChart.minOverDays);
      cy.imsId("max-over-due-day-6").type(loChart.maxOverDays);
      cy.imsId("accumulation-rate-6").type(loChart.accRate);
      cy.imsId("min-over-due-day-7").type(loChart.minOver1Days);
      cy.imsId("max-over-due-day-7").type(loChart.maxOver1Days);
      cy.imsId("accumulation-rate-7").type(loChart.acc1Rate);
      cy.imsId("btn-update").click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(loChart.messageUpdateLoCh)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log("Successfully updated loan classification chart");
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
      cy.formController("status").type(loChart.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const loChart = data.mraAdmin.updateloanChartFrom;
      cy.formController("status").type(loChart.statusSelect).type("{enter}");
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

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const update_loan_chart = new LoanChartUpdate();
