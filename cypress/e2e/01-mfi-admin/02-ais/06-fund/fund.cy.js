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

    it("06.01. Verify the fund list page loads correctly.", function () {
        create_fund_Transfer.gridfundListPage();
    });

    it("06.02. Verify a fund record is created successfully when all required fields are filled with valid data.", function () {
        create_fund_Transfer.createfund();
    });

    it("06.03. Verify successfully performs the action when the action button is clicked.", function () {
        create_fund_Transfer.actionButtonCheck();
    });

    it("06.04. Verify the user can filter inactive funds using the status dropdown on the fund list page.", function () {
        create_fund_Transfer.statusInactiveDropdownCheck();
    });

    it("06.05. Verify the active result is filtered correctly by the status dropdown.", function () {
        create_fund_Transfer.statusActiveDropdownCheck();
    });

    it("06.06. Verify the search returns correct results when searching by fund name.", function () {
        create_fund_Transfer.searchName();
    });

    it("06.07. Verify the grid list resets successfully when the reset button is clicked on the fund page.", function () {
        create_fund_Transfer.gridResetButtonCheck();
    });

    it("06.08. Verify that the grid list is refreshed successfully when the refresh button is clicked on the fund page.", function () {
        create_fund_Transfer.gridRefreshButtonCheck();
    });

    it("06.09. Verify the fund creation reset button clears all entered input values.", function () {
        create_fund_Transfer.createResetButtonCheck();
    });

    it("06.10. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
        create_fund_Transfer.createValidationMessageCheck();
    });

    it("06.11. Verify that clicking the go back button on the fund create page redirects the user to the fund list page.", function () {
        create_fund_Transfer.createGoBackButtonCheck();
    });

    it("06.12. Verify that when the user clicks the Search button on the fund grid page, the system redirects to the fund List page..", function () {
        create_fund_Transfer.gridSearchButtonCheck();
    });

    it("06.13. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_fund_Transfer.gridLanguageSwitchCheck();
    });


});
