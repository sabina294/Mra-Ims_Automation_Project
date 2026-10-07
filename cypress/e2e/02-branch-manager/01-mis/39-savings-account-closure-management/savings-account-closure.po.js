import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class SavingsAccountClosure {

    test_data = Cypress.env("TEST_DATA");

    gridSavingsAccountClosureListPage() {
        cy.selectMenu(COMMON.MENUS.SAVINGS_ACCOUNT, COMMON.MENUS.SAVINGS_ACCOUNT_CLOSURE_MANAGEMENT);
        cy.log(messages.ui.gridListMessage);
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const sacmData = data.branchManager.createSavingsAccountClosureManagement;

            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
                .type(sacmData.selectStatus)
                .type("{enter}");

            cy.log(messages.ui.dropdownInactiveMessage);
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const sacmData = data.branchManager.createSavingsAccountClosureManagement;

            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
                .type(sacmData.statusSelect)
                .type("{enter}");

            cy.log(messages.ui.dropdownActiveMessage);
        });
    }

    searchSavingsAccountClosure() {
        cy.fixture(this.test_data).then((data) => {
            const sacmData = data.branchManager.createSavingsAccountClosureManagement;

            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(sacmData.search);

            cy.log(messages.ui.searchSuccess);
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
            const sacmData = data.branchManager.createSavingsAccountClosureManagement;

            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(sacmData.search);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();

            cy.log(messages.ui.searchMessage);
        });
    }

    createResetButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const sacmData = data.branchManager.createSavingsAccountClosureManagement;
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            cy.formController("samity_id").type(sacmData.samityId).type("{enter}");
            cy.formController("member_id").type(sacmData.memberId).type("{enter}");
            cy.formController("savings_account_id").type(sacmData.savingsAccountId).type("{enter}");
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.validation.requiredField);
        });
    }

    createDraftButtonCheck() {
        cy.imsId(COMMON.BUTTONS.DRAFT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.draftOnMessage);
    }

    createSubmitButtonCheck() {
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.submitSuccess);
    }

    createGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.createGoBackMessage);
    }

    openListForChecks() {
        cy.visit("/mfi-mis/savings-account/savings-account-closure/list");
        cy.location("pathname").should("eq", "/mfi-mis/savings-account/savings-account-closure/list");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
        cy.get("thead th:visible").should("have.length.greaterThan", 0);
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        configurationGridChecks.breadcrumb("Savings Account Closure Management", ["Savings Account"]);
    }

    requiredGridColumnsCheck() {
        this.openListForChecks();
        configurationGridChecks.columns(["#", "Savings Account ID", "Member ID", "Member Name",
            "Savings Product ID", "Account Start Date", "Account End Date", "Closing Amount",
            "Status", "Actions"]);
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
                const cells = Cypress.$(row).children("td");
                // The first column contains selection checkboxes.
                expect(cells.eq(1).text().trim(), "serial number").to.match(/^\d+$/);
                [2, 3, 4, 5, 9].forEach((index) => {
                    expect(cells.eq(index).text().trim(), "closure data column " + index).not.to.equal("");
                });
                const amount = cells.eq(8).text().trim().replace(/,/g, "");
                expect(amount, "closing amount").to.match(/^\d+(?:\.\d+)?$/);
                expect(Number.isFinite(Number(amount)), "finite closing amount").to.equal(true);
            });
        });
    }

    gridRecordsOrEmptyCheck() {
        this.openListForChecks();
        this.assertRecordsOrEmpty();
    }

    searchControlsCheck() {
        this.openListForChecks();
        cy.formController("office_id").should("be.visible");
        cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("be.visible");
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
        cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
    }

    noResultSearchCheck() {
        this.openListForChecks();
        configurationGridChecks.noResult("BM_SAVINGS_CLOSURE");
    }

    resetSearchInputCheck() {
        this.openListForChecks();
        configurationGridChecks.noResult("BM_SAVINGS_CLOSURE_RESET");
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
        this.assertRecordsOrEmpty();
    }

    refreshListStateCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.BUTTONS.REFRESH).should("be.visible").click();
        cy.location("pathname").should("eq", "/mfi-mis/savings-account/savings-account-closure/list");
        this.assertRecordsOrEmpty();
    }

    createEncashmentButtonCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible").and("be.enabled")
            .and("contain.text", "Create Savings Encashment");
    }

  accountIdAscendingSortCheck() {
    this.accountIdSortCheck(COMMON.SORT.ASCENDING);
  }

  accountIdDescendingSortCheck() {
    this.accountIdSortCheck(COMMON.SORT.DESCENDING);
  }

  accountIdSortCheck(direction) {
    this.openListForChecks();
    const header = () => cy.contains("thead th:visible", /^\s*Savings Account ID\s*$/);
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

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();

        cy.log(messages.ui.languageSwitchMessage);
    }



}

export const savings_account_closure = new SavingsAccountClosure();