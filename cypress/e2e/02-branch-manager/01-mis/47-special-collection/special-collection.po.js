import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class specialCollection {
    test_data = Cypress.env("TEST_DATA");

    gridSpecialCollectionListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.TRANSACTION, COMMON.MENUS.SPECIAL_COLLECTION);
            cy.log(messages.ui.gridListMessage);
        });
    }

    deleteNewCollection() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            const scData = data.branchManager.specialCollection;
            cy.formController("samityId").click();
            cy.contains(scData.selectSamity).click()
            cy.formController("employeeId").click();
            cy.contains(scData.selectMember).click()
            cy.formController("accountId").click();
            cy.contains(scData.selectAccount).click();
            cy.get('input:visible:not(:disabled)')
                .last()
                .should('be.visible')
                .clear()
                .type(scData.inputAmount);
            cy.imsId(COMMON.BUTTONS.SAVE).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_DELETE).click();
            cy.imsId(COMMON.BUTTONS.DELETE).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();

            cy.log(messages.ui.actionMessage);
        });
    }

    createNewCollection() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            const scData = data.branchManager.specialCollection;
            cy.formController("samityId").click();
            cy.contains(scData.selectSamity).click();
            cy.formController("employeeId").click();
            cy.contains(scData.selectMember).click();
            cy.formController("accountId").click();
            cy.contains(scData.selectAccount).click();
            cy.get('input:visible:not(:disabled)')
                .last()
                .should('be.visible')
                .clear()
                .type(scData.inputAmount);
            cy.imsId(COMMON.BUTTONS.SAVE).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();

            cy.log(messages.ui.submitSuccess);
        });
    }

    actionButtonCheck() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(messages.ui.actionMessage);
    }

    viewSpecialCollection() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.log(messages.ui.viewMessage);
    }

    viewGoBackButton() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.goBackSuccess);
    }

    editSpecialCollection() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();
        cy.log(messages.ui.editMessage);
    }

    editGoBackButton() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.editGoBackMessage);
    }

    EditSaveCollection() {
        cy.fixture(this.test_data).then((data) => {
            const scData = data.branchManager.specialCollection;
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_EDIT).click();
            cy.get('input:visible:not(:disabled)')
                .last()
                .should('be.visible')
                .clear()
                .type(scData.inputAmount);
            cy.imsId(COMMON.BUTTONS.SAVE).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.log(messages.ui.editMessage);

        })
    }

    actionSpecialSubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_SUBMIT).click();
        cy.log(messages.form.submitSuccess);
    }

    actionSpecialGoBack() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.form.submitSuccess);
    }

    specialSubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_SUBMIT).click();
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.form.submitSuccess);
    }

    viewUnsubmitted() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_VIEW).click();
        cy.log(messages.ui.viewMessage);
    }

    viewGoBackButtonUnsubmitted() {
        // cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.viewMessage);
    }

    gridActionUnsubmittedButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const scData = data.branchManager.specialCollection;
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
            cy.log(messages.form.submitSuccess);
        });
    }

    gridActionUnsubmittedGoBackButton() {
        cy.fixture(this.test_data).then((data) => {
            const scData = data.branchManager.specialCollection;
            cy.imsId(COMMON.BUTTONS.GO_BACK).click();
            cy.log(messages.ui.goBackSuccess);
        });
    }

    UnsubmittedButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const scData = data.branchManager.specialCollection;
            cy.imsId(COMMON.TOGGLES.ACTION).first().click();
            cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
            cy.imsId(COMMON.BUTTONS.UNSUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.log(messages.form.submitSuccess);
        });
    }

    againSpecialSubmit() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_SUBMIT).click();
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.YES).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.form.submitSuccess);
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

    gridHistoryButtonOnCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .check({ force: true });
        cy.log(messages.ui.historyOnMessage);
    }

    fieldOfficerHistoryDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const scData = data.branchManager.specialCollection;
            cy.formController("field_officer_id").type(scData.fieldOfficer).type("{enter}");
            cy.log(messages.ui.fieldOfficerDropdownMessage);
        })
    }

    gridHistoryButtonOffCheck() {
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE)
            .uncheck({ force: true });
        cy.log(messages.ui.historyOffMessage);
    }

    fieldOfficerDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const scData = data.branchManager.specialCollection;
            cy.formController("field_officer_id").type(scData.fieldOfficer).type("{enter}");
            cy.log(messages.ui.fieldOfficerDropdownMessage);
        })
    }

    gridSamityDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const scData = data.branchManager.specialCollection;
            cy.formController("staging_samity_id").type(scData.Samity).type("{enter}");
            cy.log(messages.ui.samityDropdownMessage);
        })
    }

    openListForChecks() {
        cy.visit("/mfi-mis/transaction/special-collection/list");
        cy.location("pathname").should("eq", "/mfi-mis/transaction/special-collection/list");
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.imsId(COMMON.GRID.HISTORY_TOGGLE).uncheck({ force: true }).should("not.be.checked");
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        configurationGridChecks.breadcrumb("Special Collection", ["Transaction"]);
    }

    columnsCheck() {
        this.openListForChecks();
        configurationGridChecks.columns(["#", "Samity ID", "Samity Name", "Member", "Account Id",
            "Field Officer", "Collection Type", "Amount", "Status", "Actions"]);
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
                expect(cells.eq(0).text().trim(), "serial").to.match(/^\d+$/);
                [1, 2, 3, 4, 5, 6, 8].forEach((index) => {
                    expect(cells.eq(index).text().trim(), "collection column " + index).not.to.equal("");
                });
                const amount = cells.eq(7).text().trim().replace(/,/g, "");
                expect(amount, "collection amount").to.match(/^\d+(?:\.\d+)?$/);
                expect(Number.isFinite(Number(amount)), "finite amount").to.equal(true);
            });
        });
    }

    recordsOrEmptyCheck() {
        this.openListForChecks();
        this.assertRecordsOrEmpty();
    }

    controlsCheck() {
        this.openListForChecks();
        ["office_id", "field_officer_id", "staging_samity_id"].forEach((name) => {
            cy.formController(name).should("be.visible");
        });
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
        cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
    }

    refreshResultCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.location("pathname").should("eq", "/mfi-mis/transaction/special-collection/list");
        this.assertRecordsOrEmpty();
    }

    newCollectionButtonCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible").and("be.enabled")
            .and("contain.text", "New Collection");
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }

}

export const create_special_collection = new specialCollection();
