import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";
import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class RejectedLoanAccountProposal {
    test_data = Cypress.env("TEST_DATA");

    gridRejectedLoanAccountProposalListPage() {
        cy.selectMenu(COMMON.MENUS.LOAN_ACCOUNT, COMMON.MENUS.REJECTED_LOAN_ACCOUNT_PROPOSAL);
        cy.log(messages.ui.listPageNavigationCheck);
    }

    searchInLoanAccountProposalName() {
        cy.fixture(this.test_data).then((data) => {
            const lapData = data.fieldOfficer.rejectedLoanAccountFrom;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lapData.memberNameEn);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", lapData.memberNameEn);
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

    createAddGuarantorButtonCheck() {
        cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible").click();
        cy.imsId(COMMON.BUTTONS.ADD_GUARANTOR)
            .should("be.visible")
            .first()
            .click();

        cy.log(messages.ui.guarantorAdded);
    }

    createRemoveButtonCheck() {
        cy.imsId(COMMON.BUTTONS.REMOVE_GUARANTOR)
            .should("be.visible")
            .first()
            .click();
        cy.log(messages.ui.guarantorRemoved);
    }


    createResetButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.resetSuccess);
        });
    }

    createValidationMessageCheck() {
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.validation.requiredField);
    }

    createDraftButtonCheck() {
        cy.imsId(COMMON.BUTTONS.DRAFT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.draftOnMessage);
    }

    createGoBackButtonCheck() {
        cy.imsId(COMMON.BUTTONS.GO_BACK).click();
        cy.log(messages.ui.createGoBackMessage);
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const lapData = data.fieldOfficer.rejectedLoanAccountFrom;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lapData.memberNameEn);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();
            cy.log(messages.ui.searchMessage);
        });
    }

    openListForChecks() {
        cy.visit("/mfi-mis/loan-account/rejected-loan-account-proposal/list");
        cy.location("pathname").should("eq", "/mfi-mis/loan-account/rejected-loan-account-proposal/list");
        cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
        cy.get("nz-breadcrumb, .ant-breadcrumb")
            .should("contain.text", "Rejected Loan Account Proposal");
    }

    listBreadcrumbCheck() {
        this.openListForChecks();
        configurationGridChecks.breadcrumb("Rejected Loan Account Proposal", ["Loan Account"]);
    }

    requiredGridColumnsCheck() {
        this.openListForChecks();
        configurationGridChecks.columns(["#", "Application ID", "Member ID", "Member Name", "Samity ID", "Samity Name", "Product Name", "Loan Term", "Inst. Amount", "Applied Loan Amount", "Status", "Actions"]);
    }

    gridRecordDataCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.BODY).should(($body) => {
            const $rows = $body.find("tr:not(.ant-table-placeholder):visible");
            if (!$rows.length) {
                expect($body.find(".ant-empty:visible").length, "visible empty state").to.be.greaterThan(0);
                expect($body.text()).to.contain("No Data");
                return;
            }
            $rows.each((_, row) => {
                const cells = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS);
                expect(cells.eq(0).text().trim(), "serial number").to.match(/^\d+$/);
                [1, 2, 3, 4, 5, 6].forEach((index) => {
                    expect(cells.eq(index).text().trim(), `column ${index}`).not.to.equal("");
                });
                expect(cells.eq(10).text().trim(), "record status").to.equal("Rejected");
            });
        });
        cy.log(messages.ui.gridRecordsOrEmptyCheck);
    }

    loanAmountsCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.BODY).should(($body) => {
            const $rows = $body.find("tr:not(.ant-table-placeholder):visible");
            if (!$rows.length) {
                expect($body.find(".ant-empty:visible").length, "visible empty state").to.be.greaterThan(0);
                expect($body.text()).to.contain("No Data");
                return;
            }
            $rows.each((_, row) => {
                const cells = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS);
                [7, 8, 9].forEach((index) => {
                    const value = cells.eq(index).text().trim().replace(/,/g, "");
                    expect(value, `numeric loan column ${index}`).to.match(/^\d+(\.\d+)?$/);
                    expect(Number(value)).to.be.at.least(0);
                });
            });
        });
        cy.log(messages.ui.gridAmountsOrEmptyCheck);
    }

    searchControlsCheck() {
        this.openListForChecks();
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
        cy.formController("office_id").should("be.visible");
        cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
        cy.log(messages.ui.searchControlsCheck);
    }

    noResultSearchCheck() {
        this.openListForChecks();
        configurationGridChecks.noResult("LOAN_RECORD");
    }

    resetRestoresGridCheck() {
        this.noResultSearchCheck();
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
        cy.get(COMMON.TABLE.BODY).should(($body) => {
            const rows = $body.find("tr:not(.ant-table-placeholder):visible");
            if (!rows.length) {
                expect($body.find(".ant-empty:visible").length).to.be.greaterThan(0);
                expect($body.text()).to.contain("No Data");
            } else {
                expect($body.text()).not.to.contain("LOAN_RECORD_THAT_DOES_NOT_EXIST_98765");
            }
        });
        cy.log(messages.ui.gridResetSuccess);
    }

    firstPagePaginationCheck() {
        this.openListForChecks();
        cy.get(COMMON.TABLE.BODY).should(($body) => {
            expect($body.find("tr:not(.ant-table-placeholder):visible, .ant-empty:visible").length)
                .to.be.greaterThan(0);
        }).then(($body) => {
            if ($body.find("tr:not(.ant-table-placeholder):visible").length) {
                configurationGridChecks.pagination();
            } else {
                cy.wrap($body).find(".ant-empty").should("be.visible").and("contain.text", "No Data");
            }
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const rejected_loan_account_proposal =
    new RejectedLoanAccountProposal();
