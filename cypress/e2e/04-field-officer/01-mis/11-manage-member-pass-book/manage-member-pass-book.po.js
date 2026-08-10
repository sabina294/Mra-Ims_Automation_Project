import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class MemberPassbook {
  test_data = Cypress.env("TEST_DATA");

  gridMemberPassbookListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-member", "submenu-manage-member-pass-book");
      cy.log(messages.ui.gridListMessage);
    });
  }

  detailsListMemberPassbook() {
    cy.fixture(this.test_data).then((data) => {
      const mmptData = data.fieldOfficer.memberPassbookFrom;
      cy.formController("samity_id").type(mmptData.samity).type("{enter}");
      cy.formController("member_id").type(mmptData.member).type("{enter}");
      cy.formController("account_no").type(mmptData.account).type("{enter}");
      cy.wait(3000);

      cy.log("Successfully member passbook details list");
    });
  }

  gridLanguageSwitchCheck() {
      cy.imsId(COMMON.BUTTONS.PROFILE).click();
      cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
      cy.log(messages.ui.languageSwitchMessage);
  }
}

export const manage_member_passbook = new MemberPassbook();
