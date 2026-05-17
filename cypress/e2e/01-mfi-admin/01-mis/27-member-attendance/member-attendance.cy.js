
// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/27-member-attendance/member-attendance.cy.js --browser chrome --headed

import "cypress-file-upload";
import { member_attendance } from "./member-attendance.po";

describe("27. Member Attendance Module Test Cases", function () {
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

    it("27.01. Verify that the Member Attendance Grid List page loads successfully.", function () {
        member_attendance.gridMemberAttendanceListPage();
    });

    it("27.02. Verify that the action button performs the expected behavior when clicked.", function () {
        member_attendance.actionButtonCheck();
    });

    it("27.03. Verify successful search results by Member Attendance name.", function () {
        member_attendance.searchInMemberAttendanceName();
    });

    it('27.04. Verify the functionality and expected behavior of the "Office Status" dropdown.', function () {
        member_attendance.statusOfficeDropdownCheck();
    });

    it("27.05. Verify that the Reset button successfully clears the filters and resets the Member Attendance grid list.", function () {
        member_attendance.gridResetButtonCheck();
    });

    it("27.06. Verify that clicking the Search button on the Member Attendance grid page correctly loads the filtered list.", function () {
        member_attendance.gridSearchButtonCheck();
    });

    it("27.07. Verify that the Refresh button successfully reloads the Member Attendance grid list.", function () {
        member_attendance.gridRefreshButtonCheck();
    });

    it("27.08. Verify that the grid list content correctly switches between English and Bangla languages.", function () {
        member_attendance.gridLanguageSwitchCheck();
    });
});
