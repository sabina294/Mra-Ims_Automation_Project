class MemberPassbook {
  test_data = Cypress.env("TEST_DATA");

  gridMemberPassbookListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-member", "submenu-manage-member-pass-book");
      cy.log("Successfully member passbook list page.");
    });
  }

  detailsListMemberPassbook() {
    cy.fixture(this.test_data).then((data) => {
      var mmptData = data.fieldOfficer.memberPassbookFrom;
      cy.formController("samity_id").type(mmptData.samity).type("{enter}");
      cy.formController("member_id").type(mmptData.member).type("{enter}");
      cy.formController("account_no").type(mmptData.account).type("{enter}");
      cy.wait(3000);

      cy.log("Successfully member passbook details list");
    });
  }

  gridLanguageSwitchCheck() {
      cy.imsId("profile-menu").click();
      cy.imsId("btn-lang-bangla").click();
      cy.log("Successful switch bangla language check.");
  }
}

export const manage_member_passbook = new MemberPassbook();
