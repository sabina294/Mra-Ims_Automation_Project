// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/04-thana/thana.cy.js --headed

import "cypress-file-upload";
import { create_thana } from "./thana.po";

describe("04. Thana Test.", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");

  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.mraAdminUserId,
        d.credential.mraAdminPassword
      );
      cy.changeLanguage("english");
      cy.switchModule("MFI");
    });
  });

  after(() => {
    cy.logout();
  });

  it("04.01. Verify the thana list page loads without errors.", function () {
    create_thana.gridThanaListPage();
  });

  it("04.02. Verify a new thana is created successfully when all required fields are filled with valid data.", function () {
    create_thana.createThana();
  });

  it("04.03. Verify a new thana is created successfully when all fields are filled with valid data.", function () {
    create_thana.createAllField();
  });

  it("04.04. Verify that a thana cannot be created without filling in the mandatory field.", function () {
    create_thana.createWithoutOneMandatoryField();
  });

  it("04.05. Verify thana creation fails when mandatory fields are missing.", function () {
    create_thana.createWithoutMandatoryField();
  });

  it("04.06. Verify the user can view all relevant details of a thana, including its associated fields.", function () {
    create_thana.viewThana();
  });

  it("04.07. Verify the thana name and description can be edited successfully.", function () {
    create_thana.editThana();
  });

  it("04.08. Verify the user can filter inactive thanas using the status dropdown on the thana list page.", function () {
    create_thana.statusInactiveDropdownCheck();
  });

  it("04.09. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_thana.statusActiveDropdownCheck();
  });

  it("04.10. Verify the search returns correct results when searching by thana name.", function () {
    create_thana.searchInThanaName();
  });

  it("04.11. Verify the grid list resets successfully when the reset button is clicked on the thana page.", function () {
    create_thana.gridResetButtonCheck();
  });

  it("04.12. Verify that the grid list is refreshed successfully when the refresh button is clicked on the thana page.", function () {
    create_thana.gridRefreshButtonCheck();
  });

  it("04.14. Verify pagination functions as expected on the last page of the thana list.", function () {
    create_thana.paginationCheck();
  });

  it("04.14. Verify the thana creation reset button clears all entered input values.", function () {
    create_thana.createResetButtonCheck();
  });

  it("04.15. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_thana.createValidationMessageCheck();
  });

  it("04.16. Verify that clicking the go back button on the thana create page redirects the user to the thana list page.", function () {
    create_thana.createGoBackButtonCheck();
  });

  it("04.17. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_thana.gridLanguageSwitchCheck();
  });
});
