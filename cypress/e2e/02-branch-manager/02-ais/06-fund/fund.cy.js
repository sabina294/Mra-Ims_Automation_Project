// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/02-ais/06-fund/fund.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_fund_Transfer } from "./fund.po";

describe("06 Fund Module Test Cases", function () {
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
            cy.switchModule("AIS");

        });
    });

    after(() => {
        cy.logout();
    });

    it("06.01. Verify that the Fund List page loads successfully with all required elements.", function () {
        create_fund_Transfer.gridFundListPage();
    });

    it("06.02.Verify that a fund record is created successfully with valid required data.", function () {
        create_fund_Transfer.createFundTransfer();
    });

    it("06.03. Verify that fund creation is not allowed without entering Transaction Amount.", function () {
        create_fund_Transfer.createwithoutTransactionAmount();
    });

    it("06.04. Verify that fund creation is not allowed without selecting Sender Payment Mode.", function () {
        create_fund_Transfer.createwithoutSenderPaymentMode();
    });

    it("06.05. Verify that fund creation is not allowed without selecting Recipient Received Mode.", function () {
        create_fund_Transfer.createwithoutRecipientReceivedMode();
    });

    it("06.06. Verify that fund creation is not allowed without entering Remarks.", function () {
        create_fund_Transfer.createwithoutRemarks();
    });

    it("06.07. Verify that action buttons perform expected operations on fund records.", function () {
        create_fund_Transfer.actionButtonCheck();
    });

    it("06.08. Verify that the user can view detailed information of a fund record.", function () {
        create_fund_Transfer.viewFund();
    });

    it("06.09. Verify that the Go Back button from the fund details page redirects to the fund list page.", function () {
        create_fund_Transfer.viewGoBackfund();
    });

    it("06.10. Verify that a fund record can be verified successfully with valid data.", function () {
        create_fund_Transfer.verifyFundTransfer();
    });

    it("06.11. Verify that the Go Back button from the fund verification page works correctly.", function () {
        create_fund_Transfer.verifyFundTransferGoBack();
    });

    it("06.12. Verify that inactive fund records can be filtered using the status dropdown.", function () {
        create_fund_Transfer.statusInactiveDropdownCheck();
    });

    it("06.13. Verify that active fund records are filtered correctly using the status dropdown.", function () {
        create_fund_Transfer.statusActiveDropdownCheck();
    });

    it("06.14. Verify that search functionality returns correct results when searching by fund name.", function () {
        create_fund_Transfer.searchName();
    });

    it("06.15. Verify that the Reset button clears all filters and resets the fund list grid.", function () {
        create_fund_Transfer.gridResetButtonCheck();
    });

    it("06.16. Verify that the Refresh button reloads the fund list grid successfully.", function () {
        create_fund_Transfer.gridRefreshButtonCheck();
    });

    it("06.17. Verify that clicking the Search button redirects and displays filtered results on the fund list page.", function () {
        create_fund_Transfer.gridSearchButtonCheck();
    });

    it("06.18. Verify that the Reset button on the fund creation form clears all input fields.", function () {
        create_fund_Transfer.createResetButtonCheck();
    });

    it("06.19. Verify that validation messages are displayed for required fields when submitting an empty form.", function () {
        create_fund_Transfer.createValidationMessageCheck();
    });

    it("06.20. Verify that the Go Back button from the fund creation page redirects to the fund list page.", function () {
        create_fund_Transfer.createGoBackButtonCheck();
    });

    it("06.21. Verify that the fund list grid content updates correctly when switching language from English to Bangla.", function () {
        create_fund_Transfer.gridLanguageSwitchCheck();
    });

});
