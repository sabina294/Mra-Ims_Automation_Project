import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class LoanProductManagement {
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
      const lpData = data.fieldOfficer.loanProductFrom;
      // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.loanProductNameEn);
      // cy.imsId(COMMON.BUTTONS.SEARCH).click();
      // cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();

      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  turnOnEditMode() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
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
      const lpData = data.fieldOfficer.loanProductFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lpData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.loanProductFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lpData.statusSelect).type("{enter}");
      cy.log(
        messages.ui.dropdownActiveMessage
      );
    });
  }
  searchInLoanProductName() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.loanProductFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.loanProductNameEn);
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
      const lpData = data.fieldOfficer.loanProductFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.loanProductNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  listBreadcrumbCheck() {
    configurationGridChecks.breadcrumb("Loan Product", []);
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns(["#", "Loan Product ID", "Loan Product Name", "Product Display Name", "MFI Program ID", "Product Nature", "Repayment Frequency", "Status", "Actions"]);
  }

  gridRecordDataCheck() {
    configurationGridChecks.records(7, [1, 2]);
  }

  exactProductSearchCheck() {
    this.productNameSearchCheck(false);
  }

  partialProductSearchCheck() {
    this.productNameSearchCheck(true);
  }

  productNameSearchCheck(partial) {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    // Use an existing product; fixture names may not exist in this environment.
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first()
      .find(COMMON.TABLE.VISIBLE_CELLS).eq(2)
      .should(($cell) => {
        expect($cell.text().trim().length, "product name length")
          .to.be.greaterThan(partial ? 1 : 0);
      })
      .then(($cell) => {
        const name = $cell.text().trim();
        const searchText = partial ? name.slice(0, Math.ceil(name.length / 2)) : name;
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(searchText);
        cy.imsId(COMMON.BUTTONS.SEARCH).click();
        // Retry against fresh rows while the search updates the grid.
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
          const names = [...$rows].map((row) =>
            Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS).eq(2).text().trim()
          );
          expect(names, "search includes the selected product").to.include(name);
          names.forEach((result) => {
            expect(result, "matching product name").to.contain(searchText);
          });
        });
      });
    cy.log(partial ? messages.ui.partialSearch : messages.ui.exactSearchCheck);
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("LOAN_PRODUCT");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    configurationGridChecks.activeFilter("Active", 7);
  }

  productNameAscendingSortCheck() {
    configurationGridChecks.sort("Loan Product Name", COMMON.SORT.ASCENDING);
  }

  productNameDescendingSortCheck() {
    configurationGridChecks.sort("Loan Product Name", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    configurationGridChecks.pagination();
  }

  viewPageDataAndBreadcrumbCheck() {
    // The loan product View page does not display the grid's Status field.
    configurationGridChecks.view("Loan Product", [1, 2, 4, 5, 6], []);
  }

  editModeFieldsAndResetCheck() {
    // Start from the list even when a preceding View assertion fails.
    cy.selectMenu1(COMMON.MENUS.LOAN_PRODUCT);
    cy.get(COMMON.TABLE.BODY).should("be.visible");
    // Loan product edit forms have no Status dropdown.
    configurationGridChecks.editReset(
      "loan_product_name_en", "loan_product_name_bn", [], { hasStatus: false }
    );
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_loan_product_management = new LoanProductManagement();
