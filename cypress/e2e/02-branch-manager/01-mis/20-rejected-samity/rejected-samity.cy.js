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

  it("20.01. Verify create a rejected samity record successfully when valid required data is provided", function () {
    create_rejected_samity.createRejectSamity();
  });

  it("20.02. Verify allow branch manager to approve a newly created rejected samity record", function () {
    create_rejected_samity.approveRejectedSamity();
  });

  it("20.03. Verify load the rejected samity list page successfully", function () {
    create_rejected_samity.gridRejectedSamityListPage();
  });

  it("20.04. Verify perform the expected action when action button is clicked", function () {
    create_rejected_samity.actionButtonCheck();
  });

  it("20.05. Verify display rejected samity details including name and description", function () {
    create_rejected_samity.viewRejectedSamity();
  });

  it("20.06. Verify redirect to rejected samity list page when Go Back button is clicked from view page", function () {
    create_rejected_samity.viewGoBackButton();
  });

  it("20.07. Verify reset modified data on rejected samity edit page when reset button is clicked", function () {
    create_rejected_samity.editResetButton();
  });

  it("20.08. Verify save rejected samity record as draft from edit page", function () {
    create_rejected_samity.editDraftButton();
  });

  it("20.09. Verify update rejected samity record successfully when submit button is clicked", function () {
    create_rejected_samity.editSubmitButton();
  });

  it("20.10. Verify approve rejected samity record successfully from edit page", function () {
    create_rejected_samity.editApproveButton();
  });

  it("20.11. Verify redirect to rejected samity list page when Go Back button is clicked from edit page", function () {
    create_rejected_samity.editGoBackButton();
  });

  it("20.12. Verify return correct results when searching rejected samity by name", function () {
    create_rejected_samity.searchInRejectSamityName();
  });

  it("20.13. Verify reset grid filters and results when reset button is clicked", function () {
    create_rejected_samity.gridResetButtonCheck();
  });

  it("20.14. Verify refresh grid data successfully when refresh button is clicked", function () {
    create_rejected_samity.gridRefreshButtonCheck();
  });

  it("20.15. Verify navigate to rejected samity list page when search button is clicked", function () {
    create_rejected_samity.gridSearchButtonCheck();
  });

  it("20.16. Verify update grid content correctly when language is switched from English to Bangla", function () {
    create_rejected_samity.gridLanguageSwitchCheck();
  });
});
