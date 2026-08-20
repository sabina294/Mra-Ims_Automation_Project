import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";

class DesignationCreation {
  test_data = Cypress.env("TEST_DATA");
  runId = Date.now();

  gridDesignationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.DESIGNATION);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createDesignation() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN).type(desData.nameEn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_BN).type(desData.nameBn);
      cy.formController(COMMON.INPUTS.DESIGNATION_SHORT_NAME).type(desData.shortName);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN).type(desData.nameEn);
      cy.formController(COMMON.INPUTS.DESIGNATION_SHORT_NAME).type(desData.shortName);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutShortName() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN).type(desData.nameEn);
      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_BN).type(desData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN).type(desData.nameEn);
      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_BN).type(desData.nameBn);
      cy.formController(COMMON.INPUTS.DESIGNATION_SHORT_NAME).type(desData.shortName);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewDesignation() {
    cy.fixture(this.test_data).then((data) => {
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(desData.nameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);
  }

  turnOffEditMode() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editDesignation() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  editResetButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.editResetMessage);
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.editSubmitMessage);
    });
  }

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(desData.selectStatus).type(COMMON.KEYS.ENTER);
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(desData.statusSelect).type(COMMON.KEYS.ENTER);
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInDesignationName() {
    cy.fixture(this.test_data).then((data) => {
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(desData.nameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(messages.ui.gridRefreshSuccess);
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN).type(desData.nameEn);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.validation.requiredField);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const desData = data.mfiAdmin.createDesignationFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(desData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridColumnsCheck() {
    cy.log(messages.ui.gridColumns);
  }

  designationNameAscendingSort() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      cy.contains(d.nameEnColumn).click();
      cy.log(messages.ui.ascendingSort);
    });
  }

  designationNameDescendingSort() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      cy.contains(d.nameEnColumn).click();
      cy.contains(d.nameEnColumn).click();
      cy.log(messages.ui.descendingSort);
    });
  }

  searchNoResult() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(designationData.invalidSearch);

      cy.imsId(COMMON.BUTTONS.SEARCH).click();

      cy.log(messages.ui.searchNoResult);
    });
  }

  partialSearch() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(designationData.partialSearch);

      cy.imsId(COMMON.BUTTONS.SEARCH).click();

      cy.log(messages.ui.partialSearch);
    });
  }

  clearSearch() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(designationData.partialSearch);

      cy.imsId(COMMON.BUTTONS.SEARCH).click();

      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .clear();

      cy.log(messages.ui.clearSearch);
    });
  }

  paginationCheck() {
    cy.get(COMMON.PAGINATION.CONTAINER)
      .should("be.visible");

    cy.log(messages.ui.pagination);
  }

  pageSizeCheck() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;

      cy.get(COMMON.PAGINATION.OPTIONS)
        .should("be.visible");

      cy.get(COMMON.PAGINATION.PAGE_SIZE_SELECT)
        .click();

      cy.contains(
        COMMON.SELECT.OPTION,
        designationData.pageSize
      ).click();

      cy.log(messages.ui.pageSize);
    });
  }

  addDesignationNavigation() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

    cy.log(messages.ui.addNavigation);
  }

  createPageFieldCheck() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN)
        .type(designationData.nameEn);

      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_BN)
        .type(designationData.nameBn);

      cy.formController(COMMON.INPUTS.DESIGNATION_SHORT_NAME)
        .type(designationData.shortName);

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(designationData.selectStatus)
        .type(COMMON.KEYS.ENTER);

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.createPageFields);
    });
  }

  designationNameSpaceValidation() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN)
        .type(designationData.spaceOnly);

      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_BN)
        .type(designationData.nameBn);

      cy.formController(COMMON.INPUTS.DESIGNATION_SHORT_NAME)
        .type(designationData.shortName);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.spaceValidation);
    });
  }

  designationNameBnSpaceValidation() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN)
        .type(designationData.nameEn);

      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_BN)
        .type(designationData.spaceOnly);

      cy.formController(COMMON.INPUTS.DESIGNATION_SHORT_NAME)
        .type(designationData.shortName);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.spaceValidation);
    });
  }

  defaultStatusCheck() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .should("be.visible");

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(designationData.status);

      cy.log(messages.ui.defaultStatus);
    });
  }

  statusOptionsCheck() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .click();

      cy.contains(designationData.status)
        .should("be.visible");

      cy.contains(designationData.selectStatus)
        .should("be.visible");

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.statusOptions);
    });
  }

  duplicateDesignationCheck() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN)
        .type(designationData.duplicateNameEn);

      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_BN)
        .type(designationData.duplicateNameBn);

      cy.formController(COMMON.INPUTS.DESIGNATION_SHORT_NAME)
        .type(designationData.duplicateShortName);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.duplicate);
    });
  }

  verifyColumnSort(columnName, expectedSort, logMessage) {
    cy.get(COMMON.TABLE.HEAD)
      .contains(COMMON.TABLE.HEADER_CELL, columnName)
      .click()
      .should(($header) => {
        const ariaSort = $header.attr(COMMON.SORT.ATTRIBUTE);
        const hasActiveSortClass = $header.hasClass(COMMON.SORT.ACTIVE_CLASS);
        expect(ariaSort === expectedSort || hasActiveSortClass).to.equal(true);
      });
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
    cy.log(logMessage);
  }

  getColumnIndex(columnName) {
    return cy.get(COMMON.TABLE.HEAD).find(COMMON.TABLE.HEADER_CELL).then(($headers) => {
      const columnIndex = [...$headers].findIndex((header) =>
        header.innerText.trim().includes(columnName)
      );
      expect(columnIndex, columnName).to.be.greaterThan(-1);
      return columnIndex;
    });
  }

  designationIdAscendingSort() {
    cy.fixture(this.test_data).then((data) => {
      this.verifyColumnSort(
        data.mfiAdmin.createDesignationFrom.designationIdColumn,
        COMMON.SORT.ASCENDING,
        messages.ui.idAscendingSortCheck
      );
    });
  }

  designationIdDescendingSort() {
    cy.fixture(this.test_data).then((data) => {
      this.verifyColumnSort(
        data.mfiAdmin.createDesignationFrom.designationIdColumn,
        COMMON.SORT.DESCENDING,
        messages.ui.idDescendingSortCheck
      );
    });
  }

  designationNameBnAscendingSort() {
    cy.fixture(this.test_data).then((data) => {
      this.verifyColumnSort(
        data.mfiAdmin.createDesignationFrom.nameBnColumn,
        COMMON.SORT.ASCENDING,
        messages.ui.banglaAscendingSortCheck
      );
    });
  }

  designationNameBnDescendingSort() {
    cy.fixture(this.test_data).then((data) => {
      this.verifyColumnSort(
        data.mfiAdmin.createDesignationFrom.nameBnColumn,
        COMMON.SORT.DESCENDING,
        messages.ui.banglaDescendingSortCheck
      );
    });
  }

  designationShortNameAscendingSort() {
    cy.fixture(this.test_data).then((data) => {
      this.verifyColumnSort(
        data.mfiAdmin.createDesignationFrom.shortNameColumn,
        COMMON.SORT.ASCENDING,
        messages.ui.shortNameAscendingSortCheck
      );
    });
  }

  designationShortNameDescendingSort() {
    cy.fixture(this.test_data).then((data) => {
      this.verifyColumnSort(
        data.mfiAdmin.createDesignationFrom.shortNameColumn,
        COMMON.SORT.DESCENDING,
        messages.ui.shortNameDescendingSortCheck
      );
    });
  }

  statusAscendingSort() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;
      cy.get(COMMON.TABLE.HEAD)
        .contains(COMMON.TABLE.HEADER_CELL, designationData.statusColumn)
        .click();
      this.getColumnIndex(designationData.statusColumn).then((columnIndex) => {
        cy.get(COMMON.TABLE.VISIBLE_ROWS).find(COMMON.TABLE.VISIBLE_CELLS)
          .filter(`:nth-child(${columnIndex + 1})`).then(($cells) => {
          const values = [...$cells].map((cell) => cell.innerText.trim());
          expect(values).to.deep.equal([...values].sort((a, b) => a.localeCompare(b)));
        });
      });
      cy.log(messages.ui.statusAscendingSortCheck);
    });
  }

  statusDescendingSort() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;
      cy.get(COMMON.TABLE.HEAD)
        .contains(COMMON.TABLE.HEADER_CELL, designationData.statusColumn)
        .click();
      this.getColumnIndex(designationData.statusColumn).then((columnIndex) => {
        cy.get(COMMON.TABLE.VISIBLE_ROWS).find(COMMON.TABLE.VISIBLE_CELLS)
          .filter(`:nth-child(${columnIndex + 1})`).then(($cells) => {
          const values = [...$cells].map((cell) => cell.innerText.trim());
          expect(values).to.deep.equal([...values].sort((a, b) => b.localeCompare(a)));
        });
      });
      cy.log(messages.ui.statusDescendingSortCheck);
    });
  }

  designationNameRequiredCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN)
      .closest(COMMON.FORM.ITEM)
      .find(COMMON.FORM.LABEL)
      .should("have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
    cy.log(messages.ui.requiredFieldIndicatorCheck);
  }

  statusRequiredCheck() {
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
      .closest(COMMON.FORM.ITEM)
      .find(COMMON.FORM.LABEL)
      .should("have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
    cy.log(messages.ui.requiredFieldIndicatorCheck);
  }

  designationNameBnOptionalCheck() {
    cy.formController(COMMON.INPUTS.DESIGNATION_NAME_BN)
      .closest(COMMON.FORM.ITEM)
      .find(COMMON.FORM.LABEL)
      .should("not.have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
    cy.log(messages.ui.optionalFieldIndicatorCheck);
  }

  designationShortNameOptionalCheck() {
    cy.formController(COMMON.INPUTS.DESIGNATION_SHORT_NAME)
      .closest(COMMON.FORM.ITEM)
      .find(COMMON.FORM.LABEL)
      .should("not.have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.optionalFieldIndicatorCheck);
  }

  totalRecordCountCheck() {
    cy.fixture(this.test_data).then((data) => {
      const designationData = data.mfiAdmin.createDesignationFrom;
      cy.get(COMMON.PAGINATION.TOTAL_TEXT).invoke("text").then((totalText) => {
        const matches = totalText.match(new RegExp(designationData.totalRecordNumberPattern, "g"));
        expect(matches).to.not.equal(null);
        const totalRecords = Number(matches.pop());
        cy.get(COMMON.TABLE.VISIBLE_ROWS)
          .its("length")
          .should("be.greaterThan", 0)
          .and("be.at.most", totalRecords);
      });
      cy.log(messages.ui.totalRecordCountCheck);
    });
  }

  previousButtonCheck() {
    cy.get(COMMON.PAGINATION.PREVIOUS_PAGE)
      .should("be.visible")
      .and("have.class", COMMON.PAGINATION.DISABLED_CLASS);
    cy.log(messages.ui.previousPageDisabledCheck);
  }

  nextButtonCheck() {
    cy.get(COMMON.PAGINATION.ACTIVE_PAGE).invoke("text").then((currentPage) => {
      const nextPage = String(Number(currentPage.trim()) + 1);
      cy.get(COMMON.PAGINATION.NEXT_PAGE)
        .should("be.visible")
        .and("not.have.class", COMMON.PAGINATION.DISABLED_CLASS)
        .click();
      cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("have.text", nextPage);
    });
    cy.log(messages.ui.nextPageNavigationCheck);
  }

  selectedPageCheck() {
    cy.get(COMMON.PAGINATION.ACTIVE_PAGE)
      .should("be.visible")
      .and("have.class", COMMON.PAGINATION.ACTIVE_PAGE.slice(1));
    cy.log(messages.ui.selectedPageHighlightCheck);
  }

  listPageTitleAndBreadcrumbCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible");
      [d.breadcrumbHome, d.breadcrumbConfiguration, d.breadcrumbDesignation, d.breadcrumbList]
        .forEach((text) => cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, text).should("be.visible"));
      cy.log(messages.ui.listPageNavigationCheck);
    });
  }

  verifyGridHeader(dataKey) {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      cy.get(COMMON.TABLE.HEAD)
        .contains(COMMON.TABLE.HEADER_CELL, d[dataKey]).should("be.visible");
      cy.log(messages.ui.gridColumnCheck);
    });
  }

  gridNumberColumnCheck() { this.verifyGridHeader("numberColumn"); }
  gridDesignationNameColumnCheck() { this.verifyGridHeader("nameEnColumn"); }
  gridDesignationNameBnColumnCheck() { this.verifyGridHeader("nameBnColumn"); }
  gridShortNameColumnCheck() { this.verifyGridHeader("shortNameColumn"); }
  gridDesignationIdColumnCheck() { this.verifyGridHeader("designationIdColumn"); }
  gridStatusColumnCheck() { this.verifyGridHeader("statusColumn"); }
  gridActionsColumnCheck() { this.verifyGridHeader("actionsColumn"); }

  designationIdDataCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      this.getColumnIndex(d.designationIdColumn).then((columnIndex) => {
        cy.get(COMMON.TABLE.VISIBLE_ROWS).each(($row) => {
          cy.wrap($row).find(COMMON.TABLE.VISIBLE_CELLS)
            .eq(columnIndex).invoke("text").should("not.be.empty");
        });
      });
    });
    cy.log(messages.ui.recordIdCheck);
  }

  designationStatusDataCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      this.getColumnIndex(d.statusColumn).then((columnIndex) => {
        cy.get(COMMON.TABLE.VISIBLE_ROWS).each(($row) => {
          cy.wrap($row).find(COMMON.TABLE.VISIBLE_CELLS).eq(columnIndex).invoke("text")
            .then((status) => expect(d.validStatuses).to.include(status.trim()));
        });
      });
      cy.log(messages.ui.recordStatusCheck);
    });
  }

  actionMenuOpenCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).should("be.visible");
    cy.log(messages.ui.actionMenuOpenCheck);
  }

  actionMenuCloseCheck() {
    cy.get(COMMON.TABLE.BODY).click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).should("not.be.visible");
    cy.log(messages.ui.actionMenuCloseCheck);
  }

  exactDesignationNameSearch() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(d.nameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
        .each(($row) => cy.wrap($row).should("contain.text", d.nameEn));
      cy.log(messages.ui.exactSearchCheck);
    });
  }

  searchWithLeadingTrailingSpaces() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(`  ${d.nameEn}  `);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.BODY).should("be.visible");
      cy.log(messages.ui.trimmedSearchCheck);
    });
  }

  clearStatusFilter() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      this.selectStatusOption(d.selectStatus);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("not.contain.text", d.selectStatus);
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
      cy.log(messages.ui.statusFilterClearCheck);
    });
  }

  selectStatusOption(status) {
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).click();
    cy.get(COMMON.SELECT.VISIBLE_DROPDOWN)
      .contains(COMMON.SELECT.OPTION, status).click();
  }

  applyCombinedFilters(status) {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(d.nameEn);
      this.selectStatusOption(status || d.statusSelect);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.BODY).should("be.visible");
    });
  }

  statusAndNameCombinedSearch() { this.applyCombinedFilters(); cy.log(messages.ui.combinedFilterCheck); }
  changeStatusAfterSearch() { this.applyCombinedFilters(); cy.log(messages.ui.filterUpdateCheck); }

  changeSearchAfterStatusFilter() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      this.selectStatusOption(d.statusSelect);
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(d.nameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.BODY).should("be.visible");
      cy.log(messages.ui.filterUpdateCheck);
    });
  }

  sortingDataIntegrityCheck() {
    cy.get(COMMON.TABLE.VISIBLE_ROWS).its("length").then((count) => {
      cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
        cy.get(COMMON.TABLE.HEAD).contains(COMMON.TABLE.HEADER_CELL, d.nameEnColumn).click();
      });
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length", count);
    });
    cy.log(messages.ui.sortingIntegrityCheck);
  }

  previousPageNavigationCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.PAGINATION.PAGE_ITEMS).first().click();
    cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("have.text", "1");
    cy.get(COMMON.PAGINATION.NEXT_PAGE)
      .should("be.visible")
      .and("not.have.class", COMMON.PAGINATION.DISABLED_CLASS)
      .click();
    cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("have.text", "2");
    cy.get(COMMON.PAGINATION.PREVIOUS_PAGE)
      .should("be.visible")
      .and("not.have.class", COMMON.PAGINATION.DISABLED_CLASS)
      .click();
    cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("have.text", "1");
    cy.log(messages.ui.previousPageNavigationCheck);
  }

  nextPageDisabledCheck() {
    cy.get(COMMON.PAGINATION.PAGE_ITEMS).last().click();
    cy.get(COMMON.PAGINATION.NEXT_PAGE).should("have.class", COMMON.PAGINATION.DISABLED_CLASS);
    cy.get(COMMON.PAGINATION.PAGE_ITEMS).first().click();
    cy.log(messages.ui.nextPageDisabledCheck);
  }

  pageSizeRecordCountCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      cy.get(COMMON.PAGINATION.PAGE_SIZE_SELECT).click();
      cy.get(COMMON.SELECT.VISIBLE_DROPDOWN)
        .contains(COMMON.SELECT.OPTION, d.pageSize).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).its("length").should("be.at.most", Number(d.pageSize));
      cy.log(messages.ui.pageSizeRecordCountCheck);
    });
  }

  pageSizeDataIntegrityCheck() {
    this.designationIdDataCheck();
    cy.log(messages.ui.pageSizeDataIntegrityCheck);
  }

  createPageTitleAndBreadcrumbCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      [d.breadcrumbHome, d.breadcrumbConfiguration, d.breadcrumbDesignation, d.breadcrumbCreate]
        .forEach((text) => cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, text).should("be.visible"));
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.createPageNavigationCheck);
    });
  }

  checkValidInput(input, value, message) {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.formController(input).type(value).should("have.value", value);
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(message);
  }

  validEnglishNameCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) =>
      this.checkValidInput(COMMON.INPUTS.DESIGNATION_NAME_EN, d.nameEn, messages.ui.validEnglishInputCheck));
  }

  validBanglaNameCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) =>
      this.checkValidInput(COMMON.INPUTS.DESIGNATION_NAME_BN, d.nameBn, messages.ui.validBanglaInputCheck));
  }

  clearEnglishNameValidation() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN).type(d.nameEn).clear();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN)
        .should("have.class", COMMON.FORM.INVALID_CONTROL_CLASS);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.clearedEnglishValidationCheck);
    });
  }

  clearOptionalBanglaNameCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN).type(d.nameEn);
      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_BN).type(d.nameBn).clear().should("have.value", "");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.optionalBanglaClearedCheck);
    });
  }

  changeStatusBeforeSubmit() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      this.selectStatusOption(d.selectStatus);
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("contain.text", d.selectStatus);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.statusChangeBeforeSubmitCheck);
    });
  }

  createAndSearch(name, status) {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN).type(name);
    this.selectStatusOption(status);
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.YES).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(name);
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
    cy.get(COMMON.TABLE.BODY).then(($body) => {
      if ($body.find(COMMON.TABLE.VISIBLE_ROW).length === 0) {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(name);
        cy.imsId(COMMON.BUTTONS.SEARCH).click();
      }
    });
    cy.get(COMMON.TABLE.VISIBLE_ROWS)
      .should("have.length.greaterThan", 0)
      .first()
      .should("contain.text", name)
      .and("contain.text", status);
  }

  selectedStatusSubmissionCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      this.createAndSearch(`${d.selectedStatusNamePrefix} ${this.runId}`, d.selectStatus);
      cy.log(messages.ui.selectedStatusSubmissionCheck);
    });
  }

  submitConfirmationDialogCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN).type(`${d.confirmationNamePrefix} ${this.runId}`);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).should("be.visible");
      cy.imsId(COMMON.CONFIRMATION.NO).should("be.visible").click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.confirmationDialogCheck);
    });
  }

  cancelSubmissionCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN).type(d.nameEn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.NO).click();
      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN).should("have.value", d.nameEn);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.submissionCancelledCheck);
    });
  }

  confirmSuccessfulCreationCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      const name = `${d.confirmationNamePrefix} ${this.runId}`;
      this.createAndSearch(name, d.statusSelect);
      cy.log(messages.ui.creationConfirmedCheck);
    });
  }

  checkTextInput(input, value, message) {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.formController(input).type(value, { delay: 0 }).then(($input) => {
      expect(String($input.val()).length).to.be.greaterThan(0);
    });
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(message);
  }

  englishNameLeadingTrailingSpacesCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) =>
      this.checkTextInput(COMMON.INPUTS.DESIGNATION_NAME_EN, `  ${d.nameEn}  `, messages.ui.englishTrimInputCheck));
  }
  banglaNameLeadingTrailingSpacesCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) =>
      this.checkTextInput(COMMON.INPUTS.DESIGNATION_NAME_BN, `  ${d.nameBn}  `, messages.ui.banglaTrimInputCheck));
  }
  englishNameSpecialCharacterValidation() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) =>
      this.checkTextInput(COMMON.INPUTS.DESIGNATION_NAME_EN, d.specialCharacterNameEn, messages.ui.englishSpecialCharacterCheck));
  }
  banglaNameSpecialCharacterValidation() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) =>
      this.checkTextInput(COMMON.INPUTS.DESIGNATION_NAME_BN, d.specialCharacterNameBn, messages.ui.banglaSpecialCharacterCheck));
  }
  englishNameMaximumLengthCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) =>
      this.checkTextInput(COMMON.INPUTS.DESIGNATION_NAME_EN, d.longNameEn, messages.ui.englishMaximumLengthCheck));
  }
  banglaNameMaximumLengthCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) =>
      this.checkTextInput(COMMON.INPUTS.DESIGNATION_NAME_BN, d.longNameBn, messages.ui.banglaMaximumLengthCheck));
  }

  viewCellDataCheck(columnDataKey, message) {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      cy.imsId(COMMON.BUTTONS.RESET).click();
      this.getColumnIndex(d[columnDataKey]).then((columnIndex) => {
        cy.get(COMMON.TABLE.VISIBLE_ROWS)
          .filter((_, row) => row.cells[columnIndex].innerText.trim().length > 0)
          .first().then(($row) => {
            const value = $row[0].cells[columnIndex].innerText.trim();
            cy.wrap($row).find(COMMON.TABLE.ACTION_TOGGLE).click();
            cy.imsId(COMMON.GRID.ACTION_VIEW).click();
            cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, value).should("be.visible");
            cy.imsId(COMMON.BUTTONS.GO_BACK).click();
          });
      });
    });
    cy.log(message);
  }

  viewEnglishNameDataCheck() { this.viewCellDataCheck("nameEnColumn", messages.ui.viewEnglishNameCheck); }
  viewBanglaNameDataCheck() { this.viewCellDataCheck("nameBnColumn", messages.ui.viewBanglaNameCheck); }
  viewDesignationIdCheck() { this.viewCellDataCheck("designationIdColumn", messages.ui.viewRecordIdCheck); }
  viewDesignationStatusCheck() { this.viewCellDataCheck("statusColumn", messages.ui.viewRecordStatusCheck); }

  editWithoutSubmitDataIntegrityCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      this.getColumnIndex(d.nameEnColumn).then((columnIndex) => {
        cy.get(COMMON.TABLE.VISIBLE_ROWS).first().then(($row) => {
          const original = $row[0].cells[columnIndex].innerText.trim();
          cy.wrap($row).find(COMMON.TABLE.ACTION_TOGGLE).click();
          cy.imsId(COMMON.GRID.ACTION_EDIT).click();
          cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN).clear().type(d.unsavedNameEn);
          cy.imsId(COMMON.BUTTONS.GO_BACK).click();
          cy.get(COMMON.TABLE.VISIBLE_ROWS).first().should("contain.text", original);
        });
      });
      cy.log(messages.ui.editCancelledCheck);
    });
  }

  updatedDesignationListDataCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      const name = `${d.updatedNamePrefix} ${this.runId}`;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN).clear().type(name);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(name);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).first().should("contain.text", name);
      cy.log(messages.ui.editUpdatedCheck);
    });
  }

  designationStatusLifecycleCheck() {
    cy.fixture(this.test_data).then(({ mfiAdmin: { createDesignationFrom: d } }) => {
      this.createAndSearch(`${d.activeNamePrefix} ${this.runId}`, d.statusSelect);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      const inactiveName = `${d.inactiveNamePrefix} ${this.runId}`;
      this.createAndSearch(inactiveName, d.selectStatus);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).click();
      cy.get(COMMON.SELECT.VISIBLE_DROPDOWN)
        .contains(COMMON.SELECT.OPTION, d.statusSelect).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(inactiveName);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).first()
        .should("contain.text", inactiveName).and("contain.text", d.statusSelect);
      cy.log(messages.ui.editStatusUpdatedCheck);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();

    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();

    cy.log(messages.ui.languageSwitch);
  }
}

export const create_designation = new DesignationCreation();
