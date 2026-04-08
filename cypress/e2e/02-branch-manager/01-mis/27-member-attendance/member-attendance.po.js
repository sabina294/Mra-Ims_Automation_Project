class MemberAttendance {
  test_data = Cypress.env("TEST_DATA");

  gridMemberAttendanceListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-member", "submenu-member-attendance");
      cy.log("Successfully member attendance list page.");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Member attendance "
    );
  }

    gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var maData = data.branchManager.memberAttendanceFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(maData.samity);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const member_attendance = new MemberAttendance();
