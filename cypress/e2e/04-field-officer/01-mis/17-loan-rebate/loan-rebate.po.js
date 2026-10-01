import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";
import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanRebate {
  test_data = Cypress.env("TEST_DATA");

  gridLoanRebateListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.LOAN_ACCOUNT, COMMON.MENUS.LOAN_REBATE);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createDraftButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lrData = data.fieldOfficer.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.BUTTONS.DRAFT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.draftOnMessage);
    });
  }

  createSubmitButton() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.submitSuccess);

  }
  createGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.submitSuccess);

  }

  createResetButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lrData = data.fieldOfficer.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  createAddIconRebate() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lrData = data.fieldOfficer.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.BUTTONS.ADD_ICON_BUTTON_CAMEL).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createRemoveIconRebate() {
    cy.imsId(COMMON.BUTTONS.REMOVE_ICON_BUTTON_CAMEL)
      .first()
      .click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.submitSuccess);

  }

  createLoanRebate() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lrData = data.fieldOfficer.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
       cy.wait(2000);
      // cy.formController("rebate_type")
      //   .type(lrData.selectRebate)
      //   .type("{enter}");
      cy.formController("rebate_type")
        .type(lrData.rebateType)
        .type("{enter}");
      cy.formController("rebate_amount").type(lrData.Amount);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(lrData.messageSaveLoanRebate)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewLoanRebate() {
    cy.fixture(this.test_data).then((data) => {
      const lrData = data.fieldOfficer.createLoanRebateFrom;
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  goBackLoanRebate() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.goBackSuccess);
    });
  }

  statusSubmittedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lrData = data.fieldOfficer.createLoanRebateFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lrData.selectStatus).type("{enter}");
      cy.log(messages.ui.actionMessage);
    });
  }

  statusApprovedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lrData = data.fieldOfficer.createLoanRebateFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lrData.statusSelect).type("{enter}");
      cy.log(messages.ui.approveSuccess);
    });
  }

  searchInLoanRebateName() {
    cy.fixture(this.test_data).then((data) => {
      const lrData = data.fieldOfficer.createLoanRebateFrom;
      //   cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lrData.search);
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
      const lrData = data.fieldOfficer.createLoanRebateFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lrData.samityNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  openListForChecks() {
    cy.visit("/mfi-mis/loan-account/loan-rebate/list");
    cy.location("pathname").should("eq", "/mfi-mis/loan-account/loan-rebate/list");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    configurationGridChecks.breadcrumb("Loan Rebate", ["Loan Account"]);
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    configurationGridChecks.columns(["#", "Loan Account ID", "Member ID", "Member", "Samity", "Business Date", "Loan Amount", "Rebated Amount", "Payable Amount", "Status", "Actions"]);
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
    configurationGridChecks.noResult("loan-rebate");
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
    cy.location("pathname").should("eq", "/mfi-mis/loan-account/loan-rebate/list");
    configurationGridChecks.columns(["#", "Loan Account ID", "Member ID", "Member", "Samity", "Business Date", "Loan Amount", "Rebated Amount", "Payable Amount", "Status", "Actions"]);
    this.assertRecordsOrEmpty();
  }

  addButtonCheck() {
    this.openListForChecks();
    cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible").and("be.enabled")
      .and("contain.text", "Add New Loan Rebate");
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_loan_rebate = new LoanRebate();
