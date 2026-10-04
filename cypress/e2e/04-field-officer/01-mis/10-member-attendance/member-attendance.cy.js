
// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/10-member-attendance/member-attendance.cy.js --browser chrome --headed

import "cypress-file-upload";
import { member_attendance } from "./member-attendance.po";

describe("10. Member Attendance Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.fieldOfficerUserId,
        d.credential.fieldOfficerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("10.01. Verify that the Member Attendance Grid List page loads successfully.", function () {
    member_attendance.gridMemberAttendanceListPage();
  });

  it("10.02. Verify that the Reset button successfully clears the Member Attendance grid filters.", function () {
    member_attendance.gridResetButtonCheck();
  });

  it("10.03. Verify that the Refresh button successfully reloads the Member Attendance grid data.", function () {
    member_attendance.gridRefreshButtonCheck();
  });

  it("10.04. Verify that clicking the Search button redirects to the Member Attendance List page.", function () {
    member_attendance.gridSearchButtonCheck();
  });

  it("10.05. Verify Member Attendance: the list displays the correct breadcrumb.", function () {
    member_attendance.listBreadcrumbCheck();
  });

  it("10.06. Verify Member Attendance: the grid displays all required columns.", function () {
    member_attendance.requiredGridColumnsCheck();
  });

  it("10.07. Verify Member Attendance: displayed records contain serial numbers and samity identifiers/names.", function () {
    member_attendance.gridRecordDataCheck();
  });

  it("10.08. Verify Member Attendance: office, field officer and search controls are visible.", function () {
    member_attendance.searchControlsCheck();
  });

  it("10.09. Verify Member Attendance: searching an existing samity name returns matching rows.", function () {
    member_attendance.samityNameSearchCheck();
  });

  it("10.10. Verify Member Attendance: a non-existing search displays No Data.", function () {
    member_attendance.noResultSearchCheck();
  });

  it("10.11. Verify Member Attendance: Reset clears an unsuccessful search and restores records.", function () {
    member_attendance.resetRestoresGridCheck();
  });

  it("10.12. Verify Member Attendance: pagination starts on the first page.", function () {
    member_attendance.firstPagePaginationCheck();
  });

  it("10.13. Verify that the grid content correctly switches between English and Bangla languages.", function () {
    member_attendance.gridLanguageSwitchCheck();
  });
});
