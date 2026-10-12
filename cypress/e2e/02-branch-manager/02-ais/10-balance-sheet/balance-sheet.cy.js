// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/02-ais/10-balance-sheet/balance-sheet.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_balance_sheet } from "./balance-sheet.po";

describe("10. Balance Sheet Module Test Cases", function () {
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

    it("10.01. Verify the balance sheet list page loads correctly.", function () {
        create_balance_sheet.gridBalanceSheetListPage();
    });

    it("10.02. Verify that the grid list is refreshed successfully when the refresh button is clicked on the balance sheet page.", function () {
        create_balance_sheet.gridRefreshButtonCheck();
    });

    it("10.03. Verify that the breadcrumb displays Home, Financial Statement and Balance Sheet.", function () {
        create_balance_sheet.breadcrumbCheck();
    });

    it("10.04. Verify that ledger tables display Code, Name and Amount columns.", function () {
        create_balance_sheet.ledgerColumnsCheck();
    });

    it("10.05. Verify that asset sections display Liquid Assets, Current Assets and Receivables.", function () {
        create_balance_sheet.assetSectionsCheck();
    });

    it("10.06. Verify that ledger rows display a numeric code, name and numeric amount.", function () {
        create_balance_sheet.ledgerDataCheck();
    });

    it("10.07. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_balance_sheet.gridLanguageSwitchCheck();
    });

    it("10.08. Verify that clicking the go back button on the Balance Sheet grid page redirects the user to the Balance Sheet list page.", function () {
        create_balance_sheet.gridGoBackButtonCheck();
    });


});
