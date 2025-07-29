class MemberSamityTransfer {
  test_data = Cypress.env("TEST_DATA");

  gridMemberSamityTransferListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-member", "submenu-member-samity-transfer");
      cy.log("Successfully member samity transfer list page.");
    });
  }

  viewMemberSamityTransfer() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successfully viewed the member samity transfer list page");
  }

  newSamityTransfer() {
    cy.fixture(this.test_data).then((data) => {
      var mstData = data.branchManager.memberSamityTransferFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-mis-table-action-transfer").click();
      cy.formController("new_samity_id")
        .type(mstData.newSamityTransfer)
        .type("{enter}");
      cy.imsId("btn-submit").click();

      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(mstData.messagesamityTransfer)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully member samity transfer");
    });
  }
  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var mstData = data.branchManager.memberSamityTransferFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(mstData.selectStatus).type("{enter}");
      cy.log(
        "samity field officer change status inactive dropdown check successfully"
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var mstData = data.branchManager.memberSamityTransferFrom;
      cy.formController("status").type(mstData.statusSelect).type("{enter}");
      cy.log(
        "samity field officer change status active dropdown check successfully"
      );
    });
  }
  searchInMemberSamityTransferName() {
    cy.fixture(this.test_data).then((data) => {
      var mstData = data.branchManager.memberSamityTransferFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(mstData.memberNameEn);
      cy.log("Successfully search in the Samity field officer change");
    });
  }
 
  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }
  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the samity field officer change "
    );
  }

  gridDraftButton() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  gridDraftButtonOff() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const member_samity_transfer = new MemberSamityTransfer();
