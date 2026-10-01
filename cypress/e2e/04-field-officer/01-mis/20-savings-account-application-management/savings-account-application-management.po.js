import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class SavingsAccApplicationManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridSavingsAccApplicationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.SAVINGS_ACCOUNT, COMMON.MENUS.SAVINGS_ACCOUNT_APPLICATION_MANAGEMENT);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createSavingsAccApplicationManagement() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const saamData = data.fieldOfficer.createSavingsAccApplicationMang;
      cy.formController("office_id").type(saamData.office).type("{enter}");
      cy.wait(2000);
      cy.formController("savings_product_id")
        .type(saamData.savingsProduct)
        .type("{enter}");
      cy.formController("samity_id").type(saamData.samity).type("{enter}");
      cy.formController("member_id").type(saamData.member).type("{enter}");
      cy.formController("savings_amount").type(saamData.recoDepositAmount);
      cy.formController("opening_balance").type(saamData.openingBalance);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.wait(1000);
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutOffice() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.fieldOfficer.createSavingsAccApplicationMang;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.wait(3000);
      cy.formController("savings_amount").type(saamData.recoDepositAmount);
      cy.formController("opening_balance").type(saamData.openingBalance);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutSavingsProduct() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.fieldOfficer.createSavingsAccApplicationMang;
      cy.wait(3000);
      cy.formController("office_id").type(saamData.office).type("{enter}");
      cy.wait(2000);
      cy.formController("samity_id").type(saamData.samity).type("{enter}");
      cy.formController("member_id").type(saamData.member).type("{enter}");
      cy.formController("savings_amount").type(saamData.recoDepositAmount);
      cy.formController("opening_balance").type(saamData.openingBalance);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutSamity() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.fieldOfficer.createSavingsAccApplicationMang;
      cy.wait(3000);
      cy.formController("office_id").type(saamData.office).type("{enter}");
      cy.wait(2000);
      cy.formController("savings_product_id")
        .type(saamData.savingsProduct)
        .type("{enter}");
      cy.formController("savings_amount").type(saamData.recoDepositAmount);
      cy.formController("opening_balance").type(saamData.openingBalance);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMember() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.fieldOfficer.createSavingsAccApplicationMang;
      cy.wait(3000);
      cy.formController("office_id").type(saamData.office).type("{enter}");
      cy.wait(2000);
      cy.formController("savings_product_id")
        .type(saamData.savingsProduct)
        .type("{enter}");
      cy.formController("samity_id").type(saamData.samity).type("{enter}");
      cy.formController("savings_amount").type(saamData.recoDepositAmount);
      cy.formController("opening_balance").type(saamData.openingBalance);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutRecommendedDepositAmount() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.fieldOfficer.createSavingsAccApplicationMang;
      cy.wait(3000);
      cy.formController("office_id").type(saamData.office).type("{enter}");
      cy.wait(2000);
      cy.formController("savings_product_id")
        .type(saamData.savingsProduct)
        .type("{enter}");
      cy.formController("samity_id").type(saamData.samity).type("{enter}");
      cy.formController("member_id").type(saamData.member).type("{enter}");
      cy.formController("opening_balance").type(saamData.openingBalance);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutOpeningBalance() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.fieldOfficer.createSavingsAccApplicationMang;
      cy.wait(3000);
      cy.formController("office_id").type(saamData.office).type("{enter}");
      cy.wait(2000);
      cy.formController("savings_product_id")
        .type(saamData.savingsProduct)
        .type("{enter}");
      cy.formController("samity_id").type(saamData.samity).type("{enter}");
      cy.formController("member_id").type(saamData.member).type("{enter}");
      cy.formController("savings_amount").type(saamData.recoDepositAmount);
      // cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      // cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }


  approvesavingsAccount() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.fieldOfficer.createSavingsAccApplicationMang;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(saamData.search);
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_EMPLOYEE).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.LOCK).click();
      cy.imsId(COMMON.BUTTONS.APPROVE).click();
      cy.imsId(COMMON.BUTTONS.APPROVE_CAPITALIZED).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.approveSuccess);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewSavingsAccApplicationManag() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.fieldOfficer.createSavingsAccApplicationMang;
      // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(saamData.search);
      // cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();

      cy.log(
        messages.ui.viewMessage
      );
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.fieldOfficer.createSavingsAccApplicationMang;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(saamData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.fieldOfficer.createSavingsAccApplicationMang;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(saamData.statusSelect).type("{enter}");
      cy.log(
        messages.ui.dropdownActiveMessage
      );
    });
  }

  searchSavingsAccAppManag() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.fieldOfficer.createSavingsAccApplicationMang;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(saamData.search);
      cy.log(messages.ui.searchSuccess);
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

  gridDraftButton() {
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
      .check({ force: true });
    cy.log(messages.ui.draftOnMessage);
  }

  gridDraftButtonOff() {
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
      .uncheck({ force: true });
    cy.log(messages.ui.draftOffMessage);
  }


  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.fieldOfficer.createSavingsAccApplicationMang;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("savings_amount").type(saamData.recoDepositAmount);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createDraftButtonCheck() {
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.draftOnMessage);

  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.validation.requiredField);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.fieldOfficer.createSavingsAccApplicationMang;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(saamData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  openListForChecks() {
    cy.visit("/mfi-mis/savings-account/savings-account-application/list");
    cy.location("pathname").should("eq", "/mfi-mis/savings-account/savings-account-application/list");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    cy.get("thead th:visible").should("have.length.greaterThan", 0);
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Savings Account")
      .and("contain.text", "Savings Account Application Management").and("contain.text", "List");
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    ["#", "Savings Application ID", "Member ID", "Member Name",
      "Savings Product Name", "Savings Type ID", "Opening Balance", "Status", "Actions"]
      .forEach((label) => {
        cy.contains("thead th:visible", new RegExp(`^\\s*${Cypress._.escapeRegExp(label)}\\s*$`))
          .should("be.visible");
      });
  }

  gridRecordDataCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "savings applications required for this check").to.be.greaterThan(0);
      $rows.each((_, row) => {
        const cells = Cypress.$(row).children("td");
        expect(cells.eq(0).text().trim(), "row number").to.match(/^\d+$/);
        [1, 2, 3, 4, 5, 7].forEach((index) => {
          expect(cells.eq(index).text().trim(), `application data column ${index}`).not.to.equal("");
        });
      });
    });
  }

  openingBalanceCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "savings applications").to.be.greaterThan(0);
      $rows.each((_, row) => {
        const amount = Cypress.$(row).children("td").eq(6).text().trim().replace(/,/g, "");
        expect(amount, "numeric opening balance").to.match(/^\d+(?:\.\d+)?$/);
        expect(Number.isFinite(Number(amount)), "finite opening balance").to.equal(true);
      });
    });
  }

  approvedStatusResultCheck() {
    this.openListForChecks();
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type("Approved").type(COMMON.KEYS.ENTER);
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "approved applications").to.be.greaterThan(0);
      $rows.each((_, row) => {
        expect(Cypress.$(row).children("td").eq(7).text().trim(), "application status").to.equal("Approved");
      });
    });
  }

  resetSearchInputCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find("td").eq(1).invoke("text").then((id) => {
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type("RESET_CHECK_987654321")
        .should("have.value", "RESET_CHECK_987654321");
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
        const ids = [...$rows].map((row) => Cypress.$(row).children("td").eq(1).text().trim());
        expect(ids, "original savings application remains after Reset").to.include(id.trim());
      });
    });
  }

  applicationIdAscendingSortCheck() {
    this.applicationIdSortCheck(COMMON.SORT.ASCENDING);
  }

  applicationIdDescendingSortCheck() {
    this.applicationIdSortCheck(COMMON.SORT.DESCENDING);
  }

  applicationIdSortCheck(direction) {
    this.openListForChecks();
    const header = () => cy.contains("thead th:visible", /^\s*Savings Application ID\s*$/);
    const hasDirection = ($header) => $header.attr(COMMON.SORT.ATTRIBUTE) === direction
      || $header.find(direction === COMMON.SORT.ASCENDING
        ? COMMON.SORT.ASCENDING_ICON : COMMON.SORT.DESCENDING_ICON).length > 0;
    // Handle a default or retained sorting state, with at most one full cycle.
    const selectDirection = (remaining) => {
      header().then(($header) => {
        if (hasDirection($header) || remaining === 0) return;
        header().click();
        selectDirection(remaining - 1);
      });
    };
    selectDirection(3);
    header().should(($header) => expect(hasDirection($header), `${direction} sort indicator`).to.equal(true));
  }

  firstPagePaginationCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
    cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("contain.text", "1");
    cy.get(COMMON.PAGINATION.PREVIOUS_PAGE).should("have.class", COMMON.PAGINATION.DISABLED_CLASS);
    cy.get(COMMON.PAGINATION.PAGE_SIZE_SELECT).should("be.visible");
    cy.get(COMMON.PAGINATION.TOTAL_TEXT).should("be.visible");
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_savings_account_application_management =
  new SavingsAccApplicationManagementCreation();
