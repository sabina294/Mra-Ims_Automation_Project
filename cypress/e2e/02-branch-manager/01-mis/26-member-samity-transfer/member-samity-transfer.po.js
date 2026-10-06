import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class MemberSamityTransfer {
  test_data = Cypress.env("TEST_DATA");

  gridMemberSamityTransferListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.MEMBER, COMMON.MENUS.MEMBER_SAMITY_TRANSFER);
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
    cy.imsId(COMMON.GRID.ACTION_MIS_TRANSFER).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.resetSuccess);
  }

  transferSubmitButton() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.form.submitSuccess);
  }

  transferApproveButton() {
    cy.imsId(COMMON.BUTTONS.APPROVE).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.approveSuccess);
  }

  transferGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);
  }

  newSamityTransfer() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.branchManager.memberSamityTransferFrom;
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

  myTaskMenuSamityTransfer() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.samityChangeFrom;
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_MEMBER_SAMITY_TRANSFER).click();
      cy.log(messages.ui.actionMessage);
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

  approveSamityTransfer() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.LOCK).click();
      cy.imsId(COMMON.BUTTONS.APPROVE).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.approveSuccess);
    });
  }

  withoutNewSamity() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.MEMBER, COMMON.MENUS.MEMBER_SAMITY_TRANSFER);
      const mstData = data.branchManager.memberSamityTransferFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_MIS_TRANSFER).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.actionMessage);
    });
  }

  withoutRegisterBookSerialId() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.branchManager.memberSamityTransferFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_MIS_TRANSFER).click();
      cy.formController("new_samity_id")
        .type(mstData.againSamityTransfer)
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

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.branchManager.memberSamityTransferFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(mstData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mstData = data.branchManager.memberSamityTransferFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(mstData.statusSelect).type("{enter}");
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

  openListForChecks() {
    cy.visit("/mfi-mis/member/member-samity-transfer/list");
    cy.location("pathname").should("eq", "/mfi-mis/member/member-samity-transfer/list");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true }).should("not.be.checked");
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    configurationGridChecks.breadcrumb("Member Samity Transfer", ["Member"]);
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    configurationGridChecks.columns(["#", "Member Id", "Name", "Office Id", "Office", "Samity Id", "Samity Name", "Contact No", "Status", "Actions"]);
  }

  assertRecordsOrEmpty() {
    cy.get(COMMON.TABLE.BODY).should(($body) => {
      const rows = $body.find("tr:not(.ant-table-placeholder):visible");
      if (!rows.length) {
        expect($body.find(".ant-empty:visible").length, "visible empty state").to.be.greaterThan(0);
        expect($body.text()).to.contain("No Data");
        return;
      }
      rows.each((_, row) => {
        const cells = Cypress.$(row).find("td");
        expect(cells.eq(0).text().trim(), "serial number").to.match(/^\d+$/);
        expect(cells.eq(1).text().trim(), "member ID").not.to.equal("");
        expect(cells.eq(2).text().trim(), "member name").not.to.equal("");
        expect(cells.eq(8).text().trim(), "status").not.to.equal("");
      });
    });
  }

  gridRecordDataCheck() {
    this.openListForChecks();
    this.assertRecordsOrEmpty();
    cy.log(messages.ui.gridRecordsOrEmptyCheck);
  }

  searchControlsCheck() {
    this.openListForChecks();
    cy.formController("office_id").should("be.visible");
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("be.visible");
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).should("not.be.checked");
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
    cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
    cy.log(messages.ui.searchControlsCheck);
  }

  noResultSearchCheck() {
    this.openListForChecks();
    configurationGridChecks.noResult("BM_MEMBER_SAMITY_TRANSFER");
  }

  resetRestoresGridCheck() {
    this.noResultSearchCheck();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    this.assertRecordsOrEmpty();
    cy.log(messages.ui.gridResetSuccess);
  }

  refreshListStateCheck() {
    this.openListForChecks();
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.location("pathname").should("eq", "/mfi-mis/member/member-samity-transfer/list");
    this.assertRecordsOrEmpty();
    cy.log(messages.ui.gridRefreshSuccess);
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

  paginationOrEmptyStateCheck() {
    this.openListForChecks();
    this.assertRecordsOrEmpty();
    cy.get(COMMON.TABLE.BODY).then(($body) => {
      if ($body.find("tr:not(.ant-table-placeholder):visible").length) {
        configurationGridChecks.pagination();
      } else {
        cy.get(COMMON.TABLE.BODY).find(".ant-empty").should("be.visible").and("contain.text", "No Data");
      }
    });
  }

  memberNameSearchCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
      .first().find(COMMON.TABLE.VISIBLE_CELLS).eq(2).invoke("text").then((text) => {
        const name = text.trim();
        expect(name, "member name to search").not.to.equal("");
        configurationGridChecks.exactSearch(name, 2);
      });
  }

  memberPartialNameSearchCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
      .first().find(COMMON.TABLE.VISIBLE_CELLS).eq(2).invoke("text").then((text) => {
        const name = text.trim();
        expect(name, "member name to search").not.to.equal("");
        configurationGridChecks.partialSearch(name);
      });
  }

  activeStatusResultCheck() {
    this.openListForChecks();
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type("Active").type(COMMON.KEYS.ENTER);
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "active member records").to.be.greaterThan(0);
      $rows.each((_, row) => {
        expect(Cypress.$(row).find("td").eq(8).text().trim()).to.equal("Active");
      });
    });
    cy.log(messages.ui.dropdownActiveMessage);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const member_samity_transfer = new MemberSamityTransfer();
