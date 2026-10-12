import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class FinancialPeriodManagementCreation {
    test_data = Cypress.env("TEST_DATA");

    gridFinancialPeriodListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.ACCOUNTING, COMMON.MENUS.FINANCIAL_PERIOD_MANAGEMENT);
            cy.log(messages.ui.gridListMessage);
        });
    }

    actionButtonCheck() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(messages.ui.actionMessage);
    }

    viewFinancialPeriod() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_VIEW).click();
            cy.log(messages.ui.viewMessage);
        });
    }

    goBackFinancialPeriod() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).eq(0).click();
        cy.log(messages.ui.goBackSuccess);
    }

    closeFinancialPeriod() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_CLOSE).click();
            cy.log(messages.ui.actionMessage);
        });
    }

    closeGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const fpmData = data.branchManager.financialPeriodManagement;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(fpmData.selectStatus).type("{enter}");
            cy.log(messages.ui.dropdownInactiveMessage);
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const fpmData = data.branchManager.financialPeriodManagement;
            cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(fpmData.statusSelect).type("{enter}");
            cy.log(messages.ui.dropdownActiveMessage);
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            const fpmData = data.branchManager.financialPeriodManagement;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(fpmData.nameEn);
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

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const fpmData = data.branchManager.financialPeriodManagement;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(fpmData.nameEn);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();

            cy.log(messages.ui.searchMessage);
        });
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


    openListForChecks() {
        cy.visit("/mfi-ais/accounting/financial-period/list");
        cy.location("pathname").should("eq", "/mfi-ais/accounting/financial-period/list");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true }).should("not.be.checked");
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        configurationGridChecks.breadcrumb("Financial Period Management", ["Accounting"]);
    }

    requiredGridColumnsCheck() {
        this.openListForChecks();
        configurationGridChecks.columns(["#", "Financial Period", "Period Type", "Start Date", "End Date", "Office", "Created By", "Status", "Actions"]);
    }

    gridRecordDataCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.BODY).should(($body) => {
            const rows = $body.find(COMMON.TABLE.VISIBLE_ROW);
            if (!rows.length) {
                expect($body.find(".ant-empty:visible").length, "empty state").to.be.greaterThan(0);
                expect($body.text()).to.contain("No Data");
                return;
            }
            rows.each((_, row) => {
                const cells = Cypress.$(row).find("td");
                expect(cells.eq(0).text().trim(), "serial").to.match(/^\d+$/);
                [1, 2, 3, 4, 5, 6, 7].forEach((index) => {
                    expect(cells.eq(index).text().trim(), `column ${index + 1}`).not.to.equal("");
                });
            });
        });
    }

    periodDateRangeCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
            expect($rows.length, "financial periods to verify").to.be.greaterThan(0);
            $rows.each((_, row) => {
                const cells = Cypress.$(row).find("td");
                const dates = [3, 4].map((index) => cells.eq(index).text().trim());
                const timestamps = dates.map((value) => {
                    expect(value, "ISO period date").to.match(/^\d{4}-\d{2}-\d{2}$/);
                    const timestamp = Date.parse(`${value}T00:00:00Z`);
                    expect(timestamp, "valid date").to.be.finite;
                    expect(new Date(timestamp).toISOString().slice(0, 10), "calendar date").to.equal(value);
                    return timestamp;
                });
                expect(timestamps[1], "end date after start date").to.be.greaterThan(timestamps[0]);
            });
        });
    }

    searchWithExistingPeriod(partial = false) {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
            .first().find("td").eq(1).invoke("text").then((text) => {
                const period = text.trim();
                expect(period, "existing financial period").not.to.equal("");
                const search = partial && period.length > 1 ? period.slice(0, Math.ceil(period.length / 2)) : period;
                configurationGridChecks.exactSearch(search, 1);
            });
    }

    periodSearchCheck() {
        this.searchWithExistingPeriod();
    }

    partialPeriodSearchCheck() {
        this.searchWithExistingPeriod(true);
    }

    noResultSearchCheck() {
        this.openListForChecks();
        configurationGridChecks.noResult("BM_FINANCIAL_PERIOD");
    }

    openedStatusResultCheck() {
        this.openListForChecks();
        cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type("Opened").type(COMMON.KEYS.ENTER);
        cy.imsId(COMMON.BUTTONS.SEARCH).click();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
            expect($rows.length, "opened financial periods").to.be.greaterThan(0);
            $rows.each((_, row) => {
                expect(Cypress.$(row).find("td").eq(7).text().trim(), "period status").to.equal("Opened");
            });
        });
    }

    periodAscendingSortCheck() {
        this.openListForChecks();
        configurationGridChecks.sort("Financial Period", COMMON.SORT.ASCENDING);
    }

    periodDescendingSortCheck() {
        this.openListForChecks();
        configurationGridChecks.sort("Financial Period", COMMON.SORT.ASCENDING);
        configurationGridChecks.sort("Financial Period", COMMON.SORT.DESCENDING);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_financial_period_management = new FinancialPeriodManagementCreation();
