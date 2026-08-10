import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class MemberSamityTransfer {
  test_data = Cypress.env("TEST_DATA");

  gridMemberSamityTransferListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-member", "submenu-member-samity-transfer");
      cy.log(messages.ui.gridListMessage);
    });
  }
  gridDraftButton() {
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
      .check({ force: true });
    cy.log(messages.ui.draftOnMessage);
  }

  gridDraftButtonOff() {
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
      .uncheck({ force: true });
    cy.log(messages.ui.draftOffMessage);
  }

  viewMemberSamityTransfer() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.log(messages.ui.viewMessage);
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.goBackSuccess);
  }

  transferResetButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId("btn-mis-table-action-transfer").click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log("Successfully member samity transfer reset button");
  }

  transferSubmitButton() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log("Successfully member samity transfer submit button");
  }

  transferApproveButton() {
    cy.imsId(COMMON.BUTTONS.APPROVE).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log("Successfully member samity transfer approve button");
  }

  transferGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log("Successfully member samity transfer go back button");
  }

  newSamityTransfer() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.branchManager.memberSamityTransferFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId("btn-mis-table-action-transfer").click();
      cy.formController("new_samity_id")
        .type(mstData.newSamityTransfer)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mstData.messagesamityTransfer)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log("Successfully member samity transfer");
    });
  }

  myTaskMenuSamityTransfer() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.samityChangeFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-member-samity-transfer").click();
      cy.log("Successfully navigate to my task menu member samity transfer");
    });
  }

  myTaskResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log("Successful clean my task displaying.");
  }

  myTaskRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(
      "successfully refresh page  displayed the my task list of the member samity transfer form "
    );
  }

  approveSamityTransfer() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId("btn-lock").click();
      cy.imsId(COMMON.BUTTONS.APPROVE).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log("Successfully approve member samity transfer");
    });
  }

  withoutNewSamity() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-member", "submenu-member-samity-transfer");
      const mstData = data.branchManager.memberSamityTransferFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId("btn-mis-table-action-transfer").click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log("Successfully member samity transfer without new samity field");
    });
  }

  withoutRegisterBookSerialId() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.branchManager.memberSamityTransferFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId("btn-mis-table-action-transfer").click();
      cy.formController("new_samity_id")
        .type(mstData.newSamityTransfer)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mstData.messagesamityTransfer)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log("Successfully member samity transfer");
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.branchManager.memberSamityTransferFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("status").type(mstData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.branchManager.memberSamityTransferFrom;
      cy.formController("status").type(mstData.statusSelect).type("{enter}");
      cy.log(
        messages.ui.dropdownActiveMessage
      );
    });
  }
  searchInMemberSamityTransferName() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.branchManager.memberSamityTransferFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mstData.memberNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }
  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(
      messages.ui.gridRefreshSuccess
    );
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.branchManager.memberSamityTransferFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mstData.memberNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const member_samity_transfer = new MemberSamityTransfer();
