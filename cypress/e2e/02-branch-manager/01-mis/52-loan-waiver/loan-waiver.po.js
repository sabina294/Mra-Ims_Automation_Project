import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";
import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanWaiver {
  test_data = Cypress.env("TEST_DATA");

  gridLoanWaiverListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.LOAN_ACCOUNT, COMMON.MENUS.LOAN_WAIVER);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createAddIconButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lwData = data.branchManager.createLoanWaiverFrom;
      cy.formController("samity_id").type(lwData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lwData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lwData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.BUTTONS.ADD_METHOD_FIRST).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createRemoveIconButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REMOVE_METHOD_FIRST).click();
    cy.log(messages.ui.submitSuccess);
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.validation.requiredField);

  }

  createDraftButtonCheck() {
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.draftOnMessage);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

   createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lwData = data.branchManager.createLoanWaiverFrom;
      cy.formController("samity_id").type(lwData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lwData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lwData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.validation.requiredField);
    });
  }

  createLoanWaiver() {
    cy.fixture(this.test_data).then((data) => {
      const lwData = data.branchManager.createLoanWaiverFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW, { timeout: 15000 })
        .should("be.visible")
        .click();
      cy.formController("samity_id")
        .should("be.visible")
        .type(lwData.selectSamity)
        .type("{enter}");
      cy.formController("member_id")
        .type(lwData.selectMember)
        .type("{enter}");
      cy.formController("loan_account_id")
        .type(lwData.selectLoanAccount)
        .type("{enter}");

      cy.formController("waiver_type")
        .type(lwData.selectRebate)
        .type("{enter}");
      // cy.formController("rebate_amount")
      //   .clear()
      //   .type(lwData.inputAmount);
      // cy.formController("amount")
      //   .clear()
      //   .type(lwData.inputAmount);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.contains(lwData.messageSaveLoanRebate)
        .should("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewLoanWaiver() {
    cy.fixture(this.test_data).then((data) => {
      const lwData = data.branchManager.createLoanWaiverFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lwData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.goBackSuccess);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lwData = data.branchManager.createLoanWaiverFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lwData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lwData = data.branchManager.createLoanWaiverFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lwData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInLoanWaivereName() {
    cy.fixture(this.test_data).then((data) => {
      const lwData = data.branchManager.createLoanWaiverFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lwData.search);
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
      const lwData = data.branchManager.createLoanWaiverFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lwData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();

      cy.log(messages.ui.searchMessage);
    });
  }

  openListForChecks() {
    cy.visit("/mfi-mis/loan-account/loan-waiver/list");
    cy.location("pathname").should("eq", "/mfi-mis/loan-account/loan-waiver/list");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    configurationGridChecks.breadcrumb("Loan Waiver", ["Loan Account"]);
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    configurationGridChecks.columns(["#", "Loan Account ID", "Member ID", "Member", "Samity", "Business Date", "Loan Amount", "Waived Amount", "Payable Amount", "Status", "Actions"]);
  }

  assertRecordsOrEmpty() {
    cy.get(COMMON.TABLE.BODY).should(($body) => {
      const rows = $body.find("tr:not(.ant-table-placeholder):visible");
      if (!rows.length) {
        expect($body.find(".ant-empty:visible").length, "visible empty state").to.be.greaterThan(0);
        expect($body.text()).to.contain("No Data");
        return;
      }
      rows.each((_, row) => {
        const cells = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS);
        expect(cells.eq(0).text().trim(), "serial number").to.match(/^\d+$/);
        [1, 2, 3, 4, 5, 9].forEach((index) => {
          expect(cells.eq(index).text().trim(), `column ${index}`).not.to.equal("");
        });
        [6, 7, 8].forEach((index) => {
          const amount = cells.eq(index).text().trim().replace(/,/g, "");
          expect(amount, `amount column ${index}`).to.match(/^\d+(\.\d+)?$/);
          expect(Number(amount)).to.be.at.least(0);
        });
      });
    });
  }

  recordsOrEmptyStateCheck() {
    this.openListForChecks();
    this.assertRecordsOrEmpty();
  }

  filterControlsCheck() {
    this.openListForChecks();
    ["office_id", COMMON.INPUTS.STATUS_DROPDOWN].forEach((control) => {
      cy.formController(control).should("be.visible");
    });
    cy.contains("nz-select .ant-select-selection-placeholder", /^\s*Select Samity\s*$/)
      .should("be.visible");
    cy.get('input[placeholder="From Date"]').should("be.visible");
    cy.get('input[placeholder="To Date"]').should("be.visible");
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
    cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
  }

  noResultSearchCheck() {
    this.openListForChecks();
    configurationGridChecks.noResult("BM_LOAN_WAIVER");
  }

  resetSearchCheck() {
    this.noResultSearchCheck();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    this.assertRecordsOrEmpty();
  }

  refreshListStateCheck() {
    this.openListForChecks();
    cy.imsId(COMMON.BUTTONS.REFRESH).should("be.enabled").click();
    cy.location("pathname").should("eq", "/mfi-mis/loan-account/loan-waiver/list");
    configurationGridChecks.columns(["#", "Loan Account ID", "Member ID", "Member", "Samity", "Business Date", "Loan Amount", "Waived Amount", "Payable Amount", "Status", "Actions"]);
    this.assertRecordsOrEmpty();
  }

  addButtonCheck() {
    this.openListForChecks();
    cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible").and("be.enabled")
      .and("contain.text", "Add New Loan Waiver");
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_loan_waiver = new LoanWaiver();
