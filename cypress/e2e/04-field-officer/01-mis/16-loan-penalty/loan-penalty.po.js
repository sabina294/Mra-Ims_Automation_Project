import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";
import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanPenalty {
  test_data = Cypress.env("TEST_DATA");

  gridLoanPenaltyListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.LOAN_ACCOUNT, COMMON.MENUS.LOAN_PENALTY);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createResetButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.formController("samity_id").type(lpData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lpData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lpData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.formController("samity_id").type(lpData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lpData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lpData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.submitSuccess);
    });

  }

  createAddIconPenalty() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.formController("samity_id").type(lpData.selectSamity).type("{enter}");
      cy.wait(2000);
      cy.formController("member_id").type(lpData.selectMember).type("{enter}");
      cy.wait(2000);
      cy.formController("loan_account_id")
        .type(lpData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.INPUTS.LOAN_FIRST).clear().type(lpData.inputLoanAccount);
      cy.wait(2000);
      cy.get('body').click(0, 0);
      cy.imsId(COMMON.BUTTONS.ADD_ICON_BUTTON_KEBAB).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createRemoveIconPenalty() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.REMOVE_ICON_BUTTON_KEBAB).first().click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    });
  }


  createLoanPenalty() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.formController("samity_id").type(lpData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lpData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lpData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.INPUTS.LOAN_FIRST).clear().type(lpData.inputLoanAccount).type("{enter}");
      cy.wait(2000);
      cy.get('body').click(0, 0);
      cy.formController("amount").type(lpData.inputAmount);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewLoanPenalty() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  gridActionUnsubmittedButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
      cy.log(messages.form.submitSuccess);
    });
  }

  gridActionUnsubmittedGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.goBackSuccess);
    });
  }

  UnsubmittedButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
      cy.imsId(COMMON.BUTTONS.UNSUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.form.submitSuccess);
    });
  }

  editDraftButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.DRAFT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  editGoBackButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  editSaveButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SAVE).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  gridActionSubmitButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
      cy.imsId(COMMON.BUTTONS.UNSUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_SUBMIT).click();
      cy.log(messages.form.submitSuccess);
    });
  }

  submittedButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.BUTTONS.SAVE).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.form.submitSuccess);
    });
  }


  statusSubmittedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lpData.selectStatus).type("{enter}");
      cy.log(messages.ui.actionMessage);
    });
  }

  statusApprovedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lpData.statusSelect).type("{enter}");
      cy.log(messages.ui.approveSuccess);
    });
  }

  searchInLoanPenaltyName() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.search);
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
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.samityNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  openListForChecks() {
    cy.visit("/mfi-mis/loan-account/loan-penalty/list");
    cy.location("pathname").should("eq", "/mfi-mis/loan-account/loan-penalty/list");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    configurationGridChecks.breadcrumb("Loan Penalty", ["Loan Account"]);
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    configurationGridChecks.columns(["#", "Loan Account ID", "Member ID", "Member Name", "Samity", "Business Date", "Amount", "Status", "Actions"]);
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
        [1, 2, 3, 4, 5, 7].forEach((index) => {
          expect(cells.eq(index).text().trim(), `column ${index}`).not.to.equal("");
        });
        [6].forEach((index) => {
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
    configurationGridChecks.noResult("loan-penalty");
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
    cy.location("pathname").should("eq", "/mfi-mis/loan-account/loan-penalty/list");
    configurationGridChecks.columns(["#", "Loan Account ID", "Member ID", "Member Name", "Samity", "Business Date", "Amount", "Status", "Actions"]);
    this.assertRecordsOrEmpty();
  }

  addButtonCheck() {
    this.openListForChecks();
    cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible").and("be.enabled")
      .and("contain.text", "Add New Loan Penalty");
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_loan_penalty = new LoanPenalty();
