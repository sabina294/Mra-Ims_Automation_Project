// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/02-ais/06-fund/fund.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_fund_Transfer } from "./fund.po";

describe("06 Fund Module Test Cases", function () {
    const baseURL = Cypress.env("BASE_URL");
    const test_data = Cypress.env("TEST_DATA");
    before(() => {
        cy.fixture(test_data).then((d) => {
            cy.login(
                baseURL,
                d.credential.mfiAdminUserId,
                d.credential.mfiAdminPassword
            );
            cy.changeLanguage("english");
            cy.switchModule("AIS");

        });
    });

    after(() => {
        cy.logout();
    });

    it("06.01. Verify that the Fund List page loads successfully.", function () {
        create_fund_Transfer.gridfundListPage();
    });

    it("06.02. Verify that a fund is created successfully when all required fields are populated with valid data.", function () {
        create_fund_Transfer.createfund();
    });

    it("06.03. Verify that the action is performed successfully when the Action button is clicked.", function () {
        create_fund_Transfer.actionButtonCheck();
    });

    it("06.04. Verify that inactive fund records can be filtered successfully using the Status dropdown.", function () {
        create_fund_Transfer.statusInactiveDropdownCheck();
    });

    it("06.05. Verify that active fund records are filtered correctly using the Status dropdown.", function () {
        create_fund_Transfer.statusActiveDropdownCheck();
    });

    it("06.06. Verify that the search returns the correct result when searching by fund name.", function () {
        create_fund_Transfer.searchName();
    });

    it("06.07. Verify that the grid list is reset successfully when the Reset button is clicked.", function () {
        create_fund_Transfer.gridResetButtonCheck();
    });

    it("06.08. Verify that the grid list is refreshed successfully when the Refresh button is clicked.", function () {
        create_fund_Transfer.gridRefreshButtonCheck();
    });

    it("06.09. Verify that a fund cannot be created without selecting a Recipient Office ID, even when all other required fields contain valid data.", function () {
        create_fund_Transfer.createwithoutRecipientOfficeID();
    });

    it("06.10. Verify that a fund cannot be created without entering a Transaction Amount, even when all other required fields contain valid data.", function () {
        create_fund_Transfer.createwithoutTransactionAmount();
    });

    it("06.11. Verify that a fund cannot be created without selecting a Sender Payment Mode, even when all other required fields contain valid data.", function () {
        create_fund_Transfer.createwithoutSenderPaymentMode();
    });

    it("06.12. Verify that a fund cannot be created without selecting a Recipient Received Mode, even when all other required fields contain valid data.", function () {
        create_fund_Transfer.createwithoutRecipientReceivedMode();
    });

    it("06.13. Verify that a fund cannot be created without entering Remarks, even when all other required fields contain valid data.", function () {
        create_fund_Transfer.createwithoutRemarks();
    });

    it("06.14. Verify that the Reset button clears all entered values on the Fund Create page.", function () {
        create_fund_Transfer.createResetButtonCheck();
    });

    it("06.15. Verify that validation messages are displayed for all required fields when the Submit button is clicked without entering any data.", function () {
        create_fund_Transfer.createValidationMessageCheck();
    });

    it("06.16. Verify that clicking the Go Back button on the Fund Create page redirects the user to the Fund List page.", function () {
        create_fund_Transfer.createGoBackButtonCheck();
    });

    it("06.17. Verify that clicking the Search button on the Fund Grid page redirects the user to the Fund List page.", function () {
        create_fund_Transfer.gridSearchButtonCheck();
    });

    it("06.18. Verify that the grid list content is displayed correctly after switching the language from English to Bangla.", function () {
        create_fund_Transfer.gridLanguageSwitchCheck();
    });

});
