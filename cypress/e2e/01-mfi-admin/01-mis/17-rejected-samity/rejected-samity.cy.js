// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/17-rejected-samity/rejected-samity.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_rejected_samity } from "./rejected-samity.po";

describe("17. Rejected Samity Module Test Cases", function () {
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

  it("17.01. Verify a new rejected samity record is created successfully when all required fields are filled with valid data.", function () {
    create_rejected_samity.createRejectSamity();
  });

  it("17.02. Verify successfully approve an rejected samity record after creation.", function () {
    create_rejected_samity.approveRejectedSamity();
  });

  it("17.03. Verify the rejected samity list page loads correctly.", function () {
    create_rejected_samity.gridRejectedSamityListPage();
  });

  it("17.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_rejected_samity.actionButtonCheck();
  });

  it("17.05. Verify the user can successfully view the rejected samity information, including the name and description.", function () {
    create_rejected_samity.viewRejectedSamity();
  });

  it("17.06. Verify that clicking the go back button on the rejected samity view page redirects the user to the rejected samity list page.", function () {
    create_rejected_samity.viewGoBackButton();
  });

  it("17.07. Verify the rejected samity edit reset button functions correctly.", function () {
    create_rejected_samity.editResetButton();
  });

  it("17.08. Verify the rejected samity edit draft button functions correctly.", function () {
    create_rejected_samity.editDraftButton();
  });

  it("17.09. Verify the rejected samity edit submit button functions correctly.", function () {
    create_rejected_samity.editSubmitButton();
  });

  it("17.10. Verify that clicking the go back button on the rejected samity edit page redirects the user to the rejected samity list page.", function () {
    create_rejected_samity.editGoBackButton();
  });

  it("17.11. Verify that the search results are displayed correctly when searching by rejected samity name.", function () {
    create_rejected_samity.searchInRejectSamityName();
  });

  it("17.12. Verify the grid list resets successfully when the reset button is clicked on the rejected samity page.", function () {
    create_rejected_samity.gridResetButtonCheck();
  });

  it("17.13. Verify that the grid list is refreshed successfully when the refresh button is clicked on the rejected samity page.", function () {
    create_rejected_samity.gridRefreshButtonCheck();
  });

  it("17.14. Verify check that the rejected samity  office selection works correctly from the dropdown on the rejected samity list page.", function () {
    create_rejected_samity.selectofficeDropdown();
  });

  it("17.15. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_rejected_samity.gridLanguageSwitchCheck();
  });
});
