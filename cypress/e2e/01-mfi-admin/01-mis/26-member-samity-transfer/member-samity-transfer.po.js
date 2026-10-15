import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";
import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class MemberSamityTransfer {
  test_data = Cypress.env("TEST_DATA");

  gridMemberSamityTransferListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.MEMBER, COMMON.MENUS.MEMBER_SAMITY_TRANSFER);
      cy.log(messages.ui.gridListMessage);
    });
  }


  newSamityTransfer() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.mfiAdmin.memberSamityTransferFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mstData.memberNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).first().click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_MIS_TRANSFER).click();
      cy.formController("new_samity_id")
        .type(mstData.newSamityTransfer)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mstData.messagesamityTransfer)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.actionMessage);
    });
  }

  myTaskMenuMemberSamityTransfer() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.mfiAdmin.memberSamityTransferFrom;
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_MEMBER_SAMITY_TRANSFER).click();
      cy.log(messages.ui.actionMessage);
    });
  }

  myTaskMemberOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.mfiAdmin.approveMemberSamityTransferFrom;
      cy.formController("office_id").type(mstData.OfficeDropdown).type("{enter}");
      cy.log(messages.ui.officeDropdownMessage);
    });
  }

  myTaskResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.resetSuccess);
  }

  myTaskRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(messages.ui.refreshSuccess);
  }

  transferApprove() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.mfiAdmin.memberSamityTransferFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.LOCK).click();
      cy.imsId(COMMON.BUTTONS.APPROVE).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.approveSuccess);
    });
  }

  actionButtonCheck() {
    cy.selectMenu(COMMON.MENUS.MEMBER, COMMON.MENUS.MEMBER_SAMITY_TRANSFER);
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewMemberSamityTransfer() {
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.log(messages.ui.viewMessage);
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  transferResetButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_MIS_TRANSFER).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.resetSuccess);

  }

  transferSubmitButtonCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.form.submitSuccess);
  }

  transferApproveButtonCheck() {
    cy.imsId(COMMON.BUTTONS.APPROVE).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.approveSuccess);

  }

  newSamityChangeName() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.approveSuccess);

  }

  transferGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.mfiAdmin.memberSamityTransferFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(mstData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.mfiAdmin.memberSamityTransferFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(mstData.statusSelect).type("{enter}");
      cy.log(
        messages.ui.dropdownActiveMessage
      );
    });
  }
  searchInMemberSamityTransferName() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.mfiAdmin.memberSamityTransferFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mstData.memberNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }
  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.mfiAdmin.memberSamityTransferFrom;
      cy.formController("office_id").type(mstData.SelectOffice).type("{enter}");
      cy.log(messages.ui.fieldOfficerDropdownMessage);
    });
  }
  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.mfiAdmin.memberSamityTransferFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mstData.search);
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

  // Keep these list checks independent of the earlier create/edit workflow.
  openListForChecks() {
    cy.visit("/mfi-mis/member/member-samity-transfer/list");
    cy.changeLanguage("english");
    cy.location("pathname").should("eq", "/mfi-mis/member/member-samity-transfer/list");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true });
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    configurationGridChecks.breadcrumb("Member Samity Transfer", ["Member"]);
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    configurationGridChecks.columns([
      "#", "Member Id", "Name", "Office Id", "Office", "Samity Id",
      "Samity Name", "Contact No", "Locked By", "Status", "Actions",
    ]);
  }

  gridRecordDataCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "member records").to.be.greaterThan(0);
      $rows.each((_, row) => {
        const cells = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS);
        expect(cells.eq(0).text().trim(), "serial number").to.match(/^\d+$/);
        [1, 2, 3, 4, 5, 6].forEach((index) => {
          expect(cells.eq(index).text().trim(), `required column ${index}`).not.to.equal("");
        });
        expect(["Active", "Inactive"], "member status").to.include(cells.eq(9).text().trim());
      });
    });
  }

  partialNameSearchCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find(COMMON.TABLE.VISIBLE_CELLS).eq(2)
      .invoke("text").then((text) => {
        const name = text.trim();
        expect(name, "member name to search").not.to.equal("");
        // Use a proper substring even when the member has a single-word name.
        const partialName = name.slice(0, Math.max(1, Math.floor(name.length / 2)));
        configurationGridChecks.exactSearch(partialName, 2);
      });
  }

  memberIdSearchCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find(COMMON.TABLE.VISIBLE_CELLS).eq(1)
      .invoke("text").then((text) => {
        const memberId = text.trim();
        expect(memberId, "member ID to search").not.to.equal("");
        configurationGridChecks.exactSearch(memberId, 1);
      });
  }

  noResultSearchCheck() {
    this.openListForChecks();
    configurationGridChecks.noResult("MFI_MEMBER_SAMITY_TRANSFER");
  }

  nameAscendingSortCheck() {
    this.openListForChecks();
    configurationGridChecks.sort("Name", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    this.openListForChecks();
    configurationGridChecks.sort("Name", COMMON.SORT.ASCENDING);
    configurationGridChecks.sort("Name", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    this.openListForChecks();
    configurationGridChecks.pagination();
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const member_samity_transfer = new MemberSamityTransfer();
