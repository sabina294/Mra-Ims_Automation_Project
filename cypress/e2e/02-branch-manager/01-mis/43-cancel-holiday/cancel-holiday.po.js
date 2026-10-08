import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class CancelHoliday {
    test_data = Cypress.env("TEST_DATA");

    gridCancelHolidayListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.CALENDAR, COMMON.MENUS.CANCEL_HOLIDAY);
            cy.log(messages.ui.gridListMessage);
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
        cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.validation.requiredField);
    }

    createApproveButtonCheck() {
        cy.imsId(COMMON.BUTTONS.APPROVE).click();
        cy.log(messages.ui.submitSuccess);
    }

    createOkButton() {
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.submitSuccess);
    }

    createSubmitButtonCheck() {
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        // cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.submitSuccess);
    }

    createDraftButtonCheck() {
        cy.imsId(COMMON.BUTTONS.DRAFT).click();
        cy.log(messages.ui.draftOnMessage);
    }

    createDraftOkButton() {
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.draftOnMessage);
    }

    createGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.createGoBackMessage);
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const chData = data.branchManager.cancelHoliday;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(chData.search);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();
            cy.log(messages.ui.searchMessage);
        });
    }

    openListForChecks() {
        cy.visit("/mfi-mis/calendar/cancel-holiday/list");
        cy.location("pathname").should("eq", "/mfi-mis/calendar/cancel-holiday/list");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true }).should("not.be.checked");
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        configurationGridChecks.breadcrumb("Cancel Holiday", ["Calendar"]);
    }

    requiredGridColumnsCheck() {
        this.openListForChecks();
        configurationGridChecks.columns(["#", "Applicable Scope", "Office", "Reason", "Approver", "Status", "Actions"]);
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
                expect(cells.eq(0).text().trim(), "serial number").to.match(/^\d+$/);
                // Office and approver may be empty depending on scope and approval state.
                [1, 3, 5].forEach((index) => {
                    expect(cells.eq(index).text().trim(), "cancel holiday column " + index).not.to.equal("");
                });
            });
        });
    }

    gridRecordsOrEmptyCheck() {
        this.openListForChecks();
        this.assertRecordsOrEmpty();
    }

    searchControlsCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE).should("not.be.checked");
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
        cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible");
        cy.imsId(COMMON.BUTTONS.REFRESH).should("be.visible");
    }

    noResultSearchCheck() {
        this.openListForChecks();
        configurationGridChecks.noResult("BM_CANCEL_HOLIDAY");
    }

    resetSearchInputCheck() {
        this.openListForChecks();
        configurationGridChecks.noResult("BM_CANCEL_HOLIDAY_RESET");
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
        this.assertRecordsOrEmpty();
    }

    refreshListStateCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.location("pathname").should("eq", "/mfi-mis/calendar/cancel-holiday/list");
        this.assertRecordsOrEmpty();
    }

    cancelHolidayButtonCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible").and("be.enabled")
            .and("contain.text", "Cancel Holiday");
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const create_cancel_holiday = new CancelHoliday();
