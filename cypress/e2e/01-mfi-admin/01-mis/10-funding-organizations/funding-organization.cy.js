// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/10-funding-organizations/funding-organization.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_funding_organization } from "./funding-organization.po";

describe("10. Funding-organizations Module Test Cases ", function () {
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

  it("10.01. Verify the funding organization list page loads without errors.", function () {
    create_funding_organization.gridFundingOrganizationListPage();
  });

  it("10.02. Verify a new funding organization is created successfully when all required fields are filled with valid data.", function () {
    create_funding_organization.createFundingOrganization();
  });

  it("10.03. Verify that a funding organization cannot be created without a funding organization name , even if all other fields are valid.", function () {
    create_funding_organization.createWitoutFundingOrgName();
  });

  it("10.04. Verify that a funding organization cannot be created without a id, even if all other fields are valid.", function () {
    create_funding_organization.createWithoutId();
  });

  it("10.05. Verify that a funding organization cannot be created without a funding organization type, even if all other fields are valid.", function () {
    create_funding_organization.createWithoutFundingOrgType();
  });

  it("10.06. Verify that a funding organization cannot be created without a status, even if all other fields are valid.", function () {
    create_funding_organization.createWithoutStatus();
  });

  it("10.07. Verify successfully performs the action when the action button is clicked.", function () {
    create_funding_organization.actionButtonCheck();
  });

  it("10.08. Verify the user can view all relevant details of a funding organization, including its associated fields.", function () {
    create_funding_organization.viewFundingOrganization();
  });

  it("10.09. Verify that clicking the go back button on the funding organization view page redirects the user to the funding organization list page.", function () {
    create_funding_organization.viewGoBackButton();
  });

  it("10.10. Verify that the funding organization forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_funding_organization.turnOffEditMode();
  });

  it("10.11. Verify the funding organization name and description can be edited successfully.", function () {
    create_funding_organization.editFundingOrganization();
  });

  it("10.12. Verify the funding organization edit reset button functions correctly.", function () {
    create_funding_organization.editResetButton();
  });

  it("10.13. Verify the funding organization edit submit button functions correctly.", function () {
    create_funding_organization.editSubmitButton();
  });

  it("10.14. Verify that clicking the go back button on the funding organization edit page redirects the user to the funding organization list page.", function () {
    create_funding_organization.editGoBackButton();
  });

  it("10.15. Verify the user can filter inactive funding organizations using the status dropdown on the funding organization list page.", function () {
    create_funding_organization.statusInactiveDropdownCheck();
  });

  it("10.16. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_funding_organization.statusActiveDropdownCheck();
  });

  it("10.17. Verify the search returns correct results when searching by funding organization name.", function () {
    create_funding_organization.searchInFundingOrganizationName();
  });

  it("10.18. Verify the grid list resets successfully when the reset button is clicked on the funding organization page.", function () {
    create_funding_organization.gridResetButtonCheck();
  });

  it("10.19. Verify that the grid list is refreshed successfully when the refresh button is clicked on the funding organization page.", function () {
    create_funding_organization.gridRefreshButtonCheck();
  });

  it("10.20. Verify the funding organization creation reset button clears all entered input values.", function () {
    create_funding_organization.createResetButtonCheck();
  });

  it("10.21. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_funding_organization.createValidationMessageCheck();
  });

  it("10.22. Verify that clicking the go back button on the funding organization create page redirects the user to the funding organization list page.", function () {
    create_funding_organization.createGoBackButtonCheck();
  });

  it("10.23. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_funding_organization.gridLanguageSwitchCheck();
  });
});
