// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/10-funding-organizations/funding-organization.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_funding_organization } from "./funding-organization.po";

describe("10. Funding-organizations Module Test Cases ", function () {
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

  it("10.01. Verify that the Funding Organization list page loads successfully without errors.", function () {
    grid_funding_organization.gridFundingOrganizationListPage();
  });

  it("10.02. Verify that the action button performs the expected action successfully.", function () {
    grid_funding_organization.actionButtonCheck();
  });

  it("10.03. Verify that the user can view all details of a Funding Organization, including associated fields.", function () {
    grid_funding_organization.viewFundingOrganization();
  });

  it("10.04. Verify that clicking the Go Back button on the Funding Organization view page redirects to the list page.", function () {
    grid_funding_organization.viewGoBackButton();
  });

  it("10.05. Verify that Edit mode toggle enables and disables all fields correctly in Funding Organization form.", function () {
    grid_funding_organization.turnOnEditMode();
  });

  it("10.06. Verify that the Reset button in the Funding Organization edit form works correctly.", function () {
    grid_funding_organization.editResetButton();
  });

  it("10.07. Verify that the Submit button in the Funding Organization edit form works successfully.", function () {
    grid_funding_organization.editSubmitButton();
  });

  it("10.08. Verify that clicking Go Back in the edit page redirects to the Funding Organization list page.", function () {
    grid_funding_organization.editGoBackButton();
  });

  it("10.09. Verify that inactive Funding Organizations can be filtered using the Status dropdown.", function () {
    grid_funding_organization.statusInactiveDropdownCheck();
  });

  it("10.10. Verify that active Funding Organizations are correctly filtered using the Status dropdown.", function () {
    grid_funding_organization.statusActiveDropdownCheck();
  });

  it("10.11. Verify that searching by Funding Organization name returns correct results.", function () {
    grid_funding_organization.searchInFundingOrganizationName();
  });

  it("10.12. Verify that the Reset button clears all filters and resets the grid successfully.", function () {
    grid_funding_organization.gridResetButtonCheck();
  });

  it("10.13. Verify that the Refresh button reloads the Funding Organization grid successfully.", function () {
    grid_funding_organization.gridRefreshButtonCheck();
  });

  it("10.14. Verify that clicking the Search button redirects or updates the Funding Organization list correctly.", function () {
    grid_funding_organization.gridSearchButtonCheck();
  });

  it("10.15. Verify that switching language correctly updates the grid content from English to Bangla.", function () {
    grid_funding_organization.gridLanguageSwitchCheck();
  });
});
