// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mfi-admin/12-office-management/office-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_office_management } from "./office-management.po";

describe("12. Office Management Module Test Cases", function () {
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

  it("12.01. Verify the office management list page loads without errors.", function () {
    create_office_management.gridOfficeManagementListPage();
  });

  it("12.02. Verify a new office management is created successfully when all required fields are filled with valid data.", function () {
    create_office_management.createOffice();
  });

  //   it("12.03. Verify mra-admin to successfully approve an office management record after creation..", function () {
  //     cy.fixture(test_data).then((d) => {
  //       cy.loginAsMraAdmin(baseURL, d);
  //       create_office_management.approveOffice();
  //     });
  //   });

  it("12.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_office_management.actionButtonCheck();
  });

//   it("12.05. Verify the user can view all relevant details of a office management, including its associated fields.", function () {
//     create_office_management.viewOffice();
//   });

//   it("12.06. Verify that the office management forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
//     create_office_management.turnOffEditMode();
//   });

  it("12.07. Verify the user can filter inactive office managements using the status dropdown on the office management list page.", function () {
    create_office_management.statusInactiveDropdownCheck();
  });

  it("12.08. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_office_management.statusActiveDropdownCheck();
  });

  it("12.09. Verify the search returns correct results when searching by office management name.", function () {
    create_office_management.searchInOfficeManagementName();
  });

  it("12.10. Verify the grid list resets successfully when the reset button is clicked on the office management page.", function () {
    create_office_management.gridResetButtonCheck();
  });

  it("12.11. Verify that the grid list is refreshed successfully when the refresh button is clicked on the office management page.", function () {
    create_office_management.gridRefreshButtonCheck();
  });

  it("12.12. Verify the office management creation reset button clears all entered input values.", function () {
    create_office_management.createResetButtonCheck();
  });

  it("12.13. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_office_management.createValidationMessageCheck();
  });

  it("12.14. Verify that clicking the go back button on the office management create page redirects the user to the office management list page.", function () {
    create_office_management.createGoBackButtonCheck();
  });

  it("12.15. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_office_management.gridLanguageSwitchCheck();
  });
});
