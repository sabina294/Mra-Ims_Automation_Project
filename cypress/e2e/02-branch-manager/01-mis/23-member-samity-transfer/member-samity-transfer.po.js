class MemberSamityTransfer {
  test_data = Cypress.env("TEST_DATA");

  gridMemberSamityTransferListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-member", "submenu-member-samity-transfer");
      cy.log("Successfully member samity transfer list page.");
    });
  }

    gridDraftButton() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  gridDraftButtonOff() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  viewMemberSamityTransfer() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.log("Successfully viewed the member samity transfer list page");
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the member samity transfer list page");
  }

  transferResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-mis-table-action-transfer").click();
    cy.imsId("btn-reset").click();
    cy.log("Successfully member samity transfer reset button");
  }

  transferSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successfully member samity transfer submit button");
  }

  transferApproveButton() {
    cy.imsId("btn-approve").click();
    cy.imsId("btn-ok").click();
    cy.log("Successfully member samity transfer approve button");
  }

  transferGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully member samity transfer go back button");
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

  approveSamityTransfer() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.branchManager.samityChangeFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-member-samity-transfer").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-lock").click();
      cy.imsId("btn-approve").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully approve member samity transfer");
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

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const member_samity_transfer = new MemberSamityTransfer();
