import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class Samity {
  test_data = Cypress.env("TEST_DATA");

  gridSamityManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu1(COMMON.MENUS.SAMITY);
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewSamity() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.fieldOfficer.gridSamityFrom;
      // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(smData.search);
      // cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();

    cy.log(messages.ui.goBackSuccess);

  }

  turnOnEditMode() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.get('.ant-switch-inner > .hidden').click();

    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editResetButton() {
    cy.imsId(COMMON.BUTTONS.RESET).click();

    cy.log(messages.ui.editResetMessage);
  }

  editSubmitButton() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();

    cy.log(messages.ui.editSubmitMessage);
  }

  editApproveButton() {
    cy.imsId(COMMON.BUTTONS.APPROVE).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();

    cy.log(messages.ui.editMessage);
  }


  editDraftButton() {
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();

    cy.log(messages.ui.editMessage);
  }

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.fieldOfficer.gridSamityFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(smData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.fieldOfficer.gridSamityFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(smData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInSamityManagementName() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.fieldOfficer.gridSamityFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(smData.samityNameEn);
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

  gridCheckboxCheck() {
    cy.imsId(COMMON.CHECKBOXES.ROW_2).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.checkboxMessage);
  }

  gridCheckboxLockButtonCheck() {
    this.selectRowForLockAction();
    cy.imsId(COMMON.BUTTONS.LOCK).should("be.enabled").click();
    cy.log(messages.ui.lockSuccess);
  }

  gridCheckboxUnlockButtonCheck() {
    this.selectRowForLockAction();
    cy.imsId(COMMON.BUTTONS.UNLOCK).should("be.enabled").click();
    cy.log(messages.ui.unlockSuccess);
  }

  selectRowForLockAction() {
    // Reset can clear selection; Lock can preserve it. Select without toggling off.
    cy.imsId(COMMON.CHECKBOXES.ROW_2).then(($checkbox) => {
      const input = $checkbox.is('input[type="checkbox"]')
        ? $checkbox
        : $checkbox.find('input[type="checkbox"]');
      expect(input.length, "row checkbox input").to.equal(1);
      if (!input.prop("checked")) {
        cy.imsId(COMMON.CHECKBOXES.ROW_2).click();
      }
    });
    cy.imsId(COMMON.CHECKBOXES.ROW_2).should(($checkbox) => {
      const input = $checkbox.is('input[type="checkbox"]')
        ? $checkbox
        : $checkbox.find('input[type="checkbox"]');
      expect(input.prop("checked"), "row selected for lock/unlock").to.equal(true);
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

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.fieldOfficer.gridSamityFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(smData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  listBreadcrumbCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Samity")
      .and("contain.text", "List");
    cy.log(messages.ui.listPageNavigationCheck);
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns([
      "#",
      "Samity Id",
      "Samity Name",
      "Samity Type",
      "Office Id",
      "Office",
      "MFI Program",
      "Maximum Members",
      "Locked By",
      "Status",
      "Actions",
    ]);
  }

  gridRecordDataCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    // Samity has a leading checkbox column before the row number.
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
      .should(($rows) => {
        $rows.each((_, row) => {
          const cells = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS);
          expect(cells.eq(1).text().trim()).to.match(/^\d+$/);
          [2, 3, 4, 5, 6].forEach((index) =>
            expect(cells.eq(index).text().trim()).not.to.equal(""));
          expect(["Active", "Inactive"]).to.include(cells.eq(10).text().trim());
        });
      });
    cy.log(messages.ui.recordStatusCheck);
  }

  partialNameSearchCheck() {
    cy.visit("/mfi-mis/samity/samity-management/list");
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first()
      .find(COMMON.TABLE.VISIBLE_CELLS).eq(3).invoke("text").then((name) => {
        const fullName = name.trim();
        expect(fullName.length, "name for partial search").to.be.greaterThan(1);
        const partialName = fullName.slice(0, Math.max(1, Math.floor(fullName.length / 2)));
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(partialName).blur();
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", partialName);
        cy.imsId(COMMON.BUTTONS.SEARCH).click();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
          expect($rows.length, "matching records").to.be.greaterThan(0);
          $rows.each((index, row) => {
            const result = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS).eq(3).text().trim();
            expect(result.toLowerCase(), `row ${index + 1} name`)
              .to.include(partialName.toLowerCase());
          });
        });
      });
    cy.log(messages.ui.partialSearch);
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("SAMITY");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.activeFilter(data.fieldOfficer.gridSamityFrom.statusSelect, 10);
    });
  }

  nameAscendingSortCheck() {
    configurationGridChecks.sort("Samity Name", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    configurationGridChecks.sort("Samity Name", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    configurationGridChecks.pagination();
  }

  viewPageDataCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().then(($row) => {
      const cells = $row.find(COMMON.TABLE.VISIBLE_CELLS);
      const values = [2, 3, 4, 6, 7, 8, 10].map((index) => cells.eq(index).text().trim());
      const samityId = cells.eq(2).text().trim();
      expect(samityId, "Samity ID").not.to.equal("");
      cy.get(COMMON.TABLE.VISIBLE_ROWS)
        .filter((index, row) =>
          Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS).eq(2).text().trim() === samityId
        )
        .first()
        .find(COMMON.TABLE.ACTION_TOGGLE)
        .click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.url().should("include", "/samity/samity-management/view/");
      cy.contains("Basic Information").should("be.visible");
      cy.get("nz-breadcrumb, .ant-breadcrumb").should("contain.text", "Home")
        .and("contain.text", "Samity").and("contain.text", "View");
      values.forEach((value) => {
        expect(value, "grid value to verify in Samity details").not.to.equal("");
        cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, value).should("be.visible");
      });
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.url().should("include", "/samity/samity-management/list");
      cy.get(COMMON.TABLE.BODY).should("be.visible");
    });
    cy.log(messages.ui.viewMessage);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_samity_management = new Samity();
