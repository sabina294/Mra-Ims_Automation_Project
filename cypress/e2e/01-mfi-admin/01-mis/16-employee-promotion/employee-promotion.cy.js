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

    it("16.03. Verify that the Search button displays the filtered Employee Promotion records correctly.", function () {
        grid_employee_promotion.promotionSubmitButton();
    });

    it("16.04. Verify the validation message when creating an Employee Promotion without selecting an Effective Date.", function () {
        grid_employee_promotion.createEmployeePromotionWithoutEffectiveDate();
    });

    it("16.05. Verify the validation message when creating an Employee Promotion without selecting a Department.", function () {
        grid_employee_promotion.createEmployeePromotionWithoutDepartment();
    });

    it("16.06. Verify the validation message when creating an Employee Promotion without selecting a Designation.", function () {
        grid_employee_promotion.createEmployeePromotionWithoutDesignation();
    });

    it("16.07. Verify that clicking the Go Back button redirects the user to the Employee Promotion List page.", function () {
        grid_employee_promotion.promotionGoBackButton();
    });

    it("16.08. Verify that a new Employee Promotion is created successfully with valid data.", function () {
        grid_employee_promotion.createEmployeePromotion();
    });

    it("16.09. Verify that the newly created Employee Promotion record appears in the My Tasks list.", function () {
        grid_employee_promotion.myTaskMenuEmployeePromotion();
    });

    it("16.10. Verify that the Reset button clears all applied filters on the My Tasks page.", function () {
        grid_employee_promotion.myTaskResetButtonCheck();
    });

    it("16.11. Verify that the Refresh button reloads the My Tasks list successfully.", function () {
        grid_employee_promotion.myTaskRefreshButtonCheck();
    });

    it("16.12. Verify that the Status filter displays office dropdown Employee Promotion records correctly in My Tasks.", function () {
        grid_employee_promotion.myTaskOfficeDropdownCheck();
    });

    it("16.13. Verify that the newly created Employee Promotion can be approved successfully.", function () {
        grid_employee_promotion.approveNewEmployeePromotion();
    });

    it("16.14. Verify that the Office filter displays office dropdown Employee Promotion records correctly in grid list.", function () {
        grid_employee_promotion.gridOfficeDropdownCheck();
    });

    it("16.15. Verify that the Search function displays the correct results when searching by Employee Name.", function () {
        grid_employee_promotion.searchInEmployeeName();
    });

    it("16.16. Verify that clicking the Reset button clears all applied grid filters.", function () {
        grid_employee_promotion.gridResetButtonCheck();
    });

    it("16.17. Verify that clicking the Refresh button reloads the Employee Promotion grid successfully.", function () {
        grid_employee_promotion.gridRefreshButtonCheck();
    });

    it("16.18. Verify that the Search button displays the correct records on the Employee Promotion grid.", function () {
        grid_employee_promotion.gridSearchButtonCheck();
    });

    it("16.19. Verify that draft Employee Promotion records are displayed when the Draft filter is enabled.", function () {
        grid_employee_promotion.gridDraftButton();
    });

    it("16.20. Verify that draft Employee Promotion records are hidden when the Draft filter is disabled.", function () {
        grid_employee_promotion.gridDraftButtonOff();
    });

    it("16.21. Verify that the Employee Promotion grid is displayed correctly after switching the language from English to Bangla.", function () {
        grid_employee_promotion.gridLanguageSwitchCheck();
    });
});
