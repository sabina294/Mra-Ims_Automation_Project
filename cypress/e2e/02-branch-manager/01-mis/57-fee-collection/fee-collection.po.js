
import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class FeeCollection {
    test_data = Cypress.env("TEST_DATA");

    gridFeeCollectionListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu1(COMMON.MENUS.FEE_COLLECTION);
            cy.log(messages.ui.gridListMessage);
        });
    }

    createFeeCollection() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            const fcData = data.branchManager.feeCollection;
            cy.formController("samity_id").click();
            cy.contains(fcData.selectSamity).click()
            cy.formController("member_id").click();
            cy.contains(fcData.selectMember).click()
            cy.formController("fee_type_setting_id").click();
            cy.contains(fcData.feeType).click()
            cy.log(messages.ui.submitSuccess);
        });
    }

    submitFeeCollection() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.SUBMIT).click();
            cy.imsId(COMMON.CONFIRMATION.YES).click();
            cy.imsId(COMMON.CONFIRMATION.OK).click();
            cy.log(messages.ui.actionMessage);
        });
    }

    actionButtonCheck() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(
            messages.ui.actionMessage
        );
    }

    viewFeeCollection() {
        cy.fixture(this.test_data).then((data) => {
            const fcData = data.branchManager.feeCollection;
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

    actionEditMode() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_EDIT).click();
        cy.log(messages.ui.editMessage);
    }

    editResetButton() {
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

    searchInFeeCollectionName() {
        cy.fixture(this.test_data).then((data) => {
            const fcData = data.branchManager.feeCollection;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(fcData.search);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();
            cy.log(messages.ui.searchMessage);
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
            const fcData = data.branchManager.feeCollection;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(fcData.search);
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

    createResetButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.validation.requiredField);
        });
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


    breadcrumbCheck(page) {
        cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
            .and("contain.text", "Home").and("contain.text", "Fee Collection")
            .and("contain.text", page);
    }

    listBreadcrumbCheck() {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.location("pathname").should("include", "/fee-collection/list");
        this.breadcrumbCheck("List");
    }

    requiredGridColumnsCheck() {
        configurationGridChecks.columns([
            "#", "Member Name", "Samity Name", "Fee Type", "Fee Amount",
            "Collection Date", "Collected By", "Status", "Actions",
        ]);
    }

    searchMemberCheck(partial = false) {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find("td").eq(1).invoke("text").then((text) => {
            const member = text.trim();
            // The grid displays the member ID followed by " - " and the name.
            const name = member.split(/\s+-\s+/).slice(1).join(" - ").trim();
            expect(name, "member name from the grid").not.to.equal("");
            const search = partial ? name.slice(0, Math.max(1, Math.floor(name.length / 2))) : name;
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(search, { parseSpecialCharSequences: false });
            cy.imsId(COMMON.BUTTONS.SEARCH).click();
            cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0).each(($row) => {
                cy.wrap($row).find("td").eq(1).invoke("text").should((value) => {
                    const resultName = value.trim().split(/\s+-\s+/).slice(1).join(" - ").trim();
                    if (partial) expect(resultName).to.include(search);
                    else expect(resultName).to.equal(name);
                });
            });
        });
    }

    exactMemberSearchCheck() {
        this.searchMemberCheck();
    }

    partialMemberSearchCheck() {
        this.searchMemberCheck(true);
    }

    noResultSearchCheck() {
        configurationGridChecks.noResult("FEE_COLLECTION");
    }

    resetRestoresGridCheck() {
        configurationGridChecks.reset();
    }

    memberAscendingSortCheck() {
        configurationGridChecks.sort("Member Name", COMMON.SORT.ASCENDING);
    }

    memberDescendingSortCheck() {
        configurationGridChecks.sort("Member Name", COMMON.SORT.DESCENDING);
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_fee_collection = new FeeCollection();
