import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";
class LoanFund {
  test_data = Cypress.env("TEST_DATA");

  gridLoanFundListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.LOAN_FUND);
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewLoanFund() {
    cy.fixture(this.test_data).then((data) => {
      const lfData = data.branchManager.gridLoanFundFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lfData.fundingOrgId);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.goBackSuccess);
  }

  turnOnEditMode() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();

    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editResetButton() {
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
      const lfData = data.branchManager.gridLoanFundFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lfData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lfData = data.branchManager.gridLoanFundFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lfData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInLoanFundName() {
    cy.fixture(this.test_data).then((data) => {
      const lfData = data.branchManager.gridLoanFundFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lfData.fundingOrgId);
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

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lfData = data.branchManager.gridLoanFundFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lfData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }

  listBreadcrumbCheck() {
    configurationGridChecks.breadcrumb("Loan Fund");
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns([
      "#", "Loan Fund Id", "Bank Account", "Funding Organization",
      "Funding Notes", "Amount", "Loan Availability Date", "Status", "Actions",
    ]);
  }

  gridRecordDataCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
      .each(($row) => {
        cy.wrap($row).find(COMMON.TABLE.VISIBLE_CELLS).then(($cells) => {
          const amountText = $cells.eq(5).text().trim();
          const amount = Number(amountText);

          expect($cells.eq(1).text().trim()).to.not.equal("");
          expect($cells.eq(3).text().trim()).to.not.equal("");
          expect(amountText).to.not.equal("");
          expect(amount).to.be.greaterThan(0);
          expect(["Active", "Inactive"]).to.include($cells.eq(7).text().trim());
        });
      });
    cy.log(messages.ui.recordStatusCheck);
  }

  exactNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.exactSearch(
        data.branchManager.gridLoanFundFrom.bankAccount,
        2
      );
    });
  }

  partialNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.partialSearch(
        data.branchManager.gridLoanFundFrom.bankAccount
      );
    });
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("LOAN_FUND");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.activeFilter(
        data.branchManager.gridLoanFundFrom.statusSelect,
        7
      );
    });
  }

  nameAscendingSortCheck() {
    configurationGridChecks.sort("Loan Fund Id", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    configurationGridChecks.sort("Loan Fund Id", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    configurationGridChecks.pagination();
  }

  viewPageDataAndBreadcrumbCheck() {
    configurationGridChecks.view("Loan Fund", [1, 2, 3, 5, 7]);
  }

  editModeFieldsAndResetCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    ["bank_account_id", "loan_funding_organization_id", "amount",
      COMMON.INPUTS.STATUS_DROPDOWN]
      .forEach((control) => cy.formController(control).should("be.visible"));
    cy.formController("amount").should("not.be.disabled").clear().type("999");
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController("amount").should("have.value", "");
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.get(COMMON.TABLE.BODY).should("be.visible");
    cy.log(messages.ui.editResetMessage);
  }
}

export const grid_loan_fund = new LoanFund();
