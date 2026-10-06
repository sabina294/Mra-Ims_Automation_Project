import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class SamityChange {
  test_data = Cypress.env("TEST_DATA");

  gridSamityChangeListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.SAMITY, COMMON.MENUS.SAMITY_FIELD_OFFICER_CHANGE);
      cy.log(messages.ui.gridListMessage);
    });
  }

  changeResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.samityChangeFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_MIS_CHANGE).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.resetSuccess);
    });
  }

  changeSubmitButtonCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.form.submitSuccess);

  }

  changeApproveButtonCheck() {
    cy.imsId(COMMON.BUTTONS.APPROVE).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.approveSuccess);
  }

  changeGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);
  }

  samityChange() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.samityChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(smData.samityNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_MIS_CHANGE).click();
      cy.formController("field_officer_id").click();
      cy.wait(500);
      cy.get('.ant-select-item-option')
        .contains(smData.fieldOfficerName)
        .click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .should("be.visible")
        .and("contain", smData.messageSamityChange);
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.actionMessage);
    });
  }

  myTaskMenuSamityChange() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.samityChangeFrom;
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_SAMITY_FIELD_OFFICER_CHANGE).click();
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

  approveSamityChange() {
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

  actionButtonCheck() {
    cy.selectMenu(COMMON.MENUS.SAMITY, COMMON.MENUS.SAMITY_FIELD_OFFICER_CHANGE);
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewSamityChange() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.samityChangeFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(smData.samityNameEn);
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
      const smData = data.branchManager.samityChangeFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(smData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.samityChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(smData.statusSelect).type("{enter}");
      cy.log(
        messages.ui.dropdownActiveMessage
      );
    });
  }

  searchInSamityFieldOfficerChangeName() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.samityChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(smData.samityNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }
  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.samityChangeFrom;
      cy.formController("office_id").type(smData.SelectOffice).type("{enter}");
      cy.log(messages.ui.fieldOfficerDropdownMessage);
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
      const smData = data.branchManager.samityChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(smData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
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

  openListForChecks() {
    cy.visit("/mfi-mis/samity/samity-field-officer-change/list");
    cy.location("pathname").should("eq", "/mfi-mis/samity/samity-field-officer-change/list");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true }).should("not.be.checked");
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    configurationGridChecks.breadcrumb("Samity Field Officer Change", ["Samity"]);
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    configurationGridChecks.columns(["#", "Samity Id", "Samity Name", "Samity Type", "Field Officer", "Samity Day", "Status", "Actions"]);
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
        expect(cells.eq(1).text().trim(), "samity ID").not.to.equal("");
        expect(cells.eq(2).text().trim(), "samity name").not.to.equal("");
        expect(cells.eq(6).text().trim(), "status").not.to.equal("");
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
    configurationGridChecks.noResult("BM_SAMITY_FIELD_OFFICER_CHANGE");
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
    cy.location("pathname").should("eq", "/mfi-mis/samity/samity-field-officer-change/list");
    this.assertRecordsOrEmpty();
    cy.log(messages.ui.gridRefreshSuccess);
  }

  nameAscendingSortCheck() {
    this.openListForChecks();
    configurationGridChecks.sort("Samity Name", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    this.openListForChecks();
    configurationGridChecks.sort("Samity Name", COMMON.SORT.ASCENDING);
    configurationGridChecks.sort("Samity Name", COMMON.SORT.DESCENDING);
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

  samityNameSearchCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
      .first().find(COMMON.TABLE.VISIBLE_CELLS).eq(2).invoke("text").then((text) => {
        const name = text.trim();
        expect(name, "samity name to search").not.to.equal("");
        configurationGridChecks.exactSearch(name, 2);
      });
  }

  samityPartialNameSearchCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
      .first().find(COMMON.TABLE.VISIBLE_CELLS).eq(2).invoke("text").then((text) => {
        const name = text.trim();
        expect(name, "samity name to search").not.to.equal("");
        configurationGridChecks.partialSearch(name);
      });
  }

  activeStatusResultCheck() {
    this.openListForChecks();
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type("Active").type(COMMON.KEYS.ENTER);
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "active samity records").to.be.greaterThan(0);
      $rows.each((_, row) => {
        expect(Cypress.$(row).find("td").eq(6).text().trim()).to.equal("Active");
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

export const samity_field_officer_change = new SamityChange();
