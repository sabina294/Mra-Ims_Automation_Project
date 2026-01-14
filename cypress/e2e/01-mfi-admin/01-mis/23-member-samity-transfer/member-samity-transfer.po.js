class MemberSamityTransfer {
  test_data = Cypress.env("TEST_DATA");

  gridMemberSamityTransferListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-member", "submenu-member-samity-transfer");
      cy.log("Successfully member samity transfer list page.");
    });
  }


  newSamityTransfer() {
    cy.fixture(this.test_data).then((data) => {
      var mstData = data.mfiAdmin.memberSamityTransferFrom;
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

  transferApprove() {
    cy.fixture(this.test_data).then((data) => {
      var mstData = data.mfiAdmin.memberSamityTransferFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-member-samity-transfer").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-lock").click();
      cy.imsId("btn-approve").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully approved the member samity transfer ");
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-member", "submenu-member-samity-transfer");
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the member samity transfer list page."
    );
  }

  viewMemberSamityTransfer() {
    cy.imsId("btn-table-action-view").click();
    cy.log("Successfully viewed the member samity transfer list page");
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the member samity transfer list page");

  }

  transferResetButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-mis-table-action-transfer").click();
    cy.imsId("btn-reset").click();
    cy.log("Successfully member samity transfer reset button check");

  }

  transferSubmitButtonCheck() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successfully member samity transfer submit button check");
  }

  transferApproveButtonCheck() {
    cy.imsId("btn-approve").click();
    cy.imsId("btn-ok").click();
    cy.log("Successfully member samity transfer approve button check");

  }

  transferGoBackButtonCheck() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully member samity transfer go back button check");

  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var mstData = data.mfiAdmin.memberSamityTransferFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(mstData.selectStatus).type("{enter}");
      cy.log(
        "samity field officer change status inactive dropdown check successfully"
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var mstData = data.mfiAdmin.memberSamityTransferFrom;
      cy.formController("status").type(mstData.statusSelect).type("{enter}");
      cy.log(
        "samity field officer change status active dropdown check successfully"
      );
    });
  }
  searchInMemberSamityTransferName() {
    cy.fixture(this.test_data).then((data) => {
      var mstData = data.mfiAdmin.memberSamityTransferFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(mstData.memberNameEn);
      cy.log("Successfully search in the Samity field officer change");
    });
  }
  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var mstData = data.mfiAdmin.memberSamityTransferFrom;
      cy.formController("office_id").type(mstData.SelectOffice).type("{enter}");
      cy.log(
        "samity field officer change status office dropdown check successfully"
      );
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
