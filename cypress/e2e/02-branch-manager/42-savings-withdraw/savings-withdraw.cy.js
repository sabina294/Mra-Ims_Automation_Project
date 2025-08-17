// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/42-savings-withdraw/savings-withdraw.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_savings_withdraw } from "./savings-withdraw.po";

describe("42. Savings Withdraw Module Test Cases", function () {
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

    it("42.01. Verify load the Savings Withdraw list page successfully.", function () {
        create_savings_withdraw.gridSavingsWithdrawListPage();
    });

    // it("42.02. Verify a new Savings Withdraw record is created successfully when all required fields are filled with valid data.", function () {
    //     create_savings_withdraw.createNewWithdraw();
    // });

    it("42.03. Verify perform the correct action when the Action button is clicked.", function () {
        create_savings_withdraw.actionButtonCheck();
    });

    it("42.04. Verify display Savings Withdraw details including name and description successfully.", function () {
        create_savings_withdraw.viewSpecialCollection();
    });

    it("42.05. Verify allow editing of an existing Savings Withdraw successfully.", function () {
        create_savings_withdraw.editSpecialCollection();
    });

    it("42.06. Verify reset the grid list successfully when the Reset button is clicked on the Savings Withdraw page.", function () {
        create_savings_withdraw.gridResetButtonCheck();
    });

    it("42.07. Verify create a new Savings Withdraw record successfully when all required fields are filled with valid data.", function () {
        create_savings_withdraw.gridRefreshButtonCheck();
    });

});
