// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/16-employee-promotion/employee-promotion.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_employee_promotion } from "./employee-promotion.po";

describe("16. Employee Promotion Module Test Cases", function () {
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
        });
    });

    after(() => {
        cy.logout();
    });

    it("16.01. Verify that the Employee Promotion List page loads successfully.", function () {
        grid_employee_promotion.gridEmployeePromotionListPage();
    });

    it("16.02. Verify that the Reset button clears all filter fields on the Employee Promotion List page.", function () {
        grid_employee_promotion.promotionResetButton();
    });

    it("16.03. Verify that the Submit button applies the selected filters and displays the correct results.", function () {
        grid_employee_promotion.promotionSubmitButton();
    });

    it("16.04. Verify system validation when creating an employee promotion without selecting an effective date.", function () {
        grid_employee_promotion.createEmployeePromotionWithoutEffectiveDate();
    });

    it("16.05. Verify system validation when creating an employee promotion without selecting a department.", function () {
        grid_employee_promotion.createEmployeePromotionWithoutDepartment();
    });

    it("16.06. Verify system validation when creating an employee promotion without selecting a designation.", function () {
        grid_employee_promotion.createEmployeePromotionWithoutDesignation();
    });

    it("16.07. Verify that clicking the Go Back button redirects the user to the Employee Promotion List page.", function () {
        grid_employee_promotion.promotionGoBackButton();
    });

    it("16.08. Verify that a new employee promotion is created successfully with valid input data.", function () {
        grid_employee_promotion.createEmployeePromotion();
    });

    it("16.09. Verify that a newly created employee promotion can be approved successfully with valid data.", function () {
        grid_employee_promotion.approveNewEmployeePromotion();
    });

    it("16.10. Verify that inactive employee promotion records are displayed correctly when filtering by Inactive status.", function () {
        grid_employee_promotion.statusInactiveDropdownCheck();
    });

    it("16.11. Verify that active employee promotion records are displayed correctly when filtering by Active status.", function () {
        grid_employee_promotion.statusActiveDropdownCheck();
    });

    it("16.12. Verify that search results are displayed correctly when searching by employee name.", function () {
        grid_employee_promotion.searchInEmployeeName();
    });

    it("16.13. Verify that the grid list is reset successfully when the Reset button is clicked.", function () {
        grid_employee_promotion.gridResetButtonCheck();
    });

    it("16.14. Verify that the grid list refreshes successfully when the Refresh button is clicked.", function () {
        grid_employee_promotion.gridRefreshButtonCheck();
    });

    it("16.15. Verify that clicking the Search button on the rejected employee grid redirects the user to the Rejected Employee List page.", function () {
        grid_employee_promotion.gridSearchButtonCheck();
    });

    it("16.16. Verify that draft employee promotion records are displayed when the Draft filter is enabled.", function () {
        grid_employee_promotion.gridDraftButton();
    });

    it("16.17. Verify that draft employee promotion records are hidden when the Draft filter is disabled.", function () {
        grid_employee_promotion.gridDraftButtonOff();
    });

    it("16.18. Verify that the grid content updates correctly when switching the language from English to Bangla.", function () {
        grid_employee_promotion.gridLanguageSwitchCheck();
    });
});
