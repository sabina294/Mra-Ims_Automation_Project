// Shared across 02-branch-manager/01-mis/53-authorization and workflow.cy.js.
import messages from "../constants/messages";
import { COMMON } from "../constants/selectors";
import { configurationGridChecks } from "./configuration-grid-checks";

class Authorization {
    test_data = Cypress.env("TEST_DATA");

    gridAuthorizationListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.TRANSACTION, COMMON.MENUS.AUTHORIZATION);
            cy.log(messages.ui.gridListMessage);
        });
    }

    gridCheckboxCheck() {
        cy.imsId(COMMON.BUTTONS.CHECKBOX).click();
        cy.log(messages.ui.checkboxMessage);
    }

    authorizationLock() {
        cy.imsId(COMMON.BUTTONS.LOCK).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.authorizationLockMessage);
    }

    authorizationUnlock() {
        cy.imsId(COMMON.BUTTONS.AUTHORIZE_UNLOCK).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.authorizationUnlockMessage);
    }

    authorizeSamity() {
        cy.imsId(COMMON.BUTTONS.CHECKBOX).click();
        cy.imsId(COMMON.BUTTONS.LOCK).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.imsId(COMMON.BUTTONS.AUTHORIZE).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.authorizeSamityMessage);
    }

    authorizeSingleSamity() {
        cy.imsId(COMMON.BUTTONS.AUTHORIZE_SAMITY).click();
        cy.imsId(COMMON.BUTTONS.LOCK).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.imsId(COMMON.BUTTONS.AUTHORIZE).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.authorizeSingleSamityMessage);
    }

    gridResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.ui.gridResetSuccess);
    }

    gridRefreshButtonCheck() {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.log(messages.ui.gridRefreshSuccess);

    }


    gridDraftButton() {
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.draftOnMessage);
    }

    gridPendingFieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.branchManager.authorization;
            cy.formController("field_officer_id").type(aData.fieldOfficer).type("{enter}");
            cy.log(messages.ui.fieldOfficerDropdownMessage);
        })
    }

    gridDraftButtonOff() {
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.draftOffMessage);
    }

    gridHistoryButtonOnCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.historyOnMessage);
    }

    gridHistoryFieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.branchManager.authorization;
            cy.formController("field_officer_id").type(aData.fieldOfficer).type("{enter}");
            cy.log(messages.ui.fieldOfficerDropdownMessage);
        })
    }

    gridHistoryButtonOffCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.historyOffMessage);
    }

    gridFieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.branchManager.authorization;
            cy.formController("field_officer_id").type(aData.fieldOfficer).type("{enter}");
            cy.log(messages.ui.fieldOfficerDropdownMessage);
        })
    }

    gridSamityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var aData = data.branchManager.authorization;
            cy.formController("field_officer_id").type(aData.samity).type("{enter}");
            cy.log(messages.ui.samityDropdownMessage);
        })
    }

    openListForChecks() {
        cy.visit("/mfi-mis/transaction/authorization/list");
        cy.location("pathname").should("eq", "/mfi-mis/transaction/authorization/list");
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true }).should("not.be.checked");
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE).uncheck({ force: true }).should("not.be.checked");
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        configurationGridChecks.breadcrumb("Authorization", ["Transaction"]);
    }

    columnsCheck() {
        this.openListForChecks();
        configurationGridChecks.columns(["#", "Samity ID", "Samity Name", "Field Officer", "Adjustment",
            "Encashment", "Withdraw", "Collection", "Status", "Locked By", "Actions"]);
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
                expect(cells.eq(1).text().trim(), "serial").to.match(/^\d+$/);
                [2, 3, 4, 9].forEach((index) => {
                    expect(cells.eq(index).text().trim(), "collection column " + index).not.to.equal("");
                });
                [5, 6, 7, 8].forEach((index) => {
                    const amount = cells.eq(index).text().trim().replace(/,/g, "");
                    expect(amount, "transaction amount").to.match(/^-?\d+(?:\.\d+)?$/);
                    expect(Number.isFinite(Number(amount)), "finite amount").to.equal(true);
                });
            });
        });
    }

    recordsOrEmptyCheck() {
        this.openListForChecks();
        this.assertRecordsOrEmpty();
    }

    controlsCheck() {
        this.openListForChecks();
        ["office_id", "field_officer_id"].forEach((name) => {
            cy.formController(name).should("be.visible");
        });
        cy.contains("nz-select:visible", "Select Samity").should("be.visible");
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
        cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
    }

    refreshResultCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.location("pathname").should("eq", "/mfi-mis/transaction/authorization/list");
        this.assertRecordsOrEmpty();
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }

}

export const authorization = new Authorization();
