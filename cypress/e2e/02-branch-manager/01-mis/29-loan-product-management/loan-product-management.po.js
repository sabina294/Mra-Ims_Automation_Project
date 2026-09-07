import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";
class LoanProductManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridLoanProductManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu1(COMMON.MENUS.LOAN_PRODUCT);
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewLoanProductManagement() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.branchManager.loanProductFrom;
      // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.loanProductNameEn);
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
      const lpData = data.branchManager.loanProductFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lpData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.branchManager.loanProductFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lpData.statusSelect).type("{enter}");
      cy.log(
        messages.ui.dropdownActiveMessage
      );
    });
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.branchManager.loanProductFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.loanProductNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
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

  searchInLoanProductName() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.branchManager.loanProductFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.loanProductNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  listBreadcrumbCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Loan Product")
      .and("contain.text", "List");
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns([
      "#", "Loan Product ID", "Loan Product Name", "Product Display Name",
      "MFI Program ID", "Product Nature", "Repayment Frequency", "Status", "Actions",
    ]);
  }

  gridRecordDataCheck() {
    configurationGridChecks.records(7, [1, 2, 4, 5, 6]);
  }

  nameSearchResultsCheck(partial = false) {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    // Use a product available to this branch rather than assume a seeded name.
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find(COMMON.TABLE.VISIBLE_CELLS)
      .eq(2).invoke("text").then((text) => {
        const name = text.trim();
        expect(name, "existing loan product name").not.to.equal("");
        const term = partial ? name.split(/\s+/)[0] : name;
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(term);
        cy.imsId(COMMON.BUTTONS.SEARCH).click();
        // Re-query all rows on retry while asynchronous search replaces the grid.
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
          expect($rows.length, "matching loan products").to.be.greaterThan(0);
          $rows.each((_, row) => {
            const actual = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS).eq(2).text().trim();
            expect(actual.toLowerCase()).to.contain(term.toLowerCase());
          });
        });
      });
  }

  exactNameSearchCheck() {
    this.nameSearchResultsCheck();
  }

  partialNameSearchCheck() {
    this.nameSearchResultsCheck(true);
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("LOAN_PRODUCT");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.fixture(this.test_data).then((data) => {
      const status = data.branchManager.loanProductFrom.statusSelect;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(status).type(COMMON.KEYS.ENTER);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
        expect($rows.length).to.be.greaterThan(0);
        $rows.each((_, row) => {
          expect(Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS).eq(7).text().trim())
            .to.equal(status);
        });
      });
    });
  }

  nameAscendingSortCheck() {
    configurationGridChecks.sort("Loan Product Name", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    configurationGridChecks.sort("Loan Product Name", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    configurationGridChecks.pagination();
  }

  viewPageDataAndBreadcrumbCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().then(($row) => {
      const cells = $row.find(COMMON.TABLE.VISIBLE_CELLS);
      const values = [1, 2, 4, 5, 6].map((index) => cells.eq(index).text().trim());
      cy.wrap($row).find(COMMON.TABLE.ACTION_TOGGLE).click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.url().should("include", "/loan-product/loan-product-management/view/");
      cy.get("nz-breadcrumb, .ant-breadcrumb").should("contain.text", "Home")
        .and("contain.text", "Loan Product").and("contain.text", "View");
      values.forEach((value) => {
        expect(value, "grid value to compare with details").not.to.equal("");
        cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, value).should("be.visible");
      });
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.url().should("include", "/loan-product/loan-product-management/list");
    });
  }

  viewSectionsCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find(COMMON.TABLE.ACTION_TOGGLE).click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    ["ID Information", "Name & Description", "Terms", "Service Charge",
      "Loan Product ID", "MFI Program ID", "Loan Product Name", "Loan Product Display Name",
      "Product Nature", "Loan Type ID", "Repayment Frequency", "Minimum Loan Amount",
      "Maximum Loan Amount", "Default Grace Days", "Minimum Installment No.",
      "Default Installment No.", "Maximum Installment No.", "Interest Calculation Method",
      "Service Charge Rate", "Service Charge Rate Frequency"].forEach((label) => {
      cy.contains(new RegExp(`^\\s*${Cypress._.escapeRegExp(label)}\\s*$`))
        .scrollIntoView().should("be.visible");
    });
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).scrollIntoView().should("be.visible");
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.url().should("include", "/loan-product/loan-product-management/list");
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_loan_product_management =
  new LoanProductManagementCreation();
