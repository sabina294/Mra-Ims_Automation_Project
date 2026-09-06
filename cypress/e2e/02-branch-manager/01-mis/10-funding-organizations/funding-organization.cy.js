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

  it("10.15. Verify the Funding Organizations list breadcrumb.", function () {
    grid_funding_organization.listBreadcrumbCheck();
  });

  it("10.16. Verify the required Funding Organizations grid columns.", function () {
    grid_funding_organization.requiredGridColumnsCheck();
  });

  it("10.17. Verify valid Funding Organization grid row data.", function () {
    grid_funding_organization.gridRecordDataCheck();
  });

  it("10.18. Verify exact Funding Organization name search.", function () {
    grid_funding_organization.exactNameSearchCheck();
  });

  it("10.19. Verify partial Funding Organization name search.", function () {
    grid_funding_organization.partialNameSearchCheck();
  });

  it("10.20. Verify non-existing Funding Organization search shows no records.", function () {
    grid_funding_organization.noResultSearchCheck();
  });

  it("10.21. Verify Reset restores the Funding Organizations grid.", function () {
    grid_funding_organization.resetRestoresGridCheck();
  });

  it("10.22. Verify Active filter results.", function () {
    grid_funding_organization.activeStatusResultCheck();
  });

  it("10.23. Verify Funding Organization Name ascending sorting.", function () {
    grid_funding_organization.nameAscendingSortCheck();
  });

  it("10.24. Verify Funding Organization Name descending sorting.", function () {
    grid_funding_organization.nameDescendingSortCheck();
  });

  it("10.25. Verify Funding Organizations first-page pagination state.", function () {
    grid_funding_organization.firstPagePaginationCheck();
  });

  it("10.26. Verify Funding Organization View breadcrumb and grid-to-view data.", function () {
    grid_funding_organization.viewPageDataAndBreadcrumbCheck();
  });

  it("10.27. Verify Funding Organization Edit Mode fields and Reset behavior.", function () {
    grid_funding_organization.editModeFieldsAndResetCheck();
  });

  it("10.28. Verify that switching language correctly updates the grid content from English to Bangla.", function () {
    grid_funding_organization.gridLanguageSwitchCheck();
  });
});
