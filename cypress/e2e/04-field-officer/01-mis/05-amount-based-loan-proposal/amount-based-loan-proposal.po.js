import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class AmountBasedLoanProposalApproval {
  test_data = Cypress.env("TEST_DATA");

  gridAmountBasedLoanListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.AMOUNT_BASED_LOAN_PROPOSAL_APPROVAL);
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewAmountBasedLoanProposal() {
    cy.fixture(this.test_data).then((data) => {
      const ablpaData = data.fieldOfficer.gridAmountBasedLoanFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(ablpaData.roleName);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.goBackSuccess);
    });
  }

  turnOnEditMode() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editResetButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
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
      const ablpaData = data.fieldOfficer.gridAmountBasedLoanFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(ablpaData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const ablpaData = data.fieldOfficer.gridAmountBasedLoanFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(ablpaData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInRoleName() {
    cy.fixture(this.test_data).then((data) => {
      const ablpaData = data.fieldOfficer.gridAmountBasedLoanFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(ablpaData.roleName);
      cy.log(messages.ui.searchMessage);
    });
  }

  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(messages.ui.gridRefreshSuccess);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const ablpaData = data.fieldOfficer.gridAmountBasedLoanFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(ablpaData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  listBreadcrumbCheck() {
    cy.changeLanguage("english");
    configurationGridChecks.breadcrumb("Amount Based Loan Proposal Approval");
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns([
      "#", "Role ID", "Role", "Office Type ID", "Office Type",
      "Minimum Loan Amount", "Maximum Loan Amount", "Status", "Actions",
    ]);
  }

  gridRecordDataCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
      .each(($row) => {
        cy.wrap($row).find(COMMON.TABLE.VISIBLE_CELLS).then(($cells) => {
          const minimumText = $cells.eq(5).text().trim();
          const maximumText = $cells.eq(6).text().trim();
          const minimum = Number(minimumText);
          const maximum = Number(maximumText);

          expect(minimumText).to.not.equal("");
          expect(maximumText).to.not.equal("");
          expect(minimum).to.be.at.least(0);
          expect(maximum).to.be.at.least(minimum);
          expect(["Active", "Inactive"]).to.include($cells.eq(7).text().trim());
        });
      });
    cy.log(messages.ui.recordStatusCheck);
  }

  exactNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.exactSearch(
        data.fieldOfficer.gridAmountBasedLoanFrom.roleName,
        2
      );
    });
  }

  partialNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.partialSearch(
        data.fieldOfficer.gridAmountBasedLoanFrom.roleName
      );
    });
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("LOAN_APPROVAL_ROLE");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.activeFilter(
        data.fieldOfficer.gridAmountBasedLoanFrom.statusSelect,
        7
      );
    });
  }

  nameAscendingSortCheck() {
    configurationGridChecks.sort(/^\s*Role\s*$/, COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    configurationGridChecks.sort(/^\s*Role\s*$/, COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    configurationGridChecks.pagination();
  }

  viewPageDataAndBreadcrumbCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    const valueIndexes = [1, 2, 3, 4, 5, 6, 7];
    const rowValues = (row) => {
      const cells = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS);
      return valueIndexes.map((index) => cells.eq(index).text().trim());
    };

    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().then(($row) => {
      const expectedValues = rowValues($row);
      // Role IDs can be blank or repeated. Match the complete row on retry
      // so a Reset rerender cannot redirect the click to a different record.
      cy.get(COMMON.TABLE.VISIBLE_ROWS)
        .filter((index, row) =>
          rowValues(row).every((value, position) => value === expectedValues[position])
        )
        .first()
        .find(COMMON.TABLE.ACTION_TOGGLE)
        .click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.get("nz-breadcrumb, .ant-breadcrumb")
        .should("contain.text", "Home")
        .and("contain.text", "Configuration")
        .and("contain.text", "Amount Based Loan Proposal Approval")
        .and("contain.text", "View");
      expectedValues.filter(Boolean).forEach((value) => {
        cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, value).should("be.visible");
      });
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.get(COMMON.TABLE.BODY).should("be.visible");
    });
    cy.log(messages.ui.viewMessage);
  }

  editModeFieldsAndResetCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    [
      "office_type_id", "role_id", "min_loan_amount", "max_loan_amount",
      "remarks", COMMON.INPUTS.STATUS_DROPDOWN,
    ].forEach((control) => cy.formController(control).should("be.visible"));
    cy.formController("remarks").clear().type("Unsaved approval remarks");
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController("remarks").should("have.value", "");
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.get(COMMON.TABLE.BODY).should("be.visible");
    cy.log(messages.ui.editResetMessage);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_amount_based_loan = new AmountBasedLoanProposalApproval();
