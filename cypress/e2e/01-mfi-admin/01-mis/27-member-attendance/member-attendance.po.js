class MemberAttendance {
    test_data = Cypress.env("TEST_DATA");

    gridMemberAttendanceListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-member", "submenu-member-attendance");
            cy.log("Successfully member attendance list page.");
        });
    }

    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log(
            "Action button clicked successfully on the member attendance list page."
        );
    }

    searchInMemberAttendanceName() {
        cy.fixture(this.test_data).then((data) => {
            var matData = data.mfiAdmin.memberAttendanceFrom;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(matData.search);
            cy.log("Successfully search in the Member Attendance field");
        });
    }
    statusOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var matData = data.mfiAdmin.memberAttendanceFrom;
            cy.formController("office_id").type(matData.SelectOffice).type("{enter}");
            cy.imsId("btn-reset").click();

            cy.log(
                "Member attendance status office dropdown check successfully"
            );
        });
    }
    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            var matData = data.mfiAdmin.memberAttendanceFrom;
            cy.formController("search_text").type(matData.search);
            cy.imsId("btn-search").click();
            cy.log("Successful search button click.");
        });
    }

    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the member attendance change "
        );
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsccessful switch bangla language check.");
    }
}

export const member_attendance = new MemberAttendance();
