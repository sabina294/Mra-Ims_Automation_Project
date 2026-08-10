import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class SamityClose {
  test_data = Cypress.env("TEST_DATA");

  gridSamityCloseListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-samity", "submenu-samity-close");
      cy.log(messages.ui.gridListMessage);
    });
  }

  samityClose() {
    cy.fixture(this.test_data).then((data) => {
      const scData = data.mfiAdmin.samityCloseFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(scData.samityNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId("btn-mis-table-action-close").click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log("Successfully Samity close");
    });
  }

  myTaskMenuSamityClose() {
    cy.fixture(this.test_data).then((data) => {
      const scData = data.mfiAdmin.samityCloseFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-samity-close").click();
      cy.log("Successfully navigate to my task menu samity close");
    });
  }

  myTaskSamityOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const scData = data.mfiAdmin.approveSamityCloseFrom;
      cy.formController("office_id").type(scData.OfficeDropdown).type("{enter}");
      cy.log("Successfully navigate to my task menu samity close office dropdown");
    });
  }

  myTaskResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log("Successful clean my task displaying.");
  }

  myTaskRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(
      "successfully refresh page  displayed the my task list of the Samity close form "
    );
  }

  statusMyTaskDraftDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const scData = data.mfiAdmin.approveSamityCloseFrom;
      cy.formController("status").type(scData.taskStatus).type("{enter}");
      cy.log(
        "Samity close form status draft dropdown check successfully"
      );
    });
  }

  statusMyTaskPendingApprovalDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const scData = data.mfiAdmin.approveSamityCloseFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("status").type(scData.myTaskStatus).type("{enter}");
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(
        "Samity close form status pending approval dropdown check successfully"
      );
    });
  }


  approveSamityClose() {
    cy.fixture(this.test_data).then((data) => {
      const scData = data.mfiAdmin.samityCloseFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId("btn-lock").click();
      cy.imsId(COMMON.BUTTONS.APPROVE).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log("Successfully approve samity change");
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-samity", "submenu-samity-close");
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewSamityClose() {
    cy.fixture(this.test_data).then((data) => {
      const scData = data.mfiAdmin.samityCloseFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(scData.samityNameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const scData = data.mfiAdmin.samityCloseFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("status").type(scData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const scData = data.mfiAdmin.samityCloseFrom;
      cy.formController("status").type(scData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInSamityCloseName() {
    cy.fixture(this.test_data).then((data) => {
      const scData = data.mfiAdmin.samityCloseFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(scData.samityNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const scData = data.mfiAdmin.samityCloseFrom;
      cy.formController("office_id").type(scData.SelectOffice).type("{enter}");
      cy.log("Samity close status office dropdown check successfully");
    });
  }
  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const scData = data.mfiAdmin.samityCloseFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(scData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(
      messages.ui.gridRefreshSuccess
    );
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

  selectofficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      const scData = data.mfiAdmin.samityCloseFrom;
      cy.formController("office_id").type(scData.SelectOffice);
      cy.log("Successfully select office in the Samity close");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const Samity_close = new SamityClose();
