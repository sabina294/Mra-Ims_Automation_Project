// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mfi-admin/16-rejected-samity/rejected-samity.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_rejected_samity } from "./rejected-samity.po";

describe("16. Rejected Samity Module Test Cases", function () {
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

  it("16.01. Verify a new rejected samity record is created successfully when all required fields are filled with valid data.", function () {
    create_rejected_samity.createRejectSamity();
  });

  it("16.02. Verify mfi-admin to successfully approve an rejected samity record after creation.", function () {
    create_rejected_samity.approveRejectedSamity();
  });

  it("16.03. Verify the rejected samity list page loads correctly.", function () {
    create_rejected_samity.gridRejectedSamityListPage();
  });

  it("16.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_rejected_samity.actionButtonCheck();
  });

  it("16.05. Verify the user can successfully view the rejected samity information, including the name and description.", function () {
    create_rejected_samity.viewRejectedSamity();
  });

  it("16.06. Verify the rejected samity edit reset button functions correctly.", function () {
    create_rejected_samity.editResetButton();
  });

  it("16.07. Verify that clicking the go back button on the rejected samity edit page redirects the user to the rejected samity list page.", function () {
    create_rejected_samity.editGoBackButton();
  });

  it("16.08. Verify that the search results are displayed correctly when searching by rejected samity name.", function () {
    create_rejected_samity.searchInRejectSamityName();
  });

  it("16.09. Verify the grid list resets successfully when the reset button is clicked on the rejected samity page.", function () {
    create_rejected_samity.gridResetButtonCheck();
  });

  it("16.10. Verify that the grid list is refreshed successfully when the refresh button is clicked on the rejected samity page.", function () {
    create_rejected_samity.gridRefreshButtonCheck();
  });

  it("16.11. Verify check that the rejected samity  office selection works correctly from the dropdown on the rejected samity list page.", function () {
    create_rejected_samity.selectofficeDropdown();
  });

  it("16.12. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_rejected_samity.gridLanguageSwitchCheck();
  });
});
