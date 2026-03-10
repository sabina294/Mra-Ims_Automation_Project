// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/16-employee-promotion/employee-promotion.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_employee_promotion } from "./employee-promotion.po";

describe("16. Employee Promotion Module Test Cases", function () {
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

    it("16.01. Verify the employee promotion list page loads correctly.", function () {
        grid_employee_promotion.gridEmployeePromotionListPage();
    });

    it("16.02. Verify the employee promotion reset button functions correctly.", function () {
        grid_employee_promotion.promotionResetButton();
    });

    it("16.03. Verify the employee promotion submit button functions correctly.", function () {
        grid_employee_promotion.promotionSubmitButton();
    });

    it("16.04. Verify a new employee promotion is created successfully when all required fields are filled with valid data.", function () {
        grid_employee_promotion.createEmployeePromotionWithoutEffectiveDate();
    });

    it("16.05. Verify a new employee promotion is created successfully when all required fields are filled with valid data.", function () {
        grid_employee_promotion.createEmployeePromotionWithoutDepartment();
    });

    it("16.06. Verify a new employee promotion is created successfully when all required fields are filled with valid data.", function () {
        grid_employee_promotion.createEmployeePromotionWithoutDesignation();
    });

    it("16.07. Verify that clicking the go back button on the employee promotion page redirects the user to the employee promotion list page.", function () {
        grid_employee_promotion.promotionGoBackButton();
    });

    it("16.08. Verify a new employee promotion is created successfully when all required fields are filled with valid data.", function () {
        grid_employee_promotion.createEmployeePromotion();
    });

    it("16.09. Verify that the system successfully creates and approves a new employee promotion when all required fields are provided with valid data.", function () {
        grid_employee_promotion.approveNewEmployeePromotion();
    });

    it("16.10. Verify the user can filter inactive employee promotion records using the status dropdown on the Employee Promotion List page.", function () {
        grid_employee_promotion.statusInactiveDropdownCheck();
    });

    it("16.11. Verify check if the filter for active results works correctly with the status dropdown.", function () {
        grid_employee_promotion.statusActiveDropdownCheck();
    });

    it("16.12. Verify that the search results are displayed correctly when searching by employee promotion name.", function () {
        grid_employee_promotion.searchInEmployeeName();
    });

    it("16.13. Verify the grid list resets successfully when the reset button is clicked on the employee promotion page.", function () {
        grid_employee_promotion.gridResetButtonCheck();
    });

    it("16.14. Verify that the grid list is refreshed successfully when the refresh button is clicked on the employee promotion page.", function () {
        grid_employee_promotion.gridRefreshButtonCheck();
    });

    it("16.15. Verify display the grid list successfully when the Draft button on is clicked on the employee promotion page", function () {
        grid_employee_promotion.gridDraftButton();
    });

    it("16.16. Verify display the grid list successfully when the Draft button off is clicked on the employee promotion page", function () {
        grid_employee_promotion.gridDraftButtonOff();
    });

    it("16.17. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_employee_promotion.gridLanguageSwitchCheck();
    });
});
