import { processPageChecks } from "../../../../support/page-objects/process-page-checks";
import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class CancelSamity {
  test_data = Cypress.env("TEST_DATA");

  gridCancelSamityListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.PROCESS, COMMON.MENUS.CANCEL_SAMITY);
      cy.log(messages.ui.gridListMessage);
    });
  }
  
    openListForChecks() {
        cy.visit("/mfi-mis/process/cancel-samity");
        cy.location("pathname").should("eq", "/mfi-mis/process/cancel-samity");
        cy.get(COMMON.TABLE.HEAD).should("be.visible");
    }

    breadcrumbCheck() {
        this.openListForChecks();
        cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
            .and("contain.text", "Home").and("contain.text", "Process")
            .and("contain.text", "Cancel Samity");
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
        ["#", "Samity ID", "Samity Name", "Samity Day", "Field Officer", "Status", "Actions"]
            .forEach((label) => {
                cy.contains("thead th:visible", new RegExp("^\\s*" + label + "\\s*$"))
                    .should("be.visible");
            });
    }

    searchControlsCheck() {
        this.openListForChecks();
        cy.contains("nz-select:visible", "All Samities").should("be.visible");
        cy.contains("nz-select:visible", "All Field Officers").should("be.visible");
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
        cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
    }

    recordsOrEmptyCheck() {
        this.openListForChecks();
        const weekdays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        cy.get(COMMON.TABLE.BODY).should(($body) => {
            const rows = $body.find("tr:not(.ant-table-placeholder):visible");
            if (!rows.length) {
                expect($body.find(".ant-empty:visible").length, "visible empty state").to.be.greaterThan(0);
                expect($body.text()).to.contain("No Data");
                return;
            }
            rows.each((_, row) => {
                const cells = Cypress.$(row).children("td");
                // Selection checkbox is column zero.
                expect(cells.eq(1).text().trim(), "serial").to.match(/^\d+$/);
                [2, 3, 5, 6].forEach((index) => {
                    expect(cells.eq(index).text().trim(), "samity column " + index).not.to.equal("");
                });
                expect(weekdays, "samity weekday").to.include(cells.eq(4).text().trim());
            });
        });
    }

    bulkControlsCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.BUTTONS.CANCEL_MULTIPLE).should("be.visible");
        cy.contains("button:visible", /^\s*Restore Multiple\s*$/).should("be.visible");
    }

    selectedBranchCheck() {
        this.openListForChecks();
        cy.get("nz-select:visible").filter((_, select) => {
            const text = Cypress.$(select).text();
            return !text.includes("All Samities") && !text.includes("All Field Officers");
        }).should("have.length", 1)
            .find(".ant-select-selection-item").should("be.visible")
            .invoke("text").should("match", /\S+/);
    }

    bulkControlsWithoutSelectionCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.HEAD).find("input[type='checkbox']")
            .should("exist").and("not.be.checked");
        cy.get(COMMON.TABLE.BODY).should(($body) => {
            expect($body.find("input[type='checkbox']:checked").length,
                "selected samities").to.equal(0);
        });
        cy.imsId(COMMON.BUTTONS.CANCEL_MULTIPLE).should("be.disabled");
        cy.contains("button:visible", /^\s*Restore Multiple\s*$/).should("be.disabled");
    }

    nonMatchingSearchCheck() {
    processPageChecks.open(COMMON.MENUS.CANCEL_SAMITY, "/mfi-mis/process/cancel-samity");
    processPageChecks.noResults({ dashboard: false });
    processPageChecks.clearSearch();
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_cancel_samity = new CancelSamity();
