// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/10-funding-organizations/funding-organization.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_funding_organization } from "./funding-organization.po";

describe("10. Funding Organization Module Test Cases", function () {
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

  it("10.01. Verify that the funding organization list page loads successfully without any errors.", function () {
    create_funding_organization.gridFundingOrganizationListPage();
  });

  it("10.02. Verify that a new funding organization is created successfully when all required fields are filled with valid data.", function () {
    create_funding_organization.createFundingOrganization();
  });

  it("10.03. Verify that a funding organization cannot be created without entering a funding organization name, even when all other fields contain valid data.", function () {
    create_funding_organization.createWithoutFundingOrgName();
  });

  it("10.04. Verify that a funding organization cannot be created without entering an ID, even when all other fields contain valid data.", function () {
    create_funding_organization.createWithoutId();
  });

  it("10.05. Verify that a funding organization cannot be created without selecting a funding organization type, even when all other fields contain valid data.", function () {
    create_funding_organization.createWithoutFundingOrgType();
  });

  it("10.06. Verify that a funding organization cannot be created without selecting a status, even when all other fields contain valid data.", function () {
    create_funding_organization.createWithoutStatus();
  });

  it("10.07. Verify that the action button performs the expected action successfully when clicked.", function () {
    create_funding_organization.actionButtonCheck();
  });

  it("10.08. Verify that the user can view all relevant details of a funding organization, including its associated information.", function () {
    create_funding_organization.viewFundingOrganization();
  });

  it("10.09. Verify that clicking the Go Back button on the funding organization view page redirects the user to the funding organization list page.", function () {
    create_funding_organization.viewGoBackButton();
  });

  it("10.10. Verify that edit mode on the funding organization form can be toggled on and off, and all fields return to view-only mode when disabled.", function () {
    create_funding_organization.turnOffEditMode();
  });

  it("10.11. Verify that the funding organization name and description can be edited successfully.", function () {
    create_funding_organization.editFundingOrganization();
  });

  it("10.12. Verify that the Reset button on the funding organization edit page clears all modified values correctly.", function () {
    create_funding_organization.editResetButton();
  });

  it("10.13. Verify that the Submit button on the funding organization edit page updates the data successfully.", function () {
    create_funding_organization.editSubmitButton();
  });

  it("10.14. Verify that clicking the Go Back button on the funding organization edit page redirects the user to the funding organization list page.", function () {
    create_funding_organization.editGoBackButton();
  });

  it("10.15. Verify that inactive funding organizations can be filtered correctly using the status dropdown on the funding organization list page.", function () {
    create_funding_organization.statusInactiveDropdownCheck();
  });

  it("10.16. Verify that active funding organizations are filtered correctly using the status dropdown on the funding organization list page.", function () {
    create_funding_organization.statusActiveDropdownCheck();
  });

  it("10.17. Verify that the search functionality returns correct results when searching by funding organization name.", function () {
    create_funding_organization.searchInFundingOrganizationName();
  });

  it("10.18. Verify that the grid list is reset successfully when the Reset button is clicked on the funding organization page.", function () {
    create_funding_organization.gridResetButtonCheck();
  });

  it("10.19. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the funding organization page.", function () {
    create_funding_organization.gridRefreshButtonCheck();
  });

  it("10.20. Verify that the Reset button on the funding organization creation page clears all entered input values.", function () {
    create_funding_organization.createResetButtonCheck();
  });

  it("10.21. Verify that validation messages are displayed for all required fields when the Submit button is clicked with empty inputs.", function () {
    create_funding_organization.createValidationMessageCheck();
  });

  it("10.22. Verify that clicking the Go Back button on the funding organization creation page redirects the user to the funding organization list page.", function () {
    create_funding_organization.createGoBackButtonCheck();
  });

  it("10.23. Verify that clicking the Search button on the funding organization grid page displays the correct filtered results.", function () {
    create_funding_organization.gridSearchButtonCheck();
  });

  it("10.24. Verify that the grid list content updates correctly when switching the language from English to Bangla.", function () {
    create_funding_organization.gridLanguageSwitchCheck();
  });
});
