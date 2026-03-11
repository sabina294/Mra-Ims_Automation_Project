// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/20-rejected-samity/rejected-samity.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_rejected_samity } from "./rejected-samity.po";

describe("20. Rejected Samity Module Test Cases", function () {
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

  it("20.01. Verify that a new rejected samity record is created successfully when all required fields are provided with valid data.", function () {
    create_rejected_samity.createRejectSamity();
  });

  it("20.02. Verify that the MFI Admin can successfully approve a rejected samity record after it is created.", function () {
    create_rejected_samity.approveRejectedSamity();
  });

  it("20.03. Verify that the rejected samity list page loads successfully.", function () {
    create_rejected_samity.gridRejectedSamityListPage();
  });

  it("20.04. Verify that the action button performs the expected operation when clicked.", function () {
    create_rejected_samity.actionButtonCheck();
  });

  it("20.05. Verify that the user can view rejected samity details including name and description.", function () {
    create_rejected_samity.viewRejectedSamity();
  });

  it("20.06. Verify that clicking the 'Go Back' button on the rejected samity view page redirects the user to the rejected samity list page.", function () {
    create_rejected_samity.viewGoBackButton();
  });

  it("20.07. Verify that the reset button on the rejected samity edit page clears the modified data.", function () {
    create_rejected_samity.editResetButton();
  });

  it("20.08. Verify that the draft button on the rejected samity edit page saves the record as draft successfully.", function () {
    create_rejected_samity.editDraftButton();
  });

  it("20.09. Verify that the submit button on the rejected samity edit page updates the record successfully.", function () {
    create_rejected_samity.editSubmitButton();
  });

  it("20.10. Verify that clicking the 'Go Back' button on the rejected samity edit page redirects the user to the rejected samity list page.", function () {
    create_rejected_samity.editGoBackButton();
  });

  it("20.11. Verify that the correct search results are displayed when searching by rejected samity name.", function () {
    create_rejected_samity.searchInRejectSamityName();
  });

  it("20.12. Verify that the grid list resets successfully when the reset button is clicked.", function () {
    create_rejected_samity.gridResetButtonCheck();
  });

  it("20.13. Verify that the grid list refreshes successfully when the refresh button is clicked.", function () {
    create_rejected_samity.gridRefreshButtonCheck();
  });

  it("20.14. Verify that the grid list content updates correctly when switching the language from English to Bangla.", function () {
    create_rejected_samity.gridLanguageSwitchCheck();
  });
});
