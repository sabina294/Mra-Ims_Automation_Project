// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/31-rejected-loan-account-proposal/rejected-loan-account-proposal.cy.js --browser chrome --headed

import "cypress-file-upload";
import { rejected_loan_account_proposal } from "./rejected-loan-account-proposal.po";

describe("31. Rejected Loan Account Proposal Module Test Cases", function () {
    const baseURL = Cypress.env("BASE_URL");
    const test_data = Cypress.env("TEST_DATA");
    before(() => {
        cy.fixture(test_data).then((d) => {
            cy.login(
                baseURL,
                d.credential.branchManagerUserId,
                d.credential.branchManagerPassword
            );
            cy.changeLanguage("english");
        });
    });

    after(() => {
        cy.logout();
    });

    it("31.01. Verify Rejected Loan Account Proposal  Grid List Page loads successfully", function () {
        rejected_loan_account_proposal.gridRejectedLoanAccountProposalListPage();
    });

    it("31.02. Verify Successful Reset of Grid List Using the Reset Button on Rejected Loan Account Proposal  Page.", function () {
        rejected_loan_account_proposal.gridResetButtonCheck();
    });

    it("31.03. Verify Successful Refresh of Grid List Using the Refresh Button on Rejected Loan Account Proposal  Page.", function () {
        rejected_loan_account_proposal.gridRefreshButtonCheck();
    });

    it("31.04. Verify Rejected Loan Account Proposal: the list displays the correct breadcrumb.", function () {
        rejected_loan_account_proposal.listBreadcrumbCheck();
    });

    it("31.05. Verify Rejected Loan Account Proposal: the grid displays all required columns.", function () {
        rejected_loan_account_proposal.requiredGridColumnsCheck();
    });

    it("31.06. Verify Rejected Loan Account Proposal: displayed rows contain identifiers, names and status or show No Data.", function () {
        rejected_loan_account_proposal.gridRecordDataCheck();
    });

    it("31.07. Verify Rejected Loan Account Proposal: loan terms and amounts are valid or the list shows No Data.", function () {
        rejected_loan_account_proposal.loanAmountsCheck();
    });

    it("31.08. Verify Rejected Loan Account Proposal: the list displays office and search controls.", function () {
        rejected_loan_account_proposal.searchControlsCheck();
    });

    it("31.09. Verify Rejected Loan Account Proposal: a non-existing record search displays No Data.", function () {
        rejected_loan_account_proposal.noResultSearchCheck();
    });

    it("31.10. Verify Rejected Loan Account Proposal: Reset clears an unsuccessful search and restores the list.", function () {
        rejected_loan_account_proposal.resetRestoresGridCheck();
    });

    it("31.11. Verify Rejected Loan Account Proposal: pagination starts on the first page or the list shows No Data.", function () {
        rejected_loan_account_proposal.firstPagePaginationCheck();
    });

    it("31.12. Verify check that the grid list content changes correctly from english to bangla.", function () {
        rejected_loan_account_proposal.gridLanguageSwitchCheck();
    });
});
