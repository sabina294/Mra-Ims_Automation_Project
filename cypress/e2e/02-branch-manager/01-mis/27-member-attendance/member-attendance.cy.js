
// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/27-member-attendance/member-attendance.cy.js --browser chrome --headed

import "cypress-file-upload";
import { member_attendance } from "./member-attendance.po";

describe("27. Member Attendance Module Test Cases", function () {
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

  it("27.01. Verify that the Member Attendance Grid List page loads successfully.", function () {
    member_attendance.gridMemberAttendanceListPage();
  });

  it("27.02. Verify that the Reset button successfully clears the Member Attendance grid filters.", function () {
    member_attendance.gridResetButtonCheck();
  });

  it("27.03. Verify that the Refresh button successfully reloads the Member Attendance grid data.", function () {
    member_attendance.gridRefreshButtonCheck();
  });

  it("27.04. Verify that clicking the Search button redirects to the Member Attendance List page.", function () {
    member_attendance.gridSearchButtonCheck();
  });

  it("27.05. Verify that the grid content correctly switches between English and Bangla languages.", function () {
    member_attendance.gridLanguageSwitchCheck();
  });
});
