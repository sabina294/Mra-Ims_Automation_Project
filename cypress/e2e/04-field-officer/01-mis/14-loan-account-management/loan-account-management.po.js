import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";
import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanAccountManagement {
  test_data = Cypress.env("TEST_DATA");

  gridLoanAccountManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.LOAN_ACCOUNT, COMMON.MENUS.LOAN_ACCOUNT_MANAGEMENT);
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
    const laData = data.fieldOfficer.loanAccountManagementFrom;
    // cy.imsId(COMMON.INPUTS.SEARCH_IMS).type(laData.member);
    // cy.imsId(COMMON.BUTTONS.SEARCH).click();
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
     });
  }

  viewLoanAccountManagement() {
    cy.fixture(this.test_data).then((data) => {
      const laData = data.fieldOfficer.loanAccountManagementFrom;
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.selectMenu1(COMMON.MENUS.LOAN_ACCOUNT_MANAGEMENT);
      cy.log(messages.ui.viewMessage);
    });
  }
  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(
      messages.ui.goBackSuccess
    );
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const laData = data.fieldOfficer.loanAccountManagementFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(laData.samity);
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(laData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const laData = data.fieldOfficer.loanAccountManagementFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(laData.statusSelect).type("{enter}");
      cy.log(
        messages.ui.dropdownActiveMessage
      );
    });
  }

  searchInLoanAccountName() {
    cy.fixture(this.test_data).then((data) => {
      const laData = data.fieldOfficer.loanAccountManagementFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(laData.samity);
      cy.log(messages.ui.searchMessage);
    });
  }

  samityDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const laData = data.fieldOfficer.loanAccountManagementFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("samity_id").type(laData.samity);
      cy.log(messages.ui.samityDropdownMessage);
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
      const laData = data.fieldOfficer.loanAccountManagementFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(laData.memberNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  openListForChecks() {
    cy.visit("/mfi-mis/loan-account/loan-account-management/list");
    cy.location("pathname").should("eq", "/mfi-mis/loan-account/loan-account-management/list");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    configurationGridChecks.breadcrumb("Loan Account Management", ["Loan Account"]);
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    configurationGridChecks.columns(["#", "Loan Account ID", "Member ID", "Member Name", "Product Name", "Loan Amount", "Loan Term", "Installment Amount", "Status", "Actions"]);
  }

  gridRecordDataCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "available loan records").to.be.greaterThan(0);
      $rows.each((_, row) => {
        const cells = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS);
        expect(cells.eq(0).text().trim(), "serial number").to.match(/^\d+$/);
        [1, 2, 3, 4].forEach((index) => {
          expect(cells.eq(index).text().trim(), `column ${index}`).not.to.equal("");
        });
        expect(cells.eq(8).text().trim(), "record status").not.to.equal("");
      });
    });
  }

  loanAmountsCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "available loan records").to.be.greaterThan(0);
      $rows.each((_, row) => {
        const cells = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS);
        [5, 6, 7].forEach((index) => {
          const value = cells.eq(index).text().trim().replace(/,/g, "");
          expect(value, `numeric loan column ${index}`).to.match(/^\d+(\.\d+)?$/);
          expect(Number(value)).to.be.at.least(0);
        });
      });
    });
  }

  searchControlsCheck() {
    this.openListForChecks();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
    cy.formController("office_id").should("be.visible");
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("be.visible");
    cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
  }

  noResultSearchCheck() {
    this.openListForChecks();
    configurationGridChecks.noResult("LOAN_RECORD");
  }

  resetRestoresGridCheck() {
    this.noResultSearchCheck();
    configurationGridChecks.reset();
  }

  firstPagePaginationCheck() {
    this.openListForChecks();
    configurationGridChecks.pagination();
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_loan_account_management = new LoanAccountManagement();
