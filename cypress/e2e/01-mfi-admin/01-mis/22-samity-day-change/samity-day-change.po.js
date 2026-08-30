import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class SamityDayChange {
  test_data = Cypress.env("TEST_DATA");

  openListPage() {
    cy.get("body").type("{esc}", { force: true });
    cy.location("pathname").then((pathname) => {
      if (pathname.includes("/samity-day-change/list")) {
        return;
      }

      if (
        pathname.includes("/samity-day-change/view/") ||
        pathname.includes("/samity-day-change/change/")
      ) {
        cy.imsId(COMMON.BUTTONS.GO_BACK)
          .scrollIntoView()
          .click({ force: true });
        cy.location("pathname").should("include", "/samity-day-change/list");
        return;
      }

      cy.selectMenu(COMMON.MENUS.SAMITY, COMMON.MENUS.SAMITY_DAY_CHANGE);
    });
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
  }

  assertSortableColumn(columnName) {
    cy.get(COMMON.TABLE.HEAD)
      .contains(COMMON.TABLE.HEADER_CELL, columnName)
      .click()
      .should(($header) => {
        const ariaSort = $header.attr(COMMON.SORT.ATTRIBUTE);
        const ascendingIconIsActive =
          $header.find(COMMON.SORT.ASCENDING_ICON).length > 0;
        expect(
          ariaSort === COMMON.SORT.ASCENDING || ascendingIconIsActive
        ).to.equal(true);
      });
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
  }

  gridSamityChangeListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.SAMITY, COMMON.MENUS.SAMITY_DAY_CHANGE);
      cy.log(messages.ui.gridListMessage);
    });
  }

  samityDayChange() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .clear()
        .type(sdData.samityNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_MIS_CHANGE).click();
      cy.formController("new_samity_day").click();
      cy.get('.ant-select-item-option')
        .should('have.length.greaterThan', 0);
      cy.get('.ant-select-item-option')
        .first()
        .click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.actionMessage);
    });
  }

  myTaskMenuSamityDayChange() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_SAMITY_DAY_CHANGE).click();
      cy.log(messages.ui.actionMessage);
    });
  }

  myTaskSamityOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.approveSamityDayChangeFrom;
      cy.formController("office_id").type(sdData.OfficeDropdown).type("{enter}");
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

  approveSamityDayChange() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
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
    cy.selectMenu(COMMON.MENUS.SAMITY, COMMON.MENUS.SAMITY_DAY_CHANGE);
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewSamityDayChange() {
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.log(messages.ui.viewMessage);
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  samityChangeSubmit() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_MIS_CHANGE).click();
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.resetSuccess);
  }

  samityChangeApprove() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.APPROVE).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.approveSuccess);
    });
  }

  samityChangeReset() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.resetSuccess);
  }

  newSamityDayChangeName() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.actionMessage);
  }

  samityChangeGoBack() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(sdData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(sdData.statusSelect).type("{enter}");
      cy.log(
        messages.ui.dropdownActiveMessage
      );
    });
  }
  searchInSamityDayChangeName() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(sdData.samityNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }
  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.formController("office_id").type(sdData.SelectOffice).type("{enter}");
      cy.log(messages.ui.officeDropdownMessage);
    });
  }
  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(sdData.search);
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
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.formController("office_id").type(sdData.SelectOffice);
      cy.log(messages.ui.actionMessage);
    });
  }

  gridRequiredColumnsCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      data.mfiAdmin.samityDayChangeFrom.gridColumns.forEach((columnName) => {
        cy.get(COMMON.TABLE.HEAD)
          .contains(COMMON.TABLE.HEADER_CELL, columnName)
          .should("be.visible");
      });
      cy.log(messages.ui.gridColumns);
    });
  }

  actionMenuOptionsCheck() {
    this.openListPage();
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).should("be.visible");
    cy.imsId(COMMON.GRID.ACTION_MIS_CHANGE).should("be.visible");
    cy.log(messages.ui.actionMenuOpenCheck);
  }

  samityIdSortCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      this.assertSortableColumn(data.mfiAdmin.samityDayChangeFrom.sortColumns.samityId);
      cy.log(messages.ui.ascendingSort);
    });
  }

  samityNameSortCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      this.assertSortableColumn(data.mfiAdmin.samityDayChangeFrom.sortColumns.samityName);
      cy.log(messages.ui.ascendingSort);
    });
  }

  otherSortableColumnsCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      data.mfiAdmin.samityDayChangeFrom.sortColumns.other.forEach((columnName) => {
        this.assertSortableColumn(columnName);
      });
      cy.log(messages.ui.ascendingSort);
    });
  }

  nextPreviousPaginationCheck() {
    this.openListPage();
    cy.get(COMMON.PAGINATION.CONTAINER).should("be.visible");
    cy.get(COMMON.PAGINATION.NEXT_PAGE).then(($nextButton) => {
      if ($nextButton.hasClass(COMMON.PAGINATION.DISABLED_CLASS)) {
        cy.wrap($nextButton).should("have.class", COMMON.PAGINATION.DISABLED_CLASS);
        cy.get(COMMON.PAGINATION.PREVIOUS_PAGE).should(
          "have.class",
          COMMON.PAGINATION.DISABLED_CLASS
        );
        cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("contain.text", "1");
        return;
      }

      cy.wrap($nextButton).click();
      cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("contain.text", "2");
      cy.get(COMMON.PAGINATION.PREVIOUS_PAGE)
        .should("not.have.class", COMMON.PAGINATION.DISABLED_CLASS)
        .click();
      cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("contain.text", "1");
    });
    cy.log(messages.ui.pagination);
  }

  pageSizeChangeCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      const pageSize = Number(data.mfiAdmin.samityDayChangeFrom.pageSize);
      cy.get(COMMON.PAGINATION.PAGE_SIZE_SELECT).should("be.visible").click();
      cy.get(COMMON.SELECT.VISIBLE_DROPDOWN)
        .contains(COMMON.SELECT.OPTION, `${pageSize} / page`)
        .click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS)
        .its("length")
        .should("be.greaterThan", 0)
        .and("be.at.most", pageSize);
      cy.get(COMMON.PAGINATION.PAGE_SIZE_SELECT).should("contain.text", pageSize);
      cy.log(messages.ui.pageSize);
    });
  }

  emptySearchResultCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .clear()
        .type(data.mfiAdmin.samityDayChangeFrom.invalidSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(".ant-empty").should("be.visible");
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length", 0);
      cy.log(messages.ui.searchNoResult);
    });
  }

  combinedFiltersCheck() {
    this.openListPage();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().then(($row) => {
      const cells = $row.find(COMMON.TABLE.VISIBLE_CELLS);
      const samityName = cells.eq(2).text().trim();
      const status = cells.eq(6).text().trim();

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(status)
        .type(COMMON.KEYS.ENTER);
      cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true });
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(samityName);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS)
        .should("have.length.greaterThan", 0)
        .each(($filteredRow) => {
          cy.wrap($filteredRow).should("contain.text", samityName);
          cy.wrap($filteredRow).should("contain.text", status);
        });
    });
    cy.log(messages.ui.combinedFilterCheck);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const samity_day_change = new SamityDayChange();
