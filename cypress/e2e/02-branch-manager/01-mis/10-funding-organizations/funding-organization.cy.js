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

  it("10.01. Verify the funding organization list page loads without errors.", function () {
    grid_funding_organization.gridFundingOrganizationListPage();
  });

  it("10.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_funding_organization.actionButtonCheck();
  });

  it("10.03. Verify the user can view all relevant details of a funding organization, including its associated fields.", function () {
    grid_funding_organization.viewFundingOrganization();
  });

  it("10.04. Verify that clicking the go back button on the funding organization view page redirects the user to the funding organization list page.", function () {
    grid_funding_organization.viewGoBackButton();
  });

  it("10.05. Verify that the funding organizations forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    grid_funding_organization.turnOnEditMode();
  });

  it("10.06. Verify the funding organizations edit reset button functions correctly.", function () {
    grid_funding_organization.editResetButton();
  });

  it("10.07. Verify the funding organizations edit submit button functions correctly.", function () {
    grid_funding_organization.editSubmitButton();
  });

  it("10.08. Verify that clicking the go back button on the funding organizations edit page redirects the user to the funding organizations list page.", function () {
    grid_funding_organization.editGoBackButton();
  });

  it("10.09. Verify the user can filter inactive funding organizations using the status dropdown on the funding organization list page.", function () {
    grid_funding_organization.statusInactiveDropdownCheck();
  });

  it("10.10. Verify the active result is filtered correctly by the status dropdown.", function () {
    grid_funding_organization.statusActiveDropdownCheck();
  });

  it("10.11. Verify the search returns correct results when searching by funding organization name.", function () {
    grid_funding_organization.searchInFundingOrganizationName();
  });

  it("10.12. Verify the grid list resets successfully when the reset button is clicked on the funding organization page.", function () {
    grid_funding_organization.gridResetButtonCheck();
  });

  it("10.13. Verify that the grid list is refreshed successfully when the refresh button is clicked on the funding organization page.", function () {
    grid_funding_organization.gridRefreshButtonCheck();
  });

  it("10.14. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_funding_organization.gridLanguageSwitchCheck();
  });
});
