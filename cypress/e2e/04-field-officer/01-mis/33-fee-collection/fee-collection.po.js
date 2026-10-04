
import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";

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
            const fcData = data.fieldOfficer.feeCollection;
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
            cy.imsId(COMMON.CONFIRMATION.YES).eq(0).click();
            cy.imsId(COMMON.CONFIRMATION.YES).eq(1).click();
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
            const fcData = data.fieldOfficer.feeCollection;
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
            const fcData = data.fieldOfficer.feeCollection;
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
            const fcData = data.fieldOfficer.feeCollection;
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


    openListForChecks() {
        cy.visit("/mfi-mis/fee-collection/list");
        cy.location("pathname").should("eq", "/mfi-mis/fee-collection/list");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
        cy.get("thead th:visible").should("have.length.greaterThan", 0);
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
            .and("contain.text", "Home").and("contain.text", "Fee Collection")
            .and("contain.text", "List");
    }

    requiredGridColumnsCheck() {
        this.openListForChecks();
        this.assertFeeGridColumns();
    }

    assertFeeGridColumns() {
        ["#", "Member Name", "Samity Name", "Fee Type", "Fee Amount",
            "Collection Date", "Collected By", "Status", "Actions"].forEach((label) => {
            cy.contains("thead th:visible", new RegExp(`^\\s*${Cypress._.escapeRegExp(label)}\\s*$`))
                .should("be.visible");
        });
    }

    searchControlsCheck() {
        this.openListForChecks();
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("not.be.disabled");
        cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("not.be.disabled");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").and("not.be.disabled");
    }

    addButtonAvailableCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible").and("not.be.disabled")
            .and("contain.text", "Add Fee Collection");
    }

    recordsOrEmptyStateCheck() {
        this.openListForChecks();
        this.assertFeeGridState();
    }

    assertFeeGridState() {
        // An empty current/pending list is valid; do not create transactions as setup.
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
                    // Validate fee-specific data; member/samity fields can vary by fee scope.
                    [3, 5, 7].forEach((index) => {
                        expect(cells.eq(index).text().trim(), `fee column ${index}`).not.to.equal("");
                    });
                    const amount = cells.eq(4).text().trim().replace(/,/g, "");
                    expect(amount, "Fee Amount").to.match(/^\d+(?:\.\d+)?$/);
                    expect(Number.isFinite(Number(amount)), "finite fee amount").to.equal(true);
                });
            }
        });
    }

    refreshListStateCheck() {
        this.openListForChecks();
        cy.imsId(COMMON.BUTTONS.REFRESH).should("be.visible").click();
        cy.location("pathname").should("eq", "/mfi-mis/fee-collection/list");
        this.assertFeeGridColumns();
        this.assertFeeGridState();
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_fee_collection = new FeeCollection();
