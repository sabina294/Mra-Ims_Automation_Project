import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
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
            const chData = data.fieldOfficer.cancelHoliday;
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
      cy.get("thead th:visible").should("have.length.greaterThan", 0);
    }

    listBreadcrumbCheck() {
      this.openListForChecks();
      cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
        .and("contain.text", "Home").and("contain.text", "Calendar")
        .and("contain.text", "Cancel Holiday").and("contain.text", "List");
    }

    requiredGridColumnsCheck() {
      this.openListForChecks();
      this.assertGridColumns();
    }

    assertGridColumns() {
      ["#", "Applicable Scope", "Office", "Reason", "Approver", "Status", "Actions"].forEach((label) => {
        cy.contains("thead th:visible", new RegExp(`^\\s*${Cypress._.escapeRegExp(label)}\\s*$`))
          .should("be.visible");
      });
    }

    refreshListCheck() {
      this.openListForChecks();
      cy.imsId(COMMON.BUTTONS.REFRESH).click();
      cy.location("pathname").should("eq", "/mfi-mis/calendar/cancel-holiday/list");
      this.assertGridColumns();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    }

    draftToggleStateCheck() {
      this.openListForChecks();
      cy.imsId(COMMON.GRID.DRAFT_TOGGLE).check({ force: true }).should("be.checked");
      cy.get(COMMON.TABLE.HEAD).should("be.visible");
      cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true }).should("not.be.checked");
      this.assertGridColumns();
    }

    addButtonAvailableCheck() {
      this.openListForChecks();
      cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible").and("not.be.disabled")
        .and("contain.text", "Cancel Holiday");
    }

    recordsOrEmptyStateCheck() {
      this.openListForChecks();
      // Both populated and empty lists are valid: do not require cancellation data.
      cy.get(COMMON.TABLE.BODY).should(($body) => {
        const rows = $body.find("tr:not(.ant-table-placeholder):visible");
        if (rows.length === 0) {
          const empty = $body.find(".ant-empty:visible");
          expect(empty.length, "visible empty state").to.be.greaterThan(0);
          expect(empty.text(), "empty list message").to.contain("No Data");
        } else {
          rows.each((_, row) => {
            const cells = Cypress.$(row).children("td");
            expect(cells.eq(0).text().trim(), "row number").to.match(/^\d+$/);
            // Office and Approver can be blank depending on scope/workflow state.
            [1, 3, 5].forEach((index) => {
              expect(cells.eq(index).text().trim(), `cancellation column ${index}`).not.to.equal("");
            });
          });
        }
      });
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const create_cancel_holiday = new CancelHoliday();
