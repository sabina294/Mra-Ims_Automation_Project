// Shared across 02-branch-manager/01-mis/57-day-forward and workflow.cy.js.
import messages from "../constants/messages";
import { COMMON } from "../constants/selectors";
class DayForwardMis {
    test_data = Cypress.env("TEST_DATA");

    gridDayForwardListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.PROCESS, COMMON.MENUS.DAY_FORWARD);
            cy.log(messages.ui.gridListMessage);
        });
    }

    gridDayForwardDayRoutine() {
        cy.imsId(COMMON.BUTTONS.FORWARD).click();
        cy.log(messages.ui.dayForwardMessage);
    }

    startProccess() {
        cy.imsId(COMMON.BUTTONS.START_PROCESS).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.startProcessMessage);
    }

    dayForwardConfirm() {
        cy.imsId(COMMON.BUTTONS.CONFIRM).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.confirmMessage);
    }

    gridDeleteButtonCheck() {
        cy.imsId(COMMON.BUTTONS.FORWARD_DELETE).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.imsId(COMMON.BUTTONS.FORWARD).click();
        cy.imsId(COMMON.BUTTONS.START_PROCESS).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.imsId(COMMON.BUTTONS.CONFIRM).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.forwardDeleteMessage);
    }

    openListForChecks() {
        cy.visit("/mfi-mis/process/day-forward/list");
        cy.location("pathname").should("eq", "/mfi-mis/process/day-forward/list");
        cy.get(COMMON.TABLE.HEAD).should("be.visible");
    }

    breadcrumbCheck() {
        this.openListForChecks();
        cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
            .and("contain.text", "Home").and("contain.text", "Process")
            .and("contain.text", "Day Forward").and("contain.text", "List");
    }

    summaryLabelsCheck() {
        this.openListForChecks();
        ["Branch Status", "Business Day", "System Status"].forEach((label) => {
            cy.contains("span:visible, div:visible, h3:visible, h4:visible",
                new RegExp("^\\s*" + label + "\\s*$")).should("be.visible");
        });
    }

    columnsCheck() {
        this.openListForChecks();
        ["#", "Business Day", "Business Date", "Total Collection", "Loan Disbursement",
            "Total Withdraw", "Day Started On", "Day Ended On"].forEach((label) => {
            cy.contains("thead th:visible", new RegExp("^\\s*" + label + "\\s*$"))
                .should("be.visible");
        });
    }

    recordDataCheck() {
        this.openListForChecks();
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
            expect($rows.length, "day forward records").to.be.greaterThan(0);
            $rows.each((_, row) => {
                const cells = Cypress.$(row).children("td");
                expect(cells.eq(0).text().trim(), "serial").to.match(/^\d+$/);
                expect(weekdays, "business weekday").to.include(cells.eq(1).text().trim());
                expect(cells.eq(2).text().trim(), "business date").not.to.equal("");
                expect(cells.eq(6).text().trim(), "day started on").not.to.equal("");
                // Day Ended On can remain empty for an unfinished day.
            });
        });
    }

    transactionTotalsCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
            expect($rows.length, "day forward records").to.be.greaterThan(0);
            $rows.each((_, row) => {
                const cells = Cypress.$(row).children("td");
                [3, 4, 5].forEach((index) => {
                    const amount = cells.eq(index).text().trim().replace(/,/g, "");
                    expect(amount, "transaction total").to.match(/^-?\d+(?:\.\d+)?$/);
                    expect(Number.isFinite(Number(amount)), "finite transaction total").to.equal(true);
                });
            });
        });
    }

    actionControlsCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.BUTTONS.FORWARD).should("be.visible");
        cy.imsId(COMMON.BUTTONS.FORWARD_DELETE).should("be.visible");
    }

    firstPagePaginationCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
        cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("contain.text", "1");
        cy.get(COMMON.PAGINATION.PREVIOUS_PAGE).should("have.class", COMMON.PAGINATION.DISABLED_CLASS);
        cy.get(COMMON.PAGINATION.PAGE_SIZE_SELECT).should("be.visible");
        cy.get(COMMON.PAGINATION.TOTAL_TEXT).should("be.visible");
    }

    selectedBranchCheck() {
        this.openListForChecks();
        cy.get("nz-select:visible").should("have.length", 1)
            .find(".ant-select-selection-item").should("be.visible")
            .invoke("text").should("match", /\S+/);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_day_forward = new DayForwardMis();
