// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/22-samity-day-change/samity-day-change.cy.js --browser chrome --headed

import "cypress-file-upload";
import { samity_day_change } from "./samity-day-change.po";

describe("22. Samity Day Change Module Test Cases", function () {
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
  it("22.01. Verify Samity Day Change list page loads successfully", function () {
    samity_day_change.gridSamityChangeListPage();
  });

  it("22.02. Verify Create a new Samity Day Change with valid information", function () {
    samity_day_change.samityDayChange();
  });

  it("22.03. Verify Approve Samity Day Change successfully after creation", function () {
    samity_day_change.approveSamityDayChange();
  });

  it("22.04. Verify Action button performs expected operation successfully", function () {
    samity_day_change.actionButtonCheck();
  });

  it("22.05. Verify View Samity Day Change details including name and description", function () {
    samity_day_change.viewSamityDayChange();
  });

  it("22.06. Verify Go Back button redirects to Samity Day Change list page from view page", function () {
    samity_day_change.viewGoBackButton();
  });

  it("22.07. Verify Reset button clears filters and form data successfully", function () {
    samity_day_change.dayChangeResetButtonCheck();
  });

  it("22.08. Verify Submit button works correctly on Samity Day Change page", function () {
    samity_day_change.dayChangeSubmitButtonCheck();
  });

  it("22.09. Verify Approve button works correctly on Samity Day Change page", function () {
    samity_day_change.dayChangeApproveButtonCheck();
  });

  it("22.10. Verify Go Back button navigates correctly on Samity Day Change page", function () {
    samity_day_change.dayChangeGoBackButtonCheck();
  });

  it("22.11. Verify Filter inactive records using Status dropdown on list page", function () {
    samity_day_change.statusInactiveDropdownCheck();
  });

  it("22.12. Verify Filter active records using Status dropdown on list page", function () {
    samity_day_change.statusActiveDropdownCheck();
  });

  it("22.13. Verify Search results are displayed correctly by Samity Day Change name", function () {
    samity_day_change.searchInSamityDayChangeName();
  });

  it("22.14. Verify Reset grid list successfully using Reset button", function () {
    samity_day_change.gridResetButtonCheck();
  });

  it("22.15. Verify Refresh grid list successfully using Refresh button", function () {
    samity_day_change.gridRefreshButtonCheck();
  });

  it("22.16. Verify Search button redirects to Samity Day Change list page successfully", function () {
    samity_day_change.gridSearchButtonCheck();
  });

  it("22.17. Verify Display Draft records when Draft filter is enabled", function () {
    samity_day_change.gridDraftButton();
  });

  it("22.18. Verify Hide Draft records when Draft filter is disabled", function () {
    samity_day_change.gridDraftButtonOff();
  });

  it("22.19. Verify Grid updates correctly when switching language from English to Bangla", function () {
    samity_day_change.gridLanguageSwitchCheck();
  });
});
